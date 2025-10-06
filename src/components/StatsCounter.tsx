import { useEffect, useState, useRef } from "react";

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
}

const StatsCounter = ({ stats }: StatsCounterProps) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.number);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, stats]);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold  mb-2 group-hover:text-accent transition-colors duration-300">
              {counts[index]}{stat.suffix}
            </div>
            <div className=" text-sm lg:text-base group-hover:text-accent transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;