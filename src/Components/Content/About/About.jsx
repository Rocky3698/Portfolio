import { FaCode } from "react-icons/fa";
const About = () => {
    return (
        <div className="p-8 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">About Me</h1>
                    <div className="w-32 h-1 bg-green-600 rounded"></div>
                </div>
                <p>
                    Hello! I&apos;m Rocky Chowdhury, a computer science enthusiast with expertise in C, C++, Python, and web development. My journey includes competitive programming, achieving a 2-star rating on CodeChef, and solving problems on LeetCode and Codeforces.
                </p>
                <p>I specialize in frontend technologies like React, Tailwind, Bootstraps, and DaisyUI, and backend frameworks such as Django and DRF. Always eager to learn and grow, I love tackling new challenges and collaborating on innovative projects.</p>
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">What I Do!</h1>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <div className="grid grid-cols-11 w-[45%] bg-stone-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Web Development</h1>
                            <p>
                            I started with the basics of HTML, CSS, and JavaScript, creating structured and visually appealing web pages. I then explored frameworks like Bootstrap, Tailwind, and DaisyUI for responsive design and learned React for dynamic interfaces. This comprehensive understanding allows me to build robust and engaging websites.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-slate-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Frontend Development</h1>
                            <p>
                            I focus on crafting intuitive and visually appealing user interfaces. Using HTML, CSS, and JavaScript, I create the structure and style of web pages. My experience with frameworks like Bootstrap, Tailwind, and DaisyUI, along with proficiency in React, ensures responsive and interactive frontend solutions.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-slate-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Backend Development</h1>
                            <p>
                            My backend development skills include creating robust server-side applications with Django and the Django Rest Framework (DRF). I have completed two DRF projects and two Model-View-Template (MVT) projects. I am proficient in MySQL and PostgreSQL, enabling me to design efficient data storage solutions and develop scalable, secure backend systems.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-stone-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Competitive Programming</h1>
                            <p>
                            Competitive programming has sharpened my problem-solving skills. Starting with C and C++, I built a strong foundation and progressed to platforms like CodeChef, achieving a 2-star rating, and Codeforces, with a rating of almost 1200. Solving DSA problems on LeetCode has further enhanced my coding abilities and logical thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;