import { Box, Chip } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { PokemonChipTypography } from "./PokemonChipTypography";
import useMediaQuery from "@mui/material/useMediaQuery";

interface PokemonTypesProps {
  type: {
    name: string;
  };
}

export const PokemonTypes: React.FC<{
  types: PokemonTypesProps[];
}> = ({ types }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ display: "flex" }}>
      <PokemonChipTypography title="Types" />
      {types.length > 0 &&
        types?.map((pokemonType, index) => (
          <Chip
            icon={<CatchingPokemonIcon />}
            label={pokemonType?.type?.name}
            color="warning"
            sx={{ margin: isMobile ? 1 : 2, p: 1, fontSize: "14px" }}
            key={index}
          />
        ))}
    </Box>
  );
};
