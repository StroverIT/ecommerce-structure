export const formatSection = ({section, article, item, sectionRoute}) => {
   return {
    price: item.price.toFixed(2).split("."),
    imageUrl: section.imageUrl,
    name: `${section.name} ${article.name} - ${
      item.weight
    } ${section.itemUnit ? section.itemUnit : ""}`,
    brand: section.name,
    weight: item.weight,
    route: `/products/${sectionRoute}/${section._id}?article=${article._id}&item=${item._id}`,
    _id: item._id,
   }
  };
  
