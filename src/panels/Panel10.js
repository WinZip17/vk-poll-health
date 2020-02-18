import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel10 = ({ id, setResult }) => {

	const question = "У Вас есть полипозный синусит (заложен нос)?"
	const questionInfo1 = 'Полипозный синусит есть у 19 % призывников.'
	const questionInfo2 = 'Это статья 49 РБ. Наши врачи знают как его выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='10' nextPage='12' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel10;
