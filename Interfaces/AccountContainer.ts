import { listOfItems } from "@/components/Icons/IconInterface"

export interface IImageContainer {
    icon: (typeof listOfItems)[number]
    imageData?: {
        className: string
        url: string
        alt: string
    }
}

export interface IContainer extends IImageContainer {
    text: string
    link?: string
    mainLink?: string
    customLink?: string

}

