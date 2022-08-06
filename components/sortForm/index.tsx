import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { SORT } from '../../utils/constants';

type Props = {
  sortBy: string;
  handleSortBy: (value: string) => void;
};

const SortForm = ({ sortBy, handleSortBy }: Props) => {
  return (
    <FormControl sx={{ width: 170, mt: 5, mb: 3 }}>
      <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
      <Select
        sx={{}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        label="ordenar por"
        onChange={(e) => handleSortBy(e.target.value as string)}
      >
        <MenuItem value={SORT.DESC}>A - Z</MenuItem>
        <MenuItem value={SORT.ASC}>Z - A</MenuItem>
        <MenuItem value={SORT.OLD}>Más Antiguas</MenuItem>
        <MenuItem value={SORT.NEW}>Más Nuevas</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortForm;
