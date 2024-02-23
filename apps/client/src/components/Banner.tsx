import { getBannerUrlFromPath } from "@/utils/api";
import { truncateString } from "@/utils/string";
import clsx from "clsx/lite";
import { memo } from "preact/compat";
import Button from "./Button";

const BACKDROP_COLOR = "#0000001f";

const Banner = memo(
  ({
    imagePath,
    name,
    overview,
  }: {
    imagePath?: string;
    name?: string;
    overview?: string;
  }) => {
    return (
      <div
        className={clsx(
          imagePath && "bg-[image:var(--bg-image)]",
          "h-[18rem] bg-[position:center_30%] bg-cover flex items-end",
        )}
        style={{ "--bg-image": imagePath && getImagePropertyValue(imagePath) }}
      >
        <div className="container mx-auto pb-12 px-4">
          <div className="max-w-[20rem]">
            <h2 className="text-3xl font-bold mb-7">{name}</h2>
            <div className="flex gap-x-2">
              <Button>Play</Button>
              <Button>My List</Button>
            </div>
            <p className="text-xs font-bold">
              {overview && truncateString(overview, 150)}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

function getImagePropertyValue(imagePath: string) {
  return `linear-gradient(${BACKDROP_COLOR}, ${BACKDROP_COLOR}), url('${getBannerUrlFromPath(
    imagePath,
  )}')`;
}

export default Banner;
