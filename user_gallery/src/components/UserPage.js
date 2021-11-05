import { useState, useEffect } from "react"
import UserCard from "./UserCard"

export default function UserPage() {
  const [userData, setUserData] = useState([])
  const [data, setData] = useState([])
  const getUserDatafetch = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const jsonData = await response.json()
    setUserData(jsonData)
    setData(jsonData)
  }
  const filterData = (query) => {
    if (query) {
      setData(
        userData.filter((user) => {
          const userName = user.name.toLowerCase()
          return userName.includes(query)
        })
      )
    } else {
      setData(userData)
    }
  }
  useEffect(() => {
    getUserDatafetch()
  }, [])
  return (
    <div>
      <div>
        <header class="border-b bg-gray-800 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
          <div class="flex items-center justify-between mb-4 md:mb-0">
            <h1 class="text-2xl text-white">User Gallery</h1>
          </div>

          <form class="mb-4 w-full md:mb-0 md:w-1/4">
            <label class="hidden" for="search-form">
              Search
            </label>
            <input
              class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
              placeholder="Search"
              type="text"
              onChange={(e) => filterData(e.target.value)}
            />
            <button class="hidden">Submit</button>
          </form>
        </header>
      </div>
      <section className="m-auto w-auto  mt-10 container items-center content-center ">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-2 ">
          {data?.map((item) => (
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
