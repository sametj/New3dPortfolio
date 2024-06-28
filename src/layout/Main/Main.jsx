import "./Main.css";
const Header = () => {
	return (
		<header className='header'>
			<img
				src='/images/logo-transparent-svg.svg'
				alt='logo'
			/>
		</header>
	);
};
const Footer = () => {
	return (
		<footer className='footer'>
			<p>© 2024</p>
			<p>Created by Teejay </p>
		</footer>
	);
};

const Layout = (props) => {
	return (
		<>
			<Header />
			<main className='main_content'>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
