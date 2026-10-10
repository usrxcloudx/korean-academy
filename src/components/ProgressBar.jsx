import React from 'react';
import { Flame, Trophy, Award, CheckCircle2, Star, Sparkles, X } from 'lucide-react';

export function ProgressBar({ score, streakDays, masteredCount, totalWords, onTriggerCelebration, showCelebration, celebrationMessage, onCloseCelebration }) {
  const completionPercentage = totalWords > 0 ? Math.min(100, Math.round((masteredCount / totalWords) * 100)) : 0;

  return (
    <>
      <div className="clay-card" style={{ padding: '16px 24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          {/* Stats Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            {/* Score */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(217, 119, 6, 0.3)'
              }}>
                <Trophy size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>TỔNG ĐIỂM</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B' }}>{score} pts</div>
              </div>
            </div>

            {/* Streak */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(220, 38, 38, 0.3)'
              }}>
                <Flame size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>CHUỖI NGÀY HỌC</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B' }}>{streakDays} ngày</div>
              </div>
            </div>

            {/* Mastered Vocab */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(5, 150, 105, 0.3)'
              }}>
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>TỪ VỰNG ĐÃ THUỘC</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B' }}>{masteredCount} / {totalWords}</div>
              </div>
            </div>
          </div>

          {/* Cheer Button */}
          <button
            onClick={() => onTriggerCelebration('Bạn đang học rất chăm chỉ! Tiếp tục phát huy nhé! 🔥')}
            className="clay-btn clay-btn-rose"
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} /> Nhận động lực học tập
          </button>
        </div>

        {/* Progress Bar Track */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', fontSize: '0.85rem' }}>
            <span style={{ fontWeight: 700, color: '#475569' }}>Tiến độ bài học hiện tại</span>
            <span style={{ fontWeight: 800, color: '#4F46E5' }}>{completionPercentage}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '14px',
            borderRadius: '10px',
            background: '#E2E8F0',
            overflow: 'hidden',
            boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: `${completionPercentage}%`,
              height: '100%',
              borderRadius: '10px',
              background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 6px rgba(79, 70, 229, 0.4)'
            }} />
          </div>
        </div>
      </div>

      {/* Celebration Modal */}
      {showCelebration && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div className="clay-card" style={{
            maxWidth: '460px',
            width: '100%',
            padding: '32px 28px',
            textAlign: 'center',
            position: 'relative',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <button
              onClick={onCloseCelebration}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B'
              }}
            >
              <X size={18} />
            </button>

            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #F59E0B, #E11D48)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              boxShadow: '0 8px 24px rgba(225, 29, 72, 0.35)'
            }}>
              <Star size={40} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              축하합니다! (Chúc mừng!)
            </h3>

            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '24px', lineHeight: 1.5 }}>
              {celebrationMessage}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={onCloseCelebration}
                className="clay-btn clay-btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Tiếp tục học ngay! 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
