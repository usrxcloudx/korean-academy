import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  BookOpen, 
  Headphones, 
  HelpCircle, 
  GraduationCap, 
  Languages, 
  Globe2, 
  ExternalLink,
  PenTool,
  UserCheck,
  LogOut,
  ShieldCheck
} from 'lucide-react';

import { UNITS, LEVELS, getUnitById, getLevelById, getUnitsByLevel } from './data/curriculumData';
import { useUserProgress } from './hooks/useUserProgress';
import { useCloudflareAccessUser } from './hooks/useCloudflareAccessUser';
import { ProgressBar } from './components/ProgressBar';
import { DualLookupBar } from './components/DualLookupBar';
import { LevelUnitSelector } from './components/LevelUnitSelector';
import { VocabularyFlashcard } from './components/VocabularyFlashcard';
import { ParallelSubtitles } from './components/ParallelSubtitles';
import { GrammarSection } from './components/GrammarSection';
import { QuizSection } from './components/QuizSection';
import { WorkbookSection } from './components/WorkbookSection';

export function App() {
  const {
    score,
    streakDays,
    masteredWords,
    completedQuizzes,
    activeLevelId,
    activeUnitId,
    addScore,
    markWordMastered,
    markQuizCompleted,
    setActiveLevelAndUnit,
    showCelebration,
    celebrationMessage,
    triggerCelebration,
    closeCelebration
  } = useUserProgress();

  const { user: accessUser, logoutUrl } = useCloudflareAccessUser();

  const [activeTab, setActiveTab] = useState('flashcard'); // 'flashcard' | 'subtitles' | 'grammar' | 'quiz'

  const currentUnit = getUnitById(activeUnitId);
  const currentLevel = getLevelById(activeLevelId);

  const handleSelectLevel = (levelId) => {
    const units = getUnitsByLevel(levelId);
    const firstUnitId = units[0]?.id || 'sc1_u1';
    setActiveLevelAndUnit(levelId, firstUnitId);
  };

  const handleSelectUnit = (unitId) => {
    setActiveLevelAndUnit(activeLevelId, unitId);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation Bar */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '12px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {/* Logo & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #4F46E5, #E11D48)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}>
              <GraduationCap size={26} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1E1B4B', letterSpacing: '-0.5px' }}>
                  Korean Academy
                </h1>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '12px',
                  background: '#EEF2FF',
                  color: '#4F46E5'
                }}>
                  Hàn - Việt - Anh
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Giáo trình Tiếng Hàn Tổng hợp (Sơ cấp 1 → Cao cấp 6)
              </div>
            </div>
          </div>

          {/* Quick Links & Domain & SSO Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {accessUser ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '12px',
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                color: '#065F46',
                fontSize: '0.82rem',
                fontWeight: 600
              }}>
                <ShieldCheck size={16} color="#059669" />
                <span>{accessUser.email}</span>
                <a
                  href={logoutUrl}
                  title="Đăng xuất SSO"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#991B1B',
                    marginLeft: '4px',
                    textDecoration: 'none'
                  }}
                >
                  <LogOut size={14} />
                </a>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                borderRadius: '12px',
                background: '#EEF2FF',
                border: '1px solid #C7D2FE',
                color: '#3730A3',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                <UserCheck size={14} />
                <span>Cloudflare SSO</span>
              </div>
            )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '14px',
              background: '#F1F5F9',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#334155'
            }}>
              <Globe2 size={15} color="#4F46E5" />
              <span>korean-academy.aixfactory.io.vn</span>
            </div>

            <a
              href="https://github.com/usrxcloudx/korean-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub Repo</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '24px 20px', flex: 1 }}>
        {/* Progress Bar & Badges */}
        <ProgressBar
          score={score}
          streakDays={streakDays}
          masteredCount={masteredWords.length}
          totalWords={currentUnit.vocabulary.length}
          onTriggerCelebration={triggerCelebration}
          showCelebration={showCelebration}
          celebrationMessage={celebrationMessage}
          onCloseCelebration={closeCelebration}
        />

        {/* Dual Lookup Bar (Naver + Google + Quick Lexicon + Speech Check) */}
        <DualLookupBar onScoreAdd={addScore} />

        {/* Level and Unit Selector */}
        <LevelUnitSelector
          activeLevelId={activeLevelId}
          activeUnitId={activeUnitId}
          onSelectLevel={handleSelectLevel}
          onSelectUnit={handleSelectUnit}
        />

        {/* Unit Header Banner */}
        <div className="clay-card" style={{
          padding: '24px 28px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #EEF2FF 100%)',
          borderLeft: `6px solid ${currentLevel.color}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  background: currentLevel.color,
                  color: '#FFFFFF'
                }}>
                  {currentLevel.nameVi} • Bài {currentUnit.unitNumber}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                  {currentUnit.titleEn}
                </span>
              </div>
              <h2 className="hangul-font" style={{ fontSize: '1.9rem', fontWeight: 900, color: '#1E1B4B' }}>
                {currentUnit.titleKo} ({currentUnit.titleVi})
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '6px', maxWidth: '750px' }}>
                {currentUnit.description}
              </p>
            </div>

            {/* Navigation Tabs for Unit */}
            <div style={{
              display: 'flex',
              background: '#FFFFFF',
              padding: '6px',
              borderRadius: '20px',
              boxShadow: 'inset 1px 1px 4px rgba(0,0,0,0.06)',
              gap: '4px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setActiveTab('flashcard')}
                className={`clay-btn ${activeTab === 'flashcard' ? 'clay-btn-primary' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  background: activeTab === 'flashcard' ? undefined : 'transparent',
                  color: activeTab === 'flashcard' ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 'flashcard' ? undefined : 'none'
                }}
              >
                <Layers size={16} /> Flashcard ({currentUnit.vocabulary.length})
              </button>

              <button
                onClick={() => setActiveTab('subtitles')}
                className={`clay-btn ${activeTab === 'subtitles' ? 'clay-btn-primary' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  background: activeTab === 'subtitles' ? undefined : 'transparent',
                  color: activeTab === 'subtitles' ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 'subtitles' ? undefined : 'none'
                }}
              >
                <Headphones size={16} /> Phụ đề 3 thứ tiếng
              </button>

              <button
                onClick={() => setActiveTab('grammar')}
                className={`clay-btn ${activeTab === 'grammar' ? 'clay-btn-primary' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  background: activeTab === 'grammar' ? undefined : 'transparent',
                  color: activeTab === 'grammar' ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 'grammar' ? undefined : 'none'
                }}
              >
                <BookOpen size={16} /> Ngữ pháp
              </button>

              <button
                onClick={() => setActiveTab('workbook')}
                className={`clay-btn ${activeTab === 'workbook' ? 'clay-btn-primary' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  background: activeTab === 'workbook' ? undefined : 'transparent',
                  color: activeTab === 'workbook' ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 'workbook' ? undefined : 'none'
                }}
              >
                <PenTool size={16} /> Sách bài tập ({(currentUnit.workbook || []).length})
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`clay-btn ${activeTab === 'quiz' ? 'clay-btn-primary' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '0.88rem',
                  background: activeTab === 'quiz' ? undefined : 'transparent',
                  color: activeTab === 'quiz' ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 'quiz' ? undefined : 'none'
                }}
              >
                <HelpCircle size={16} /> Trắc nghiệm ({currentUnit.quizzes.length})
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Tab Views */}
        <div>
          {activeTab === 'flashcard' && (
            <VocabularyFlashcard
              vocabList={currentUnit.vocabulary}
              onScoreAdd={addScore}
              onMasterWord={markWordMastered}
              masteredWords={masteredWords}
            />
          )}

          {activeTab === 'subtitles' && (
            <ParallelSubtitles unitData={currentUnit} />
          )}

          {activeTab === 'grammar' && (
            <GrammarSection grammarPoints={currentUnit.grammarPoints} />
          )}

          {activeTab === 'workbook' && (
            <WorkbookSection
              unit={currentUnit}
              onScoreAdd={addScore}
              onCompleteSection={markQuizCompleted}
            />
          )}

          {activeTab === 'quiz' && (
            <QuizSection
              quizzes={currentUnit.quizzes}
              onScoreAdd={addScore}
              onCompleteQuiz={markQuizCompleted}
              completed={completedQuizzes.includes(currentUnit.id)}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        padding: '24px',
        textAlign: 'center',
        color: '#64748B',
        fontSize: '0.88rem',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <strong>Korean Academy</strong> — Nền tảng học Tiếng Hàn tương tác 3 ngôn ngữ (Hàn - Việt - Anh).
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Giáo trình Tiếng Hàn Tổng hợp</span>
            <span>•</span>
            <span>Cloudflare R2 &amp; Pages</span>
            <span>•</span>
            <a href="https://github.com/usrxcloudx/korean-academy" target="_blank" rel="noopener noreferrer" style={{ color: '#4F46E5', textDecoration: 'none', fontWeight: 600 }}>
              GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
