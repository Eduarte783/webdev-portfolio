import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LETS BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#5651e5]"> Eric</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
					<p className="py-4 text-gray-700 max-w-[70%] m-auto">
						I'm a full-stack web developer specializing in building
						(occasionally designing) exceptional digital experiences. Currently,
						I'm focused on building responsive front-end applications while
						learning back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/eric-duarte731/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/Eduarte783"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<a
							href="mailto:eric.duarte83@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>
						<a>
							<Link
								href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
								download={true}
								target="_blank"
								rel="noreferrer"
							>
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</Link>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
