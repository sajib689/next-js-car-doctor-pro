import {services} from '../../lib/services'
import ServiceCard from '../cards/ServiceCard';
const Services = () => {
   
  return (
    <div>
      <div className="w-[500px] mx-auto text-center space-y-3">
        <p className="text-primary font-bold">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols lg:grid-cols-3 gap-6 mt-12 container mx-auto">
        {
            services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
