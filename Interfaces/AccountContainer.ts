import { listOfItems } from "@/components/Icons/IconInterface"

export interface ImageContainer {
    icon: (typeof listOfItems)[number]
    imageData?: {
        className: string
        url: string
        alt: string
    }
}

export interface IContainer extends ImageContainer {
    text: string
    link?: string
    mainLink?: string
    customLink?: string

}

