import Image from "next/image";
import Snowfall from "./components/snowfall";

// Gavekort-komponent: representerer hvert gaveønske
function Gave({ title, description, color, imageUrl, link }) {
  return (
    <div
      className="p-6 rounded-lg shadow-md text-center transition-colors"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="rounded-md hover:opacity-80 transition-opacity"
          />
        </a>
      )}
    </div>
  );
}

// Hovedfunksjon for nettsiden
export default function Home() {
  // Midlertidig data. Sanity-data kan hentes med en Sanity-klient her senere.
  const gaver = [
    {
      title: "Gaveønske 1",
      description: "En beskrivelse av gaveønske 1.",
      color: "#f3f4f6",
      imageUrl: "/path/to/image1.jpg",
      link: "https://www.linktilgaven1.com",
    },
    {
      title: "Gaveønske 2",
      description: "En beskrivelse av gaveønske 2.",
      color: "#e0e7ff",
      imageUrl: "/path/to/image2.jpg",
      link: "https://www.linktilgaven2.com",
    },
    // Flere gaveønsker kan legges til her.
  ];

  return (
    <div className="relative">
    <Snowfall />
    <div className="min-h-screen flex flex-col items-center p-8 pb-20 gap-8 bg-background">
      <h1 className="text-3xl font-bold">Jasmines jul</h1>
      <h3 className="text-xl font-bold">Her har jeg samlet gaveønsker 🎁 for julen 2024 🥰</h3>
      <main className="flex flex-col gap-6 w-full max-w-2xl">
        {gaver.map((gave, index) => (
          <Gave
            key={index}
            title={gave.title}
            description={gave.description}
            color={gave.color}
            imageUrl={gave.imageUrl}
            link={gave.link} />
        ))}
      </main>
    </div>
    </div>
  );
}
