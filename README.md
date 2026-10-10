# 🇰🇷 Korean Academy — Nền tảng Học Tiếng Hàn Tương Tác Tam Ngữ (Hàn - Việt - Anh)

Ứng dụng web học tiếng Hàn hiện đại, chuẩn hoá theo bộ giáo trình danh tiếng **"Giáo trình Tiếng Hàn Tổng hợp"** (Sơ cấp 1, Sơ cấp 2, Trung cấp 3, Trung cấp 4, Cao cấp 5, Cao cấp 6).

🌐 **Domain chính thức:** [https://korean-academy.aixfactory.io.vn](https://korean-academy.aixfactory.io.vn)  
📦 **Repository:** [https://github.com/usrxcloudx/korean-academy](https://github.com/usrxcloudx/korean-academy)

---

## 🌟 Tính Năng Nổi Bật

### 1. Phụ Đề Song Song 3 Ngôn Ngữ (Trilingual Subtitles)
- Hiển thị trực tiếp câu gốc **Tiếng Hàn**, phiên âm **Romaja**, nghĩa **Tiếng Việt** và **Tiếng Anh**.
- Chế độ hiển thị linh hoạt (Dạng bảng 3 cột hoặc Thẻ thẻ thông minh).
- Tích hợp bật/tắt hiển thị từng ngôn ngữ để kiểm tra khả năng dịch và phản xạ.
- Nút nghe phát âm từng câu hoặc nghe toàn bộ audio bài khóa chuẩn Seoul.

### 2. Thẻ Từ Vựng Thông Minh (Vocabulary Flashcards)
- Mặt chữ Hangeul to rõ, phiên âm, từ loại, chữ Hán tự (Hanja) tương ứng.
- **Nút phát âm tức thì** tích hợp Web Speech API (tự động chọn giọng đọc tự nhiên chuẩn `ko-KR`).
- **Mẫu câu ví dụ & Đoạn hội thoại thực tế** cho từng từ vựng cụ thể kèm bản dịch song song.
- **Bài tập tương tác tức thì** trên từng thẻ từ để củng cố ngay kiến thức vừa học.
- **Phím tắt điều hướng:** Mũi tên trái/phải để chuyển từ, phím Space để phát âm.
- Đánh dấu từ đã thuộc để lưu vào bộ nhớ tiến độ học tập cá nhân.

### 3. Thanh Tra Cứu Kép (Dual Lookup Bar) & Luyện Phát Âm Trực Tiếp
- **Từ điển Naver:** Bấm nút mở ngay trang tra từ điển Naver Hàn - Việt chính thức.
- **Google Dịch:** Chuyển ngữ nhanh chóng sang Google Translate.
- **Từ điển nhanh nội tuyến (Offline Quick Lexicon):** Tra cứu từ vựng phổ biến ngay khi đang gõ.
- **Luyện nói bằng Micro (Speech Recognition):** Phân tích và chấm điểm độ chính xác phát âm tiếng Hàn theo giải thuật phân rã ký tự Jamo (초성, 중성, 종성) và Levenshtein distance.

### 4. Hệ Thống Tiến Độ Học Tập & Động Lực (Progress & Gamification)
- Thanh hiển thị **Tổng điểm tích luỹ**, **Chuỗi ngày học liên tục (Streak)** và **Số từ đã thuộc**.
- Hiệu ứng pháo hoa chúc mừng (**Canvas Confetti**) và thông điệp khích lệ khi đạt các mốc điểm quan trọng.

### 5. Hạ Tầng Âm Thanh & Đám Mây Hiện Đại
- Tích hợp lưu trữ Cloudflare R2 bucket tốc độ cao cho các file MP3/WMA nghe bài giảng.
- Triển khai siêu tốc trên **Cloudflare Pages** kết hợp tên miền tùy chỉnh SSL tự động.

---

## 🚀 Hướng Dẫn Cài Đặt & Phát Triển Local

```bash
# Clone repository
git clone git@github.com:usrxcloudx/korean-academy.git
cd korean-academy

# Cài đặt dependencies (yêu cầu Node >= 18)
pnpm install

# Khởi chạy server phát triển
pnpm run dev

# Build sản phẩm hoàn chỉnh
pnpm run build
```

---

## 📂 Cấu Trúc Dự Án

```
korean-academy/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── DualLookupBar.jsx          # Thanh tra cứu kép Naver/Google & Mic
│   │   ├── LevelUnitSelector.jsx      # Bộ chọn cấp độ & bài học
│   │   ├── ParallelSubtitles.jsx      # Phụ đề song song 3 ngôn ngữ & Audio
│   │   ├── VocabularyFlashcard.jsx    # Thẻ học từ vựng tương tác
│   │   ├── GrammarSection.jsx         # Ngữ pháp trọng tâm
│   │   ├── QuizSection.jsx            # Bài kiểm tra trắc nghiệm
│   │   └── ProgressBar.jsx            # Tiến độ, điểm số & chúc mừng
│   ├── data/
│   │   └── curriculumData.js          # Dữ liệu 6 cấp độ & 15 bài học Sơ cấp
│   ├── hooks/
│   │   ├── useKoreanSpeech.js         # Web Speech Synthesis & Recognition
│   │   └── useUserProgress.js         # Quản lý điểm số, streak, local storage
│   ├── utils/
│   │   └── hangulHelper.js            # Giải thuật phân tích Jamo & tính điểm phát âm
│   ├── App.jsx                        # Giao diện chính Claymorphism
│   ├── index.css                      # Styling hiệu ứng Claymorphism
│   └── main.jsx
├── package.json
└── vite.config.js
```
