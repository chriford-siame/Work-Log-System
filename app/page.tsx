import Navbar from '@/components/Navbar'
import { NewDialog } from '@/components/NewLog'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5 space-y-10'>
      <Navbar />
      <div className='px-5'>
        <NewDialog />
      </div>
    </div>
  )
}
