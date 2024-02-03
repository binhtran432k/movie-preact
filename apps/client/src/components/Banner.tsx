import { getImageUrlFromPath } from "@/utils/api";
import { truncateString } from "@/utils/string";
import { memo } from "preact/compat";

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
    const imageUrl = getImageUrlFromPath(backdrop_path);

    return (
      <div
        className="h-[18rem] bg-[image:var(--bg-image)] bg-[position:center_30%] bg-cover flex items-end"
        style={{
          "--bg-image":
            imageUrl &&
            `linear-gradient(#0000001f, #0000001f), url('${imageUrl}')`,
        }}
      >
        {name && getBannerBody(name, overview)}
      </div>
    );
  },
);

function getBannerBody(name: string, overview?: string) {
  return (
    <div className="container mx-auto pb-12 px-4">
      <div className="max-w-[20rem]">
        <h2 className="text-3xl font-bold mb-7">{name}</h2>
        <div className="flex gap-x-2 text-sm font-bold mb-1">
          <button
            type="button"
            className="bg-gray-300 bg-opacity-30 hover:bg-opacity-50 py-0.5 px-4 rounded"
          >
            Play
          </button>
          <button
            type="button"
            className="bg-gray-300 bg-opacity-30 hover:bg-opacity-50 py-0.5 px-4 rounded"
          >
            My List
          </button>
        </div>
        <p className="text-xs font-bold">
          {overview && truncateString(overview, 150)}
        </p>
      </div>
    </div>
  );
}

export default Banner;
