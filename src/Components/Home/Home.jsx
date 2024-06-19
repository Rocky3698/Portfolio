
import Profile from './../ProfileSection/Profile';
import Content from './../Content/Content';
import Menu from './../MenuSection/Menu';
import { useState } from 'react';
const Home = () => {
    const [currentSection, setCurrentSection] = useState('about');
    return (
        <div className=' grid grid-cols-9 gap-5 pt-36'>
            <Profile></Profile>
            <Content currentSection={currentSection}></Content>
            <Menu setCurrentSection={setCurrentSection}></Menu>
        </div>
    );
};

export default Home;