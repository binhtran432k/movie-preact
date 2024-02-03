import { getImageUrlFromPath } from "@/utils/api";
import { truncateString } from "@/utils/string";
import { memo } from "preact/compat";
import Button from "./Button";

const BANNER_HEIGHT = "18rem";
const BACKDROP_COLOR = "#0000001f";

const Banner = memo(
  ({
    backdrop_path,
    name,
    overview,
  }: {
    backdrop_path?: string;
    name?: string;
    overview?: string;
  }) => {
    if (!backdrop_path) {
      return <div className={`h-[${BANNER_HEIGHT}]`} />;
    }

    const imageUrl = getImageUrlFromPath(backdrop_path);

    return (
      <div
        className={`h-[${BANNER_HEIGHT}] bg-[image:var(--bg-image)] bg-[position:center_30%] bg-cover flex items-end`}
        style={{
          "--bg-image": `linear-gradient(${BACKDROP_COLOR}, ${BACKDROP_COLOR}), url('${imageUrl}')`,
        }}
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

export default Banner;
