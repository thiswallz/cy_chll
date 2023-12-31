import Image from 'next/image'
import SearchMedicine from '@/components/organisms/SearchMedicine'

export default function Home() {
  return (
    <main className="flex min-h-screen p-4 justify-center">
      <div className="flex flex-col gap-10 w-full items-center justify-start max-w-xl">
        <Image src={'/Logo.png'} alt="logo" width={100} height={24} />
        <SearchMedicine />
      </div>
    </main>
  )
}
