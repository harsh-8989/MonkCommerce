import React from "react"
import { useState, useEffect } from "react"
import UserCard from "./UserCard"
export default function UserPage() {
  const [userData, setUserData] = useState([])
  const getUserDatafetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const jsonData = await response.json()
    setUserData(jsonData)
  }

  useEffect(() => {
    getUserDatafetch()
  }, [])
  return (
    <div>
      <section className="m-auto w-auto  mt-10 container items-center content-center ">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-2 ">
          {userData?.map((item) => (
            <div className="items-center m-auto">
              <UserCard
                key={item.id}
                name={item.name}
                username={item.username}
                id={item.id}
                email={item.email}
                location={item.address.city}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
