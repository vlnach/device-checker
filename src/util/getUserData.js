export async function getUserData() {
  const ua = navigator.userAgent.toLowerCase();
  const isMac = ua.includes("mac");
  const isWin = ua.includes("windows");
  const isAndroid = ua.includes("android");
  const isIOS = ua.includes("iphone") || ua.includes("ipad");

  let device = isMac
    ? "macbook"
    : isWin
    ? "windows laptop"
    : isAndroid
    ? "android phone"
    : isIOS
    ? "iphone"
    : "device";

  let batteryStatus = "";

  return `${device}${batteryStatus}`;
}
