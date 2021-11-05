import React from "react"

export default function PhotoCard({ url, title }) {
  return (
    <div>
      <div className="w-80 p-2 m-3">
        <div className="relative w-80 h-80 rounded-lg  ">
          <img className="rounded-lg" src={url} />
        </div>
        <div className="flex text-gray-600 justify-between">
          <p className=" truncate w-40">{title}</p>
        </div>
      </div>
    </div>
  )
}
