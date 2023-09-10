import "animate.css";
import AboutComp from "../AboutComp";

export default function About() {
  return (
    <main className="h-full">
      <div className="py-20 font-sans animate__animated animate__fadeInDown overflow-hidden">
        <div>
          <h1 className="border-b-2 border-blue-500 text-3xl sm:text-3xl md:text-3xl font-sans font-bold flex justify-center w-40 m-auto">
            About me
          </h1>
        </div>
        <AboutComp />
      </div>
    </main>
  );
}
