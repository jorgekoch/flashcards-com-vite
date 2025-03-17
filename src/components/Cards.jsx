import React from 'react';
import Card from "./Card";

export default function Cards({ flashcards, setCompletedCount }) {
    return (
        <div>
            {flashcards.map((flashcard, index) => {
                return (
                    <Card 
                        key={flashcard.id} 
                        index={index}
                        question={flashcard.question} 
                        answer={flashcard.answer} 
                        setCompletedCount={setCompletedCount}
                    />
                );
            })}
        </div>
    );
}