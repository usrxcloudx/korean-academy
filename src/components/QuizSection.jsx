import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, AlertCircle, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export function QuizSection({ quizzes = [], onScoreAdd, onCompleteQuiz, completed = false }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (quizId, optIdx) => {
    if (submitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [quizId]: optIdx
    }));
  };

  const handleSubmit = () => {
    if (submitted || Object.keys(userAnswers).length === 0) return;
    setSubmitted(true);

    let correctCount = 0;
    quizzes.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const scoreEarned = correctCount * 20;
    if (onScoreAdd && scoreEarned > 0) {
      onScoreAdd(scoreEarned);
    }

    if (correctCount === quizzes.length) {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      if (onCompleteQuiz) onCompleteQuiz('quiz_all');
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  if (!quizzes.length) {
    return (
      <div className="clay-card" style={{ padding: '24px', textAlign: 'center', color: '#64748B' }}>
        Không có bài trắc nghiệm nào cho bài học này.
      </div>
    );
  }

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #E11D48, #F43F5E)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF'
          }}>
            <HelpCircle size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1E1B4B' }}>
              Kiểm tra nhanh cuối bài ({quizzes.length} câu)
            </h2>
          </div>
        </div>

        {submitted && (
          <button onClick={handleReset} className="clay-btn clay-btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            <RotateCcw size={16} /> Làm lại bài
          </button>
        )}
      </div>

      {quizzes.map((q, idx) => {
        const isAnswered = userAnswers[q.id] !== undefined;
        const selected = userAnswers[q.id];
        const isCorrect = selected === q.correctIndex;

        return (
          <div
            key={q.id}
            className="clay-card"
            style={{
              padding: '24px',
              borderLeft: isAnswered && submitted 
                ? (isCorrect ? '5px solid #22C55E' : '5px solid #EF4444')
                : '5px solid #CBD5E1'
            }}
          >
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              Câu {idx + 1}: {q.question}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '14px' }}>
              {q.options.map((opt, optIdx) => {
                const isThisSelected = selected === optIdx;
                const isThisRightAnswer = optIdx === q.correctIndex;

                let bg = '#FFFFFF';
                let border = '2px solid #E2E8F0';
                let color = '#1E293B';

                if (submitted) {
                  if (isThisRightAnswer) {
                    bg = '#DCFCE7';
                    border = '2px solid #22C55E';
                    color = '#15803D';
                  } else if (isThisSelected) {
                    bg = '#FEE2E2';
                    border = '2px solid #EF4444';
                    color = '#B91C1C';
                  }
                } else if (isThisSelected) {
                  bg = '#EEF2FF';
                  border = '2px solid #4F46E5';
                  color = '#4F46E5';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(q.id, optIdx)}
                    disabled={submitted}
                    className="hangul-font"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '16px',
                      background: bg,
                      border,
                      color,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: submitted ? 'default' : 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{ marginRight: '8px', opacity: 0.6 }}>{String.fromCharCode(65 + optIdx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '14px',
                background: isCorrect ? '#F0FDF4' : '#FEF2F2',
                border: `1px solid ${isCorrect ? '#86EFAC' : '#FCA5A5'}`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                {isCorrect ? <CheckCircle2 color="#16A34A" size={20} /> : <AlertCircle color="#DC2626" size={20} />}
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: isCorrect ? '#166534' : '#991B1B' }}>
                    {isCorrect ? 'Đáp án chính xác! (+20 điểm)' : 'Chưa chính xác!'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '2px' }}>
                    {q.explanation}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {!submitted && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className="clay-btn clay-btn-rose"
            style={{ padding: '12px 32px', fontSize: '1rem', opacity: answeredCount === 0 ? 0.5 : 1 }}
          >
            <Award size={18} /> Nộp bài &amp; Xem kết quả ({answeredCount}/{quizzes.length})
          </button>
        </div>
      )}
    </div>
  );
}
