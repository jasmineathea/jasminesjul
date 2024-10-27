import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 bg-sky-200 text-sky-800 relative z-20">
      <p className="text-small font-thin">
        kildekoden ligger ute på{" "}
        <Link href="https://github.com/jasmineathea" target="_blank">
          <span className="text-sky-800 hover:text-sky-400">
            github
          </span>
        </Link>
        -profilen min! :)
      </p>
      <p className="text-small font-thin text-slate-500 mt-2">Jasmine A. Næss 🧸 2024</p>
    </footer>
  );
}

export default Footer;
