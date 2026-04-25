import Card from "@/component/homepage/Card";
import Leftside from "@/component/homepage/Leftside";
import Rightside from "@/component/homepage/Rightside";
import { getCategory, getNewsBycategory } from "@/lib/fetch";
import React from "react";


const CategoryNews = async ({ params }) => {
  const { id } = await params;
  const cetagories = await getCategory();
  const newscategory = await getNewsBycategory(id);
  return (
    <div>
      <h2>News by categorys</h2>
      <div className="grid grid-cols-12 gap-3 container mx-auto my-8">
        <div className=" col-span-3">
          <Leftside cetagories={cetagories} activeId={id}></Leftside>
        </div>
        <div className=" col-span-6">
          <div className="space-y-4">
            <h2 className="font-bold text-xl">Dragon News Home</h2>
            {newscategory.length > 0 ? (
              newscategory.map((news) => (
               <Card key={news._id} news={news}></Card>
              ))
            ) : (
              <h2 className="font-bold text-lg text-center"> No News Found ❌</h2>
            )}
          </div>
        </div>
        <div className=" col-span-3">
          <Rightside></Rightside>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
