import Header from '../../components/Header';
import { Container, Stack, Typography } from '@mui/material';
import CharactersButton from '../../elements/DiscoverButton';
import Footer from '../../components/Footer';
import MoviesButton from '../../elements/MoviesButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const [count] = useState<number>(0);

  useEffect(() => {
    console.log(count);
  }, []);

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
          <Typography
            variant="h4"
            component="h1"
          >
            Welcome to the StarWars Universe!
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
          >
            Let&#39;s do a deep dive together.
          </Typography>
          <Typography
            variant="body1"
            mt={3}
          >
            Discover all the{' '}
            <CharactersButton
              variant="contained"
              onClick={() => navigate('/people')}
            >
              characters
            </CharactersButton>{' '}
            and the{' '}
            <MoviesButton
              variant="contained"
              onClick={() => navigate('/movies')}
            >
              movies
            </MoviesButton>
            .
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
