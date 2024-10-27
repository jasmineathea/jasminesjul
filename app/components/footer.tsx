import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 bg-sky-200 text-slate-400 relative z-20">
      <h4 className="text-small font-thin">
        kildekoden ligger ute på{" "}
        <Link href="https://github.com/jasmineathea" target="_blank">
          <span className="text-slate-400 hover:text-slate-500">
            github
          </span>
        </Link>
        -profilen min! :) </h4>
      <h3 className="text-small font-thin text-slate-500 mt-2">
        Jasmine A. Næss 🎅🏽 2024 </h3>
    </footer>
  );
}

export default Footer;
