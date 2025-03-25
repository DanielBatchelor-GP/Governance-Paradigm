import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface ResultChartProps {
  x: number;
  y: number;
}

const ResultChart: React.FC<ResultChartProps> = ({ x, y }) => {
  const data = [{ x, y }];

  return (
    <div style={{ width: '100%', height: 500, maxWidth: 500, margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
          <CartesianGrid stroke="#ccc" />
          <ReferenceLine x={0} stroke="black" strokeWidth={1.5} />
          <ReferenceLine y={0} stroke="black" strokeWidth={1.5} />

          <XAxis
            type="number"
            dataKey="x"
            domain={[-2, 2]}
            ticks={[-2, -1, 0, 1, 2]}
            allowDecimals={false}
          >
            <Label value="Parochialist ← X → Cosmopolist" position="bottom" offset={0} />
          </XAxis>

          <YAxis
            type="number"
            dataKey="y"
            domain={[2, -2]} // Y-axis is flipped so Consentīre is bottom
            ticks={[2, 1, 0, -1, -2]}
            allowDecimals={false}
          >
            <Label value="Consentīre (↓) — Dissensus (↑)" angle={-90} position="insideLeft" />
          </YAxis>

          {/* Quadrant Labels */}
          <text x="20" y="40" fill="#c53030" fontSize="12" fontWeight="bold">
            Sovereign Disruptor
          </text>
          <text x="340" y="40" fill="#6b46c1" fontSize="12" fontWeight="bold">
            Progressive Institutionalist
          </text>
          <text x="20" y="470" fill="#8B4513" fontSize="12" fontWeight="bold">
            Provincial Conservative
          </text>
          <text x="320" y="470" fill="#2c7a7b" fontSize="12" fontWeight="bold">
            Pragmatic Globocrat
          </text>

          <Tooltip />
          <Scatter name="Your Position" data={data} fill="#ff4b4b" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
