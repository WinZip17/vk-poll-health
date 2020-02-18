import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel05 = ({ id, setResult }) => {

	const question = "У Вас есть гидроцефалия?"
	const questionInfo1 = 'Гидроцефалия есть у 68 % призывников.'
	const questionInfo2 = 'Это статья 24 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='5' nextPage='06' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel05;
