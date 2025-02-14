import localFont from "next/font/local";

export const jeju = localFont({
  src: "./JejuMyeongjo-Regular.ttf",
  display: "swap",
  variable: "--font-jeju",
  weight: "400",
});

export const roadRage = localFont({
  src: "./RoadRage-Regular.ttf",
  display: "swap",
  weight: "100 700",
  variable: "--font-road-rage",
});

export const roboto = localFont({
  src: "./Roboto-VariableFont_wdth,wght.ttf",
  display: "swap",
  weight: "100 700",
  variable: "--font-roboto",
});
