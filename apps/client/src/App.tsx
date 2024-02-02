import { BROWSE_PATH, SEARCH_PATH } from "@/constants/paths";
import Browse from "@/pages/browse/Browse";
import Search from "@/pages/search/Search";
import { Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

export function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path={BROWSE_PATH} component={Browse} />
      <Route path={SEARCH_PATH} component={Search} />
    </Router>
  );
}
