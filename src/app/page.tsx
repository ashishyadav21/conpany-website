import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

export default function Home() {
  return (
    <div>
      <div className="scroll-snap-y scroll-smooth">

        <section className="h-screen bg-home-background bg-cover z-10 bg-center flex items-center justify-center">
          <div className="h-screen bg-gradient-conic bg-cover z-10 bg-center flex items-center justify-center">
          </div>
        </section>

        <section className="bg-white flex justify-center py-10">
          <div className="container max-w-4xl p-5 flex flex-col items-center">
            <div className="text-center text-gray-700 font-medium text-2xl sm:text-lg p-5 mt-5">
              <h3 className="font-serif">
                We power digital transformation for modern enterprises and new product development for visionary startups with our expertise across Design, Multi Cloud, Data Engineering, Analytics, Machine Learning, AI, and Blockchain.
              </h3>
            </div>
            <h2 className="text-lg sm:text-sm mt-4 font-light text-gray-500 text-center">
              We love taking your vision to reality.
            </h2>
            <div className="mt-10">
              <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] shadow-sm shadow-[#096ad0] transition-all duration-300 ease-in-out hover:bg-[#096ad0] hover:text-white hover:-translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="h-auto md:h-screen bg-white flex justify-center">
          <div className="container w-full p-5 flex flex-col md:flex-row items-center">
            <div className="md:basis-1/2 sm:basis-full flex-col">
              <div className="h-full w-[90%] p-10">
                <h1 className="text-gray-700 text-3xl md:text-4xl font-extrabold m-4">Welcome to GreenField!</h1>
                <p className="text-gray-600 text-xl font-light m-4 leading-normal">
                  The world is seeing unprecedented Digital Transformation across all businesses...
                  <br></br>
                  At GreenField we have prepared ourselves with our 14 years of experience to make this journey seamless and cost-effective for you.
                  <br></br>
                </p>
                <Link href="/">
                  <div className="text-[#3c4aed] underline text-sm items-center m-4">Read More...</div>
                </Link>
              </div>
            </div>
            <div className="md:basis-1/2 sm:basis-full flex justify-center items-center">
              <CustomImage
                src="/images/developer_word_1.png"
                alt='Developer_Work'
                width={500}
                height={700}
              />
            </div>
          </div>
        </section>

        <section className="h-auto bg-white flex justify-center">
          <div className="container w-full p-5 flex flex-col md:flex-row items-center">
            <div className="md:basis-1/2 sm:basis-full flex justify-center items-center">
              <CustomImage
                src="/images/tech-stack.png"
                alt='Developer_Work'
                width={600}
                height={500}
              />
            </div>
            <div className="md:basis-1/2 sm:basis-full flex-col">
              <div className="h-full w-[90%] p-10">
                <h1 className="text-gray-700 text-3xl md:text-4xl font-extrabold m-4">60+ Technologies Covered</h1>
                <p className="text-gray-600 text-xl font-light m-4 leading-normal">
                  We embrace new technologies by partnering with OEMs/Platform owners for Early Access Programs...
                  <br></br>
                </p>
                <Link href="/">
                  <div className="text-[#3c4aed] underline text-sm items-center m-4">Read More...</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="h-auto md:h-[624px] bg-white flex justify-center">
          <div className="container w-full p-5 flex flex-col md:flex-row items-center">
            <div className="md:basis-1/2 sm:basis-full flex-col">
              <div className="h-full w-[90%] p-10">
                <h1 className="text-gray-700 text-3xl md:text-4xl font-extrabold m-4">10+ Domains</h1>
                <p className="text-gray-600 text-xl font-light m-4 leading-normal">
                  In the last 2 years, we have built Digital Solutions cutting across e-Commerce, Supply Chain, Logistics, Social Networks...
                  <br></br>
                </p>
                <Link href="/">
                  <div className="text-[#3c4aed] underline text-sm items-center m-4">Read More...</div>
                </Link>
              </div>
            </div>
            <div className="md:basis-1/2 sm:basis-full flex justify-center items-center">
              <CustomImage
                src="/images/domain_2.png"
                alt='Developer_Work'
                width={500}
                height={700}
              />
            </div>
          </div>
        </section>

        <section className="h-auto bg-white flex justify-center">
          <div className="container w-full p-5 flex flex-col items-center justify-center">
            <div className="flex justify-between items-center flex-col p-10">
              <h1 className="slide-in-left text-4xl md:text-5xl text-nowrap sm:text-wrap font-bold text-[#3c4aed] m-2">
                Take a Step for Your
              </h1>
              <h3 className="slide-in-right text-2xl md:text-3xl font-normal text-gray-600">
                Business Success
              </h3>
              <button className="w-[180px] p-2 h-12 rounded-xl bg-[#ffcf66] text-lg text-white shadow-sm shadow-yellow-200 transition-all duration-300 ease-in-out hover:-translate-y-1 mt-6">
                14 Day Free Trial
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
