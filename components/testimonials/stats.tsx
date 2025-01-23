import { Award, Heart, CheckCircle, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "2",
    label: "Awards Win",
  },
  {
    icon: Heart,
    value: "360+",
    label: "Happy Customers",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Satisfaction",
  },
  {
    icon: Clock,
    value: "6+",
    label: "Years of experience",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
