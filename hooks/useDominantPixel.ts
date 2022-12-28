import { buildRgb, quantization, RGBToHex } from "lib/color-quantizatoin";
import { useEffect, useState } from "react";

type HEX = {
  primary: string;
  secondary: string;
};

type QUANTIZATION = {
  src: string;
  depth: number;
};

const useDominantPixel = ({
  src,
  depth,
}: QUANTIZATION): [string[] | undefined] => {
  const [hex, setHex] = useState<string[]>();

  useEffect(() => {
    let img = new (window as any).Image();
    img.crossOrigin = `Anonymous`;
    img.src = src;

    img.onload = () => {
      let defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement("canvas") as HTMLCanvasElement,
        context =
          canvas.getContext &&
          canvas.getContext("2d", {
            alpha: true,
            desynchronized: false,
            colorSpace: "srgb",
            willReadFrequently: true,
          }),
        data,
        width,
        height;

      if (!context) {
        return defaultRGB;
      }

      height = canvas.height =
        img.naturalHeight || img.offsetHeight || img.height;
      width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

      context.drawImage(img, 0, 0);

      try {
        data = context.getImageData(0, 0, width, height);
      } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
      }

      const rgbValues = buildRgb(data.data);
      const colors = quantization(rgbValues, depth);
      const hexCodes = colors.map(({ r, g, b }) => {
        return RGBToHex({ r, g, b });
      });

      setHex(hexCodes);
    };
  }, [depth, src]);

  return [hex];
};

export default useDominantPixel;
