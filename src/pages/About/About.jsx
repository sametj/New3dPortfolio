import React, { useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faNode,
	faEnvira,
	faReact,
	faJava,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../../layout/Main/Main";

function About({ screenRef, setMonitor }) {
	const [title, setTitle] = useState("About Me");
	const [content, setContent] = useState("test");

	const buttons = [
		{
			title: "About Me",
			content: "I am a full-stack developer.",
		},
		{
			title: "Education",
			content: "I have a degree in computer science.",
		},
		{
			title: "Skills",
			content: <SkillContent />,
		},
	];

	const changeContent = (title, content) => {
		setTitle(title);
		setContent(content);
	};

	return (
		<Layout>
			<section
				className='about'
				onClick={() => setMonitor(screenRef)}>
				<div className='container'>
					<div className='about_nav'>
						{buttons.map((button) => (
							<button
								style={{
									backgroundColor:
										title === button.title ? "#f3d9b1" : "#0a0908",
									color: title === button.title ? "#0a0908" : "white",
								}}
								key={button.title}
								className='nav_button'
								onClick={() => changeContent(button.title, button.content)}>
								{button.title}
							</button>
						))}
					</div>
					<div className='about_content'>
						<div className='content_title'>{title}</div>
						<div className='content'>{content}</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

const SkillContent = () => {
	const Skills = [
		{
			title: "HTML",
			icon: faHtml5,
			color: "#e34c26",
		},
		{
			title: "CSS",
			icon: faCss3Alt,
			color: "#264de4",
		},
		{
			title: "JavaScript",
			icon: faJs,
			color: "#f7df1e",
		},
		{
			title: "Node",
			icon: faNode,
			color: "#3c873a",
		},
		{
			title: "Mongo",
			icon: faEnvira,
			color: "#13aa52",
		},
		{
			title: "React",
			icon: faReact,
			color: "#61dbfb",
		},
		{
			title: "Java",
			icon: faJava,
			color: "#ff0000",
		},
	];
	return (
		<div className='skills'>
			{Skills.map((skill) => (
				<div
					key={skill.title}
					className='skill'>
					<div className='icon_container'>
						<FontAwesomeIcon
							icon={skill.icon}
							size='2xl'
							style={{ color: skill.color }}
						/>
					</div>
					<span className='skill_title'>{skill.title}</span>
				</div>
			))}
		</div>
	);
};

export default About;
