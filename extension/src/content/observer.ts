type UrlChangeCallback = (url: string) => void;

export function observeUrlChanges(callback: UrlChangeCallback) {
  let currentUrl = window.location.href;

  const observer = new MutationObserver(() => {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;
      callback(currentUrl);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return observer;
}