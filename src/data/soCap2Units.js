// Dữ liệu 15 bài học Sơ cấp 2 (초급 2) theo Giáo trình Tiếng Hàn Tổng Hợp
export const SO_CAP_2_UNITS = [
  {
    id: 'sc2_u1',
    levelId: 'so_cap_2',
    unitNumber: 1,
    titleKo: '만남',
    titleVi: 'Bài 1: Gặp gỡ',
    titleEn: 'Unit 1: Meeting & Reunion',
    description: 'Học cách hỏi thăm tình hình, nói về thời gian trôi qua, ngữ pháp Danh từ + 의, -(으)ㄹ 때, -아/어 주다.',
    audioTrack: {
      trackName: 'Track 01 (Sơ cấp 2)',
      fileName: '001.mp3',
      audioUrl: '/audio/so-cap-2/001.mp3',
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
        example: { ko: '민수 씨, 정말 오랜만입니다!', vi: 'Min-soo à, thật lâu lắm rồi không gặp!', en: 'Min-soo, long time no see indeed!' },
        dialogue: {
          speakerA: '유나', speakerB: '민수',
          lineA: '오랜만이에요! 잘 지냈어요?', lineB: '네, 유나 씨도 잘 지냈어요?',
          lineAVi: 'Lâu rồi không gặp! Cậu khỏe không?', lineBVi: 'Tớ khỏe, Yuna cũng khỏe chứ?',
          lineAEn: 'Long time no see! Have you been well?', lineBEn: 'Yes, how about you, Yuna?'
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
        type: 'Danh từ',
        meaningVi: 'Tin tức / Tin tức người quen',
        meaningEn: 'News / Updates',
        example: { ko: '친구의 소식을 들었습니다.', vi: 'Tôi đã nghe tin tức của bạn mình.', en: 'I heard news about my friend.' },
        dialogue: {
          speakerA: '민우', speakerB: '지훈',
          lineA: '그 사람 소식 들었어요?', lineB: '아니요, 연락이 없었어요.',
          lineAVi: 'Cậu có nghe tin gì về người đó không?', lineBVi: 'Không, không có liên lạc gì cả.',
          lineAEn: 'Did you hear any news about him?', lineBEn: 'No, there was no contact.'
        },
        exercise: {
          questionKo: '안부나 상황을 알리는 말은?',
          questionVi: 'Từ dùng để chỉ tin tức, tình hình của ai đó là?',
          questionEn: 'Word meaning news or updates about someone?',
          options: ['소식', '음식', '상식', '휴식'],
          correctIndex: 0,
          explanation: '소식 (消息) nghĩa là tin tức, tin nhạn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '민수 씨, 정말 오랜만입니다! 그동안 잘 지내셨어요?', vi: 'Min-soo à, thật là lâu lắm rồi không gặp! Dạo này cậu vẫn khỏe chứ?', en: 'Min-soo, long time no see! Have you been doing well all this time?' },
      { time: '00:08', ko: '네, 덕분에 잘 지냈어요. 유나 씨는 요즘 어떻게 지내세요?', vi: 'Ừ, nhờ cậu tớ vẫn khỏe. Dạo này Yuna sống thế nào rồi?', en: 'Yes, thanks to you I have been well. How have you been spending your days lately, Yuna?' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 때 (Khi / Lúc làm gì)',
        formula: 'Có patchim + 을 때 | Không patchim + ㄹ 때',
        explanationVi: 'Diễn tả thời điểm diễn ra một hành vi hoặc trạng thái.',
        explanationEn: 'Expresses the time when an action or state occurs (when / while).',
        examples: [
          { ko: '시간이 있을 때 운동해요.', vi: 'Khi có thời gian tôi tập thể dục.', en: 'When I have time, I exercise.' }
        ]
      },
      {
        name: '-아/어 주다 (Làm cho ai việc gì)',
        formula: 'Nguyên âm ㅏ, ㅗ + 아 주다 | Khác + 어 주다',
        explanationVi: 'Biểu thị việc người nói làm một hành động vì lợi ích của người khác hoặc nhờ người khác làm giúp mình.',
        explanationEn: 'Indicates performing an action for someone else\'s benefit.',
        examples: [
          { ko: '문 좀 열어 주세요.', vi: 'Xin hãy mở cửa giúp tôi với.', en: 'Please open the door for me.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u1_q1',
        question: 'Chọn dạng đúng: "밥을 ____ 전화가 왔어요." (Lúc đang ăn cơm thì điện thoại reo)',
        options: ['먹을 때', '먹고', '먹으면', '먹어서'],
        correctIndex: 0,
        explanation: 'Khi/Lúc làm gì dùng cấu trúc -(으)ㄹ 때 -> 먹을 때.'
      }
    ]
  },
  {
    id: 'sc2_u2',
    levelId: 'so_cap_2',
    unitNumber: 2,
    titleKo: '약속',
    titleVi: 'Bài 2: Hẹn gặp',
    titleEn: 'Unit 2: Appointments & Promises',
    description: 'Từ vựng lên lịch hẹn, ngữ pháp 만 (chỉ), -(으)니까 (vì nên), -지 말다 (đừng), -아/어도 되다 (được phép).',
    audioTrack: { trackName: 'Track 10 (Sơ cấp 2)', fileName: '010.mp3', audioUrl: '/audio/so-cap-2/010.mp3', duration: '02:10' },
    vocabulary: [
      {
        id: 'sc2_u2_w1',
        hangul: '약속',
        romaja: 'yak-sok',
        type: 'Danh từ',
        meaningVi: 'Cuộc hẹn / Lời hứa',
        meaningEn: 'Appointment / Promise',
        example: { ko: '오늘 친구와 약속이 있습니다.', vi: 'Hôm nay tôi có hẹn với bạn.', en: 'I have an appointment with a friend today.' },
        dialogue: {
          speakerA: '지훈', speakerB: '수빈',
          lineA: '내일 약속 있어요?', lineB: '아니요, 내일은 약속 없어요.',
          lineAVi: 'Ngày mai bạn có hẹn gì không?', lineBVi: 'Không, ngày mai mình không có hẹn.',
          lineAEn: 'Do you have plans tomorrow?', lineBEn: 'No, I have no plans tomorrow.'
        },
        exercise: {
          questionKo: '다른 사람과 시간과 장소를 정해 만나기로 하는 것은?',
          questionVi: 'Việc ấn định thời gian và địa điểm gặp gỡ người khác là?',
          questionEn: 'Agreement to meet someone at a specific time and place?',
          options: ['약속', '선물', '편지', '휴가'],
          correctIndex: 0,
          explanation: '약속 nghĩa là cuộc hẹn / lời hứa.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이번 주 토요일에 만날 수 있어요?', vi: 'Thứ Bảy tuần này chúng ta có thể gặp nhau được không?', en: 'Can we meet this Saturday?' },
      { time: '00:06', ko: '토요일은 바쁘니까 일요일에 만나요.', vi: 'Vì thứ Bảy tôi bận nên hãy gặp vào Chủ Nhật nhé.', en: 'Since I am busy on Saturday, let us meet on Sunday.' }
    ],
    grammarPoints: [
      {
        name: '-(으)니까 (Vì... nên... - Lý do chủ quan/Đề nghị)',
        formula: 'Có patchim + 으니까 | Không patchim + 니까',
        explanationVi: 'Chỉ lý do, vế sau thường là câu mệnh lệnh hoặc rủ rê.',
        explanationEn: 'Expresses cause or reason, frequently used with imperatives and propositives.',
        examples: [
          { ko: '날씨가 좋으니까 밖으로 나갑시다.', vi: 'Vì thời tiết đẹp nên hãy ra ngoài thôi.', en: 'Since the weather is nice, let us go outside.' }
        ]
      },
      {
        name: '-지 말다 (Đừng làm gì)',
        formula: 'Thân động từ + 지 마세요 / 지 맙시다',
        explanationVi: 'Dùng để cấm đoán hoặc khuyên can không nên làm việc gì.',
        explanationEn: 'Imperative/propositive negative ending meaning \"do not / let\'s not\".',
        examples: [
          { ko: '여기에서 담배를 피우지 마세요.', vi: 'Xin đừng hút thuốc ở đây.', en: 'Please do not smoke here.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u2_q1',
        question: 'Chọn câu khuyên ngăn: "Xin đừng lo lắng!" (걱정하다)',
        options: ['걱정하지 마세요', '걱정하세요', '걱정해도 돼요', '걱정하니까요'],
        correctIndex: 0,
        explanation: 'Đừng làm gì dùng cấu trúc -지 마세요 -> 걱정하지 마세요.'
      }
    ]
  },
  {
    id: 'sc2_u3',
    levelId: 'so_cap_2',
    unitNumber: 3,
    titleKo: '물건 사기 (2)',
    titleVi: 'Bài 3: Mua sắm (2)',
    titleEn: 'Unit 3: Shopping (2)',
    description: 'Từ vựng cửa hàng, so sánh với 보다, định ngữ tính từ -(으)ㄴ, định ngữ động từ hiện tại -는.',
    audioTrack: { trackName: 'Track 19 (Sơ cấp 2)', fileName: '019.mp3', audioUrl: '/audio/so-cap-2/019.mp3', duration: '02:15' },
    vocabulary: [
      {
        id: 'sc2_u3_w1',
        hangul: '할인',
        romaja: 'hal-in',
        type: 'Danh từ',
        meaningVi: 'Giảm giá / Chiết khấu',
        meaningEn: 'Discount',
        example: { ko: '이 옷은 20% 할인해요.', vi: 'Chiếc áo này được giảm giá 20%.', en: 'This shirt is discounted 20%.' },
        dialogue: {
          speakerA: '손님', speakerB: '직원',
          lineA: '이 바지는 세일해요?', lineB: '네, 지금 할인 중입니다.',
          lineAVi: 'Quần này có giảm giá không ạ?', lineBVi: 'Vâng, hiện đang trong đợt giảm giá ạ.',
          lineAEn: 'Is these pants on sale?', lineBEn: 'Yes, it is currently discounted.'
        },
        exercise: {
          questionKo: '물건 값을 깎아 주는 것은?',
          questionVi: 'Việc bớt giá sản phẩm gọi là gì?',
          questionEn: 'Reducing the price of goods?',
          options: ['할인', '포장', '교환', '환불'],
          correctIndex: 0,
          explanation: '할인 (割引) nghĩa là giảm giá.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이 코트가 저 코트보다 더 예뻐요.', vi: 'Chiếc áo khoác này đẹp hơn chiếc áo khoác đằng kia.', en: 'This coat is prettier than that coat.' },
      { time: '00:07', ko: '네, 그리고 요즘 인기 있는 디자인이에요.', vi: 'Vâng, vả lại đây là mẫu thiết kế đang rất được ưa chuộng dạo này.', en: 'Yes, and it is a popular design these days.' }
    ],
    grammarPoints: [
      {
        name: '보다 (Hơn / So với)',
        formula: 'Danh từ + 보다 (더)',
        explanationVi: 'Đặt sau danh từ làm chuẩn so sánh.',
        explanationEn: 'Comparison particle meaning \"than / compared to\".',
        examples: [
          { ko: '비행기가 기차보다 빨라요.', vi: 'Máy bay nhanh hơn tàu hỏa.', en: 'Airplanes are faster than trains.' }
        ]
      },
      {
        name: 'Định ngữ hiện tại -는 / -(으)ㄴ',
        formula: 'Động từ + 는 + Danh từ | Tính từ + (으)ㄴ + Danh từ',
        explanationVi: 'Biến mệnh đề thành định ngữ bổ nghĩa cho danh từ phía sau.',
        explanationEn: 'Adnominal ending modifying nouns.',
        examples: [
          { ko: '지금 읽는 책', vi: 'Cuốn sách đang đọc bây giờ.', en: 'The book I am reading now.' },
          { ko: '예쁜 옷', vi: 'Chiếc áo đẹp.', en: 'Pretty clothes.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u3_q1',
        question: 'Dịch: "Táo ngon hơn dưa hấu."',
        options: ['사과가 수박보다 맛있어요.', '사과가 수박보다 없어요.', '수박이 사과보다 맛있어요.', '사과와 수박이 맛있어요.'],
        correctIndex: 0,
        explanation: 'Hơn cái gì thì gắn 보다 vào danh từ đó: 수박보다.'
      }
    ]
  },
  {
    id: 'sc2_u4',
    levelId: 'so_cap_2',
    unitNumber: 4,
    titleKo: '병원',
    titleVi: 'Bài 4: Bệnh viện',
    titleEn: 'Unit 4: Hospital & Health',
    description: 'Từ vựng triệu chứng bệnh tật, định ngữ động từ quá khứ -(으)ㄴ, 마다 (mỗi), phải làm gì -아/어야 하다.',
    audioTrack: { trackName: 'Track 28 (Sơ cấp 2)', fileName: '028.mp3', audioUrl: '/audio/so-cap-2/028.mp3', duration: '02:05' },
    vocabulary: [
      {
        id: 'sc2_u4_w1',
        hangul: '감기',
        romaja: 'gam-gi',
        type: 'Danh từ',
        meaningVi: 'Cảm cúm',
        meaningEn: 'Cold / Flu',
        example: { ko: '감기에 걸려서 병원에 갔어요.', vi: 'Vì bị cảm cúm nên tôi đã đi bệnh viện.', en: 'I caught a cold and went to the hospital.' },
        dialogue: {
          speakerA: '의사', speakerB: '환자',
          lineA: '어디가 아프세요?', lineB: '열이 나고 목이 아파요.',
          lineAVi: 'Bác đau ở đâu ạ?', lineBVi: 'Tôi bị sốt và đau họng.',
          lineAEn: 'Where does it hurt?', lineBEn: 'I have a fever and sore throat.'
        },
        exercise: {
          questionKo: '기침이 나고 열이 나는 질병은?',
          questionVi: 'Bệnh phát sốt và ho là bệnh gì?',
          questionEn: 'Illness with fever and cough?',
          options: ['감기', '치통', '두통', '복통'],
          correctIndex: 0,
          explanation: '감기 nghĩa là cảm cúm.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '식후 30분에 이 약을 드셔야 합니다.', vi: 'Bác phải uống thuốc này sau bữa ăn 30 phút.', en: 'You must take this medicine 30 minutes after meals.' },
      { time: '00:07', ko: '그리고 오늘은 따뜻한 물을 많이 마시고 푹 쉬세요.', vi: 'Và hôm nay hãy uống nhiều nước ấm và nghỉ ngơi thật tốt nhé.', en: 'And please drink plenty of warm water and rest well today.' }
    ],
    grammarPoints: [
      {
        name: '-아/어야 하다/되다 (Phải làm gì)',
        formula: 'Nguyên âm ㅏ, ㅗ + 아야 하다 | Khác + 어야 하다',
        explanationVi: 'Diễn tả nghĩa vụ hoặc điều bắt buộc phải thực hiện.',
        explanationEn: 'Must / Have to do something (Obligation).',
        examples: [
          { ko: '약을 매일 먹어야 해요.', vi: 'Phải uống thuốc mỗi ngày.', en: 'I must take medicine every day.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u4_q1',
        question: 'Chọn dạng đúng cho "가다" (phải đi):',
        options: ['가야 해요', '가어야 해요', '가면 돼요', '가지 마세요'],
        correctIndex: 0,
        explanation: '가다 kết hợp với -아/어야 하다 thành 가야 해요.'
      }
    ]
  },
  {
    id: 'sc2_u5',
    levelId: 'so_cap_2',
    unitNumber: 5,
    titleKo: '편지',
    titleVi: 'Bài 5: Thư tín',
    titleEn: 'Unit 5: Letters & Messages',
    description: 'Từ vựng thư từ, bưu điện, phủ định -지 못하다, giả thiết -(으)면, định ngữ tương lai -(으)ㄹ.',
    audioTrack: { trackName: 'Track 37 (Sơ cấp 2)', fileName: '037.mp3', audioUrl: '/audio/so-cap-2/037.mp3', duration: '02:10' },
    vocabulary: [
      {
        id: 'sc2_u5_w1',
        hangul: '우체국',
        romaja: 'u-che-guk',
        type: 'Danh từ',
        meaningVi: 'Bưu điện',
        meaningEn: 'Post office',
        example: { ko: '우체국에서 소포를 부쳤어요.', vi: 'Tôi đã gửi bưu kiện ở bưu điện.', en: 'I sent a parcel at the post office.' },
        dialogue: {
          speakerA: '화', speakerB: '직원',
          lineA: '베트남으로 편지를 보내고 싶어요.', lineB: '저울 위에 올려놓으세요.',
          lineAVi: 'Tôi muốn gửi thư sang Việt Nam.', lineBVi: 'Xin mời đặt lên bàn cân ạ.',
          lineAEn: 'I want to send a letter to Vietnam.', lineBEn: 'Please place it on the scale.'
        },
        exercise: {
          questionKo: '편지나 소포를 보내는 곳은?',
          questionVi: 'Nơi gửi thư và bưu phẩm là?',
          questionEn: 'Place where you send letters and packages?',
          options: ['우체국', '은행', '도서관', '미용실'],
          correctIndex: 0,
          explanation: '우체국 (郵遞局) là bưu điện.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '시간이 있으면 편지를 쓰세요.', vi: 'Nếu có thời gian thì bạn hãy viết thư nhé.', en: 'If you have time, please write a letter.' },
      { time: '00:06', ko: '네, 고향 친구에게 보낼 편지를 쓸게요.', vi: 'Vâng, tôi sẽ viết thư gửi cho người bạn ở quê nhà.', en: 'Yes, I will write a letter to send to my hometown friend.' }
    ],
    grammarPoints: [
      {
        name: '-(으)면 (Nếu... thì...)',
        formula: 'Có patchim + 으면 | Không patchim + 면',
        explanationVi: 'Đặt sau thân động từ/tính từ để diễn tả điều kiện hoặc giả thiết.',
        explanationEn: 'Conditional connector meaning \"if / when\".',
        examples: [
          { ko: '비가 오면 집에 있을 거예요.', vi: 'Nếu trời mưa tôi sẽ ở nhà.', en: 'If it rains, I will stay at home.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u5_q1',
        question: 'Dịch: "Nếu rảnh rỗi thì hãy gọi điện thoại nhé."',
        options: ['한가하면 전화하세요.', '한가하니까 전화하세요.', '한가하지만 전화하세요.', '한가해서 전화하세요.'],
        correctIndex: 0,
        explanation: 'Giả thiết "Nếu..." dùng cấu trúc -(으)면.'
      }
    ]
  },
  {
    id: 'sc2_u6',
    levelId: 'so_cap_2',
    unitNumber: 6,
    titleKo: '교통 (2)',
    titleVi: 'Bài 6: Giao thông (2)',
    titleEn: 'Unit 6: Transportation (2)',
    description: 'Đổi tuyến tàu, trạm dừng, ngữ pháp -아/어서 (trình tự thời gian), xác nhận -지요?, số thứ tự.',
    audioTrack: { trackName: 'Track 46 (Sơ cấp 2)', fileName: '046.mp3', audioUrl: '/audio/so-cap-2/046.mp3', duration: '02:00' },
    vocabulary: [
      {
        id: 'sc2_u6_w1',
        hangul: '환승',
        romaja: 'hwan-seung',
        type: 'Danh từ',
        meaningVi: 'Chuyển tuyến / Đổi xe',
        meaningEn: 'Transfer / Transit',
        example: { ko: '시청역에서 2호선으로 환승하세요.', vi: 'Hãy chuyển sang tuyến số 2 ở ga Tòa thị chính.', en: 'Transfer to Line 2 at City Hall Station.' },
        dialogue: {
          speakerA: '손님', speakerB: '역무원',
          lineA: '명동에 가려면 어떻게 가요?', lineB: '동대문역에서 4호선으로 갈아타세요.',
          lineAVi: 'Muốn đến Myeongdong thì đi thế nào ạ?', lineBVi: 'Hãy đổi sang tuyến số 4 ở ga Dongdaemun.',
          lineAEn: 'How do I get to Myeongdong?', lineBEn: 'Transfer to Line 4 at Dongdaemun Station.'
        },
        exercise: {
          questionKo: '다른 버스나 지하철로 갈아타는 것을 뜻하는 한자어는?',
          questionVi: 'Từ Hán Hàn chỉ việc đổi sang tuyến xe khác là?',
          questionEn: 'Hanja word for transferring to another bus or train?',
          options: ['환승', '출발', '도착', '예매'],
          correctIndex: 0,
          explanation: '환승 (換乘) nghĩa là đổi tuyến / chuyển xe.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '강남역에 가려면 어디에서 내려야 하지요?', vi: 'Muốn đến ga Gangnam thì phải xuống ở đâu nhỉ?', en: 'Where should I get off to go to Gangnam Station?' },
      { time: '00:07', ko: '이번 역에서 내려서 2호선으로 갈아타세요.', vi: 'Bạn hãy xuống ở ga này rồi đổi sang tuyến số 2 nhé.', en: 'Get off at this station and transfer to Line 2.' }
    ],
    grammarPoints: [
      {
        name: '-지요? (Phải không? - Xác nhận thông tin)',
        formula: 'Thân động/tính từ + 지요?',
        explanationVi: 'Dùng khi người nói muốn kiểm tra lại hoặc tìm kiếm sự đồng tình từ người nghe.',
        explanationEn: 'Tag question ending meaning \"right? / isn\'t it?\".',
        examples: [
          { ko: '오늘 덥지요?', vi: 'Hôm nay nóng đúng không?', en: 'It is hot today, isn\'t it?' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u6_q1',
        question: 'Đặt câu hỏi xác nhận: "Anh là học sinh đúng không?"',
        options: ['학생이지요?', '학생입니까?', '학생이었어요?', '학생이에요?'],
        correctIndex: 0,
        explanation: 'Đuôi câu xác nhận thông tin với danh từ là (이)지요? -> 학생이지요?.'
      }
    ]
  },
  {
    id: 'sc2_u7',
    levelId: 'so_cap_2',
    unitNumber: 7,
    titleKo: '전화 (2)',
    titleVi: 'Bài 7: Điện thoại (2)',
    titleEn: 'Unit 7: Phone Calls (2)',
    description: 'Hội thoại để lại tin nhắn, dự định -(으)려고, trước khi làm gì -기 전에, lời hứa -(으)ㄹ게요.',
    audioTrack: { trackName: 'Track 55 (Sơ cấp 2)', fileName: '055.mp3', audioUrl: '/audio/so-cap-2/055.mp3', duration: '02:15' },
    vocabulary: [
      {
        id: 'sc2_u7_w1',
        hangul: '메시지',
        romaja: 'me-si-ji',
        type: 'Danh từ',
        meaningVi: 'Tin nhắn / Lời nhắn',
        meaningEn: 'Message',
        example: { ko: '메시지를 남겨 주세요.', vi: 'Xin vui lòng để lại tin nhắn.', en: 'Please leave a message.' },
        dialogue: {
          speakerA: '비서', speakerB: '고객',
          lineA: '지금 자리에 안 계십니다.', lineB: '그럼 메모 좀 전해 주세요.',
          lineAVi: 'Bây giờ sếp không có ở bàn làm việc ạ.', lineBVi: 'Vậy nhờ chị chuyển giúp tôi lời nhắn nhé.',
          lineAEn: 'He is not at his desk right now.', lineBEn: 'Then please pass along a memo for me.'
        },
        exercise: {
          questionKo: '부재중인 사람에게 남기는 말은?',
          questionVi: 'Lời nhắn để lại cho người vắng mặt là?',
          questionEn: 'Words left for an absent person?',
          options: ['메시지', '사진', '우표', '영수증'],
          correctIndex: 0,
          explanation: '메시지 là tin nhắn / lời nhắn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '수업이 끝나기 전에 전화해 줄래요?', vi: 'Trước khi tan học bạn gọi điện cho tôi được không?', en: 'Could you call me before the class ends?' },
      { time: '00:06', ko: '네, 수업 끝나기 10분 전에 전화할게요.', vi: 'Được chứ, tôi sẽ gọi trước khi hết tiết 10 phút.', en: 'Yes, I will call 10 minutes before the class ends.' }
    ],
    grammarPoints: [
      {
        name: '-기 전에 (Trước khi làm gì)',
        formula: 'Thân động từ + 기 전에',
        explanationVi: 'Diễn tả hành động xảy ra trước một hành vi hoặc mốc thời gian nào đó.',
        explanationEn: 'Connector meaning \"before (doing something)\".',
        examples: [
          { ko: '식사하기 전에 손을 씻으세요.', vi: 'Hãy rửa tay trước khi dùng bữa.', en: 'Please wash your hands before eating.' }
        ]
      },
      {
        name: '-(으)ㄹ게요 (Tôi sẽ làm... - Thể hiện ý chí/Lời hứa)',
        formula: 'Có patchim + 을게요 | Không patchim + ㄹ게요',
        explanationVi: 'Chỉ dùng cho ngôi thứ nhất diễn tả lời hứa hoặc ý muốn tức thời với người nghe.',
        explanationEn: 'First-person future ending promising or expressing immediate intention to the listener.',
        examples: [
          { ko: '내일 꼭 갈게요.', vi: 'Ngày mai tôi nhất định sẽ đến.', en: 'I will definitely come tomorrow.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u7_q1',
        question: 'Dịch: "Tôi sẽ giúp bạn." (hứa hẹn với đối phương):',
        options: ['도와줄게요', '도와주세요', '도와주고 싶어요', '도와줬어요'],
        correctIndex: 0,
        explanation: 'Lời hứa làm việc gì cho đối phương dùng -(으)ㄹ게요 -> 도와줄게요.'
      }
    ]
  },
  {
    id: 'sc2_u8',
    levelId: 'so_cap_2',
    unitNumber: 8,
    titleKo: '영화',
    titleVi: 'Bài 8: Phim ảnh',
    titleEn: 'Unit 8: Movies & Entertainment',
    description: 'Từ vựng các thể loại phim, ngữ pháp phán đoán -겠-, cảm thán -네요, trải nghiệm thử -아/어 보다.',
    audioTrack: { trackName: 'Track 64 (Sơ cấp 2)', fileName: '064.mp3', audioUrl: '/audio/so-cap-2/064.mp3', duration: '02:00' },
    vocabulary: [
      {
        id: 'sc2_u8_w1',
        hangul: '배우',
        romaja: 'bae-u',
        type: 'Danh từ',
        meaningVi: 'Diễn viên',
        meaningEn: 'Actor / Actress',
        example: { ko: '제가 가장 좋아하는 배우입니다.', vi: 'Đây là diễn viên tôi yêu thích nhất.', en: 'This is my favorite actor.' },
        dialogue: {
          speakerA: '친구', speakerB: '나',
          lineA: '그 영화 재미있었어요?', lineB: '네, 주인공 배우 연기가 정말 훌륭했어요.',
          lineAVi: 'Bộ phim đó có hay không?', lineBVi: 'Có, diễn xuất của diễn viên chính rất tuyệt vời.',
          lineAEn: 'Was that movie good?', lineBEn: 'Yes, the lead actor\'s performance was great.'
        },
        exercise: {
          questionKo: '영화나 드라마에서 연기하는 사람은?',
          questionVi: 'Người diễn xuất trong phim ảnh là ai?',
          questionEn: 'Person acting in films or dramas?',
          options: ['배우', '가수', '의사', '기자'],
          correctIndex: 0,
          explanation: '배우 (俳優) là diễn viên.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국 영화를 본 적이 있어요?', vi: 'Bạn đã từng xem phim Hàn Quốc chưa?', en: 'Have you ever watched Korean movies?' },
      { time: '00:06', ko: '네, 정말 감동적이네요! 꼭 한번 보세요.', vi: 'Rồi, thật sự rất xúc động đấy! Bạn hãy thử xem một lần đi.', en: 'Yes, it is really touching! You should definitely watch it.' }
    ],
    grammarPoints: [
      {
        name: '-아/어 보다 (Thử làm gì / Từng trải nghiệm)',
        formula: 'Nguyên âm ㅏ, ㅗ + 아 보다 | Khác + 어 보다',
        explanationVi: 'Diễn tả việc thử làm hành động gì đó để xem trải nghiệm ra sao.',
        explanationEn: 'Auxiliary verb meaning \"to try doing something\".',
        examples: [
          { ko: '김치를 먹어 보세요.', vi: 'Bạn hãy thử ăn kim chi xem sao.', en: 'Please try eating kimchi.' }
        ]
      },
      {
        name: '-네요 (Đuôi câu cảm thán)',
        formula: 'Thân động/tính từ + 네요',
        explanationVi: 'Diễn tả cảm xúc ngạc nhiên, thán phục khi người nói trực tiếp chứng kiến hoặc nhận ra một sự thật mới.',
        explanationEn: 'Exclamatory sentence ending expressing surprise or realization.',
        examples: [
          { ko: '한국어를 정말 잘하시네요!', vi: 'Bạn nói tiếng Hàn giỏi quá!', en: 'You speak Korean so well!' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u8_q1',
        question: 'Dịch: "Hãy thử mặc chiếc áo này xem sao."',
        options: ['이 옷을 입어 보세요.', '이 옷을 입으세요.', '이 옷을 입고 싶어요.', '이 옷을 입었어요.'],
        correctIndex: 0,
        explanation: 'Khuyên ai thử làm gì dùng -아/어 보다 -> 입어 보세요.'
      }
    ]
  },
  {
    id: 'sc2_u9',
    levelId: 'so_cap_2',
    unitNumber: 9,
    titleKo: '휴일',
    titleVi: 'Bài 9: Ngày nghỉ',
    titleEn: 'Unit 9: Holidays & Rest',
    description: 'Từ vựng kỳ nghỉ, danh từ + (이)나 (hoặc/những), hy vọng -(으)면 좋겠다, mục đích -기 위해서.',
    audioTrack: { trackName: 'Track 73 (Sơ cấp 2)', fileName: '073.mp3', audioUrl: '/audio/so-cap-2/073.mp3', duration: '02:10' },
    vocabulary: [
      {
        id: 'sc2_u9_w1',
        hangul: '휴가',
        romaja: 'hyu-ga',
        type: 'Danh từ',
        meaningVi: 'Kỳ nghỉ / Phép năm',
        meaningEn: 'Vacation / Leave',
        example: { ko: '여름 휴가에 바다에 갈 거예요.', vi: 'Kỳ nghỉ hè tôi sẽ đi biển.', en: 'I will go to the sea during summer vacation.' },
        dialogue: {
          speakerA: '동료', speakerB: '나',
          lineA: '휴가 계획 세웠어요?', lineB: '네, 가족들과 제주도에 가려고 해요.',
          lineAVi: 'Bạn đã lên kế hoạch nghỉ phép chưa?', lineBVi: 'Rồi, tôi định cùng cả nhà đi đảo Jeju.',
          lineAEn: 'Have you planned your vacation?', lineBEn: 'Yes, I plan to go to Jeju Island with my family.'
        },
        exercise: {
          questionKo: '직장이나 학교를 쉬고 쉬는 기간은?',
          questionVi: 'Khoảng thời gian nghỉ ngơi không phải đi làm hay đi học là?',
          questionEn: 'Period of resting from school or work?',
          options: ['휴가', '출장', '회의', '근무'],
          correctIndex: 0,
          explanation: '휴가 (休暇) nghĩa là kỳ nghỉ.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이번 연휴에 날씨가 맑으면 좋겠어요.', vi: 'Giá như kỳ nghỉ dài này thời tiết trong lành thì tốt biết mấy.', en: 'I hope the weather is clear during this long weekend.' },
      { time: '00:07', ko: '푹 쉬기 위해서 집에서 영화나 볼래요.', vi: 'Để nghỉ ngơi thoải mái, chắc tôi sẽ ở nhà xem phim hoặc gì đó.', en: 'To rest well, I will probably stay home and watch a movie or something.' }
    ],
    grammarPoints: [
      {
        name: '-(으)면 좋겠다 (Ước gì / Giá như... thì tốt biết mấy)',
        formula: 'Thân động/tính từ + -(으)면 좋겠다',
        explanationVi: 'Diễn tả nguyện vọng, mong ước của người nói đối với một việc gì đó.',
        explanationEn: 'Expresses a hope or wish (\"I hope / I wish\").',
        examples: [
          { ko: '빨리 방학이 오면 좋겠어요.', vi: 'Ước gì kỳ nghỉ mau đến.', en: 'I hope vacation comes soon.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u9_q1',
        question: 'Dịch mong ước: "Giá như ngày mai không mưa thì tốt quá."',
        options: ['내일 비가 안 오면 좋겠어요.', '내일 비가 안 와야 해요.', '내일 비가 안 오려고 해요.', '내일 비가 안 오지요?'],
        correctIndex: 0,
        explanation: 'Mong ước dùng -(으)면 좋겠다.'
      }
    ]
  },
  {
    id: 'sc2_u10',
    levelId: 'so_cap_2',
    unitNumber: 10,
    titleKo: '외모',
    titleVi: 'Bài 10: Ngoại hình',
    titleEn: 'Unit 10: Appearance & Looks',
    description: 'Từ vựng miêu tả dáng vóc, khuôn mặt, trở nên thế nào -아/어지다, vì nên -기 때문에, bất quy tắc ㅎ.',
    audioTrack: { trackName: 'Track 82 (Sơ cấp 2)', fileName: '082.mp3', audioUrl: '/audio/so-cap-2/082.mp3', duration: '02:05' },
    vocabulary: [
      {
        id: 'sc2_u10_w1',
        hangul: '날씬하다',
        romaja: 'nal-ssin-ha-da',
        type: 'Tính từ',
        meaningVi: 'Thon thả / Mảnh mai',
        meaningEn: 'Slim / Slender',
        example: { ko: '운동을 해서 몸이 날씬해졌어요.', vi: 'Nhờ tập thể dục nên thân hình đã trở nên thon thả.', en: 'I exercised and my body became slim.' },
        dialogue: {
          speakerA: '지은', speakerB: '미나',
          lineA: '미나 씨, 요즘 운동해요?', lineB: '네, 건강해지기 위해서 수영을 해요.',
          lineAVi: 'Mina dạo này có tập thể dục không?', lineBVi: 'Có, để khỏe hơn mình đi bơi.',
          lineAEn: 'Mina, do you exercise lately?', lineBEn: 'Yes, I swim to become healthier.'
        },
        exercise: {
          questionKo: '몸매가 가늘고 예쁜 모양을 나타내는 말은?',
          questionVi: 'Từ miêu tả thân hình thon gọn, đẹp đẽ là?',
          questionEn: 'Word describing a slim and trim figure?',
          options: ['날씬하다', '뚱뚱하다', '작다', '두껍다'],
          correctIndex: 0,
          explanation: '날씬하다 nghĩa là thon thả.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '수빈 씨 동생은 키가 크고 눈이 참 예뻐요.', vi: 'Em của Soobin cao ráo và đôi mắt rất đẹp.', en: 'Soobin\'s younger sibling is tall with very pretty eyes.' },
      { time: '00:07', ko: '네, 머리를 자르니까 훨씬 더 귀여워졌어요.', vi: 'Vâng, cắt tóc xong trông lại càng đáng yêu hơn hẳn.', en: 'Yes, after cutting her hair she looks much cuter.' }
    ],
    grammarPoints: [
      {
        name: '-아/어지다 (Trở nên / Càng ngày càng...)',
        formula: 'Tính từ + 아/어지다',
        explanationVi: 'Diễn tả sự thay đổi trạng thái theo thời gian.',
        explanationEn: 'Indicates a change of state over time (\"to become / to get\").',
        examples: [
          { ko: '날씨가 따뜻해졌어요.', vi: 'Thời tiết đã trở nên ấm áp.', en: 'The weather became warmer.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u10_q1',
        question: 'Chia tính từ "예쁘다" với cấu trúc trở nên (-아/어지다):',
        options: ['예뻐지다', '예쁘어지다', '예쁘아지다', '예뻐하다'],
        correctIndex: 0,
        explanation: '예쁘다 bị giản lược ㅡ kết hợp với 어지다 thành 예뻐지다.'
      }
    ]
  },
  {
    id: 'sc2_u11',
    levelId: 'so_cap_2',
    unitNumber: 11,
    titleKo: '여행',
    titleVi: 'Bài 11: Du lịch',
    titleEn: 'Unit 11: Travel & Journey',
    description: 'Từ vựng danh lam thắng cảnh, -(으)ㄹ 수 있다/없다, danh từ hóa -기 / -는 것, bất quy tắc ㄷ.',
    audioTrack: { trackName: 'Track 91 (Sơ cấp 2)', fileName: '091.mp3', audioUrl: '/audio/so-cap-2/091.mp3', duration: '02:15' },
    vocabulary: [
      {
        id: 'sc2_u11_w1',
        hangul: '관광지',
        romaja: 'gwan-gwang-ji',
        type: 'Danh từ',
        meaningVi: 'Địa điểm du lịch / Danh lam thắng cảnh',
        meaningEn: 'Tourist attraction',
        example: { ko: '제주도는 한국의 유명한 관광지입니다.', vi: 'Đảo Jeju là điểm du lịch nổi tiếng của Hàn Quốc.', en: 'Jeju Island is a famous tourist spot in Korea.' },
        dialogue: {
          speakerA: '가이드', speakerB: '여행객',
          lineA: '어디를 구경하고 싶으세요?', lineB: '전통 문화가 있는 관광지에 가고 싶어요.',
          lineAVi: 'Quý khách muốn tham quan nơi nào ạ?', lineBVi: 'Tôi muốn đến điểm du lịch có văn hóa truyền thống.',
          lineAEn: 'Where do you want to sightsee?', lineBEn: 'I want to go to attractions with traditional culture.'
        },
        exercise: {
          questionKo: '여행객들이 많이 찾아오는 유명한 장소는?',
          questionVi: 'Nơi có nhiều du khách tìm đến tham quan là?',
          questionEn: 'Famous place visited by many travelers?',
          options: ['관광지', '사무실', '공장', '연구소'],
          correctIndex: 0,
          explanation: '관광지 (觀光地) là địa điểm du lịch.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이번 방학에 제주도로 여행을 갈 수 있어요?', vi: 'Kỳ nghỉ này bạn có thể đi du lịch đảo Jeju được không?', en: 'Can you go on a trip to Jeju Island this vacation?' },
      { time: '00:07', ko: '혼자 여행하는 것을 좋아해서 기차를 타고 갈 거예요.', vi: 'Vì tôi thích đi du lịch một mình nên tôi sẽ đi tàu hỏa.', en: 'Because I enjoy traveling alone, I will take the train.' }
    ],
    grammarPoints: [
      {
        name: '-는 것 (Danh từ hóa hành động)',
        formula: 'Động từ + 는 것',
        explanationVi: 'Biến động từ thành một cụm danh từ tương đương \"việc làm cái gì\".',
        explanationEn: 'Nominalizer converting a verb clause into a noun phrase (\"the act of doing\").',
        examples: [
          { ko: '사진을 찍는 것을 좋아해요.', vi: 'Tôi thích việc chụp ảnh.', en: 'I like taking photos.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u11_q1',
        question: 'Dịch: "Sở thích của tôi là nghe nhạc."',
        options: ['음악을 듣는 것입니다.', '음악을 듣고 있습니다.', '음악을 들어야 합니다.', '음악을 들었습니다.'],
        correctIndex: 0,
        explanation: 'Danh từ hóa hành động nghe: 듣는 것.'
      }
    ]
  },
  {
    id: 'sc2_u12',
    levelId: 'so_cap_2',
    unitNumber: 12,
    titleKo: '공공장소',
    titleVi: 'Bài 12: Nơi công cộng',
    titleEn: 'Unit 12: Public Places & Etiquette',
    description: 'Quy tắc công cộng, vừa làm này vừa làm kia -(으)면서, cấm đoán -(으)면 안 되다.',
    audioTrack: { trackName: 'Track 101 (Sơ cấp 2)', fileName: '101.mp3', audioUrl: '/audio/so-cap-2/101.mp3', duration: '02:00' },
    vocabulary: [
      {
        id: 'sc2_u12_w1',
        hangul: '금연',
        romaja: 'geum-yeon',
        type: 'Danh từ',
        meaningVi: 'Cấm hút thuốc',
        meaningEn: 'No smoking',
        example: { ko: '이 건물은 전체가 금연 구역입니다.', vi: 'Tòa nhà này toàn bộ là khu vực cấm hút thuốc.', en: 'This whole building is a no smoking area.' },
        dialogue: {
          speakerA: '관리인', speakerB: '손님',
          lineA: '여기서 담배를 피우시면 안 됩니다.', lineB: '죄송합니다. 몰랐습니다.',
          lineAVi: 'Không được hút thuốc ở đây đâu ạ.', lineBVi: 'Xin lỗi ạ. Tôi đã không biết.',
          lineAEn: 'You must not smoke here.', lineBEn: 'I am sorry. I did not know.'
        },
        exercise: {
          questionKo: '담배를 피우지 못하게 하는 표시는?',
          questionVi: 'Biển báo không cho phép hút thuốc là gì?',
          questionEn: 'Sign prohibiting smoking?',
          options: ['금연', '주차', '출입', '촬영'],
          correctIndex: 0,
          explanation: '금연 (禁煙) là cấm hút thuốc.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '도서관에서는 큰 소리로 이야기하면 안 돼요.', vi: 'Ở thư viện không được nói chuyện lớn tiếng.', en: 'You must not talk loudly in the library.' },
      { time: '00:06', ko: '음악을 들으면서 조용히 책을 읽으세요.', vi: 'Hãy vừa nghe nhạc vừa đọc sách trong yên lặng nhé.', en: 'Please read quietly while listening to music.' }
    ],
    grammarPoints: [
      {
        name: '-(으)면 안 되다 (Không được phép làm gì)',
        formula: 'Có patchim + 으면 안 되다 | Không patchim + 면 안 되다',
        explanationVi: 'Diễn tả sự cấm đoán, quy định không được làm một việc gì đó.',
        explanationEn: 'Prohibitive structure meaning \"must not / should not do\".',
        examples: [
          { ko: '여기 사진을 찍으면 안 돼요.', vi: 'Không được chụp ảnh ở đây.', en: 'You must not take photos here.' }
        ]
      },
      {
        name: '-(으)면서 (Vừa... vừa...)',
        formula: 'Có patchim + 으면서 | Không patchim + 면서',
        explanationVi: 'Diễn tả hai hành động diễn ra đồng thời cùng một lúc.',
        explanationEn: 'Connective indicating simultaneous actions (\"while / simultaneously\").',
        examples: [
          { ko: '밥을 먹으면서 TV를 봐요.', vi: 'Vừa ăn cơm vừa xem TV.', en: 'I watch TV while eating.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u12_q1',
        question: 'Dịch: "Không được đỗ xe ở đây."',
        options: ['여기에 주차하면 안 돼요.', '여기에 주차해야 돼요.', '여기에 주차할 수 있어요.', '여기에 주차하세요.'],
        correctIndex: 0,
        explanation: 'Cấm làm gì dùng cấu trúc -(으)면 안 되다.'
      }
    ]
  },
  {
    id: 'sc2_u13',
    levelId: 'so_cap_2',
    unitNumber: 13,
    titleKo: '도시',
    titleVi: 'Bài 13: Thành phố / Đô thị',
    titleEn: 'Unit 13: Cities & Urban Life',
    description: 'Từ vựng cảnh quan đô thị, trợ từ (이)나 (đến tận/những), dự đoán -(으)ㄹ 것 같다.',
    audioTrack: { trackName: 'Track 110 (Sơ cấp 2)', fileName: '110.mp3', audioUrl: '/audio/so-cap-2/110.mp3', duration: '02:05' },
    vocabulary: [
      {
        id: 'sc2_u13_w1',
        hangul: '야경',
        romaja: 'ya-gyeong',
        type: 'Danh từ',
        meaningVi: 'Cảnh đêm / Cảnh ban đêm',
        meaningEn: 'Night view',
        example: { ko: '서울의 야경이 정말 아름다워요.', vi: 'Cảnh đêm ở Seoul thật sự rất đẹp.', en: 'The night view of Seoul is truly beautiful.' },
        dialogue: {
          speakerA: '민수', speakerB: '화',
          lineA: 'N서울타워에 가 봤어요?', lineB: '네, 거기서 보는 야경이 최고예요.',
          lineAVi: 'Bạn đã lên Tháp N Seoul chưa?', lineBVi: 'Rồi, cảnh đêm ngắm từ đó là tuyệt nhất đấy.',
          lineAEn: 'Have you been to N Seoul Tower?', lineBEn: 'Yes, the night view seen from there is the best.'
        },
        exercise: {
          questionKo: '밤에 보는 도시의 풍경은?',
          questionVi: 'Phong cảnh thành phố ngắm vào ban đêm là?',
          questionEn: 'City scenery viewed at night?',
          options: ['야경', '일출', '석양', '안개'],
          correctIndex: 0,
          explanation: '야경 (夜景) là cảnh ban đêm.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '퇴근 시간에는 길이 많이 막힐 것 같아요.', vi: 'Vào giờ tan tầm có vẻ đường sẽ tắc nhiều đấy.', en: 'It seems the roads will be very congested during rush hour.' },
      { time: '00:07', ko: '지하철로 1시간이나 걸리니까 서두릅시다.', vi: 'Đi tàu điện ngầm mất tận 1 tiếng nên chúng ta hãy khẩn trương lên.', en: 'It takes as much as 1 hour by subway, so let us hurry.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 것 같다 (Dường như / Có vẻ như... - Dự đoán tương lai)',
        formula: 'Động/Tính từ + -(으)ㄹ 것 같다',
        explanationVi: 'Dùng khi người nói phỏng đoán một sự việc chưa chắc chắn.',
        explanationEn: 'Expresses conjecture or supposition (\"it seems like / probably\").',
        examples: [
          { ko: '내일 날씨가 추울 것 같아요.', vi: 'Có vẻ như ngày mai thời tiết sẽ lạnh.', en: 'It looks like it will be cold tomorrow.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u13_q1',
        question: 'Dịch câu phỏng đoán: "Có vẻ như trời sắp mưa."',
        options: ['비가 올 것 같아요.', '비가 와야 해요.', '비가 오면 돼요.', '비가 오고 있어요.'],
        correctIndex: 0,
        explanation: 'Phỏng đoán tương lai dùng -(으)ㄹ 것 같다 -> 비가 올 것 같아요.'
      }
    ]
  },
  {
    id: 'sc2_u14',
    levelId: 'so_cap_2',
    unitNumber: 14,
    titleKo: '계획',
    titleVi: 'Bài 14: Kế hoạch',
    titleEn: 'Unit 14: Plans & Resolutions',
    description: 'Từ vựng lên kế hoạch mục tiêu, -(으)ㄴ 지 (đã bao lâu kể từ khi), sau khi -(으)ㄴ 후에, bất quy tắc ㅅ.',
    audioTrack: { trackName: 'Track 120 (Sơ cấp 2)', fileName: '120.mp3', audioUrl: '/audio/so-cap-2/120.mp3', duration: '02:10' },
    vocabulary: [
      {
        id: 'sc2_u14_w1',
        hangul: '목표',
        romaja: 'mok-pyo',
        type: 'Danh từ',
        meaningVi: 'Mục tiêu',
        meaningEn: 'Goal / Target',
        example: { ko: '올해 목표는 한국어 능력시험 합격입니다.', vi: 'Mục tiêu năm nay là thi đỗ kỳ thi năng lực tiếng Hàn.', en: 'My goal this year is passing the TOPIK exam.' },
        dialogue: {
          speakerA: '선생님', speakerB: '학생',
          lineA: '새해 목표를 정했어요?', lineB: '네, 한국어로 유창하게 말하기입니다.',
          lineAVi: 'Em đã định ra mục tiêu năm mới chưa?', lineBVi: 'Dạ rồi, mục tiêu của em là nói tiếng Hàn trôi chảy ạ.',
          lineAEn: 'Have you set a New Year\'s goal?', lineBEn: 'Yes, speaking Korean fluently.'
        },
        exercise: {
          questionKo: '도달하고자 하는 기준이나 목적은?',
          questionVi: 'Cột mốc hoặc mục đích mà ta muốn đạt tới là gì?',
          questionEn: 'Target or purpose aimed to achieve?',
          options: ['목표', '경험', '취미', '습관'],
          correctIndex: 0,
          explanation: '목표 (目標) là mục tiêu.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국어를 배운 지 얼마나 되었어요?', vi: 'Bạn học tiếng Hàn được bao lâu rồi?', en: 'How long has it been since you started learning Korean?' },
      { time: '00:06', ko: '대학교를 졸업한 후에 공부를 시작해서 1년 되었어요.', vi: 'Sau khi tốt nghiệp đại học tôi bắt đầu học, được 1 năm rồi.', en: 'I started studying after graduating from university, so it has been one year.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ 후에 (Sau khi làm gì)',
        formula: 'Có patchim + 은 후에 | Không patchim + ㄴ 후에',
        explanationVi: 'Diễn tả một hành động xảy ra sau khi hoàn thành một việc khác.',
        explanationEn: 'Time conjunction meaning \"after doing something\".',
        examples: [
          { ko: '식사를 한 후에 약을 드세요.', vi: 'Sau khi ăn cơm xong hãy uống thuốc.', en: 'Please take your medicine after eating.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u14_q1',
        question: 'Dịch: "Sau khi xem phim xong thì đi ăn cơm."',
        options: ['영화를 본 후에 밥을 먹어요.', '영화를 보기 전에 밥을 먹어요.', '영화를 보면서 밥을 먹어요.', '영화를 보면 밥을 먹어요.'],
        correctIndex: 0,
        explanation: 'Sau khi làm gì dùng -(으)ㄴ 후에 -> 본 후에.'
      }
    ]
  },
  {
    id: 'sc2_u15',
    levelId: 'so_cap_2',
    unitNumber: 15,
    titleKo: '한국 생활',
    titleVi: 'Bài 15: Cuộc sống tại Hàn Quốc',
    titleEn: 'Unit 15: Living in Korea',
    description: 'Tổng kết sinh hoạt tại Hàn, tiểu từ nhận 에게(서)/한테(서), liên từ bối cảnh -(으)ㄴ/는데, bất quy tắc 르.',
    audioTrack: { trackName: 'Track 130 (Sơ cấp 2)', fileName: '130.mp3', audioUrl: '/audio/so-cap-2/130.mp3', duration: '02:25' },
    vocabulary: [
      {
        id: 'sc2_u15_w1',
        hangul: '적응',
        romaja: 'jeok-eung',
        type: 'Danh từ',
        meaningVi: 'Thích ứng / Thích nghi',
        meaningEn: 'Adaptation / Adjusting',
        example: { ko: '한국 생활에 잘 적응하고 있어요.', vi: 'Tôi đang thích nghi rất tốt với cuộc sống tại Hàn Quốc.', en: 'I am adapting well to life in Korea.' },
        dialogue: {
          speakerA: '준영', speakerB: '화',
          lineA: '한국 음식이 입에 맞아요?', lineB: '처음에는 매웠는데 이제는 잘 먹어요.',
          lineAVi: 'Món Hàn có hợp khẩu vị bạn không?', lineBVi: 'Ban đầu thì cay nhưng giờ tôi ăn tốt rồi.',
          lineAEn: 'Does Korean food suit your taste?', lineBEn: 'It was spicy at first, but now I eat it well.'
        },
        exercise: {
          questionKo: '새로운 환경에 익숙해지는 것은?',
          questionVi: 'Việc quen dần với môi trường sống mới là gì?',
          questionEn: 'Getting used to a new environment?',
          options: ['적응', '후회', '실망', '포기'],
          correctIndex: 0,
          explanation: '적응 (適應) nghĩa là thích ứng, quen với môi trường mới.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국에 온 지 벌써 1년이 되었는데 시간이 참 빠르네요.', vi: 'Đến Hàn Quốc đã tròn 1 năm rồi mà thời gian trôi nhanh thật.', en: 'It has been already one year since I came to Korea, time really flies.' },
      { time: '00:08', ko: '친구들한테서 도움을 많이 받아서 잘 지내고 있어요.', vi: 'Nhờ nhận được nhiều sự giúp đỡ từ bạn bè nên tôi đang sống rất tốt.', en: 'I received a lot of help from friends, so I am doing well.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는데 (Nhưng / Đưa ra bối cảnh mở đầu)',
        formula: 'Động từ + 는데 | Tính từ + (으)ㄴ데',
        explanationVi: 'Dùng để mở ra bối cảnh câu chuyện hoặc nối hai vế mang sắc thái tương phản nhẹ.',
        explanationEn: 'Background context or mild contrasting connector (\"and / but / so\").',
        examples: [
          { ko: '날씨가 좋은데 소풍 갈까요?', vi: 'Thời tiết đẹp đấy, chúng ta đi dã ngoại nhé?', en: 'The weather is nice, shall we go on a picnic?' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'sc2_u15_q1',
        question: 'Dịch câu mở bối cảnh: "Tôi đang đọc sách, bạn cũng đọc cùng nhé."',
        options: ['책을 읽고 있는데 같이 읽을래요?', '책을 읽으니까 같이 읽을래요?', '책을 읽지만 같이 읽을래요?', '책을 읽어서 같이 읽을래요?'],
        correctIndex: 0,
        explanation: 'Đưa ra bối cảnh mở đầu cho lời đề nghị dùng -는데 -> 읽고 있는데.'
      }
    ]
  }
];
