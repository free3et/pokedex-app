import { Grid, Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export const ErrorComponent = () => {
  return (
    <Container maxWidth="md" sx={{ minHeight: "78vh" }}>
      <Grid container m={2} spacing={2} p={2} sx={{ minHeight: "55vh" }}>
        <Grid item>
          <Typography variant="h3" mb={3}>
            Oops! Sorry, something went wrong
          </Typography>

          <Box mt={2}>
            <Button variant="contained" color="secondary">
              <Link to="/" style={{ textDecoration: "none" }}>
                Go Home
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
