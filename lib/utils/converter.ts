import { toJpeg, toPng, toSvg } from "html-to-image";
import { Options } from "html-to-image/lib/types";

export type ExportSettings = {
  scale: number;
  format: ".png" | ".jpeg" | ".svg";
  title?: string;
};

const filter = (node: HTMLElement) => {
  const exclusionClasses = ["remove-me", "secret-div"];
  return !exclusionClasses.some((classname) =>
    node.classList?.contains(classname)
  );
};

export const downloadHtmlElement = async (
  node: HTMLElement,
  settings: ExportSettings = { format: ".png", scale: 1 }
) => {
  let imgUrl: string | undefined;

  const options: Options = {
    pixelRatio: settings.scale,
    cacheBust: true,
    filter,
  };

  switch (settings.format) {
    case ".png":
      imgUrl = await toPng(node, options);
      break;
    case ".jpeg":
      imgUrl = await toJpeg(node, {
        ...options,
        quality: 0.95,
        backgroundColor: "white",
      });
      break;
    case ".svg":
      imgUrl = await toSvg(node, options);
      break;
    default:
      break;
  }

  const date = new Date(Date.now());
  let title =
    settings.title && settings.title.length
      ? settings.title
      : `untitled-${Math.floor(date.getTime() / 1000)}`;

  if (imgUrl) {
    const filename = `${title}${settings.format}`;
    const link = document.createElement("a");
    link.hidden = true;
    link.download = filename;
    link.href = imgUrl;
    link.click();
    link.remove();
  }
};
