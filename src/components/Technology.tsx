import React from "react";

const Technology = () => {
  let width = {
    width: "400px",
  };
  return (
    <div>

      <div>
        <img src="/images/technologybaner2.jpg" alt="" style={{width:"100%", maxHeight:"500px"}}/>
      </div>

      <div className="container grid gap-8 m-auto my-5 text-center md:text-left">
        <div className="grid gap-4 text-center pt-8">
          <h1 className="text-4xl">Adopting cutting edge technologies</h1>
          <h3 className="text-2xl font-thin">
            Early adoption and implementations with newer and better
            technologies to ensure our clients always stay ahead of the curve
          </h3>
          <p className="text-base md:w-3/5 m-auto">
            We bring strong backend engineering expertise spaning across all
            major backend stack with ability to pow legacy and the latest stack.
          </p>
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:px-6">
            <h2 className="text-3xl font-extrabold">Backend</h2>
            <p className="text-base font-extralight">
              Scalability and Security of any Digital Platform depends on the
              backend systems. In the last 14+ years, we have built backend
              systems to support secure B2B enterprise platforms as well as B2C
              platforms that need to generate/process transactions across
              millions of concurrent users. Our solutions include.
            </p>
            <p className="text-base font-extralight">
              Our team can help you architect, engineer and build backend
              systems for enterprise applications, B2C / B2B software products
              and SaaS solutions using prevalent secure, portable, and scalable
              backend frameworks.
            </p>
          </div>
          <img
            src="/images/backend.png"
            className="md:w-1/2 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:order-2">
            <h2 className="text-3xl font-extrabold">Web</h2>
            <p className="text-base font-extralight">
              We build high impact web solutions for enterprises and startups
              across the web technologies journey right from Web 1.0 (Simple
              Websites), Web 2.0 (Social Networks & Blogs) and Web 3.0 (Semantic
              Websites). Our team has built more than 500+ rich, interactive and
              leading web solutions for some of the leading enterprises and
              startups such as BigBasket, Samsung and more.
            </p>
          </div>
          <img
            src="/images/WEB.png"
            alt=""
            className="md:w-1/2 md:order-1 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5">
            <h2 className="text-3xl font-extrabold">Mobile</h2>
            <p className="text-base font-extralight">
              Divum, as an organization, started with the start of the Mobile
              technology revolution globally. We are a few of the first
              technology companies to design, engineer and build some of the
              first mobile products across all mobile platforms be it Apple iOS,
              Microsoft, Blackberry, Samsung, Nokia, Android and KaiOS
              ecosystem. As a team, we have anchored and evangelized the Mobile
              revolution in India.
            </p>
          </div>
          <img
            src="/images/MOBILE.png"
            alt=""
            className="md:w-1/2 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:order-2">
            <h2 className="text-3xl font-extrabold">
              Cloud Computing Technologies
            </h2>
            <h4 className="text-xl">Aws</h4>
            <p className="text-base font-extralight">
              With the advent of Cloud Computing, as a team, we are early
              adopters of some of the leading cloud computing platforms. We have
              built and deployed 500+ products/solutions on AWS platform. We are
              a certified partner of AWS Partner Network.
            </p>
          </div>
          <img
            src="/images/AWS.png"
            alt=""
            className="md:w-1/2 md:order-1 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5">
            <h2 className="text-3xl font-extrabold">Google</h2>
            <p className="text-base font-extralight">
              We have leveraged most of the technologies and services offered on
              Google Cloud Platform for building/deploying some of the leading
              Digital platforms that demand high scalability and security.
            </p>
            <p className="text-base font-extralight justify-between align-center">
              Google’s Internet Saathi platform and a global point to point
              Travel planning and booking platform engineered for a scale
              similar to MakeMyTrip platform was built by Divum team on Google
              Cloud platform.
            </p>
            <p className="text-base font-extralight justify-between align-center">
              We also built one of our own end to end automated e-Commerce
              platform covering Sourcing, Order Generation, Order Management,
              Operations, Packing, Delivery and Customer Engagement with its own
              ML based Demand Prediction engine completely on Google Cloud
              platform stack leveraging services such as Big Query, TensorFlow,
              App Engine and other GCP services.
            </p>
          </div>
          <img
            src="/images/Google.png"
            alt=""
            className="md:w-1/2 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:order-2">
            <h2 className="text-3xl font-extrabold">Azure</h2>
            <p className="text-base font-extralight">
              For most of our enterprise solution implementations, our team has
              been using Microsoft Azure platforms and services. To name a few,
              our Inventory Management platform for L&T Constructions, IoT
              enabled Sport Analytic platform for Anil Kumble’s startup
              Spektacom in joint collaboration with Microsoft Azure team was
              implemented by the Divum team on Microsoft Azure platform and used
              Azure services extensively.
            </p>
          </div>
          <img
            src="images/AZURE.png"
            alt=""
            className="md:w-1/2 md:order-1 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5">
            <h2 className="text-3xl font-extrabold">oracle</h2>
            <p className="text-base font-extralight">
              Oracle We have been enabling enterprises running on Oracle ERP and
              cloud platform with digital solutions integrated with their
              existing Oracle stack. We have implemented a large scale.
            </p>
          </div>
          <img
            src="/images/ORACLE.png"
            alt=""
            className="md:w-1/2 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:order-2">
            <h2 className="text-3xl font-extrabold">
              Data Engineering & Deep Learning
            </h2>
            <h4 className="text-xl">Databases</h4>
            <p className="text-base font-extralight">
              In today's Data Economy, enterprises need Data to be readily
              available for analysis at scale and make informed decisions.
            </p>
            <p className="text-base font-extralight">
              Data Warehouses and Data Lakes implementations receive massive
              data in-flows from transactional systems, relational &
              non-relational databases and other external systems. We enable our
              customers in implementing the right data platforms, BI solutions
              and analytical applications that store data efficiently, leverage
              data securely at scale and deliver faster query responses.
            </p>
            <p className="text-base font-extralight">
              Our team's expertise across all prevalent Databases, Data
              Warehouses and Data Lake technologies makes this part of the
              Digital Transformation journey easier.
            </p>
          </div>
          <img
            src="/images/AI_ML.png"
            alt=""
            className="md:w-1/2 md:order-1 m-auto"
            style={width}
          />
        </div>

        <div className="md:flex my-5 pt-8 justify-between items-center lg:px-12">
          <div className="flex flex-col gap-4 md:w-2/5 md:px-6">
            <h2 className="text-3xl font-extrabold">Devops</h2>
            <p className="text-base font-extralight">
              For every successful Digital Transformation project, we engage our
              integrated Agile technology teams that sets-up DevOps
              practices/tools leveraging technologies/frameworks such as CI/CD,
              Kubernetes, Docker, Jenkins, Azure DevOps and more. This support
              for adopting DevOps empowers our customers with the ability to
              respond to customer needs faster and achieve enterprise goals
              faster through their software solutions/products.
            </p>
          </div>
          <img
            src="/images/Devops.png"
            className="md:w-1/2 m-auto"
            style={width}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
