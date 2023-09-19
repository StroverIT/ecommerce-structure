

##This is basic structure for a e-commerce website. Basically not to start from scratch, but to have some type of template with ready functionalityes

`companyName` == Company text to be replaced with the company real name
`companyLogo` == Company logo image to be replaced with the company real logo

What includes?

1. Navigation
2. Footer

3. Homepage with 


Mongodb Structure


## Product


sectionName: String
imageUrl: String
description: [String, String]
itemUnit: String,
totalBoughtProducts: Number starting from 0
articles: {
    articleName: String
    items: {
        weight: String,
        price: Number,
        boughts: Number starting from 0
    }
    totalItemBoughts: Number starting from 0
}

brand: brandSchema (Optional)

