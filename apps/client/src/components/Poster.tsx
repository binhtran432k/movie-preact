import { getImageUrlFromPath } from "@/utils/api";
import clsx from "clsx/lite";

export default function Poster({
  imagePath,
  alt,
  active,
  onClick,
}: {
  imagePath: string;
  alt: string;
  active?: boolean;
  onClick: (active: boolean) => void;
}) {
  const imageUrl = getImageUrlFromPath(imagePath);
  return (
    <button type="button" onClick={() => onClick(Boolean(active))}>
      <img
        src={imageUrl}
        alt={alt}
        className={clsx(
          "min-w-[8rem] hover:scale-110 transition-transform",
          active && "brightness-50",
        )}
      />
    </button>
  );
}
