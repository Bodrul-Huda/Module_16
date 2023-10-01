import { BrandList } from "@/utilities/utiliti";

const Brands = async () => {
  const data = await BrandList();

  return (
    <section className="py-5">
      <div className="w-full py-6 mx-auto px-4 text-center bg-white opacity-70">
        <div className="flex flex-wrap -mx-2">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
              >
                <div href="#">
                  <img
                    className="mx-auto h-8"
                    src={item["image"]}
                    alt={item["name"]}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
