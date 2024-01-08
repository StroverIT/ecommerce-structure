export default function getBrands(products) {
  const brandsList = []
     products.forEach((section) => {
      const brand = section.brand
      if(brandsList.length <=0) return brandsList.push({
        name: brand,
        length: 1
      })

      if(brandsList.some(e=> e.name == brand)){
        brandsList[brandsList.findIndex(obj=> obj.name == brand)].length += 1
      }else{
        brandsList.push({
          name: brand,
          length: 1
        })
      }
      
    });
    return brandsList
  }
  