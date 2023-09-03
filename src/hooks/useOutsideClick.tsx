import React, { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: (event: Event) => void,
  state: boolean
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!state) return;

    const handler: EventListener = (event) => {
      const { current: target } = ref;
      if (target && !target.contains(event.target as HTMLElement)) {
        callbackRef.current(event);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [state]);
};
