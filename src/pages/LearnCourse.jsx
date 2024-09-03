import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../components/Quiz";
const LearnCourse = () => {
	const { id } = useParams();

	// const [displayButton, setDisplayButton] = useState(false);
	const [displayQuiz, setDisplayQuiz] = useState(false);
	const [course, setCourse] = useState({});
	const fetchCourseById = async () => {
		try {
			const resp = await axios.get(`http://localhost:8082/api/course/${id}`);
			setCourse(resp.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		// setTimeout(() => setDisplayButton(true), 10000);
		fetchCourseById();
	}, []);
	return (
		<>
			<div className=" flex justify-start items-center flex-col">
				<div className="w-full h-96 flex justify-center items-start">
					<iframe
						width="100%"
						height="100%"
						src={course.video_url}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="w-full  flex justify-center flex-col gap-4 bg-slate-100 pt-6 pb-24">
					<h1 className="mx-16 text-3xl font-bold">{course.title}</h1>
					<h1 className="mx-16 text-xl font-light">
						<span className="text-xl">Description: </span>
						{course.description}
					</h1>
				</div>
				<div className="flex justify-center items-center">
					{displayQuiz ? (
						<Quiz />
					) : (
						<button
							className=" my-10 md:m-24 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-3 md:px-6 text-white rounded-lg"
							onClick={() => setDisplayQuiz(true)}
						>
							Start Quiz
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default LearnCourse;
