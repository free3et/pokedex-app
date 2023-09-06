import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

interface RadioButtonsProps {
  onHandlePerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTypes: string[];
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  onHandlePerPageChange,
  selectedTypes,
}) => {
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ lineHeight: 0.7, fontSize: ".9rem", mt: "7px" }}
      >
        Pokemons per page
      </FormLabel>
      <RadioGroup
        row
        defaultValue="10"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onHandlePerPageChange}
      >
        <FormControlLabel
          value="10"
          control={<Radio />}
          label="10"
          disabled={selectedTypes.length > 0}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
            },
          }}
        />
        <FormControlLabel
          value="20"
          control={<Radio />}
          label="20"
          disabled={selectedTypes.length > 0}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
            },
          }}
        />
        <FormControlLabel
          value="50"
          control={<Radio />}
          label="50"
          disabled={selectedTypes.length > 0}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
