import React from 'react';
import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import Question from './Components/Question';
import LoadImg from '../src/image/load.gif';

interface AppProps {
  name: string;
  category: string;
  difficulty: string;
  amount: string;
}

function App() {

  const [userData, setUserData] = useState({} as AppProps);

  const [isFormFill, setIsFormFill] = useState(false)
  const [isWindowLoad, setWindowLoad] = useState(true)

  const { register, handleSubmit, } = useForm();
  const onSubmit = (data: AppProps) => {
    setUserData(data);
    setIsFormFill(true);
    console.log(userData)
  };

  window.onload = () => {
    setWindowLoad(true)
  }


  return (
      <>
        {
          isWindowLoad === true ?
          <div className="App">{isFormFill === false ? <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" required placeholder="Enter your Name" {...register("name", { required: true, maxLength: 80 })} />
          <select {...register("category", { required: true })}>
            <option value="9">General Knowledge</option>
            <option value="23">History</option>
            <option value="22">Geography</option>
            <option value="30">Science: Gadgets</option>
            <option value="17">Science & Nature</option>
            <option value="19">Science: Mathematics</option>
            <option value="18">Science: Computers</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="25">Arts</option>
            <option value="28">Vehicles</option>
            <option value="21">Sports</option>
            <option value="10">Entertainment: Book</option>
            <option value="11">Entertainment: Film</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
          </select>
          <select value="okk" {...register("difficulty", { required: true })}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select {...register("amount", { required: true })}>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
  
          <input type="submit" />
        </form> : <Question />}</div>
        : 
      
            <div className=" position-absolute top-50 start-50 translate-middle">
            <img className="img-fluid" src={LoadImg} alt="" />
            <h2 className="text-center loading">
              Loading ...
            </h2>
          </div>
       
        }
      </>
  );
}

export default App;
