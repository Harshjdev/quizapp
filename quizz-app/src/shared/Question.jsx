import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import {Button }from '@/components/ui/button'; // Import Button component without curly braces
import Quiz from '@/pages/Quiz';

function Question(props) {
    const [submitted, setSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [question,setQuestion]=useState([]);

    const submitAnswer = () => {
        if (selectedOption !== null) {
            setSubmitted(true);
        }
    }

    if(question <Quiz.length){
        setQuestion(question + 1);
    }
    if(question == Quiz.length){
        //set quiz done
    }
    const nextQuestion = () => {
        props.save(props.data.answer === props.data.options[selectedOption]);
        setSelectedOption(null); // Reset selected option for the next question
        setSubmitted(false); // Reset submitted state for the next question
    }

    const handleOptionClick = (index) => {
        if (!submitted) {
            setSelectedOption(index);
        }
    }

    return (
        <>
            <div className='flex flex-col text-xl mb-2'>
                <p>{props.data.text}</p>
                {props.data.options.map((option, i) => (
                    <div key={i} onClick={() => handleOptionClick(i)} className={`border px-2 py-2 mt-1 rounded flex justify-between items-center cursor-pointer ${selectedOption === i ? 'border-[#aaa]' : ''} ${submitted ? 'pointer-events-none' : ''}`}>
                        <span>{option}</span>
                        {submitted && props.data.answer === option ? <FaCheckCircle className='text-green-700' /> :''}
                    </div>
                ))}

                <Separator className='my-4' />
                {!submitted && selectedOption !== null ? <Button onClick={submitAnswer}>Submit</Button> : null}
                {submitted ? <Button onClick={nextQuestion}>Next</Button> : null}
            </div>
        </>
    );
}

export default Question;
