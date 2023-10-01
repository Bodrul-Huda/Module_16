import { HeroList } from "@/utilities/utiliti";
import Link from "next/link";
const Hero = async () => {
  const data = await HeroList();

  return (
    <div>
      <section className="relative bg-hero">
        <div className="relative pt-12 lg:pt-20 pb-36 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="my-3 text-2xl lg:text-5xl font-bold font-heading">
                      {data.title}
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 leading-loose">{data.description}</p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-buttonBorder hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
                        href="#"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full lg:w-1/2 px-4">
                <div className="flex flex-wrap h-2/3 lg:mb-4 lg:ml-1 ">
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-full p-2 object-fit rounded-2xl"
                    src={data.image2}
                    alt="hero1"
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-70 p-2 object-fit rounded-2xl"
                    src={data.image1}
                    alt="hero2"
                  />
                </div>
                <div className="flex flex-wrap h-1/3 lg:mb-4  ">
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-46 p-2 object-fit rounded-2xl "
                    src={data.image4}
                    alt="hero3"
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-full p-2 object-fit rounded-2xl"
                    src={data.image3}
                    alt="hero4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
