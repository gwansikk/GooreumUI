const color = {
  light: "#1ea7fd",
  dark: "#4D6B7D",
  default: "#37352F",
  grey: "#787774",
  brown: "#9F6B53",
  orange: "#D9730D",
  yellow: "#CB912F",
  green: "#448361",
  blue: "#337EA9",
  purple: "#9065B0",
  pink: "#C14C8A",
  red: "#D44C47",
} as const;

const backgroundColor = {
  grey: "#F1F1EF",
  brown: "#F4EEEE",
  orange: "#FAEBDD",
  yellow: "#FBF3DB",
  green: "#EDF3EC",
  blue: "#E7F3F8",
  purple: "#F6F3F9",
  pink: "#FAF1F5",
  red: "#FDEBEC",
} as const;

const padding = {
  sm: "8px 24px",
  md: "12px 28px",
  lg: "16px 32px",
} as const;

const radius = "8px";

const theme = {
  color,
  backgroundColor,
  padding,
  radius,
};

export default theme;
