"use client";




const ExpertiseSection = () => {
  

  return (
    <section className="relative top-0 w-full bg-white pt-20 mb-20">
      <div className=" w-full overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[64px] font-bold mb-6">
            CORE EXPERTISE
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row   items-center justify-center w-full overflow-hidden">
          <div className="w-full lg:w-1/3 h-screen">
            <video
              src="/expertise-animations/Visuals.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="w-full lg:w-1/3 h-screen">
            <video
              src="/expertise-animations/Animation2.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="w-full lg:w-1/3 h-screen">
            <video
              src="/expertise-animations/Production_3.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        

        
      </div>
    </section>
  );
};

export default ExpertiseSection;
