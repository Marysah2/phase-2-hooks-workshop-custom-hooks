// src/exercise/01.js
import { useEffect, useRef } from "react";

function useDocumentTitle(title) {
  const defaultTitle = useRef(document.title);

  // Use provided title OR default "Welcome to the home page!"
  const titleToUse = title !== undefined ? title : "Welcome to the home page!";

  useEffect(() => {
    document.title = titleToUse;
  }, [titleToUse]);

  // Restore original title on unmount
  useEffect(() => {
    return () => {
      document.title = defaultTitle.current;
    };
  }, []);
}

// NAMED EXPORT — REQUIRED
export { useDocumentTitle };
