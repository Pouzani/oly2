import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Form, Link, useParams } from "react-router-dom";
import { getEnigma } from "../utils/api";
import { Dots } from "loading-animations-react";

const Enigma = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [enigma, setEnigma] = useState({});
  const storedEnigmas = localStorage.getItem("enigmas");
  const enigmas = JSON.parse(storedEnigmas);
  const [loading, setIsLoading] = useState(false);
  const loadEnigma = () => {
    setIsLoading(true);
    getEnigma(token, id).then((gameData) => {
      setEnigma(gameData);
      setIsLoading(false);
    });
  };
  useEffect(() => loadEnigma(), []);

  return (
    <>
      <div className='xl:flex'>
        <Navbar />
        <div className='container flex justify-center items-center flex-col gap-3'>
          <div className='flex flex-col justify-center items-center gap-6 p-10'>
            <p className='text-xl underline cursor-pointer'>
              <Link to='/game'>Go back to the game</Link>
            </p>
            <h1 className='text-4xl text-center mt-10 p-2'>ENIGMA {id}</h1>
            {loading?<Dots dotColors={["#CC2627", "#323137"]} className='text-xl' />:<><p className='text-2xl text-olytext text-justify'>
              {enigma?.question}
            </p>
            {enigma?.indices?.map((indice, i) => {
              return (
                <p className='text-2xl text-olytext text-justify'>
                  {i}.{indice}
                </p>
              );
            })}</>}
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
              <input name='enigmaId' value={id} hidden />
              <button
                className='border-2 border-black rounded-md p-4 text-xl hover:bg-black hover:text-olyback ease-linear transition-all'
                type='submit'
              >
                Validate
              </button>
            </div>
          </Form>
          <div className='flex flex-col justify-center items-center gap-6 p-5 pt-8 border-2 border-dashed border-black m-3'>
            {enigmas.unsolvedEnigmas ? (
              <>
                <h1 className='uppercase text-3xl '>UNSOLVED ENIGMAS</h1>
                {enigmas.unsolvedEnigmas.map((enigma) => {
                  return (
                    <p className='border-2 border-black p-6 text-2xl text-olytext text-justify hover:bg-olytext hover:text-olyback ease-linear transition-all cursor-pointer '>
                      <Link to={`/enigma/${enigma.enigme_id}`}>
                        {enigma.enigme_id}.{enigma.question}
                      </Link>
                    </p>
                  );
                })}
              </>
            ) : (
              <></>
            )}
            {enigmas.solvedEnigmas ? (
              <>
                <h1 className='uppercase text-3xl '>SOLVED ENIGMAS</h1>
                {enigmas.solvedEnigmas.map((enigma) => {
                  return (
                    <p className='border-2 border-black p-6 text-2xl text-green-700 text-justify  '>
                      {enigma.enigme_id}.{enigma.question}
                    </p>
                  );
                })}
              </>
            ) : (
              <></>
            )}
            {enigmas.unavailableEnigmas ? (
              <>
                <h1 className='uppercase text-3xl '>unavailable enigmas</h1>
                {enigmas.unavailableEnigmas.map((enigma) => {
                  return (
                    <p className='border-2 border-black p-6 text-2xl text-olytext  hover:bg-olytext hover:text-olyback ease-linear transition-all cursor-pointer w-full text-justify flex justify-start'>
                      {enigma.id}.🔒
                    </p>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Enigma;
