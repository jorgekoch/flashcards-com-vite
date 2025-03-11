import React from 'react';
import Card from "./Card";

export default function Cards(props) {
    return (
        <div>
            {props.flashcards.map((flashcard) => {
                return (
                    <Card 
                        key={flashcard.id} 
                        question={flashcard.question} 
                        answer={flashcard.answer} 
                    />
                );
            })}
        </div>
    );
}