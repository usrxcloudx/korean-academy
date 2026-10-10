import React, { useState } from 'react';
import { Search, ExternalLink, Volume2, Mic, MicOff, BookOpen, Globe2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useKoreanSpeech } from '../hooks/useKoreanSpeech';
import confetti from 'canvas-confetti';

// Built-in quick lexicon for instant offline lookup
const QUICK_LEXICON = [
  { ko: '안녕하세요', vi: 'Xin chào (lời chào kính ngữ)', en: 'Hello / Good day', hanja: '安寧' },
  { ko: '감사합니다', vi: 'Cảm ơn (trang trọng)', en: 'Thank you', hanja: '感謝' },
  { ko: '한국', vi: 'Hàn Quốc', en: 'Korea', hanja: '韓國' },
  { ko: '베트남', vi: 'Việt Nam', en: 'Vietnam', hanja: '越南' },
  { ko: '선생님', vi: 'Thầy / Cô giáo', en: 'Teacher', hanja: '先生님' },
  { ko: '학생', vi: 'Học sinh, sinh viên', en: 'Student', hanja: '學生' },
  { ko: '회사원', vi: 'Nhân viên văn phòng', en: 'Office worker', hanja: '會社員' },
  { ko: '의사', vi: 'Bác sĩ', en: 'Doctor', hanja: '醫師' },
  { ko: '학교', vi: 'Trường học', en: 'School', hanja: '學校' },
  { ko: '도서관', vi: 'Thư viện', en: 'Library', hanja: '圖書館' },
  { ko: '친구', vi: 'Bạn bè', en: 'Friend', hanja: '親舊' },
  { ko: '책', vi: 'Quyển sách', en: 'Book', hanja: '冊' },
  { ko: '물', vi: 'Nước uống', en: 'Water', hanja: '' },
  { ko: '밥', vi: 'Cơm / Bữa ăn', en: 'Rice / Meal', hanja: '' },
  { ko: '사랑', vi: 'Tình yêu', en: 'Love', hanja: '' },
  { ko: '행복', vi: 'Hạnh phúc', en: 'Happiness', hanja: '幸福' }
];

