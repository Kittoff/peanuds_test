import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      component="footer"
      sx={{ px: 4, py: 2, borderTop: '1px solid #f1f1f1' }}
    >
      <Typography
        variant="caption"
        color="textDisabled"
        fontSize={16}
      >
        &copy; 2024 Peanuds Ltd. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
