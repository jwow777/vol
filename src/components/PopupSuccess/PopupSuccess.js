import {
  Button,
  Dialog,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import React from 'react';
import './PopupSuccess.css';

const useStyles = makeStyles(() => ({
  button: {
    maxWidth: 85,
    height: 34,
    backgroundColor: '#6875ef',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 1.2,
    padding: '6px 10px',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#3e7bfa',
    },
  },
}));

function PopupSuccess({ open, close }) {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      close={close}
      classContainer='success'
    >
      <IconButton onClick={close} className='popup__close'>
        <Clear />
      </IconButton>
      <div className='popup__success-container'>
        <h2 className='popup__success-title'>Спасибо за обращение</h2>
        <p className='popup__success-subtitle'>Заявка уже в нашей CRM, мы скоро с вами свяжемся :)</p>
        <Button className={classes.button} onClick={close}>Ок</Button>
      </div>
    </Dialog>
  );
}

export default PopupSuccess;
