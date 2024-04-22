import { OpenSansText } from '@/components/atoms/Texts/OpensansText'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className=" bg-blue h-96 w-full">
        <OpenSansText
          text={'MusicAll'}
          className=" text-white"
          style="w700"
          fontSize="64px"
        />
      </div>
    </main>
  )
}
