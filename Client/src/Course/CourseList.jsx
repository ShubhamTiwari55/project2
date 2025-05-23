import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../Components/CourseCard"
import HomeLayout from "../layout/HomeLayout";
import { getAllCourses } from "../Redux/slices/courseSlice";

function CourseList() {
    const dispatch = useDispatch();

    const {courseData} = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[92vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the courses made by <span> </span>
                    <span className="font-bold text-font-color">
                        Industry experts
                    </span>
                </h1>
                <div className="mb-8 flex flex-wrap gap-14">
                    {courseData?.map((element) => {
                        return <CourseCard key={element._id} data={element} />
                    })}
                </div>
                

            </div>
        </HomeLayout>
    );

}

export default CourseList;