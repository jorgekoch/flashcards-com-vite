export default function Card({ questionCard, answerCard, setQuestionCard, setAnswerCard, flashcards }) {
    return (
        <div>
            {flashcards.map((card) => {
                return (
                    <div key={card.id}>
                        <div onClick={() => setQuestionCard(!questionCard)}>
                            {card.question}
                        </div>
                        <div onClick={() => setAnswerCard(!answerCard)}>
                            {card.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}            