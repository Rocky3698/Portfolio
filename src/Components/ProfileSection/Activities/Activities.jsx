import { TiInfoLarge } from "react-icons/ti";
import Year from './Year';
const Activities = () => {
    return (
        <div className="w-full h-38 border rounded-lg p-3 space-y-2 relative hidden">

            <div className="flex justify-between ">

                <div className="dropdown dropdown-hover absolute top-[2px] right-[2px] rounded-xl bg-slate-200 text-sm">
                    <div tabIndex={0} role="button"><TiInfoLarge className=""></TiInfoLarge></div>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 text-start">
                        <small>
                            The Activity section shows my growth: new skills, projects, blog posts, and tech job experiences, highlighting my commitment to development.
                        </small>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-100 rounded-sm"></div>
                            <small>No Growth</small>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                            <small>Added New Blogs</small>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                            <small>Developed New Skills</small>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                            <small>Created New Projects</small>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                            <small>Started New Job</small>
                        </div>
                        <div>
                            <small>Note: The max achievements will be shown on the graph for a specific month.</small>
                        </div>
                    </div>
                </div>
                <small>Total Updates: 10</small>
                <div className="flex gap-2">
                    <small>Less</small>
                    <div className="flex gap-[2px] items-center">
                        <div className="w-3 h-3 bg-green-100 rounded-sm"></div>
                        <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                        <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                    </div>
                    <small>More</small>
                </div>
            </div>
            <div className='text-start flex items-center justify-around'>
                <Year></Year>
                <Year></Year>
                <Year></Year>
                <Year></Year>
                <Year></Year>
                <Year></Year>
            </div>

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

        </div>
    );
};

export default Activities;