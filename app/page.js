"use client"

import { fetchUserManagment } from "@/store/actions/UserActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
export default function Home() {

  const { users } = useSelector((state) => state); // Replace 'charity' with the name you've given to your reducer
  const dispatch = useDispatch();
  console.log(users)

  useEffect(() => {
    dispatch(fetchUserManagment())
  }, [dispatch])

  return (
    <div>
      hello
    </div>
  )
}
