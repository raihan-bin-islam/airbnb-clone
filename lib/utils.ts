export const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json());
};

export const jsToCss = (style: object) => {
  console.log("=============");
  const styles = Object.entries(style);
  // console.log(styles);
  const css = styles
    .map(([k, v]) => {
      k = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      if (typeof v === "object") jsToCss(v);
      return `${k}:${v}`;
    })
    .join(";");

  console.log(css);
};
