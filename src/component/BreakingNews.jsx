import React from "react";
import Marquee from "react-fast-marquee";
const news = [
  { id: 1, title: "Breaking news: the primmister of bangladesh " },
  {
    id: 2,
    title: "breaking news : Sports in bangladesh",
  },
  { id: 3, title: "breaking news : Police in bangladesh is very danguries" },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-4 bg-gray-300 py-2 container mx-auto px-2">
      <button className="btn bg-pink-500">News</button>
      <Marquee pauseOnHover = {true}>
        {news.map((n) => (
          <span key={n.id}>{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
