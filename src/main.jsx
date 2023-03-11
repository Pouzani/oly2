import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import Chase from "./pages/Chase";
import "./index.css";
import ErrorPage from "./pages/Error";
import Activities from "./pages/Activities";
import EnigmaError from "./components/EnigmaError";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Soiree from "./pages/Soiree";
import { Game } from "./components/Game";
import {
  getNextGame,
  getSavedGame,
  getUnsolvedEnigma,
  loginData,
  solveEnigma,
  submitFinalEnigma
} from "./utils/api";
import gameLoader from "./loaders/gameLoader";
import { atom, createStore, useAtom } from "jotai";
import Enigma from "./components/Enigma";
import { GameError } from "./components/GameError";
import FinalEnigma from "./components/FinalEnigma";
import FinalEnigmaWrong from "./components/FinalEnigmaWrong";
import Congratulations from "./components/Congratulations";

const indices={indices:[]};
localStorage.setItem("indices",JSON.stringify(indices));

async function login({ request }) {
  let formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const game = await loginData({ username, password });
  if (game.game_id) {
    localStorage.setItem("token", game.token);
    const enigmas = await getUnsolvedEnigma(game.token);
    localStorage.setItem("enigmas", JSON.stringify(enigmas));
    return redirect("/game");
  }
  else if (game.final_enigma){
    localStorage.setItem("token", game.token);
    return redirect("/finalEnigma");
  }
  
  return null;
}

async function nextGame({ request }) {
  let formData = await request.formData();
  const answer = formData.get("pin");
  const id = formData.get("gameId");
  const token = localStorage.getItem("token");
  const game = await getNextGame(token, answer, id);
  if (game.game_id) {
    console.log("game");
    return redirect("/game");
  }
  else if (game.final_enigma){
    console.log("final");
    return redirect("/finalEnigma");
  }
  console.log("gameerror");
  console.log(game);
  return redirect("/gameError");
}

async function submitEnigma({ request }) {
  let formData = await request.formData();
  const answer = formData.get("answer");
  const id = formData.get("enigmaId");
  const token = localStorage.getItem("token");
  const game = await solveEnigma(token, answer, id);
  if (game.game_id) {
    const enigmas = await getUnsolvedEnigma(game.token);
    localStorage.setItem("enigmas", JSON.stringify(enigmas));
    return redirect("/game");
  }
  else if (game.final_enigma){
    return redirect("/finalEnigma");
  }
  return redirect(`/enigmaError/${id}`);
}

async function validateFinalEnigma({request}){
  let formData = await request.formData();
  const answer = formData.get("answer");
  const token = localStorage.getItem("token");
  const result = await submitFinalEnigma(token,answer);
  console.log(result);
  if(result.message == 'Congratulations!'){
    return redirect('/end');
  }
  else if (result.message === 'Wrong answer'){
    return redirect('/finalEnigmaWrong');
  }
  return null
}
=======
import Chasse from "./pages/Chasse/Chasse";
import "./index.css";
import ErrorPage from "./pages/Error";
import Activities from "./pages/Activities";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Soiree from "./pages/Soiree";
import Game1 from "./pages/Chasse/Game1";
import { AuthProvider } from "react-auth-kit";
>>>>>>> 4cbdb6fb97fcb36628f6d2b8db9fff96ef8ae23f

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
<<<<<<< HEAD
    path: "chase",
    element: <Chase />,
    action: login,
  },
  {
    path: "game",
    element: <Game />,
    action: nextGame,
  },
  {
    path: "gameError",
    element: <GameError />,
    action: nextGame,
  },
  {
    path: "enigma/:id",
    element: <Enigma />,
    action: submitEnigma
  },
  {
    path: "enigmaError/:id",
    element: <EnigmaError />,
    action: submitEnigma
  },
  {
    path: "finalEnigma",
    element: <FinalEnigma />,
    action: validateFinalEnigma
  },
  {
    path:"finalEnigmaWrong",
    element: <FinalEnigmaWrong />,
    action: validateFinalEnigma
  },
  {
    path:"end",
    element:<Congratulations />
=======
    path: "chasse",
    element: <Chasse />,
  },
  {
    path: "game1",
    element: <Game1 />,
>>>>>>> 4cbdb6fb97fcb36628f6d2b8db9fff96ef8ae23f
  },
  {
    path: "activities",
    element: <Activities />,
  },
  {
    path: "activities/soiree",
    element: <Soiree />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <RouterProvider router={router} />
    </AuthProvider>
>>>>>>> 4cbdb6fb97fcb36628f6d2b8db9fff96ef8ae23f
  </React.StrictMode>
);
