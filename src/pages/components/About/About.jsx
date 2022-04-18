import React from 'react'
import * as classes from './About.module.scss'

export default function About() {
  return (
    <section id="about" className={classes.about}>
        <div className={classes.about__container}>
            <div className={classes.about__container__equipment}>
                <h3>
                    Пневмонагнетателя
                    для выполнения работ
                </h3>
                <img src="https://plastermaster.ru/images/cart2.jpg" />
                <p>Пневмонагнетатель Putzmeister 740</p>
            </div>
            <div className={classes.about__container__description}>
                <h3>Только высококачественные штукатурные смеси</h3>
                <div className={classes.about__container__description__item}>
                    <img src='https://plastermaster.ru/images/bag3.png' />
                    <p>Евроцемент М500</p>
                </div>
                <div className={classes.about__container__description__item}>
                    <img src='https://plastermaster.ru/images/sand-pile.png' />
                    <p>Промытый речной песок</p>
                </div>
                <p>Мы никогда не экономим на оборудовании и материалах, работая только на профессиональном оборудовании и выбирая исключительно проверенные материалы от ведущих производителей. Именно такой подход гарантирует высокое качество и отличный результат - стяжка ложится ровно, держится надежно и выглядит красиво.</p>
            </div>
        </div>
    </section>
  )
}
