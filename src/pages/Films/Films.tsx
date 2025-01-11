import Header from '../../components/Header';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import Footer from '../../components/Footer';
import { useState } from 'react';

const Films = () => {
  const [entriesPerPageCount, setEntriesPerPageCount] = useState<number>(10);

  const handleEntriesPerPageChange = (event: SelectChangeEvent) => {
    setEntriesPerPageCount(Number(event.target.value));
  };

  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Stack>
          <Typography variant="h6">Movie list</Typography>
        </Stack>
        <Stack
          spacing={2}
          my={4}
          useFlexGap
        >
          No items
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          py={2}
        >
          <Stack
            direction="row"
            justifyContent="center"
            flex={1}
          >
            <Pagination
              count={10}
              variant="text"
              shape="rounded"
            />
          </Stack>
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="entries-select-label">Show Entries</InputLabel>
            <Select
              labelId="entries-select-label"
              id="entries-select"
              value={String(entriesPerPageCount)}
              label="Show Entries"
              onChange={handleEntriesPerPageChange}
              variant="outlined"
            >
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="30">30</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Films;
