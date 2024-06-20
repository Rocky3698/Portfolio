import { CiMail } from "react-icons/ci";
const Contact = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Contact With Me</h1>
            <div className="w-5/6 p-8">
                <h2>Interested in Collaborating or Sharing Ideas? Reach Out to Connect with a Passionate CSE Enthusiast and Developer</h2>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                    <input type="text" placeholder="Name" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                    <input type="email" placeholder="Email" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className="flex items-center gap-2 my-2 border-b border-black w-96 ">
                    <textarea className="textarea w-full p-0 bg-transparent outline-none focus:outline-none border-none" placeholder="Message"></textarea>
                </label>
                <button className="btn"> <CiMail></CiMail> Send Mail</button>
            </div>
        </div>
    );
};

export default Contact;