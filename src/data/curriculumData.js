// Curriculum registry following "Giáo trình Tiếng Hàn Tổng hợp" (Levels 1 to 6)
// Trilingual Korean - Vietnamese - English

export const LEVELS = [
  {
    id: 'so_cap_1',
    level: 1,
    nameKo: '초급 1',
    nameVi: 'Sơ cấp 1',
    nameEn: 'Beginner 1',
    color: '#4F46E5',
    badge: 'Level 1',
    description: 'Dành cho người mới bắt đầu: Làm quen chữ Hangeul, cách phát âm, chào hỏi và giao tiếp cơ bản.'
  },
  {
    id: 'so_cap_2',
    level: 2,
    nameKo: '초급 2',
    nameVi: 'Sơ cấp 2',
    nameEn: 'Beginner 2',
    color: '#0D9488',
    badge: 'Level 2',
    description: 'Mở rộng vốn từ và các tình huống giao tiếp thường ngày: Mua sắm, hỏi đường, bệnh viện, thư từ.'
  },
  {
    id: 'trung_cap_1',
    level: 3,
    nameKo: '중급 3',
    nameVi: 'Trung cấp 3',
    nameEn: 'Intermediate 3',
    color: '#D97706',
    badge: 'Level 3',
    description: 'Giao tiếp xã hội tự tin: Thể hiện quan điểm, sinh hoạt công sở, giải quyết vấn đề đời sống.'
  },
  {
    id: 'trung_cap_2',
    level: 4,
    nameKo: '중급 4',
    nameVi: 'Trung cấp 4',
    nameEn: 'Intermediate 4',
    color: '#E11D48',
    badge: 'Level 4',
    description: 'Nâng cao khả năng phân tích, đọc hiểu báo chí, bàn luận các chủ đề kinh tế - xã hội phổ thông.'
  },
  {
    id: 'cao_cap_1',
    level: 5,
    nameKo: '고급 5',
    nameVi: 'Cao cấp 5',
    nameEn: 'Advanced 5',
    color: '#7C3AED',
    badge: 'Level 5',
    description: 'Văn phong học thuật, thuyết trình chuyên sâu về văn hóa, lịch sử, kinh tế thị trường Hàn Quốc.'
  },
  {
    id: 'cao_cap_2',
    level: 6,
    nameKo: '고급 6',
    nameVi: 'Cao cấp 6',
    nameEn: 'Advanced 6',
    color: '#0F172A',
    badge: 'Level 6',
    description: 'Đạt trình độ bản ngữ thành thạo: Sử dụng quán dụng ngữ, thành ngữ 4 chữ, bình luận chính sách & triết học.'
  }
];

