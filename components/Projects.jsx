import Image from "next/image";
import Link from "next/link";
import React from "react";
import talkrImg from "../public/images/projects/Talker4.png";
import checkmateImg from "../public/images/projects/CheckMate.png";
import cryptoMatchImg from "../public/images/projects/CryptoMatch.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full pt-8">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-2xl tracking-widest uppercase text-[#fea400]">
					Projects
				</p>
				<h2>What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Talkr"
						backgroundImg={talkrImg}
						projectUrl="/talker"
						techUsed="Tech: MERN, Socket.io and MongoDB"
					/>
					<ProjectItem
						title="CheckMate"
						backgroundImg={checkmateImg}
						projectUrl="/checkmate"
						techUsed="Tech: MERN and TailwindCSS"
					/>
					<ProjectItem
						title="Crypto Match"
						backgroundImg={cryptoMatchImg}
						projectUrl="/cryptomatch"
						techUsed="Tech: Javascript and HTML/CSS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
