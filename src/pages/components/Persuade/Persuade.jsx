import React from 'react'
import * as classes from './Persuade.module.scss'
import Phone from '../../../images/phone.png'

export default function Persuade() {
  return (
    <section id="persuade" className={classes.persuade}>
        <div className={classes.persuade__container}>
            <div className={classes.persuade__container__box}>
                <div className={classes.persuade__container__box__phone}>
                    <p>Убедитесь в нашей экспертности лично, <br /> просто позвонив нам:</p>
                    <a href="tel:+79685740730" id={classes.tel}>+7 (968) 574-07 -30</a>
                </div>
                <img src='https://plastermaster.ru/images/icons/icon-smartphone.svg' />
            </div>
        </div>
    </section>
  )
}
