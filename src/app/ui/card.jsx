'use client'
import Image from "next/image";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
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
        imageSrc: '/productos/img11.webp',
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

export default function Card() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className=" w-5/6 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-20 w-20 object-cover object-center lg:h-full lg:w-full"
                                    width={150}
                                    height={80}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