export function DualLookupBar({ onScoreAdd }) {
  const [query, setQuery] = useState('');
  const [instantResult, setInstantResult] = useState(null);
  const [speechResult, setSpeechResult] = useState(null);
  const { speakKorean, startListening, stopListening, isListening, transcript, calculateSimilarity } = useKoreanSpeech();

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setSpeechResult(null);

    if (val.trim().length > 0) {
      const match = QUICK_LEXICON.find(item => 
        item.ko.includes(val.trim()) || 
        item.vi.toLowerCase().includes(val.trim().toLowerCase())
      );
      setInstantResult(match || null);
    } else {
      setInstantResult(null);
    }
  };

  const handleOpenNaver = () => {
    if (!query.trim()) return;
    const url = `https://vietnamese.dict.naver.com/#/search?query=${encodeURIComponent(query.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenGoogle = () => {
    if (!query.trim()) return;
    const url = `https://translate.google.com/?sl=ko&tl=vi&text=${encodeURIComponent(query.trim())}&op=translate`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMicCheck = () => {
    if (isListening) {
      stopListening();
    } else {
      setSpeechResult(null);
      startListening();
    }
  };

  // React to transcript when user finishes speaking
  React.useEffect(() => {
    if (!isListening && transcript && query.trim()) {
      const score = calculateSimilarity(query.trim(), transcript);
      if (score >= 75) {
        setSpeechResult({
          score,
          spoken: transcript,
          status: 'success',
          msg: 'Phát âm rất chuẩn xác! Tuyệt vời! 🌟'
        });
        if (onScoreAdd) onScoreAdd(10);
        confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
      } else if (score >= 45) {
        setSpeechResult({
          score,
          spoken: transcript,
          status: 'warning',
          msg: 'Khá tốt! Hãy chú ý âm đuôi và phát âm lại nhé.'
        });
      } else {
        setSpeechResult({
          score,
          spoken: transcript,
          status: 'error',
          msg: 'Chưa chính xác. Hãy bấm biểu tượng loa để nghe lại mẫu.'
        });
      }
    }
  }, [isListening, transcript, query, calculateSimilarity, onScoreAdd]);

  return (
    <div className="clay-card" style={{ padding: '16px 20px', marginBottom: '24px', background: 'linear-gradient(135deg, #FFFFFF, #F8FAFC)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4F46E5', fontWeight: 700, fontSize: '0.92rem' }}>
          <Sparkles size={18} />
          <span>Thanh Tra Cứu Kép & Luyện Phát Âm Trực Tiếp</span>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
          Kết nối trực tiếp <strong>Naver Dict</strong> &amp; <strong>Google Translate</strong>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Search input */}
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Nhập từ tiếng Hàn hoặc tiếng Việt (VD: 안녕하세요, 의사, bạn bè)..."
            style={{
              width: '100%',
              padding: '11px 16px 11px 42px',
              borderRadius: '16px',
              border: '2px solid #E2E8F0',
              outline: 'none',
              fontSize: '0.95rem',
              fontFamily: 'inherit',
              background: '#FFFFFF',
              boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.03)'
            }}
          />
        </div>

        {/* TTS button */}
        {query.trim() && (
          <button
            onClick={() => speakKorean(query.trim())}
            className="clay-btn clay-btn-secondary"
            title="Nghe phát âm chuẩn Seoul"
            style={{ padding: '10px 14px' }}
          >
            <Volume2 size={18} />
          </button>
        )}

        {/* Mic Speech Check */}
        <button
          onClick={handleMicCheck}
          disabled={!query.trim()}
          className={`clay-btn ${isListening ? 'clay-btn-rose recording-pulse' : 'clay-btn-secondary'}`}
          title={isListening ? 'Đang lắng nghe...' : 'Bấm mic để kiểm tra phát âm của bạn'}
          style={{ padding: '10px 16px', opacity: !query.trim() ? 0.6 : 1 }}
        >
          {isListening ? <MicOff size={18} /> : <Mic size={18} />}
          <span style={{ fontSize: '0.85rem' }}>{isListening ? 'Đang nghe...' : 'Luyện nói'}</span>
        </button>

        {/* Naver Dictionary Button */}
        <button
          onClick={handleOpenNaver}
          disabled={!query.trim()}
          className="clay-btn clay-btn-teal"
          title="Mở từ điển Naver Hàn - Việt"
          style={{ padding: '10px 16px', opacity: !query.trim() ? 0.6 : 1 }}
        >
          <BookOpen size={17} />
          <span style={{ fontSize: '0.85rem' }}>Naver Dict</span>
          <ExternalLink size={14} style={{ marginLeft: '2px', opacity: 0.8 }} />
        </button>

        {/* Google Translate Button */}
        <button
          onClick={handleOpenGoogle}
          disabled={!query.trim()}
          className="clay-btn clay-btn-primary"
          title="Tra cứu với Google Dịch"
          style={{ padding: '10px 16px', opacity: !query.trim() ? 0.6 : 1 }}
        >
          <Globe2 size={17} />
          <span style={{ fontSize: '0.85rem' }}>Google</span>
          <ExternalLink size={14} style={{ marginLeft: '2px', opacity: 0.8 }} />
        </button>
      </div>

      {/* Instant Result Box */}
      {instantResult && (
        <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '16px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="hangul-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#4F46E5' }}>{instantResult.ko}</span>
            {instantResult.hanja && <span style={{ fontSize: '0.85rem', color: '#64748B', background: '#E2E8F0', padding: '2px 8px', borderRadius: '6px' }}>{instantResult.hanja}</span>}
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B' }}>{instantResult.vi}</span>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>({instantResult.en})</span>
          </div>
          <button
            onClick={() => speakKorean(instantResult.ko)}
            className="clay-btn clay-btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
          >
            <Volume2 size={16} /> Nghe phát âm
          </button>
        </div>
      )}

      {/* Speech Check Feedback Result */}
      {speechResult && (
        <div style={{
          marginTop: '12px',
          padding: '12px 16px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: speechResult.status === 'success' ? '#F0FDF4' : speechResult.status === 'warning' ? '#FEFCE8' : '#FEF2F2',
          border: `1px solid ${speechResult.status === 'success' ? '#86EFAC' : speechResult.status === 'warning' ? '#FDE047' : '#FCA5A5'}`
        }}>
          {speechResult.status === 'success' ? <CheckCircle2 color="#16A34A" size={22} /> : <AlertCircle color="#DC2626" size={22} />}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: speechResult.status === 'success' ? '#166534' : speechResult.status === 'warning' ? '#854D0E' : '#991B1B' }}>
              Điểm phát âm: {speechResult.score}% — {speechResult.msg}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '2px' }}>
              Bạn vừa đọc: <strong className="hangul-font">"{speechResult.spoken}"</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
