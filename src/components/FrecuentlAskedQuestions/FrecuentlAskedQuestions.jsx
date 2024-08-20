import { useState } from 'react';
import './FrecuentlAskedQuestions.css';

const FrecuentlAskedQuestions = ({ }) => {
	const [selectedQuestionOpen, setSelectedQuestionOpen] = useState(null)
	const questionsWithResponse = [{
		question: "¿Cómo puedo postularme para un tratamiento completo y con un doctor en particular?",
		response: "Para postularte a un tratamiento completo con un doctor en particular, primero debes agendar una consulta inicial. Durante esta consulta, el doctor evaluará tu caso y te ofrecerá un plan de tratamiento adecuado. Es importante mencionar que la selección del doctor puede depender de su disponibilidad y especialización."
	}, {
		question: "¿Qué debo hacer si tengo dolor después de una extracción dental?",
		response: "Es normal sentir algo de dolor o molestias después de una extracción dental. Sin embargo, si el dolor es intenso o persiste más allá de unos pocos días, es importante que contactes a tu dentista. Mientras tanto, puedes tomar analgésicos según las indicaciones de tu dentista y aplicar una compresa fría en la zona afectada para reducir la hinchazón."
	}, {
		question: "¿Con qué frecuencia debo hacerme una limpieza dental profesional?",
		response: "Se recomienda hacer una limpieza dental profesional al menos dos veces al año. Sin embargo, la frecuencia puede variar según tu situación dental específica, como la propensión a la acumulación de sarro o la presencia de enfermedades periodontales. Es mejor seguir las recomendaciones de tu dentista."
	}, {
		question: "¿Qué edad es la ideal para comenzar un tratamiento de ortodoncia?",
		response: "El momento ideal para comenzar un tratamiento de ortodoncia suele ser entre los 10 y 14 años, cuando los dientes permanentes han salido casi por completo y el crecimiento facial aún se está desarrollando. Sin embargo, los adultos también pueden beneficiarse del tratamiento ortodóntico en cualquier momento de la vida."
	}, {
		question: "¿Cuánto tiempo duran los resultados del blanqueamiento dental?",
		response: "Los resultados del blanqueamiento dental pueden durar entre 6 meses y 2 años, dependiendo de tus hábitos de higiene dental y de estilo de vida, como el consumo de café, té, o tabaco. Mantener una buena higiene bucal y realizar retoques periódicos puede prolongar los efectos del blanqueamiento."
	}];


	const changeSelectedQuestion = (selectedQuestionOpenValue = null) => {
		if (selectedQuestionOpenValue == selectedQuestionOpen) {
			setSelectedQuestionOpen(null)
			return;
		}
		setSelectedQuestionOpen(selectedQuestionOpenValue)
	}
	return (
		<div className='frecuentlaskedquestions' id='questions'>
			<h2 className='tittle__light'>Preguntas y Respuestas <span className='mark'>Frecuentes</span></h2>
			<div className="container__questions">
				{questionsWithResponse.map((question, i) => (
					<div key={i} className='question'>
						<div className="question__header" onClick={() => changeSelectedQuestion(i)}>
							<h3>{question.question}</h3><span className={selectedQuestionOpen == i ? "button-focus" : ""}></span>
						</div>
						<div className={selectedQuestionOpen == i ? "question__body" : "question__body--none"}>
							<p>{question.response}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

FrecuentlAskedQuestions.propTypes = {};

export default FrecuentlAskedQuestions;