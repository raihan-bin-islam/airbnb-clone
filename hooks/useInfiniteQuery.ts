import { fetcher } from "lib/utils";
import useSWRInfinite from "swr/infinite";

const useInfiniteQuery = (
  query: string,
  initialData: { data: []; after?: {} }
) => {
  const getKey = (
    pageIndex: number,
    previousPageData: { data: []; after: number }
  ) => {
    if (previousPageData && !previousPageData.after) return null;
    if (pageIndex === 0) return query;

    const search = query.includes("?");
    return `${query}${search ? "&" : "?"}cursor=${encodeURIComponent(
      JSON.stringify(previousPageData.after)
    )}`;
  };

  const {
    data: results,
    error,
    size,
    setSize,
  } = useSWRInfinite(getKey, fetcher);

  const fetchNextPage = () => setSize((size) => size + 1);
  const flattenPages = results?.flatMap((page) => page.data) ?? [];
  const hasNextPage = Boolean(results?.[size - 1]?.after);
  const isFetchingInitialData = !results && !error;
  const isFetchingNextPage =
    isFetchingInitialData ||
    (size > 0 && results && typeof results[size - 1] === "undefined");

  return {
    data: flattenPages,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingInitialData,
    isFetchingNextPage,
  };
};

export default useInfiniteQuery;
