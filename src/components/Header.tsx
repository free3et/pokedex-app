import {
  AppBar,
  Container,
  Box,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ flexGrow: 1, mb: isMobile ? 1 : 3 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link to={"/"}>
              <HomeIcon fontSize={isMobile ? "medium" : "large"} />
            </Link>

            <Link to={"/"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="to home page"
              >
                <CatchingPokemonIcon
                  sx={{ mr: 2 }}
                  fontSize={isMobile ? "medium" : "large"}
                />

                <Typography
                  variant={isMobile ? "h6" : "h4"}
                  component="h2"
                  sx={{ fontFamily: "Lilita One" }}
                >
                  Pokedex
                </Typography>
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
