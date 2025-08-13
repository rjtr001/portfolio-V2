
import { useEffect, useState } from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';
import { useTheme } from 'next-themes';

type SkillChartProps = {
  data: {
    subject: string;
    score: number;
  }[];
};

const SkillChart = ({ data }: SkillChartProps) => {
  const [animated, setAnimated] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced colors for better visibility in both light and dark modes
  const gridStroke = isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)";
  const axisStroke = isDarkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.4)";
  const tickColor = isDarkMode ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.85)";
  const radarStrokeColor = isDarkMode ? "rgba(139, 92, 246, 0.95)" : "rgba(79, 70, 229, 0.9)";
  const radarFillColor = isDarkMode ? "rgba(139, 92, 246, 0.8)" : "rgba(79, 70, 229, 0.7)";

  return (
    <div className="w-full h-72 md:h-80 lg:h-96 transition-all duration-500">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke={gridStroke} strokeWidth={1.5} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ 
              fill: tickColor, 
              fontSize: 14,
              fontWeight: 600
            }} 
            stroke={axisStroke}
            strokeWidth={1.5}
            tickLine={{ stroke: axisStroke, strokeWidth: 1.5 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ 
              fill: tickColor,
              fontSize: 12,
              fontWeight: 500
            }}
            axisLine={{ 
              stroke: axisStroke,
              strokeWidth: 1.5
            }}
            tickLine={{ 
              stroke: axisStroke,
              strokeWidth: 1.5
            }}
            stroke={axisStroke}
            strokeWidth={1.5}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
              color: isDarkMode ? '#ffffff' : '#000000',
              borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)', 
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              fontWeight: 500
            }} 
            labelStyle={{
              fontWeight: 600,
              color: isDarkMode ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.85)'
            }}
            formatter={(value) => [`${value}%`, 'Score']}
          />
          <Radar
            name="Skill Level"
            dataKey={animated ? "score" : "score"}
            stroke={radarStrokeColor}
            fill={radarFillColor}
            fillOpacity={0.7}
            strokeWidth={2.5}
            animationBegin={0}
            animationDuration={animated ? 1200 : 0}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
