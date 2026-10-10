import React, { useState } from 'react';
import { Volume2, Eye, EyeOff, LayoutGrid, List, Play, Music, Sparkles } from 'lucide-react';
import { useKoreanSpeech } from '../hooks/useKoreanSpeech';

export function ParallelSubtitles({ unitData }) {
  const [showVi, setShowVi] = useState(true);
  const [showEn, setShowEn] = useState(true);
  const [viewMode, setViewMode] = useState('columns'); // 'columns' | 'cards'
  const [activeSentenceId, setActiveSentenceId] = useState(null);
  const { speakKorean } = useKoreanSpeech();

  const subtitles = unitData.parallelSubtitles || [];
  const audioTrack = unitData.audioTrack;

  const handleSpeak = (sub) => {
    setActiveSentenceId(sub.id);
    speakKorean(sub.ko, 0.85);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Audio Player Banner if audioTrack available */}
      {audioTrack && (
        <div className="clay-card" style={{
          padding: '18px 24px',
          background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '16px',
              background: '#4F46E5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)'
            }}>
              <Music size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#1E1B4B', fontSize: '1.05rem' }}>
                Bài Nghe Giáo Trình Tiếng Hàn Tổng Hợp
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                {audioTrack.trackName} — Tệp nguồn: <code>{audioTrack.fileName}</code>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <audio
              controls
              style={{ height: '40px', borderRadius: '20px', outline: 'none' }}
              src={audioTrack.r2Url}
            >
              Trình duyệt của bạn không hỗ trợ thẻ audio.
            </audio>
          </div>
        </div>
      )}

      {/* Control Toolbar */}
      <div className="clay-card" style={{
        padding: '14px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={18} color="#4F46E5" />
          <span style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.95rem' }}>
            Đối chiếu phụ đề 3 thứ tiếng ({subtitles.length} câu hội thoại)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Toggle Vietnamese */}
          <button
            onClick={() => setShowVi(prev => !prev)}
            className={`clay-btn ${showVi ? 'clay-btn-secondary' : ''}`}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              background: showVi ? '#EEF2FF' : '#F1F5F9',
              color: showVi ? '#4F46E5' : '#94A3B8'
            }}
          >
            {showVi ? <Eye size={15} /> : <EyeOff size={15} />}
            Tiếng Việt
          </button>

          {/* Toggle English */}
          <button
            onClick={() => setShowEn(prev => !prev)}
            className={`clay-btn ${showEn ? 'clay-btn-secondary' : ''}`}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              background: showEn ? '#EEF2FF' : '#F1F5F9',
              color: showEn ? '#4F46E5' : '#94A3B8'
            }}
          >
            {showEn ? <Eye size={15} /> : <EyeOff size={15} />}
            Tiếng Anh
          </button>

          {/* Toggle View mode */}
          <button
            onClick={() => setViewMode(prev => prev === 'columns' ? 'cards' : 'columns')}
            className="clay-btn clay-btn-secondary"
            style={{ padding: '6px 14px', fontSize: '0.82rem' }}
          >
            {viewMode === 'columns' ? <List size={15} /> : <LayoutGrid size={15} />}
            {viewMode === 'columns' ? 'Dạng 3 cột' : 'Dạng thẻ'}
          </button>
        </div>
      </div>

      {/* Subtitles Container */}
      {viewMode === 'columns' ? (
        <div className="clay-card" style={{ padding: '8px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
            <thead>
              <tr style={{ color: '#64748B', fontSize: '0.82rem', fontWeight: 700, textAlign: 'left' }}>
                <th style={{ padding: '10px 16px', width: '60px' }}>Phát âm</th>
                <th style={{ padding: '10px 16px', width: '140px' }}>Nhân vật</th>
                <th style={{ padding: '10px 16px' }}>Tiếng Hàn (한국어)</th>
                {showVi && <th style={{ padding: '10px 16px' }}>Tiếng Việt</th>}
                {showEn && <th style={{ padding: '10px 16px' }}>English</th>}
              </tr>
            </thead>
            <tbody>
              {subtitles.map((sub, idx) => {
                const isActive = activeSentenceId === sub.id;
                return (
                  <tr
                    key={sub.id}
                    style={{
                      background: isActive ? '#EEF2FF' : idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                      borderRadius: '16px',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <td style={{ padding: '12px 16px', borderRadius: '16px 0 0 16px' }}>
                      <button
                        onClick={() => handleSpeak(sub)}
                        className="clay-btn clay-btn-secondary"
                        style={{ padding: '8px', borderRadius: '50%' }}
                        title="Nghe câu này"
                      >
                        <Volume2 size={16} color="#4F46E5" />
                      </button>
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#334155', fontSize: '0.88rem' }}>
                      {sub.speaker}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <div className="hangul-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#1E1B4B' }}>
                        {sub.ko}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontStyle: 'italic', marginTop: '2px' }}>
                        [{sub.romaja}]
                      </div>
                    </td>
                    {showVi && (
                      <td style={{ padding: '12px 16px', color: '#0F172A', fontSize: '0.92rem', fontWeight: 500 }}>
                        {sub.vi}
                      </td>
                    )}
                    {showEn && (
                      <td style={{ padding: '12px 16px', color: '#475569', fontSize: '0.9rem', borderRadius: (!showVi ? '0 16px 16px 0' : '0 16px 16px 0') }}>
                        {sub.en}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        /* Card View */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
          {subtitles.map((sub) => (
            <div
              key={sub.id}
              className="clay-card"
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
                borderLeft: '4px solid #4F46E5'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4F46E5' }}>{sub.speaker}</span>
                  <button
                    onClick={() => handleSpeak(sub)}
                    className="clay-btn clay-btn-secondary"
                    style={{ padding: '6px 10px', borderRadius: '12px' }}
                  >
                    <Volume2 size={15} />
                  </button>
                </div>
                <p className="hangul-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  {sub.ko}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', fontStyle: 'italic', marginBottom: '10px' }}>
                  {sub.romaja}
                </p>
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {showVi && (
                  <div style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600 }}>
                    🇻🇳 {sub.vi}
                  </div>
                )}
                {showEn && (
                  <div style={{ fontSize: '0.86rem', color: '#1E40AF', fontWeight: 500 }}>
                    🇺🇸 {sub.en}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
