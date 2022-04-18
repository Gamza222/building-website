import React from 'react'
import * as classes from './Productivity.module.scss'

export default function Productivity() {
  return (
    <section className={classes.productivity}>
        <div className={classes.productivity__container}>
            <img src="https://plastermaster.ru/images/icons/icon-screed.svg" />
            <div className={classes.productivity__container__description}>
                <h2>250 м²/день</h2>
                <p>Средняя производительность одной бригады при выполнении стяжки пола.<br /> Выполняем работу максимально быстро, но без ущерба для качества.</p>
            </div>
        </div>
    </section>
  )
}
