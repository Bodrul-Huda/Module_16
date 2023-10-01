import { AllProj } from "@/utilities/utiliti";
import Link from "next/link";

const AllProject = async () => {
  const data = await AllProj();

  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="max-w-6xl px-4 pb-6 lg:pb-16">
          <div className="flex flex-wrap justify-center lg:justify-center ">
            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
              <h2 className=" text-buttonBorder uppercase">All Project</h2>
              <h2 className="font-semibold text-2xl">
                Better Agency/SEO Solution At <br /> Your Fingertips
              </h2>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((item, i) => {
                return (
                  <Link
                    href={item.live}
                    key={i}
                    className="p-4 md:w-1/2 w-full"
                  >
                    <div className="relative mb-4 p-4 bg-white rounded-lg shadow-md ">
                      <div className="relative h-80 mx-auto rounded-lg">
                        <img
                          className="h-80 w-full relative h-full rounded-lg object-cover"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <p className="font-semibold text-lg pt-3">{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProject;
