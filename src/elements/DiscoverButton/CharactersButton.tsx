import { CustomCharactersButton } from './CharactersButton.styles.ts';
import { ButtonProps } from '@mui/material';

const CharactersButton = (props: ButtonProps) => {
  return <CustomCharactersButton {...props} />;
};

export default CharactersButton;
