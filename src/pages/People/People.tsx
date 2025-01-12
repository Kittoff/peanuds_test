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
import { ChangeEvent, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { Gender, PeopleDetails } from './types';
import DialogBox from '../../elements/DialogBox/DialogBox';

const fetchPersonDetails = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    uid: data.result.uid,
    name: data.result.properties.name,
    gender: data.result.properties.gender,
  };
};

const fetchPeople = async (page: number, entriesPerPageCount: number) => {
  const response = await fetch(
    `https://swapi.tech/api/people?page=${page}&limit=${entriesPerPageCount}`,
  );
  const data = await response.json();
  const detailedPeople = await Promise.all(
    data.results.map((person: PeopleDetails) => fetchPersonDetails(person.url)),
  );

  return detailedPeople;
};

const People = () => {
  const [gender, setGender] = useState<Gender>('');
  const [page, setPage] = useState<number>(1);
  const [entriesPerPageCount, setEntriesPerPageCount] = useState<number>(10);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PeopleDetails | null>(
    null,
  );

  const {
    data: peoples,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['peoples', page, entriesPerPageCount],
    queryFn: () => fetchPeople(page, entriesPerPageCount),
  });

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as Gender);
  };

  const handleEntriesPerPageChange = (event: SelectChangeEvent) => {
    setEntriesPerPageCount(Number(event.target.value));
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredPeople = useMemo(() => {
    if (!peoples) return [];
    if (!gender) return peoples;

    return peoples.filter(
      (person: PeopleDetails) =>
        person.gender?.toLowerCase() === gender.toLowerCase(),
    );
  }, [peoples, gender]);

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
              <MenuItem value="male">Male</MenuItem>
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
        {isLoading ? (
          <Stack spacing={2} my={4} useFlexGap>
            <Typography>Loading...</Typography>
          </Stack>
        ) : filteredPeople.length === 0 ? (
          <Stack spacing={2} my={4} useFlexGap>
            <Typography>
              {gender
                ? `No characters found with gender: ${gender}`
                : 'No characters found'}
            </Typography>
          </Stack>
        ) : (
          filteredPeople.map((people: PeopleDetails) => (
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
          ))
        )}
        <Stack direction="row" alignItems="center" py={2}>
          <Stack direction="row" justifyContent="center" flex={1}>
            <Pagination
              page={page}
              count={10}
              variant="text"
              shape="rounded"
              onChange={handlePageChange}
            />
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
