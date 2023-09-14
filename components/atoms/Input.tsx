import { FiXCircle } from "react-icons/fi";

export type InputProps = {
    placeholder: string
    name: string
    type: string
    value: string
    onChange: (val: string) => void
}

export default function Input({ placeholder, name, type, value, onChange }: InputProps) {
    return <div className="relative w-full"><input className="w-full text-black bg-blue-100 p-2 rounded-md" placeholder={placeholder} name={name} type={type}
        value={value} onChange={(e) => onChange(e.target.value)}
    />  
    {value && <FiXCircle className="text-black absolute right-2 top-3 text-lg" onClick={()=>onChange('')} />}
    </div>
}