import instance from "../components/axios/Axios";

async function loginData({ username, password }) {
  /**
   *
   * this is only a mockup
   * this function takes a username and a password tries to login and returns
   * the saved game or an error and a rediraction
   */
  let response = null;
  const loginData = {
    username: username,
    password: password,
  };

  //calls the api for login and returns respons
  try {
    response = await instance.post("/login", loginData);
  } catch (e) {
    response = e.response.data.error;
  }
  console.log(response);
  return response.data;
}

async function getSavedGame(token) {
  try {
    const response = await instance.get("/get-game", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

async function getNextGame(token, answer, id) {
  const data = {
    id:id,
    pin:answer
  }
  try{
    const response = await instance.post("/validate_game",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

async function getUnsolvedEnigma(token){
  try{
    const response = await instance.get("/unsolved_enigmas",{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

async function solveEnigma(token,answer,id){
  const data = {
    id:id,
    answer:answer
  }
  try{
    const response = await instance.post("/validate_enigma",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

async function getFinalEnigma(token){
  try{
    const response = await instance.get("/solveFinalEnigma",{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

async function submitFinalEnigma(token,answer){
  const data = {
    answer:answer
  }
  try{
    const response = await instance.post("/validateFinalEnigma",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

async function getEnigma(token,id){
  const data = {
    id:id
  }
  try{
    const response = await instance.post("/solve_enigma",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },});
      return response.data;
  }
  catch(e){
    return e.response.data;
  }
}

export { loginData, getSavedGame, getNextGame, getUnsolvedEnigma, solveEnigma, getFinalEnigma, submitFinalEnigma, getEnigma };
