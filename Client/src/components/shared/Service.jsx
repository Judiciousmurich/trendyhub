const Service = ({ image, title, description }) => (
    <div className="service" >
      <img src={image} alt="" />
      <div className="service-info">
        <h3 className="fs-poppins fs-200">{title}</h3>
        <p className="fs-montserrat fs-50">{description}</p>
      </div>
    </div>
  );
  export default Service;