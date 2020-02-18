import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel01 = ({ id, setResult }) => {

	const question = "У вас есть сколиоз 2 степени?"
	const questionInfo1 = 'Сколиоз 2 степени есть у 43 % призывников.'
	const questionInfo2 = 'Это статья 66 РБ. Наши врачи знают как его выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='1' nextPage='02' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel01;
