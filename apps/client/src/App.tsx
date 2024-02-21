import { PATH_BROWSE, PATH_SEARCH } from "@/constants/paths";
import Browse from "@/pages/browse/Browse";
import Search from "@/pages/search/Search";
import { Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

export function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path={PATH_BROWSE} component={Browse} />
      <Route path={PATH_SEARCH} component={Search} />
    </Router>
  );
}
