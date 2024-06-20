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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nihil vitae ut a quasi repudiandae magnam iusto commodi, sapiente deleniti fuga totam quia itaque voluptate vero? Facilis et quo sit?
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-slate-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Frontend Development</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nihil vitae ut a quasi repudiandae magnam iusto commodi, sapiente deleniti fuga totam quia itaque voluptate vero? Facilis et quo sit?
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-slate-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Backend Development</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nihil vitae ut a quasi repudiandae magnam iusto commodi, sapiente deleniti fuga totam quia itaque voluptate vero? Facilis et quo sit?
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-11 w-[45%] bg-stone-200 rounded-lg p-4">
                        <FaCode className="col-span-1 text-3xl"></FaCode>
                        <div className="col-span-10">
                            <h1 className="font-bold text-2xl">Competitive Programming</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nihil vitae ut a quasi repudiandae magnam iusto commodi, sapiente deleniti fuga totam quia itaque voluptate vero? Facilis et quo sit?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;