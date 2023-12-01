'use client'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'; // Importa Axios si no lo has hecho aún

export default function Empleados() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5');
                setPokemonData(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchPokemonData();
    }, []);

    return (
        <div className="todo">
            <div className="h-full flex items-center">
                <div className="h-full flex items-center">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab className='bg-black' color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Box>

                    <div className="input">
                        <label>Buscar Nombre</label>
                        <br />
                        <input type="text" placeholder='Nombre' className=' rounded border border-zinc-300' />
                    </div>

                    <div className="input ml-5">
                        <label>Buscar Código</label>
                        <br />
                        <input type="text" placeholder='Código' className=' border border-zinc-300' />
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pokémon</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Revisa tu equipo Pokémon
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {pokemonData.map((pokemon, index) => (
                            <li key={index}>
                                <div className="flex items-center gap-x-6">
                                    <img
                                        className="h-16 w-16 rounded-full"
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                        alt={`Pokemon ${index + 1}`}
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{pokemon.name}</h3>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
