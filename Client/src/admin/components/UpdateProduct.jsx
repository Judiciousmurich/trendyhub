import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { getProductById, updateProduct } from "../../utils/apiCalls";
import { useParams } from "react-router-dom";

const UpdateProductForm = () => {
    const [data, setData] = useState([])
    // const [name, setName] = useState("");
    // const [description, setDescripton] = useState("");
    // const [price, setPrice] = useState("");
    // const [category, setCategory] = useState("");


    const { product_id } = useParams()

    const getProduct = async () => { const data = await getProductById(product_id); setData(data) }

    useEffect(() => {
        getProduct()
    }, [])

    const schema = yup.object().shape({
        Name: yup.string().required("Name is required"),
        Description: yup.string().required("Description is required"),
        Price: yup.string().required("Price is required"),
        Category: yup.string().required("Category is required"),
        // ImageLink: yup.string().url("Invalid URL format").required("Image URL is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
        updateProduct(data, product_id)
        
    };

    return (
        <form className="max-w-sm m-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productName"
                >
                    Product Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productName"
                    type="text"
                    placeholder="Enter product name"
                    required="required"
                    {...register("Name")}
                    Value={data.Name}
                />
            </div>
            <p className="error">{errors.Name?.message}</p>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    rows="3"
                    placeholder="Enter description"
                    required="required"
                    {...register("Description")}
                    value={data.Description}
                />
            </div>
            <p className="error">{errors.Description?.message}</p>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="price"
                >
                    Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    type="number"
                    placeholder="Enter price"
                    required="required"
                    {...register("Price")}
                    Value = {data.Price}
                />
            </div>
            <p className="error">{errors.Price?.message}</p>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category"
                >
                    Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    type="text"
                    placeholder="Enter category"
                    required="required"
                    {...register("Category")}
                    value={data.Category}
                />
            </div>
            <p className="error">{errors.Category?.message}</p>
            {/* <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                >
                    Image
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="imageLink"
                    type="file"
                    placeholder="Enter image URL"
                    required="required"
                    {...register("ImageLink")}
                
                />
            </div> */}
            <div className="flex items-center ">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UpdateProductForm;
