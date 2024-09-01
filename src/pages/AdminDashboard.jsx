// import { Link } from "react-router-dom"

import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import { categories, courses, allcourses } from "../assets/links";
import { HorizontalCard } from "../components/HorizontalCard";
import Footer from "../components/Footer";
import AdminCard from "../components/AdminCard";
import AdminCourseCard from "../components/AdminCourseCard";
import axios from "axios";
import AddCourseModel from "../components/AddCourseModal";

const AdminDashboard = () => {
	const [display, setDisplay] = useState(true);
	const [users, setUsers] = useState([]);
	const [courses, setCourses] = useState([]);
	const loadUsers = async () => {
		const response = await axios.get("http://localhost:8082/api/student");
		setUsers(response.data);
	};
	const loadCourses = async () => {
		const response = await axios.get("http://localhost:8082/api/course");
		setCourses(response.data);
		// console.log(response.data);
	};
	// const deleteUser = () =<
	useEffect(() => {
		loadUsers();
		loadCourses();
	}, []);

	const showHome = () => {
		if (!display) setDisplay(true);
		// console.log("show home",display);
	};
	const showLearning = () => {
		if (display) setDisplay(false);
		loadCourses();
		// console.log("show learning",display);
	};
	return (
		<>
			{/* Most popular courses */}
			<div className="w-full text-normal h-12 flex gap-4  justify-start items-end border-b-1 border-slate-400">
				<button
					className={`h-full px-4 font-oswald font-light ml-10 p-2 text-end ${display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showHome}
				>
					Users
				</button>
				<button
					className={`h-full px-4 font-oswald font-light p-2 text-end ${!display ? "border-b-2 border-blue-700" : ""}`}
					onClick={showLearning}
				>
					Courses
				</button>
			</div>
			{display ? (
				<>
					<section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
						<h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">
							All Users
						</h1>
						<div className="flex flex-col gap-6 md:gap-5 justify-items-center md:justify-items-start h-screen overflow-y-scroll">
							{users.map((item, index) => (
								<AdminCard
									key={index}
									id={item.id}
									email={item.email}
									loadUsers={loadUsers}
								/>
							))}
						</div>
					</section>
				</>
			) : (
				<>
					<section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
						<div className="flex">
							<AddCourseModel loadCourses={loadCourses} />
						</div>
						<h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">
							All Courses
						</h1>
						<div className="flex flex-col gap-6 md:gap-5 justify-items-center md:justify-items-start h-screen overflow-y-scroll">
							{courses.map((item, index) => (
								<AdminCourseCard
									key={index}
									id={item.id}
									title={item.title}
									price={item.price}
									imageUrl={item.imageUrl}
									loadCourses={loadCourses}
								/>
							))}
						</div>
					</section>
				</>
			)}
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default AdminDashboard;
