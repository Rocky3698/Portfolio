import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const PersonalDetails = () => {
    return (
        <div className="rounded-lg mx-5 p-3 space-y-4 bg-slate-100 ">
            <div className="flex items-center space-x-3 hover:bg-white hover:shadow transition duration-300 ease-in-out rounded-md">
                <div className="rounded-md p-2 bg-white">
                    <IoPhonePortraitOutline className="text-2xl text-slate-700" />
                </div>
                <div className="text-start">
                    <h2 className="text-slate-700">Phone</h2>
                    <a href="tel:+8801639066718" className="text-slate-500 hover:text-blue-500">+880 1639-066718</a>
                </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-white hover:shadow transition duration-300 ease-in-out rounded-md">
                <div className="rounded-md p-2 bg-white">
                    <CiMail className="text-2xl text-slate-700" />
                </div>
                <div className="text-start">
                    <h2 className="text-slate-700">Email</h2>
                    <a href="mailto:rocky20809@gmail.com" className="text-slate-500 hover:text-blue-500">rocky20809@gmail.com</a>
                </div>
            </div>
            <div className="flex items-center space-x-3 hover:bg-white hover:shadow transition duration-300 ease-in-out rounded-md">
                <div className="rounded-md p-2 bg-white">
                    <IoLocationOutline className="text-2xl text-slate-700" />
                </div>
                <div className="text-start">
                    <h2 className="text-slate-700">Location</h2>
                    <a href="https://maps.app.goo.gl/635aJHMVS62eWUJx7" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500">Dhaka, Bangladesh</a>
                </div>
            </div>
            
        </div>
    );
};

export default PersonalDetails;
