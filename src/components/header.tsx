import { FaBars, FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import Sidebar from "./SideBar";
import { FaKitMedical } from "react-icons/fa6";

interface PropsType{
    user: User | null;
}

const Header = ({user}:PropsType) => {

const [isOpen,setIsOpen] = useState<boolean>(false);
const logoutHandler = async()=>{
    try {
        await signOut(auth);
        toast.success("Sign Out Successfully!!");
        setIsOpen(false);
    } catch (error) {
        toast.error("Sign Out Failed!!");
    }
};

  return (
    <nav className="header">
            <Link onClick={()=>setIsOpen(false)} to={"/"} style={{fontFamily: 'cursive', fontWeight: 'bolder'}}>FastAid</Link>

            {
                user?._id?(
                    <>
                    
                    <button onClick={()=>setIsOpen((prev)=> !prev)}>
                        <img src={user.photo} alt="" />
                    </button>
                    {isOpen && 
                    <dialog open={isOpen}>
                        
                            
                            <button onClick={logoutHandler}>
                            <span><h4>Sign Out </h4></span>
                                <FaSignOutAlt />
                            </button>
                            
                            
                    </dialog>
                    }
                    </>
                ): <Link onClick={()=>setIsOpen(false)} to={"/login"}>
                <FaSignInAlt />
            </Link>
            }

    </nav>
  )
}

export default Header;