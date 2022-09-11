export const fontSize = {
  primary: "16px",
  small: "12px",
  h1: "36px",
  h3: "24px",
  h4: "16px",
};

// default desktop - anything > 768px
const SCREEN_SIZES = {
  mobile: "480px",
  tablet: "768px",
  smallDesktop: "1100px",
};

export const devices = {
  smallDesktop: `(max-width:${SCREEN_SIZES.smallDesktop})`,
  tablet: `(max-width:${SCREEN_SIZES.tablet})`,
  mobile: `(max-width:${SCREEN_SIZES.mobile})`,
};

export const sidebar = {
  width: "220px",
};
