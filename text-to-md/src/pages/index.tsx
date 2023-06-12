import Image from "next/image";
import { Inter } from "next/font/google";
import Conversor from "./conversor";
import Logo from "../components/img/logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* <h1>Conversor markdown de Pomelo</h1> */}
      <Logo />
      <div className="z-10 items-center justify-between w-full font-mono text-sm lg:flex">
        <Conversor />
      </div>
    </main>
  );
}
