'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import data from '../../lib/questions.json';
import Question from './question';


export default function Questions() {

  const router = useRouter();
  const [questions, setQuestions] = useState(data.questions);
  const [isAllCorrect, setIsAllCorrect] = useState(false);
  const [hasError, setHasError] = useState(false);

  let redirectToInvitation = false;

  const validateAnswers = () => {
    questions.map(question => {
      if ((question.actual_answer === null || "") 
        || !question.answer.includes(question.actual_answer.toLocaleLowerCase())) {
        question.error = "Your answer here is wrong!";
        setHasError(true);
      }
      else {
        setIsAllCorrect(true);
        setHasError(false);
        redirectToInvitation = true;
      }
    })

    if (redirectToInvitation) {
      setTimeout(() => {
        router.push('/invitation')
      }, 1000)
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {isAllCorrect && !hasError ? (
        <>
          <div className="mt-20">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
              <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
            </svg>
            <p className="sucessmsg mt-10">You got it all right!</p>
          </div>
          
        </>
      ) : (
        <>
          <h1 className="text-xl">Security Questions</h1>
          <p>
          </p>
          <div className="mt-5">
            {questions && questions.map((question, i) => {
              return <Question key={i} {...question} onChangeAnswer={(value: string, id: number) => {
                questions.filter(question => question.id === id).map(question => question.actual_answer = value)
                console.log(questions);
                setQuestions(questions)
              }} />
            })}
            <div className="mt-20 flex flex-col items-center">
              <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={validateAnswers}>
                Submit
              </button>
            </div>
          </div>
        </>
      ) }
      
    </main>
  )
}
