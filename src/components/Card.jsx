import React, { useState } from 'react';
import styled from 'styled-components';
import play from '../images/seta_play.png';
import turn from '../images/seta_virar.png';
import wrong from '../images/icone_erro.png';
import almost from '../images/icone_quase.png';
import right from '../images/icone_certo.png';


export default function Card({ question, answer, index, incrementCompletedCount }) {

    const [isBlank, setIsBlank] = useState(true);
    const [questionCard, setQuestionCard] = useState(false);
    const [answerCard, setAnswerCard] = useState(false);
    const [status, setStatus] = useState(null);

    const cardClick = () => {
        if (isBlank) {
            setIsBlank(false);
            setQuestionCard(true);
        } else if (questionCard) {
            setQuestionCard(false);
            setAnswerCard(true);
        }
    };

    const wrongStatus = () => {
        setStatus("wrong");
        setIsBlank(true);
        setQuestionCard(false);
        setAnswerCard(false);
        incrementCompletedCount();
    };

    const almostStatus = () => {
        setStatus("almost");
        setIsBlank(true);
        setQuestionCard(false);
        setAnswerCard(false);
        incrementCompletedCount();
    };

    const rightStatus = () => {
        setStatus("right");
        setIsBlank(true);
        setQuestionCard(false);
        setAnswerCard(false);
        incrementCompletedCount();
    };

    return (
        <>
          {isBlank && 
            <BlankStyle status={status}>
            <h1>Pergunta {index+1}</h1>
            {status === null ? <img src={play} alt="play" onClick={cardClick} /> 
            : status === "wrong" ? <img src={wrong} alt="wrong" /> 
            : status === "almost" ? <img src={almost} alt="almost" /> 
            : <img src={right} alt="right" />}
            </BlankStyle>
            }
          {questionCard && 
            <QuestionStyle><h1>{question}</h1> 
            <img src={turn} alt="turn" 
            onClick={cardClick}></img> 
            </QuestionStyle>
            }
          {answerCard && 
            <AnswerStyle><h1>{answer}</h1>
            <BoxStyle>
            <WrongBox onClick={wrongStatus}>Não lembrei</WrongBox>
            <AlmostBox onClick={almostStatus}>Quase nao lembrei</AlmostBox>
            <RightBox onClick={rightStatus}>Zap!</RightBox>
            </BoxStyle>
            </AnswerStyle>
            }
        </>
      );
}

const BlankStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 65px;
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    font-size: 16px;
    color: ${({ status }) => 
        status === "wrong" ? "#FF3030" : 
        status === "almost" ? "#FF922E" : 
        status === "right" ? "#2FBE34" : "#333333"};
    text-decoration: ${({ status }) => (status ? "line-through" : "none")};
    h1 {
        font-family: Recursive;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;

    }
`;

const QuestionStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 300px;
    height: 131px;
    margin: 20px;
    background-color: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 30px;
        height: 20px;
    }
    
    h1 {
        font-family: Recursive;
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        top: 15px;
        left: 15px;
        color: #333333;
    
    }
`

const AnswerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 300px;
    height: 131px;
    margin: 20px;
    background-color: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;
    h1 {
        font-family: Recursive;
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        top: 15px;
        left: 15px;
        color: #333333;
    }
`

const BoxStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 10px;
`

const WrongBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 37px;
    margin: 5px;
    border-radius: 5px;
    background-color: #FF3030;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: white;

`
const AlmostBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 37px;
    margin: 5px;
    border-radius: 5px;
    background-color: #FF922E;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: white;
`
const RightBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 37px;
    margin: 5px;
    border-radius: 5px;
    background-color: #2FBE34;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color: white;
`