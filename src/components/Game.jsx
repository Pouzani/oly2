import { useAtom } from "jotai";
import { useSaveGame } from "../hooks/useSaveGame";
import { Form, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEnigmas } from "../hooks/useEnigmas";
import { useState, useEffect } from "react";
import { getSavedGame } from "../utils/api";
import { Dots } from "loading-animations-react";
import { AiOutlineLock } from "react-icons/ai";

export function Game() {
  const token = localStorage.getItem("token");
  const [game, setGame] = useState({});
  const [loading, setIsLoading] = useState(false);
  const loadGame = () => {
    setIsLoading(true);
    getSavedGame(token).then((gameData) => {
      setGame(gameData);
      setIsLoading(false);
    });
  };
  useEffect(() => loadGame(), []);
  const storedEnigmas = localStorage.getItem("enigmas");

  const enigmas = JSON.parse(storedEnigmas);

  console.log(enigmas,game);

  // switch (game.category) {
  //   case "fire":
  //     color = "[#fc3600]";
  //     break;
  //   case "wind":
  //     color = "[#66fff4]";
  //     break;
  //   case "land":
  //     color = "[#c46f00]";
  //     break;
  //   case "water":
  //     color = "[#0048ff]";
  //     break;
  // }

  return (
    <>
      <div className='xl:flex'>
        <Navbar />
        <div className='container mt-4 flex justify-center items-center flex-col gap-3'>
          {loading ? (
            <Dots dotColors={["#CC2627", "#323137"]} className='text-xl' />
          ) : (
            <div className='flex flex-col justify-center items-center gap-6 p-10'>
              <h1 className='text-3xl uppercase'>{game?.game_name}</h1>
              <h2 className='text-2xl underline uppercase'>
                room : {game?.game_room}
              </h2>
              <p className='text-2xl text-olytext text-justify'>
                {game?.game_description}
              </p>
              <p className={`text-2xl underline text-justify uppercase`}>
                category : {game?.category?.name}
              </p>
            </div>
          )}
          <Form method='post'>
            <div className='flex flex-col gap-4 mb-28'>
              <label htmlFor='username' className='text-2xl'>
                Code PIN
              </label>
              <input
                type='text'
                name='pin'
                id='pin'
                className='bg-transparent border-2 border-black rounded-md p-4 pr-20 text-lg placeholder:text-olyhamb focus:outline-none'
              />
              <input name='gameId' value={game?.game_id} hidden />
              <input name='indice' value={game?.game_indice} hidden />
              <button
                className='border-2 border-black rounded-md p-4 text-xl hover:bg-black hover:text-olyback ease-linear transition-all cursor-pointer'
                type='submit'
              >
                Next Game !
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
}
