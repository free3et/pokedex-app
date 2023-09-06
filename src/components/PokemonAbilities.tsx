import { Chip, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import BoltIcon from "@mui/icons-material/Bolt";
import { PokemonChipTypography } from "./PokemonChipTypography";

interface PokemonAbilitiesProps {
  ability: {
    name: string;
  };
}

export const PokemonAbilities: React.FC<{
  abilities: PokemonAbilitiesProps[];
}> = ({ abilities }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isPhone = useMediaQuery("(max-width: 520px)");

  return (
    <Box sx={{ display: "flex", flexDirection: isPhone ? "column" : "row" }}>
      <PokemonChipTypography title="Ability" />
      {abilities.length > 0 &&
        abilities?.map((item, index) => (
          <Chip
            icon={<BoltIcon />}
            label={item?.ability?.name.replace("-", " ")}
            color="primary"
            sx={{ margin: isMobile ? 1 : 2, p: 1, fontSize: "14px" }}
            key={index}
          />
        ))}
    </Box>
  );
};
