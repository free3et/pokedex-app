import {
  Grid,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Download from "../assets/download_app.svg";
import Instagram from "../assets/instagram_logo.svg";
import Youtube from "../assets/youtube_logo.svg";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";

export const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const containerMaxWidth = isSmallScreen ? "sm" : "lg";

  return (
    <Grid
      sx={{
        background: "#1f1f1f",
      }}
    >
      <Container maxWidth={containerMaxWidth}>
        <Grid container justifyContent="space-around" spacing={3} mt={2}>
          <Grid item xs={6} md={3}>
            <Link to={"/"}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CatchingPokemonIcon sx={{ mr: 2 }} fontSize="medium" />
                <Typography
                  variant="h6"
                  textTransform="capitalize"
                  color="#ffffff"
                >
                  Pokedex
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={6} md={3} pt={0}>
            <List sx={{ mt: "-8px" }}>
              <Typography
                variant="caption"
                textTransform="capitalize"
                color="#ffffff"
              >
                Company
              </Typography>
              <ListItem
                component="a"
                href="/"
                sx={{ fontSize: ".7em", mt: "8px" }}
                disablePadding
              >
                <ListItemText primary={"Privacy Policy"} />
              </ListItem>

              <ListItem
                component="a"
                href="/"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Terms of Use"} />
              </ListItem>

              <ListItem
                component="a"
                href="/"
                disablePadding
                sx={{ fontSize: ".7em" }}
              >
                <ListItemText primary={"Cookie Policy"} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" color="#ffffff">
              Download our app
            </Typography>
            <Box pt={2}>
              <a href="https://www.apple.com/store">
                <img
                  src={Download}
                  alt="Download on the AppStore"
                  style={{ maxWidth: "120px" }}
                />
              </a>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="caption" color="#ffffff">
              Follow us
            </Typography>
            <Box pt={2}>
              <a href="https://www.instagram.com/">
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={{ paddingRight: "10px" }}
                />
              </a>
              <a href="https://www.youtube.com/">
                <img src={Youtube} alt="Youtube" />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          pt={1}
          pb={2}
        >
          <Box>
            <Typography variant="caption" color="#ffffff">
              © 2023 Pokedex. All rights reserved
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};
