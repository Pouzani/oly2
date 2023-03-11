import { useState, useEffect } from 'react';
import { getUnsolvedEnigma } from '../utils/api';


export const useEnigmas = (token) => {
  const [enigmas,setEnigmas] = useState({});
  const loadEngimas = () => {
    getUnsolvedEnigma(token).then((enigma)=>{
      setEnigmas(enigma);
    });
  }
  useEffect(()=> {
    loadEngimas();
  },[]);
  return enigmas;
}
