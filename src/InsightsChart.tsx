import React from 'react';

interface FactorScore {
  factor: string;
  value: number;
}

interface InsightsChartProps {
  title: string;
  scores: FactorScore[];
  positiveLabel: string;
  negativeLabel: string;
}

const InsightsChart: React.FC<InsightsChartProps> = ({
  title,
  scores,
  positiveLabel,
  negativeLabel,
}) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{title}</h3>
      <div>
        {scores.map((item, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <p style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>{item.factor}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
                height: '24px',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${Math.abs(item.value) * 50}%`,
                  backgroundColor: item.value >= 0 ? '#2d89ef' : '#8B4513',
                  height: '100%',
                  transform: item.value < 0 ? 'translateX(100%)' : 'none',
                  transition: 'width 0.3s',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '12px',
                  color: '#333',
                }}
              >
                {item.value > 0 ? positiveLabel : negativeLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsChart;
