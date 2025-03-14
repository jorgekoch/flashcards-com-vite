import React from 'react';
import styled from "styled-components"

export default function Contador({ completedCount, flashcards }) {

    return (
        <div>
        <CountStyle>{ completedCount }/{flashcards.length} CONCLUÍDOS</CountStyle>
        </div>
    )
}

const CountStyle = styled.h1`
    font-family: Recursive;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #333333;
`