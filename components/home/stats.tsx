import { Award, Heart, Briefcase, CheckCircle } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Award,
    value: "2",
    label: "Awards Win",
  },
  {
    id: 2,
    icon: Heart,
    value: "360+",
    label: "Happy Customers",
  },
  {
    id: 3,
    icon: CheckCircle,
    value: "100%",
    label: "Satisfaction",
  },
  {
    id: 4,
    icon: Briefcase,
    value: "6+",
    label: "Years of experience",
  },
];

export default function Stats() {
  return (
    <section className="pb-5 bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <stat.icon className="h-7 w-7 mb-4 text-blue-800" />
              <h3 className="text-2xl text-blue-800 font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
