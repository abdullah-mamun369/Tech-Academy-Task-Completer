import React from 'react';
import './Sidebar.css'
import userProfile from '../images/mamun.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {

    const breakTimes = [30, 40, 50, 60]
    const { displayBreakTime } = props;
    const notify = () => toast("Congratulation!! You have completed the course", { position: "top-center" });

    return (
        <div className='sidebar-container col-lg-3 col-md-12 col-sm-12 shadow-lg p-4'>
            <div className='d-flex container'>
                <div className=''>
                    <img className='user-img' src={userProfile} alt="" />
                </div>
                <div className='mt-2'>
                    <h5 className='fw-bold ms-2 my-0'>Mamun Abdullah</h5>
                    <p className='ms-2 my-0'>Founder, Tech-Academy</p>
                </div>
            </div>

            <div className='bg-gray d-flex justify-content-between p-3 mt-4 rounded shadow-sm'>
                <div>
                    <p className='my-0'><span className='fs-4 fw-semibold'>81</span><span className='text-muted'>kg</span></p>
                    <p className='my-0 fw-semibold text-muted'>Weight</p>
                </div>
                <div>
                    <p className='my-0'><span className='fs-4 fw-semibold'>5.10</span><span className='text-muted'>ft</span></p>
                    <p className='my-0 fw-semibold text-muted'>Height</p>
                </div>
                <div>
                    <p className='my-0'><span className='fs-4 fw-semibold'>29</span><span className='text-muted'>yrs</span></p>
                    <p className='my-0 fw-semibold text-muted'>Age</p>
                </div>
            </div>

            <div>
                <p className='fs-5 fw-semibold mt-5'>Add A Break</p>
                <div className='bg-gray d-flex justify-content-between p-3 mt-4 rounded shadow-sm'>
                    {breakTimes.map(breakTime => <button key={breakTime} className='btn-primary bg-primary rounded-circle break-btn text-white fw-semibold border' onClick={() => { displayBreakTime(breakTime) }}>{breakTime}m</button>)}
                </div>
            </div>

            <div>
                <p className='fs-5 fw-semibold mt-5'>Course Details</p>
                <div className='bg-gray p-3 mt-4 rounded shadow-sm'>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-semibold my-0'>Course Time : </p><p className='text-muted my-0'>{props.duration}<span>hr</span></p>
                    </div>
                </div>

                <div className='bg-gray p-3 mt-4 rounded shadow-sm'>
                    <div className='d-flex justify-content-between'>
                        <p className='fw-semibold my-0'>Break Time :</p>{<p className='text-muted my-0'>{props.breakTime}m</p>}
                    </div>
                </div>
            </div>

            <button className='btn btn-primary fw-semibold w-100 mt-4 finish-btn' onClick={notify}>Finish Course</button>
            <ToastContainer />

        </div>
    );
};

export default Sidebar;