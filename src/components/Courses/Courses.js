
import './Courses.css'
import logo from '../images/logo-main.png'
import Course from '../Course/Course';
import Sidebar from '../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [courseDuration, setCourseDuration] = useState(0);
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleAddToList = (duration) => {
        const courseDurationUpdate = courseDuration + duration;
        setCourseDuration(courseDurationUpdate)
    }

    const displayBreakTime = (sentBreakTime) => {
        setBreakTime(sentBreakTime)
    }


    return (
        <div className='row'>
            <div className='col-lg-9 col-md-12 col-sm-12 pt-5 bg-white px-5'>
                <img className='img-fluid mt-1 main-logo' src={logo} alt="" ></img>
                <h2 className='mt-3 heading'>Select Your Course</h2>
                <div className='row'>
                    {
                        courses.map(course => <Course key={course.id} course={course} handleAddToList={handleAddToList}></Course>)

                    }

                </div>

                <div className='rounded shadow p-3 my-5'>
                    <h3 className='mb-4 text-primary'>How does React Works?</h3>
                    <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. <br /> <br /> It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.<br /> <br /></p>
                </div>
                <div className='rounded shadow p-3 my-5'>
                    <h3 className='mb-4 text-primary'>Difference between props and state</h3>
                    <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
                <div className='rounded shadow p-3 my-5'>
                    <h3 className='mb-4 text-primary'>What is use of the 'useEffect'?</h3>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>
            <Sidebar duration={courseDuration} breakTime={breakTime} displayBreakTime={displayBreakTime}></Sidebar>
        </div>
    );
};

export default Courses;