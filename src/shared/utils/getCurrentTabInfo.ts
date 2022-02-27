export default function (): Promise<chrome.tabs.Tab> {
  return new Promise((res) => {
    const queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (d) => {
      res(d[0]);
    });
  });
}
