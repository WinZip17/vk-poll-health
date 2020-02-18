import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel04 = ({ id, setResult }) => {

	const question = "У Вас есть плоскостопие 3 степени?"
	const questionInfo1 = 'Плоскостопие 3 степени есть у 29 % призывников.'
	const questionInfo2 = 'Это статья 68 РБ. Наши врачи знают как его выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='4' nextPage='05' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel04;
