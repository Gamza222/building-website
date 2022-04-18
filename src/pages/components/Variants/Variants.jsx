import React, {useState, useEffect} from 'react'
import * as classes from './Variants.module.scss'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const products = [
    {
        url: 'https://plastermaster.ru/images/simple.png',
        name: 'Простая стяжка пола',
        text: 'Идеальный вариант стяжки для ровных оснований без коммуникаций.',
        price: 'от 390 руб/м²',
        priceDesc: 'все включено',
        slideNum: 0,
    },
    {
        url: 'https://plastermaster.ru/images/with-com.png',
        name: 'Простая стяжка пола',
        text: 'Идеальный вариант стяжки для ровных оснований без коммуникаций.',
        price: 'от 390 руб/м²',
        priceDesc: 'все включено',
        slideNum: 1,
    },  
    {
        url: 'https://plastermaster.ru/images/isolated.png',
        name: 'Простая стяжка пола',
        text: 'Идеальный вариант стяжки для ровных оснований без коммуникаций.',
        price: 'от 390 руб/м²',
        priceDesc: 'все включено',
        slideNum: 2,
    },
]

export default function Variants() {

    const [slide, setSlide] = useState(0);

    
    const [slideContent, setSlideContent] = useState(
        products.map((item, index) => {
            if(item.slideNum == slide) {
             return (
                 <div className={classes.variants__container__products__item} key={index} >
                     <img src={item.url} />
                     <h3>{item.name}</h3>
                     <p>{item.text}</p>
                     <h4>{item.price}</h4>
                     <p>{item.priceDesc}</p>
                 </div>
             ) 
            }        
         })
    )

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
        handleResize();
    
        return () => window.removeEventListener('risize', handleResize);
      },[]);

    useEffect(() => {
        if(slide > 2) {
            setSlide(0);
        } else if (slide < 0) {
            setSlide(2)
        }
        setSlideContent(
            products.map((item, index) => {
                if(item.slideNum == slide) {
                 return (
                     <div className={`${classes.variants__container__products__item} ${classes.variants__container__products__fade}`} key={index} >
                         <img src={item.url} alt={`${item.name} image`} />
                         <h3>{item.name}</h3>
                         <p>{item.text}</p>
                         <h4>{item.price}</h4>
                         <p>{item.priceDesc}</p>
                         <button>ЗАКАЗАТЬ</button>
                     </div>
                 ) 
                }        
             })
        )

    }
    , [slide])
    console.log(size.width)
    
  return (
    <section id="variants" className={classes.variants}>
                {
                    size.width > 750 ? 
                    <div className={classes.variants__container}>
                        <h2>Варианты полусухой стяжки пола</h2> 
                        <p>Мы подходим к любой задаче индивидуально с учетом особенностей объекта, поэтому фактическое решение отличается для каждого клиента, но существует несколько типовых вариантов стяжки пола.</p>
                        <div className={classes.variants__container__products}>
                    
                        {products.map((item, index) => {
                            return (
                                <div className={`${classes.variants__container__products__item} ${classes.variants__container__products__fade}`} key={index} >
                                    <img src={item.url} alt={`${item.name} image`} />
                                    <h3>{item.name}</h3>
                                    <p>{item.text}</p>
                                    <h4>{item.price}</h4>
                                    <p>{item.priceDesc}</p>
                                    <button>ЗАКАЗАТЬ</button>
                                </div>
                            ) 
                        })}
                    </div>
                    </div>
                    :
                    <div className={classes.variants__container}>
                        <h2>Варианты полусухой стяжки пола</h2> 
                        <div className={classes.variants__container__products}>
                            {slideContent}
                            <div className={classes.variants__container__products__arrows}>
                                <button onClick={() => setSlide(slide - 1)} ><MdOutlineKeyboardArrowLeft /></button>
                                <button onClick={() => setSlide(slide + 1)}><MdOutlineKeyboardArrowRight /></button>
                            </div>
                            <div className={classes.variants__container__products__dots}>
                                <span onClick={() => setSlide(0)} id={slide == 0 ? `${classes.dotActive}` : ''}></span>
                                <span onClick={() => setSlide(1)} id={slide == 1 ? `${classes.dotActive}` : ''}></span>
                                <span onClick={() => setSlide(2)} id={slide == 2 ? `${classes.dotActive}` : ''}></span>
                            </div>
                        </div>
                    </div>
                }
                    

                    
    </section>
  )
}
