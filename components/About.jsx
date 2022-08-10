import React from "react";
import Image from "next/image";
import Link from "next/link";
import stockPhoto from "../public/images/skills/stock-photo1.jpg"

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen items-center pt-8">
			<div className="max-w-[1240px] m-auto p-2 py-16 md:grid grid-cols-2 gap-8">
				<div className="cols-span-2">
					<p className="uppercase text-2xl tracking-widest text-[#fea400]">
						About
					</p>
					<h2>Who I Am</h2>
					<p className="py-2 text-lg text-[#f5f5f4]">
						I'm a software engineer with a background in mortgage underwriting,
						data analysis and financial services. With professional experience
						encompassing more than 16 years that include roles in production, 
						training and managerial support. I'm confident that my 
						experience in these roles along with the transferrable soft skills 
						that I've acquired will contribute and add value to any new role I take on. 
						I'm focused on my professional growth and development and continue to challenge
						myself by learning new technologies and taking on new projects.    
						
					</p>
					<p className="py-2 text-lg text-[#f5f5f4]">
						I am a naturally curious, creative software engineer driven by my passion
						to create exceptional, highly adaptable and easily accessible
						software products. I approach all problems by leveraging my drive to excel,
						my passion for problem-solving and my experience as a collaborator and leader.
					</p>
					<Link href="/#skills">
					<p className="pt-2 text-[#fea400] cursor-pointer underline">
						Skills I Know
					</p>
					</Link>
					<Link href="/#projects">
					<p className=" text-[#fea400] cursor-pointer underline">
					  Recent projects I've Done
					</p>
					</Link>
					<Link href="/#contact">
					<p className=" text-[#fea400] cursor-pointer underline">
					  Let's Connect
					</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-lg shadow-gray-100 rounded-xl flex items-end justify-center p-4 hover:scale-105 ease-in duration-300 ">
					<Image
						className="rounded-xl"
						src={stockPhoto}
						alt="/"
						width="650"
						height="600"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
