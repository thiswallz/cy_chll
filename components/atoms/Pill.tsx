export type PillProps = {
    children: React.ReactNode
}

export default function Pill({ children }: PillProps) {
    return <span className="text-xs text-orange-800 bg-orange-100 rounded-xl p-1 px-2">
        {children}
    </span>
}