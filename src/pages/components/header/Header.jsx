import React, {useEffect, useState} from 'react'
import * as classes from './Header.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('risize', handleResize);
  },[]);

  useEffect(() => {
    if (size.width > 1200 && menuActive == true) {
      setMenuActive(false)
    }
}, [size.width, menuActive])

  return (
    <header>
        <div className={classes.header__container}>
            <div className={classes.header__container__logo}>
                <span>CHOTOSTROY<br /> GAMZATRON</span>
                <p>Штукатурка стен и стяжка
                <br />пола в Москве и области</p>
            </div>
            <ul className={`${classes.header__container__nav} ${menuActive ? classes.header__container__isMenu: '' }`}>
                <li><a href="#">Штукатурка стен</a></li>
                <li><a href="#">Стяжка пола</a></li>
                <li><a href="tel:+79685740730" id={classes.tel}>+7 (968) 574-07 -30</a></li>
                <button>Oбратный звонок</button>
            </ul>
            {menuActive ? <button className={classes.header__container__menuBtn} onClick={() => setMenuActive(!menuActive)}><AiOutlineClose /></button> 
            : <button onClick={() => setMenuActive(!menuActive)} className={classes.header__container__menuBtn}><BiMenuAltRight /></button>}
        </div>
    </header>
  )
}
