import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-2xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4"> Get in Contact</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="/../public/assets/projects/StockResized.jpg"
									alt="/"
									width="400"
									height="350"
								/>
							</div>
							<div>
								<h2 className="py-2">Eric Duarte</h2>
								<p>Full Stack Developer</p>
								<p className="py-4">
									I am available for a full-time position. Contact me and let's
									talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-10"> Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/eric-duarte731/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<FaLinkedinIn size={25} />
										</div>
									</a>
									<a
										href="https://github.com/Eduarte783"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<FaGithub size={25} />
										</div>
									</a>
									<a
										href="mailto:eric.duarte83@gmail.com"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<AiOutlineMail size={25} />
										</div>
									</a>
									<Link
										href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
										download={true}
									>
										<div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<BsFillPersonLinesFill size={25} />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-ful h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4">
						<div className="p-4">
							<form
								action="https://getform.io/f/a4bdb259-3afc-4c7c-8dc5-a6bf94d669f5"
								method="POST"
							>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Name</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name="name"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name="phone"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										name="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name="subject"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										type="text"
										rows="10"
										name="message"
									></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
