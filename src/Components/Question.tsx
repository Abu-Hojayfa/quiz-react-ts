import * as React from 'react';

interface userData {

    name: string;
    category: string;
    difficulty: string;
    amount: string;

}

const Question = ({name, category, difficulty, amount}:userData) => {

  console.log(name)

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Question;