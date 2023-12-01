'use client'
import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Login = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };
    const handleShowAlert = () => {
        setShowAlert(true);
    };
    const handleContrasenaChange = (event) => {
        setContrasena(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(correo)
        // Validar el correo y la contraseña
        if (regexCorreo.test(correo)) {
            window.open('/')


        } else {
            handleShowAlert();
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="/logo/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Regístrate
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            {showAlert && (
                                <Alert severity="error" className="mt-10" >Por favor verifique el correo</Alert>
                            )}
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione su tipo de documento</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Seccione una opción</option>
                                <option value="C.C">C.C</option>
                                <option value="T.I">T.I</option>
                                <option value="C.E">C.E</option>
                            </select>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Primer Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Segundo Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                            </div>


                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Primer Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Segundo Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>


                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    value={correo}
                                    onChange={handleCorreoChange}
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>


                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>


                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Pregunta de seguridad
                            </label>
                            <div className="mt-2">
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Seccione una opción</option>
                                    <option value="Nombre de tu mascota">Nombre de tu mascota</option>
                                    <option value="Color favorito">Color favorito</option>
                                    <option value="Nombre de tu primo favorito ">Nombre de tu primo favorito</option>
                                </select>
                            </div>


                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Repuesta de seguridad
                            </label>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
