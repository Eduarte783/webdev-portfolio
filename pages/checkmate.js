import Image from "next/image";
import React from "react";
import checkmateImg from "../public/assets/projects/CheckMate.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const checkmate = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={checkmateImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
					<h2 className="py-2">CheckMate </h2>
					<h3>MERN | TailwindCSS | Mongoose </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="mb-2">Project</p>
					<h2 className="mb-2">Overview</h2>
					<p>
						Check Mate is a task tracking app for groups. Users create an
						account for a group, use profiles for the different members of the
						group, and complete shared tasks. Users create tasks inside the app
						for the whole group to track. Once a user has completed a task, they
						can mark it as such. Users can also edit and delete tasks as they
						see fit. Users can mark who started and completed tasks based on
						profiles assigned to the account. This was a group project with 3
						other developers. The app was created using MERN stack, integrated
						user authentication, styled with Tailwind CSS and actively
						hosted/deployed on Netlify.
					</p>
					<a href="https://deft-lily-c330b4.netlify.app/" target="_blank" rel="noopener">
						<button className="px-8 py-2 mt-8 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/Eduarte783/InCRUDibles-client"
						target="_blank"
						rel="noopener"
					>
						<button className="px-8 py-2 mt-4">Code</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Express
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> React JS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Node
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> TailwindCSS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Netlify
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

export default checkmate;
