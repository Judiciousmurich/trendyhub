const Service = ({ image, title, description }) => (
  <div className="flex gap-4 items-center service my-[5rem] " >
    <img src={image} alt="" />
    <div className="service-info">
      <h3 className="font-bold text-lg fs-poppins fs-200">{title}</h3>
      <p className="fs-montserrat fs-50">{description}</p>
    </div>
  </div>
);
export default Service;