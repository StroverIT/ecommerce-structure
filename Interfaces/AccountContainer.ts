
export interface ImageContainer {
    icon?: string | ""
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

