import Input from "@/components/atoms/Input";
import { useState } from "react";

export default function Search() {
    const [text, setText] = useState<string>('')

    return <>
        <h2>Search {text} </h2>
        <Input placeholder="Search by name or disease" type="text" name="search" value={text} onChange={(value) => setText(value)} />
    </>
}