import Image from "next/image";


const About = () => {
    return (
        <div className="h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image src='/1.jpg' width={600} height={500} alt=""/>
                    </div>
                    <div>
                        text
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;