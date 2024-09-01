import React, { useEffect, useState } from "react";
import mindsprint from "../assets/mindsprint-logo.svg";
import DropdownBtn from "../components/DropdownBtn";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { categories } from "../assets/links";
const CourseDetails = () => {
	const { id } = useParams();
	const [course, setCourse] = useState({
		id: "",
		title: "",
		description: "",
		price: "",
		category: "",
		image_url: "",
	});
	const loadCourseDetails = async (cid) => {
		const resp = await axios.get(`http://localhost:8082/api/course/${cid}`);
		setCourse(resp.data);
		console.log(resp.data);
	};
	useEffect(() => {
		loadCourseDetails(id);
	}, []);
	return (
		<>
			{/* Details */}
			<section className=" md:h-screen flex justify-center">
				<div className="w-full md:w-9/12 grid grid-cols-12 md:grid-cols-8 grid-rows-7 pt-16 bg-slate-100">
					<div className="col-span-12 md:col-span-5 row-span-4 flex flex-col mx-16 justify-between ">
						<div className="flex flex-col gap-7">
							<h1 className="text-4xl">{course.title}</h1>
							<p className="text-lg font-extralight">Price: {course.price}</p>
							<h1 className="text-md font-extralight">{course.description}</h1>
						</div>
						<button className="w-full md:w-5/12 md:m-0 mt-14 md:mt-0 text-normal md:text-normal py-4 px-8 md:py-4 md:px-2 rounded-md text-white bg-blue-700">
							Enroll
						</button>
					</div>
					<img
						src={course.image_url}
						alt="image"
						className="hidden md:flex col-span-2 bg-cover bg-no-repeat rounded-md shadow-lg"
					/>
				</div>
			</section>
			<section className="px-3 lg:px-24  pt-14">
				<Footer />
			</section>
		</>
	);
};

export default CourseDetails;
