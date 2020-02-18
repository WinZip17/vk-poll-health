import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel07 = ({ id, setResult }) => {

	const question = "У Вас есть гипертония 1 стадии?"
	const questionInfo1 = 'Гипертония 1 стадии есть у 51 % призывников.'
	const questionInfo2 = 'Это статья 43 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='7' nextPage='08' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel07;
