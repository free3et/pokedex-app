import { ImageList, ImageListItem } from "@mui/material";
import DefaultImg from "../assets/pokemon-logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface PokemonImageListProps {
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
    other: {
      dream_world: { front_default: string };
      home: {
        front_default: string;
        front_shiny: string;
      };
      "official-artwork": { front_default: string };
    };
  };
}

export const PokemonImageList: React.FC<PokemonImageListProps> = ({
  sprites,
}) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const spriteVersions = [
    {
      size: 121,
      cols: 2,
      rows: 2,
      sprite: sprites.other.dream_world.front_default || DefaultImg,
    },
    {
      size: 121,
      cols: 1,
      rows: 1,
      sprite: sprites.front_default || DefaultImg,
    },
    { size: 242, cols: 1, rows: 1, sprite: sprites.front_shiny || DefaultImg },
    { size: 121, cols: 1, rows: 1, sprite: sprites.back_default || DefaultImg },
    {
      size: 242,
      cols: 2,
      rows: 2,
      sprite: sprites.other.home.front_shiny || DefaultImg,
    },

    { size: 242, cols: 1, rows: 1, sprite: sprites.back_shiny || DefaultImg },
  ];

  return (
    <ImageList
      sx={{ width: isMobile ? "100%" : 400, height: 500 }}
      variant="quilted"
      cols={3}
      rowHeight={121}
    >
      {spriteVersions.map((item, index) => (
        <ImageListItem
          key={index}
          cols={item.cols}
          rows={item.rows}
          sx={{ background: "rgba(0, 0, 0, 0.12)" }}
        >
          <img
            {...srcset(item.sprite, item.size, item.size)}
            alt={`Sprite ${index + 1}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
