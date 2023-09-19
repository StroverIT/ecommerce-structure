import Image from 'next/image'

import HeroSection from "@/pages/Home/HeroSection"
import Newsletter from "@/pages/Home/Newsletter"
import MostViewed from "@/pages/Home/MostViewed"

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <Newsletter/>
      <MostViewed/>
    </main>
  )
}
