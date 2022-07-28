import Image from "next/image";
import Link from "next/link";
import React from "react";
import talkrImg from "../public/assets/projects/Talkr3.png";
import checkmateImg from "../public/assets/projects/CheckMate.png";
import cryptomatchImg from "../public/assets/projects/CryptoMatch.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Talkr"
						backgroundImg={talkrImg}
						projectUrl="/talkr"
						techUsed="Tech: MERN, Socket.io and MongoDB"
					/>
					<ProjectItem
						title="CheckMate"
						backgroundImg={checkmateImg}
						projectUrl="/talkr"
						techUsed="Tech: MERN and TailwindCSS"
					/>
					<ProjectItem
						title="Crypto Match"
						backgroundImg={cryptomatchImg}
						projectUrl="/talkr"
						techUsed="Tech: Javascript and HTML/CSS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
