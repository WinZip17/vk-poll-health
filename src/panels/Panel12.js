import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";



const Panel12 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Тест на категорию</PanelHeader>
		<Cell className='cursor-pointer' expandable target='_blank' href='https://vk.com/app5898182_-38225492' before={<Icon28AddCircleOutline />} description="Возможно, ты не годен в армию" >Получить консультацию</Cell>
		<Separator wide />
			<Div  className='question-content'>
				<h1>Узнай, сколько стоит услуга по юридической помощи в получении военного билета в ТВОЕМ случае! ;)</h1>

				<Cell
					before={<Avatar size={72} />}
					size="l"
					description="Эксперт по помощи призывникам"
					bottomContent={
						<div style={{ display: 'flex' }}>
							<Button className='cursor-pointer' size="m">Написать</Button>
						</div>
					}
				>
					Никита Алентьев</Cell>
				{/*<Button size="xl" className='info-button cursor-pointer'>*/}
				{/*	Узнать*/}
				{/*</Button>*/}
			</Div>

	</Panel>
);


export default Panel12;
