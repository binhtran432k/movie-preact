import { SearchContext } from "@/store/SearchProvider";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, useCallback, useContext } from "preact/compat";

export default function SearchForm() {
  const { value, setValue } = useContext(SearchContext);

  const handleSubmit = useCallback((e: SubmitEvent) => {
    e.preventDefault();
  }, []);

  const handleReset = useCallback(() => setValue(""), []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    [],
  );

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
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
        onChange={handleChange}
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
}
