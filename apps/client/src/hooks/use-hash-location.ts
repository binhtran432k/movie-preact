import { useLocationProperty } from "wouter/use-browser-location";

function hashLocation() {
  return `/${location.hash.replace(/^#?\/?/, "")}`;
}

function navigate(to: string, { state = null } = {}) {
  const [newHash, search] = `#/${to.replace(/^#?\/?/, "")}`.split("?");
  const newSearch = search ? `?${search}` : "";
  location.hash = newHash;
  history.replaceState(state, "", `${location.pathname}${newSearch}${newHash}`);
}

export const useHashLocation = () => {
  const location = useLocationProperty(hashLocation);
  return [location, navigate];
};
