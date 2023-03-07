import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../CourseInfo/CourseInfo';
import './Home.css'
const Home = () => {
    const courses = useLoaderData()
    return (
        <div className='home'>

            {
                courses.map(course => <CourseInfo
                    key={course.id}
                    course={course}
                ></CourseInfo>)
            }
        </div>
    );
};

export default Home;