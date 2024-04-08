"use client";
import { useState, useEffect } from "react";

/**
 * A hook that listens for matches to a CSS media query.
 * @param query - The CSS media query string.
 * @returns Whether the media query matches.
 */
export const useMediaQuery = (query: string): boolean => {
  // Hold the matching state
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Initialize a MediaQueryList object
    const media: MediaQueryList = window.matchMedia(query);

    // Update the state with the current match
    const listener = () => setMatches(media.matches);

    // Check if the addListener method is supported (for older browsers)
    // Otherwise, use addEventListener
    if (media.addListener) {
      media.addListener(listener);
    } else {
      media.addEventListener("change", listener);
    }

    // Set the initial match state
    setMatches(media.matches);

    // Cleanup by removing the listener
    return () => {
      if (media.removeListener) {
        media.removeListener(listener);
      } else {
        media.removeEventListener("change", listener);
      }
    };
  }, [query]);

  return matches;
};
