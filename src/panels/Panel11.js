import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel11 = ({ id, setResult }) => {

	const question = "У Вас есть язва желудка или 12п-кишки?"
	const questionInfo1 = 'Язва есть у 14 % призывников.'
	const questionInfo2 = 'Это статья 58 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='11' nextPage='12' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel11;
