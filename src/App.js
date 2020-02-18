import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import './app.css'
import Home from './panels/Home';
import Panel01 from "./panels/Panel01";
import Panel02 from "./panels/Panel02";
import Panel03 from "./panels/Panel03";
import Panel04 from "./panels/Panel04";
import Panel05 from "./panels/Panel05";
import Panel06 from "./panels/Panel06";
import Panel07 from "./panels/Panel07";
import Panel08 from "./panels/Panel08";
import Panel09 from "./panels/Panel09";
import Panel10 from "./panels/Panel10";
import Panel11 from "./panels/Panel11";
import Panel12 from "./panels/Panel12";
import ModalRoot from "@vkontakte/vkui/dist/components/ModalRoot/ModalRoot";
import ModalCard from "@vkontakte/vkui/dist/components/ModalCard/ModalCard";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";



const group_id = '38225492'

const App = () => {
	const [activePanel, setActivePanel] = useState('01');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [resultArr, setResultArr] = useState([]);
	const [activeModal, setActiveModal] = useState('subscription')
	const [groupInfo, setGroupInfo] = useState(null)


	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			switch (type) {
				case 'VKWebAppUpdateConfig':
					const schemeAttribute = document.createAttribute('scheme');
					schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
					document.body.attributes.setNamedItem(schemeAttribute);
					break;
				case 'VKWebAppCallAPIMethodResult':
					switch (data.request_id) {
						case 'getGroup':
							setPopout(null);
							setGroupInfo(data.response[0])
							break;
						default:
							console.log(type)
					}
					break;
				default:
					console.log(type);
			}

		});

		async function fetchData() {
			const user = await connect.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const setResult = (questionNumber, info, nextPage) => {
		console.log(questionNumber, info, nextPage)
		setResultArr(resultArr.concat(info))
		console.log(resultArr)
		setActivePanel(nextPage)
	}

	const addGroup = () => {
		connect.send("VKWebAppJoinGroup", {"group_id": +group_id});
	}


	const modal = (
		<ModalRoot activeModal={activeModal}>
			<ModalCard
				id='subscription'
				onClose={() => setActiveModal(null)}
				icon={<Avatar src='' size={72}/>}
				caption={<span><h1>{groupInfo && groupInfo.name}</h1>Мини приложение предлагает Вам <br/> подписаться на сообщество</span>}
				actions={[{
					title: 'Подписаться',
					mode: 'primary',
					action: () => {
						addGroup()
						setActiveModal(null)
					}
				}]}
				actionsLayout="vertical"
			>
			</ModalCard>
		</ModalRoot>
	);



	return (
		<View activePanel={activePanel} popout={popout} modal={modal}>
			{/*<Panel01 id='01' fetchedUser={fetchedUser} go={go} />*/}
			<Panel01 id='01' setResult={setResult} />
			<Panel02 id='02' setResult={setResult} />
			<Panel03 id='03' setResult={setResult} />
			<Panel04 id='04' setResult={setResult} />
			<Panel05 id='05' setResult={setResult} />
			<Panel06 id='06' setResult={setResult} />
			<Panel07 id='07' setResult={setResult} />
			<Panel08 id='08' setResult={setResult} />
			<Panel09 id='09' setResult={setResult} />
			<Panel10 id='10' setResult={setResult} />
			<Panel11 id='11' setResult={setResult} />
			<Panel12 id='12' setResult={setResult} />
		</View>
	);
}

export default App;

