import { Link } from "react-router-dom"
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/auth/login');
    }
    return (
        <nav className="grid grid-cols-[1fr_2fr_1fr] gap-2 py-2 px-4">
            <div className="flex items-center">
                <Link to='/'><h2 className="text-2xl text-purple-500 font-bold">querio</h2></Link>
            </div>
            <div className="flex items-center justify-center">
                <input type="text" className="outline-none w-3/5 border py-2 px-4 rounded-md mx-6" placeholder="Search Query, tags etc." />
                <button className="rounded-full border p-2 hover:bg-[#06C167] ease-in-out duration-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-8">
                    {/* <Link to='/about'><h2 className="text-purple-500">About Us</h2></Link> */}
                    {/* <Link to='/mission'><h2 className="text-purple-500">Our Mission</h2></Link> */}
                </div>
                {user === null ? (
                    <button className="py-2 px-4 bg-purple-500 text-white hover:bg-purple-400 ease-in-out duration-300">
                        <Link to='/auth/login'>Log In</Link>
                    </button>
                ) : (
                    <div className="flex justify-center items-center gap-4 ">
                        <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300">
                            <span className="capitalize">{user.name.substring(0, 1)}</span>
                        </div>
                        <button className="py-2 px-4 bg-purple-500 text-white hover:bg-purple-400 ease-in-out duration-300" onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar