import React from "react"
import { useState, useEffect } from "react"
let localCache = {}
export default function AlbumCard({ id, title }) {
  const [picData, setpicData] = useState([])
  const [picUrl, setpicUrl] = useState("")
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
    setpicUrl(jsonData[0].url)
  }
  useEffect(() => {
    getpicData()
  }, [])
  const url = "/album/" + id
  return (
    <div className="w-80 p-2 m-3">
      <a href={url}>
        <div className="relative w-80 h-80 rounded-lg  ">
          <div className=" absolute w-80 h-80 from-black opacity-60 rounded-lg bg-gradient-to-t z-10"></div>
          <img className="rounded-lg" src={picUrl} />
        </div>
      </a>
      <div className="flex text-gray-600 justify-between">
        <p className="truncate w-40">{title}</p>
        <p className="">{picData.length} photos</p>
      </div>
    </div>
  )
}
