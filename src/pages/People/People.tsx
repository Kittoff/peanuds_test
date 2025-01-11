import Header from '../../components/Header';
import {
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { IPeopleDetails } from './types';
import DialogBox from '../../elements/DialogBox/DialogBox';

export const URL = 'https://swapi.tech/api/people';

const fetchPeople = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

const People = () => {
  const [gender, setGender] = useState<string>('');
  const [entriesPerPageCount, setEntriesPerPageCount] = useState<number>(10);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<IPeopleDetails | null>(
    null,
  );

  const {
    data: peoples,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['peoples'],
    queryFn: fetchPeople,
  });

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleEntriesPerPageChange = (event: SelectChangeEvent) => {
    setEntriesPerPageCount(Number(event.target.value));
  };

  useEffect(() => {
    if (error) {
      console.log('Error : ', error.message);
    }
    if (isLoading) {
      console.log('Loading...');
    }

    if (peoples) {
      console.log('People : ', peoples);
    }
  }, [error, isLoading, peoples]);

  return (
    <>
      <Header />
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">Character list</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="female">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="n/a">N/A</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        {error && (
          <Stack spacing={2} my={4} useFlexGap>
            {error.message}
          </Stack>
        )}
        {peoples && peoples.length === 0 && (
          <Stack spacing={2} my={4} useFlexGap>
            No items
          </Stack>
        )}
        {isLoading && (
          <Stack spacing={2} my={4} useFlexGap>
            Loading...
          </Stack>
        )}
        {peoples &&
          !error &&
          peoples.map((people: IPeopleDetails) => (
            <Stack key={people.uid} spacing={2} my={4} useFlexGap>
              <Link
                component={RouterLink}
                to={`/people?selected=${people.uid}`}
                onClick={() => {
                  setSelectedPerson(people);
                  setIsOpen(true);
                }}
              >
                {people.name}
              </Link>
            </Stack>
          ))}
        <Stack direction="row" alignItems="center" py={2}>
          <Stack direction="row" justifyContent="center" flex={1}>
            <Pagination count={10} variant="text" shape="rounded" />
          </Stack>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
      <DialogBox
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        person={selectedPerson}
      />
    </>
  );
};

export default People;
