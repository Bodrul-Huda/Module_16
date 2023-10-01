import { WorkListData } from "@/utilities/utiliti";

const WorkList = async () => {
  const data = await WorkListData();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="pt-4 pb-12">
            <h6 className="text-featureText uppercase">Work List</h6>
            <h4 className="text-3xl font-semibold pt-2">
              We provide the Perfect Solution <br />
              to your business growth
            </h4>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((item, i) => {
              return (
                <div key={i} className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                        <div className="bg-hero h-20 w-20 rounded-xl flex items-center justify-center">
                          {" "}
                          <h2 className="text-black font-semibold text-lg text-center ">
                            {item.step}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-black text-xl">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-base">{item.des}</p>
                      <a className="mt-3 inline-flex items-center docs-creator">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;
