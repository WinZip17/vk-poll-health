import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel03 = ({ id, setResult }) => {

	const question = "У Вас есть артроз 2 стадии крупного сустава?"
	const questionInfo1 = 'Артроз 2 стадии есть у 36 % призывников.'
	const questionInfo2 = 'Это статья 65 РБ. Наши врачи знают как его выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='3' nextPage='04' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel03;
