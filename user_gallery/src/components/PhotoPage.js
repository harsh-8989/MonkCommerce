import React from "react"
import { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"

let localCache = {}
export default function PhotoPage(props) {
  const id = props.match.params.albumId
  console.log(id)
  const [picData, setpicData] = useState([])
  const [data, setData] = useState([])
  const getpicData = async () => {
    let jsonData = []
    if (localCache[id] === null) {
      jsonData = localCache[id]
    } else {
      const url =
        "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
      const response = await fetch(url)
      jsonData = await response.json()
      localCache[id] = jsonData
    }
    setpicData(jsonData)
    setData(jsonData)
  }
  const filterData = (query) => {
    if (query) {
      setData(
        picData.filter((pic) => {
          const title = pic.title.toLowerCase()
          return title.includes(query)
        })
      )
    } else {
      setData(picData)
    }
  }
  useEffect(() => {
    getpicData()
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
              <PhotoCard key={item.id} url={item.url} title={item.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
