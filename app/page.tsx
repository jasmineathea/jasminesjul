"use client";
import { useEffect, useState } from "react";
import Snow from "./components/snow";
import { client } from "@/sanity/lib/client";

type Gift = {
  _id: string;
  name: string;
  type: string;
  color: string;
  imageUrl: string;
  link: string;
  comments: string;
};

export default function Home() {
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    // Henter data fra Sanity
    client
      .fetch(`*[_type == "gift"]{
        _id,
        name,
        type,
        color,
        "imageUrl": image.asset->url,
        link,
        comments
      }`)
      .then((data) => setGifts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="relative">
      <Snow />
      <div className="min-h-screen flex flex-col items-center p-8 pb-20 gap-8 bg-background">
        <h1 className="text-5xl text-slate-700">Jasmines jul</h1>
        <h3 className="text-xl text-slate-700 font-light text-center">
          Her har jeg samlet gaveønsker for julen 2024 🎄
        </h3>
        <main className="flex flex-col gap-6 w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {gifts.map((gift) => (
              <div key={gift._id} className="bg-white p-4 rounded shadow">
                <a href={gift.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={gift.imageUrl}
                    alt={gift.name}
                    className="w-full h-48 object-cover rounded"
                  />
                </a>
                <h2 className="text-lg font-semibold mt-2">{gift.name}</h2>
                <p className="text-sm font-light text-slate-500"> 🎁 {gift.type}</p>
                <p className="text-sm font-light text-slate-700"> ❤️ {gift.color}</p>
                <p className="text-xs font-light text-rose-700 mt-1">{gift.comments}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
