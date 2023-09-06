import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface PokemonChipTypographyProps {
  title: string;
}

export const PokemonChipTypography: React.FC<PokemonChipTypographyProps> = ({
  title,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Typography
      gutterBottom
      variant="h6"
      component="h4"
      textAlign="center"
      mb="0"
      sx={{
        fontWeight: "bold",
        padding: isMobile ? "16px 16px 0px 0px" : "16px 16px 0",
        fontSize: isMobile ? "16px" : "20px",
      }}
    >
      {title}
    </Typography>
  );
};
