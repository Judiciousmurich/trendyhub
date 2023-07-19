import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            productName: 'Product 1',
            price: 10,
            description: 'Description 1',
            category: 'Category 1',
        },
        {
            id: 2,
            productName: 'Product 2',
            price: 20,
            description: 'Description 2',
            category: 'Category 2',
        },
    ];

    const handleDelete = (id) => {
        console.log('Deleting item with ID:', id);
    };

    const handleUpdate = (id) => {
        console.log('Updating item with ID:', id);
        navigate("/admin/update/" + id)
    };

    return (
        <table className="min-w-full border-collapse">
            <thead>
                <tr>
                    <th className="py-2 text-left px-4 border  bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">Product Name</th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">Price</th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">Description</th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">Category</th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="py-2 px-4 border-b">{item.productName}</td>
                        <td className="py-2 px-4 border-b">{item.price}</td>
                        <td className="py-2 px-4 border-b">{item.description}</td>
                        <td className="py-2 px-4 border-b">{item.category}</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                onClick={() => handleUpdate(item.id)}
                            >
                                Update
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductsTable;
