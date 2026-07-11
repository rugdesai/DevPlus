import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";

import DevPlusCard from "../components/DevPlusCard";

let root: Root | null = null;
let container: HTMLDivElement | null = null;

function findInjectionPoint(): HTMLElement | null {
  const selectors = [
    ".js-profile-editable-area",
    ".Layout-sidebar .BorderGrid",
    ".Layout-sidebar",
  ];

  for (const selector of selectors) {
    const element = document.querySelector(selector);

    if (element instanceof HTMLElement) {
      return element;
    }
  }

  return null;
}

export function injectDevPlus() {
  // Already mounted
  if (root) {
    return;
  }

  const target = findInjectionPoint();

  if (!target) {
    return;
  }

  container = document.createElement("div");
  container.id = "devplus-root";
  container.style.marginTop = "16px";

  target.appendChild(container);

  root = createRoot(container);

  root.render(<DevPlusCard />);
}

export function removeDevPlus() {
  if (root) {
    root.unmount();
    root = null;
  }

  if (container) {
    container.remove();
    container = null;
  }
}