import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={service.img} width={300} height={250} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.title}</h2>
          <p>Price: ${service.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
