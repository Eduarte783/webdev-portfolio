import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
				<div className="cols-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I have spent the last 12 years in the fire service working as a
						professional firefighter/paramedic. I have always had a knack for
						technology and working with computers. In 2019 I started working
						with HTML and CSS to make some minor edits on a small business
						website that I was operating. What I thought was just a few small
						edits turned into a love for programming.
					</p>
					<p className="py-2 text-gray-600">
						Fascinated with how intricate programming can be I was quickly drawn
						to learn more. I started learning javascript and was even more
						enthused with making websites interactive. I then started
						freelancing for e-commerce companies on the Shopify platform. I am
						now spending my time building projects with React JS, Firebase, and
						learning new technologies.
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out a few of my most recent projects
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-end justify-center p-4 hover:scale-105 ease-in duration-300 ">
					<Image
						className="rounded-xl"
						src="/../public/assets/stockPhoto1.jpg"
						alt="/"
						width="600"
						height="450"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
