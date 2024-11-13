import { getComments } from "@/content"
import { useState } from "react"

import "./global.css"

import { Button } from "@/components/button"

function Home() {
  const [data, setData] = useState("")
  return (
    <main className="size-96 flex flex-col justify-start items-center p-10 bg-neutral-800">
      <Button className="h-10 w-32 rounded-lg bg-red-700">Click Here</Button>
      <p>{data}</p>
    </main>
  )
}

export default Home
