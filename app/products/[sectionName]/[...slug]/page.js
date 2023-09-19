
// API
import { productByItemId } from "@/API/products";
import Product from "@/pages/ItemProduct/Product";


export default async function Index( {params, searchParams}) {
    const {sectionName, slug} = params
    const [productId, articleId, itemId] = slug
 
const data = await productByItemId(sectionName, slug)

  return (
  //  <Product data={data} params={params} searchParams={searchParams} slug={slug}/>
  <div>Test</div>
  );
}

