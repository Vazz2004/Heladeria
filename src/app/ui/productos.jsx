'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const products = [
    {
        id: 1,
        name: 'Helado',
        href: '#',
        imageSrc: '/helado1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

    {
        id: 1,
        name: 'Helado2',
        href: '#',
        imageSrc: '/helado2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },

    {
        id: 1,
        name: 'Helado3',
        href: '#',
        imageSrc: '/helado10.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },


    {
        id: 1,
        name: 'Helado',
        href: '#',
        imageSrc: '/helado1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },





    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/chocoHelado.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img1.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img2.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img3.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img4.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img5.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img6.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img7.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img8.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img9.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img10.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },

    // More products...
]

export default function Example() {
    return (
        <>
            <div className="w-full flex justify-center">
                <ul role="list" className="divide-y w-10/12">
                    <div className="w-full">
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary">
                                Agregar
                            </Button>
                        </Stack>
                    </div>
                    {products.map((item) => (
                        <li key={item.name} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.imageSrc} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.color}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{item.price}</p>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" color="primary">
                                        Editar
                                    </Button>
                                    <Button variant="outlined" color="error">
                                        Eliminar
                                    </Button>
                                </Stack>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}
