// import { Link } from "react-router-dom"

import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import { categories, courses } from "../assets/links";
import { HorizontalCard } from "../components/HorizontalCard";
import Footer from "../components/Footer";
import axios from "axios";

const UserDashboard = () => {
	const [display, setDisplay] = useState(true);
	const [course, setCourse] = useState([]);
	const [category, setCategory] = useState([
		"science",
		"os",
		"programming",
		"cloud",
	]);
	const loadCourses = async () => {
		const resp = await axios.get(`http://localhost:8082/api/course`);
		setCourse(resp.data);
		// console.log(resp.data);
	};
	useEffect(() => {
		loadCourses();
	}, []);
	const showHome = () => {
		if (!display) setDisplay(true);
		console.log("show home", display);
	};
	const showLearning = () => {
		if (display) setDisplay(false);
		console.log("show learning", display);
	};
	return (
		<>
			<div className="w-full text-normal h-12 flex gap-4  justify-start items-end border-b-1 border-slate-400">
				<button
					className={`h-full px-4 font-oswald font-light ml-10 p-2 text-end ${display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showHome}
				>
					Home
				</button>
				<button
					className={`h-full px-4 font-oswald font-light p-2 text-end ${!display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showLearning}
				>
					My Learning
				</button>
			</div>
			{display ? (
				<>
					{category.map((item, i) => (
						<section
							key={i}
							className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24 h-screen"
						>
							<h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full ">
								{item[0].toUpperCase() + item.slice(1)} Courses
							</h1>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 justify-items-center md:justify-items-start overflow-auto">
								{course.map((c, index) => {
									if (c.category === item) {
										return (
											<Card
												key={index}
												company={c.title}
												imageUrl={c.image_url}
												price={c.price}
												id={c.id}
											/>
										);
									}
								})}
							</div>
						</section>
					))}
				</>
			) : (
				<div>Hello</div>
			)}
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default UserDashboard;
