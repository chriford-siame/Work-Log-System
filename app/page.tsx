import Calendar from '@/components/Calendar'
import Logs from '@/components/Logs'
import Navbar from '@/components/Navbar'
import { NewDialog } from '@/components/NewLog'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5 contrast-less space-y-10'>
      <Navbar />
      <NewDialog />
      <Calendar />
      <Logs />
    </div>
  )
}
