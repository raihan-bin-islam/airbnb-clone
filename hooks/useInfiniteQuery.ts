import useSWRInfinite from "swr";

const useInfiniteQuery = (query: string, initialData: []) => {
  const {} = useSWRInfinite((pageIndex: number, previousPageData: []) => {});
};

export default useInfiniteQuery;
