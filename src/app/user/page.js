'use client'
import React, { useState } from 'react';
import Baner from '../ui/baner';
import Card from '../ui/card';
import MyCarousel from '../ui/carrusel';
import Logos from '../ui/logos';
import Carrito from '../ui/carrito';

export default function Home() {
  return (
    <main>
      <MyCarousel />
      <Card  />
      <Baner />
      <Logos />
       <Carrito />
    </main>
  );
}
