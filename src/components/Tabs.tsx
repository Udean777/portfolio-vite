import {
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import {
  TbBrandTailwind,
  TbBrandVite,
  TbBrandNextjs,
  TbBrandMongodb,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const tabs = [
  {
    id: "tech",
    title: "Tech",
    content: (
      <div className="flex justify-center lg:justify-start font-sans">
        <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
              text-orange-600
               border-2 
                 border-orange-600 transition ease-in"
          >
            <FaHtml5 className="cursor-pointer m-auto w-auto py-5" size={150} />
            <p className="flex justify-center pb-2 font-sans font-bold">HTML</p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105 
               text-blue-600 border-2
                 border-blue-600 transition ease-in"
          >
            <FaCss3Alt
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">CSS</p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-yellow-500 border-2
                  border-yellow-500 transition ease-in"
          >
            <FaJs className="cursor-pointer m-auto w-auto py-5" size={150} />
            <p className="flex justify-center pb-2 font-sans font-bold">
              JavaScript
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-green-500 border-2 
                  border-green-500 transition ease-in"
          >
            <FaNodeJs
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              NodeJS
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "framework",
    title: "Framework & Library",
    content: (
      <div className="flex justify-center lg:justify-start font-sans">
        <div className="justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-purple-600 border-2
                border-purple-600 transition ease-in"
          >
            <FaBootstrap
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              Bootstrap
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-blue-600 border-2
                border-blue-600 transition ease-in"
          >
            <TbBrandTailwind
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              Tailwind CSS
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-slate-400 border-2
             border-gray-400 transition ease-in"
          >
            <TbBrandNextjs
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              Next JS
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-blue-500 border-2
                border-blue-500 transition ease-in"
          >
            <RiReactjsFill
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              React JS
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-indigo-500 border-2
               border-indigo-500 transition ease-in"
          >
            <TbBrandVite
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">Vite</p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-green-500 border-2
                 border-green-500 transition ease-in"
          >
            <TbBrandMongodb
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              MongoDB
            </p>
          </div>

          <div
            className="w-40 my-5 overflow-hidden shadow-sm rounded-3xl hover:scale-105
               text-pink-500 border-2
               border-pink-500 transition ease-in"
          >
            <SiExpress
              className="cursor-pointer m-auto w-auto py-5"
              size={150}
            />
            <p className="flex justify-center pb-2 font-sans font-bold">
              Express Js
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default tabs;
