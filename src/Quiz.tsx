import React, { useState, useRef } from 'react';
import { xAxisQuestions } from './questions';
import { yAxisQuestions } from './yAxisQuestions';
import ResultChart from './ResultChart';
import { toPng } from 'html-to-image';
import InsightsChart from './InsightsChart';

const allQuestions = [...xAxisQuestions, ...yAxisQuestions];

const identityDescriptions: Record<string, { quote: string; description: string }> = {
  "The New Centrist": {
    quote: "We build from both tradition and progress, not bound by extremes.",
    description:
      "You value balance, pragmatism, and a careful fusion of ideas from both national and global perspectives. You're neither tied to the old world nor swept up by disruption — instead, you see a steady path forward.",
  },
  "Provincial Conservative": {
    quote: "Tradition, order, and national unity are the pillars of a strong society.",
    description:
      "You believe in preserving national identity, cultural heritage, and the stabilising influence of long-standing institutions. You value cohesion over chaos, and local authority over global mandates.",
  },
  "Pragmatic Globocrat": {
    quote: "Global challenges require global cooperation — but grounded in national interest.",
    description:
      "You support global integration where it serves humanity, but believe strong governance, rule of law, and economic pragmatism are essential for stability and progress.",
  },
  "Sovereign Disruptor": {
    quote: "Let us reinvent the world — starting with ourselves.",
    description:
      "You believe the current systems are broken. You're open to radical reinvention of governance, identity, economy, and law, putting the sovereignty of the people and innovation above convention.",
  },
  "Progressive Institutionalist": {
    quote: "Humanity thrives when we tear down old walls and build inclusive futures.",
    description:
      "You embrace diversity, global citizenship, and visionary ideals. You believe in building inclusive institutions, often beyond the nation-state, to shape a better and more just world.",
  },
};

