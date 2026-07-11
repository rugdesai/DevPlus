import { injectDevPlus, removeDevPlus } from "./inject";
import { observeUrlChanges } from "./observer";
import { isProfilePage } from "../utils/github";

function updateExtension() {
  if (isProfilePage()) {
    injectDevPlus();
  } else {
    removeDevPlus();
  }
}

// Initial page
updateExtension();

// GitHub SPA navigation
observeUrlChanges(() => {
  updateExtension();
});