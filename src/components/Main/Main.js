import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import computer from '../../images/main/computer.png';
import phone from '../../images/main/phone.png';
import './Main.css';

const useStyles = makeStyles((theme) => ({
  container: {
    background: `url(${phone}) 1135px 250px no-repeat, url(${computer}) 870px 90px no-repeat`,
    maxWidth: 1440,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '80px 100px',
    [theme.breakpoints.down('xs')]: {
      background: `url(${phone}) 120% 60px / 50% no-repeat, url(${computer}) 20px 50px / 65% no-repeat`,
      padding: '75% 20px 50px',
    },
  },
  button: {
    height: 50,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    borderRadius: 5,
    backgroundColor: '#679AFD',
    fontFamily: '"Inter", sans-serif',
    fontStyle: 'normal',
    letterSpacing: '-0.035em',
    color: '#fff',
    textTransform: 'none',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1565FF',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 45,
      maxWidth: 300,
      width: '100%',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.2,
    },
  },
}));

function Main({ openPopup }) {
  const classes = useStyles();

  return (
    <main className='main'>
      <div className={classes.container}>
        <div>
          <h1 className='title'>
            Корпоративный&nbsp;
            <span className='title text_blue'>мессенджер </span>
            для&nbsp;эффективных команд
          </h1>
          <p className='subtitle'>Корпоративная рабочая область, удобные упоминания, обсуждения, чаты, расшифровка аудиосообщений</p>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={openPopup}
          >
            Попробовать 14 дней бесплатно
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Main;
