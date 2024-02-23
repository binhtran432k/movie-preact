import NavBar from "@/components/NavBar";
import ResultList from "@/components/ResultList";
import SearchForm from "@/components/SearchForm";
import { MovieProvider } from "@/store/MovieProvider";
import { SearchProvider } from "@/store/SearchProvider";

export default function Search() {
  return (
    <div className="mb-16">
      <NavBar />
      <SearchProvider>
        <div className="container mx-auto p-4 mt-20">
          <div className="max-w-[30rem] m-auto mb-10">
            <SearchForm />
          </div>
          <MovieProvider>
            <ResultList />
          </MovieProvider>
        </div>
      </SearchProvider>
    </div>
  );
}
