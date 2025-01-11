import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { IDialogBox } from './types';
import { useQuery } from '@tanstack/react-query';

// Typage pour les détails retournés par l'API
export interface IPeopleDetails {
  uid: string;
  birth_year: string;
  eye_color: string;
  created: string;
  edited: string;
  home_world: string;
  skin_color: string;
  name: string;
  gender: string;
  height: string;
  hair_color: string;
  mass: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const fetchPeopleDetails = async (uid: string): Promise<IPeopleDetails> => {
  const response = await fetch(`https://swapi.tech/api/people/${uid}`);
  const data = await response.json();

  return data.result.properties;
};

const DialogBox = ({ isOpen, setIsOpen, person }: IDialogBox) => {
  const {
    data: peopleDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['peopleDetails', person?.uid],
    queryFn: () => fetchPeopleDetails(person?.uid || ''),
    enabled: !!person,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        fullWidth
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {person?.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {error && !isLoading && (
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              my={4}
              useFlexGap
            >
              Error: {error.message}
            </Stack>
          )}
          {isLoading && (
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={2}
              my={4}
              useFlexGap
            >
              Loading Data...
            </Stack>
          )}
          {peopleDetails && (
            <>
              <Stack alignItems="center" justifyContent="center">
                <Typography
                  gutterBottom
                >{`Birth Year: ${peopleDetails.birth_year}`}</Typography>
                <Typography
                  gutterBottom
                >{`Eye Color: ${peopleDetails.eye_color}`}</Typography>
                <Typography
                  gutterBottom
                >{`Skin Color: ${peopleDetails.skin_color}`}</Typography>
                <Typography
                  gutterBottom
                >{`Gender: ${peopleDetails.gender}`}</Typography>
                <Typography
                  gutterBottom
                >{`Height: ${peopleDetails.height} cm`}</Typography>
                <Typography
                  gutterBottom
                >{`Hair color: ${peopleDetails.hair_color}`}</Typography>
                <Typography
                  gutterBottom
                >{`Mass: ${peopleDetails.mass} Kg`}</Typography>
              </Stack>
            </>
          )}
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default DialogBox;

// Typage pour les props de DialogBox
