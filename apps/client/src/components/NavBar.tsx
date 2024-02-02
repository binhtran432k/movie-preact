import { BROWSE_PATH, SEARCH_PATH } from "@/constants/paths";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import clsx from "clsx/lite";
import { memo } from "preact/compat";
import { Link } from "wouter";

const NavBar = memo(() => {
  const scrollTop = useScrollTop();

  return (
    <div
      id="navbar"
      className={clsx(
        // Change background to black when scroll top bigger than 100px
        scrollTop > 100 && "bg-black",
        "fixed px-3 py-1 w-full transition-colors duration-500 flex justify-between",
      )}
    >
      <h1 className="font-bold text-lg text-red-500 hover:text-red-400">
        <Link href={BROWSE_PATH} id="logo">
          Movie App
        </Link>
      </h1>
      <Link href={SEARCH_PATH}>
        <MagnifyingGlassIcon className="h-6 text-gray-300 hover:text-gray-200" />
      </Link>
    </div>
  );
});

export default NavBar;
