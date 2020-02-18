import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import QuestionPage from "../QuestionPage";

const Panel09 = ({ id, setResult }) => {

	const question = "У Вас есть крупные родинки в местах соприкосновения с одеждой?"
	const questionInfo1 = 'Крупные травмирующиеся родинки есть у 19% призывников.'
	const questionInfo2 = 'Это статья 10 РБ. Наши врачи знают как ее выявить.'

	return <Panel id={id}>
		<QuestionPage question={question} questionNumber='9' nextPage='10' setResult={setResult}
					  questionInfo1={questionInfo1} questionInfo2={questionInfo2}/>
	</Panel>
}


export default Panel09;
