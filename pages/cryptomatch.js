import Image from "next/image";
import React from "react";
import cryptoMatchImg from "../public/assets/projects/CryptoMatch.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const cryptoMatch = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={cryptoMatchImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
					<h2 className="py-2">Crypto Match</h2>
					<h3> Javascript | HTML | CSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p className="mb-2">Project</p>
					<h2 className="mb-2">Overview</h2>
					<p>
						Test your memory and brainpower in this classic game of
						memorization. In this game you'll have the chance to successfully
						match 12 different pairs with as few attempts as possible. First
						flip one card and then try and see where the matching pair is
						located. If unsuccessful both images will return to the face down
						position and you'll have the chance to flip 2 more cards for a
						chance to make a pair. But don't forget which images you last saw as
						it will help you with your next choice. I used Javascript and
						HTML/CSS to construct this game.
					</p>
					<a
						href="https://eduarte783.github.io/Memory-Card-Game/"
						rel="noopener"
						target="_blank"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/Eduarte783/Memory-Card-Game"
						rel="noopener"
						target="_blank" 
					>
						<button className="px-8 py-2 mt-4">Code</button>
					</a>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> HTML
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" /> CSS
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

export default cryptoMatch;
