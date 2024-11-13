import { getComments } from "@/content"
import { useState } from "react"

import "./global.css"

function Home() {
  const [data, setData] = useState("")
  return (
    <main className="size-96 flex flex-col justify-start items-center p-10 bg-neutral-800">
      <button
        className="bg-blue-600 h-10 w-40"
        onClick={() => setData(getComments())}>
        Click Here
      </button>
      <p>{data}</p>
    </main>
  )
}

export default Home
