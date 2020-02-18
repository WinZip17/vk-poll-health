import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import React, {useState} from "react";
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";


const QuestionPage = (props) => {

    const {question, questionNumber, setResult, nextPage, questionInfo1, questionInfo2} = props

    const [isQuestion, setIsQuestion] = useState(true);
    const [info, setInfo] = useState(null);

    const result = () => {
        setResult(questionNumber, info, nextPage)
    }

    const goInfo = (i) => {
        setInfo(i)
        setIsQuestion(false)
    }

    return <div>
        <PanelHeader>Тест на категорию</PanelHeader>
        <Cell className='cursor-pointer' expandable target='_blank' href='https://vk.com/app5898182_-38225492' before={<Icon28AddCircleOutline />} description="Возможно, ты не годен в армию" >Получить консультацию</Cell>
        <Separator wide />
        {isQuestion ?         <Div  className='question-content'>
            <h1 className='question-header'>{question}</h1>
            <Button size="l" className='question-button cursor-pointer' onClick={() => goInfo('Да')} >
                ДА
            </Button>
            <Button size="l" className='question-button cursor-pointer' onClick={() => goInfo("Нет")} >
                НЕТ
            </Button>
            <Button size="l" className='question-button cursor-pointer' onClick={() => goInfo("Не знаю")} >
                НЕ ЗНАЮ
            </Button>
        </Div> :
            <Div  className='question-content'>
                <h1 className='info-header1'>{questionInfo1}</h1>
                <h1 className='info-header2'>{questionInfo2}</h1>
                <Button size="xl" mode='commerce' className='info-button cursor-pointer' target='_blank' href='https://vk.com/im?sel=-38225492' >
                    Бесплатная консультация
                </Button>
                <Button size="xl" className='info-button cursor-pointer' onClick={() => result()} >
                    Следующий вопрос
                </Button>
            </Div>
        }
        {isQuestion && <FixedLayout vertical="bottom" style={{ paddingBottom: 60, color: 'gray', textAlign : 'center' }}>
            ВОПРОС {questionNumber} из 10
            <div style={{ paddingBottom: 40, width : '1px' }}/>
        </FixedLayout>}
    </div>
}



export default QuestionPage;
