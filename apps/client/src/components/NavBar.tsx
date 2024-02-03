import { PATH_BROWSE, PATH_SEARCH } from "@/constants/paths";
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
        "fixed w-full transition-colors duration-500",
      )}
    >
      <div className="container mx-auto px-3 py-1 flex justify-between">
        <h1 className="font-bold text-lg text-red-500 hover:text-red-400">
          <Link href={PATH_BROWSE} id="logo">
            Movie App
          </Link>
        </h1>
        <Link href={PATH_SEARCH}>
          <MagnifyingGlassIcon className="h-6 text-gray-100 hover:text-white" />
        </Link>
      </div>
    </div>
  );
});

export default NavBar;
