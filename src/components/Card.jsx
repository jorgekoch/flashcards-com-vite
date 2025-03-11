import React, { useState } from 'react';

export default function Card({ question, answer }) {
    const [isBlank, setIsBlank] = useState(true);
    const [questionCard, setQuestionCard] = useState(false);
    const [answerCard, setAnswerCard] = useState(false);

    const cardClick = () => {
        if (isBlank) {
            setIsBlank(false);
            setQuestionCard(true);
        } else if (questionCard) {
            setQuestionCard(false);
            setAnswerCard(true);
        } else if (answerCard) {
            setAnswerCard(false);
            setIsBlank(true);
        }
    }

    return (
        <div onClick={cardClick}>
            {isBlank && <div>Click to reveal question</div>}
            {questionCard && <div>{question}</div>}
            {answerCard && <div>{answer}</div>}
        </div>
    );
}