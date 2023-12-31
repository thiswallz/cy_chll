import { NextResponse } from 'next/server'
import dataset from '@/app/data/drugs.json'

export async function GET(request: Request) {
    const { drugs } = dataset
    const { searchParams } = new URL(request.url)
    const text = searchParams.get('text')

    const filteredDrugs = drugs.filter(drug => {
        return drug.name.toLowerCase().includes(text?.toLowerCase() || '') ||
            drug.diseases.some(disease => disease.includes(text?.toLowerCase() || ''))
    })

    return NextResponse.json(filteredDrugs)
}