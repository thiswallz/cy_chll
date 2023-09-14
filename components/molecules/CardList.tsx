import { useAtom } from "jotai";
import { drugsResultAtom } from "@/store/drugs";
import Card from "@/components/atoms/Card";
import Pill from "@/components/atoms/Pill";

export default function CardList() {
    const [drugsResult] = useAtom(drugsResultAtom)

    return <>
        <p className="text-xl mt-4">{drugsResult.length !== 0 ? `showing ${drugsResult.length} results` : `not results found`}</p>
        {drugsResult.map((drug) => {
            return <Card key={drug.id} title={drug.name} subtitle={<ul className="flex flex-wrap gap-2">{
                drug.diseases.map((disease) => <Pill key={disease}>{disease}</Pill>)
            }</ul>}>
                <p>{drug.description}</p>
                <span className="absolute top-1 right-2 text-gray-400">
                    {drug.released}
                </span>
            </Card>
        })}
    </>
}