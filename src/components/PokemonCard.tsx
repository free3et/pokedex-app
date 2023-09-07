import React from "react";
import {
  CardMedia,
  CardActions,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useGetPokemonByNameQuery } from "../redux/services/pokemonSlice";
import { SkeletonOnLoadingSingle } from "./SkeletonOnLoading";
import { ErrorComponent } from "./ErrorComponent";
import DefaultImg from "../assets/pokemon-logo.svg";

interface PokemonCardProps {
  pokemonName: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonName }) => {
  const { data, isLoading, isError } = useGetPokemonByNameQuery(pokemonName);

  if (isLoading) {
    return <SkeletonOnLoadingSingle />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const { name, sprites, types } = data;

  return (
    <Card>
      <Box
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {types.length > 0 &&
          types?.map(
            (
              pokemonType: { type: { name: string; url: string } },
              index: number
            ) => (
              <Chip
                icon={<CatchingPokemonIcon />}
                size="medium"
                label={pokemonType?.type?.name}
                color="warning"
                sx={{
                  m: 0.5,
                  "& .MuiChip-label": {
                    fontSize: "14px",
                  },
                }}
                key={index}
              />
            )
          )}
      </Box>
      <CardMedia
        component="img"
        height="194"
        image={
          sprites?.other?.dream_world?.front_default ||
          sprites?.other.home.front_shiny ||
          sprites.front_default ||
          DefaultImg
        }
        alt={name}
        style={{ objectFit: "contain" }}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:last-child": {
            paddingBottom: "5px",
          },
        }}
      >
        <CardActions>
          <Typography variant="h6" color="text.secondary" pl="8px">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};
