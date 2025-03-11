import React, { useState } from 'react';
import styled from 'styled-components';
import seta from '../images/seta_play.png';

export default function Card({ question, answer, i }) {
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
        }
    }

    return (
        <CardStyle onClick={cardClick}>
            {isBlank && <div>Pergunta <img src={seta} alt="seta"></img></div>}
            {questionCard && <div>{question}</div>}
            {answerCard && <div>{answer}</div>}
        </CardStyle>
    );
}

const CardStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    height: 65px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin: 10px;
    padding: 20px;
    font-size: 16px;
    color: #333333;
`