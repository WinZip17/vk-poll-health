import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel06 = ({ id, setResult }) => {

	const question = "У Вас есть внутричерепное давление?"
	const questionInfo1 = 'Внутричерепное давление есть у 47 % призывников.'
	const questionInfo2 = 'Это статья 24 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='6' nextPage='07' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel06;
