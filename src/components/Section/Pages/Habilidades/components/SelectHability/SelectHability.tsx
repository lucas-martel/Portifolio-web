import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { HabilityData } from "../../../../../../datas/Habilidades";
import StyledSelectHability from "./styledComponents/StyleSelectHability";

interface Props {
  onChangeSelectHability: (habs: string[]) => void;
}

function SelectHability(prop: Props) {
  const [hab, setHab] = useState(HabilityData.infos[0].habType);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setHab(event.target.value as string);
  };

  useEffect(() => {
    const filtered = HabilityData.infos.find((i) => i.habType === hab);

    prop.onChangeSelectHability(filtered ? filtered.titles : []);
  }, [hab]);

  return (
    <FormControl sx={{ width: "40%" }}>
      <InputLabel id="hab-label" sx={{ color: "yellow" }}>
        Habilidades
      </InputLabel>
      <StyledSelectHability
        size="small"
        labelId="hab-label"
        value={hab}
        label="Habilidade"
        onChange={handleChange}
      >
        {HabilityData.infos.map((info) => (
          <MenuItem
            key={info.habType}
            sx={{ color: "black" }}
            value={info.habType}
          >
            {info.habType}
          </MenuItem>
        ))}
      </StyledSelectHability>
    </FormControl>
  );
}

export default SelectHability;
