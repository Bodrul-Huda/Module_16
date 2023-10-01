import { FeaturedProj } from "@/utilities/utiliti";
import Link from "next/link";

const FeaturedProject = async () => {
  const data = await FeaturedProj();

  return (
    <section className="text-gray-600 bg-featureBg body-font py-6">
      <div className="container px-5 py-4 mx-auto">
        <div className="pt-4 pb-12">
          <h6 className="text-featureText uppercase">Featured Project</h6>
          <h4 className="text-3xl font-semibold pt-2">
            We provide the Perfect Solution <br />
            to your business growth
          </h4>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="flex-col my-auto p-4 md:w-1/2 h-full">
            <div className="h-2/3">
              <img
                className="w-full h-full p-2 object-fit rounded-md"
                src="/feature/Mask.png"
                alt="feature"
              />
            </div>
            <div className="h-1/3 pt-8 mr-3">
              <p className="text-xs py-1 text-featureGrey">
                App Design - June 20, 2022
              </p>
              <h2 className="font-bold text-lg">App Redesign</h2>
            </div>
          </div>
          <div className=" p-4 md:w-1/2 ">
            <div className="w-full px-4 flex-wrap">
              <div className="w-full mb-4 md:w1/2 flex flex-wrap items-end">
                {data.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.live}
                      className="w-full lg:w-1/2 px-3"
                    >
                      <img
                        className="w-full object-fit rounded"
                        src={item.image}
                        alt=""
                      />
                      <p className="text-xs py-1 text-featureGrey">
                        {item.title}
                      </p>
                      <p className="font-bold text-sm">
                        Redesign channel website landng page
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
