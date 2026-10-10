import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'korean_academy_progress_v1';

export function useUserProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return {
      score: 120,
      streakDays: 3,
      masteredWords: [],
      completedQuizzes: [],
      activeLevelId: 'so_cap_1',
      activeUnitId: 'sc1_u1'
    };
  });

  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (_) {}
  }, [progress]);

  const addScore = (points, reason = '') => {
    setProgress(prev => {
      const nextScore = prev.score + points;
      // Trigger milestone celebration every 100 points
      if (Math.floor(nextScore / 100) > Math.floor(prev.score / 100)) {
        triggerCelebration(`Chúc mừng! Bạn đã vượt mốc ${Math.floor(nextScore / 100) * 100} điểm! 🎉`);
      }
      return { ...prev, score: nextScore };
    });
  };

  const markWordMastered = (wordId) => {
    setProgress(prev => {
      if (prev.masteredWords.includes(wordId)) return prev;
      return {
        ...prev,
        score: prev.score + 15,
        masteredWords: [...prev.masteredWords, wordId]
      };
    });
  };

  const markQuizCompleted = (quizId) => {
    setProgress(prev => {
      if (prev.completedQuizzes.includes(quizId)) return prev;
      return {
        ...prev,
        score: prev.score + 25,
        completedQuizzes: [...prev.completedQuizzes, quizId]
      };
    });
  };

  const setActiveLevelAndUnit = (levelId, unitId) => {
    setProgress(prev => ({
      ...prev,
      activeLevelId: levelId,
      activeUnitId: unitId
    }));
  };

  const triggerCelebration = (msg) => {
    setCelebrationMessage(msg || 'Xuất sắc! Bạn vừa hoàn thành thử thách! 🌟');
    setShowCelebration(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const closeCelebration = () => {
    setShowCelebration(false);
  };

  return {
    score: progress.score,
    streakDays: progress.streakDays,
    masteredWords: progress.masteredWords,
    completedQuizzes: progress.completedQuizzes,
    activeLevelId: progress.activeLevelId,
    activeUnitId: progress.activeUnitId,
    addScore,
    markWordMastered,
    markQuizCompleted,
    setActiveLevelAndUnit,
    showCelebration,
    celebrationMessage,
    triggerCelebration,
    closeCelebration
  };
}
