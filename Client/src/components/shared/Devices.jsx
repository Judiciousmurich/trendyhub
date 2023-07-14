

const Devices = ({ bgColor, textColor, text, description, title, buttonBgColor, buttonText, image }) => {
  const containerStyle = {
    backgroundColor: bgColor,
    padding: '4rem',
  };
  const btnTextColorStyle = {
    textColor: bgColor
  }
  const textStyles = {
    color: textColor,
  };

  return (
    <div className="bg-[#282828] p-[4rem] rounded-[10px]" style={containerStyle}>
      <div className="flex flex-col gap-2">
        <h5 className="text-[#ffffff]" style={textStyles}>{text}</h5>
        <h1 className="font-bold text-5xl text-[#ffffff]" style={textStyles}>{description}</h1>
        <h1 className="relative font-bold text-[#f8f8f8] text-[2rem] w-full" style={textStyles}>{title}</h1>
        <button className="w-fit rounded-[50px] p-2" style={{ backgroundColor: buttonBgColor, btnTextColorStyle }}>{buttonText}</button>
        <img className="absolute h-[15rem] " src={image} alt="" />
      </div>
    </div>
  );
};



export default Devices;
