import Layout from "../../layout/Main";
import "./LandingPage.css";

function LandingPage() {
	const hideLandingPage = () => {
		const landingPage = document.querySelector(".landing_page");
		landingPage.classList.add("fade_out");

		landingPage.addEventListener(
			"transitionend",
			() => {
				landingPage.style.display = "none";
			},
			{ once: true }
		);
	};

	return (
		<Layout>
			<section className='landing_page'>
				<div className='landing_page_content'>
					<div className='landing_content'>
						<h1 className='landing_page_title'>Welcome to My Portfolio</h1>
						<p className='landing_page_description'>
							I am a full-stack developer with a passion for creating web
							applications.
						</p>
						<button
							onClick={hideLandingPage}
							className='landing_page_button'>
							Click Here to view my portfolio
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default LandingPage;
