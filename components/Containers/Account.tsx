
import Icons from '@/components/Icons/Icons'
import Link from 'next/link'

// Intefaces
import { IContainer} from "@/interface/AccountContainer"

// Components
import ImageContaner from '../Icons/ImageContainer'

function Container({ icon, text, link, imageData }: IContainer) {
    return (
        <Link href={`${link}`}>
            <section className='flex items-center justify-between px-4 py-10 transition-all border border-gray-300 shadow-md cursor-pointer hover:shadow-xl hover:scale-105'>
                <div className='flex items-center'>
                    <ImageContaner icon={icon} imageData={imageData} />
                    <div className='text-xl '>{text}</div>
                </div>
                <div className='text-xl'><Icons iconType="rightArrow" /></div>
            </section>
        </Link>
    )
}

export default Container


