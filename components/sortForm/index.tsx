import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { SORT } from '../../utils/constants';

type Props = {
  sortBy: string;
  handleSortBy: (value: string) => void;
};

const SortForm = ({ sortBy, handleSortBy }: Props) => {
  return (
    <Box sx={{ borderBottom: '1px solid #12121229' }}>
      <FormControl sx={{ width: 170, mt: 5, mb: 3 }}>
        <InputLabel color="secondary" id="demo-simple-select-label">
          Sort by
        </InputLabel>
        <Select
          sx={{}}
          color="secondary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="sort by"
          onChange={(e) => handleSortBy(e.target.value as string)}
        >
          <MenuItem value={SORT.DESC}>A - Z</MenuItem>
          <MenuItem value={SORT.ASC}>Z - A</MenuItem>
          <MenuItem value={SORT.OLD}>Más Antiguas</MenuItem>
          <MenuItem value={SORT.NEW}>Más Nuevas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortForm;
