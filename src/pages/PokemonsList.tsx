import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import {
  useGetAllPokemonsQuery,
  useGetPokemonsQuery,
} from "../redux/services/pokemonSlice";
import { PokemonCard } from "../components/PokemonCard";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Box,
  Container,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import { RadioButtons } from "../components/RadioButtons";
import { PokemonSelectTypes } from "../components/PokemonSelectTypes";
import { SkeletonOnLoading } from "../components/SkeletonOnLoading";
import { ErrorComponent } from "../components/ErrorComponent";
import { setPokemonTypes } from "../redux/services/pokemonSlice";
import { pokemonsDataTypes } from "../components/PokemonsDataTypes";
import { SearchInput } from "../components/SearchInput";
import { PokemonListItems } from "../components/PokemonListItems";
import { PaginationComponent } from "../components/PaginationComponent";

interface PokemonsListProps {
  name: string;
  url: string;
  types: string[];
}

interface FilteredPokemons {
  [key: string]: string[];
}

const Navigation = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.65)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backdropFilter: "blur(15px)",
  height: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const PokemonsList = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<FilteredPokemons>(
    {}
  );
  const [touched, setTouched] = useState<boolean>(false);

  const pokemonData = useAppSelector((state) => state.pokemons.pokemons);
  const dispatch = useDispatch();

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered: FilteredPokemons = {};

    for (const pokemonName in pokemonData) {
      if (pokemonName.includes(lowercaseQuery)) {
        filtered[pokemonName] = pokemonData[pokemonName];
      }
    }

    setFilteredPokemons(filtered);
    setTouched(true);
  };

  const clearSearchResults = () => {
    setFilteredPokemons({});
    setTouched(false);
  };

  const pagePokemonsPerPage = {
    perPage,
    page,
  };

  const { data, isError, isLoading } = useGetPokemonsQuery(pagePokemonsPerPage);

  const { data: allPokoData } = useGetAllPokemonsQuery("");

  useEffect(() => {
    const fetchTypes = () => {
      Object.entries(pokemonsDataTypes).map(([pokemonName, types]) => {
        if (types.length > 0) {
          dispatch(
            setPokemonTypes({
              pokemonName,
              types,
            })
          );
        }

        return { [pokemonName]: types };
      });
    };

    fetchTypes();
  }, []);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPerPage = parseInt(event.target.value, 10);
    setPerPage(newPerPage);
    setPage(1);
  };

  const filteredData = useMemo(() => {
    return (
      allPokoData?.results?.filter(({ name }: PokemonsListProps) => {
        const types = pokemonData[name] || [];
        return selectedTypes.some((selectedType) =>
          types.includes(selectedType)
        );
      }) || []
    );
  }, [selectedTypes, pokemonData]);

  const pagesCount = Math.ceil(+data?.count / perPage);

  return (
    <>
      {isLoading && (
        <Container maxWidth="md" disableGutters>
          <Grid container spacing={2} justifyContent="center">
            <SkeletonOnLoading />
          </Grid>
        </Container>
      )}

      {isError && <ErrorComponent />}

      {!isLoading && !isError && (
        <Container maxWidth="xl" sx={{ minHeight: "78vh" }}>
          <Container maxWidth="xl">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Navigation>
                  {data?.results && data?.results.length > 0 && (
                    <PaginationComponent
                      pageCount={pagesCount}
                      currentPage={page}
                      onPageChange={handlePageChange}
                      selectedTypes={selectedTypes}
                    />
                  )}
                </Navigation>
              </Grid>
              <Grid item>
                <Navigation>
                  <RadioButtons
                    onHandlePerPageChange={handlePerPageChange}
                    selectedTypes={selectedTypes}
                  />
                </Navigation>
              </Grid>

              <Grid item>
                <Navigation>
                  <Box sx={{ display: "flex" }}>
                    <PokemonSelectTypes
                      selectedTypes={selectedTypes}
                      setSelectedTypes={setSelectedTypes}
                    />
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => setSelectedTypes([])}
                      size="small"
                      sx={{ ml: 1.5 }}
                    >
                      Reset
                    </Button>
                  </Box>
                </Navigation>
              </Grid>
              <Grid item>
                <Navigation>
                  <Box sx={{ display: "flex" }}>
                    <SearchInput
                      handleSearch={handleSearch}
                      selectedTypes={selectedTypes}
                    />
                  </Box>
                </Navigation>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
              {Object.keys(filteredPokemons).length > 0 && touched && (
                <PokemonListItems
                  filteredPokemons={filteredPokemons}
                  clearSearchResults={clearSearchResults}
                />
              )}
              {Object.keys(filteredPokemons).length === 0 && touched && (
                <>
                  <Stack
                    spacing={2}
                    sx={{
                      maxWidth: "550px",
                      m: "0 auto",
                      alignItems: "center",
                    }}
                  >
                    <Alert
                      severity="warning"
                      variant="filled"
                      sx={{
                        fontSize: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      No Pokémon found. Please try another search term
                    </Alert>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={clearSearchResults}
                      size="large"
                      sx={{
                        maxWidth: "200px",
                        m: "1.5rem auto 2rem",
                      }}
                    >
                      Go back
                    </Button>
                  </Stack>
                </>
              )}
            </Box>
            <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
              <Grid container spacing={4}>
                {filteredData &&
                  filteredData.map(({ name }: PokemonsListProps) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
                      <Link to={`/pokemons/${name}`}>
                        <Item>
                          <PokemonCard pokemonName={name} />
                        </Item>
                      </Link>
                    </Grid>
                  ))}
                {data?.results &&
                  !selectedTypes.length &&
                  Object.keys(filteredPokemons).length === 0 &&
                  data?.results?.map(({ name }: PokemonsListProps) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
                      <Link to={`/pokemons/${name}`}>
                        <Item>
                          <PokemonCard pokemonName={name} />
                        </Item>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Container>
        </Container>
      )}
    </>
  );
};
