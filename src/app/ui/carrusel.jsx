'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Asegúrate de importar los estilos CSS
import Image from 'next/image';
export default function MyCarousel() {
    const onChange = (index, item) => {
        // Lógica para el cambio de slide
        console.log(`Slide cambiado a ${index} (${item})`);
    };

    const onClickItem = (index, item) => {
        // Lógica al hacer clic en un slide
        console.log(`Clic en slide ${index} (${item})`);
    };

    const onClickThumb = (index, item) => {
        // Lógica al hacer clic en la miniatura
        console.log(`Clic en miniatura ${index} (${item})`);
    };

    return (
        <Carousel className='carrusel' showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <Image
                    src='/baner1.webp'
                    width={500}
                    height={150}
                    alt='Samuel'
                    className='imgCarrusel'
                />
            </div>
            <div>
                <Image
                    src='/baner2.png'
                    width={500}
                    height={250}
                    alt='Samuel'
                    className='imgCarrusel'
                />
            </div>

            <div>
                <Image
                    src='/baner3.jpg'
                    width={500}
                    height={250}
                    alt='Samuel'
                    className='imgCarrusel'
                />
            </div>
            {/* ... Agrega más slides aquí */}
        </Carousel >
    );
}
