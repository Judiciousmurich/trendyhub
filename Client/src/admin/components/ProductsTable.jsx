import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProducts } from "../../utils/apiCalls";

const ProductsTable = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const fetchProducts = async () => {
        const data = await getProducts();
        setData(data);
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (id) => {
        deleteProduct(id);
        fetchProducts()
    };

    const handleUpdate = (id) => {
        navigate("/admin/update/" + id);
    };

    return (
        <table className="min-w-full border-collapse m-6  ">
            <thead>
                <tr>
                    <th className="py-2 text-left px-4 border  bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">
                        Product Name
                    </th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">
                        Price
                    </th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">
                        Description
                    </th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">
                        Category
                    </th>
                    <th className="py-2 text-left px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="py-2 px-4 border-b">{item.Name}</td>
                        <td className="py-2 px-4 border-b">{item.Price}</td>
                        <td className="py-2 px-4 border-b">{item.Description}</td>
                        <td className="py-2 px-4 border-b">{item.Category}</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2 mb-1 "
                                onClick={() => handleDelete(item.ID)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                onClick={() => handleUpdate(item.ID)}
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
