import { CustomMoviesButton } from './MoviesButton.styles.ts';
import { ButtonProps } from '@mui/material';

const MoviesButton = (props: ButtonProps) => {
  return <CustomMoviesButton {...props} />;
};

export default MoviesButton;
