import { Link, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Box,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import { useGetPokemonByNameQuery } from "../redux/services/pokemonSlice";
import { ErrorComponent } from "../components/ErrorComponent";
import { SkeletonOnLoading } from "../components/SkeletonOnLoading";
import { PokemonImageList } from "../components/PokemonImageList";
import { PokemonStats } from "../components/PokemonStats";
import { PokemonChipData } from "../components/PokemonChipData";
import { PokemonAbilities } from "../components/PokemonAbilities";
import { PokemonTypes } from "../components/PokemonTypes";

enum Colors {
  Default = "default",
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
}

export const PokemonSingle = () => {
  const { name } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { data = [], isLoading, isError } = useGetPokemonByNameQuery(name);

  const {
    name: pokemonName,
    height,
    weight,
    sprites,
    types,
    stats,
    abilities,
  } = data;

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
        <>
          <Container maxWidth="lg" disableGutters sx={{ minHeight: "78vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    m: 2,
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, .25)",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      textAlign="center"
                      p="12px"
                      mb="0"
                      sx={{
                        fontFamily: "Lilita One",
                        fontWeight: "bold",
                        fontSize: isMobile ? "1.75rem" : "2rem",
                      }}
                    >
                      {pokemonName.charAt(0).toUpperCase() +
                        pokemonName.slice(1)}
                    </Typography>

                    <Link to={"/"}>
                      <Button
                        variant="contained"
                        color="success"
                        size="medium"
                        sx={{ m: 1 }}
                      >
                        Go Back
                      </Button>
                    </Link>
                  </Box>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={2} sx={{ gap: isMobile ? 0 : 4 }}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={4}
                        sx={{
                          paddingTop: isMobile ? "0px!important" : "16px",
                        }}
                      >
                        <Grid container justifyContent="center"></Grid>
                        <PokemonImageList sprites={sprites} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={7}>
                        <PokemonChipData
                          title="Height"
                          icon={<HeightIcon />}
                          label={`${Math.floor(height / 12)}' ${(height % 12)
                            .toString()
                            .padStart(2, "0")}"`}
                          color={Colors.Success}
                        />
                        <Divider />
                        <PokemonChipData
                          title="Weight"
                          icon={<ScaleIcon />}
                          label={`${((weight / 453.59237) * 100).toFixed(
                            1
                          )} lbs`}
                          color={Colors.Info}
                        />
                        <Divider />
                        <PokemonTypes types={types} />
                        <Divider />
                        <PokemonAbilities abilities={abilities} />
                        <Divider />
                        <PokemonStats stats={stats} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};
