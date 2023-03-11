<<<<<<< HEAD:src/pages/Chase.jsx
import Navbar from "../components/Navbar";
import { Form } from "react-router-dom";
=======
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "../../api/Axios";
import { useSignIn } from 'react-auth-kit'

const Chasse = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage]=useState('');
  const signIn = useSignIn();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post("/login", loginData);
      signIn({
        token:response.data.token,
        expiresIn: 7200,
        tokenType:"Bearer",
        authState:{username:username}
      })
    } catch (error) {
      const result = error.response;
      setErrorMessage(result.data.error);
    }
  };
>>>>>>> 4cbdb6fb97fcb36628f6d2b8db9fff96ef8ae23f:src/pages/Chasse/Chasse.jsx

function Chase() {
  return (
    <>
      <div className='xl:flex'>
        <Navbar />
        <div className='container flex justify-center items-center flex-col gap-1'>
          <h1 className='text-4xl text-center mt-10 p-2'>
            Welcome to LA CHASE AU TRESOR
          </h1>
          <Form method='post'>
            <div className='flex flex-col gap-4'>
              <label htmlFor='username' className='text-2xl'>
                Username
              </label>
              <input
                type='text'
                name='username'
                id='username'
                className='bg-transparent border-2 border-black rounded-md p-4 pr-20 text-lg placeholder:text-olyhamb focus:outline-none'
              />
              <label htmlFor='password' className='text-2xl'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='bg-transparent border-2 border-black rounded-md p-4 pr-20 text-lg placeholder:text-olyhamb focus:outline-none'
              />

              <button
                className='border-2 border-black rounded-md p-4 text-xl hover:bg-black hover:text-olyback ease-linear transition-all'
                type='submit'
              >
                Start !
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Chasse;
