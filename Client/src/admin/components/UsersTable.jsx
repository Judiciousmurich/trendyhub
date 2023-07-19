import React from "react";
import { useState } from "react";

const UsersTable = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "judy_monah",
            email: "judicious@gmail.com",
            address: "123 Main St",
            phoneNumber: "123-456-7890",
            role: "Customer",
            registrationDate: "2023-07-19T12:34:56Z",
            lastLogin: "2023-07-19T13:45:30Z",
            status: "Active",
        },
        // Add more user objects as needed
    ])
    return (
        <div className="container  px-4">
            <h2 className="text-xl font-bold mb-4">Users List</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-100 border">ID</th>
                        <th className="px-4 py-2 bg-gray-100 border">Username</th>
                        <th className="px-4 py-2 bg-gray-100 border">Email</th>
                        <th className="px-4 py-2 bg-gray-100 border">Address</th>
                        <th className="px-4 py-2 bg-gray-100 border">Phone Number</th>
                        <th className="px-4 py-2 bg-gray-100 border">Role</th>
                        <th className="px-4 py-2 bg-gray-100 border">Registration Date</th>
                        <th className="px-4 py-2 bg-gray-100 border">Last Login</th>
                        <th className="px-4 py-2 bg-gray-100 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-4 py-2 border">{user.id}</td>
                            <td className="px-4 py-2 border">{user.username}</td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.address}</td>
                            <td className="px-4 py-2 border">{user.phone_number}</td>
                            <td className="px-4 py-2 border">{user.role}</td>
                            <td className="px-4 py-2 border">{user.registration_date}</td>
                            <td className="px-4 py-2 border">{user.last_login}</td>
                            <td className="px-4 py-2 border">{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
