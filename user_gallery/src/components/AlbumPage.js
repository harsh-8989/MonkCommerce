import React from "react"
import AlbumCard from "./AlbumCard"
import { useEffect, useState } from "react"
var localCache = {}
export default function AlbumPage(props) {
  const id = props.match.params.id
  // console.log(props)
  const [AlbumData, setAlbumData] = useState([])
  const [data, setData] = useState([])
  const getAlbumsData = async () => {
    var jsonData = []
    if (localCache[id] == null) {
      const url = "https://jsonplaceholder.typicode.com/users/" + id + "/albums"
      const response = await fetch(url)
      jsonData = await response.json()
      localCache[id] = jsonData
    } else {
      jsonData = localCache[id]
    }
    setAlbumData(jsonData)
    setData(jsonData)
  }
  const filterData = (query) => {
    if (query) {
      setData(
        AlbumData.filter((album) => {
          const title = album.title.toLowerCase()
          return title.includes(query)
        })
      )
    } else {
      setData(AlbumData)
    }
  }
  useEffect(() => {
    getAlbumsData()
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
              <AlbumCard key={item.id} id={item.id} title={item.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
