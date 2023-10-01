import NavBar from "@/components/Navbar";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import SiteFooter from "@/components/SiteFooter";

export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator",
    keywords:
      " broadband speed test, connection speed, download speed, express js, internet speed, internet speed meter, ISP speed, net speed test, network speed, ping test, react js, upload speed, Wifi Speed Test ",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#269669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <div className="absolute z-50 top-0 left-0 right-0">
          <NavBar />
        </div>

        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
