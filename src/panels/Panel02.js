import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel02 = ({ id, setResult }) => {

	const question = "У Вас есть остеохондроз с незначительным нарушением функции?"
	const questionInfo1 = 'Данная патология есть у 57 % призывников.'
	const questionInfo2 = 'Это статья 66 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='2' nextPage='03' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel02;
