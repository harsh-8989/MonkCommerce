import React from "react"
import { useState, useEffect } from "react"
export default function AlbumCard({ id, title }) {
  //   const [picData, setpicData] = useState([])
  //   const getpicData = async () => {
  //     const url = "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
  //     const response = await fetch(url)
  //     const jsonData = await response.json()
  //     setpicData(jsonData)
  //   }
  //   useEffect(() => {
  //     getpicData()
  //   }, [])
  //   const size = picData.length
  //   //   console.log(size)
  //   const picUrl = picData[0].url
  return (
    <div className="w-80 p-2 m-3">
      <div className="relative w-80 h-80 rounded-lg  ">
        <div className=" absolute w-80 h-80 from-black opacity-60 rounded-lg bg-gradient-to-t z-10"></div>
        <img className="rounded-lg" src={picUrl} />
      </div>
      <div className="flex text-gray-600 justify-between">
        <p className="truncate w-40">{title}</p>
        <p className="">50 photos</p>
      </div>
    </div>
  )
}
