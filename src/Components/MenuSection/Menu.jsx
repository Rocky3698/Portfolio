import PropTypes from 'prop-types';
import { useState } from 'react';  // Import useState hook
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline, IoBriefcaseOutline } from "react-icons/io5";
import { BiSolidBookContent } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";

const Menu = ({ setCurrentSection }) => {
    const [activeSection, setActiveSection] = useState('about');  // State to manage active section

    // Function to handle button click and update active section
    const handleClick = (section) => {
        setCurrentSection(section);
        setActiveSection(section);
    };

    return (
        <div className='bg-white col-span-1 me-3 space-y-4 flex flex-col items-center py-5 rounded-lg h-fit'>
            <button
                onClick={() => handleClick('about')}
                className={`w-20 h-16 ${activeSection === 'about' ? 'bg-green-300' : 'bg-gray-100'} rounded-lg`}
            >
                <GoPerson className='mx-auto'></GoPerson>About
            </button>
            <button
                onClick={() => handleClick('resume')}
                className={`w-20 h-16 p-3 ${activeSection === 'resume' ? 'bg-green-300' : 'bg-gray-100'} rounded-lg`}
            >
                <IoDocumentTextOutline className='mx-auto'></IoDocumentTextOutline> Resume
            </button>
            <button
                onClick={() => handleClick('works')}
                className={`w-20 h-16 p-3 ${activeSection === 'works' ? 'bg-green-300' : 'bg-gray-100'} rounded-lg`}
            >
                <IoBriefcaseOutline className='mx-auto'></IoBriefcaseOutline> Works
            </button>
            <button
                onClick={() => handleClick('blogs')}
                className={`w-20 h-16 p-3 ${activeSection === 'blogs' ? 'bg-green-300' : 'bg-gray-100'} rounded-lg`}
            >
                <BiSolidBookContent className='mx-auto'></BiSolidBookContent> Blogs
            </button>
            <button
                onClick={() => handleClick('contact')}
                className={`w-20 h-16 p-3 ${activeSection === 'contact' ? 'bg-green-300' : 'bg-gray-100'} rounded-lg`}
            >
                <MdContactMail className='mx-auto'></MdContactMail> Contact
            </button>
        </div>
    );
};

Menu.propTypes = {
    setCurrentSection: PropTypes.func.isRequired,
};

export default Menu;
