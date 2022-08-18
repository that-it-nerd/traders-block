import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar/index';
import HeroScreen from '../components/HeroScreen';

const Home: NextPage = () => {
	const [toggle, setToggle] = useState<boolean>(true);
	return (
		<div
			className={`container container-fluid flex flex-row ${
				toggle ? 'dark' : 'light'
			}`}
		>
			<Sidebar />
			<HeroScreen />
			<div
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Toggle
			</div>
		</div>
	);
};

export default Home;
