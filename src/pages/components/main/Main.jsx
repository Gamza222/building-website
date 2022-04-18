import React from 'react'
import * as classes from './Main.module.scss'


export default function Main() {
  return (
    <section id="main" className={classes.main}>
        <div className={classes.main__container}>
            <div className={classes.main__container__content}>
                <h1>
                    Полусухая
                    <span>Стяжка пола за 1 день</span>
                </h1>
                <p>цементно-песчаной смесью с гарантией 2 года</p>
                <div className={classes.main__container__content__price}>
                    <h3>от 390 руб/м²</h3>
                    <p>все включено</p>
                </div>
                <div className={classes.main__container__content__buttons}>
                    <button>Заказать стяжку пола</button>
                    <a href="tel:+79685740730" id={classes.tel}>+7 (968) 574-07 -30</a>
                </div>
            </div>

        </div>
    </section>
  )
}
