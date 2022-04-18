import React from 'react'
import * as classes from './Fast.module.scss'

export default function Fast() {
  return (
    <section id="fast" className={classes.fast}>
        <div className={classes.fast__container}>
            <h2>Делаем стяжку быстро и с вниманием к деталям</h2>
            <div className={classes.fast__container__photo}>
                <img src="https://plastermaster.ru/images/floor.jpg" />      
                <p>
                    Выдерживаем толщину,<br />
                    достаточную для перекрытия <br />
                    коммуникаций и сохранения   <br />
                    прочности   <br />  
                </p>
                <p>
                    Укладываем демпферную<br />
                    ленту по периметру
                </p>
                <p>
                    Устанавливаем<br />
                    компенсационные швы
                </p>
                <p>
                    Делаем пол<br />
                    идеально ровным
                </p>
                <p>
                    Армируем< br />
                    фиброволокном
                </p>
            </div>
        </div>
    </section>
  )
}
