'use client'
import React from 'react';

const SalesTable = () => {
    // Supongamos que tienes datos de ventas en un array como este:
    const salesData = [
        { id: 1, flavor: 'Chocolate', quantity: 50, revenue: 250 },
        { id: 2, flavor: 'Vanilla', quantity: 40, revenue: 200 },
        // ... otros datos de ventas
    ];

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Tabla de Ventas</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Sabor</th>
                        <th className="py-3 px-6 text-left">Cantidad</th>
                        <th className="py-3 px-6 text-left">Ingresos</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {salesData.map((sale) => (
                        <tr key={sale.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{sale.id}</td>
                            <td className="py-3 px-6 text-left">{sale.flavor}</td>
                            <td className="py-3 px-6 text-left">{sale.quantity}</td>
                            <td className="py-3 px-6 text-left">${sale.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesTable;
