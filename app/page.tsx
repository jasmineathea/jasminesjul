import Snow from "./components/snow";

export default function Home() {
  // Sanity-data

  return (
    <div className="relative">
      <Snow />
        <div className="min-h-screen flex flex-col items-center p-8 pb-20 gap-8 bg-background">
            <h1 className="text-5xl text-slate-700">Jasmines jul</h1>
            <h3 className="text-xl text-slate-700 font-light">Her har jeg samlet gaveønsker for julen 2024 🎄</h3>
          <main className="flex flex-col gap-6 w-full max-w-2xl">
        </main>
      </div>
    </div>
  );
}
