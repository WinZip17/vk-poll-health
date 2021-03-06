import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel08 = ({ id, setResult }) => {

	const question = "У Вас бывают мигрени с аурой?"
	const questionInfo1 = 'Мигрень есть у 27 % призывников.'
	const questionInfo2 = 'Это статья 24 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='8' nextPage='09' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel08;
