

import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";

const Page = () => {
  return (
    <>
      <div className="relative w-full h-full top-0">
        <div
          className="bg-no-repeat bg-right-top py-16"
          style={{
            backgroundImage: 'url("/BG.png")',
          }}
        >
          <div className="px-6">
            <h4 className="mb-1 mt-16 text-2xl font-bold font-heading">
              Testimonial List
            </h4>
            <div className=" flex text-sm space-x-4">
              <p>Home</p>
              <p className="font-thin">&#10095;</p>
              <p className="text-buttonBorder">TestimonialList</p>
            </div>
          </div>
        </div>
      </div>

      
      <section>
        <Testimonial />
      </section>

      <Subscribe />
    </>
  );
};

export default Page;
