import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Subscribe";
import Brands from "@/components/Brands";
import WorkList from "@/components/WorkList";

const Page = async () => {
  return (
    <div>
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 right-0 left-0">
          <Brands />
        </div>
      </div>
      <section>
        <WorkList />
      </section>
      <Stats />
      <FeaturedProject />
      <Contacts />
    </div>
  );
};

export default Page;
