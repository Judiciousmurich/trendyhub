import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');

    window.location.href = '/auth/login';
  };
  return (
    <div className="sm:h-[10vh] bg-[#06d996] p-2">
      <div className="flex justify-between items-center">
        <div className=" text-white sm:text-2xl ms:mt-3 sm:ml-3 font-semibold">
          TRENDY HUB
        </div>
        <div className="">
          <input
            type="text"
            className=" sm:w-[13rem] mt-3 p-1 rounded-full text-white indent-3 placeholder:text-white  focus:outline-none border bg-transparent border-white"
            placeholder="search..."
          />
        </div>
        <div className="">
        
          <button className="text-white px-4 py-1  rounded-[20px]" onClick={handleLogout} style={{ fontSize: "1rem" }}>
            Logout
          </button>
      
        </div>
      </div>
    </div>
  );
};
