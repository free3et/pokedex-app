import React from "react";
import { Paper, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { PokemonCard } from "./PokemonCard";

interface FilteredPokemons {
  [key: string]: string[];
}

interface PokemonsListProps {
  filteredPokemons: FilteredPokemons;
  clearSearchResults: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const PokemonListItems: React.FC<PokemonsListProps> = ({
  filteredPokemons,
  clearSearchResults,
}) => {
  return (
    <>
      <Button
        variant="contained"
        color="info"
        onClick={clearSearchResults}
        size="large"
        sx={{
          display: "block",
          maxWidth: "200px",
          m: "0 auto 1.5rem",
        }}
      >
        Go back
      </Button>

      <Grid container spacing={4}>
        {Object.entries(filteredPokemons).map(([pokemonName]) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonName}>
            <Link to={`/pokemons/${pokemonName}`}>
              <Item>
                {filteredPokemons[pokemonName] && (
                  <PokemonCard pokemonName={pokemonName} />
                )}
              </Item>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
