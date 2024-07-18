import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }: any) => {
  return <div className={clsx("custom-bg  p-8 rounded-xl flex items-center justify-center space-y-8 ", className)}>{children}</div>;
};

const AboutDetails = () => {
  return (
    <section className="py-2 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start text-white"}>
          <h2 className="text-2xl text-left w-full capitalize">About Me</h2>
          <p className="font-light">
            A Bachelor of Mathematics from Sumatera Institute of Technology and Dumbways coding bootcamp. As a Full Stack Developer, I have experience create social media and e-commerce apps using ReactJs as Front End. Having experience
            handling Backend using Express and NestJs for less 1 year, and for database i have experience using Postgress SQL
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-white "}>
          <p className="text-yellow-300 font-semibold w-full text-left text-5xl">
            6 <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-white"}>
          <p className="text-yellow-300 font-semibold w-full text-left text-5xl">
            1 <sub className="font-semibold text-base">years experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full text-white flex-col"}>
          <h2 className="text-2xl text-left w-full capitalize">My Stacks</h2>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,nodejs,react,git,express,github,materialui,matlab,mysql,nestjs,nextjs,npm,postman,prisma,pycharm,r,redux,sequelize,ts,redis,py,postgres,tailwind,flask,bootstrap,vite,vscode"
            alt="ExHunterEx"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
