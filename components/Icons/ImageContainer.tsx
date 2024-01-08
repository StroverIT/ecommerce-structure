
import Image from 'next/image'

// Interfaces
import {  IImageContainer} from "@/interface/AccountContainer"

// Components
import Icons from '@/components/Icons/Icons'


function ImageContaner({icon, imageData, size}: IImageContainer){
    console.log("props", icon, imageData);
    
    if(imageData?.className){
        
        return <div className={`${imageData.className} relative`}><Image src={`/icons/${imageData.url}`} fill alt={imageData.alt}/></div>
    }
    return <div className={`pr-2 ${size ? size : "text-4xl"}`}><Icons iconType={icon} /></div>
}

export default ImageContaner