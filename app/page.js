"use client";

import Form from "@/components/Form";
import {
  deleteUser,
  fetchUserManagment,
  updateUser,
} from "@/store/actions/UserActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const [usersData, setUsersData] = useState();
  const [formUsersData, setFromUsersData] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUserManagment());
    setUsersData(user.payload);
  }, [dispatch]);

  const handleUpdateForm = async (updateId) => {
    const user = await usersData.find((user) => user.id === updateId);
    setFromUsersData(user.payload);
    console.log("user", formUsersData);
  };

  console.log("call useEffect", usersData);
  const handleDelete = (DeleteId) => {
    console.log("DeleteId", DeleteId);
    dispatch(deleteUser(DeleteId));
  };

  return (
    <div className="h-screen flex justify-center items-center  flex-col">
      <Form user={formUsersData && formUsersData} />
      <table className="border  w-4/6">
        <thead>
          <tr className="border ">
            <th className="border ">ID</th>
            <th className="border ">NAME</th>
            <th className="border ">EMAIL</th>
            <th className="border ">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(usersData) &&
            usersData.map((user) => {
              return (
                <tr key={user.id} className="border ">
                  <td className="border ">{user.id}</td>
                  <td className="border ">{user.name}</td>
                  <td className="border ">{user.email}</td>
                  <td className="border ">
                    <button
                      className="w-1/2 py-1 px-3 bg-teal-500 text-white rounded"
                      onClick={() => handleUpdateForm(user.id)}
                    >
                      Update
                    </button>
                    <button
                      className="w-1/2 py-1 px-3 bg-red-500 text-white rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
