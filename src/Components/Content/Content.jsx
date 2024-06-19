
import PropTypes from 'prop-types';
import About from './About/About';
import Works from './Works/Works';
import Resume from './Resume/Resume';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';

const Content = ({ currentSection }) => {
    return (
        <div className='bg-white col-span-6 rounded-lg'>
            {currentSection === 'about' && <About />}
            {currentSection === 'works' && <Works />}
            {currentSection === 'resume' && <Resume />}
            {currentSection === 'blogs' && <Blogs />}
            {currentSection === 'contact' && <Contact />}
        </div>
    );
};
Content.propTypes = {
    currentSection: PropTypes.string.isRequired,
};
export default Content;