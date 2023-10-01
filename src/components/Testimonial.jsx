import { TestimonialList } from "@/utilities/utiliti";

const Testimonial = async () => {
  const data = await TestimonialList();
  return (
    <div className="pt-20">
      <section>
        <div className="py-20 radius-for-skewed overflow-hidden">
          <div className="max-w-6xl px-4 pb-6 lg:pb-16">
            <div className="flex flex-wrap justify-center lg:justify-center ">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <h2 className=" text-buttonBorder uppercase">
                  Testimonial List
                </h2>
                <h2 className="font-semibold text-2xl">
                  Better Agency/SEO Solution At <br /> Your Fingertips
                </h2>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
              {data.map((item, i) => {
                return (
                  <div key={i} className="my-4 w-full lg:w-1/3 px-3">
                    <div className="p-8 bg-white rounded shadow text-center">
                      <img
                        className="mb-2 mx-auto w-16 h-16 rounded-md object-cover"
                        src={item.image}
                        alt=""
                      />
                      <p className="mb-8 text-gray-300 text-sm ">{item.msg}</p>

                      <h4 className="mb-1 text-2xl font-bold font-heading uppercase">
                        {item.name}
                      </h4>
                      <p className=" text-base">{item.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
