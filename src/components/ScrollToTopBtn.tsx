import { Box, Fade } from "@mui/material";
import { ReactNode } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface ScrollTopProps {
  window: Window & typeof globalThis;
  children: ReactNode;
}

export const ScrollTop: React.FC<ScrollTopProps> = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};
