import { SearchContext } from "@/store/SearchProvider";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { memo, useContext } from "preact/compat";

const SearchForm = memo(() => {
  const { value, setValue } = useContext(SearchContext);
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      onReset={() => setValue("")}
      className="flex relative h-10 w-full"
    >
      <button
        type="submit"
        className="absolute left-1 top-1/2 translate-y-[-50%]"
      >
        <MagnifyingGlassIcon className="h-5 text-gray-300 hover:text-gray-100" />
      </button>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        className="bg-black border border-gray-300 rounded-sm grow px-6"
      />
      {value && (
        <button
          type="reset"
          className="absolute right-1 top-1/2 translate-y-[-50%]"
        >
          <XMarkIcon className="h-5 text-gray-300 hover:text-gray-100" />
        </button>
      )}
    </form>
  );
});

export default SearchForm;
