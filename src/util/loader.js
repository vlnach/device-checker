export function loader() {
  const wrapper = document.createElement("div");
  wrapper.className = "loader-container";

  wrapper.innerHTML = `
    <div class="loader">
      <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64" />
        <circle class="dot" cx="40" cy="40" r="6" />
      </svg>
    </div>
  `;

  return wrapper;
}
