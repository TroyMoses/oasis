import { Award, Heart, CheckCircle, Briefcase } from "lucide-react";

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
    value: "630+",
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
    value: "5+",
    label: "Years of experience",
  },
];

export default function Stats() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-blue-500 text-white rounded-lg p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
