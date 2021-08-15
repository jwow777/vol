/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './Main.css';
import devicesImg from '../../images/main/devices.png';

function Main() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formState, setFormState] = useState({
    phone: '',
    country: {},
  });

  const handleChangePhone = (phone, country) => {
    setFormState({
      ...formState,
      phone,
      country: {
        country: country.name,
        dialCode: country.dialCode,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.phone) {
      return fetch(`${window.location.href}connector.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'app_form',
          body: {
            phone: formState.phone,
            country: formState.country,
            dialCode: formState.dialCode,
          },
        }),
      })
        .then((res) => {
          if (res.ok) res.json();
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then(() => setFormSuccess(true))
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className='main'>
      <div className='main__container'>
        <div>
          <h1 className='title'>
            Корпоративный мессенджер для бизнеса
          </h1>
          <p className='subtitle'>Новый уровень общения в команде</p>
          {
            !formSuccess
              ? (
                <form className='main__form' onSubmit={handleSubmit}>
                  <PhoneInput
                    country='ru'
                    placeholder='7 (999) 999-99-99'
                    value={formState.phone}
                    onChange={handleChangePhone}
                  />
                  <button type='submit' className='main__submit'>
                    Подключиться
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.410156 6.65037C0.410156 6.47909 0.478195 6.31483 0.599305 6.19372C0.720415 6.07261 0.884675 6.00457 1.05595 6.00457H16.2877L12.223 1.94123C12.1018 1.81997 12.0336 1.6555 12.0336 1.48401C12.0336 1.31252 12.1018 1.14805 12.223 1.02679C12.3443 0.905527 12.5088 0.837402 12.6802 0.837402C12.8517 0.837402 13.0162 0.905527 13.1375 1.02679L18.3038 6.19314C18.364 6.25313 18.4117 6.3244 18.4442 6.40285C18.4768 6.48131 18.4935 6.56542 18.4935 6.65037C18.4935 6.73531 18.4768 6.81942 18.4442 6.89788C18.4117 6.97633 18.364 7.0476 18.3038 7.10759L13.1375 12.2739C13.0162 12.3952 12.8517 12.4633 12.6802 12.4633C12.5088 12.4633 12.3443 12.3952 12.223 12.2739C12.1018 12.1527 12.0336 11.9882 12.0336 11.8167C12.0336 11.6452 12.1018 11.4808 12.223 11.3595L16.2877 7.29616H1.05595C0.884675 7.29616 0.720415 7.22812 0.599305 7.10701C0.478195 6.9859 0.410156 6.82164 0.410156 6.65037Z" fill="white"/>
                    </svg>
                  </button>
                  <p className='main__trying'>Попробуйте <span>14 дней бесплатно</span></p>
                </form>
              )
              : (
                <p className='main__thanks'>
                  <span>Спасибо!</span> Продукт сейчас в тестовом режиме. Мы начислим 14 дней бесплатного доступа, как только опубликуем рабочую версию продукта.
                </p>
              )
          }
        </div>
        <div className='main__box-image'>
          <img src={devicesImg} alt='phone' className='main__image main__image_computer' />
        </div>
      </div>
    </main>
  );
}

export default Main;
