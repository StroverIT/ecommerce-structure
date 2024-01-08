

// Components
import Container from "@/components/pages/Products/Container";



// APIS
import { getAll } from "@/API/products";

export default async function Section({ params }) {
  const { sectionName } = params;

  const sections = await getAll({ sectionName});
 
  if (!sections) {
    return (
      <div className="flex justify-center items-center text-xl text-secondary  h-[40vh]">
        Няма намерени резултати
      </div>
    );
  }

  return (
    <main className="mb-auto">
      <div className="lg:grid grid-cols-[20%80%] lg:space-x-10 container">
        <Container data={JSON.stringify(sections)}/>
        
      </div>
    </main>
  );
}
