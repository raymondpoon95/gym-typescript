import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // whenever the media.matches becomes the opposite of matches we need to update - setMatches
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);

    return () => removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
