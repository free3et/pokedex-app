import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const types = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow",
];

interface PokemonSelectTypesProps {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

export const PokemonSelectTypes: React.FC<PokemonSelectTypesProps> = ({
  selectedTypes,
  setSelectedTypes,
}) => {
  const [type] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    setSelectedTypes(event.target.value as string[]);
  };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label" sx={{ top: "-8px" }}>
          Pokemon type
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTypes}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => (selected as string[]).join(", ")}
          MenuProps={MenuProps}
          sx={{ height: "40px" }}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              <Checkbox checked={selectedTypes.includes(type)} />
              <ListItemText primary={type} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
