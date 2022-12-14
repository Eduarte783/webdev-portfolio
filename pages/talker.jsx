import Image from "next/image";
import React from "react";
import talkrImg from "../public/images/projects/Talker4.png";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiSocketdotio, SiNetlify } from "react-icons/si";
import Link from "next/link";

const talker = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={talkrImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
					<h2 className="py-2 text-5xl">Talkr - Chat Application</h2>
					<h3>MERN | Socket.io | MongoDB </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="mb-2 text-lg text-[#f99700]">Project</p>
					<h2 className="mb-2">Overview</h2>
					<p className="text-lg pb-4">
						A simple interactive chat application where users can create an
						account, style and edit their profile with different avatars. Users
						are then able to access a chat room to send real-live messages to
						other users and have a conversation. This app was built using MERN
						stack, Socket.io for messaging capability, user authentication,
						integrated with an API that renders random avatars for the users to
						choose and actively hosted/deployed on Netlify.
					</p>
					<a
						//rel="noopener"
						//target="_blank"
						href="https://cutt.ly/KZQVlyF"
					>
					<button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Demo</button>
					</a>
					<a
						//rel="noopener"
						//target="_blank"
						href="https://github.com/Eduarte783/chat-app-public"
					>
						<button className="px-8 py-2 mt-4 hover:scale-105 ease-in duration-300">Code</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-100 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2 text-[#f99700]">TECH USED</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-100 py-2 flex items-center">
								<SiMongodb size={25} className="size-lg mr-3" /> MongoDB
							</p>
							<p className="text-gray-100 py-2 flex items-center">
								<SiExpress size={25} className=" mr-3" /> Express
							</p>
							<p className="text-gray-100 py-2 flex items-center">
								<SiReact size={25} className=" mr-3" /> React JS
							</p>
							<p className="text-gray-100 py-2 flex items-center">
								<SiNodedotjs size={25} className=" mr-3" /> Node
							</p>
							<p className="text-gray-100 py-2 flex items-center">
								<SiSocketdotio size={25} className=" mr-3" /> Socket.io
							</p>
							<p className="text-gray-100 py-2 flex items-center">
								<SiNetlify size={25} className=" mr-3" /> Netlify
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default talker;
