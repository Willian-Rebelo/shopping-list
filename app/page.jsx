"use client";

import Image from "next/image";
import Task from "./assents/task.png";
import { useState, useRef } from "react";
import { v4 } from "uuid";

export default function Home() {
  const [product, setproduct] = useState([]);
  const inputRef = useRef();

  function clickBtn() {
    setproduct([{ id: v4(), name: inputRef.current.value }, ...product]);
    inputRef.current.value = ""
  }

  function deleteProduct(id) {
    setproduct(product.filter(product => product.id !== id))
  }

  return (
    <main className="h-screen flex justify-center items-center bg-black">
      <div className="flex rounded-xl border-2 border-[#CEF0FE]">
        <section className="flex justify-center items-center rounded-xl">
          <Image
            src={Task}
            width={600}
            height={600}
            alt="Ilustration Task list"
          />
        </section>
        <section className="h-[500px] w-[500px] flex flex-col gap-7 py-10 px-5 text-white rounded-xl">
          <h1 className="font-title tracking-wider text-4xl text-center">
            Task List
          </h1>
          <div className="flex justify-center items-center gap-3">
            <input
              placeholder="Products..."
              ref={inputRef}
              className="w-[60%] h-[90%] p-3 placeholder-[#60A5FA] placeholder-shown:font-semibold outline-none border-2 rounded-lg bg-transparent"
            />
            <button
              onClick={clickBtn}
              className="rounded-lg p-1 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55px"
                height="55px"
                viewBox="0 0 24 24"
                className="hover:ring-[3px] hover:shadow-xl rounded-full text-2xl stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.45"
                ></path>
                <path d="M8 12H16" stroke-width="2"></path>
                <path d="M12 16V8" stroke-width="2"></path>
              </svg>
            </button>
          </div>
          <main className="w-full px-[52px] flex flex-col gap-5 overflow-y-scroll">
            {product.map((product) => (
              <div key={product.id} className="flex items-baseline justify-between pl-3 pr-">
                <p className="text-xl pl-2">{product.name}</p>
                <button onClick={() => deleteProduct(product.id)} className="btn">
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </div>
            ))}
          </main>
        </section>
      </div>
    </main>
  );
}
