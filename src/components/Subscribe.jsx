"use client";
const Subscribe = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <p className="text-featureText uppercase text-center">SUBSCRIBE</p>
        <h1 className="font-semibold text-3xl pt-4 text-center capitalize">
          Subscribe to get the latest <br />
          news about us
        </h1>
        <p className="text-subNote text-xs text-center">
          Please drop your email below to get daily update about what we do
        </p>
        <div className="my-8">
          <div className="h-400px flex flex-col px-2">
            <div className="mx-auto my-auto w-full lg:w-2/4 ">
              <form className="flex flex-row border-2 border-black rounded-xl ">
                <input
                  className="h-12 bg-transparent font-bold w-full py-1 px-4 outline-none text-lg text-gray-600 placeholder:text-xs"
                  type="text"
                  placeholder="Enter Your Email Adress"
                />
                <span className="flex items-center rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button className="bg-subButton hover:bg-gredient-light text-lg text-white font-bold py-2 px-6 rounded-lg">
                    Search
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
