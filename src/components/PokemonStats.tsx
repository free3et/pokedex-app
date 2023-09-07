import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PokemonChipTypography } from "./PokemonChipTypography";

interface PokemonStatsProps {
  base_stat: number;
  stat: {
    name: string;
  };
}

export const PokemonStats: React.FC<{ stats: PokemonStatsProps[] }> = ({
  stats,
}) => {
  const pokemonStats: string[] = stats?.map(
    (item: PokemonStatsProps) => item.stat.name
  );
  const pokemonBaseStats: number[] = stats?.map(
    (item: PokemonStatsProps) => item.base_stat
  );

  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      <PokemonChipTypography title="Stats" />
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: pokemonStats.map((item) => item.replace("-", " ")),
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: pokemonBaseStats.map((item) => item),
          },
        ]}
        width={isMobile ? 350 : 600}
        height={isMobile ? 300 : 380}
        sx={{
          writingMode: "vertical-lr",
          ml: isMobile ? "-50px" : "-15px",
        }}
      />
    </Box>
  );
};
