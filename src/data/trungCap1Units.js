// Dữ liệu 15 bài học Trung cấp 1 (중급 3) theo Giáo trình Tiếng Hàn Tổng Hợp
export const TRUNG_CAP_1_UNITS = [
  {
    id: 'tc3_u1',
    levelId: 'trung_cap_1',
    unitNumber: 1,
    titleKo: '학교생활',
    titleVi: 'Bài 1: Đời sống học đường',
    titleEn: 'Unit 1: School Life & Campus',
    description: 'Bàn về sinh hoạt trường lớp, du học, ngữ pháp 밖에 (chỉ còn), (이)라고 하다 (được gọi là), -게 되다 (được/bị trở nên), -(으)ㄹ 생각이다 (dự định).',
    audioTrack: { trackName: 'Track 01 (Trung cấp 3)', fileName: '001.mp3', audioUrl: '/audio/so-cap-1/001.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u1_w1',
        hangul: '수강 신청',
        romaja: 'su-gang sin-cheong',
        type: 'Danh từ',
        meaningVi: 'Đăng ký môn học',
        meaningEn: 'Course registration',
        example: { ko: '다음 주부터 2학기 수강 신청 기간입니다.', vi: 'Từ tuần sau là thời gian đăng ký môn học học kỳ 2.', en: 'Next week is the registration period for the second semester.' },
        dialogue: {
          speakerA: '민수', speakerB: '지훈',
          lineA: '수강 신청 다 끝냈어?', lineB: '아니, 전공 과목 하나밖에 못 했어.',
          lineAVi: 'Cậu đăng ký môn học xong hết chưa?', lineBVi: 'Chưa, tớ mới chỉ đăng ký được mỗi một môn chuyên ngành.',
          lineAEn: 'Did you finish course registration?', lineBEn: 'No, I could only sign up for one major subject.'
        },
        exercise: {
          questionKo: '듣고 싶은 대학 강의를 신청하는 행위는?',
          questionVi: 'Hành động đăng ký các bài giảng muốn học tại đại học là?',
          questionEn: 'Registering for university lectures?',
          options: ['수강 신청', '입학 시험', '졸업식', '장학금'],
          correctIndex: 0,
          explanation: '수강 신청 nghĩa là đăng ký môn học.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이번 학기에 한국 대학교로 교환학생을 가게 되었어요.', vi: 'Học kỳ này tôi đã được sang trường đại học Hàn Quốc làm sinh viên trao đổi.', en: 'This semester I came to go to a Korean university as an exchange student.' },
      { time: '00:08', ko: '정말 축하해요! 한국어 실력이 부쩍 늘겠네요.', vi: 'Chúc mừng bạn nhé! Năng lực tiếng Hàn chắc chắn sẽ tiến bộ vượt bậc.', en: 'Congratulations! Your Korean skills will surely improve a lot.' }
    ],
    grammarPoints: [
      {
        name: '-게 되다 (Được / Bị / Trở nên - Biến chuyển do hoàn cảnh)',
        formula: 'Thân động từ + 게 되다',
        explanationVi: 'Diễn tả một sự việc diễn ra không hoàn toàn do ý chí chủ quan mà do hoàn cảnh bên ngoài tác động.',
        explanationEn: 'Indicates a change of state or situation resulting from external circumstances (\"come to / end up doing\").',
        examples: [
          { ko: '한국 회사에서 일하게 되었습니다.', vi: 'Tôi đã được vào làm việc tại công ty Hàn Quốc.', en: 'I came to work at a Korean company.' }
        ]
      },
      {
        name: '밖에 + Phủ định (Chỉ / Không còn gì ngoài...)',
        formula: 'Danh từ + 밖에 + 안 / 못 / 없다',
        explanationVi: 'Nhấn mạnh sự ít ỏi, duy nhất (tương đương với 만 nhưng luôn đi với phủ định).',
        explanationEn: 'Particle emphasizing limitation (\"nothing other than / only\"), followed strictly by negative forms.',
        examples: [
          { ko: '지갑에 천 원밖에 없어요.', vi: 'Trong ví chỉ có mỗi 1,000 won.', en: 'I have only 1,000 won in my wallet.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u1_q1',
        question: 'Chọn câu dùng đúng với "밖에":',
        options: ['사과가 하나밖에 없어요.', '사과가 하나밖에 있어요.', '사과가 하나밖에 많아요.', '사과가 하나밖에 샀어요.'],
        correctIndex: 0,
        explanation: 'Tiểu từ 밖에 bắt buộc phải đi cùng đuôi câu phủ định như 없어요.'
      }
    ]
  },
  {
    id: 'tc3_u2',
    levelId: 'trung_cap_1',
    unitNumber: 2,
    titleKo: '대인 관계',
    titleVi: 'Bài 2: Quan hệ ứng xử / Đối nhân',
    titleEn: 'Unit 2: Interpersonal Relationships',
    description: 'Nghệ thuật giao tiếp, ứng xử bạn bè đồng nghiệp, ngữ pháp -는 길이다, -(으)ㄴ 덕분에 (nhờ có), -나요? / -(으)ㄴ가요?.',
    audioTrack: { trackName: 'Track 02 (Trung cấp 3)', fileName: '002.mp3', audioUrl: '/audio/so-cap-1/002.mp3', duration: '02:25' },
    vocabulary: [
      {
        id: 'tc3_u2_w1',
        hangul: '배려하다',
        romaja: 'bae-ryeo-ha-da',
        type: 'Động từ',
        meaningVi: 'Quan tâm / Chu đáo / Nghĩ cho người khác',
        meaningEn: 'To be considerate / To care for',
        example: { ko: '남을 배려하는 마음이 중요합니다.', vi: 'Tấm lòng biết quan tâm người khác là điều rất quan trọng.', en: 'A considerate mindset toward others is important.' },
        dialogue: {
          speakerA: '동료 A', speakerB: '동료 B',
          lineA: '김 과장님은 참 따뜻하신 분 같아요.', lineB: '맞아요, 항상 후배들을 잘 배려해 주시지요.',
          lineAVi: 'Trưởng phòng Kim có vẻ là người rất ấm áp.', lineBVi: 'Đúng vậy, anh ấy luôn rất chu đáo với các hậu bối.',
          lineAEn: 'Manager Kim seems like a very warm person.', lineBEn: 'Right, he is always considerate of juniors.'
        },
        exercise: {
          questionKo: '다른 사람의 처지를 헤아려 도와주는 태도는?',
          questionVi: 'Thái độ thấu hiểu và quan tâm đến hoàn cảnh người khác là?',
          questionEn: 'Attitude of caring for and considering others?',
          options: ['배려하다', '무시하다', '비난하다', '경쟁하다'],
          correctIndex: 0,
          explanation: '배려하다 (配慮) là sự quan tâm, chu đáo.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '선생님께서 도와주신 덕분에 시험에 합격했어요.', vi: 'Nhờ có sự giúp đỡ của thầy mà em đã thi đỗ kỳ thi.', en: 'Thanks to the teacher\'s help, I passed the exam.' },
      { time: '00:07', ko: '열심히 노력한 결과예요. 축하해요!', vi: 'Đó là thành quả của sự nỗ lực chăm chỉ từ em đấy. Chúc mừng nhé!', en: 'It is the fruit of your hard work. Congratulations!' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ 덕분에 / 덕분에 (Nhờ có... mà có kết quả tốt)',
        formula: 'Động từ + -(으)ㄴ 덕분에 | Danh từ + 덕분에',
        explanationVi: 'Diễn tả nguyên nhân mang lại kết quả tích cực, tốt đẹp.',
        explanationEn: 'Expresses cause or gratitude resulting in a favorable outcome (\"thanks to\").',
        examples: [
          { ko: '친구 덕분에 한국 생활이 즐거워요.', vi: 'Nhờ có bạn bè mà cuộc sống ở Hàn thật vui.', en: 'Thanks to my friends, life in Korea is enjoyable.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u2_q1',
        question: 'Dịch: "Nhờ có bạn giúp đỡ mà mọi việc suôn sẻ."',
        options: ['도와준 덕분에 잘 끝났어요.', '도와준 탓에 잘 끝났어요.', '도와주지만 잘 끝났어요.', '도와주면서 잘 끝났어요.'],
        correctIndex: 0,
        explanation: 'Nhờ có sự giúp đỡ mang lại kết quả tốt dùng -(으)ㄴ 덕분에.'
      }
    ]
  },
  {
    id: 'tc3_u3',
    levelId: 'trung_cap_1',
    unitNumber: 3,
    titleKo: '건강',
    titleVi: 'Bài 3: Sức khỏe',
    titleEn: 'Unit 3: Health & Wellness',
    description: 'Chăm sóc sức khỏe, tập luyện, ngữ pháp khuyên nhủ -는 게 좋다, trông có vẻ -아/어 보인다, phán đoán -(으)ㄴ/는 것 같다.',
    audioTrack: { trackName: 'Track 03 (Trung cấp 3)', fileName: '003.mp3', audioUrl: '/audio/so-cap-1/003.mp3', duration: '02:20' },
    vocabulary: [
      {
        id: 'tc3_u3_w1',
        hangul: '면역력',
        romaja: 'myeon-yeok-ryeok',
        type: 'Danh từ',
        meaningVi: 'Khả năng miễn dịch / Sức đề kháng',
        meaningEn: 'Immunity / Immune strength',
        example: { ko: '규칙적인 운동은 면역력을 높여 줍니다.', vi: 'Tập thể dục đều đặn giúp nâng cao sức đề kháng.', en: 'Regular exercise improves immunity.' },
        dialogue: {
          speakerA: '의사', speakerB: '환자',
          lineA: '요즘 피로를 자주 느끼십니까?', lineB: '네, 잠을 자도 피곤이 잘 안 풀려요.',
          lineAVi: 'Dạo này bác có hay thấy mệt mỏi không?', lineBVi: 'Có, dù ngủ tôi vẫn không hết mệt.',
          lineAEn: 'Do you feel fatigue often lately?', lineBEn: 'Yes, tiredness doesn\'t go away even after sleep.'
        },
        exercise: {
          questionKo: '질병을 이겨내는 몸의 저항력을 뜻하는 말은?',
          questionVi: 'Khả năng chống chọi bệnh tật của cơ thể gọi là?',
          questionEn: 'Body\'s resistance against diseases?',
          options: ['면역력', '체중', '소화력', '시력'],
          correctIndex: 0,
          explanation: '면역력 (免疫力) là sức miễn dịch.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '오늘 얼굴이 많이 피곤해 보이네요. 무슨 일 있어요?', vi: 'Hôm nay trông mặt bạn có vẻ mệt mỏi thế. Có chuyện gì vậy?', en: 'You look very tired today. Is everything okay?' },
      { time: '00:07', ko: '어제 야근을 해서 그래요. 일찍 쉬는 게 좋겠어요.', vi: 'Vì hôm qua tăng ca đấy mà. Tốt hơn là bạn nên nghỉ ngơi sớm.', en: 'It is because I worked overtime yesterday. You had better rest early.' }
    ],
    grammarPoints: [
      {
        name: '-아/어 보인다 (Trông có vẻ... - Cảm nhận bên ngoài)',
        formula: 'Tính từ + 아/어 보인다',
        explanationVi: 'Dùng khi người nói nhận định về vẻ bề ngoài của đối tượng.',
        explanationEn: 'Expresses observation or impression based on outward appearance (\"looks / appears\").',
        examples: [
          { ko: '오늘 아주 행복해 보여요.', vi: 'Hôm nay trông bạn có vẻ rất hạnh phúc.', en: 'You look very happy today.' }
        ]
      },
      {
        name: '-는 게 좋다 (Nên làm gì / Tốt hơn là...)',
        formula: 'Thân động từ + 는 게 좋다',
        explanationVi: 'Đưa ra lời khuyên nhủ lịch sự, nhẹ nhàng.',
        explanationEn: 'Advising or suggesting an action (\"it is good/better to do\").',
        examples: [
          { ko: '감기약 먹고 쉬는 게 좋겠어요.', vi: 'Tốt hơn là bạn nên uống thuốc cảm rồi nghỉ ngơi.', en: 'You had better take cold medicine and rest.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u3_q1',
        question: 'Dịch: "Trông bạn trẻ hơn tuổi thật."',
        options: ['나이보다 젊어 보여요.', '나이보다 젊게 살아요.', '나이보다 젊을 것 같아요.', '나이보다 젊은 편이에요.'],
        correctIndex: 0,
        explanation: 'Trông có vẻ thế nào dùng cấu trúc -아/어 보인다 -> 젊어 보여요.'
      }
    ]
  },
  {
    id: 'tc3_u4',
    levelId: 'trung_cap_1',
    unitNumber: 4,
    titleKo: '쇼핑',
    titleVi: 'Bài 4: Mua sắm',
    titleEn: 'Unit 4: Smart Shopping & Consumerism',
    description: 'Tiêu dùng thông minh, ngữ pháp thay vì 대신(에), -(으)ㄴ/는 대신(에), công nhận nhưng -기는 하다.',
    audioTrack: { trackName: 'Track 04 (Trung cấp 3)', fileName: '004.mp3', audioUrl: '/audio/so-cap-1/004.mp3', duration: '02:15' },
    vocabulary: [
      {
        id: 'tc3_u4_w1',
        hangul: '환불',
        romaja: 'hwan-bul',
        type: 'Danh từ',
        meaningVi: 'Hoàn tiền / Trả lại tiền',
        meaningEn: 'Refund',
        example: { ko: '영수증을 가져오시면 환불이 가능합니다.', vi: 'Nếu mang theo hóa đơn thì có thể hoàn tiền.', en: 'A refund is available if you bring the receipt.' },
        dialogue: {
          speakerA: '손님', speakerB: '점원',
          lineA: '사이즈가 안 맞아서 환불하고 싶어요.', lineB: '결제하신 카드와 영수증을 보여주세요.',
          lineAVi: 'Áo không vừa kích cỡ nên tôi muốn hoàn tiền.', lineBVi: 'Xin mời cho xem thẻ thanh toán và hóa đơn ạ.',
          lineAEn: 'The size doesn\'t fit so I want a refund.', lineBEn: 'Please show the payment card and receipt.'
        },
        exercise: {
          questionKo: '구입한 물건을 돌려주고 돈을 다시 받는 것은?',
          questionVi: 'Việc trả lại đồ đã mua và nhận lại tiền là gì?',
          questionEn: 'Returning purchased items and getting money back?',
          options: ['환불', '교환', '배송', '주문'],
          correctIndex: 0,
          explanation: '환불 (換拂) nghĩa là hoàn tiền.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이 가방은 가격이 비싼 대신에 품질이 아주 뛰어나요.', vi: 'Chiếc túi này giá đắt bù lại chất lượng vô cùng vượt trội.', en: 'This bag is expensive, but in return its quality is outstanding.' },
      { time: '00:08', ko: '맞아요, 디자인도 예쁘기는 하지만 조금 무겁네요.', vi: 'Đúng vậy, thiết kế thì đẹp thật đấy nhưng hơi nặng một chút.', en: 'Right, the design is indeed pretty, but it is a bit heavy.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 대신(에) (Thay vì / Bù lại)',
        formula: 'Động từ + 는 대신에 | Tính từ + (으)ㄴ 대신에',
        explanationVi: 'Diễn tả sự thay thế hoặc bù trừ giữa hai mặt đối ứng.',
        explanationEn: 'Indicates replacement or compensation (\"instead of / in return for\").',
        examples: [
          { ko: '방이 좁은 대신에 월세가 싸요.', vi: 'Phòng hẹp bù lại tiền thuê nhà rẻ.', en: 'The room is small, but in return the rent is cheap.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u4_q1',
        question: 'Dịch: "Bù lại việc đi làm xa, lương rất cao."',
        options: ['출퇴근 거리가 먼 대신에 월급이 많아요.', '출퇴근 거리가 멀어서 월급이 많아요.', '출퇴근 거리가 멀지만 월급이 많아요.', '출퇴근 거리가 멀수록 월급이 많아요.'],
        correctIndex: 0,
        explanation: 'Sự bù trừ dùng -(으)ㄴ/는 대신에.'
      }
    ]
  },
  {
    id: 'tc3_u5',
    levelId: 'trung_cap_1',
    unitNumber: 5,
    titleKo: '요리',
    titleVi: 'Bài 5: Nấu ăn',
    titleEn: 'Unit 5: Cooking & Culinary Culture',
    description: 'Từ vựng gia vị, cách chế biến, ngữ pháp sau khi -고 나서, đang làm thì chuyển biến -다가, trạng từ -게.',
    audioTrack: { trackName: 'Track 05 (Trung cấp 3)', fileName: '005.mp3', audioUrl: '/audio/so-cap-1/005.mp3', duration: '02:25' },
    vocabulary: [
      {
        id: 'tc3_u5_w1',
        hangul: '재료',
        romaja: 'jae-ryo',
        type: 'Danh từ',
        meaningVi: 'Nguyên liệu',
        meaningEn: 'Ingredients / Materials',
        example: { ko: '신선한 재료로 음식을 만듭니다.', vi: 'Nấu món ăn bằng các nguyên liệu tươi sống.', en: 'Making food with fresh ingredients.' },
        dialogue: {
          speakerA: '요리사', speakerB: '조수',
          lineA: '채소를 먹기 좋게 썰었습니까?', lineB: '네, 썰고 나서 볶을 준비를 했습니다.',
          lineAVi: 'Cậu đã thái rau vừa ăn chưa?', lineBVi: 'Rồi ạ, sau khi thái xong em đã chuẩn bị sẵn để xào.',
          lineAEn: 'Did you chop vegetables bite-sized?', lineBEn: 'Yes, after chopping I prepared to stir-fry.'
        },
        exercise: {
          questionKo: '음식을 만들 때 들어가는 고기나 채소를 일컫는 말은?',
          questionVi: 'Từ chỉ thịt hoặc rau củ dùng để nấu món ăn là?',
          questionEn: 'Meat or vegetables used to make dishes?',
          options: ['재료', '양념', '그릇', '조미료'],
          correctIndex: 0,
          explanation: '재료 (材料) nghĩa là nguyên liệu.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '고기를 먼저 볶고 나서 물을 부으세요.', vi: 'Hãy xào thịt trước rồi sau đó mới đổ nước vào.', en: 'Stir-fry the meat first, and then pour in the water.' },
      { time: '00:06', ko: '센 불로 끓이다가 약한 불로 줄여 주세요.', vi: 'Đang đun lửa lớn thì chuyển nhỏ lửa lại nhé.', en: 'Boil over high heat, then turn down to low heat.' }
    ],
    grammarPoints: [
      {
        name: '-고 나서 (Làm xong việc này rồi mới làm việc khác)',
        formula: 'Thân động từ + 고 나서',
        explanationVi: 'Nhấn mạnh thứ tự trước sau rõ ràng, hoàn tất dứt điểm hành động trước.',
        explanationEn: 'Emphasizes sequential completion (\"after finishing ... then\").',
        examples: [
          { ko: '손을 씻고 나서 식사를 합시다.', vi: 'Rửa tay xong rồi hãy dùng bữa.', en: 'Let us eat after washing our hands.' }
        ]
      },
      {
        name: '-다가 (Đang... thì gián đoạn / chuyển tiếp)',
        formula: 'Thân động từ + 다가',
        explanationVi: 'Chỉ hành động đang diễn ra thì bị ngắt quãng hoặc có hành động khác xen vào.',
        explanationEn: 'Indicates interruption or shift while doing an action.',
        examples: [
          { ko: '길을 걷다가 친구를 만났어요.', vi: 'Đang đi trên đường thì gặp bạn bè.', en: 'While walking down the street, I ran into a friend.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u5_q1',
        question: 'Dịch: "Đang xem TV thì ngủ thiếp đi."',
        options: ['TV를 보다가 잠이 들었어요.', 'TV를 보고 나서 잠이 들었어요.', 'TV를 보면서 잠이 들었어요.', 'TV를 보면 잠이 들었어요.'],
        correctIndex: 0,
        explanation: 'Đang làm thì bị gián đoạn/chuyển trạng thái dùng -다가.'
      }
    ]
  },
  {
    id: 'tc3_u6',
    levelId: 'trung_cap_1',
    unitNumber: 6,
    titleKo: '은행',
    titleVi: 'Bài 6: Ngân hàng',
    titleEn: 'Unit 6: Banking & Finance',
    description: 'Giao dịch tài chính, mở tài khoản, ngữ pháp dễ/khó làm gì -기 쉽다/어렵다, trong suốt thời gian -는 동안, nếu muốn -(으)려면.',
    audioTrack: { trackName: 'Track 06 (Trung cấp 3)', fileName: '006.mp3', audioUrl: '/audio/so-cap-1/006.mp3', duration: '02:20' },
    vocabulary: [
      {
        id: 'tc3_u6_w1',
        hangul: '통장 개설',
        romaja: 'tong-jang gae-seol',
        type: 'Danh từ',
        meaningVi: 'Mở sổ tài khoản ngân hàng',
        meaningEn: 'Opening a bank account',
        example: { ko: '외국인 등록증이 있어야 통장 개설이 가능합니다.', vi: 'Phải có thẻ cư trú người nước ngoài mới mở tài khoản được.', en: 'You must have an alien registration card to open an account.' },
        dialogue: {
          speakerA: '행원', speakerB: '고객',
          lineA: '어떤 업무를 도와드릴까요?', lineB: '적금 통장을 하나 개설하려고 합니다.',
          lineAVi: 'Tôi có thể hỗ trợ nghiệp vụ gì cho quý khách?', lineBVi: 'Tôi định mở một sổ tiết kiệm tích lũy.',
          lineAEn: 'How can I assist your business?', lineBEn: 'I want to open an installment savings account.'
        },
        exercise: {
          questionKo: '은행에서 새로운 계좌를 만드는 것은?',
          questionVi: 'Việc mở tài khoản mới ở ngân hàng là?',
          questionEn: 'Creating a new bank account?',
          options: ['통장 개설', '송금', '출금', '대출'],
          correctIndex: 0,
          explanation: '통장 개설 nghĩa là mở sổ tài khoản.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '해외로 송금하려면 여권과 수수료가 필요합니다.', vi: 'Nếu muốn chuyển tiền ra nước ngoài thì cần có hộ chiếu và phí dịch vụ.', en: 'To transfer money abroad, you need a passport and fees.' },
      { time: '00:07', ko: '대기표를 뽑고 순서를 기다리는 동안 신청서를 작성하세요.', vi: 'Trong thời gian rút số thứ tự đợi đến lượt, xin hãy điền vào mẫu đơn.', en: 'While waiting for your turn after getting a ticket, please fill out the application form.' }
    ],
    grammarPoints: [
      {
        name: '-(으)려면 (Nếu muốn làm gì - Giả thiết mục đích)',
        formula: 'Thân động từ + (으)려면',
        explanationVi: 'Viết tắt của -(으)려고 하면, đưa ra điều kiện để đạt được mục đích.',
        explanationEn: 'Shortened from -(으)려고 하면 meaning \"if you intend/want to do\".',
        examples: [
          { ko: '한국어를 잘하려면 매일 연습해야 해요.', vi: 'Nếu muốn giỏi tiếng Hàn thì phải luyện tập mỗi ngày.', en: 'If you want to be good at Korean, you must practice daily.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u6_q1',
        question: 'Dịch: "Nếu muốn đi du học thì phải chuẩn bị hồ sơ."',
        options: ['유학을 가려면 서류를 준비해야 해요.', '유학을 가니까 서류를 준비해야 해요.', '유학을 가는데 서류를 준비해야 해요.', '유학을 가서 서류를 준비해야 해요.'],
        correctIndex: 0,
        explanation: 'Nếu muốn làm gì dùng -(으)려면.'
      }
    ]
  },
  {
    id: 'tc3_u7',
    levelId: 'trung_cap_1',
    unitNumber: 7,
    titleKo: '성격',
    titleVi: 'Bài 7: Tính cách',
    titleEn: 'Unit 7: Personality & Character',
    description: 'Miêu tả cá tính con người, ngữ pháp giống như 처럼, cảm thán -군요/구나, thuộc diện/vào loại -(으)ㄴ/는 편이다.',
    audioTrack: { trackName: 'Track 07 (Trung cấp 3)', fileName: '007.mp3', audioUrl: '/audio/so-cap-1/007.mp3', duration: '02:15' },
    vocabulary: [
      {
        id: 'tc3_u7_w1',
        hangul: '외향적',
        romaja: 'oe-hyang-jeok',
        type: 'Danh từ',
        meaningVi: 'Hướng ngoại',
        meaningEn: 'Extroverted / Outgoing',
        example: { ko: '그 친구는 성격이 외향적인 편입니다.', vi: 'Người bạn đó thuộc tuýp tính cách hướng ngoại.', en: 'That friend is on the extroverted side.' },
        dialogue: {
          speakerA: '수빈', speakerB: '지훈',
          lineA: '지훈 씨는 성격이 어때요?', lineB: '저는 조용하지만 사람들과 어울리는 것도 좋아해요.',
          lineAVi: 'Tính cách của Jihoon thế nào?', lineBVi: 'Mình khá trầm tính nhưng cũng thích hòa đồng với mọi người.',
          lineAEn: 'How is your personality, Jihoon?', lineBEn: 'I am quiet, but I also enjoy socializing.'
        },
        exercise: {
          questionKo: '적극적이고 활발한 성격을 나타내는 말은?',
          questionVi: 'Từ chỉ tính cách năng động, cởi mở là?',
          questionEn: 'Word describing active and outgoing personality?',
          options: ['외향적', '내성적', '소극적', '단순하다'],
          correctIndex: 0,
          explanation: '외향적 (外向的) là hướng ngoại.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '민수 씨는 누구에게나 천사처럼 친절하군요!', vi: 'Minsu tốt bụng với bất kỳ ai y hệt như một thiên thần vậy nhỉ!', en: 'Minsu is kind to everyone just like an angel!' },
      { time: '00:06', ko: '네, 성격이 원만해서 사람들과 두루두루 잘 지내는 편이에요.', vi: 'Vâng, tính tình hòa nhã nên thuộc diện rất dễ hòa đồng với mọi người.', en: 'Yes, his genial personality makes him get along well with others.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 편이다 (Thuộc diện / Vào loại / Khá là...)',
        formula: 'Động từ + 는 편이다 | Tính từ + (으)ㄴ 편이다',
        explanationVi: 'Dùng khi muốn nhận xét một cách tương đối, không khẳng định tuyệt đối.',
        explanationEn: 'Indicates tending towards a certain quality or state (\"on the ... side\").',
        examples: [
          { ko: '저는 키가 큰 편이에요.', vi: 'Tôi thuộc diện khá cao.', en: 'I am on the taller side.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u7_q1',
        question: 'Dịch: "Tôi thuộc diện ăn khá nhiều."',
        options: ['저는 많이 먹는 편이에요.', '저는 많이 먹어야 해요.', '저는 많이 먹을 것 같아요.', '저는 많이 먹으니까요.'],
        correctIndex: 0,
        explanation: 'Thuộc diện làm gì dùng -는 편이다 -> 먹는 편이에요.'
      }
    ]
  },
  {
    id: 'tc3_u8',
    levelId: 'trung_cap_1',
    unitNumber: 8,
    titleKo: '실수',
    titleVi: 'Bài 8: Sai sót / Nhầm lẫn',
    titleEn: 'Unit 8: Mistakes & Misunderstandings',
    description: 'Tình huống nhầm lẫn, ngữ pháp tại vì (tiêu cực) -는 바람에, đang giữa chừng -는 중이다, dặn dò cố gắng -도록 하다.',
    audioTrack: { trackName: 'Track 08 (Trung cấp 3)', fileName: '008.mp3', audioUrl: '/audio/so-cap-1/008.mp3', duration: '02:25' },
    vocabulary: [
      {
        id: 'tc3_u8_w1',
        hangul: '착각하다',
        romaja: 'chak-gak-ha-da',
        type: 'Động từ',
        meaningVi: 'Hiểu nhầm / Nhầm tưởng',
        meaningEn: 'To mistake / To be deluded',
        example: { ko: '약속 시간을 착각해서 늦었습니다.', vi: 'Vì nhầm giờ hẹn nên tôi đã đến muộn.', en: 'I mistook the meeting time and was late.' },
        dialogue: {
          speakerA: '부장', speakerB: '사원',
          lineA: '오늘 보고서 마감일인 것 잊었나?', lineB: '죄송합니다. 내일인 줄로 착각했습니다.',
          lineAVi: 'Cậu quên hôm nay là hạn nộp báo cáo à?', lineBVi: 'Em xin lỗi ạ. Em đã nhầm tưởng là ngày mai.',
          lineAEn: 'Did you forget today is the deadline?', lineBEn: 'I apologize. I mistook it for tomorrow.'
        },
        exercise: {
          questionKo: '어떤 사실을 잘못 알고 잘못 판단하는 것은?',
          questionVi: 'Việc phán đoán sai lệch một sự thật nào đó là gì?',
          questionEn: 'Misjudging or mistaking facts?',
          options: ['착각하다', '이해하다', '발견하다', '기억하다'],
          correctIndex: 0,
          explanation: '착각하다 (錯覺) nghĩa là nhầm lẫn, ngộ nhận.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '지하철을 잘못 타는 바람에 약속 시간에 늦었어요.', vi: 'Tại vì lên nhầm tàu điện ngầm nên tôi đã bị trễ giờ hẹn.', en: 'Because I mistakenly took the wrong subway, I was late for the appointment.' },
      { time: '00:07', ko: '다음부터는 호선을 잘 확인하도록 하세요.', vi: 'Từ lần sau bạn nhớ chú ý kiểm tra kỹ số tuyến tàu nhé.', en: 'From next time, make sure to check the train line carefully.' }
    ],
    grammarPoints: [
      {
        name: '-는 바람에 (Tại vì... nên bị... - Lý do tiêu cực đột ngột)',
        formula: 'Thân động từ + 는 바람에',
        explanationVi: 'Diễn tả một sự cố bất ngờ ngoài dự tính dẫn đến hậu quả tiêu cực ở vế sau.',
        explanationEn: 'Expresses unexpected cause leading to a negative result (\"because of / as a result of\").',
        examples: [
          { ko: '비가 오는 바람에 소풍이 취소되었어요.', vi: 'Tại trời mưa mà buổi dã ngoại bị hủy bỏ.', en: 'Because it rained, the picnic was cancelled.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u8_q1',
        question: 'Dịch: "Vì ngủ quên nên tôi đã lỡ chuyến xe buýt."',
        options: ['늦잠을 자는 바람에 버스를 놓쳤어요.', '늦잠을 자서 버스를 탈 수 있어요.', '늦잠을 자려고 버스를 놓쳤어요.', '늦잠을 자면 버스를 놓쳐요.'],
        correctIndex: 0,
        explanation: 'Nguyên nhân tiêu cực đột ngột dùng -는 바람에.'
      }
    ]
  },
  {
    id: 'tc3_u9',
    levelId: 'trung_cap_1',
    unitNumber: 9,
    titleKo: '이사',
    titleVi: 'Bài 9: Chuyển nhà',
    titleEn: 'Unit 9: Moving & Real Estate',
    description: 'Tìm thuê nhà, môi giới, ngữ pháp biết/không biết làm -(으)ㄹ 줄 알다/모르다, mong muốn -기 바라다, so với 에 비해서.',
    audioTrack: { trackName: 'Track 09 (Trung cấp 3)', fileName: '009.mp3', audioUrl: '/audio/so-cap-1/009.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u9_w1',
        hangul: '부동산',
        romaja: 'bu-dong-san',
        type: 'Danh từ',
        meaningVi: 'Bất động sản / Văn phòng môi giới nhà đất',
        meaningEn: 'Real estate agency',
        example: { ko: '부동산에서 좋은 원룸을 구했습니다.', vi: 'Tôi đã tìm được căn phòng one-room rất tốt qua môi giới.', en: 'I found a good studio apartment at the real estate agency.' },
        dialogue: {
          speakerA: '중개인', speakerB: '손님',
          lineA: '보증금과 월세는 어느 정도 생각하세요?', lineB: '보증금 500에 월세 45만 원 정도요.',
          lineAVi: 'Anh dự định tiền đặt cọc và tiền thuê hàng tháng tầm bao nhiêu?', lineBVi: 'Khoảng cọc 5 triệu và thuê 450 ngàn won ạ.',
          lineAEn: 'What deposit and monthly rent do you have in mind?', lineBEn: 'About 5 million deposit and 450,000 won rent.'
        },
        exercise: {
          questionKo: '집이나 땅을 사고파는 중개 사무소는?',
          questionVi: 'Văn phòng môi giới mua bán nhà đất là?',
          questionEn: 'Office brokering sales and leases of houses?',
          options: ['부동산', '우체국', '세탁소', '편의점'],
          correctIndex: 0,
          explanation: '부동산 (不動産) là văn phòng môi giới bất động sản.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '새로 이사한 집은 예전 집에 비해서 훨씬 넓고 쾌적해요.', vi: 'Ngôi nhà mới chuyển so với nhà cũ thì rộng và thoáng mát hơn hẳn.', en: 'The new house is much larger and more pleasant compared to the old one.' },
      { time: '00:08', ko: '새 집에서 항상 행복한 일만 가득하기 바랍니다.', vi: 'Chúc bạn ở nhà mới sẽ luôn ngập tràn những niềm vui hạnh phúc.', en: 'I hope your new home is always filled with happiness.' }
    ],
    grammarPoints: [
      {
        name: '에 비해서 (So với...)',
        formula: 'Danh từ + 에 비해서',
        explanationVi: 'Đặt danh từ làm mốc đối chiếu để so sánh tương quan.',
        explanationEn: 'Comparison marker meaning \"compared to / relative to\".',
        examples: [
          { ko: '가격에 비해서 성능이 우수합니다.', vi: 'So với mức giá thì hiệu năng rất ưu việt.', en: 'Compared to the price, its performance is excellent.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u9_q1',
        question: 'Dịch: "So với tuổi tác thì anh ấy trông rất chững chạc."',
        options: ['나이에 비해서 아주 의젓해요.', '나이 덕분에 아주 의젓해요.', '나이 대신에 아주 의젓해요.', '나이 바람에 아주 의젓해요.'],
        correctIndex: 0,
        explanation: 'So sánh tương quan dùng danh từ + 에 비해서.'
      }
    ]
  },
  {
    id: 'tc3_u10',
    levelId: 'trung_cap_1',
    unitNumber: 10,
    titleKo: '여행',
    titleVi: 'Bài 10: Du lịch',
    titleEn: 'Unit 10: Travel & Exploration',
    description: 'Trải nghiệm du lịch, câu tường thuật gián tiếp câu trần thuật -다고 하다, câu hỏi -냐고 하다, dự định -(으)ㄹ까 하다.',
    audioTrack: { trackName: 'Track 10 (Trung cấp 3)', fileName: '010.mp3', audioUrl: '/audio/so-cap-1/010.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u10_w1',
        hangul: '숙소',
        romaja: 'suk-so',
        type: 'Danh từ',
        meaningVi: 'Chỗ ở / Nơi lưu trú khi du lịch',
        meaningEn: 'Lodging / Accommodation',
        example: { ko: '바다가 바로 보이는 숙소를 예약했어요.', vi: 'Tôi đã đặt chỗ nghỉ nhìn thẳng ra biển.', en: 'I booked an accommodation with a direct ocean view.' },
        dialogue: {
          speakerA: '유나', speakerB: '민수',
          lineA: '이번 휴가에 어디로 갈 거야?', lineB: '강원도로 캠핑을 갈까 해.',
          lineAVi: 'Kỳ nghỉ này cậu sẽ đi đâu?', lineBVi: 'Tớ đang tính đi cắm trại ở Gangwon-do.',
          lineAEn: 'Where will you go this vacation?', lineBEn: 'I am thinking of camping in Gangwon-do.'
        },
        exercise: {
          questionKo: '여행지에서 머무르고 잠을 자는 장소는?',
          questionVi: 'Nơi dừng chân nghỉ ngơi và ngủ khi đi du lịch là gì?',
          questionEn: 'Place to stay and sleep during travels?',
          options: ['숙소', '정류장', '매표소', '기념품점'],
          correctIndex: 0,
          explanation: '숙소 (宿所) nghĩa là chỗ nghỉ, nơi lưu trú.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '지훈 씨가 이번 주말에 제주도로 떠난다고 했어요.', vi: 'Jihoon bảo rằng cuối tuần này anh ấy sẽ lên đường đi đảo Jeju.', en: 'Jihoon said that he is leaving for Jeju Island this weekend.' },
      { time: '00:06', ko: '저도 친구들과 함께 1박 2일 여행을 갈까 해요.', vi: 'Tôi cũng đang tính đi chơi 2 ngày 1 đêm cùng với bạn bè.', en: 'I am also thinking of going on a 2-day-1-night trip with friends.' }
    ],
    grammarPoints: [
      {
        name: '-다고 하다 (Trích dẫn gián tiếp câu trần thuật: Nói rằng / Bảo rằng)',
        formula: 'Động từ hiện tại: -(ㄴ/는)다고 하다 | Tính từ: -다고 하다 | Quá khứ: -았/었다고 하다',
        explanationVi: 'Dùng để thuật lại lời phát biểu hoặc thông tin nghe được từ người khác.',
        explanationEn: 'Indirect quotation for declarative sentences (\"said that\").',
        examples: [
          { ko: '친구가 내일 온다고 했어요.', vi: 'Bạn tôi bảo ngày mai sẽ tới.', en: 'My friend said that he will come tomorrow.' }
        ]
      },
      {
        name: '-(으)ㄹ까 하다 (Đang tính / Dự định làm gì)',
        formula: 'Thân động từ + (으)ㄹ까 하다',
        explanationVi: 'Diễn tả ý định chưa được ấn định chắc chắn 100% của người nói.',
        explanationEn: 'Expresses an undecided intention (\"thinking of doing\").',
        examples: [
          { ko: '새 컴퓨터를 살까 해요.', vi: 'Tôi đang tính mua chiếc máy tính mới.', en: 'I am thinking of buying a new computer.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u10_q1',
        question: 'Chuyển sang câu gián tiếp: "날씨가 춥다" (Bạn bảo trời lạnh):',
        options: ['날씨가 춥다고 했어요.', '날씨가 추우냐고 했어요.', '날씨가 춥자고 했어요.', '날씨가 추우라고 했어요.'],
        correctIndex: 0,
        explanation: 'Tính từ trần thuật dùng -다고 하다 -> 춥다고 했어요.'
      }
    ]
  },
  {
    id: 'tc3_u11',
    levelId: 'trung_cap_1',
    unitNumber: 11,
    titleKo: '고민',
    titleVi: 'Bài 11: Nỗi lo / Trăn trở',
    titleEn: 'Unit 11: Concerns & Heart-to-Heart',
    description: 'Chia sẻ tâm tư, lối nói thân mật 반말, hô ngữ thân mật -아/야, hễ cứ làm liên tục thì -다(가) 보면.',
    audioTrack: { trackName: 'Track 11 (Trung cấp 3)', fileName: '011.mp3', audioUrl: '/audio/so-cap-1/011.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u11_w1',
        hangul: '스트레스 해소',
        romaja: 'seu-teu-re-seu hae-so',
        type: 'Danh từ',
        meaningVi: 'Giải tỏa căng thẳng',
        meaningEn: 'Relieving stress',
        example: { ko: '음악을 듣는 것이 제 스트레스 해소법이에요.', vi: 'Nghe nhạc là phương pháp giải tỏa stress của tôi.', en: 'Listening to music is my way of relieving stress.' },
        dialogue: {
          speakerA: '친구 A', speakerB: '친구 B',
          lineA: '요즘 취업 때문에 고민이 너무 많아.', lineB: '힘내! 포기하지 않고 노력하다 보면 좋은 결과가 있을 거야.',
          lineAVi: 'Dạo này tớ lo lắng nhiều quá vì chuyện xin việc.', lineBVi: 'Cố lên! Cứ không bỏ cuộc mà nỗ lực thì sẽ có kết quả tốt thôi.',
          lineAEn: 'I worry so much lately about getting a job.', lineBEn: 'Cheer up! If you keep trying without giving up, good results will come.'
        },
        exercise: {
          questionKo: '마음의 부담이나 긴장을 풀어 없애는 것은?',
          questionVi: 'Việc tháo gỡ áp lực tâm lý và căng thẳng là gì?',
          questionEn: 'Easing mental pressure and tension?',
          options: ['스트레스 해소', '진로 상담', '건강 검진', '시간 관리'],
          correctIndex: 0,
          explanation: '스트레스 해소 nghĩa là giải tỏa áp lực.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '처음에는 어렵지만 매일 꾸준히 연습하다 보면 익숙해질 거야.', vi: 'Ban đầu tuy khó nhưng nếu cứ kiên trì tập luyện mỗi ngày thì sẽ quen thôi.', en: 'It is hard at first, but if you keep practicing steadily every day, you will get used to it.' },
      { time: '00:08', ko: '응, 따뜻하게 위로해 줘서 정말 고마워.', vi: 'Ừ, cảm ơn cậu nhiều vì đã an ủi tớ thật ấm áp nhé.', en: 'Yeah, thank you so much for comforting me so warmly.' }
    ],
    grammarPoints: [
      {
        name: '-다(가) 보면 (Nếu cứ duy trì làm gì thì một kết quả sẽ xảy ra)',
        formula: 'Thân động từ + 다 보면',
        explanationVi: 'Diễn tả nếu cứ tiếp tục thực hiện hành động ở vế trước thì sẽ phát hiện hoặc đạt được kết quả ở vế sau.',
        explanationEn: 'Indicates that if one keeps doing an action, a certain outcome will naturally follow.',
        examples: [
          { ko: '한국 사람과 자주 이야기하다 보면 말이 늘어요.', vi: 'Cứ trò chuyện thường xuyên với người Hàn thì nói sẽ tiến bộ.', en: 'If you keep talking often with Koreans, your speaking will improve.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u11_q1',
        question: 'Dịch: "Nếu cứ sống ở đây thì sẽ yêu mến thành phố này."',
        options: ['여기서 살다 보면 정이 들 거예요.', '여기서 살아서 정이 들었어요.', '여기서 살아야 정이 들어요.', '여기서 살기 때문에 정이 들어요.'],
        correctIndex: 0,
        explanation: 'Cứ duy trì việc gì thì sẽ đạt trạng thái dùng -다 보면.'
      }
    ]
  },
  {
    id: 'tc3_u12',
    levelId: 'trung_cap_1',
    unitNumber: 12,
    titleKo: '인터넷',
    titleVi: 'Bài 12: Mạng Internet',
    titleEn: 'Unit 12: Digital Life & The Internet',
    description: 'Thế giới số, danh từ hóa -(으)ㅁ, trích dẫn gián tiếp câu mệnh lệnh -(으)라고 하다, rủ rê -자고 하다.',
    audioTrack: { trackName: 'Track 12 (Trung cấp 3)', fileName: '012.mp3', audioUrl: '/audio/so-cap-1/012.mp3', duration: '02:25' },
    vocabulary: [
      {
        id: 'tc3_u12_w1',
        hangul: '게시물',
        romaja: 'ge-si-mul',
        type: 'Danh từ',
        meaningVi: 'Bài đăng / Bài viết trên mạng',
        meaningEn: 'Post / Online posting',
        example: { ko: '유용한 정보를 담은 게시물을 올렸습니다.', vi: 'Tôi đã đăng bài viết chứa nhiều thông tin hữu ích.', en: 'I uploaded a posting containing useful information.' },
        dialogue: {
          speakerA: '친구', speakerB: '나',
          lineA: '그 사이트 비밀번호가 기억 안 나.', lineB: '본인 인증을 거쳐서 재설정하라고 하더라.',
          lineAVi: 'Tớ không nhớ mật khẩu trang web đó.', lineBVi: 'Họ bảo hãy xác thực chính chủ rồi cài đặt lại đấy.',
          lineAEn: 'I don\'t recall that website\'s password.', lineBEn: 'They said to authenticate yourself and reset it.'
        },
        exercise: {
          questionKo: '온라인 게시판이나 SNS에 올리는 글이나 사진은?',
          questionVi: 'Bài viết hoặc ảnh đăng tải lên diễn đàn hoặc mạng xã hội là?',
          questionEn: 'Article or photo uploaded to an online forum?',
          options: ['게시물', '검색어', '댓글', '다운로드'],
          correctIndex: 0,
          explanation: '게시물 (揭示物) là bài đăng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '선생님께서 과제를 오늘 자정까지 웹사이트에 올리라고 하셨어요.', vi: 'Thầy dặn hãy tải bài tập lên trang web trước nửa đêm hôm nay.', en: 'The teacher told us to upload the assignment to the website by midnight today.' },
      { time: '00:07', ko: '그럼 도서관에 가서 같이 컴퓨터로 작업하자고 친구가 제안했어요.', vi: 'Thế nên bạn tôi đã đề nghị cùng đến thư viện làm việc trên máy tính.', en: 'So my friend suggested that we go to the library and work on computers together.' }
    ],
    grammarPoints: [
      {
        name: '-(으)라고 하다 (Trích dẫn mệnh lệnh: Bảo ai hãy làm gì)',
        formula: 'Có patchim + 으라고 하다 | Không patchim + 라고 하다',
        explanationVi: 'Dùng để gián tiếp truyền đạt lại câu mệnh lệnh của người khác.',
        explanationEn: 'Indirect quotation for imperative statements (\"told someone to do\").',
        examples: [
          { ko: '의사 선생님이 푹 쉬라고 하셨어요.', vi: 'Bác sĩ bảo tôi hãy nghỉ ngơi thật tốt.', en: 'The doctor told me to rest well.' }
        ]
      },
      {
        name: '-자고 하다 (Trích dẫn rủ rê: Rủ cùng làm gì)',
        formula: 'Thân động từ + 자고 하다',
        explanationVi: 'Dùng để thuật lại lời rủ rê của người khác.',
        explanationEn: 'Indirect quotation for propositive statements (\"suggested doing together\").',
        examples: [
          { ko: '친구가 영화를 보러 가자고 했어요.', vi: 'Bạn tôi rủ đi xem phim.', en: 'My friend suggested that we go see a movie.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u12_q1',
        question: 'Dịch: "Mẹ dặn tôi hãy ăn cơm sớm."',
        options: ['어머니께서 밥을 일찍 먹으라고 하셨어요.', '어머니께서 밥을 일찍 먹자고 하셨어요.', '어머니께서 밥을 일찍 먹는다고 하셨어요.', '어머니께서 밥을 일찍 먹냐고 하셨어요.'],
        correctIndex: 0,
        explanation: 'Trích dẫn mệnh lệnh người lớn dặn làm gì: -(으)라고 하다.'
      }
    ]
  },
  {
    id: 'tc3_u13',
    levelId: 'trung_cap_1',
    unitNumber: 13,
    titleKo: '희망',
    titleVi: 'Bài 13: Hy vọng',
    titleEn: 'Unit 13: Hopes & Future Aspirations',
    description: 'Ước mơ, xu hướng phát triển -아/어 가다/오다, quyết tâm -아/어야겠다, ước chi -았/었으면 좋겠다.',
    audioTrack: { trackName: 'Track 13 (Trung cấp 3)', fileName: '013.mp3', audioUrl: '/audio/so-cap-1/013.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u13_w1',
        hangul: '꿈을 이루다',
        romaja: 'kkum-eul i-ru-da',
        type: 'Cụm động từ',
        meaningVi: 'Thực hiện ước mơ / Đạt được hoài bão',
        meaningEn: 'To achieve one\'s dream',
        example: { ko: '열심히 노력해서 꼭 꿈을 이룰 것입니다.', vi: 'Tôi sẽ nỗ lực chăm chỉ để nhất định thực hiện được ước mơ.', en: 'I will strive hard to definitely realize my dream.' },
        dialogue: {
          speakerA: '선배', speakerB: '후배',
          lineA: '앞으로 어떤 일을 하고 싶어?', lineB: '한국과 베트남을 잇는 통역사가 되고 싶어요.',
          lineAVi: 'Sau này em muốn làm công việc gì?', lineBVi: 'Em muốn trở thành thông dịch viên kết nối Việt Nam và Hàn Quốc ạ.',
          lineAEn: 'What work do you want to do ahead?', lineBEn: 'I want to become an interpreter connecting Korea and Vietnam.'
        },
        exercise: {
          questionKo: '자신이 바라던 이상이나 목표를 현실로 만드는 것은?',
          questionVi: 'Việc biến lý tưởng và mục tiêu mong ước thành hiện thực là gì?',
          questionEn: 'Making one\'s desired ideal into reality?',
          options: ['꿈을 이루다', '꿈을 꾸다', '꿈을 포기하다', '꿈을 잃다'],
          correctIndex: 0,
          explanation: '꿈을 이루다 nghĩa là hiện thực hóa ước mơ.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국어 실력이 점점 더 좋아져 가는 것을 느껴요.', vi: 'Tôi cảm nhận được trình độ tiếng Hàn đang ngày càng tiến bộ dần lên.', en: 'I feel that my Korean skills are gradually improving over time.' },
      { time: '00:07', ko: '앞으로도 더 분발해서 꼭 번역가가 되어야겠어요.', vi: 'Từ nay về sau tôi phải phấn đấu hơn nữa để nhất định trở thành dịch giả.', en: 'From now on, I must work harder to definitely become a translator.' }
    ],
    grammarPoints: [
      {
        name: '-아/어 가다 / 오다 (Tiến trình hành động hướng tới tương lai / từ quá khứ đến nay)',
        formula: 'Thân động từ + 아/어 가다 (tiếp diễn tới tương lai) / 오다 (từ quá khứ tới nay)',
        explanationVi: 'Diễn tả quá trình vận động và phát triển liên tục theo thời gian.',
        explanationEn: 'Expresses ongoing progress toward future (-가다) or from past up to now (-오다).',
        examples: [
          { ko: '지금까지 열심히 살아왔습니다.', vi: 'Cho đến nay tôi đã luôn sống rất chăm chỉ.', en: 'Up until now, I have lived diligently.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u13_q1',
        question: 'Dịch: "Kỳ thi sắp đến gần rồi, tôi phải học thôi."',
        options: ['시험이 다가오니까 공부해야겠어요.', '시험이 다가오니까 공부했으면 좋겠어요.', '시험이 다가오니까 공부할 것 같아요.', '시험이 다가오니까 공부하는 편이에요.'],
        correctIndex: 0,
        explanation: 'Quyết tâm tự nhủ phải làm gì: -아/어야겠다.'
      }
    ]
  },
  {
    id: 'tc3_u14',
    levelId: 'trung_cap_1',
    unitNumber: 14,
    titleKo: '영화와 드라마',
    titleVi: 'Bài 14: Phim ảnh và Truyền hình',
    titleEn: 'Unit 14: K-Dramas & Cinema Culture',
    description: 'Văn hóa điện ảnh, làn sóng Hallyu, ngữ pháp dù có thế nào (아무리) -아/어도, giải thích lý do -거든(요), hồi tưởng cảm thán -던데요.',
    audioTrack: { trackName: 'Track 14 (Trung cấp 3)', fileName: '014.mp3', audioUrl: '/audio/so-cap-1/014.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc3_u14_w1',
        hangul: '줄거리',
        romaja: 'jul-geo-ri',
        type: 'Danh từ',
        meaningVi: 'Cốt truyện / Nội dung tóm tắt',
        meaningEn: 'Plot / Synopsis',
        example: { ko: '이 드라마는 줄거리가 매우 흥미진진합니다.', vi: 'Bộ phim truyền hình này cốt truyện vô cùng kịch tính hấp dẫn.', en: 'This drama has a very thrilling plot.' },
        dialogue: {
          speakerA: '친구 A', speakerB: '친구 B',
          lineA: '어제 새로 시작한 드라마 봤어?', lineB: '응, 주인공들의 갈등이 정말 긴장감 넘치던데!',
          lineAVi: 'Cậu đã xem bộ phim mới phát sóng hôm qua chưa?', lineBVi: 'Rồi, mâu thuẫn giữa các nhân vật chính đầy căng thẳng luôn đấy!',
          lineAEn: 'Did you watch the new drama started yesterday?', lineBEn: 'Yes, the conflict between lead actors was so tense!'
        },
        exercise: {
          questionKo: '소설이나 영화의 전체적인 뼈대가 되는 내용은?',
          questionVi: 'Nội dung khung sườn bao quát của tiểu thuyết hoặc phim là gì?',
          questionEn: 'Overall outline and summary of a story?',
          options: ['줄거리', '배경음악', '등장인물', '자막'],
          correctIndex: 0,
          explanation: '줄거리 là cốt truyện.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '아무리 바빠도 이 드라마의 마지막 회는 꼭 봐야 해요.', vi: 'Dù có bận đến mấy thì tập cuối bộ phim này cũng nhất định phải xem.', en: 'No matter how busy I am, I must watch the final episode of this drama.' },
      { time: '00:07', ko: '결말이 어떻게 될지 너무 궁금하거든요.', vi: 'Bởi vì tôi quá đỗi tò mò kết cục sẽ ra sao mà.', en: 'Because I am so curious about how the ending will turn out.' }
    ],
    grammarPoints: [
      {
        name: '-거든(요) (Bởi vì... - Cung cấp lý do người nghe chưa biết)',
        formula: 'Thân động/tính từ + 거든요',
        explanationVi: 'Dùng ở cuối câu để đưa ra lời giải thích, lý do mà người đối thoại chưa biết.',
        explanationEn: 'Sentence-final particle providing a reason or background info unknown to the listener.',
        examples: [
          { ko: '저는 매운 음식을 못 먹거든요.', vi: 'Vì tôi không ăn được đồ cay mà.', en: 'You see, because I cannot eat spicy food.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u14_q1',
        question: 'Dịch: "Dù khó khăn đến mấy tôi cũng sẽ không bỏ cuộc."',
        options: ['아무리 어려워도 포기하지 않을 거예요.', '어려운 대신에 포기하지 않을 거예요.', '어려운 바람에 포기하지 않을 거예요.', '어려울까 봐 포기하지 않을 거예요.'],
        correctIndex: 0,
        explanation: 'Cấu trúc "Dù... đến mấy": (아무리) -아/어도.'
      }
    ]
  },
  {
    id: 'tc3_u15',
    levelId: 'trung_cap_1',
    unitNumber: 15,
    titleKo: '예절과 규칙',
    titleVi: 'Bài 15: Lễ tiết và Quy tắc',
    titleEn: 'Unit 15: Etiquette & Social Rules',
    description: 'Quy tắc xã hội, làm theo đúng 대로, buộc phải làm -지 않으면 안 되다, đúng lúc đang định -(으)려던 참이다.',
    audioTrack: { trackName: 'Track 15 (Trung cấp 3)', fileName: '015.mp3', audioUrl: '/audio/so-cap-1/015.mp3', duration: '02:35' },
    vocabulary: [
      {
        id: 'tc3_u15_w1',
        hangul: '예의를 지키다',
        romaja: 'ye-ui-reul ji-ki-da',
        type: 'Cụm động từ',
        meaningVi: 'Giữ gìn phép lịch sự / Tôn trọng lễ nghi',
        meaningEn: 'To observe etiquette / To be polite',
        example: { ko: '어른 앞에서는 항상 예의를 지켜야 합니다.', vi: 'Trước mặt người lớn luôn luôn phải giữ phép lịch sự.', en: 'One must always observe etiquette in front of elders.' },
        dialogue: {
          speakerA: '선배', speakerB: '후배',
          lineA: '한국에서는 어른께 물건을 드릴 때 두 손을 사용해야 해.', lineB: '네, 알려주신 대로 잘 실천하겠습니다.',
          lineAVi: 'Ở Hàn Quốc khi đưa đồ cho người lớn phải dùng hai tay.', lineBVi: 'Dạ, em sẽ thực hiện đúng như những gì tiền bối dặn ạ.',
          lineAEn: 'In Korea, you must use both hands when handing items to elders.', lineBEn: 'Yes, I will practice well according to what you taught.'
        },
        exercise: {
          questionKo: '사회 구성원으로서 도덕과 규범에 맞는 태도를 취하는 것은?',
          questionVi: 'Thái độ ứng xử đúng mực theo quy chuẩn đạo đức xã hội là gì?',
          questionEn: 'Behaving in accordance with social norms and manners?',
          options: ['예의를 지키다', '규칙을 어기다', '질서를 어지럽히다', '참견하다'],
          correctIndex: 0,
          explanation: '예의를 지키다 nghĩa là giữ phép lịch sự.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '공동체 생활에서는 정해진 규칙을 따르지 않으면 안 됩니다.', vi: 'Trong đời sống cộng đồng, nếu không tuân thủ quy tắc đã đặt ra thì không được.', en: 'In community life, one must comply with established rules.' },
      { time: '00:07', ko: '마침 저도 규칙 안내문을 읽어 보려던 참이었어요.', vi: 'Đúng lúc tôi cũng đang định đọc tờ thông báo quy tắc đây.', en: 'It so happens that I was just about to read the rule notice.' }
    ],
    grammarPoints: [
      {
        name: '-지 않으면 안 되다 (Không thể không... / Bắt buộc phải...)',
        formula: 'Thân động/tính từ + 지 않으면 안 되다',
        explanationVi: 'Hình thức phủ định kép nhấn mạnh tính tất yếu, bắt buộc phải làm.',
        explanationEn: 'Double negative expressing strong necessity or obligation (\"must / have to\").',
        examples: [
          { ko: '약속을 지키지 않으면 안 돼요.', vi: 'Bắt buộc phải giữ lời hứa.', en: 'You must keep your promise.' }
        ]
      },
      {
        name: '-(으)려던 참이다 (Đúng lúc đang tính / Đang định làm gì)',
        formula: 'Thân động từ + (으)려던 참이다',
        explanationVi: 'Diễn tả người nói vừa đúng lúc đang chuẩn bị tiến hành một hành động nào đó.',
        explanationEn: 'Indicates that one was just on the verge of doing something (\"just about to\").',
        examples: [
          { ko: '지금 막 전화를 걸려던 참이었어요.', vi: 'Tôi vừa đúng lúc đang định gọi điện cho bạn đây.', en: 'I was just about to make a call.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc3_u15_q1',
        question: 'Dịch: "Tôi đúng lúc đang định ra ngoài."',
        options: ['외출하려던 참이었어요.', '외출할 것 같았어요.', '외출하는 편이었어요.', '외출하느라고 바빴어요.'],
        correctIndex: 0,
        explanation: 'Vừa đúng lúc định làm gì dùng -(으)려던 참이다.'
      }
    ]
  }
];
