import Image from "next/image";
import React from "react";
import imageIcon1 from "../public/images/skills/html.png";
import imageIcon2 from "../public/images/skills/css.png";
import imageIcon3 from "../public/images/skills/javascript.png";
import imageIcon4 from "../public/images/skills/nextjs.png";
import imageIcon5 from "../public/images/skills/node.png";
import imageIcon6 from "../public/images/skills/mongodb.png";
import imageIcon7 from "../public/images/skills/python.png";
import imageIcon8 from "../public/images/skills/react.png";
import imageIcon9 from "../public/images/skills/github1.png";
import imageIcon10 from "../public/images/skills/tailwind.png";
import imageIcon11 from "../public/images/skills/django.png";
import imageIcon12 from "../public/images/skills/npm.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen items-center pt-8">
			<div className="max-w-[1240px] max-auto m-auto p-2 py-16 flex-col justify-center h-full">
				<p className="text-2xl tracking-widest uppercase text-[#fea400]">
					Skills
				</p>
				<h2 className="mb-20">What I Can Do</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d5be79] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon1}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d5be79] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon2}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d5be79] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon3}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-lg text-[#002d37]">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d5be79] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon4}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>NextJS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d19900] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon5}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>NodeJS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d19900] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon6}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-lg text-[#002d37]">
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>
					<div className="p-6  shadow-lg shadow-gray-100 bg-[#d19900] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon7}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>Python</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#d19900] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon8}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#37788b] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon9}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#37788b] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon10}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#37788b] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon11}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>Django</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-100 bg-[#37788b] rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={imageIcon12}
									alt="/"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center text-xl text-[#002d37]">
								<h3>NPM</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
