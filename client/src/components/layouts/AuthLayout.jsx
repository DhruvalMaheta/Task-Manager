import React from 'react';
import UI_IMG from '../../assets/loginimg.png';
import BG_IMG from '../../assets/bgimg.png'; // Make sure the image name and path are correct

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Left Section (Form and Content) */}
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className="text-lg font-medium text-black">Task Manager</h2>
                {children}
            </div>

            {/* Right Section (Image Background) */}
            <div
                className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8"
                style={{ backgroundImage: `url(${BG_IMG})` }}
            >
                <img src={UI_IMG} alt="UI Illustration" className="h-640 lg:h-[90%]" />
            </div>
        </div>
    );
};

export default AuthLayout;



// import React from 'react'
// import UI_IMG from "../../assets/loginimg.png";

// const AuthLayout = ({ children }) => {
//     return <div className="flex">
//         <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
//             <h2 className="text-lg font-medium text-black">Task Manager</h2>
//             {children}

//         </div>

//         <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('../../assest/bgimg.png')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
//             <img src={UI_IMG} alt="" className="w-64 lg:w-[90%] " />
//         </div>
//     </div>
// };

// export default AuthLayout;