import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuItem,
  MenuList,
  Popover,
} from '@material-ui/core';
import ru from '../../images/flags/ru.png';
import us from '../../images/flags/us.png';
import './Header.css';

function Header() {
  // Выбор языка
  const [language, setLanguage] = useState(ru);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const openLang = Boolean(anchorElLang);
  const handleMenuLang = (e) => setAnchorElLang(e.currentTarget);
  const handleCloseLang = (e) => {
    setLanguage(e.target.lang || language);
    setAnchorElLang(null);
  };
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo'>VOL</Link>
        <div className='header__box header__box_right'>
          <nav className='header__menu'>
            <ul className='header__menu-list'>
              <li className='header__menu-item'>Продукт</li>
              <li className='header__menu-item'>Мы</li>
              <li className='header__menu-item'>Цены</li>
            </ul>
          </nav>
          <div className='header__box header__box_button'>
            <p className='header__lang-current' onClick={handleMenuLang}>{language === ru ? 'RU' : 'EN'}</p>
            <Popover
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openLang}
              onClose={handleCloseLang}
              className='header__lang-box'
            >
              <MenuList>
                <MenuItem onClick={handleCloseLang} lang={ru}>
                  <img src={ru} alt='Русский' className='header__lang-image'/>
                  Русский
                </MenuItem>
                <MenuItem onClick={handleCloseLang} lang={us}>
                  <img src={us} alt='English' className='header__lang-image'/>
                  English
                </MenuItem>
              </MenuList>
            </Popover>
            <button type="button" className='header__download'>Скачать</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
