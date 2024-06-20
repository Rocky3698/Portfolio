import { IoSchoolSharp, IoBriefcase, IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiSqlite, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
const Resume = () => {
    return (
        <div className="p-8 space-y-10">
            <div className="flex items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold">Resume</h1>
                <div className="w-32 h-1 rounded bg-green-600"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="flex items-center text-xl gap-2">
                        <IoSchoolSharp></IoSchoolSharp>
                        <h1>Education</h1>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full bg-amber-50 p-4 rounded-lg">
                            <p>2022 - 2026</p>
                            <h2>BSc In Computer Science Engineering</h2>
                            <h3>Prime University | Certificate</h3>
                        </div>
                        <div className="w-full bg-slate-100 p-4 rounded-lg">
                            <p>April 2023 - Jun 2024</p>
                            <h2>CSE Fundamentals Course</h2>
                            <h3>Phitron | Certificate</h3>
                        </div>
                        <div className="w-full bg-amber-50 p-4 rounded-lg">
                            <p>July 2024 - Jan 2025</p>
                            <h2>Complete Web Development Course</h2>
                            <h3>Programming Hero | Certificate</h3>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center text-xl gap-2">
                        <IoBriefcase ></IoBriefcase>
                        <h1>Experience</h1>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full bg-slate-100 p-4 rounded-lg">
                            <p>2022 - 2026</p>
                            <h2>BSc In Computer Science Engineering</h2>
                            <h3>Prime University</h3>
                        </div>
                        <div className="w-full bg-amber-50 p-4 rounded-lg">
                            <p>2022 - 2026</p>
                            <h2>BSc In Computer Science Engineering</h2>
                            <h3>Prime University</h3>
                        </div>
                        <div className="w-full bg-slate-100 p-4 rounded-lg">
                            <p>2022 - 2026</p>
                            <h2>BSc In Computer Science Engineering</h2>
                            <h3>Prime University</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className=" text-xl">
                        <h1>Working Skill</h1>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <h4>Django</h4>
                            <progress className="progress progress-success h-1 w-96" value="55" max="100"></progress>
                        </div>
                        <div>
                            <h4>React</h4>
                            <progress className="progress progress-success h-1 w-96" value="40" max="100"></progress>
                        </div>
                        <div>
                            <h4>MySQL</h4>
                            <progress className="progress progress-success h-1 w-96" value="60" max="100"></progress>
                        </div>
                        <div>
                            <h4>DSA</h4>
                            <progress className="progress progress-success h-1 w-96" value="90" max="100"></progress>
                        </div>
                        
                        <div>
                            <h4>OOP</h4>
                            <progress className="progress progress-success h-1 w-96" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="text-xl">
                        <h1>knowledge</h1>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-md">
                            <FaPython></FaPython>
                            <h4>Python</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <SiDjango></SiDjango>
                            <h4>Django</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <FaReact className="text-blue-400"></FaReact>
                            <h4>React</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <SiSqlite className="text-blue-400"></SiSqlite>
                            <h4>SQLite</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <SiMysql className="text-blue-600 text-xl"></SiMysql>
                            <h4>MySQL</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <BiLogoPostgresql className="text-blue-500 text-xl"></BiLogoPostgresql>
                            <h4>PostgreSQL</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <FaHtml5 className="text-red-400 text-xl"></FaHtml5>
                            <h4>HTML5</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <FaCss3 className="text-blue-500 text-xl"></FaCss3>
                            <h4>CSS3</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <RiTailwindCssFill className="text-blue-500 text-xl"></RiTailwindCssFill>
                            <h4>Tailwind</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <FaBootstrap className="text-blue-500 text-xl"></FaBootstrap>
                            <h4>Bootstrap</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 px-2 rounded-md">
                            <h4>DaisyUI</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <IoLogoJavascript className="text-orange-400 text-xl"></IoLogoJavascript>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <TbBrandCpp className="text-black text-xl"></TbBrandCpp>
                            <h4>CPP</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <h4>Data Structure</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <h4>Algorithm</h4>
                        </div>
                        <div className="flex items-center gap-2  bg-slate-200 p-2 rounded-md">
                            <h4>OOP</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;