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
					<p className="py-3 uppercase text-2xl tracking-widest text-[#fea400]">
						LETS BUILD SOMETHING TOGETHER
					</p>
					<h1 className="pt-4 text-[#f5f5f4]">
						Hi, I'm <span className="text-[#fea400]"> Eric</span>
					</h1>
					<h1 className="py-2 pb-8 text-[#f5f5f4]">A Software Engineer</h1>
					<p className="py-6 pb-8 text-[#f5f5f4] max-w-[70%] text-xl m-auto">
						Specializing in building exceptional digital experiences
						for all users. With an intellectual curiosity and love
						for learning new things, I strive to make products that
						are accessible and highly adaptable for the always-changing
						future. 						
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/eric-duarte731/"
				//			target="_blank"
				//			rel="noopener"
							title="LinkedIn"
						>
							<div className="rounded-full shadow-lg shadow-gray-100 p-5 mr-3 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaLinkedinIn size={23} />
							</div>
						</a>
							<a
							href="mailto:eric.duarte83@gmail.com"
					//		target="_blank"
					//		rel="noopener"
							title="Email"
						>
							<div className="rounded-full shadow-lg shadow-gray-100 p-5 mr-3 cursor-pointer hover:scale-105 ease-in duration-300">
								<AiOutlineMail size={23} />
							</div>
						</a>
						<a
							href="https://github.com/Eduarte783"
					//		target="_blank"
					//		rel="noopener"
							title="Github"
						>
							<div className="rounded-full shadow-lg shadow-gray-100 p-5 mr-2 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaGithub size={23} />
							</div>
						</a>				
						<a
							href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
					//		target="_blank"
					//		rel="noopener"
							download={true}
							title="Resume"
						>
							<div className="rounded-full shadow-lg shadow-gray-100 p-5 mr-2 cursor-pointer hover:scale-105 ease-in duration-300">
								<BsFillPersonLinesFill size={23} />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
