import React from 'react';
import { BookOpen, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useKoreanSpeech } from '../hooks/useKoreanSpeech';

export function GrammarSection({ grammarPoints = [] }) {
  const { speakKorean } = useKoreanSpeech();

  if (!grammarPoints.length) {
    return (
      <div className="clay-card" style={{ padding: '24px', textAlign: 'center', color: '#64748B' }}>
        Chưa có dữ liệu ngữ pháp cho bài này.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #4F46E5, #6366F1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF'
        }}>
          <BookOpen size={20} />
        </div>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1E1B4B' }}>
          Ngữ pháp trọng tâm (Trilingual Grammar Focus)
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
        {grammarPoints.map((item, idx) => (
          <div
            key={idx}
            className="clay-card"
            style={{
              padding: '24px',
              borderTop: '5px solid #4F46E5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div>
              {/* Formula & Name */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                <span className="hangul-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1B4B' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.78rem', background: '#EEF2FF', color: '#4F46E5', padding: '4px 10px', borderRadius: '10px', fontWeight: 700 }}>
                  Công thức
                </span>
              </div>

              <div style={{
                background: '#F8FAFC',
                padding: '8px 12px',
                borderRadius: '12px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                color: '#334155',
                marginBottom: '14px',
                borderLeft: '3px solid #6366F1'
              }}>
                {item.formula}
              </div>

              {/* Explanations in VN & EN */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.5 }}>
                  <strong style={{ color: '#166534' }}>🇻🇳 Giải thích: </strong>
                  {item.explanationVi}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                  <strong style={{ color: '#1E40AF' }}>🇺🇸 English: </strong>
                  {item.explanationEn}
                </div>
              </div>
            </div>

            {/* Examples */}
            {item.examples && item.examples.length > 0 && (
              <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '12px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Ví dụ thực tế:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {item.examples.map((ex, exIdx) => (
                    <div key={exIdx} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className="hangul-font" style={{ fontWeight: 700, color: '#1E1B4B', fontSize: '0.98rem' }}>
                          {ex.ko}
                        </span>
                        <button
                          onClick={() => speakKorean(ex.ko)}
                          style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#4F46E5', padding: '4px' }}
                          title="Nghe ví dụ này"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#166534', marginTop: '2px' }}>{ex.vi}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{ex.en}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
