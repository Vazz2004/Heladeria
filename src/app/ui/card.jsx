'use client'
import React, { useState } from 'react';
import Carrito from '../../app/ui/carrito';
import ProductoMas from '../../app/ui/product';
import Image from "next/image";

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
        id: 2,
        name: 'Helado2',
        href: '#',
        imageSrc: '/productos/img11.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },

    {
        id: 3,
        name: 'Helado3',
        href: '#',
        imageSrc: '/helado10.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },


    {
        id: 4,
        name: 'Helado',
        href: '#',
        imageSrc: '/helado1.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },





    {
        id: 5,
        name: 'Helado5',
        href: '#',
        imageSrc: '/chocoHelado.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img1.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img2.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img3.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img4.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img5.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img6.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img7.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 13,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img8.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 14,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img9.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },
    {
        id: 15,
        name: 'Helado5',
        href: '#',
        imageSrc: '/productos/img10.webp',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Black',
    },

    // More products...
]

// ... (importaciones anteriores)

const Producto = ({ product, onAddToCart, onCompare }) => {
    const [mostrar, setMostrar] = useState(false);

    const controladorMostrar = () => {
        setMostrar(!mostrar);
        onAddToCart(product);
    };

    const controladorComparar = () => {
        onCompare(product);
    };

    return (
        <div key={product.id} className="group relative bg-white rounded-md shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-full h-40 overflow-hidden rounded-md bg-gray-200 aspect-w-4 aspect-h-3 group-hover:opacity-75">
                <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full"
                    width={400}
                    height={300}
                />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    <a href={product.href} className="hover:text-blue-500">
                        {product.name}
                    </a>
                    <p className="text-lg font-medium text-gray-900">{product.price}</p>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <div className="mt-2 flex justify-between items-center">
                <div className="flex space-x-2">
                    <button onClick={controladorMostrar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition-colors duration-300">
                        Añadir al carrito
                    </button>
                    <button onClick={controladorComparar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded transition-colors duration-300">
                        Comparar
                    </button>
                </div>
            </div>
            {mostrar && <Carrito />}
        </div>
    );
};

const Card = () => {
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [productoMasVisible, setProductoMasVisible] = useState(false);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const controladorMostrarCarrito = (producto) => {
        setCarritoVisible(true);
        setProductosSeleccionados([...productosSeleccionados, producto]);
    };

    const controladorComparar = (producto) => {
        setProductoMasVisible(true);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Producto key={product.id} product={product} onAddToCart={controladorMostrarCarrito} onCompare={controladorComparar} />
                    ))}
                </div>
            </div>
            {carritoVisible && <Carrito productos={productosSeleccionados} />}
            {productoMasVisible && <ProductoMas />}
        </div>
    );
};

export default Card;
