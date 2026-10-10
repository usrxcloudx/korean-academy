import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Volume2, 
  Award, 
  Sparkles, 
  MessageSquare, 
  FileText,
  Filter,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function WorkbookSection({ unit, onScoreAdd, onCompleteSection }) {
  const exercises = unit.workbook || [];
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const [isAllSubmitted, setIsAllSubmitted] = useState(false);

  const categories = [
    { key: 'ALL', label: 'Tất cả bài tập', icon: BookOpen },
    { key: '어휘', label: 'Luyện Từ vựng (어휘)', icon: FileText, color: '#3B82F6' },
    { key: '문법', label: 'Luyện Ngữ pháp (문법)', icon: Sparkles, color: '#8B5CF6' },
    { key: '읽기', label: 'Đọc hiểu & Hội thoại (읽기)', icon: MessageSquare, color: '#10B981' }
  ];

  const filteredExercises = selectedCategory === 'ALL'
    ? exercises
    : exercises.filter(ex => ex.category === selectedCategory);

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectOption = (exId, optionIdx) => {
    if (showResults[exId] || isAllSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [exId]: optionIdx }));
  };

  const handleCheckSingle = (ex) => {
    if (userAnswers[ex.id] === undefined) return;
    setShowResults(prev => ({ ...prev, [ex.id]: true }));

    const isCorrect = userAnswers[ex.id] === ex.correctIndex;
    if (isCorrect && onScoreAdd) {
      onScoreAdd(20);
    }

    // Check if all are answered and correct
    const newResults = { ...showResults, [ex.id]: true };
    const allAnswered = exercises.every(e => newResults[e.id]);
    if (allAnswered) {
      setIsAllSubmitted(true);
      const allCorrect = exercises.every(e => userAnswers[e.id] === e.correctIndex);
      if (allCorrect) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        if (onCompleteSection) onCompleteSection(`wb_${unit.id}`);
      }
    }
  };

  const handleSubmitAll = () => {
    const updatedResults = {};
    let correctCount = 0;
    exercises.forEach(ex => {
      updatedResults[ex.id] = true;
      if (userAnswers[ex.id] === ex.correctIndex) {
        correctCount++;
      }
    });

    setShowResults(updatedResults);
    setIsAllSubmitted(true);

    if (onScoreAdd && correctCount > 0) {
      onScoreAdd(correctCount * 20);
    }

    if (correctCount === exercises.length) {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      if (onCompleteSection) onCompleteSection(`wb_${unit.id}`);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults({});
    setIsAllSubmitted(false);
  };

  if (!exercises.length) {
    return (
      <div className="clay-card" style={{ padding: '32px', textAlign: 'center', color: '#64748B' }}>
        Đang cập nhật bài tập thực hành cho bài học này.
      </div>
    );
  }

  const answeredCount = Object.keys(showResults).length;
  const correctTotal = exercises.filter(ex => showResults[ex.id] && userAnswers[ex.id] === ex.correctIndex).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div className="clay-card" style={{
        padding: '24px',
        background: 'linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)',
        border: '1px solid #DBEAFE',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 6px 14px rgba(59, 130, 246, 0.35)'
            }}>
              <BookOpen size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Giáo trình &amp; Sách Bài Tập Tiếng Hàn Tổng Hợp
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1E1B4B', margin: 0 }}>
                Luyện tập thực hành: {unit.titleKo} ({unit.titleVi})
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {answeredCount > 0 && (
              <button 
                onClick={handleReset} 
                className="clay-btn clay-btn-secondary" 
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <RotateCcw size={16} /> Làm lại từ đầu
              </button>
            )}
            {!isAllSubmitted && exercises.some(ex => userAnswers[ex.id] !== undefined && !showResults[ex.id]) && (
              <button 
                onClick={handleSubmitAll} 
                className="clay-btn clay-btn-primary" 
                style={{ padding: '8px 18px', fontSize: '0.88rem' }}
              >
                <Check size={16} /> Nộp bài tất cả
              </button>
            )}
          </div>
        </div>

        {/* Progress & Category Filter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`clay-btn ${isActive ? 'clay-btn-primary' : ''}`}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.85rem',
                    background: isActive ? undefined : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    boxShadow: isActive ? undefined : '0 2px 5px rgba(0,0,0,0.04)'
                  }}
                >
                  <Icon size={15} style={{ color: isActive ? '#FFFFFF' : cat.color }} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
              Tiến độ: {answeredCount}/{exercises.length} câu
            </span>
            {answeredCount > 0 && (
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '999px',
                background: correctTotal === exercises.length ? '#DCFCE7' : '#FEF3C7',
                color: correctTotal === exercises.length ? '#15803D' : '#B45309'
              }}>
                Đúng: {correctTotal}/{exercises.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Exercises List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredExercises.map((ex, index) => {
          const isAnswered = userAnswers[ex.id] !== undefined;
          const isResultShown = !!showResults[ex.id];
          const selectedIdx = userAnswers[ex.id];
          const isCorrect = selectedIdx === ex.correctIndex;

          const categoryColor = ex.category === '어휘' 
            ? { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' }
            : ex.category === '문법'
            ? { bg: '#FAF5FF', text: '#7E22CE', border: '#E9D5FF' }
            : { bg: '#ECFDF5', text: '#047857', border: '#A7F3D0' };

          return (
            <div
              key={ex.id}
              className="clay-card"
              style={{
                padding: '24px',
                borderLeft: isResultShown
                  ? (isCorrect ? '6px solid #22C55E' : '6px solid #EF4444')
                  : `6px solid ${categoryColor.text}`,
                background: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              {/* Category Pill & Speak Button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: categoryColor.bg,
                    color: categoryColor.text,
                    border: `1px solid ${categoryColor.border}`
                  }}>
                    {ex.categoryLabel || `Phần ${ex.category}`}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8' }}>
                    Câu {index + 1}
                  </span>
                </div>

                <button
                  onClick={() => speakText(ex.question)}
                  className="clay-btn clay-btn-secondary"
                  title="Phát âm câu hỏi"
                  style={{ padding: '6px 10px', fontSize: '0.8rem' }}
                >
                  <Volume2 size={16} /> Nghe
                </button>
              </div>

              {/* Passage Box if available (Dialogue or Reading context) */}
              {ex.passage && (
                <div style={{
                  background: '#F8FAFC',
                  border: '1px dashed #CBD5E1',
                  borderRadius: '14px',
                  padding: '16px',
                  marginBottom: '16px',
                  lineHeight: '1.7',
                  fontSize: '0.98rem',
                  color: '#1E293B'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 700, color: '#64748B', marginBottom: '8px' }}>
                    <MessageSquare size={15} /> Đoạn hội thoại / Ngữ cảnh:
                  </div>
                  <div style={{ whiteSpace: 'pre-line', fontWeight: 500, fontFamily: 'inherit' }}>
                    {ex.passage}
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div style={{
                fontSize: '1.08rem',
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: '18px',
                lineHeight: '1.6'
              }}>
                {ex.question}
              </div>

              {/* 4 Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                {ex.options.map((option, optIdx) => {
                  const isSelected = selectedIdx === optIdx;
                  const isRight = optIdx === ex.correctIndex;

                  let cardBg = '#FFFFFF';
                  let cardBorder = '2px solid #E2E8F0';
                  let textColor = '#1E293B';
                  let letterBg = '#F1F5F9';
                  let letterColor = '#475569';

                  if (isResultShown) {
                    if (isRight) {
                      cardBg = '#DCFCE7';
                      cardBorder = '2px solid #22C55E';
                      textColor = '#15803D';
                      letterBg = '#22C55E';
                      letterColor = '#FFFFFF';
                    } else if (isSelected) {
                      cardBg = '#FEE2E2';
                      cardBorder = '2px solid #EF4444';
                      textColor = '#991B1B';
                      letterBg = '#EF4444';
                      letterColor = '#FFFFFF';
                    }
                  } else if (isSelected) {
                    cardBg = '#EEF2FF';
                    cardBorder = '2px solid #4F46E5';
                    textColor = '#3730A3';
                    letterBg = '#4F46E5';
                    letterColor = '#FFFFFF';
                  }

                  const letter = String.fromCharCode(65 + optIdx);

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(ex.id, optIdx)}
                      disabled={isResultShown}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '14px',
                        background: cardBg,
                        border: cardBorder,
                        color: textColor,
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        cursor: isResultShown ? 'default' : 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? '0 4px 10px rgba(79, 70, 229, 0.15)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: letterBg,
                          color: letterColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          flexShrink: 0
                        }}>
                          {letter}
                        </span>
                        <span style={{ fontWeight: 600, fontSize: '0.96rem' }}>
                          {option}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(option);
                          }}
                          style={{
                            border: 'none',
                            background: 'transparent',
                            color: '#94A3B8',
                            cursor: 'pointer',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          title="Phát âm lựa chọn"
                        >
                          <Volume2 size={16} />
                        </button>
                        {isResultShown && isRight && <CheckCircle2 size={18} style={{ color: '#22C55E' }} />}
                        {isResultShown && isSelected && !isRight && <XCircle size={18} style={{ color: '#EF4444' }} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action / Explanation Box */}
              {!isResultShown ? (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => handleCheckSingle(ex)}
                    disabled={!isAnswered}
                    className={`clay-btn ${isAnswered ? 'clay-btn-primary' : ''}`}
                    style={{
                      padding: '8px 20px',
                      fontSize: '0.88rem',
                      opacity: isAnswered ? 1 : 0.6,
                      cursor: isAnswered ? 'pointer' : 'not-allowed'
                    }}
                  >
                    Kiểm tra đáp án
                  </button>
                </div>
              ) : (
                <div style={{
                  marginTop: '12px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: isCorrect ? '#F0FDF4' : '#FEF2F2',
                  border: isCorrect ? '1px solid #BBF7D0' : '1px solid #FECACA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.92rem', color: isCorrect ? '#166534' : '#991B1B' }}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={18} style={{ color: '#22C55E' }} /> Chính xác! (+20 điểm)
                      </>
                    ) : (
                      <>
                        <XCircle size={18} style={{ color: '#EF4444' }} /> Chưa chính xác! Đáp án đúng là{' '}
                        <strong>{String.fromCharCode(65 + ex.correctIndex)}. {ex.options[ex.correctIndex]}</strong>
                      </>
                    )}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.6' }}>
                    <strong>Giải thích chi tiết:</strong> {ex.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
