import { BROWSE_PATH, SEARCH_PATH } from "@/constants/paths";
import { useHashLocation } from "@/hooks/use-hash-location";
import Browse from "@/pages/browse/Browse";
import Search from "@/pages/search/Search";
import { Route, Router } from "wouter";

export function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path={BROWSE_PATH} component={Browse} />
      <Route path={SEARCH_PATH} component={Search} />
    </Router>
  );
}
