import Image from "next/image";
async function getCategory(params) {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const cetagories = await getCategory();
  console.log(cetagories);

  return (
    <div>
      <h2 className="font-bold text-2xl">homepages</h2>
      <div className="grid grid-cols-12 gap-3 container mx-auto my-8">
        <div className=" col-span-3">
          <h2 className="font-bold text-lg">All catagory</h2>
          <ul className="flex flex-col gap-3">
            {cetagories.map((cetagory) => (
              <div key={cetagory.id}>
                <li className="bg-gray-200 py-2 text-sm font-bold text-center items-center justify-center rounded-md">
                  {cetagory.category_name}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="bg-purple-400 col-span-6">
          <h2>ALl news</h2>
        </div>
        <div className="bg-pink-400 col-span-3">
          <h2>Social icons</h2>
        </div>
      </div>
    </div>
  );
}
