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

  try {
    if ("getBattery" in navigator) {
      const battery = await navigator.getBattery();
      if (battery.level < 0.2 && !battery.charging) {
        batteryStatus = " (low battery)";
      }
    } else {
      batteryStatus = " (battery not supported)";
    }
  } catch (error) {
    console.warn("Battery API failed:", error);
    batteryStatus = " (battery check failed)";
  }
  getUserData().then(console.log);

  return `${device}${batteryStatus}`;
}
