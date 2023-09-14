"use client"

import { drugsResultAtom, drugsSearchTextAtom } from "@/store/drugs"
import { useAtom } from "jotai"
import { useEffect } from "react"
import Search from "@/components/molecules/Search"
import { Drug } from "@/models/Drug"
import CardList from "../molecules/CardList"

async function getData(text: string): Promise<Drug[]> {
  const res = await fetch(`/api/drugs?text=${text}`)
  return res.json()
}

export default function SearchMedicine() {
  const [drugsSearchText] = useAtom(drugsSearchTextAtom)
  const [, setData] = useAtom(drugsResultAtom)

  async function handleStatusChange() {
    if (drugsSearchText) {
      const response = await getData(drugsSearchText)
      setData(response)
    } else {
      setData([])
    }
  }

  useEffect(() => {
    handleStatusChange()
  }, [drugsSearchText])

  return <div className="w-full flex flex-col gap-4">
    <Search />
    <CardList />
  </div >
}