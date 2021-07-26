import React from 'react';
import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import Question from './Components/Question';
import LoadImg from '../src/image/load2.gif';
import top from '../src/image/loading.gif';

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
          <div className="App">
            {isFormFill === false ? 
              <form className="introForm m-auto row g-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="w-25 introPic m-auto">
                  <img className=" img-fluid" src={top} alt="" />
                </div>

              <input className="form-control m-2" type="text" required placeholder="Enter your Name" {...register("name", { required: true, maxLength: 80 })} />


              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">Category</label>
                <select  className="form-select" {...register("category", { required: true })}>
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
              </div>
              
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Difficulty Mode</label>
                <select className="form-select" {...register("difficulty", { required: true })}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              </div>

              <div className="col-md-3">
                <label htmlFor="inputZip" className="form-label">Questions</label>
                <select className="form-select" {...register("amount", { required: true })}>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="15">15</option>
              </select>
              </div>
      
              <input className="btn btn-success btn-lg w-25 m-2" type="submit" />
            </form> : 
            <Question />}
          </div>
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
