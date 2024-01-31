import { navigate, useLocationProperty } from "wouter/use-location";

function hashLocation() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function hashNavigate(to: string) {
  navigate(to);
}

export function useHashLocation() {
  const location = useLocationProperty(hashLocation);
  return [location, hashNavigate];
}
