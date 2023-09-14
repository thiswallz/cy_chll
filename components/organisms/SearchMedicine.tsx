"use client"

import { useEffect, useState } from "react"
import Search from "@/components/molecules/Search"
import { Drug } from "@/models/Drug"

async function getData(text: string): Promise<Drug[]> {
  const res = await fetch(`/api/drugs?text=${text}`)
  return res.json()
}

export default function SearchMedicine() {
  const [data, setData] = useState<Drug[]>([])
  const [text, setText] = useState<string>('')

  async function handleStatusChange() {
    if (text) {
      const response = await getData(text)
      setData(response)
    }
  }
  useEffect(() => {
    handleStatusChange()
  }, [])

  return <>

<Search />
  </>
}