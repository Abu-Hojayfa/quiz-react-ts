import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

interface userData {
    name: string;
    category: string;
    difficulty: string;
    amount: string;
}

interface allQuestions {
  question: string;
  category: string;
  correct_answers: string;
  incorrect_answers: [];
  difficulty: string;
} 

const Question = ({name, category, difficulty, amount}:userData) => {

  const [isCorrectAns, setIsCorrectAns] = useState({ca:0})
  const [isNegAns, setIsNegAns] = useState({na:0})
  const [questions, setQuestions] = useState<allQuestions[]>([])
  const [mcqs, setMcqs] = useState({})

  useEffect(()=>{
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    .then(res => res.json())
    .then(data => setQuestions(data.results));
  }, [name, category, difficulty, amount])

  return (
    <div>
      <div className="introForm m-auto">
        <div>
        <Swiper
          pagination={{
            type: "progressbar"
          }}
          navigation={true}
          cssMode={true}
          className="mySwiper"
        >
          {
            questions.map((question)=>
              <SwiperSlide>
                
                <h1>{question.question}</h1>

              </SwiperSlide>
            )
          }
          
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Question;