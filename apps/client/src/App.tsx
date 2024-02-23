import { PATH_BROWSE, PATH_SEARCH } from "@/constants/paths";
import { useHashLocation } from "@/hooks/use-hash-location";
import Browse from "@/pages/browse/Browse";
import Search from "@/pages/search/Search";
import { Route, Router } from "wouter";

export function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path={PATH_BROWSE} component={Browse} />
      <Route path={PATH_SEARCH} component={Search} />
    </Router>
  );
}
