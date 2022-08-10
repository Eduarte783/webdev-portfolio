import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import desktopPhoto from "../public/images/projects/desktopPhoto.jpg"

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen pt-8">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-2xl tracking-widest uppercase text-[#fea400]">
					Contact
				</p>
				<h2> Get in Contact</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-100 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={desktopPhoto}
									alt="/"
									width="400"
									height="350"
								/>
							</div>
							<div>
								<h2 className="pt-2">Eric Duarte</h2>
								<p className="text-[#f99700] text-xl">Full Stack Developer</p>
								<p className="py-4 text-lg">
									Let's work together. You can reach me via
									my socials below or you can message me here directly.
									I'd love to connect and chat on how I can contribute
									to your next project. 
								</p>
							</div>
							<div>
								<p className="uppercase pt-10 text-lg text-[#f99700]">
									{" "}
									Connect With Me
								</p>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/eric-duarte731/"
									//	target="_blank"
									//	rel="noopener"
										title="LinkedIn"
									>
										<div className="rounded-full shadow-lg shadow-gray-100 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
											<FaLinkedinIn size={25} />
										</div>
									</a>
										<a
										href="mailto:eric.duarte83@gmail.com"
										//target="_blank"
										//rel="noopener"
										title="Email"
									>
										<div className="rounded-full shadow-lg shadow-gray-100 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
											<AiOutlineMail size={25} />
										</div>
									</a>
									<a
										href="https://github.com/Eduarte783"
										//target="_blank"
										//rel="noopener"
										title="Github"
									>
										<div className="rounded-full shadow-lg shadow-gray-100 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
											<FaGithub size={25} />
										</div>
									</a>				
									<a
										href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
										download={true}
										//target="_blank"
										//rel="noopener"
										title="Resume"
									>
										<div className="rounded-full shadow-lg shadow-gray-100 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
											<BsFillPersonLinesFill size={25} />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-ful h-auto shadow-lg shadow-gray-100 rounded-xl lg:p-4">
						<div className="p-3">
							<form
								action="https://getform.io/f/a4bdb259-3afc-4c7c-8dc5-a6bf94d669f5"
								method="POST"
							>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Name</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e7694]"
											type="text"
											name="name"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e7694]"
											type="text"
											name="phone"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e7694]"
										type="email"
										name="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300 bg-[#0e7694]"
										type="text"
										name="subject"
									/>
								</div>
								<div className="flex flex-col py-2 pb-4">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300 bg-[#0e7694]"
										type="text"
										rows="8"
										name="message"
									></textarea>
								</div>
								<button className="w-full p-3 text-lg text-white mt-4 mb-5 shadow-lg shadow-gray-100 hover:scale-105 ease-in duration-300">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-8">
					<Link href="/">
						<div className="rounded-full shadow-md shadow-gray-100 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp title="Back To Top" className="text-[#fea400]" size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
