import React, { useState, useEffect } from 'react';
import { Volume2, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Mic, MicOff, MessageSquare, BookOpen, Check, HelpCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useKoreanSpeech } from '../hooks/useKoreanSpeech';

export function VocabularyFlashcard({ vocabList, onScoreAdd, onMasterWord, masteredWords = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('example'); // 'example' | 'dialogue' | 'exercise'
  const [userExerciseAnswer, setUserExerciseAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [speechResult, setSpeechResult] = useState(null);

  const { speakKorean, startListening, stopListening, isListening, transcript, calculateSimilarity } = useKoreanSpeech();

  const currentWord = vocabList[currentIndex] || vocabList[0];
  const isMastered = masteredWords.includes(currentWord?.id);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') {
        e.preventDefault();
        speakKorean(currentWord.hangul);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentWord]);

  // Handle Speech Evaluation
  useEffect(() => {
    if (!isListening && transcript && currentWord) {
      const score = calculateSimilarity(currentWord.hangul, transcript);
      if (score >= 70) {
        setSpeechResult({
          score,
          text: transcript,
          status: 'success',
          msg: 'Phát âm tuyệt vời! Bạn nói rất tự nhiên!'
        });
        if (onScoreAdd) onScoreAdd(10);
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      } else if (score >= 40) {
        setSpeechResult({
          score,
          text: transcript,
          status: 'warning',
          msg: 'Gần đúng rồi, hãy nghe lại âm mẫu và thử lại nhé!'
        });
      } else {
        setSpeechResult({
          score,
          text: transcript,
          status: 'error',
          msg: 'Chưa chính xác, hãy luyện thêm nhé!'
        });
      }
    }
  }, [isListening, transcript, currentWord, calculateSimilarity, onScoreAdd]);

  const handleNext = () => {
    if (currentIndex < vocabList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetCardState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetCardState();
    }
  };

  const resetCardState = () => {
    setUserExerciseAnswer(null);
    setIsAnswerSubmitted(false);
    setSpeechResult(null);
    setActiveTab('example');
  };

  const handleExerciseSelect = (index) => {
    if (isAnswerSubmitted) return;
    setUserExerciseAnswer(index);
    setIsAnswerSubmitted(true);
    if (index === currentWord.exercise.correctIndex) {
      if (onScoreAdd) onScoreAdd(15);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleToggleMaster = () => {
    if (onMasterWord && currentWord) {
      onMasterWord(currentWord.id);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    }
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontWeight: 800, color: '#1E293B', fontSize: '1.05rem' }}>
            Thẻ từ vựng {currentIndex + 1} / {vocabList.length}
          </span>
          {isMastered && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: '#DCFCE7',
              color: '#15803D',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 700
            }}>
              <Check size={14} /> Đã thuộc
            </span>
          )}
        </div>

        {/* Navigation Buttons (Tiến / Lùi) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="clay-btn clay-btn-secondary"
            style={{ padding: '8px 14px', opacity: currentIndex === 0 ? 0.4 : 1 }}
            title="Từ trước (Phím mũi tên trái)"
          >
            <ChevronLeft size={20} />
            <span style={{ fontSize: '0.88rem' }}>Trước</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === vocabList.length - 1}
            className="clay-btn clay-btn-secondary"
            style={{ padding: '8px 14px', opacity: currentIndex === vocabList.length - 1 ? 0.4 : 1 }}
            title="Từ kế tiếp (Phím mũi tên phải)"
          >
            <span style={{ fontSize: '0.88rem' }}>Kế tiếp</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Card */}
      <div className="clay-card" style={{ padding: '36px 28px', textAlign: 'center', position: 'relative' }}>
        {/* Word Type Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EEF2FF', color: '#4F46E5', padding: '4px 14px', borderRadius: '16px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '16px' }}>
          <Sparkles size={14} /> {currentWord.type}
          {currentWord.hanja && <span style={{ marginLeft: '4px', opacity: 0.8 }}>({currentWord.hanja})</span>}
        </div>

        {/* Korean Word Display */}
        <h2 className="hangul-font" style={{ fontSize: '3rem', fontWeight: 900, color: '#1E1B4B', letterSpacing: '-0.5px', marginBottom: '6px' }}>
          {currentWord.hangul}
        </h2>

        {/* Romaja Pronunciation */}
        <p style={{ fontSize: '1.05rem', color: '#64748B', fontStyle: 'italic', marginBottom: '16px' }}>
          [{currentWord.romaja}]
        </p>

        {/* Meaning in Vietnamese & English */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#E11D48', marginBottom: '4px' }}>
            🇻🇳 {currentWord.meaningVi}
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#2563EB' }}>
            🇺🇸 {currentWord.meaningEn}
          </div>
        </div>

        {/* Audio Listen & Mic Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <button
            onClick={() => speakKorean(currentWord.hangul)}
            className="clay-btn clay-btn-primary"
            style={{ padding: '12px 24px', fontSize: '1.05rem' }}
          >
            <Volume2 size={22} /> Phát âm chuẩn Seoul
          </button>

          <button
            onClick={() => {
              if (isListening) stopListening();
              else {
                setSpeechResult(null);
                startListening();
              }
            }}
            className={`clay-btn ${isListening ? 'clay-btn-rose recording-pulse' : 'clay-btn-secondary'}`}
            style={{ padding: '12px 20px' }}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            <span>{isListening ? 'Đang nghe...' : 'Kiểm tra phát âm'}</span>
          </button>

          <button
            onClick={handleToggleMaster}
            className={`clay-btn ${isMastered ? 'clay-btn-teal' : 'clay-btn-secondary'}`}
            style={{ padding: '12px 20px' }}
          >
            <Check size={18} />
            <span>{isMastered ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}</span>
          </button>
        </div>

        {/* Speech Evaluation Feedback */}
        {speechResult && (
          <div style={{
            maxWidth: '500px',
            margin: '0 auto 20px auto',
            padding: '12px 18px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textAlign: 'left',
            background: speechResult.status === 'success' ? '#F0FDF4' : speechResult.status === 'warning' ? '#FEFCE8' : '#FEF2F2',
            border: `1px solid ${speechResult.status === 'success' ? '#86EFAC' : speechResult.status === 'warning' ? '#FDE047' : '#FCA5A5'}`
          }}>
            {speechResult.status === 'success' ? <CheckCircle2 color="#16A34A" size={24} /> : <AlertCircle color="#DC2626" size={24} />}
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: speechResult.status === 'success' ? '#166534' : speechResult.status === 'warning' ? '#854D0E' : '#991B1B' }}>
                Độ chính xác: {speechResult.score}% — {speechResult.msg}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '2px' }}>
                Giọng bạn phát âm: <strong className="hangul-font">"{speechResult.text}"</strong>
              </div>
            </div>
          </div>
        )}

        {/* Tabs for Example Sentences, Dialogue, and Exercise */}
        <div style={{ borderTop: '2px dashed #E2E8F0', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('example')}
              className={`clay-btn ${activeTab === 'example' ? 'clay-btn-primary' : 'clay-btn-secondary'}`}
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <BookOpen size={16} /> Mẫu câu ví dụ
            </button>
            <button
              onClick={() => setActiveTab('dialogue')}
              className={`clay-btn ${activeTab === 'dialogue' ? 'clay-btn-primary' : 'clay-btn-secondary'}`}
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <MessageSquare size={16} /> Đoạn hội thoại thực tế
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`clay-btn ${activeTab === 'exercise' ? 'clay-btn-rose' : 'clay-btn-secondary'}`}
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <HelpCircle size={16} /> Bài tập luyện tập
            </button>
          </div>

          {/* TAB 1: EXAMPLE SENTENCES */}
          {activeTab === 'example' && currentWord.example && (
            <div style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '20px 24px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="hangul-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1B4B' }}>
                  {currentWord.example.ko}
                </span>
                <button
                  onClick={() => speakKorean(currentWord.example.ko)}
                  className="clay-btn clay-btn-secondary"
                  style={{ padding: '6px 10px', borderRadius: '12px' }}
                >
                  <Volume2 size={16} />
                </button>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#166534' }}>
                🇻🇳 {currentWord.example.vi}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#1E40AF', fontWeight: 500 }}>
                🇺🇸 {currentWord.example.en}
              </div>
            </div>
          )}

          {/* TAB 2: MINI DIALOGUE */}
          {activeTab === 'dialogue' && currentWord.dialogue && (
            <div style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '20px 24px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              {/* Speaker A */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontWeight: 800, color: '#4F46E5', minWidth: '60px' }}>
                  {currentWord.dialogue.speakerA}:
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="hangul-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0F172A' }}>
                      {currentWord.dialogue.lineA}
                    </span>
                    <button
                      onClick={() => speakKorean(currentWord.dialogue.lineA)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#4F46E5' }}
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#166534', marginTop: '2px' }}>
                    {currentWord.dialogue.lineAVi}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    {currentWord.dialogue.lineAEn}
                  </div>
                </div>
              </div>

              {/* Speaker B */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '10px' }}>
                <span style={{ fontWeight: 800, color: '#E11D48', minWidth: '60px' }}>
                  {currentWord.dialogue.speakerB}:
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="hangul-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0F172A' }}>
                      {currentWord.dialogue.lineB}
                    </span>
                    <button
                      onClick={() => speakKorean(currentWord.dialogue.lineB)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#E11D48' }}
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#166534', marginTop: '2px' }}>
                    {currentWord.dialogue.lineBVi}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    {currentWord.dialogue.lineBEn}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRACTICE EXERCISE FOR THIS WORD */}
          {activeTab === 'exercise' && currentWord.exercise && (
            <div style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '20px 24px',
              textAlign: 'left'
            }}>
              <div style={{ marginBottom: '14px' }}>
                <div className="hangul-font" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1E1B4B' }}>
                  {currentWord.exercise.questionKo}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '2px' }}>
                  {currentWord.exercise.questionVi}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                {currentWord.exercise.options.map((opt, oIdx) => {
                  const isSelected = userExerciseAnswer === oIdx;
                  const isCorrect = oIdx === currentWord.exercise.correctIndex;
                  let bg = '#FFFFFF';
                  let border = '2px solid #E2E8F0';
                  let color = '#1E293B';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      bg = '#DCFCE7';
                      border = '2px solid #22C55E';
                      color = '#15803D';
                    } else if (isSelected) {
                      bg = '#FEE2E2';
                      border = '2px solid #EF4444';
                      color = '#B91C1C';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleExerciseSelect(oIdx)}
                      disabled={isAnswerSubmitted}
                      className="hangul-font"
                      style={{
                        padding: '12px 16px',
                        borderRadius: '16px',
                        background: bg,
                        border,
                        color,
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: isAnswerSubmitted ? 'default' : 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isAnswerSubmitted && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: userExerciseAnswer === currentWord.exercise.correctIndex ? '#F0FDF4' : '#FEF2F2',
                  border: `1px solid ${userExerciseAnswer === currentWord.exercise.correctIndex ? '#86EFAC' : '#FCA5A5'}`
                }}>
                  <div style={{ fontWeight: 800, color: userExerciseAnswer === currentWord.exercise.correctIndex ? '#15803D' : '#B91C1C', fontSize: '0.95rem' }}>
                    {userExerciseAnswer === currentWord.exercise.correctIndex ? 'Chính xác! (+15 điểm)' : 'Chưa đúng, hãy ghi nhớ kiến thức nhé!'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '4px' }}>
                    {currentWord.exercise.explanation}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
