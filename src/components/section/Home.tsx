import heroImage from "../../assets/hero.jpeg";

export default function Home() {
  return (
    <div
      className="py-28 flex justify-center animate__animated animate__fadeInDown overflow-hidden"
      id="hero"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mb-8 md:mb-0">
          <img
            src={heroImage}
            className="hover:scale-105 rounded-full w-64 md:w-72 lg:w-95 ring-4 ring-blue-500 ring-offset-4 ring-offset-slate-200  transition ease-in cursor-pointer"
            alt="hero"
          />
        </div>
        <div className="text-center lg:text-start md:ms-5 lg:ms-0 md:text-start lg:px-10 font-sans">
          <div>
            <h3 className="text-2xl">Hello! My name is</h3>
            <h1 className="text-4xl font-bold font-sans">
              Sajudin <span className="text-blue-500">Ma'ruf</span>
            </h1>
            <h3 className="text-lg">
              a Junior{" "}
              <span className="text-blue-500 font-bold font-mono">
                FrontEnd Developer
              </span>
            </h3>
            <div className="py-2">
              {/* <a
                href="CV.pdf"
                target="_blank"
                className="text-slate-50 bg-blue-500 p-2 font-bold rounded-md"
              >
                My Resume
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
