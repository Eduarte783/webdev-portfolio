import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
	return (
		<div id="home" className="w-full md:h-screen text-center pt-8">
			<div className="max-w-[1240px] w-full h-full m-auto p-2 py-16 flex justify-center items-center">
				<div>
					<p className="uppercase text-xl tracking-widest text-gray-800">
						LETS BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-2 text-gray-700">
						Hi, I'm <span className="text-[#1102cf]"> Eric</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Software Engineer.</h1>
					<p className="py-4 text-gray-800 max-w-[70%] text-xl m-auto">
						A web developer specializing in building exceptional digital
						experiences for all users. Currently, I'm focused on building
						responsive front-end applications with functional back-end
						technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/eric-duarte731/"
				//			target="_blank"
				//			rel="noopener"
							title="LinkedIn"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/Eduarte783"
					//		target="_blank"
					//		rel="noopener"
							title="Github"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<a
							href="mailto:eric.duarte83@gmail.com"
					//		target="_blank"
					//		rel="noopener"
							title="Email"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>
						<a
							href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
					//		target="_blank"
					//		rel="noopener"
							download={true}
							title="Resume"
						>
							<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
