import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiDomain } from "../../utils/utilsDomain";

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${apiDomain}/users`);
            setUsers(response.data); // Pass the response data to setUsers
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(users);

    return (
        <div className="container px-4">
            <h2 className="text-3xl font-bold mb-4">Users List</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr>
                        <th className="px-4 py-2  text-left bg-gray-100 border">ID</th>
                        <th className="px-4 py-2  text-left bg-gray-100 border">Email</th>

                        <th className="px-4 py-2  text-left bg-gray-100 border">Role</th>
                        {/* Uncomment the lines below once you have the respective fields in the API response */}
                        {/* <th className="px-4 py-2 bg-gray-100 border">Registration Date</th>
            <th className="px-4 py-2 bg-gray-100 border">Last Login</th>
            <th className="px-4 py-2 bg-gray-100 border">Status</th> */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-4 py-2 border">{user.id}</td>

                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.role}</td>
                            {/* Uncomment the lines below once you have the respective fields in the API response */}
                            {/* <td className="px-4 py-2 border">{user.registration_date}</td>
              <td className="px-4 py-2 border">{user.last_login}</td>
              <td className="px-4 py-2 border">{user.status}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
