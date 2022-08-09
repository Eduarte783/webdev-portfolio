import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen items-center pt-8">
			<div className="max-w-[1240px] m-auto p-2 py-16 md:grid grid-cols-2 gap-8">
				<div className="cols-span-2">
					<p className="uppercase text-2xl tracking-widest text-[#1102cf]">
						About
					</p>
					<h2>Who I Am</h2>
					<p className="py-2 text-gray-700">
						I'm a software engineer with a background in mortgage underwriting,
						data analysis and financial services. With professional experience
						encompassing more than 16 years that include roles in production, 
						communications and managerial support. I'm confident that my 
						experience in these previous roles along with the transferrable soft skills 
						that I've acquired will contribute and add value to any new role I take on. 
						Currently, I'm focused on my professional growth and development and continue to challenge
						myself by learning new technologies and taking on new projects.    
						
					</p>
					<p className="py-2 text-gray-700">
						Fascinated with how detail-oriented programming can be I was quickly drawn
						to learn more. I began by learning Javascript, HTML and CSS and was excited
						when I learned to make websites interactive. Soon after, I learned React
						Node/Express and MondoDB and was thrilled to see a full application come to life.
						Working with front-end and back-end stacks was eye opening and exciting to learn. I am
						now spending my time building projects and learning new technologies.
					</p>
					<Link href="/#projects">
					<p className="py-2 text-gray-700 cursor-pointer underline">
						Check out a few of my most recent projects
					</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-end justify-center p-4 hover:scale-105 ease-in duration-300 ">
					<Image
						className="rounded-xl"
						src="/../public/images/skills/stockPhoto1.jpg"
						alt="/"
						width="600"
						height="450"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
