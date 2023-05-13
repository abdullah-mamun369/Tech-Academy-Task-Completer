import React from 'react';
import './Course.css'

const Course = (props) => {

    const { course, handleAddToList } = props;
    const { image, title, description, video, duration } = course;
    // console.log(course);

    return (
        <div className='each-exercise col-lg-4 col-md-6 col-sm-12 g-3'>
            <div className='rounded-4 shadow p-3 '>
                <img className='img w-100' src={image} alt="" />
                <h4 className='fs-8 fw-bold mt-2 text-primary'>{title}</h4>
                <p>{description}</p>
                <small><p>Total Video : <span className='fw-semibold'>{video}</span></p></small>
                <small><p>Required Time : <span className='fw-semibold'>{duration} hr</span></p></small>
                <button className='btn btn-primary fw-semibold w-100' onClick={() => { handleAddToList(duration) }}><small>Add to list</small></button>
            </div>
        </div>


    );
};

export default Course;