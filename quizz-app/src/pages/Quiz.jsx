import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Question from '@/shared/Question';
import { Separator } from "@/components/ui/separator";
import AnimatedNumbers from "react-animated-numbers";
import ConfettiExplosion from 'react-confetti-explosion';
import {Button }from '@/components/ui/button';
import { Link } from 'react-router-dom';


function Quiz() {
    const confettiOptions = {
        force: 0.7,
        duration: 3000,
        particleCount: 120,
        width: 800,
    };

    const pointPerQuestion = 100;
    const quiz =[
        { "text": "What is HTML?", "options": ["Hyper Text Markup Language", "Hypertext Transfer Protocol", "Highly Transferable Markup Language", "Hyper Transfer Markup Language"], "answer": "Hyper Text Markup Language" },
        { "text": "What does CSS stand for?", "options": ["Cascading Style Sheets", "Coded Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], "answer": "Cascading Style Sheets" },
        { "text": "Which programming language is primarily used for web development?", "options": ["Python", "JavaScript", "Java", "C++"], "answer": "JavaScript" },
        { "text": "What is the purpose of a CSS framework?", "options": ["To provide pre-written CSS styles and layouts", "To create dynamic animations", "To manage server-side logic", "To optimize database queries"], "answer": "To provide pre-written CSS styles and layouts" },
        { "text": "What is the purpose of JavaScript in web development?", "options": ["To style web pages", "To create dynamic content and interactivity", "To define the structure of a web page", "To manage server requests"], "answer": "To create dynamic content and interactivity" },
        { "text": "What is the role of a web server in web development?", "options": ["To design web pages", "To store website data", "To host and deliver web pages to users", "To execute client-side scripts"], "answer": "To host and deliver web pages to users" },
        { "text": "What is the purpose of a database in web development?", "options": ["To define the structure of a website", "To manage server requests", "To store and retrieve data", "To create dynamic animations"], "answer": "To store and retrieve data" },
        { "text": "What does SEO stand for in web development?", "options": ["Search Engine Optimization", "Software Engineering Organization", "Structured External Objects", "Site Enhancement Options"], "answer": "Search Engine Optimization" },
        { "text": "Which protocol is used for secure communication over the internet?", "options": ["HTTP", "FTP", "SMTP", "HTTPS"], "answer": "HTTPS" },
        { "text": "What is a responsive web design?", "options": ["A design approach that ensures web pages display correctly on different devices and screen sizes", "A design approach that focuses on aesthetics only", "A design approach that prioritizes server-side rendering", "A design approach that limits accessibility"], "answer": "A design approach that ensures web pages display correctly on different devices and screen sizes" }
    ]

    const [question, setQuestion] = useState(0); // Start from the first question
    const [score, setScore] = useState(0);
    const [quizDone, setQuizDone] = useState(false);

    const saveAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        if (question < quiz.length - 1) { // Check if there are more questions
            setQuestion(prevQuestion => prevQuestion + 1);
        } else {
            setQuizDone(true); // If all questions answered, set quizDone to true
        }
    }

    return (
        <Card>
            {quizDone && (
            <CardHeader>
                <h1 className='text-3xl text-center font-bold p-2'>QUIZ RESULT</h1>
            </CardHeader>
            )}
             {!quizDone && <CardTitle className='text-center p-5'>Question {question + 1}/{quiz.length}</CardTitle>}
            <CardContent>
                <div className="grid w-[400px]">
                    {!quizDone && <Question key={question} data={quiz[question]} save={saveAnswer} />}
                    {quizDone && (
                        <>
                            <Separator className='my-2' />
                            <span className='text-2xl text-center'>{score}/{quiz.length} Questions are correct!</span>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <AnimatedNumbers
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 0.3,
                                    })}
                                    animateToNumber={score * pointPerQuestion}
                                    fontStyle={{
                                        fontSize: 40,
                                    }}
                                />
                                <ConfettiExplosion {...confettiOptions} />
                            </div>
                            <span className='text-2xl  text-center'>points</span>
                        </>
                    )}
                </div>
            </CardContent>
            {quizDone && (
            <CardFooter>
                <Link to='/'>
             <Button>BACK TO HOME</Button>
             </Link>
            </CardFooter>
            )}
        </Card>
    );
}

export default Quiz;
