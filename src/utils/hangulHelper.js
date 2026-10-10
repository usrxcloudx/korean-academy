// Korean Hangul Jamo Decomposition and Similarity Utilities

const CHOSUNG = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ',
  'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const JUNGSUNG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
  'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

const JONGSUNG = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ',
  'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ',
  'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

/**
 * Decompose a Hangul syllable into its constituent Jamo
 */
export function decomposeHangul(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // 0xAC00 (44032) to 0xD7A3 (55203)
    if (code >= 0xAC00 && code <= 0xD7A3) {
      const offset = code - 0xAC00;
      const cho = Math.floor(offset / 588);
      const jung = Math.floor((offset % 588) / 28);
      const jong = offset % 28;
      result += CHOSUNG[cho] + JUNGSUNG[jung] + (JONGSUNG[jong] || '');
    } else {
      result += str[i];
    }
  }
  return result;
}

/**
 * Levenshtein distance between two strings
 */
export function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

/**
 * Calculate phonetic similarity (0 to 100) between target Hangul and spoken Hangul
 */
export function calculateHangulSimilarity(target, spoken) {
  const cleanTarget = target.replace(/[^가-힣a-zA-Z0-9]/g, '').toLowerCase();
  const cleanSpoken = spoken.replace(/[^가-힣a-zA-Z0-9]/g, '').toLowerCase();

  if (cleanTarget === cleanSpoken) return 100;
  if (!cleanSpoken || !cleanTarget) return 0;

  const decTarget = decomposeHangul(cleanTarget);
  const decSpoken = decomposeHangul(cleanSpoken);

  const maxLen = Math.max(decTarget.length, decSpoken.length);
  if (maxLen === 0) return 100;

  const dist = levenshteinDistance(decTarget, decSpoken);
  const score = Math.max(0, Math.round(((maxLen - dist) / maxLen) * 100));
  return score;
}
