import React from "react";
import "./SimScreen.css";
import Layout from "../../layout/Main";
function SimScreen({ screenRef, setMonitor }) {
	return (
		<div
			className='sim_screen'
			onClick={() => setMonitor(screenRef)}>
			<iframe
				src='https://www.youtube.com/embed/YReHaLN6TeE?si=KKCpfzOfNN-UP6Da'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				referrerPolicy='strict-origin-when-cross-origin'
				allowFullScreen></iframe>
		</div>
	);
}

export default SimScreen;
