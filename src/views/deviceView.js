export function createDeviceView() {
  const root = document.createElement("div");
  root.className = "device-view";

  const title = document.createElement("h2");
  title.textContent = "Analyzing your device…";

  const info = document.createElement("p");
  info.textContent = "Detecting…";

  const button = document.createElement("button");
  button.textContent = "Continue";
  button.disabled = true;

  root.append(title, info, button);

  function setDeviceInfo(text) {
    info.textContent = `Your device: ${text}`;
  }

  function enableButton() {
    button.disabled = false;
  }

  function onContinue(handler) {
    button.addEventListener("click", handler);
  }

  return { root, setDeviceInfo, enableButton, onContinue };
}
