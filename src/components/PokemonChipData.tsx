import React from "react";
import { Chip, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PokemonChipTypography } from "./PokemonChipTypography";

enum Colors {
  Default = "default",
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
}

interface PokemonChipDataProps {
  title: string;
  icon: React.ReactElement;
  label: string;
  color: Colors;
}

export const PokemonChipData: React.FC<PokemonChipDataProps> = ({
  title,
  icon,
  label,
  color,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box sx={{ display: "flex" }}>
      <PokemonChipTypography title={title} />
      <Chip
        icon={icon}
        label={label}
        size="medium"
        color={color}
        sx={{
          margin: isMobile ? 1 : 2,
          p: 1,
          "& .MuiChip-label": {
            fontSize: "16px",
          },
        }}
      />
    </Box>
  );
};
