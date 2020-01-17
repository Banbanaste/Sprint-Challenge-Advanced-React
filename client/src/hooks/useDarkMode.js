import React, { useState, useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = value => {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", value);

  useEffect(() => {
    isDarkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};
