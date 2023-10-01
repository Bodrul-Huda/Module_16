import { generateMetadata } from "@/app/layout";

const BackGround = async () => {
  let name = await generateMetadata();

  return (
    <div className="absolute w-full h-full top-0">
      <div
        className="bg-no-repeat bg-right-top"
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
            <p className="text-buttonBorder">{name.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackGround;