const getIdentityColor = (identity: string) => {
  switch (identity) {
    case "The New Centrist":
      return "#4a5568";
    case "Provincial Conservative":
      return "#8B4513";
    case "Pragmatic Globocrat":
      return "#2c7a7b";
    case "Sovereign Disruptor":
      return "#c53030";
    case "Progressive Institutionalist":
      return "#6b46c1";
    default:
      return "#2d89ef";
  }
};

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(allQuestions.length).fill(null));
  const [complete, setComplete] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);

    if (current < allQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setComplete(true);
    }
  };

  const calculateX = (answers: number[]) => {
    const xAnswers = answers.slice(0, xAxisQuestions.length);
    const total = xAnswers.reduce((sum, val) => sum + val, 0);
    return Number((total / xAnswers.length).toFixed(2));
  };

  const calculateY = (answers: number[]) => {
    const yAnswers = answers.slice(xAxisQuestions.length);
    const total = yAnswers.reduce((sum, val) => sum + val, 0);
    return Number((total / yAnswers.length).toFixed(2));
  };

  const getIdentity = (x: number, y: number) => {
    if (Math.abs(x) < 0.25 && Math.abs(y) < 0.25) return "The New Centrist";
    if (x < 0 && y < 0) return "Provincial Conservative";
    if (x > 0 && y < 0) return "Pragmatic Globocrat";
    if (x < 0 && y > 0) return "Sovereign Disruptor";
    if (x > 0 && y > 0) return "Progressive Institutionalist";
    return "Undefined";
  };

  const calculateFactorScores = (answers: number[]) => {
    const factorScores: Record<string, number[]> = {};

    allQuestions.forEach((question, index) => {
      if (answers[index] !== null) {
        const factor = question.factor;
        if (!factorScores[factor]) {
          factorScores[factor] = [];
        }
        factorScores[factor].push(answers[index]);
      }
    });

    const averagedScores = Object.keys(factorScores).map((factor) => ({
      factor,
      value: factorScores[factor].reduce((sum: number, val: number) => sum + val, 0) / factorScores[factor].length,
    }));

    return averagedScores;
  };

  if (complete) {
    const xScore = calculateX(answers);
    const yScore = calculateY(answers);
    const identity = getIdentity(xScore, yScore);
    const { quote, description } = identityDescriptions[identity] || { quote: '', description: '' };
    const identityColor = getIdentityColor(identity);

    const factorScores = calculateFactorScores(answers); // Get factor scores

    return (
      <div style={{ padding: '2rem' }}>
        <h2>Quiz Complete ✅</h2>
        <p>Your position on the Governance Paradigm:</p>

        <div ref={resultRef} style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
          <div
            style={{
              border: `3px solid ${identityColor}`,
              borderRadius: '8px',
              padding: '1rem',
              marginTop: '1rem',
              backgroundColor: '#f9f9f9',
            }}
          >
            <ResultChart x={xScore} y={yScore} />
          </div>

          <h3
            style={{
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: identityColor,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '50%',
                backgroundColor: identityColor,
              }}
            />
            🧭 You are a: <strong>{identity}</strong>
          </h3>

          <blockquote
            style={{
              fontStyle: 'italic',
              marginTop: '0.5rem',
              color: identityColor,
            }}
          >
            “{quote}”
          </blockquote>

          <p style={{ marginTop: '1rem' }}>{description}</p>
        </div>

        {/* Insights Chart */}
        <InsightsChart
          title="X-Axis Breakdown"
          scores={factorScores.filter((score) => xAxisQuestions.some((q) => q.factor === score.factor))}
          positiveLabel="Cosmopolist"
          negativeLabel="Parochialist"
        />

        <InsightsChart
          title="Y-Axis Breakdown"
          scores={factorScores.filter((score) => yAxisQuestions.some((q) => q.factor === score.factor))}
          positiveLabel="Dissensus"
          negativeLabel="Consentīre"
        />

        {/* Share Card Download */}
        <button
          onClick={() => {
            if (resultRef.current) {
              toPng(resultRef.current)
                .then((dataUrl) => {
                  const link = document.createElement('a');
                  link.download = 'governance-paradigm-result.png';
                  link.href = dataUrl;
                  link.click();
                })
                .catch((err) => console.error('Export failed:', err));
            }
          }}
          style={{
            marginTop: '2rem',
            padding: '0.5rem 1rem',
            backgroundColor: identityColor,
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          📸 Download Your Share Card
        </button>

        {/* Restart */}
        <button
          onClick={() => {
            setAnswers(Array(allQuestions.length).fill(null));
            setCurrent(0);
            setComplete(false);
          }}
          style={{
            marginTop: '1rem',
            marginLeft: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#4a5568',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          🔁 Restart Quiz
        </button>

        {/* Social Share */}
        <div style={{ marginTop: '2rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>📣 Share your result:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `🧭 I’m a ${identity} on The Governance Paradigm.\nTake the quiz: https://yourwebsite.com`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1da1f2',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              🐦 Share on X
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                'https://yourwebsite.com'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#0077b5',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              👔 Share on LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }

  const q = allQuestions[current];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem' }}>
        Question {current + 1} of {allQuestions.length}
      </h2>
      <p style={{ margin: '1rem 0', fontWeight: 'bold' }}>{q.text}</p>
      <p style={{ fontStyle: 'italic' }}>{q.factor}</p>

      {q.type === 'likert' &&
        [2, 1, 0, -1, -2].map((val) => (
          <button
            key={val}
            onClick={() => handleAnswer(val)}
            style={{
              margin: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              backgroundColor: '#2d89ef',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {val === 2 && 'Strongly Agree'}
            {val === 1 && 'Agree'}
            {val === 0 && 'Neutral'}
            {val === -1 && 'Disagree'}
            {val === -2 && 'Strongly Disagree'}
          </button>
        ))}

      {q.type === 'multiple' &&
        q.options?.map((option: { label: string; value: number }, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            style={{
              display: 'block',
              margin: '0.5rem auto',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              backgroundColor: '#2d89ef',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              maxWidth: '600px',
            }}
          >
            {option.label}
          </button>
        ))}
    </div>
  );
};

export default Quiz;
