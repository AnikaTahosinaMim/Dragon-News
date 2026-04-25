import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShare1, CiShare2 } from "react-icons/ci";
import { FaEye, FaRegStar } from "react-icons/fa";

const Card = ({ news }) => {
  return (
    <div>
      <div key={news.id} className="card bg-base-100 p-2 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full "
              src={news.author.img}
              alt="image"
              width={60}
              height={60}
            ></Image>
            <div>
              <h2 className="font-bold text-lg">{news.author.name}</h2>
              <p>{news.author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <CiShare2 />
            </span>
            <span>
              <CiShare1 />
            </span>
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            width={300}
            height={200}
            alt="news-image"
            className="w-full"
          ></Image>
        </figure>
        <div className="card-body">
          <p className="line-clamp-3">{news.details}</p>
          <Link href={`/news/${news._id}`} className="text-pink-400">see more</Link>
          <div className="flex justify-between border-t border-t-gray-300 py-4">
            <div className="text-yellow-600 flex gap-1 items-center">
              <span>
                <FaRegStar />
              </span>
              <span>
                <FaRegStar />
              </span>
              <span>
                <FaRegStar />
              </span>
              <span>
                <FaRegStar />
              </span>
              <span>
                <FaRegStar />
              </span>
              <span className="text-black">{news.rating.number}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <span>{news.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
