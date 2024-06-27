import React from "react";
import "./Project.css";

function Project({ screenRef, setMonitor }) {
	const ProjectCard = [
		{
			title: "ActionAtlas - Organize Your Life",
			description:
				"A fullstack todo-list app inspired by Codédex HTML, CSS, and JavaScript project",
			link: "https://action-atlas.vercel.app",
			image: "/images/actionAtlas.png",
			stack: ["React", "Node", "MongoDB"],
		},
	];

	return (
		<section
			className='project'
			onClick={() => setMonitor(screenRef)}>
			<div className='project_cards'>
				{ProjectCard.map((card) => (
					<a
						href={card.link}
						target='_blank'
						rel='noreferrer'
						className='project_card'>
						<img
							className='card_image'
							src={card.image}
							alt={card.title}
						/>
						<span>Title</span>
						<h4 className='card_title'>{card.title}</h4>
						<span> Stack</span>
						<span className='card_stack'> {card.stack.join(" | ")} </span>
						<span>Description</span>
						<p className='card_description'>{card.description}</p>
					</a>
				))}
			</div>
		</section>
	);
}

export default Project;
