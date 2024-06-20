import { FaDownload } from "react-icons/fa6";
import SocialLinks from './SocialLinks';
import PersonalDetails from './PersonalDetails';
import Activities from './Activities/Activities';

const Profile = () => {
    return (
        <div className="bg-white col-span-2 rounded-lg sticky top-36 h-fit">
            <div className="text-center space-y-3 ">
                <div className='relative w-full h-24 flex justify-center'>
                    <figure className='absolute bottom-0 w-52 h-56 '><img className='w-full h-full object-cover rounded-xl object-top' src="profile.jpg" alt="" /></figure>
                </div>

                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900">Rocky Chowdhury</h2>
                    <p className="text-sm text-gray-600">Full-stack Developer</p>
                </div>
                <SocialLinks></SocialLinks>
                <Activities></Activities>
                <PersonalDetails></PersonalDetails>
                <div>
                <button className="btn btn-outline btn-success btn-wide my-5"><FaDownload></FaDownload> Download Resume</button>
            </div>
            </div>
        </div>
    );
};

export default Profile;