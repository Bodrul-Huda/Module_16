import { AllService } from "@/utilities/utiliti";

const Services = async () => {
  const data = await AllService();

  return (
    <div>
      <section>
        <div className="py-20 radius-for-skewed">
          <div className="max-w-6xl px-4 pb-6 lg:pb-16">
            <div className="flex flex-wrap justify-center lg:justify-center ">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <h2 className=" text-buttonBorder uppercase">
                  Our All Services
                </h2>
                <h2 className="font-semibold text-2xl">
                  We Provide BestWeb design <br />
                  services
                </h2>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div>
              <div className="flex flex-wrap -m-4 ">
                {data.map((item, i) => {
                  return (
                    <div key={i} className="p-4 md:w-1/2 w-full">
                      <div className=" mb-4 p-4 bg-white rounded-lg shadow-md ">
                        <div className="mb-12 lg:mb-0 w-full px-4">
                          <h2 className=" text-xl font-bold font-heading py-2">
                            {item.title}
                          </h2>
                          <p className="text-gray-300">{item.des}</p>
                        </div>
                        <div className=" mx-auto rounded-lg">
                          <div className="w-full h-full px-1">
                            <div className="flex flex-wrap h-1/3">
                              <div className="rounded-md p-2 w-full h-1/3 md:w-1/2 lg:w-2/3 h-40">
                                <img
                                  className="object-fill md:h-40 w-full rounded-lg"
                                  src={item.image2}
                                  alt="hero4"
                                />
                              </div>
                              <div className="rounded-md p-2 w-full md:w-1/2 lg:w-1/3 h-40">
                                <img
                                  className="object-fit rounded-lg h-40 "
                                  src={item.image1}
                                  alt="hero3"
                                />
                              </div>
                            </div>
                            <div className="flex flex-wrap h-2/3 ">
                              <div className="rounded-md p-2 pt-4 w-full md:w-1/2 h-56">
                                {" "}
                                <img
                                  className="object-fill w-full rounded-md h-full"
                                  src={item.image3}
                                  alt="hero1"
                                />
                              </div>
                              <div className="rounded-md p-2 pt-4 w-full md:w-1/2 h-56">
                                <img
                                  className="object-fill w-full rounded-md h-full"
                                  src={item.image4}
                                  alt="hero1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
