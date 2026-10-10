// Danh sách đầy đủ 13 bài còn lại (Bài 3 đến Bài 15) của Sơ cấp 1
export const REMAINING_SC1_UNITS = [
  // ========== SƠ CẤP 1 - BÀI 3 ==========
  {
    id: 'sc1_u3',
    levelId: 'so_cap_1',
    unitNumber: 3,
    titleKo: '일상생활',
    titleVi: 'Bài 3: Sinh hoạt hàng ngày',
    titleEn: 'Unit 3: Daily Life',
    description: 'Học cách diễn đạt các hoạt động thường nhật và ngữ pháp -ㅂ/습니다, -ㅂ/습니까?, 을/를, 에서.',
    audioTrack: {
      trackName: 'Track 24 (Sơ cấp 1)',
      fileName: '024.mp3',
      audioUrl: '/audio/so-cap-1/024.mp3',
      duration: '01:50'
    },
    vocabulary: [
      {
        id: 'sc1_u3_w1',
        hangul: '자다',
        romaja: 'ja-da',
        type: 'Động từ',
        meaningVi: 'Ngủ',
        meaningEn: 'To sleep',
        example: { ko: '동생이 방에서 잡니다.', vi: 'Em ngủ ở trong phòng.', en: 'My younger sibling is sleeping in the room.' },
        dialogue: {
          speakerA: '민수', speakerB: '유나',
          lineA: '지금 잡니까?', lineB: '아니요, 책을 읽습니다.',
          lineAVi: 'Bây giờ bạn đang ngủ à?', lineBVi: 'Không, tôi đang đọc sách.',
          lineAEn: 'Are you sleeping now?', lineBEn: 'No, I am reading a book.'
        },
        exercise: {
          questionKo: '밤에 침대에서 하는 행동은?',
          questionVi: 'Hành động làm trên giường vào ban đêm là gì?',
          questionEn: 'Action you do in bed at night?',
          options: ['자다', '일하다', '운동하다', '공부하다'],
          correctIndex: 0,
          explanation: '자다 có nghĩa là ngủ.'
        }
      },
      {
        id: 'sc1_u3_w2',
        hangul: '밥',
        romaja: 'bap',
        type: 'Danh từ',
        meaningVi: 'Cơm / Bữa ăn',
        meaningEn: 'Cooked rice / Meal',
        example: { ko: '식당에서 밥을 먹습니다.', vi: 'Tôi ăn cơm ở nhà hàng.', en: 'I eat a meal at the restaurant.' },
        dialogue: {
          speakerA: '화', speakerB: '준영',
          lineA: '밥을 먹었습니까?', lineB: '네, 먹었습니다.',
          lineAVi: 'Bạn đã ăn cơm chưa?', lineBVi: 'Vâng, tôi đã ăn rồi.',
          lineAEn: 'Did you eat a meal?', lineBEn: 'Yes, I ate.'
        },
        exercise: {
          questionKo: '식당에서 무엇을 먹습니까?',
          questionVi: 'Ở quán ăn thì ăn cái gì?',
          questionEn: 'What do you eat at a restaurant?',
          options: ['밥', '책', '신문', '옷'],
          correctIndex: 0,
          explanation: '밥 có nghĩa là cơm / bữa ăn.'
        }
      },
      {
        id: 'sc1_u3_w3',
        hangul: '읽다',
        romaja: 'ik-da',
        type: 'Động từ',
        meaningVi: 'Đọc',
        meaningEn: 'To read',
        example: { ko: '도서관에서 책을 읽습니다.', vi: 'Tôi đọc sách ở thư viện.', en: 'I read books in the library.' },
        dialogue: {
          speakerA: '선생님', speakerB: '학생',
          lineA: '무엇을 합니까?', lineB: '한국어 책을 읽습니다.',
          lineAVi: 'Bạn đang làm gì vậy?', lineBVi: 'Tôi đang đọc sách tiếng Hàn.',
          lineAEn: 'What are you doing?', lineBEn: 'I am reading a Korean book.'
        },
        exercise: {
          questionKo: '책을 보다/______.',
          questionVi: 'Xem sách hay còn gọi là làm gì sách?',
          questionEn: 'Reading books is called?',
          options: ['읽다', '마시다', '자다', '사다'],
          correctIndex: 0,
          explanation: '읽다 có nghĩa là đọc.'
        }
      },
      {
        id: 'sc1_u3_w4',
        hangul: '마시다',
        romaja: 'ma-si-da',
        type: 'Động từ',
        meaningVi: 'Uống',
        meaningEn: 'To drink',
        example: { ko: '카페에서 커피를 마십니다.', vi: 'Tôi uống cà phê ở quán cà phê.', en: 'I drink coffee at the cafe.' },
        dialogue: {
          speakerA: '수빈', speakerB: '화',
          lineA: '차를 마십니까?', lineB: '네, 녹차를 마십니다.',
          lineAVi: 'Bạn uống trà phải không?', lineBVi: 'Vâng, tôi uống trà xanh.',
          lineAEn: 'Do you drink tea?', lineBEn: 'Yes, I drink green tea.'
        },
        exercise: {
          questionKo: '물이나 커피를 입으로 섭취하는 것은?',
          questionVi: 'Uống nước hay cà phê là hành động gì?',
          questionEn: 'To consume water or coffee?',
          options: ['마시다', '보다', '가다', '오다'],
          correctIndex: 0,
          explanation: '마시다 nghĩa là uống.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '수빈 씨, 지금 무엇을 합니까?', vi: 'Soobin ơi, bây giờ bạn đang làm gì đấy?', en: 'Soobin, what are you doing right now?' },
      { time: '00:08', ko: '저는 한국어를 공부합니다. 화 씨는요?', vi: 'Tôi đang học tiếng Hàn. Còn Hoa thì sao?', en: 'I am studying Korean. How about you, Hwa?' },
      { time: '00:18', ko: '저는 도서관에서 책을 읽습니다.', vi: 'Tôi đang đọc sách ở thư viện.', en: 'I am reading books in the library.' }
    ],
    grammarPoints: [
      {
        name: '-ㅂ/습니다 (Đuôi câu trần thuật trang trọng)',
        formula: 'Thân động/tính từ không có patchim + ㅂ니다 | có patchim + 습니다',
        explanationVi: 'Đuôi câu kính ngữ trang trọng, lịch sự nhất trong tiếng Hàn dùng trong ngữ cảnh nghiêm túc, thuyết trình, phát biểu.',
        explanationEn: 'Formal polite sentence ending. Used with verbs and adjectives.',
        examples: [
          { ko: '저는 밥을 먹습니다.', vi: 'Tôi ăn cơm.', en: 'I eat rice.' },
          { ko: '학교에 갑니다.', vi: 'Tôi đi đến trường.', en: 'I go to school.' }
        ]
      },
      {
        name: '을 / 를 (Tiểu từ tân ngữ)',
        formula: 'Có patchim + 을 | Không patchim + 를',
        explanationVi: 'Gắn sau danh từ chỉ đối tượng tiếp nhận trực tiếp của hành động.',
        explanationEn: 'Object marking particle attached to the direct object of an action verb.',
        examples: [
          { ko: '사과를 삽니다.', vi: 'Tôi mua táo.', en: 'I buy an apple.' },
          { ko: '책을 읽습니다.', vi: 'Tôi đọc sách.', en: 'I read a book.' }
        ]
      },
      {
        name: '에서 (Ở / Tại - Nơi diễn ra hành động)',
        formula: 'Địa điểm + 에서',
        explanationVi: 'Gắn sau danh từ chỉ địa điểm diễn ra một hành động cụ thể.',
        explanationEn: 'Location particle indicating where an action takes place.',
        examples: [
          { ko: '도서관에서 공부합니다.', vi: 'Học ở thư viện.', en: 'I study at the library.' },
          { ko: '집에서 쉽니다.', vi: 'Nghỉ ngơi ở nhà.', en: 'I rest at home.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u3_q1',
        question: 'Chọn trợ từ thích hợp: "저는 빵____ 먹습니다." (Tôi ăn bánh mì)',
        options: ['을', '를', '에서', '에'],
        correctIndex: 0,
        explanation: 'Từ 빵 có patchim ㅇ nên kết hợp với tiểu từ tân ngữ 을.'
      },
      {
        id: 'sc1_u3_q2',
        question: 'Chọn trợ từ: "도서관____ 공부합니다." (Học tại thư viện)',
        options: ['에서', '에', '을', '는'],
        correctIndex: 0,
        explanation: 'Diễn tả hành động diễn ra tại một địa điểm dùng tiểu từ 에서.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 4 ==========
  {
    id: 'sc1_u4',
    levelId: 'so_cap_1',
    unitNumber: 4,
    titleKo: '날짜와 요일',
    titleVi: 'Bài 4: Ngày và thứ',
    titleEn: 'Unit 4: Dates & Days of the Week',
    description: 'Nắm vững số từ Hán Hàn, cách nói ngày tháng năm, các ngày trong tuần và ngữ pháp 와/과, 에 (thời gian).',
    audioTrack: {
      trackName: 'Track 31 (Sơ cấp 1)',
      fileName: '031.mp3',
      audioUrl: '/audio/so-cap-1/031.mp3',
      duration: '02:00'
    },
    vocabulary: [
      {
        id: 'sc1_u4_w1',
        hangul: '오늘',
        romaja: 'o-neul',
        type: 'Danh từ',
        meaningVi: 'Hôm nay',
        meaningEn: 'Today',
        example: { ko: '오늘은 몇 월 며칠입니까?', vi: 'Hôm nay là ngày mấy tháng mấy?', en: 'What date is it today?' },
        dialogue: {
          speakerA: '민수', speakerB: '지훈',
          lineA: '오늘이 무슨 요일입니까?', lineB: '월요일입니다.',
          lineAVi: 'Hôm nay là thứ mấy?', lineBVi: 'Là thứ Hai.',
          lineAEn: 'What day is it today?', lineBEn: 'It is Monday.'
        },
        exercise: {
          questionKo: '지금 지나고 있는 이 날을 무엇이라고 합니까?',
          questionVi: 'Ngày hiện tại đang diễn ra gọi là gì?',
          questionEn: 'The present day is called?',
          options: ['오늘', '어제', '내일', '모레'],
          correctIndex: 0,
          explanation: '오늘 có nghĩa là hôm nay.'
        }
      },
      {
        id: 'sc1_u4_w2',
        hangul: '월요일',
        romaja: 'wol-yo-il',
        type: 'Danh từ',
        meaningVi: 'Thứ Hai',
        meaningEn: 'Monday',
        example: { ko: '월요일에 수업이 있습니다.', vi: 'Có tiết học vào thứ Hai.', en: 'There is class on Monday.' },
        dialogue: {
          speakerA: '화', speakerB: '수빈',
          lineA: '월요일에 만납시다.', lineB: '네, 좋습니다.',
          lineAVi: 'Thứ Hai chúng ta gặp nhau nhé.', lineBVi: 'Vâng, được ạ.',
          lineAEn: 'Let us meet on Monday.', lineBEn: 'Yes, sounds good.'
        },
        exercise: {
          questionKo: '한 주의 첫 번째 평일은?',
          questionVi: 'Ngày đầu tiên của tuần làm việc là?',
          questionEn: 'The first weekday of the week is?',
          options: ['월요일', '일요일', '토요일', '금요일'],
          correctIndex: 0,
          explanation: '월요일 là thứ Hai.'
        }
      },
      {
        id: 'sc1_u4_w3',
        hangul: '일요일',
        romaja: 'il-yo-il',
        type: 'Danh từ',
        meaningVi: 'Chủ Nhật',
        meaningEn: 'Sunday',
        example: { ko: '일요일에 집에서 쉽니다.', vi: 'Tôi nghỉ ngơi ở nhà vào Chủ Nhật.', en: 'I rest at home on Sunday.' },
        dialogue: {
          speakerA: '준영', speakerB: '화',
          lineA: '일요일에 무엇을 합니까?', lineB: '친구를 만납니다.',
          lineAVi: 'Chủ Nhật bạn làm gì?', lineBVi: 'Tôi gặp bạn bè.',
          lineAEn: 'What do you do on Sunday?', lineBEn: 'I meet my friends.'
        },
        exercise: {
          questionKo: '주말의 마지막 날은?',
          questionVi: 'Ngày cuối cùng của ngày cuối tuần là?',
          questionEn: 'The last day of the weekend is?',
          options: ['일요일', '화요일', '수요일', '목요일'],
          correctIndex: 0,
          explanation: '일요일 nghĩa là Chủ Nhật.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '오늘이 몇 월 며칠입니까?', vi: 'Hôm nay là ngày mấy tháng mấy?', en: 'What is the date today?' },
      { time: '00:07', ko: '10월 10일입니다. 그리고 금요일입니다.', vi: 'Là ngày 10 tháng 10. Và là thứ Sáu.', en: 'It is October 10th. And it is Friday.' }
    ],
    grammarPoints: [
      {
        name: 'Số từ Hán Hàn (한자어 숫자)',
        formula: '일 (1), 이 (2), 삼 (3), 사 (4), 오 (5), 육 (6), 칠 (7), 팔 (8), 구 (9), 십 (10)...',
        explanationVi: 'Dùng để đếm ngày tháng, năm, số phút, số tiền (won), số tầng, số điện thoại.',
        explanationEn: 'Sino-Korean numbers used for dates, minutes, money, telephone numbers.',
        examples: [
          { ko: '5월 15일 (오월 십오일)', vi: 'Ngày 15 tháng 5.', en: 'May 15th.' },
          { ko: '3층 (삼층)', vi: 'Tầng 3.', en: '3rd floor.' }
        ]
      },
      {
        name: '와 / 과 (Và / Với)',
        formula: 'Có patchim + 과 | Không patchim + 와',
        explanationVi: 'Liên từ nối hai danh từ lại với nhau trong câu.',
        explanationEn: 'Particle meaning \"and\" or \"with\", connecting two nouns.',
        examples: [
          { ko: '책과 공책', vi: 'Sách và vở.', en: 'Book and notebook.' },
          { ko: '사과와 바나나', vi: 'Táo và chuối.', en: 'Apple and banana.' }
        ]
      },
      {
        name: '에 (Tiểu từ thời gian)',
        formula: 'Thời gian + 에',
        explanationVi: 'Gắn sau danh từ chỉ thời điểm xảy ra hành động (vào lúc...). Không dùng sau các từ: 오늘, 어제, 내일, 지금.',
        explanationEn: 'Time particle indicating the time when an action takes place.',
        examples: [
          { ko: '일요일에 쉽니다.', vi: 'Tôi nghỉ ngơi vào Chủ Nhật.', en: 'I rest on Sunday.' },
          { ko: '두 시에 만납니다.', vi: 'Gặp nhau vào lúc 2 giờ.', en: 'Meet at two o\'clock.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u4_q1',
        question: 'Chọn từ nối đúng: "수박____ 딸기를 샀습니다." (Tôi đã mua dưa hấu và dâu tây)',
        options: ['과', '와', '에', '에서'],
        correctIndex: 0,
        explanation: 'Từ 수박 có patchim ㄱ nên dùng 과.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 5 ==========
  {
    id: 'sc1_u5',
    levelId: 'so_cap_1',
    unitNumber: 5,
    titleKo: '하루 일과',
    titleVi: 'Bài 5: Công việc trong ngày',
    titleEn: 'Unit 5: Daily Routine & Schedule',
    description: 'Học số từ thuần Hàn, nói giờ giấc, đuôi câu thân mật lịch sự -아/어요, 에 가다, phủ định 안.',
    audioTrack: {
      trackName: 'Track 41 (Sơ cấp 1)',
      fileName: '041.mp3',
      audioUrl: '/audio/so-cap-1/041.mp3',
      duration: '01:55'
    },
    vocabulary: [
      {
        id: 'sc1_u5_w1',
        hangul: '일어나다',
        romaja: 'i-reo-na-da',
        type: 'Động từ',
        meaningVi: 'Thức dậy',
        meaningEn: 'To wake up / get up',
        example: { ko: '아침 7시에 일어납니다.', vi: 'Tôi thức dậy lúc 7 giờ sáng.', en: 'I wake up at 7 AM.' },
        dialogue: {
          speakerA: '민수', speakerB: '지훈',
          lineA: '보통 몇 시에 일어나요?', lineB: '여섯 시 반에 일어나요.',
          lineAVi: 'Bình thường bạn thức dậy lúc mấy giờ?', lineBVi: 'Tôi thức dậy lúc 6 rưỡi.',
          lineAEn: 'What time do you usually wake up?', lineBEn: 'I wake up at 6:30.'
        },
        exercise: {
          questionKo: '아침에 잠에서 깨는 것은?',
          questionVi: 'Hành động thức giấc vào buổi sáng là?',
          questionEn: 'Waking up from sleep in the morning?',
          options: ['일어나다', '자다', '가다', '오다'],
          correctIndex: 0,
          explanation: '일어나다 nghĩa là thức dậy.'
        }
      },
      {
        id: 'sc1_u5_w2',
        hangul: '회사',
        romaja: 'hoe-sa',
        type: 'Danh từ',
        meaningVi: 'Công ty',
        meaningEn: 'Company / Office',
        example: { ko: '아침에 회사에 가요.', vi: 'Buổi sáng tôi đi đến công ty.', en: 'I go to the company in the morning.' },
        dialogue: {
          speakerA: '화', speakerB: '준영',
          lineA: '회사에 몇 시까지 가요?', lineB: '아홉 시까지 가요.',
          lineAVi: 'Bạn đến công ty trước mấy giờ?', lineBVi: 'Tôi đến trước 9 giờ.',
          lineAEn: 'By what time do you go to the company?', lineBEn: 'I go by 9 o\'clock.'
        },
        exercise: {
          questionKo: '회사원이 일하는 곳은?',
          questionVi: 'Nơi nhân viên văn phòng làm việc là?',
          questionEn: 'The workplace of an office worker is?',
          options: ['회사', '도서관', '공원', '수영장'],
          correctIndex: 0,
          explanation: '회사 nghĩa là công ty.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '지금 몇 시예요?', vi: 'Bây giờ là mấy giờ rồi?', en: 'What time is it now?' },
      { time: '00:05', ko: '오후 두 시 삼십 분이에요.', vi: 'Là 2 giờ 30 phút chiều.', en: 'It is 2:30 in the afternoon.' }
    ],
    grammarPoints: [
      {
        name: 'Đuôi câu thân mật lịch sự -아/어요',
        formula: 'Gốc nguyên âm ㅏ, ㅗ -> + 아요 | Các nguyên âm khác -> + 어요 | 하다 -> 해요',
        explanationVi: 'Đuôi câu phổ biến nhất trong đời sống giao tiếp hàng ngày của người Hàn Quốc, vừa lịch sự vừa gần gũi.',
        explanationEn: 'Polite informal sentence ending. Most widely used in daily conversation.',
        examples: [
          { ko: '밥을 먹어요.', vi: 'Tôi ăn cơm.', en: 'I eat rice.' },
          { ko: '영화를 봐요.', vi: 'Tôi xem phim.', en: 'I watch a movie.' },
          { ko: '공부해요.', vi: 'Tôi học bài.', en: 'I study.' }
        ]
      },
      {
        name: 'Phủ định 안 (Không)',
        formula: '안 + Động từ / Tính từ',
        explanationVi: 'Đặt trước động từ hoặc tính từ để biểu thị ý phủ định xuất phát từ ý chí chủ quan.',
        explanationEn: 'Short negative form meaning \"not / don\'t\". Placed directly before verbs or adjectives.',
        examples: [
          { ko: '아침을 안 먹어요.', vi: 'Tôi không ăn sáng.', en: 'I don\'t eat breakfast.' },
          { ko: '학교에 안 가요.', vi: 'Tôi không đến trường.', en: 'I don\'t go to school.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u5_q1',
        question: 'Chuyển động từ "가다" sang đuôi -아/어요:',
        options: ['가요', '가어요', '가해요', '가세요'],
        correctIndex: 0,
        explanation: '가다 có nguyên âm ㅏ nên kết hợp với 아요 thành 가요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 6 ==========
  {
    id: 'sc1_u6',
    levelId: 'so_cap_1',
    unitNumber: 6,
    titleKo: '주말',
    titleVi: 'Bài 6: Cuối tuần',
    titleEn: 'Unit 6: Weekend & Activities',
    description: 'Học cách nói về hoạt động thư giãn cuối tuần, thì quá khứ -았/었-, liên từ 하고, đuôi rủ rê -(으)ㅂ시다.',
    audioTrack: {
      trackName: 'Track 52 (Sơ cấp 1)',
      fileName: '052.mp3',
      audioUrl: '/audio/so-cap-1/052.mp3',
      duration: '02:05'
    },
    vocabulary: [
      {
        id: 'sc1_u6_w1',
        hangul: '영화',
        romaja: 'yeong-hwa',
        type: 'Danh từ',
        meaningVi: 'Bộ phim / Điện ảnh',
        meaningEn: 'Movie / Film',
        example: { ko: '주말에 극장에서 영화를 봤어요.', vi: 'Cuối tuần tôi đã xem phim ở rạp.', en: 'I watched a movie at the cinema on the weekend.' },
        dialogue: {
          speakerA: '민수', speakerB: '유나',
          lineA: '주말에 영화를 봤습니까?', lineB: '네, 한국 영화를 봤습니다.',
          lineAVi: 'Cuối tuần bạn đã xem phim à?', lineBVi: 'Vâng, tôi đã xem phim Hàn Quốc.',
          lineAEn: 'Did you watch a movie over the weekend?', lineBEn: 'Yes, I watched a Korean movie.'
        },
        exercise: {
          questionKo: '극장에서 상영하는 것은?',
          questionVi: 'Thứ được chiếu ở rạp chiếu phim là?',
          questionEn: 'What is screened at the cinema?',
          options: ['영화', '음악', '운동', '도서'],
          correctIndex: 0,
          explanation: '영화 nghĩa là bộ phim.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '주말에 무엇을 했어요?', vi: 'Cuối tuần bạn đã làm gì?', en: 'What did you do over the weekend?' },
      { time: '00:06', ko: '친구하고 쇼핑을 했어요. 참 재미있었어요.', vi: 'Tôi đã đi mua sắm cùng với bạn. Rất là vui.', en: 'I went shopping with a friend. It was so fun.' }
    ],
    grammarPoints: [
      {
        name: 'Thì quá khứ -았/었/였-',
        formula: 'Nguyên âm ㅏ, ㅗ + 았어요 | Khác + 었어요 | 하다 -> 했어요',
        explanationVi: 'Gắn vào thân động từ/tính từ để diễn đạt hành động hoặc trạng thái đã xảy ra trong quá khứ.',
        explanationEn: 'Past tense suffix. Attached to verbs and adjectives.',
        examples: [
          { ko: '어제 영화를 봤어요.', vi: 'Hôm qua tôi đã xem phim.', en: 'I watched a movie yesterday.' },
          { ko: '한국어를 공부했어요.', vi: 'Tôi đã học tiếng Hàn.', en: 'I studied Korean.' }
        ]
      },
      {
        name: 'Đuôi rủ rê -(으)ㅂ시다 (Hãy cùng...)',
        formula: 'Có patchim + 읍시다 | Không patchim + ㅂ시다',
        explanationVi: 'Dùng để đề nghị hoặc rủ rê người nghe cùng thực hiện một hành động (thường dùng giữa những người cùng trang lứa hoặc cấp trên nói với cấp dưới).',
        explanationEn: 'Let\'s ... (Propositive sentence ending).',
        examples: [
          { ko: '같이 밥을 먹읍시다.', vi: 'Hãy cùng đi ăn cơm nào.', en: 'Let\'s eat rice together.' },
          { ko: '도서관에 갑시다.', vi: 'Chúng ta hãy đến thư viện đi.', en: 'Let\'s go to the library.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u6_q1',
        question: 'Chia quá khứ cho "먹다":',
        options: ['먹었어요', '먹았어요', '먹해요', '먹습니다'],
        correctIndex: 0,
        explanation: '먹다 có nguyên âm ㅓ nên chia thì quá khứ thành 먹었어요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 7 ==========
  {
    id: 'sc1_u7',
    levelId: 'so_cap_1',
    unitNumber: 7,
    titleKo: '물건 사기 (1)',
    titleVi: 'Bài 7: Mua sắm (1)',
    titleEn: 'Unit 7: Shopping (1)',
    description: 'Học từ vựng mua bán, đơn vị tính, giản lược ㅡ, thể hiện mong muốn với -고 싶다.',
    audioTrack: {
      trackName: 'Track 63 (Sơ cấp 1)',
      fileName: '063.mp3',
      audioUrl: '/audio/so-cap-1/063.mp3',
      duration: '02:15'
    },
    vocabulary: [
      {
        id: 'sc1_u7_w1',
        hangul: '사과',
        romaja: 'sa-gwa',
        type: 'Danh từ',
        meaningVi: 'Quả táo',
        meaningEn: 'Apple',
        example: { ko: '사과 세 개 주세요.', vi: 'Cho tôi 3 quả táo nhé.', en: 'Please give me three apples.' },
        dialogue: {
          speakerA: '손님', speakerB: '주인',
          lineA: '사과 얼마예요?', lineB: '한 개에 천 원이에요.',
          lineAVi: 'Táo này bao nhiêu tiền một quả?', lineBVi: '1,000 won một quả.',
          lineAEn: 'How much is this apple?', lineBEn: 'It is 1,000 won each.'
        },
        exercise: {
          questionKo: '빨간색 과일은?',
          questionVi: 'Loại trái cây có màu đỏ là?',
          questionEn: 'Red fruit?',
          options: ['사과', '바나나', '우유', '물'],
          correctIndex: 0,
          explanation: '사과 nghĩa là quả táo.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '어서 오세요. 무엇을 드릴까요?', vi: 'Xin mời vào! Tôi có thể giúp gì cho quý khách?', en: 'Welcome. What can I get for you?' },
      { time: '00:07', ko: '사과 두 개하고 오렌지 세 개 주세요.', vi: 'Cho tôi 2 quả táo và 3 quả cam nhé.', en: 'Please give me two apples and three oranges.' }
    ],
    grammarPoints: [
      {
        name: '-고 싶다 (Muốn làm gì)',
        formula: 'Thân động từ + 고 싶다',
        explanationVi: 'Dùng để diễn tả ước muốn, nguyện vọng của người nói.',
        explanationEn: 'Grammar structure meaning \"want to (do something)\". Attached to verb stems.',
        examples: [
          { ko: '한국에 가고 싶어요.', vi: 'Tôi muốn đi Hàn Quốc.', en: 'I want to go to Korea.' },
          { ko: '커피를 마시고 싶어요.', vi: 'Tôi muốn uống cà phê.', en: 'I want to drink coffee.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u7_q1',
        question: 'Dịch câu: "Tôi muốn mua áo."',
        options: ['옷을 사고 싶어요.', '옷을 샀어요.', '옷을 사세요.', '옷을 안 사요.'],
        correctIndex: 0,
        explanation: 'Muốn làm gì dùng cấu trúc Động từ + 고 싶다 -> 사고 싶어요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 8 ==========
  {
    id: 'sc1_u8',
    levelId: 'so_cap_1',
    unitNumber: 8,
    titleKo: '음식',
    titleVi: 'Bài 8: Thức ăn',
    titleEn: 'Unit 8: Food & Dining',
    description: 'Ẩm thực Hàn Quốc, mùi vị món ăn, ngữ pháp -겠-, phủ định dài -지 않다, câu mệnh lệnh lịch sự -(으)세요.',
    audioTrack: {
      trackName: 'Track 73 (Sơ cấp 1)',
      fileName: '073.mp3',
      audioUrl: '/audio/so-cap-1/073.mp3',
      duration: '02:10'
    },
    vocabulary: [
      {
        id: 'sc1_u8_w1',
        hangul: '비빔밥',
        romaja: 'bi-bim-bap',
        type: 'Danh từ',
        meaningVi: 'Cơm trộn',
        meaningEn: 'Bibimbap (Mixed rice)',
        example: { ko: '한국 식당에서 비빔밥을 먹었어요.', vi: 'Tôi đã ăn cơm trộn ở nhà hàng Hàn Quốc.', en: 'I ate bibimbap at the Korean restaurant.' },
        dialogue: {
          speakerA: '직원', speakerB: '손님',
          lineA: '무엇을 드시겠어요?', lineB: '비빔밥 하나 주세요.',
          lineAVi: 'Quý khách dùng món gì ạ?', lineBVi: 'Cho tôi một bát cơm trộn.',
          lineAEn: 'What would you like to order?', lineBEn: 'One bibimbap, please.'
        },
        exercise: {
          questionKo: '여러 가지 나물과 밥을 비벼 먹는 한국 음식은?',
          questionVi: 'Món ăn Hàn Quốc trộn cơm với nhiều loại rau là?',
          questionEn: 'Korean food mixing vegetables and rice?',
          options: ['비빔밥', '김치', '커피', '라면'],
          correctIndex: 0,
          explanation: '비빔밥 là món cơm trộn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '여기 비빔밥 하나하고 불고기 하나 주세요.', vi: 'Ở đây cho một cơm trộn và một thịt nướng bulgogi nhé.', en: 'Please give us one bibimbap and one bulgogi here.' },
      { time: '00:08', ko: '맛있게 드세요!', vi: 'Chúc quý khách dùng bữa ngon miệng!', en: 'Bon appetit / Enjoy your meal!' }
    ],
    grammarPoints: [
      {
        name: '-(으)세요 (Xin hãy / Hãy...)',
        formula: 'Có patchim + 으세요 | Không patchim + 세요',
        explanationVi: 'Dùng để yêu cầu, sai khiến hoặc chỉ dẫn người nghe một cách trang trọng, lịch sự.',
        explanationEn: 'Imperative polite ending used to make requests or give directions politely.',
        examples: [
          { ko: '여기 앉으세요.', vi: 'Xin mời ngồi đây.', en: 'Please sit here.' },
          { ko: '한국어로 말하세요.', vi: 'Hãy nói bằng tiếng Hàn.', en: 'Please speak in Korean.' }
        ]
      },
      {
        name: 'Phủ định dài -지 않다 (Không...)',
        formula: 'Thân động/tính từ + 지 않다',
        explanationVi: 'Hình thức phủ định trang trọng hơn của \"안\".',
        explanationEn: 'Long-form negative grammar pattern meaning \"to not do / to not be\".',
        examples: [
          { ko: '저는 매운 음식을 먹지 않아요.', vi: 'Tôi không ăn thức ăn cay.', en: 'I do not eat spicy food.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u8_q1',
        question: 'Chọn câu mệnh lệnh đúng với từ "읽다":',
        options: ['읽으세요', '읽세요', '읽어요', '읽읍시다'],
        correctIndex: 0,
        explanation: '읽다 có patchim ㄺ nên kết hợp với 으세요 -> 읽으세요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 9 ==========
  {
    id: 'sc1_u9',
    levelId: 'so_cap_1',
    unitNumber: 9,
    titleKo: '집',
    titleVi: 'Bài 9: Nhà cửa',
    titleEn: 'Unit 9: House & Living',
    description: 'Từ vựng các phòng, đồ gia dụng, tiểu từ phương hướng -(으)로, đuôi rủ ý định -(으)ㄹ래요, trợ từ 도.',
    audioTrack: {
      trackName: 'Track 83 (Sơ cấp 1)',
      fileName: '083.mp3',
      audioUrl: '/audio/so-cap-1/083.mp3',
      duration: '02:00'
    },
    vocabulary: [
      {
        id: 'sc1_u9_w1',
        hangul: '거실',
        romaja: 'geo-sil',
        type: 'Danh từ',
        meaningVi: 'Phòng khách',
        meaningEn: 'Living room',
        example: { ko: '거실에 텔레비전이 있어요.', vi: 'Ở phòng khách có ti vi.', en: 'There is a TV in the living room.' },
        dialogue: {
          speakerA: '엄마', speakerB: '아이',
          lineA: '아빠는 어디에 계시니?', lineB: '거실에 계세요.',
          lineAVi: 'Bố đang ở đâu vậy con?', lineBVi: 'Bố đang ở phòng khách ạ.',
          lineAEn: 'Where is dad?', lineBEn: 'He is in the living room.'
        },
        exercise: {
          questionKo: '가족들이 모여 텔레비전을 보는 방은?',
          questionVi: 'Phòng nơi cả nhà tụ họp xem ti vi là?',
          questionEn: 'Room where family watches TV together?',
          options: ['거실', '화장실', '부엌', '베란다'],
          correctIndex: 0,
          explanation: '거실 nghĩa là phòng khách.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '우리 집에 놀러 올래요?', vi: 'Bạn có muốn sang nhà tôi chơi không?', en: 'Would you like to come over to my house?' },
      { time: '00:06', ko: '네, 좋아요. 이번 주말에 갈게요.', vi: 'Vâng, tốt quá. Cuối tuần này tôi sẽ qua.', en: 'Yes, I would love to. I will come this weekend.' }
    ],
    grammarPoints: [
      {
        name: '-(으)로 (Tiểu từ phương hướng / Phương tiện)',
        formula: 'Có patchim (trừ ㄹ) + 으로 | Không patchim hoặc patchim ㄹ + 로',
        explanationVi: 'Chỉ hướng đi về phía nào, hoặc bằng phương tiện/công cụ gì.',
        explanationEn: 'Direction or method particle meaning \"towards / by means of\".',
        examples: [
          { ko: '오른쪽으로 가세요.', vi: 'Xin hãy đi về phía bên phải.', en: 'Please go to the right.' }
        ]
      },
      {
        name: '-(으)ㄹ래요 (Hỏi ý kiến / Ý định)',
        formula: 'Có patchim + 을래요 | Không patchim + ㄹ래요',
        explanationVi: 'Dùng để hỏi ý muốn của đối phương hoặc thể hiện ý định của bản thân trong giao tiếp thân mật.',
        explanationEn: 'Intention/proposal ending used to ask the listener\'s preference.',
        examples: [
          { ko: '같이 커피 마실래요?', vi: 'Cùng uống cà phê nhé?', en: 'Would you like to drink coffee together?' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u9_q1',
        question: 'Điền tiểu từ: "집____ 오세요." (Hãy đi về phía nhà)',
        options: ['으로', '에', '에서', '을'],
        correctIndex: 0,
        explanation: '집 có patchim ㅂ nên dùng 으로.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 10 ==========
  {
    id: 'sc1_u10',
    levelId: 'so_cap_1',
    unitNumber: 10,
    titleKo: '가족',
    titleVi: 'Bài 10: Gia đình',
    titleEn: 'Unit 10: Family & Relatives',
    description: 'Từ vựng các thành viên trong gia đình, hệ thống kính ngữ 께서, -(으)시-, và giản lược ㄹ.',
    audioTrack: {
      trackName: 'Track 92 (Sơ cấp 1)',
      fileName: '092.mp3',
      audioUrl: '/audio/so-cap-1/092.mp3',
      duration: '02:20'
    },
    vocabulary: [
      {
        id: 'sc1_u10_w1',
        hangul: '부모님',
        romaja: 'bu-mo-nim',
        type: 'Danh từ',
        meaningVi: 'Bố mẹ / Phụ huynh',
        meaningEn: 'Parents',
        example: { ko: '부모님께서 베트남에 사세요.', vi: 'Bố mẹ tôi sống ở Việt Nam.', en: 'My parents live in Vietnam.' },
        dialogue: {
          speakerA: '지훈', speakerB: '화',
          lineA: '가족이 몇 명이에요?', lineB: '부모님과 저, 모두 세 명이에요.',
          lineAVi: 'Gia đình bạn có mấy người?', lineBVi: 'Bố mẹ và tôi, tất cả 3 người.',
          lineAEn: 'How many members are in your family?', lineBEn: 'Parents and me, three in total.'
        },
        exercise: {
          questionKo: '아버지와 어머니를 함께 부르는 말은?',
          questionVi: 'Từ gọi chung cả bố và mẹ là gì?',
          questionEn: 'Term for both father and mother?',
          options: ['부모님', '선생님', '동생', '친구'],
          correctIndex: 0,
          explanation: '부모님 có nghĩa là bố mẹ.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '할아버지께서는 연세가 어떻게 되세요?', vi: 'Ông của bạn năm nay bao nhiêu tuổi rồi?', en: 'How old is your grandfather?' },
      { time: '00:08', ko: '올해 일흔 살이세요. 건강하세요.', vi: 'Năm nay ông 70 tuổi. Ông vẫn rất khỏe mạnh.', en: 'He is 70 years old this year. He is very healthy.' }
    ],
    grammarPoints: [
      {
        name: 'Kính ngữ -(으)시-',
        formula: 'Gốc động/tính từ có patchim + 으시 | không patchim + 시',
        explanationVi: 'Chèn vào giữa thân từ và đuôi câu để thể hiện sự tôn kính với chủ ngữ là người lớn tuổi/cấp trên.',
        explanationEn: 'Honorific infix used to show respect toward the subject of the sentence.',
        examples: [
          { ko: '선생님께서 한국어를 가르치십니다.', vi: 'Thầy giáo dạy tiếng Hàn.', en: 'The teacher teaches Korean.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u10_q1',
        question: 'Dạng kính ngữ của "읽다" là:',
        options: ['읽으시다', '읽시다', '읽하십니다', '읽으세요'],
        correctIndex: 0,
        explanation: '읽다 có patchim nên kính ngữ nguyên thể là 읽으시다.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 11 ==========
  {
    id: 'sc1_u11',
    levelId: 'so_cap_1',
    unitNumber: 11,
    titleKo: '날씨',
    titleVi: 'Bài 11: Thời tiết',
    titleEn: 'Unit 11: Weather & Seasons',
    description: 'Từ vựng 4 mùa, thời tiết, liên từ nối -고, cấu trúc khoảng thời gian 부터 ~까지, thì tương lai -(으)ㄹ 거예요.',
    audioTrack: {
      trackName: 'Track 102 (Sơ cấp 1)',
      fileName: '102.mp3',
      audioUrl: '/audio/so-cap-1/102.mp3',
      duration: '02:00'
    },
    vocabulary: [
      {
        id: 'sc1_u11_w1',
        hangul: '날씨',
        romaja: 'nal-ssi',
        type: 'Danh từ',
        meaningVi: 'Thời tiết',
        meaningEn: 'Weather',
        example: { ko: '오늘 날씨가 정말 좋아요.', vi: 'Hôm nay thời tiết thật là đẹp.', en: 'The weather is really nice today.' },
        dialogue: {
          speakerA: '민수', speakerB: '수빈',
          lineA: '오늘 날씨가 어때요?', lineB: '비가 와요. 조금 추워요.',
          lineAVi: 'Thời tiết hôm nay thế nào?', lineBVi: 'Trời mưa. Hơi lạnh một chút.',
          lineAEn: 'How is the weather today?', lineBEn: 'It is raining. It is a bit cold.'
        },
        exercise: {
          questionKo: '비가 오거나 눈이 오는 자연 현상 상태는?',
          questionVi: 'Trạng thái tự nhiên nắng mưa gọi là gì?',
          questionEn: 'Rain, snow, natural conditions are called?',
          options: ['날씨', '시간', '휴일', '방학'],
          correctIndex: 0,
          explanation: '날씨 có nghĩa là thời tiết.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국의 겨울은 많이 춥습니까?', vi: 'Mùa đông của Hàn Quốc có lạnh lắm không?', en: 'Is winter in Korea very cold?' },
      { time: '00:07', ko: '네, 눈이 오고 바람도 많이 불어요.', vi: 'Vâng, trời có tuyết rơi và gió cũng thổi nhiều.', en: 'Yes, it snows and is very windy.' }
    ],
    grammarPoints: [
      {
        name: 'Thì tương lai -(으)ㄹ 거예요',
        formula: 'Có patchim + 을 거예요 | Không patchim + ㄹ 거예요',
        explanationVi: 'Diễn tả kế hoạch hoặc dự đoán về một việc sẽ xảy ra trong tương lai.',
        explanationEn: 'Future tense indicating plan or probability (will / going to).',
        examples: [
          { ko: '내일 비가 올 거예요.', vi: 'Ngày mai trời sẽ mưa.', en: 'It will rain tomorrow.' }
        ]
      },
      {
        name: '부터 ~ 까지 (Từ... đến... - Thời gian)',
        formula: 'Thời gian bắt đầu + 부터 + Thời gian kết thúc + 까지',
        explanationVi: 'Chỉ mốc thời gian bắt đầu và kết thúc của một hành động.',
        explanationEn: 'Time boundary particle meaning \"from (time) until (time)\".',
        examples: [
          { ko: '아홉 시부터 다섯 시까지 일해요.', vi: 'Làm việc từ 9 giờ đến 5 giờ.', en: 'I work from 9 to 5.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u11_q1',
        question: 'Dịch: "Ngày mai tôi sẽ học bài."',
        options: ['내일 공부할 거예요.', '내일 공부했어요.', '내일 공부하세요.', '내일 공부합시다.'],
        correctIndex: 0,
        explanation: 'Thì tương lai dùng -(으)ㄹ 거예요 -> 공부할 거예요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 12 ==========
  {
    id: 'sc1_u12',
    levelId: 'so_cap_1',
    unitNumber: 12,
    titleKo: '전화 (1)',
    titleVi: 'Bài 12: Điện thoại (1)',
    titleEn: 'Unit 12: Phone Calls (1)',
    description: 'Kỹ năng nghe gọi điện thoại, trợ từ tặng nhận 에게/한테/께, liên từ nhưng -지만, dự định -(으)려고 하다.',
    audioTrack: {
      trackName: 'Track 112 (Sơ cấp 1)',
      fileName: '112.mp3',
      audioUrl: '/audio/so-cap-1/112.mp3',
      duration: '02:15'
    },
    vocabulary: [
      {
        id: 'sc1_u12_w1',
        hangul: '전화',
        romaja: 'jeon-hwa',
        type: 'Danh từ',
        meaningVi: 'Điện thoại / Cuộc gọi',
        meaningEn: 'Phone / Telephone',
        example: { ko: '친구에게 전화를 걸어요.', vi: 'Tôi gọi điện thoại cho bạn.', en: 'I make a phone call to a friend.' },
        dialogue: {
          speakerA: '화', speakerB: '준영',
          lineA: '여보세요? 준영 씨 있어요?', lineB: '네, 접니다. 화 씨예요?',
          lineAVi: 'A-lô? Có anh Junyoung ở đó không ạ?', lineBVi: 'Vâng, tôi đây. Hoa đấy à?',
          lineAEn: 'Hello? Is Junyoung there?', lineBEn: 'Yes, this is he. Is that Hwa?'
        },
        exercise: {
          questionKo: '전화를 받을 때 하는 한국어 인사는?',
          questionVi: 'Lời chào tiếng Hàn khi nhấc máy nghe điện thoại là gì?',
          questionEn: 'Korean greeting when answering the phone?',
          options: ['여보세요', '안녕하세요', '반갑습니다', '안녕히 가세요'],
          correctIndex: 0,
          explanation: '여보세요 là từ A-lô trong tiếng Hàn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '여보세요? 거기 한국대학교지요?', vi: 'A-lô? Có phải trường Đại học Hàn Quốc đó không ạ?', en: 'Hello? Is that Korea University?' },
      { time: '00:07', ko: '네, 맞습니다. 누구를 찾으십니까?', vi: 'Vâng, đúng rồi ạ. Bạn tìm ai vậy?', en: 'Yes, that is correct. Whom are you looking for?' }
    ],
    grammarPoints: [
      {
        name: '에게 / 한테 / 께 (Cho / Đến / Với ai)',
        formula: 'Danh từ chỉ người + 에게 (viết/lịch sự) / 한테 (nói thường) / 께 (kính ngữ)',
        explanationVi: 'Chỉ đối tượng tiếp nhận hành động (tặng cho ai, nói với ai, gửi cho ai).',
        explanationEn: 'Dative particles meaning \"to / for somebody\".',
        examples: [
          { ko: '친구한테 선물을 줘요.', vi: 'Tặng quà cho bạn bè.', en: 'Give a gift to a friend.' },
          { ko: '선생님께 편지를 드려요.', vi: 'Gửi thư kính biếu thầy giáo.', en: 'Give a letter to the teacher.' }
        ]
      },
      {
        name: '-지만 (Nhưng / Mặc dù)',
        formula: 'Thân động/tính từ + 지만',
        explanationVi: 'Liên từ nối hai vế câu có ý nghĩa tương phản, đối lập.',
        explanationEn: 'Conjunctive ending meaning \"but / although\".',
        examples: [
          { ko: '한국어는 어렵지만 재미있어요.', vi: 'Tiếng Hàn khó nhưng rất thú vị.', en: 'Korean is hard but interesting.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u12_q1',
        question: 'Chọn tiểu từ kính ngữ dành cho bố mẹ: "부모님____ 선물을 드려요."',
        options: ['께', '에게', '한테', '에서'],
        correctIndex: 0,
        explanation: 'Với đối tượng tôn kính bề trên dùng tiểu từ 께.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 13 ==========
  {
    id: 'sc1_u13',
    levelId: 'so_cap_1',
    unitNumber: 13,
    titleKo: '생일',
    titleVi: 'Bài 13: Sinh nhật',
    titleEn: 'Unit 13: Birthday & Celebrations',
    description: 'Chúc mừng sinh nhật, nguyên nhân -아/어서, câu hỏi ý kiến -(으)ㄹ까요?, phó từ phủ định 못.',
    audioTrack: {
      trackName: 'Track 122 (Sơ cấp 1)',
      fileName: '122.mp3',
      audioUrl: '/audio/so-cap-1/122.mp3',
      duration: '02:00'
    },
    vocabulary: [
      {
        id: 'sc1_u13_w1',
        hangul: '생일',
        romaja: 'saeng-il',
        type: 'Danh từ',
        meaningVi: 'Sinh nhật',
        meaningEn: 'Birthday',
        example: { ko: '생일 축하합니다!', vi: 'Chúc mừng sinh nhật!', en: 'Happy birthday!' },
        dialogue: {
          speakerA: '민수', speakerB: '지훈',
          lineA: '생일이 언제예요?', lineB: '12월 25일이에요.',
          lineAVi: 'Sinh nhật bạn là khi nào?', lineBVi: 'Là ngày 25 tháng 12.',
          lineAEn: 'When is your birthday?', lineBEn: 'It is December 25th.'
        },
        exercise: {
          questionKo: '태어난 날을 축하하는 기념일은?',
          questionVi: 'Ngày kỷ niệm chúc mừng ngày chào đời là?',
          questionEn: 'Celebration of the day you were born?',
          options: ['생일', '휴일', '설날', '추석'],
          correctIndex: 0,
          explanation: '생일 là ngày sinh nhật.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '수빈 씨 생일 파티에 같이 갈까요?', vi: 'Chúng ta cùng đi đến tiệc sinh nhật của Soobin nhé?', en: 'Shall we go to Soobin\'s birthday party together?' },
      { time: '00:07', ko: '미안해요. 시험이 있어서 못 가요.', vi: 'Xin lỗi nhé. Vì có kỳ thi nên tôi không thể đi được.', en: 'Sorry. I cannot go because I have an exam.' }
    ],
    grammarPoints: [
      {
        name: 'Vì... nên... (-아/어서)',
        formula: 'Nguyên âm ㅏ, ㅗ + 아서 | Khác + 어서 | 하다 -> 해서',
        explanationVi: 'Liên từ nối chỉ lý do, nguyên nhân dẫn đến kết quả ở vế sau.',
        explanationEn: 'Cause and reason connector meaning \"because / so\".',
        examples: [
          { ko: '배가 고파서 밥을 먹었어요.', vi: 'Vì đói bụng nên tôi đã ăn cơm.', en: 'Because I was hungry, I ate.' }
        ]
      },
      {
        name: 'Phủ định bất khả năng 못 (Không thể)',
        formula: '못 + Động từ',
        explanationVi: 'Đứng trước động từ biểu thị người nói không có khả năng hoặc do hoàn cảnh khách quan ngăn cản.',
        explanationEn: 'Negative adverb meaning \"cannot\". Indicates lack of ability or circumstantial limitation.',
        examples: [
          { ko: '수영을 못해요.', vi: 'Tôi không thể bơi được.', en: 'I cannot swim.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u13_q1',
        question: 'Điền từ phủ định chỉ hoàn cảnh không thể đi: "다리가 아파서 학교에 ____ 가요."',
        options: ['못', '안', '지', '마'],
        correctIndex: 0,
        explanation: 'Do hoàn cảnh đau chân không thể đi được nên dùng phó từ 못.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 14 ==========
  {
    id: 'sc1_u14',
    levelId: 'so_cap_1',
    unitNumber: 14,
    titleKo: '취미',
    titleVi: 'Bài 14: Sở thích',
    titleEn: 'Unit 14: Hobbies & Leisure',
    description: 'Chủ đề thể thao, giải trí, cấu trúc có thể/không thể -(으)ㄹ 수 있다/없다, danh từ hóa -기, bất quy tắc ㄷ.',
    audioTrack: {
      trackName: 'Track 135 (Sơ cấp 1)',
      fileName: '135.mp3',
      audioUrl: '/audio/so-cap-1/135.mp3',
      duration: '02:10'
    },
    vocabulary: [
      {
        id: 'sc1_u14_w1',
        hangul: '취미',
        romaja: 'chwi-mi',
        type: 'Danh từ',
        meaningVi: 'Sở thích',
        meaningEn: 'Hobby',
        example: { ko: '제 취미는 음악 감상이에요.', vi: 'Sở thích của tôi là nghe nhạc.', en: 'My hobby is listening to music.' },
        dialogue: {
          speakerA: '화', speakerB: '민수',
          lineA: '민수 씨는 취미가 뭐예요?', lineB: '축구하기예요.',
          lineAVi: 'Sở thích của Minsu là gì?', lineBVi: 'Là chơi bóng đá.',
          lineAEn: 'What is your hobby, Minsu?', lineBEn: 'It is playing soccer.'
        },
        exercise: {
          questionKo: '여가 시간에 즐겨 하는 활동을 무엇이라고 합니까?',
          questionVi: 'Hoạt động thích làm vào thời gian rảnh gọi là gì?',
          questionEn: 'Activity enjoyed in leisure time?',
          options: ['취미', '숙제', '시험', '청소'],
          correctIndex: 0,
          explanation: '취미 nghĩa là sở thích.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국 노래를 부를 수 있어요?', vi: 'Bạn có thể hát bài hát tiếng Hàn được không?', en: 'Can you sing Korean songs?' },
      { time: '00:07', ko: '네, 조금 부를 수 있어요.', vi: 'Vâng, tôi có thể hát được một chút.', en: 'Yes, I can sing a little bit.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 수 있다 / 없다 (Có thể / Không thể làm gì)',
        formula: 'Có patchim + 을 수 있다/없다 | Không patchim + ㄹ 수 있다/없다',
        explanationVi: 'Diễn tả năng lực, khả năng có thể hoặc không thể làm một việc gì đó.',
        explanationEn: 'Grammar structure expressing ability or possibility (can / cannot).',
        examples: [
          { ko: '한국어를 읽을 수 있어요.', vi: 'Tôi có thể đọc được tiếng Hàn.', en: 'I can read Korean.' },
          { ko: '운전을 할 수 없어요.', vi: 'Tôi không thể lái xe.', en: 'I cannot drive.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u14_q1',
        question: 'Chọn cấu trúc: "Tôi có thể lái xe" (운전하다):',
        options: ['운전할 수 있어요', '운전할 수 없어요', '운전해야 돼요', '운전하고 싶어요'],
        correctIndex: 0,
        explanation: 'Khả năng có thể làm gì dùng -(으)ㄹ 수 있어요 -> 운전할 수 있어요.'
      }
    ]
  },

  // ========== SƠ CẤP 1 - BÀI 15 ==========
  {
    id: 'sc1_u15',
    levelId: 'so_cap_1',
    unitNumber: 15,
    titleKo: '교통 (1)',
    titleVi: 'Bài 15: Giao thông (1)',
    titleEn: 'Unit 15: Transportation (1)',
    description: 'Từ vựng phương tiện di chuyển, khoảng cách địa điểm 에서 ~까지, đi bằng xe gì (으)로, mục đích -(으)러 가다.',
    audioTrack: {
      trackName: 'Track 143 (Sơ cấp 1)',
      fileName: '143.mp3',
      audioUrl: '/audio/so-cap-1/143.mp3',
      duration: '02:25'
    },
    vocabulary: [
      {
        id: 'sc1_u15_w1',
        hangul: '지하철',
        romaja: 'ji-ha-cheol',
        type: 'Danh từ',
        meaningVi: 'Tàu điện ngầm',
        meaningEn: 'Subway / Metro',
        example: { ko: '서울에서 지하철을 타요.', vi: 'Tôi đi tàu điện ngầm ở Seoul.', en: 'I take the subway in Seoul.' },
        dialogue: {
          speakerA: '화', speakerB: '지훈',
          lineA: '학교에 어떻게 가요?', lineB: '지하철로 가요.',
          lineAVi: 'Bạn đi đến trường bằng phương tiện gì?', lineBVi: 'Tôi đi bằng tàu điện ngầm.',
          lineAEn: 'How do you go to school?', lineBEn: 'I go by subway.'
        },
        exercise: {
          questionKo: '땅 밑으로 다니는 기차는?',
          questionVi: 'Loại tàu chạy ngầm dưới lòng đất là?',
          questionEn: 'Train that runs underground?',
          options: ['지하철', '비행기', '자전거', '배'],
          correctIndex: 0,
          explanation: '지하철 nghĩa là tàu điện ngầm.'
        }
      },
      {
        id: 'sc1_u15_w2',
        hangul: '버스',
        romaja: 'beo-seu',
        type: 'Danh từ',
        meaningVi: 'Xe buýt',
        meaningEn: 'Bus',
        example: { ko: '집 앞에서 버스를 타요.', vi: 'Tôi đón xe buýt ở trước nhà.', en: 'I take the bus in front of the house.' },
        dialogue: {
          speakerA: '수빈', speakerB: '준영',
          lineA: '몇 번 버스를 타요?', lineB: '150번 버스를 타요.',
          lineAVi: 'Bạn đi xe buýt số mấy?', lineBVi: 'Tôi đi xe buýt số 150.',
          lineAEn: 'Which bus number do you take?', lineBEn: 'I take bus number 150.'
        },
        exercise: {
          questionKo: '대중교통 정류장에서 타는 큰 차는?',
          questionVi: 'Phương tiện công cộng đón ở trạm dừng là?',
          questionEn: 'Public vehicle taken at bus stops?',
          options: ['버스', '비행기', '택시', '자전거'],
          correctIndex: 0,
          explanation: '버스 là xe buýt.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '여기에서 공항까지 얼마나 걸려요?', vi: 'Từ đây đến sân bay mất bao lâu?', en: 'How long does it take from here to the airport?' },
      { time: '00:08', ko: '지하철로 1시간쯤 걸려요.', vi: 'Đi bằng tàu điện ngầm mất khoảng 1 tiếng.', en: 'It takes about 1 hour by subway.' }
    ],
    grammarPoints: [
      {
        name: '에서 ~ 까지 (Từ... đến... - Khoảng cách địa điểm)',
        formula: 'Địa điểm xuất phát + 에서 + Địa điểm đích + 까지',
        explanationVi: 'Biểu thị phạm vi không gian từ điểm khởi hành tới điểm kết thúc.',
        explanationEn: 'Spatial boundary particle meaning \"from (place) to (place)\".',
        examples: [
          { ko: '집에서 학교까지 걸어가요.', vi: 'Đi bộ từ nhà đến trường.', en: 'I walk from home to school.' }
        ]
      },
      {
        name: '-(으)러 가다/오다 (Đi/đến để làm gì)',
        formula: 'Có patchim + 으러 가다 | Không patchim + 러 가다',
        explanationVi: 'Diễn tả mục đích di chuyển đến một nơi nào đó nhằm thực hiện một hành động.',
        explanationEn: 'Purpose connector attached to verb stems meaning \"to go/come in order to do\".',
        examples: [
          { ko: '밥을 먹으러 식당에 가요.', vi: 'Đi đến nhà hàng để ăn cơm.', en: 'I go to the restaurant to eat.' },
          { ko: '공부하러 도서관에 와요.', vi: 'Đến thư viện để học bài.', en: 'I come to the library to study.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc1_u15_q1',
        question: 'Dịch câu mục đích: "Tôi đi đến rạp chiếu phim để xem phim."',
        options: ['영화를 보러 극장에 가요.', '영화를 보고 극장에 가요.', '영화를 봐서 극장에 가요.', '영화를 볼 극장에 가요.'],
        correctIndex: 0,
        explanation: 'Đi để làm gì dùng cấu trúc Động từ + (으)러 가다 -> 보러 극장에 가요.'
      }
    ]
  }
];
