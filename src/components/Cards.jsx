import React, { useState } from 'react';
import Card from "./Card";

export default function Cards(props) {
    const [questionCard, setQuestionCard] = useState(false);
    const [answerCard, setAnswerCard] = useState(false);
    return (
        <div>
            <Card 
                flashcards={props.flashcards} 
                questionCard={questionCard} 
                answerCard={answerCard} 
                setQuestionCard={setQuestionCard}
                setAnswerCard={setAnswerCard}
            />
        </div>
    )
}