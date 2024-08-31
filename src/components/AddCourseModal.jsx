"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { Select } from "flowbite-react";

import React from "react";
import axios from "axios";

const AddCourseModal = ({ loadCourses }) => {
	const [course, setCourse] = useState({
		title: "",
		description: "",
		category: "",
		price: 0,
	});
	const [openModal, setOpenModal] = useState(false);

	function onCloseModal() {
		setOpenModal(false);
	}

	const handleAddCourse = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8082/api/course",
				course
			);
			if (response.status === 201) {
				alert("Course added successfully");
				onCloseModal();
				loadCourses();
				course.title = "";
				course.description = "";
				course.category = "";
				course.price = 0;
				setCourse(course);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Button onClick={() => setOpenModal(true)} color="blue" className="w-28">
				Add Course
			</Button>
			<Modal show={openModal} size="md" onClose={onCloseModal} popup>
				<Modal.Header />
				<Modal.Body>
					<div className="space-y-6">
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Add Course
						</h3>
						<form type="submit" onSubmit={handleAddCourse}>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="text" value="Course Title" />
								</div>
								<TextInput
									id="email"
									placeholder="Name"
									value={course.title}
									onChange={(event) =>
										setCourse({ ...course, title: event.target.value })
									}
									required
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="text" value="Course Description" />
								</div>
								<TextInput
									id="description"
									type="text"
									required
									value={course.description}
									onChange={(event) =>
										setCourse({
											...course,
											description: event.target.value,
										})
									}
								/>
							</div>
							<div className="max-w-md">
								<div className="mb-2 block">
									<Label htmlFor="category" value="Select course category" />
								</div>
								<Select
									id="category"
									required
									value={course.category}
									// placeholder=
									onChange={(event) => {
										setCourse({ ...course, category: event.target.value });
										// console.log(category);
									}}
								>
									<option>Select a Category</option>
									<option>Programming</option>
									<option>Cloud</option>
									<option>Science</option>
									<option>OS</option>
								</Select>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="text" value="Price" />
								</div>
								<TextInput
									id="price"
									type="text"
									required
									value={course.price}
									onChange={(event) =>
										setCourse({ ...course, price: event.target.value })
									}
								/>
							</div>
							<div className="w-full">
								<Button className="bg-blue-700" type="submit">
									Submit
								</Button>
							</div>
						</form>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AddCourseModal;
