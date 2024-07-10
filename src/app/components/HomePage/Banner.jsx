const Banner = () => {
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => (
        <div
        style={{
          background: `linear-gradient(45deg, rgba(7,25,82,.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`
        }} key={index} id={`slide${index+1}`} className="carousel-item relative w-full h-screen">
          <div>
            <h1>{banner.title}</h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={banner.prev} className="btn btn-circle">
              ❮
            </a>
            <a href={banner.next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];
export default Banner;
