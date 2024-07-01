
const Works = () => {
    return (
        <div className="p-8 space-y-10">
            <div className="flex items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold">Projects</h1>
                <div className="w-32 h-1 rounded bg-green-600"></div>
            </div>
            <div className="flex gap-5 flex-wrap justify-start items-center">
                <div className="w-96 shadow-md rounded-lg">
                    <figure className="w-96 h-auto "><img className="w-full rounded-lg h-full object-cover" src="FurEver_Home.png" alt="web Img" /></figure>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">FurEver Home</h1>
                        <h1 className="font-mono">Full Stack | Pet Adoption Platform</h1>
                        <h1><span className="font-bold">Technology:</span> Django Rest Framework, React, Tailwind, DaisyUI, PostgreSQL</h1>
                        <div>
                            <a href="https://fur-ever-home.vercel.app/" target="_blank" className="text-blue-500">Preview | </a>
                            <a href="https://github.com/Rocky3698/FurEver_Home" target="_blank" className="text-blue-500">Client-Side Code | </a>
                            <a href="https://github.com/Rocky3698/FurEver_Home_API" target="_blank" className="text-blue-500">Server-Side Code</a>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-md rounded-lg">
                    <figure className="w-96 h-auto "><img className="w-full rounded-lg h-full object-cover" src="MomentScape.png" alt="web Img" /></figure>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">MomentScape</h1>
                        <h1 className="font-mono">Full Stack | Social Media Platform</h1>
                        <h1><span className="font-bold">Technology:</span> Django Rest Framework, React, Tailwind, DaisyUI, PostgreSQL</h1>
                        <div>
                            <a href="https://moment-scape.vercel.app/" target="_blank" className="text-blue-500">Preview | </a>
                            <a href="https://github.com/Rocky3698/MomentScape" target="_blank" className="text-blue-500">Client-Side Code | </a>
                            <a href="https://github.com/Rocky3698/MomentScape_REST_API" target="_blank" className="text-blue-500">Server-Side Code</a>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-md rounded-lg">
                    <figure className="w-96 h-auto "><img className="w-full rounded-lg h-full object-cover" src="DriveDreams.png" alt="web Img" /></figure>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">DriveDreams</h1>
                        <h1 className="font-mono">MVT | Car Sales Website</h1>
                        <h1><span className="font-bold">Technology:</span> Django Model View Template, Bootstrap, HTML, CSS, JS</h1>
                        <div>
                            <a href="https://github.com/Rocky3698/Drive-Dreams" target="_blank" className="text-blue-500">Github </a>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-md rounded-lg">
                    <figure className="w-96 h-auto "><img className="w-full rounded-lg h-full object-cover" src="BookShelf.png" alt="web Img" /></figure>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">BookShelf</h1>
                        <h1 className="font-mono">MVT | Library Management</h1>
                        <h1><span className="font-bold">Technology:</span> Django Model View Template, Bootstrap, HTML, CSS, JS</h1>
                        <div>
                            <a href="https://bookshelf-dnaw.onrender.com/" target="_blank" className="text-blue-500">Preview | </a>
                            <a href="https://github.com/Rocky3698/BookShelf" target="_blank" className="text-blue-500">Server-Side Code</a>
                        </div>
                    </div>
                </div>
                <div className="w-96 shadow-md rounded-lg">
                    <figure className="w-96 h-auto "><img className="w-full rounded-lg h-full object-cover" src="PHTube.png" alt="web Img" /></figure>
                    <div className="p-5">
                        <h1 className="font-bold text-xl">PH Tube</h1>
                        <h1 className="font-mono"> MVT | Video Thumbnail Platform</h1>
                        <h1><span className="font-bold">Technology:</span> Django Model View Template, Bootstrap, HTML, CSS, JS</h1>
                        <div>
                            <a href="https://tubehero.netlify.app/" target="_blank" className="text-blue-500">Preview | </a>
                            <a href="https://github.com/Rocky3698/PHero-Tube" target="_blank" className="text-blue-500">Server-Side Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;