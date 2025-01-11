import { Box, Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      component="header"
      sx={{ px: 4, py: 2, backgroundColor: '#f1f1f1' }}
    >
      <Stack component="nav">
        <Stack
          spacing={4}
          direction="row"
          component="ul"
          height={40}
          alignItems="center"
          useFlexGap
          sx={{ m: 0, p: 0 }}
        >
          <Box
            component="li"
            sx={{ listStyleType: 'none' }}
          >
            <Typography
              component={NavLink}
              to="/"
              variant="caption"
              fontSize={16}
              sx={{
                textDecoration: 'none',
                '&:hover': { fontWeight: 700 },
                '&:visited': { color: (theme) => theme.palette.primary.main },
              }}
            >
              Home
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{ listStyleType: 'none' }}
          >
            <Typography
              component={NavLink}
              to="/people"
              variant="caption"
              fontSize={16}
              sx={{
                textDecoration: 'none',
                '&:hover': { fontWeight: 700 },
                '&:visited': { color: (theme) => theme.palette.primary.main },
              }}
            >
              People
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{ listStyleType: 'none' }}
          >
            <Typography
              component={NavLink}
              to="/films"
              variant="caption"
              fontSize={16}
              sx={{
                textDecoration: 'none',
                '&:hover': { fontWeight: 700 },
                '&:visited': { color: (theme) => theme.palette.primary.main },
              }}
            >
              Films
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
