export async function getUserData() {
  const ua = navigator.userAgent.toLowerCase();
  const isMac = ua.includes("mac");
  const isWin = ua.includes("windows");
  const isAndroid = ua.includes("android");
  const isIOS = ua.includes("iphone") || ua.includes("ipad");

  let device = "device";
  device = isMac
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
    if (navigator.getBattery) {
      const battery = await navigator.getBattery();
      if (battery.level < 0.2 && !battery.charging) {
        batteryStatus = " not charging";
      }
    }
  } catch (_) {
    console.warn(
      "Battery API not supported or failed to retrieve battery status."
    );
    batteryStatus = " (battery status unavailable)";
  }

  return `${device}${batteryStatus}`.trim();
}
