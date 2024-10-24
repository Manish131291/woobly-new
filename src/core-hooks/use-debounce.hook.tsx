import { useEffect, useState } from "react";

let debouseTimerForFunc: any;
export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * @description for call function with debounce
 * @param func
 * @param delay
 * @returns func
 */
export const useDebounceFunc = (func: any, delay = 1000) => {
  return (...args: any[]) => {
    clearTimeout(debouseTimerForFunc);

    debouseTimerForFunc = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const uniqueElem = (array: any, key: any) => {
  return array.filter((elem: any, index: any) => {
    return array.findLastIndex((s: any) => s[key] === elem[key]) === index;
  });
};
