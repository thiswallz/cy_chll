import React from "react"

export type CardProps = {
    title?: React.ReactNode
    subtitle?: React.ReactNode
    children: React.ReactNode
}

export default function Card({ title, subtitle, children }: CardProps) {
    return <div className="relative border border-blue-800 p-4 rounded-md flex flex-col gap-4 hover:border-blue-600 hover:bg-gray-900">
        <h3>{title}</h3>
        {subtitle}
        {children}
    </div>
}