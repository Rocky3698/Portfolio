import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-xl pb-2">
      <a className="text-black relative hover:text-gray-700 flex flex-col items-center group" href="https://github.com/Rocky3698" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>Github</span>
      </a>
      <a className="text-blue-700 relative hover:text-blue-500 flex flex-col items-center group" href="https://www.linkedin.com/in/rocky-chowdhury20809/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>LinkedIn</span>
      </a>
      <a className="text-red-600 relative hover:text-red-500 flex flex-col items-center group" href="https://www.youtube.com/@InnovativeCodeTech" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>YouTube</span>
      </a>
      <a className="text-orange-600 relative hover:text-orange-500 flex flex-col items-center group" href="https://leetcode.com/u/Rocky20809/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>LeetCode</span>
      </a>
      <a className="text-purple-600 relative hover:text-purple-500 flex flex-col items-center group" href="https://codeforces.com/profile/__Cipher__" target="_blank" rel="noopener noreferrer">
        <SiCodeforces />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>Codeforces</span>
      </a>
      <a className="text-red-600 relative hover:text-red-500 flex flex-col items-center group" href="https://www.codechef.com/users/rocky20809" target="_blank" rel="noopener noreferrer">
        <SiCodechef />
        <span className='text-xs absolute top-5 text-center hidden group-hover:inline-block'>CodeChef</span>
      </a>
    </div>
  );
}

export default SocialLinks;
