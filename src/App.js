import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { BsSunFill, BsSun } from 'react-icons/bs';

//persisting theme
const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	return theme;
};

function App() {
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		// if (theme === 'light-theme') {
		//   setTheme('dark-theme');
		// } else {
		//   setTheme('light-theme');
		// }
		setTheme(`${theme === 'light-theme' ? 'dark-theme' : 'light-theme'}`);
	};

	useEffect(() => {
		//attaches css class to html element
		document.documentElement.className = theme;

		//Makes sure user selected theme is persisted
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<main>
			<nav>
				<div className='nav-center'>
					<h1>overreacted</h1>
					<button
						className='btn'
						onClick={toggleTheme}
					>
						{theme === 'light-theme' ? (
							<BsSunFill
								style={{ background: 'black', width: '20px', height: '20px' }}
							/>
						) : (
							<BsSun style={{ width: '20px', height: '20px' }} />
						)}
					</button>
				</div>
			</nav>
			<section className='articles'>
				{data.map(item => {
					return (
						<Article
							key={item.id}
							{...item}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default App;
