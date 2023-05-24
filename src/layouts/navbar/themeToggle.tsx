export const prerender = true;

import { signal, useSignalEffect } from "@preact/signals";

import { Moon, Sun } from "lucide-preact";

type theme = "light" | "dark";
const currentTheme = signal<theme>("dark");

const ThemeToggle = () => {
  useSignalEffect(() => {
    if (localStorage.getItem("theme")) {
      const currentThemeLocal = localStorage.getItem("theme") as theme;
      currentTheme.value = currentThemeLocal;
    }
  });

  const setThemeToggle = () => {
    const htmlRoot = document.querySelector("html");
    if (currentTheme.value == "light") {
      currentTheme.value = "dark";
      htmlRoot.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      currentTheme.value = "light";
      htmlRoot.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div class="inline-block w-10">
        <button
          class="btn-base-100 rounded-btn btn h-10 w-10 transition-all duration-300 ease-in-out"
          onClick={setThemeToggle}
        >
          <span class="m-auto text-3xl">
            {currentTheme.value == "dark" ? <Sun /> : <Moon />}
          </span>
          <span class="sr-only">Theme toggle</span>
        </button>
      </div>
    </>
  );
};
export default ThemeToggle;
