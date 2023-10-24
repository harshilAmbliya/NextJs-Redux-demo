"use client";

import Form from "@/components/Form";
import { deleteUser, fetchUserManagment } from "@/store/actions/UserActions";
import { isLoading } from "@/store/actions/isloading";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state);
  const [formUsersData, setFromUsersData] = useState(null);
  // const [usersData, setUsersData] = useState();

  useEffect(() => {
    dispatch(fetchUserManagment());
  }, [dispatch]);

  const handleUpdateForm = (updateId) => {
    dispatch(isLoading(true));
    const formUser = user.payload.find((user) => user.id === updateId);
    console.log("formUser", formUser);
    setFromUsersData(formUser);

    dispatch(isLoading(false));
  };

  const handleDelete = async (DeleteId) => {
    dispatch(isLoading(true));
    await dispatch(deleteUser(DeleteId));
    await dispatch(fetchUserManagment());
    dispatch(isLoading(false));
  };

  if (!user.payload) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }
  console.log(loading);
  return (
    <div className="h-screen flex justify-center items-center  flex-col">
      <Form user={formUsersData && formUsersData} />
      {loading === false ? (
        <table className="border  w-6/6 ">
          <thead>
            <tr className="border ">
              <th className="border ">ID</th>
              <th className="border ">NAME</th>
              <th className="border ">EMAIL</th>
              <th className="border ">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user.payload) &&
              user.payload.map((user) => {
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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
