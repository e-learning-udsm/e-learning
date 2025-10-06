import StatsCounter from "./StatsCounter";

const MissionBanner = () => {
  const stats = [
    { number: 50, label: "Research Projects", suffix: "+" },
    { number: 25, label: "Publications" },
    { number: 100, label: "Students Mentored", suffix: "+" },
    { number: 15, label: "International Partners" },
  ];

  return (
    <section className="py-8  relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="w-full mx-auto px-8 lg:px-24 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black hover:scale-105 transition-transform duration-300">
          Our Mission
        </h2>
        <p className="text-xl text-back/90 max-w-4xl mx-auto leading-relaxed mb-6 hover:text-blue transition-colors duration-300">
          Advancing online learning with remote experiments, intelligence,
          immersive and accessible digital education for all
        </p>

        <StatsCounter stats={stats} />
      </div>
    </section>
  );
};

export default MissionBanner;
