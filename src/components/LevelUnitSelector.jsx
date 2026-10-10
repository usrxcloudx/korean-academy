import React from 'react';
import { LEVELS, getUnitsByLevel } from '../data/curriculumData';
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export function LevelUnitSelector({ activeLevelId, activeUnitId, onSelectUnit, onSelectLevel }) {
  const units = getUnitsByLevel(activeLevelId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
      {/* Level Buttons Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        overflowX: 'auto',
        padding: '6px 4px',
        scrollbarWidth: 'none'
      }}>
        {LEVELS.map(level => {
          const isActive = level.id === activeLevelId;
          return (
            <button
              key={level.id}
              onClick={() => onSelectLevel(level.id)}
              className="clay-btn"
              style={{
                background: isActive ? `linear-gradient(135deg, ${level.color}, #6366F1)` : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#475569',
                boxShadow: isActive ? '0 4px 14px rgba(79, 70, 229, 0.35)' : '2px 4px 10px rgba(0,0,0,0.05)',
                padding: '10px 18px',
                borderRadius: '16px',
                fontSize: '0.9rem',
                fontWeight: 800,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{level.badge}</span>
              <span>{level.nameVi}</span>
              <span className="hangul-font" style={{ opacity: 0.75, fontSize: '0.85rem' }}>({level.nameKo})</span>
            </button>
          );
        })}
      </div>

      {/* Units Selector in Current Level */}
      <div className="clay-card" style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.9)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.85rem', color: '#64748B', fontWeight: 700 }}>
          <Layers size={16} />
          <span>DANH SÁCH BÀI HỌC GIÁO TRÌNH:</span>
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {units.map((unit) => {
            const isCurrent = unit.id === activeUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => onSelectUnit(unit.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: isCurrent ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  background: isCurrent ? '#EEF2FF' : '#FFFFFF',
                  color: isCurrent ? '#4F46E5' : '#1E293B',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span className="hangul-font" style={{ fontSize: '1rem', color: isCurrent ? '#4F46E5' : '#0F172A' }}>
                  {unit.titleKo}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {unit.titleVi}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
