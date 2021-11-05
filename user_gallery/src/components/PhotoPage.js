import React from "react"
import { useState, useEffect } from "react"
import PhotoCard from "./PhotoCard"

let localCache = {}
export default function PhotoPage(props) {
  const id = props.match.params.albumId
  console.log(id)
  const [picData, setpicData] = useState([])
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
  }
  useEffect(() => {
    getpicData()
  }, [])
  return (
    <div>
      <section className="m-auto w-auto  mt-10 container items-center content-center ">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-2 ">
          {picData?.map((item) => (
            <div className="items-center m-auto">
              <PhotoCard key={item.id} url={item.url} title={item.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
