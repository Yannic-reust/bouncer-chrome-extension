chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    const currentURL = currentTab.url;
    document.getElementById("url").textContent = currentURL;
  });