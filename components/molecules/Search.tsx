import { useAtom } from "jotai";
import Input from "@/components/atoms/Input";
import { drugsSearchTextAtom } from "@/store/drugs";

export default function Search() {
    const [drugsSearchText, setDrugsSearchText] = useAtom(drugsSearchTextAtom)

    return <>
        <h2>Search</h2>
        <Input placeholder="Search by name or disease" type="text" name="search"
            value={drugsSearchText} onChange={(value) => setDrugsSearchText(value)} />
    </>
}