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
};

export const devices = {
    tablet: `(max-width:${SCREEN_SIZES.tablet})`,
    mobile: `(max-width:${SCREEN_SIZES.mobile})`
};