export const UNITS = [
  // ========== SƠ CẤP 1 ==========
  {
    id: 'sc1_u1',
    levelId: 'so_cap_1',
    unitNumber: 1,
    titleKo: '소개',
    titleVi: 'Bài 1: Giới thiệu',
    titleEn: 'Unit 1: Introduction',
    description: 'Học cách chào hỏi, giới thiệu họ tên, quốc tịch, nghề nghiệp cơ bản và ngữ pháp 입니다 / 입니까 / 은/는.',
    audioTrack: {
      trackName: 'Track 09 & 10 (Sơ cấp 1)',
      fileName: '009.mp3',
      r2Url: 'https://r2.aixfactory.io.vn/korean-audio/so-cap-1/009.mp3',
      duration: '01:45'
    },
    vocabulary: [
      {
        id: 'sc1_u1_w1',
        hangul: '한국',
        romaja: 'han-guk',
        hanja: '韓國',
        type: 'Danh từ',
        meaningVi: 'Hàn Quốc',
        meaningEn: 'Korea / South Korea',
        example: {
          ko: '저는 한국 사람입니다.',
          vi: 'Tôi là người Hàn Quốc.',
          en: 'I am Korean.'
        },
        dialogue: {
          speakerA: '수빈',
          speakerB: '화',
          lineA: '한국 사람입니까?',
          lineB: '네, 저는 한국 사람입니다.',
          lineAVi: 'Bạn là người Hàn Quốc phải không?',
          lineBVi: 'Vâng, tôi là người Hàn Quốc.',
          lineAEn: 'Are you Korean?',
          lineBEn: 'Yes, I am Korean.'
        },
        exercise: {
          questionKo: '빈칸에 알맞은 말을 고르세요: 저는 ____ 사람입니다.',
          questionVi: 'Chọn từ thích hợp điền vào chỗ trống: Tôi là người Hàn Quốc.',
          questionEn: 'Choose the correct word: I am Korean.',
          options: ['한국', '학교', '선생님', '책'],
          correctIndex: 0,
          explanation: '한국 có nghĩa là Hàn Quốc. 한국 사람 là người Hàn Quốc.'
        }
      },
      {
        id: 'sc1_u1_w2',
        hangul: '베트남',
        romaja: 'be-teu-nam',
        type: 'Danh từ',
        meaningVi: 'Việt Nam',
        meaningEn: 'Vietnam',
        example: {
          ko: '화 씨는 베트남 사람입니다.',
          vi: 'Hoa là người Việt Nam.',
          en: 'Hoa is Vietnamese.'
        },
        dialogue: {
          speakerA: '준영',
          speakerB: '히엔',
          lineA: '히엔 씨는 어느 나라 사람입니까?',
          lineB: '저는 베트남 사람입니다.',
          lineAVi: 'Hiền là người nước nào?',
          lineBVi: 'Tôi là người Việt Nam.',
          lineAEn: 'Which country are you from, Hien?',
          lineBEn: 'I am from Vietnam.'
        },
        exercise: {
          questionKo: '베트남의 뜻은 무엇입니까?',
          questionVi: '"베트남" có nghĩa là gì?',
          questionEn: 'What does "베트남" mean?',
          options: ['Hàn Quốc', 'Việt Nam', 'Nhật Bản', 'Trung Quốc'],
          correctIndex: 1,
          explanation: '베트남 trong tiếng Hàn nghĩa là Việt Nam.'
        }
      },
      {
        id: 'sc1_u1_w3',
        hangul: '선생님',
        romaja: 'seon-saeng-nim',
        hanja: '先生님',
        type: 'Danh từ',
        meaningVi: 'Thầy / Cô giáo',
        meaningEn: 'Teacher / Instructor',
        example: {
          ko: '박수빈 씨는 한국어 선생님입니다.',
          vi: 'Anh Park Soo-bin là giáo viên tiếng Hàn.',
          en: 'Mr. Park Soo-bin is a Korean teacher.'
        },
        dialogue: {
          speakerA: '화',
          speakerB: '수빈',
          lineA: '박수빈 씨는 선생님입니까?',
          lineB: '네, 한국어 선생님입니다.',
          lineAVi: 'Anh Park Soo-bin là giáo viên phải không?',
          lineBVi: 'Vâng, tôi là giáo viên tiếng Hàn.',
          lineAEn: 'Are you a teacher, Mr. Park?',
          lineBEn: 'Yes, I am a Korean teacher.'
        },
        exercise: {
          questionKo: '선생님의 뜻은?',
          questionVi: 'Từ "선생님" có nghĩa là gì?',
          questionEn: 'What does "선생님" mean?',
          options: ['Bác sĩ', 'Giáo viên / Thầy cô', 'Học sinh', 'Nhân viên'],
          correctIndex: 1,
          explanation: '선생님 là giáo viên, thầy/cô giáo (thêm đuôi 님 thể hiện sự tôn kính).'
        }
      },
      {
        id: 'sc1_u1_w4',
        hangul: '학생',
        romaja: 'hak-saeng',
        hanja: '學生',
        type: 'Danh từ',
        meaningVi: 'Học sinh / Sinh viên',
        meaningEn: 'Student',
        example: {
          ko: '저는 대학교 학생입니다.',
          vi: 'Tôi là sinh viên đại học.',
          en: 'I am a university student.'
        },
        dialogue: {
          speakerA: '준영',
          speakerB: '히엔',
          lineA: '히엔 씨는 학생입니까?',
          lineB: '네, 저는 학생입니다.',
          lineAVi: 'Hiền là học sinh phải không?',
          lineBVi: 'Vâng, tôi là học sinh.',
          lineAEn: 'Are you a student, Hien?',
          lineBEn: 'Yes, I am a student.'
        },
        exercise: {
          questionKo: '반대말이나 관련 직업: 가르치는 사람은 선생님이고, 배우는 사람은?',
          questionVi: 'Người dạy là giáo viên, còn người học là ai?',
          questionEn: 'The person who teaches is teacher, who learns?',
          options: ['의사', '회사원', '학생', '주부'],
          correctIndex: 2,
          explanation: '학생 (Học sinh) là người học tập.'
        }
      },
      {
        id: 'sc1_u1_w5',
        hangul: '회사원',
        romaja: 'hoe-sa-won',
        hanja: '會社員',
        type: 'Danh từ',
        meaningVi: 'Nhân viên công ty / văn phòng',
        meaningEn: 'Office worker / Company employee',
        example: {
          ko: '제 친구는 회사원입니다.',
          vi: 'Bạn tôi là nhân viên văn phòng.',
          en: 'My friend is an office worker.'
        },
        dialogue: {
          speakerA: '민우',
          speakerB: '지훈',
          lineA: '직업이 무엇입니까?',
          lineB: '저는 회사원입니다.',
          lineAVi: 'Nghề nghiệp của bạn là gì?',
          lineBVi: 'Tôi là nhân viên công ty.',
          lineAEn: 'What is your job?',
          lineBEn: 'I am an office worker.'
        },
        exercise: {
          questionKo: '회사에서 일하는 사람은 누구입니까?',
          questionVi: 'Người làm việc ở công ty gọi là gì?',
          questionEn: 'Who works in a company?',
          options: ['의사', '회사원', '은행원', '간호사'],
          correctIndex: 1,
          explanation: '회사 (công ty) + 원 (nhân viên) = 회사원 (nhân viên công ty).'
        }
      },
      {
        id: 'sc1_u1_w6',
        hangul: '의사',
        romaja: 'ui-sa',
        hanja: '醫師',
        type: 'Danh từ',
        meaningVi: 'Bác sĩ',
        meaningEn: 'Doctor / Physician',
        example: {
          ko: '화 씨는 병원 의사입니다.',
          vi: 'Hoa là bác sĩ bệnh viện.',
          en: 'Hoa is a hospital doctor.'
        },
        dialogue: {
          speakerA: '수빈',
          speakerB: '화',
          lineA: '화 씨는 의사입니까?',
          lineB: '네, 저는 의사입니다.',
          lineAVi: 'Hoa là bác sĩ phải không?',
          lineBVi: 'Vâng, tôi là bác sĩ.',
          lineAEn: 'Are you a doctor, Hoa?',
          lineBEn: 'Yes, I am a doctor.'
        },
        exercise: {
          questionKo: '병원에서 환자를 치료하는 사람은?',
          questionVi: 'Người chữa bệnh cho bệnh nhân ở bệnh viện là?',
          questionEn: 'Who treats patients at the hospital?',
          options: ['선생님', '의사', '은행원', '공무원'],
          correctIndex: 1,
          explanation: '의사 nghĩa là bác sĩ.'
        }
      },
      {
        id: 'sc1_u1_w7',
        hangul: '안녕하세요',
        romaja: 'an-nyeong-ha-se-yo',
        type: 'Lời chào',
        meaningVi: 'Xin chào',
        meaningEn: 'Hello / Good morning / How are you',
        example: {
          ko: '안녕하세요? 처음 뵙겠습니다.',
          vi: 'Xin chào? Lần đầu tiên tôi được gặp bạn.',
          en: 'Hello, nice to meet you for the first time.'
        },
        dialogue: {
          speakerA: '수빈',
          speakerB: '화',
          lineA: '안녕하세요? 박수빈입니다.',
          lineB: '안녕하세요? 화입니다.',
          lineAVi: 'Xin chào? Tôi là Park Soo-bin.',
          lineBVi: 'Xin chào? Tôi là Hoa.',
          lineAEn: 'Hello, I am Park Soo-bin.',
          lineBEn: 'Hello, I am Hoa.'
        },
        exercise: {
          questionKo: '한국에서 만났을 때 하는 가장 대표적인 인사는?',
          questionVi: 'Lời chào phổ biến nhất khi gặp nhau ở Hàn Quốc là?',
          questionEn: 'Most common Korean greeting when meeting someone?',
          options: ['안녕히 계세요', '안녕하세요', '감사합니다', '죄송합니다'],
          correctIndex: 1,
          explanation: '안녕하세요 là lời chào kính ngữ thông dụng nhất trong tiếng Hàn.'
        }
      },
      {
        id: 'sc1_u1_w8',
        hangul: '반갑습니다',
        romaja: 'ban-gap-seum-ni-da',
        type: 'Biểu hiện giao tiếp',
        meaningVi: 'Rất vui được gặp bạn / Hân hạnh',
        meaningEn: 'Nice to meet you / Glad to meet you',
        example: {
          ko: '만나서 반갑습니다.',
          vi: 'Rất vui vì được gặp bạn.',
          en: 'It is a pleasure to meet you.'
        },
        dialogue: {
          speakerA: '히엔',
          speakerB: '준영',
          lineA: '제 이름은 히엔입니다.',
          lineB: '반갑습니다. 박준영입니다.',
          lineAVi: 'Tên tôi là Hiền.',
          lineBVi: 'Rất hân hạnh được gặp bạn. Tôi là Park Jun-young.',
          lineAEn: 'My name is Hien.',
          lineBEn: 'Nice to meet you. I am Park Jun-young.'
        },
        exercise: {
          questionKo: '처음 만났을 때 친근하게 인사하는 말은?',
          questionVi: 'Khi lần đầu gặp gỡ, nói câu gì để biểu thị hân hạnh?',
          questionEn: 'What do you say to express pleasure when meeting someone?',
          options: ['반갑습니다', '안녕히 가세요', '아니요', '네'],
          correctIndex: 0,
          explanation: '반갑습니다 mang ý nghĩa hân hạnh, rất vui được gặp bạn.'
        }
      }
    ],
    // Trilingual Subtitles for dialogues / reading passages
    parallelSubtitles: [
      {
        id: 'sub_1',
        speaker: '수빈 (Soo-bin)',
        ko: '안녕하세요? 박수빈입니다.',
        romaja: 'An-nyeong-ha-se-yo? Bak-su-bin-im-ni-da.',
        vi: 'Xin chào? Tôi là Park Soo-bin.',
        en: 'Hello? I am Park Soo-bin.'
      },
      {
        id: 'sub_2',
        speaker: '화 (Hoa)',
        ko: '안녕하세요? 화입니다. 반갑습니다.',
        romaja: 'An-nyeong-ha-se-yo? Hwa-im-ni-da. Ban-gap-seum-ni-da.',
        vi: 'Xin chào? Tôi là Hoa. Rất vui được gặp anh.',
        en: 'Hello? I am Hoa. Nice to meet you.'
      },
      {
        id: 'sub_3',
        speaker: '수빈 (Soo-bin)',
        ko: '화 씨는 의사입니까?',
        romaja: 'Hwa ssi-neun ui-sa-im-ni-kka?',
        vi: 'Hoa là bác sĩ phải không?',
        en: 'Are you a doctor, Ms. Hoa?'
      },
      {
        id: 'sub_4',
        speaker: '화 (Hoa)',
        ko: '네, 의사입니다. 박수빈 씨는 선생님입니까?',
        romaja: 'Ne, ui-sa-im-ni-da. Bak-su-bin ssi-neun seon-saeng-nim-im-ni-kka?',
        vi: 'Vâng, tôi là bác sĩ. Anh Park Soo-bin là giáo viên phải không?',
        en: 'Yes, I am a doctor. Are you a teacher, Mr. Park Soo-bin?'
      },
      {
        id: 'sub_5',
        speaker: '수빈 (Soo-bin)',
        ko: '네, 저는 한국어 선생님입니다.',
        romaja: 'Ne, jeo-neun han-guk-eo seon-saeng-nim-im-ni-da.',
        vi: 'Vâng, tôi là giáo viên tiếng Hàn.',
        en: 'Yes, I am a Korean language teacher.'
      },
      {
        id: 'sub_6',
        speaker: '박수진 (Park Soo-jin)',
        ko: '안녕하세요? 제 이름은 박수진입니다. 한국 사람입니다. 회사원입니다. 반갑습니다.',
        romaja: 'An-nyeong-ha-se-yo? Je i-reum-eun Bak-su-jin-im-ni-da. Han-guk sa-ram-im-ni-da. Hoe-sa-won-im-ni-da. Ban-gap-seum-ni-da.',
        vi: 'Xin chào? Tên tôi là Park Soo-jin. Tôi là người Hàn Quốc. Tôi là nhân viên công ty. Rất hân hạnh được làm quen.',
        en: 'Hello? My name is Park Soo-jin. I am Korean. I am an office worker. Nice to meet you.'
      }
    ],
    grammarPoints: [
      {
        name: '입니다 (Là)',
        formula: 'Danh từ + 입니다',
        explanationVi: 'Đuôi câu khẳng định trang trọng, tương đương với "là" trong tiếng Việt. Dùng sau danh từ dù có phụ âm cuối (patchim) hay không.',
        explanationEn: 'Formal polite declarative ending equivalent to "is/am/are". Attached directly to nouns.',
        examples: [
          { ko: '저는 학생입니다.', vi: 'Tôi là học sinh.', en: 'I am a student.' },
          { ko: '이 사람은 의사입니다.', vi: 'Người này là bác sĩ.', en: 'This person is a doctor.' }
        ]
      },
      {
        name: '입니까? (Có phải là ... không?)',
        formula: 'Danh từ + 입니까?',
        explanationVi: 'Dạng nghi vấn của 입니다, dùng để hỏi trang trọng: "Có phải là... không?".',
        explanationEn: 'Interrogative form of 입니다, used to ask questions politely.',
        examples: [
          { ko: '선생님입니까?', vi: 'Bạn là giáo viên phải không?', en: 'Are you a teacher?' },
          { ko: '한국 사람입니까?', vi: 'Bạn là người Hàn Quốc phải không?', en: 'Are you Korean?' }
        ]
      },
      {
        name: '은 / 는 (Tiểu từ chủ đề)',
        formula: 'Có patchim + 은 | Không patchim + 는',
        explanationVi: 'Gắn sau danh từ để đánh dấu chủ đề của câu hoặc thể hiện sự so sánh, đối chiếu.',
        explanationEn: 'Topic marking particle. Attached to nouns to indicate the topic of the sentence.',
        examples: [
          { ko: '저는 베트남 사람입니다.', vi: 'Tôi là người Việt Nam.', en: 'As for me, I am Vietnamese.' },
          { ko: '선생님은 한국 사람입니다.', vi: 'Thầy giáo là người Hàn Quốc.', en: 'The teacher is Korean.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_q1',
        question: 'Chọn trợ từ thích hợp: "저____ 학생입니다."',
        options: ['은', '는', '이', '가'],
        correctIndex: 1,
        explanation: 'Từ "저" (tôi) không có patchim nên kết hợp với tiểu từ chủ đề "는" -> 저는.'
      },
      {
        id: 'sc1_q2',
        question: 'Dạng câu hỏi nghi vấn trang trọng của "의사입니다" là gì?',
        options: ['의사입니까?', '의사입니다?', '의사예요?', '의사인가요?'],
        correctIndex: 0,
        explanation: 'Đuôi câu hỏi trang trọng trong văn phong kính ngữ là "입니까?".'
      },
      {
        id: 'sc1_q3',
        question: 'Từ nào chỉ nghề nghiệp trong các từ sau?',
        options: ['한국', '베트남', '회사원', '이름'],
        correctIndex: 2,
        explanation: '회사원 nghĩa là nhân viên công ty (nghề nghiệp). 한국 và 베트남 là tên nước, 이름 là tên.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 2 ==========
  {
    id: 'sc1_u2',
    levelId: 'so_cap_1',
    unitNumber: 2,
    titleKo: '학교',
    titleVi: 'Bài 2: Trường học',
    titleEn: 'Unit 2: School & Campus',
    description: 'Từ vựng đồ dùng học tập, phòng ban trong trường, và ngữ pháp 이/가, 에 있습니다/없습니다.',
    audioTrack: {
      trackName: 'Track 16 & 17 (Sơ cấp 1)',
      fileName: '016.mp3',
      r2Url: 'https://r2.aixfactory.io.vn/korean-audio/so-cap-1/016.mp3',
      duration: '02:10'
    },
    vocabulary: [
      {
        id: 'sc1_u2_w1',
        hangul: '학교',
        romaja: 'hak-gyo',
        hanja: '學校',
        type: 'Danh từ',
        meaningVi: 'Trường học',
        meaningEn: 'School',
        example: {
          ko: '여기는 한국대학교입니다.',
          vi: 'Đây là trường Đại học Hàn Quốc.',
          en: 'This is Korea University.'
        },
        dialogue: {
          speakerA: '민수',
          speakerB: '지원',
          lineA: '여기가 학교입니까?',
          lineB: '네, 대학교입니다.',
          lineAVi: 'Đây có phải là trường học không?',
          lineBVi: 'Vâng, là trường đại học.',
          lineAEn: 'Is this a school?',
          lineBEn: 'Yes, it is a university.'
        },
        exercise: {
          questionKo: '학생들이 공부하는 장소는?',
          questionVi: 'Nơi học sinh học tập gọi là gì?',
          questionEn: 'Where do students study?',
          options: ['학교', '병원', '회사', '식당'],
          correctIndex: 0,
          explanation: '학교 nghĩa là trường học.'
        }
      },
      {
        id: 'sc1_u2_w2',
        hangul: '도서관',
        romaja: 'do-seo-gwan',
        hanja: '圖書館',
        type: 'Danh từ',
        meaningVi: 'Thư viện',
        meaningEn: 'Library',
        example: {
          ko: '도서관에 책이 많습니다.',
          vi: 'Ở thư viện có nhiều sách.',
          en: 'There are many books in the library.'
        },
        dialogue: {
          speakerA: '화',
          speakerB: '준영',
          lineA: '도서관이 어디에 있습니까?',
          lineB: '도서관은 2층에 있습니다.',
          lineAVi: 'Thư viện ở đâu vậy?',
          lineBVi: 'Thư viện ở tầng 2.',
          lineAEn: 'Where is the library?',
          lineBEn: 'The library is on the 2nd floor.'
        },
        exercise: {
          questionKo: '책을 빌리고 공부하는 장소는?',
          questionVi: 'Nơi mượn sách và học tập là?',
          questionEn: 'Place where you borrow books and study?',
          options: ['도서관', '화장실', '식당', '은행'],
          correctIndex: 0,
          explanation: '도서관 có nghĩa là thư viện.'
        }
      },
      {
        id: 'sc1_u2_w3',
        hangul: '책상',
        romaja: 'chaek-sang',
        hanja: '冊床',
        type: 'Danh từ',
        meaningVi: 'Bàn học / Bàn làm việc',
        meaningEn: 'Desk',
        example: {
          ko: '교실에 책상이 있습니다.',
          vi: 'Trong lớp học có bàn học.',
          en: 'There are desks in the classroom.'
        },
        dialogue: {
          speakerA: '선생님',
          speakerB: '학생',
          lineA: '책상 위에 무엇이 있습니까?',
          lineB: '책과 공책이 있습니다.',
          lineAVi: 'Trên bàn có cái gì?',
          lineBVi: 'Có sách và vở.',
          lineAEn: 'What is on the desk?',
          lineBEn: 'There are books and notebooks.'
        },
        exercise: {
          questionKo: '공부할 때 쓰는 가구는?',
          questionVi: 'Vật dụng dùng để đặt sách vở học bài là?',
          questionEn: 'Furniture used for studying?',
          options: ['책상', '의자', '시계', '가방'],
          correctIndex: 0,
          explanation: '책상 là bàn học.'
        }
      },
      {
        id: 'sc1_u2_w4',
        hangul: '의자',
        romaja: 'ui-ja',
        hanja: '椅子',
        type: 'Danh từ',
        meaningVi: 'Ghế ngồi',
        meaningEn: 'Chair',
        example: {
          ko: '의자에 앉으세요.',
          vi: 'Xin mời ngồi vào ghế.',
          en: 'Please sit on the chair.'
        },
        dialogue: {
          speakerA: '학생',
          speakerB: '선생님',
          lineA: '의자가 편안합니까?',
          lineB: '네, 아주 편안합니다.',
          lineAVi: 'Cái ghế có êm không?',
          lineBVi: 'Vâng, rất thoải mái.',
          lineAEn: 'Is the chair comfortable?',
          lineBEn: 'Yes, very comfortable.'
        },
        exercise: {
          questionKo: '사람이 앉는 물건은?',
          questionVi: 'Đồ vật để người ngồi lên là?',
          questionEn: 'Something people sit on?',
          options: ['의자', '칠판', '문', '창문'],
          correctIndex: 0,
          explanation: '의자 là cái ghế.'
        }
      }
    ],
    parallelSubtitles: [
      {
        id: 'sub_u2_1',
        speaker: '남 (Nam)',
        ko: '여기가 어디입니까?',
        romaja: 'Yeo-gi-ga eo-di-im-ni-kka?',
        vi: 'Đây là đâu vậy?',
        en: 'Where is this place?'
      },
      {
        id: 'sub_u2_2',
        speaker: '이지훈 (Lee Ji-hoon)',
        ko: '여기는 우리 대학교 도서관입니다.',
        romaja: 'Yeo-gi-neun u-ri dae-hak-gyo do-seo-gwan-im-ni-da.',
        vi: 'Đây là thư viện trường đại học của chúng tôi.',
        en: 'This is our university library.'
      },
      {
        id: 'sub_u2_3',
        speaker: '남 (Nam)',
        ko: '교실에 컴퓨터가 있습니까?',
        romaja: 'Gyo-sil-e keom-pyu-teo-ga it-seum-ni-kka?',
        vi: 'Trong phòng học có máy tính không?',
        en: 'Is there a computer in the classroom?'
      },
      {
        id: 'sub_u2_4',
        speaker: '이지훈 (Lee Ji-hoon)',
        ko: '네, 교실에 컴퓨터와 빔프로젝터가 있습니다.',
        romaja: 'Ne, gyo-sil-e keom-pyu-teo-wa bim-peu-ro-jek-teo-ga it-seum-ni-da.',
        vi: 'Vâng, trong phòng học có máy tính và máy chiếu.',
        en: 'Yes, there are computers and projectors in the classroom.'
      }
    ],
    grammarPoints: [
      {
        name: '이 / 가 (Tiểu từ chủ ngữ)',
        formula: 'Có patchim + 이 | Không patchim + 가',
        explanationVi: 'Gắn sau danh từ đóng vai trò là chủ ngữ trực tiếp trong câu, nhấn mạnh chính đối tượng đó.',
        explanationEn: 'Subject particle indicating the grammatical subject of the sentence.',
        examples: [
          { ko: '선생님이 옵니다.', vi: 'Thầy giáo đang đến.', en: 'The teacher is coming.' },
          { ko: '시계가 있습니다.', vi: 'Có đồng hồ.', en: 'There is a clock.' }
        ]
      },
      {
        name: '에 있습니다 / 없습니다 (Có / Không có ở đâu)',
        formula: 'Địa điểm + 에 있습니다/없습니다',
        explanationVi: 'Biểu thị sự tồn tại hoặc vắng mặt của người/đồ vật tại một địa điểm xác định.',
        explanationEn: 'Indicates the existence or non-existence of something at a specific location.',
        examples: [
          { ko: '도서관에 책이 있습니다.', vi: 'Có sách ở thư viện.', en: 'There are books in the library.' },
          { ko: '교실에 학생이 없습니다.', vi: 'Không có học sinh trong lớp.', en: 'There are no students in the classroom.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u2_q1',
        question: 'Chọn từ đúng: "가방____ 책이 있습니다." (Trong cặp có sách)',
        options: ['에', '에서', '을', '는'],
        correctIndex: 0,
        explanation: 'Tiểu từ vị trí kết hợp với 있다/없다 là "에" -> 가방에 책이 있습니다.'
      }
    ]
  },

  // ========== SƠ CẤP 2 ==========
  {
    id: 'sc2_u1',
    levelId: 'so_cap_2',
    unitNumber: 1,
    titleKo: '만남',
    titleVi: 'Bài 1: Gặp gỡ',
    titleEn: 'Unit 1: Meeting & Reunion',
    description: 'Học cách hỏi thăm tình hình, nói về thời gian trôi qua, ngữ pháp -(으)ㄴ 지, -아/어 보다.',
    audioTrack: {
      trackName: 'Track 01 (Sơ cấp 2)',
      fileName: '001.mp3',
      r2Url: 'https://r2.aixfactory.io.vn/korean-audio/so-cap-2/001.mp3',
      duration: '02:05'
    },
    vocabulary: [
      {
        id: 'sc2_u1_w1',
        hangul: '오랜만입니다',
        romaja: 'o-raen-man-im-ni-da',
        type: 'Chào hỏi',
        meaningVi: 'Lâu rồi không gặp',
        meaningEn: 'Long time no see',
        example: {
          ko: '민수 씨, 정말 오랜만입니다!',
          vi: 'Min-soo à, lâu lắm rồi không gặp!',
          en: 'Min-soo, long time no see indeed!'
        },
        dialogue: {
          speakerA: '유나',
          speakerB: '민수',
          lineA: '오랜만이에요! 잘 지냈어요?',
          lineB: '네, 유나 씨도 잘 지냈어요?',
          lineAVi: 'Lâu rồi không gặp! Cậu khỏe không?',
          lineBVi: 'Tớ khỏe, Yuna cũng khỏe chứ?',
          lineAEn: 'Long time no see! Have you been well?',
          lineBEn: 'Yes, how about you, Yuna?'
        },
        exercise: {
          questionKo: '오랜만에 만났을 때 하는 인사는?',
          questionVi: 'Khi lâu ngày mới gặp lại người quen, ta chào câu gì?',
          questionEn: 'Greeting used when meeting someone after a long time?',
          options: ['오랜만입니다', '처음 뵙겠습니다', '안녕히 가세요', '실례합니다'],
          correctIndex: 0,
          explanation: '오랜만입니다 dùng khi lâu ngày tái ngộ.'
        }
      },
      {
        id: 'sc2_u1_w2',
        hangul: '소식',
        romaja: 'so-sik',
        hanja: '消息',
        type: 'Danh từ',
        meaningVi: 'Tin tức / Tin tức người quen',
        meaningEn: 'News / Tidings',
        example: {
          ko: '친구의 소식을 들었습니다.',
          vi: 'Tôi đã nghe tin tức của bạn mình.',
          en: 'I heard news about my friend.'
        },
        dialogue: {
          speakerA: '민우',
          speakerB: '지훈',
          lineA: '그 사람 소식 들었어요?',
          lineB: '아니요, 연락이 없었어요.',
          lineAVi: 'Cậu có nghe tin gì về người đó không?',
          lineBVi: 'Không, không có liên lạc gì cả.',
          lineAEn: 'Did you hear any news about him?',
          lineBEn: 'No, there was no contact.'
        },
        exercise: {
          questionKo: '누군가의 상황이나 안부를 알리는 말은?',
          questionVi: 'Từ dùng để chỉ tin tức, tình hình của ai đó là?',
          questionEn: 'Word meaning news or updates about someone?',
          options: ['소식', '음식', '상식', '휴식'],
          correctIndex: 0,
          explanation: '소식 (消息) nghĩa là tin tức, tin nhạn.'
        }
      }
    ],
    parallelSubtitles: [
      {
        id: 'sub_sc2_1',
        speaker: '유나 (Yuna)',
        ko: '민수 씨, 정말 오랜만입니다! 그동안 잘 지내셨어요?',
        romaja: 'Min-su ssi, jeong-mal o-raen-man-im-ni-da! Geu-dong-an jal ji-nae-syeot-seo-yo?',
        vi: 'Min-soo à, thật là lâu lắm rồi không gặp! Dạo này cậu vẫn khỏe chứ?',
        en: 'Min-soo, long time no see! Have you been doing well all this time?'
      },
      {
        id: 'sub_sc2_2',
        speaker: '민수 (Min-soo)',
        ko: '네, 덕분에 잘 지냈어요. 유나 씨는 요즘 어떻게 지내세요?',
        romaja: 'Ne, deok-bun-e jal ji-naet-eo-yo. Yu-na ssi-neun yo-jeum eo-tteo-ke ji-nae-se-yo?',
        vi: 'Ừ, nhờ cậu tớ vẫn khỏe. Dạo này Yuna sống thế nào rồi?',
        en: 'Yes, thanks to you I have been well. How have you been spending your days lately, Yuna?'
      }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ 지 (Đã làm gì được bao lâu)',
        formula: 'Động từ + -(으)ㄴ 지 + Khoảng thời gian + 되다',
        explanationVi: 'Diễn tả khoảng thời gian đã trôi qua kể từ khi thực hiện một hành động nào đó.',
        explanationEn: 'Expresses the amount of time elapsed since an action occurred.',
        examples: [
          { ko: '한국어를 배운 지 6개월이 되었습니다.', vi: 'Tôi học tiếng Hàn đã được 6 tháng rồi.', en: 'It has been 6 months since I started learning Korean.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_q1',
        question: 'Điền vào chỗ trống: "한국에 ____ 1년이 되었습니다." (Đến Hàn Quốc đã được 1 năm)',
        options: ['온 지', '오는 지', '오고', '오면'],
        correctIndex: 0,
        explanation: 'Động từ 오다 kết hợp với cấu trúc -(으)ㄴ 지 thành 온 지.'
      }
    ]
  },

  // ========== TRUNG CẤP 3 ==========
  {
    id: 'tc3_u1',
    levelId: 'trung_cap_1',
    unitNumber: 1,
    titleKo: '대인관계',
    titleVi: 'Bài 1: Mối quan hệ xã hội',
    titleEn: 'Unit 1: Interpersonal Relationships',
    description: 'Bàn về tính cách, nghệ thuật ứng xử, giao tiếp nơi làm việc và ngữ pháp -(으)ㄹ 뿐만 아니라, -기 마련이다.',
    audioTrack: {
      trackName: 'Track 01 (Trung cấp 3)',
      fileName: '001.mp3',
      r2Url: 'https://r2.aixfactory.io.vn/korean-audio/trung-cap-3/001.mp3',
      duration: '02:30'
    },
    vocabulary: [
      {
        id: 'tc3_u1_w1',
        hangul: '원만하다',
        romaja: 'won-man-ha-da',
        hanja: '圓滿하다',
        type: 'Tính từ',
        meaningVi: 'Hòa đồng, êm đẹp, viên mãn',
        meaningEn: 'Harmonious / Smooth / Sociable',
        example: {
          ko: '그 사람은 성격이 원만해서 인기가 많습니다.',
          vi: 'Người đó tính tình hòa đồng nên rất được yêu mến.',
          en: 'He has an amiable personality and is very popular.'
        },
        dialogue: {
          speakerA: '팀장',
          speakerB: '대리',
          lineA: '김 대리는 대인관계가 참 원만해요.',
          lineB: '네, 항상 남을 배려하기 때문입니다.',
          lineAVi: 'Trợ lý Kim quan hệ xã hội rất hòa nhã.',
          lineBVi: 'Vâng, vì anh ấy luôn quan tâm chu đáo tới người khác.',
          lineAEn: 'Assistant Manager Kim has very harmonious relationships.',
          lineBEn: 'Yes, because he is always considerate of others.'
        },
        exercise: {
          questionKo: '성격이 부드럽고 다른 사람과 잘 어울리는 모습을 나타내는 단어는?',
          questionVi: 'Từ miêu tả tính cách mềm mỏng, dễ hòa hợp với mọi người là?',
          questionEn: 'Word describing an amiable personality easy to get along with?',
          options: ['원만하다', '까다롭다', '내성적이다', '소심하다'],
          correctIndex: 0,
          explanation: '원만하다 (viên mãn) chỉ sự hòa nhã, êm đẹp.'
        }
      }
    ],
    parallelSubtitles: [
      {
        id: 'sub_tc3_1',
        speaker: '전문가 (Chuyên gia)',
        ko: '사회생활에서 성공하기 위해서는 직무 능력뿐만 아니라 원만한 대인관계가 필수적입니다.',
        romaja: 'Sa-hoe-saeng-hwal-e-seo seong-gong-ha-gi wi-hae-seo-neun jik-mu neung-ryeok-ppun-man a-ni-ra won-man-han dae-in-gwan-gye-ga pil-su-jeok-im-ni-da.',
        vi: 'Để thành công trong cuộc sống xã hội, không chỉ năng lực chuyên môn mà mối quan hệ hòa đồng với mọi người cũng là điều thiết yếu.',
        en: 'To succeed in social life, not only job competence but also smooth interpersonal relations are indispensable.'
      }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 뿐만 아니라 (Không những ... mà còn)',
        formula: 'Động/Tính từ + -(으)ㄹ 뿐만 아니라',
        explanationVi: 'Liên từ thể hiện vế sau bổ sung thêm thông tin cho vế trước (tương tự not only... but also).',
        explanationEn: 'Indicates that in addition to the preceding fact, another fact is also true.',
        examples: [
          { ko: '그는 똑똑할 뿐만 아니라 성실합니다.', vi: 'Anh ấy không những thông minh mà còn rất chăm chỉ.', en: 'He is not only smart but also diligent.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_q1',
        question: 'Chọn câu đúng: "그 사람은 일을 잘할 뿐만 아니라 친절____."',
        options: ['합니다', '해서', '하면', '하고'],
        correctIndex: 0,
        explanation: 'Vế sau kết thúc câu trọn vẹn là "친절합니다".'
      }
    ]
  },

  // ========== CAO CẤP 5 & 6 ==========
  {
    id: 'cc5_u1',
    levelId: 'cao_cap_1',
    unitNumber: 1,
    titleKo: '현대 사회와 가치관',
    titleVi: 'Bài 1: Xã hội hiện đại và Hệ giá trị',
    titleEn: 'Unit 1: Modern Society & Value Systems',
    description: 'Chuyên đề triết luận về sự biến đổi văn hóa, đạo đức truyền thống và các xung đột thế hệ trong kỷ nguyên số.',
    audioTrack: {
      trackName: 'Track 01 (Cao cấp 5)',
      fileName: '001.mp3',
      r2Url: 'https://r2.aixfactory.io.vn/korean-audio/cao-cap-5/001.mp3',
      duration: '03:15'
    },
    vocabulary: [
      {
        id: 'cc5_u1_w1',
        hangul: '다원화',
        romaja: 'da-won-hwa',
        hanja: '多元化',
        type: 'Danh từ',
        meaningVi: 'Đa nguyên hóa, đa dạng hóa',
        meaningEn: 'Pluralization / Diversification',
        example: {
          ko: '현대 사회는 가치관이 급격히 다원화되고 있습니다.',
          vi: 'Xã hội hiện đại đang chứng kiến các giá trị quan được đa nguyên hóa một cách nhanh chóng.',
          en: 'Modern society is rapidly undergoing value pluralization.'
        },
        dialogue: {
          speakerA: '사회학자 A',
          speakerB: '사회학자 B',
          lineA: '가치관의 다원화가 갈등을 유발하기도 합니다.',
          lineB: '하지만 그것이 민주 사회의 건강한 징표입니다.',
          lineAVi: 'Sự đa nguyên hóa hệ giá trị đôi khi cũng làm phát sinh xung đột.',
          lineBVi: 'Thế nhưng đó lại chính là biểu hiện lành mạnh của một xã hội dân chủ.',
          lineAEn: 'Pluralization of values sometimes triggers conflicts.',
          lineBEn: 'However, that is a healthy hallmark of a democratic society.'
        },
        exercise: {
          questionKo: '사회 구성원의 생각과 삶의 방식이 여러 갈래로 다양해지는 현상은?',
          questionVi: 'Hiện tượng suy nghĩ và lối sống của thành viên xã hội trở nên đa dạng nhiều hướng là?',
          questionEn: 'Phenomenon of diversifying ways of life and values?',
          options: ['다원화', '획일화', '고령화', '도시화'],
          correctIndex: 0,
          explanation: '다원화 (Đa nguyên hóa) trái nghĩa với 획일화 (Đồng nhất hóa/Rập khuôn).'
        }
      }
    ],
    parallelSubtitles: [
      {
        id: 'sub_cc5_1',
        speaker: '교수 (Giáo sư)',
        ko: '산업화와 정보화를 거치며 한국 사회는 물질적 풍요를 얻은 반면, 공동체적 연대감의 약화라는 새로운 과제에 직면해 있습니다.',
        romaja: 'San-eop-hwa-wa jeong-bo-hwa-reul geo-chi-myeo Han-guk sa-hoe-neun mul-jil-jeok pung-yo-reul eot-eun ban-myeon, gong-dong-che-jeok yeon-dae-gam-ui yak-hwa-ra-neun sae-ro-un gwa-je-e jik-myeon-hae it-seum-ni-da.',
        vi: 'Trải qua quá trình công nghiệp hóa và thông tin hóa, xã hội Hàn Quốc một mặt đạt được sự sung túc vật chất, mặt khác lại đang đối mặt với bài toán mới về sự suy giảm tinh thần gắn kết cộng đồng.',
        en: 'Through industrialization and informatization, while Korean society achieved material affluence, it is simultaneously facing the new challenge of weakening communal solidarity.'
      }
    ],
    grammarPoints: [
      {
        name: '-는 반면에 (Trái lại / Mặt khác)',
        formula: 'Động từ + -는 반면에 | Tính từ + -(으)ㄴ 반면에',
        explanationVi: 'Diễn tả hai mặt đối lập hoặc trái ngược nhau của một sự vật, hiện tượng.',
        explanationEn: 'Used to express two contrasting aspects of a subject or event ("on the other hand").',
        examples: [
          { ko: '도시 생활은 편리한 반면에 스트레스가 많습니다.', vi: 'Cuộc sống đô thị tiện nghi mặt khác lại có nhiều căng thẳng.', en: 'While urban life is convenient, it carries a lot of stress.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_q1',
        question: 'Chọn từ trái nghĩa với "다원화" (Đa nguyên hóa):',
        options: ['획일화 (Đồng nhất/Rập khuôn)', '개인화', '세계화', '정보화'],
        correctIndex: 0,
        explanation: '획일화 (획일적) nghĩa là áp đặt đồng nhất một khuôn mẫu, trái ngược với đa nguyên hóa.'
      }
    ]
  }
];

export function getUnitsByLevel(levelId) {
  return UNITS.filter(u => u.levelId === levelId);
}

export function getUnitById(unitId) {
  return UNITS.find(u => u.id === unitId) || UNITS[0];
}

export function getLevelById(levelId) {
  return LEVELS.find(l => l.id === levelId) || LEVELS[0];
}
