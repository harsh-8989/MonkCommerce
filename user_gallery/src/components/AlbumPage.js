import React from "react"
import AlbumCard from "./AlbumCard"
import { useEffect, useState } from "react"
var localCache = {}
export default function AlbumPage(props) {
  const id = props.match.params.id
  // console.log(props)
  const [AlbumData, setAlbumData] = useState([])
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
  }
  useEffect(() => {
    getAlbumsData()
  }, [])
  return (
    <div>
      <section className="m-auto w-auto  mt-10 container items-center content-center ">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-2 ">
          {AlbumData?.map((item) => (
            <div className="items-center m-auto">
              <AlbumCard key={item.id} id={item.id} title={item.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
