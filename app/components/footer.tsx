import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 bg-slate-300 text-rose-900">
      <p className="text-small font-thin">
        kildekoden ligger på{" "}
        <Link href="https://github.com/jasmineathea" target="_blank">
          <span className="text-rose-700 hover:text-rose-400">
            github
          </span>
        </Link>
        -profilen min
      </p>
      <p className="text-small font-thin text-rose-950 mt-2">Jasmine A. Næss 🧸 2024</p>
    </footer>
  );
}

export default Footer;
