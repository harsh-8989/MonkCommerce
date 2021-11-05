import React from "react"
import { useState, useEffect } from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"

export default function UserCard({ name, id, username, email, location }) {
  const mailto = "mailto:" + email
  const [albumData, setalbumData] = useState([])
  const getAlbumsData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/" + id + "/albums"
    const response = await fetch(url)
    const jsonData = await response.json()
    setalbumData(jsonData)
  }
  useEffect(() => {
    getAlbumsData()
  }, [])

  const albumUrl = "/album/" + username + "/" + id
  const NumberOfAlbums = albumData.length
  return (
    <Router>
      <div>
        <div className=" pb-5  w-80 relative bg-white shadow-md rounded-lg m-3">
          <div className="flex items-center justify-between px-5 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-20 text-blue-300  ml-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>

            <a
              href={mailto}
              className=" bg-gray-700 px-3 py-1 rounded-full text-sm shadow-sm  text-white"
            >
              Contact
            </a>
          </div>
          <div className="px-5">
            <Link to={albumUrl} className="text-lg font-bold">
              {name}
            </Link>

            <div className="flex text-gray-400 text-sm space-x-2">
              <div className="flex ">
                <p className="mr-2">@{username}</p>
                {/*  */}
              </div>
              <div className="">
                <p>{NumberOfAlbums} Albums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}
