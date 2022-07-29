import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#1f2937");
	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === "/talker" ||
			router.asPath === "/checkmate" ||
			router.asPath === "/cryptomatch"
		) {
			setNavBg("transparent");
			setLinkColor("#ecf0f3");
		} else {
			setNavBg("#ecf0f3");
			setLinkColor("#1f2937");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<Image
						src="/../public/assets/skills/NavLogo.png"
						alt="/"
						width="105"
						height="105"
					/>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={23} />
					</div>
				</div>
			</div>
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image
									src="/../public/assets/skills/NavLogo.png"
									width="80"
									height="80"
									alt="/"
								/>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-200 my-4">
							<p className="w-[85%] md:w-[90%] py-4 text-lg">
								Lets build something legendary together
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-md">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-md">
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="py-4 text-md">
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={() => setNav(false)} className="py-4 text-md">
									Projects
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={() => setNav(false)} className="py-4 text-md">
									Contacts
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#6156f7]">
								Lets Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a
									href="https://www.linkedin.com/in/eric-duarte731/"
									target="_blank"
									rel="noreferrer"
									title="LinkedIn"
								>
									<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedinIn title="LinkedIn" />
									</div>
								</a>
								<a
									href="https://github.com/Eduarte783"
									target="_blank"
									rel="noreferrer"
									title="Github"
								>
									<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub title="GitHub" />
									</div>
								</a>
								<a
									href="mailto:eric.duarte83@gmail.com"
									target="_blank"
									rel="noreferrer"
									title="Email"
								>
									<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiOutlineMail title="Email" />
									</div>
								</a>
								<a
									href="https://docs.google.com/document/d/1QtIhvp7MP7JFrQ_S8EGfruVy5WuMczYL3mYxkBRkBE0/edit?usp=sharing"
									target="_blank"
									download={true}
									title="Resume"
								>
									<div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<BsFillPersonLinesFill title="Resume" />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;