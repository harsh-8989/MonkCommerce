import React from "react"
import AlbumCard from "./AlbumCard"
import { useEffect, useState } from "react"
export default function AlbumPage(props) {
  const id = props.match.params.id
  // console.log(props)
  const [AlbumData, setAlbumData] = useState([])
  const getAlbumsData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/" + id + "/albums"
    const response = await fetch(url)
    const jsonData = await response.json()
    setAlbumData(jsonData)
  }
  useEffect(() => {
    getAlbumsData()
  }, [])
  return (
    <div>
      <div className="m-auto w-auto  mt-10 container items-center content-center ">
        <section className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="m-auto">
            {AlbumData?.map((item) => (
              <AlbumCard key={item.id} id={item.id} title={item.title} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
