import React, { useState } from 'react';
import Card from '../Cards';
import DashBoard from '../DashBoard/index';
import TopBar from '../TopBar';
import styles from './heroScreen.module.scss';
interface Data {
	name: string;
	age: number;
}
const HeroScreen = () => {
	const [data, setData] = useState<Data>({
		name: 'John',
		age: 30,
	});
	return (
		<div className={`basis-5/7 ${styles.heroScreen}`}>
			<div className={styles.nav_bar}>
				<TopBar />
			</div>
			<div className={styles.cards_container}>
				<Card type={'card'} />
				<Card type={'card'}/>
			</div>
			<div className={styles.cards_container}>
				<Card type={'table'}/>
			</div>
			{/* <DashBoard data={data} setData={setData} /> */}
		</div>
	);
};

export default HeroScreen;
