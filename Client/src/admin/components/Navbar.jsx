export const Navbar = () => {
  return (
    <div className="h-[10vh] bg-[#06d996] ">
      <div className="flex justify-between">
        <div className=" text-white text-2xl mt-3 ml-3 font-semibold">
          TRENDY HUB
        </div>
        <div className="">
          <input
            type="text"
            className=" w-[13rem] mt-3 p-1 rounded-full text-white indent-3 placeholder:text-white  focus:outline-none border bg-transparent border-white"
            placeholder="search..."
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
