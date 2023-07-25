export const Box = ({ icon, tally, text, bg }) => {
  return (
    <div className="sm:shadow-lg p-[1rem]  sm:w-[15rem] h-fit flex gap-5 border" >
      <div className={"rounded-full h-[3rem] w-[3rem] img " + bg}>
        <img src={icon} alt="" className="h-[3rem]" />
      </div>
      <div className="">
        <div className="tally">{tally}</div>
        <div className="text font-light text-gray-500">{text}</div>
      </div>
    </div>
  );
};
