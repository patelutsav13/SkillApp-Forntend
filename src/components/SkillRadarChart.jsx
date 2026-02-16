import {
  RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip, Legend
} from "recharts";

const SkillRadarChart = ({ current, target, isDarkMode }) => {
  const data = Object.keys(current).map(key => ({
    subject: key,
    A: current[key],
    B: target[key],
    fullMark: 100
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
          <Radar dataKey="B" stroke="#10b981" fillOpacity={0.1} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadarChart;
