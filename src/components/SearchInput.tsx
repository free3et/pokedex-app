import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #A58BB5",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontWeight: "bold",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

interface SearchInputProps {
  handleSearch: (value: string) => void;
  selectedTypes: string[];
}

export const SearchInput: React.FC<SearchInputProps> = ({
  handleSearch,
  selectedTypes,
}) => {
  const isMobile = useMediaQuery("(max-width: 520px)");
  const [searchQuery, setSearchQuery] = useState("");

  const handleButtonClick = () => {
    handleSearch(searchQuery);
    setSearchQuery("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
      setSearchQuery("");
    }
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search ..."
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={selectedTypes.length > 0}
          sx={{
            "& .MuiInputBase-input": {
              padding: isMobile ? "4px 4px 4px 0px" : "8px 8px 8px 0px",
              paddingLeft: isMobile ? "calc(1em + 20px)" : "calc(1em + 32px)",
            },
          }}
        />
        <ClearIcon
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={clearSearchQuery}
        />
      </Search>

      <Button
        onClick={handleButtonClick}
        variant="contained"
        color="success"
        size="small"
        sx={{ ml: 1.5 }}
        disabled={selectedTypes.length > 0}
      >
        Search
      </Button>
    </Box>
  );
};
