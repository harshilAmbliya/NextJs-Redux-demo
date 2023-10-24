"use client"

import { fetchUserManagment } from "@/store/actions/UserActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
const Home = () => {
  const [usersData, setUsersData] = useState()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  // console.log(user)

  useEffect(() => {
    dispatch(fetchUserManagment())
    setUsersData(user.payload.Users)
  }, [dispatch]);




  return (
    <ul>
      {usersData &&
        usersData.map((user) => (
          <li>{user.name}</li>
        ))
      }
    </ul>
  )
}

export default Home
