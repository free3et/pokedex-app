import { Grid, Stack, Skeleton } from "@mui/material";

export const SkeletonOnLoading = () => {
  return (
    <>
      <Grid container sx={{ minHeight: "56vh" }} justifyContent="center">
        {Array.from({ length: 3 }).map((_, index) => (
          <Stack spacing={1} m={1} mt={3} key={index}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ))}
      </Grid>
    </>
  );
};

export const SkeletonOnLoadingSingle = () => {
  return (
    <Grid container sx={{ minHeight: "56vh" }} justifyContent="center">
      <Stack spacing={1} m={1} mt={3}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </Grid>
  );
};
