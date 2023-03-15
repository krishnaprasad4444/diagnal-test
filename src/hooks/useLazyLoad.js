import { useEffect, useCallback } from "react";

import { debounce } from "../helpers";

const INTERSECTION_THRESHOLD = 600;
const LOAD_DELAY_MS = 0;

const useLazyLoad = (triggerRef, loading, fetchData, options) => {
  const _handleEntry = async (entry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;
    if (
      !loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      fetchData();
    }
  };

  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect, options);
      observer.observe(container);
      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return [];
};

export default useLazyLoad;
