import React, { useState, useEffect } from "react";
import { getFinalEnigma } from "../utils/api";
import Navbar from "./Navbar";
import { Form } from "react-router-dom";
import { Dots } from "loading-animations-react";

const FinalEnigma = () => {
  const token = localStorage.getItem("token");
  const [enigma, setEnigma] = useState({});
  const [loading, setIsLoading] = useState(true);
  const loadGame = () => {
    setIsLoading(true);
    getFinalEnigma(token).then((gameData) => {
      setEnigma(gameData);
      setIsLoading(false);
    });
  };
  useEffect(() => loadGame(), []);
  console.log(enigma);

  return (
    <>
      <div className='xl:flex'>
        <Navbar />
        <div className='container flex justify-center items-center flex-col gap-3'>
          <div className='flex flex-col justify-center items-center gap-6 p-10'>
            <h1 className='text-4xl text-center mt-10 p-2'>FINAL ENIGMA</h1>
            <p className='text-2xl text-olytext text-justify'>
              {enigma?.question}
            </p>
            {!loading ? (
              enigma.indices.map((indice, i) => {
                return (
                  <p className='text-xl text-olytext text-justify'>
                    {i}.{indice}
                  </p>
                );
              })
            ) : (
              <Dots dotColors={["#CC2627", "#323137"]} className='text-xl' />
            )}
          </div>
          <Form method='post'>
            <div className='flex flex-col gap-4 mb-10'>
              <label htmlFor='username' className='text-2xl'>
                Answer
              </label>
              <input
                type='text'
                name='answer'
                id='answer'
                className='bg-transparent border-2 border-black rounded-md p-4 pr-20 text-lg placeholder:text-olyhamb focus:outline-none'
              />
              <button
                className='border-2 border-black rounded-md p-4 text-xl hover:bg-black hover:text-olyback ease-linear transition-all'
                type='submit'
              >
                Validate
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FinalEnigma;
