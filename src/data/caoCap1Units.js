// Dữ liệu 15 bài học Cao cấp 1 (고급 5) theo Giáo trình Tiếng Hàn Tổng Hợp
export const CAO_CAP_1_UNITS = [
  {
    id: 'cc5_u1',
    levelId: 'cao_cap_1',
    unitNumber: 1,
    titleKo: '만남과 이별',
    titleVi: 'Bài 1: Gặp gỡ và Chia tay',
    titleEn: 'Unit 1: Encounters & Farewells',
    description: 'Triết lý nhân duyên, nuối tiếc -(으)ㄹ 걸 (giá mà đã), do nguyên nhân (으)로 인해, kết quả -게 되다.',
    audioTrack: { trackName: 'Track 01 (Cao cấp 5)', fileName: '001.mp3', audioUrl: '/audio/so-cap-1/001.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u1_w1',
        hangul: '인연',
        romaja: 'in-yeon',
        type: 'Danh từ',
        meaningVi: 'Nhân duyên / Duyên phận',
        meaningEn: 'Destiny / Ties / Karmic bond',
        example: { ko: '옷깃만 스쳐도 인연이라는 말이 있습니다.', vi: 'Có câu nói rằng dù chỉ thoáng qua chạm tà áo nhau cũng là nhân duyên.', en: 'There is a saying that even grazing sleeves is a bond of destiny.' },
        dialogue: {
          speakerA: '선배', speakerB: '후배',
          lineA: '헤어짐이 아쉽겠지만 이것 또한 새로운 시작일세.', lineB: '네, 함께했던 소중한 인연을 평생 간직하겠습니다.',
          lineAVi: 'Chia tay hẳn sẽ nhiều lưu luyến nhưng đây cũng là khởi đầu mới.', lineBVi: 'Dạ, em sẽ trân trọng mối nhân duyên quý báu bên nhau suốt đời.',
          lineAEn: 'Parting is bittersweet, but this too is a fresh beginning.', lineBEn: 'Yes, I will treasure the precious bond we shared for a lifetime.'
        },
        exercise: {
          questionKo: '사람과 사람 사이에 맺어지는 깊은 관계나 운명은?',
          questionVi: 'Mối quan hệ sâu sắc hoặc định mệnh gắn kết giữa người với người là?',
          questionEn: 'Deep karmic tie or connection between people?',
          options: ['인연', '우연', '필연', '악연'],
          correctIndex: 0,
          explanation: '인연 (因緣) là nhân duyên.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '회자정리(會者定離)라는 말처럼 만남이 있으면 이별이 있는 법입니다.', vi: 'Như câu \"hội giả định ly\", phàm có hội ngộ ắt có ngày chia ly theo lẽ tự nhiên.', en: 'As the adage goes, meeting inevitably entails parting.' },
      { time: '00:08', ko: '그때 진심 어린 말을 더 많이 건넬 걸 그랬습니다.', vi: 'Giá mà khi đó tôi nói với người ấy nhiều lời chân thành hơn thì tốt biết bao.', en: 'I should have offered more sincere words back then.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 걸 (그랬다) (Biết thế thì đã... - Nuối tiếc quá khứ)',
        formula: 'Thân động từ + (으)ㄹ 걸 (그랬다)',
        explanationVi: 'Diễn tả sự ân hận, hối tiếc vì đã không làm một hành động nào đó trong quá khứ.',
        explanationEn: 'Expresses mild regret about an undone action in the past (\"I should have done\").',
        examples: [
          { ko: '조금 더 일찍 출발할 걸 그랬어요.', vi: 'Biết thế xuất phát sớm hơn một chút có phải tốt không.', en: 'I should have departed a bit earlier.' }
        ]
      },
      {
        name: '(으)로 인해(서) (Do / Do bởi / Do hậu quả của...)',
        formula: 'Danh từ + (으)로 인해(서)',
        explanationVi: 'Văn phong trang trọng diễn đạt nguyên nhân đưa đến một kết quả hoặc biến cố nào đó.',
        explanationEn: 'Formal particle denoting causation or ground (\"due to / owing to\").',
        examples: [
          { ko: '폭설로 인해 교통이 마비되었습니다.', vi: 'Do tuyết rơi dày đặc mà giao thông bị tê liệt.', en: 'Traffic was paralyzed due to heavy snow.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u1_q1',
        question: 'Dịch sự nuối tiếc: "Biết thế tôi đã học hành chăm chỉ hơn."',
        options: ['열심히 공부할 걸 그랬어요.', '열심히 공부할 텐데요.', '열심히 공부할 리가 없어요.', '열심히 공부할 모양이에요.'],
        correctIndex: 0,
        explanation: 'Nuối tiếc về hành động trong quá khứ dùng -(으)ㄹ 걸 그랬다.'
      }
    ]
  },
  {
    id: 'cc5_u2',
    levelId: 'cao_cap_1',
    unitNumber: 2,
    titleKo: '서울',
    titleVi: 'Bài 2: Thủ đô Seoul',
    titleEn: 'Unit 2: Seoul - Tradition & Modernity',
    description: 'Thủ đô ngàn năm văn hiến, tương xứng với -(으)ㄴ/는 만큼, chỉ có -(으)ㄹ 뿐이다, với tư cách (으)로서.',
    audioTrack: { trackName: 'Track 02 (Cao cấp 5)', fileName: '002.mp3', audioUrl: '/audio/so-cap-1/002.mp3', duration: '03:10' },
    vocabulary: [
      {
        id: 'cc5_u2_w1',
        hangul: '공존',
        romaja: 'gong-jon',
        type: 'Danh từ',
        meaningVi: 'Cùng tồn tại / Chung sống hòa hợp',
        meaningEn: 'Coexistence',
        example: { ko: '서울은 전통과 현대가 조화롭게 공존하는 도시입니다.', vi: 'Seoul là đô thị nơi truyền thống và hiện đại cùng tồn tại hài hòa.', en: 'Seoul is a city where tradition and modernity harmoniously coexist.' },
        dialogue: {
          speakerA: '도시학자', speakerB: '학생',
          lineA: '한양도성의 역사적 가치를 어떻게 보십니까?', lineB: '수도 서울의 정체성을 보존하는 핵심 유산으로서 매우 소중합니다.',
          lineAVi: 'Thầy đánh giá giá trị lịch sử của tường thành Hanyang thế nào?', lineBVi: 'Với tư cách là di sản cốt lõi bảo tồn bản sắc thủ đô Seoul, nó cực kỳ vô giá.',
          lineAEn: 'How do you view the historical value of Hanyang City Wall?', lineBEn: 'As a key heritage preserving the capital Seoul\'s identity, it is invaluable.'
        },
        exercise: {
          questionKo: '서로 다른 두 가지가 한곳에 함께 존재하는 것은?',
          questionVi: 'Hai yếu tố khác biệt cùng hiện diện hòa hợp ở một nơi là gì?',
          questionEn: 'Two different elements existing together in harmony?',
          options: ['공존', '갈등', '단절', '지배'],
          correctIndex: 0,
          explanation: '공존 (共存) là cùng tồn tại, song hành.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '세계적인 메트로폴리스로서 서울은 눈부신 발전을 이룩했습니다.', vi: 'Với tư cách là đô thị quốc tế tầm cỡ, Seoul đã đạt được bước phát triển rực rỡ.', en: 'As a global metropolis, Seoul has achieved remarkable development.' },
      { time: '00:08', ko: '시민들이 피땀 흘려 노력한 만큼 오늘의 번영을 누리게 된 것입니다.', vi: 'Chính tương xứng với mồ hôi nước mắt nỗ lực của nhân dân mà ta mới có được phồn vinh hôm nay.', en: 'It is in proportion to citizens\' hard efforts that we enjoy today\'s prosperity.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 만큼 (Tương xứng với / Đúng như mức độ...)',
        formula: 'Động/Tính từ + -(으)ㄴ/는 만큼',
        explanationVi: 'Diễn tả nguyên nhân hoặc mức độ tương xứng, tỉ lệ thuận với vế trước.',
        explanationEn: 'Indicates correspondence in degree or proportion (\"as much as / to the extent that\").',
        examples: [
          { ko: '노력한 만큼 좋은 결실을 맺을 것입니다.', vi: 'Nỗ lực bao nhiêu sẽ gặt hái quả ngọt bấy nhiêu.', en: 'You will bear good fruit as much as you strive.' }
        ]
      },
      {
        name: '(으)로서 (Với tư cách / Với vai trò là...)',
        formula: 'Danh từ chỉ người/tư cách + (으)로서',
        explanationVi: 'Chỉ địa vị, thân phận hoặc tư cách pháp lý của chủ thể.',
        explanationEn: 'Indicates status, qualification, or capacity (\"as / in the capacity of\").',
        examples: [
          { ko: '교사로서 학생들에게 모범을 보여야 합니다.', vi: 'Với tư cách là nhà giáo phải làm gương cho học sinh.', en: 'As a teacher, one must set an example for students.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u2_q1',
        question: 'Dịch: "Với tư cách là một công dân, tôi có quyền bầu cử."',
        options: ['시민으로서 투표할 권리가 있습니다.', '시민으로써 투표할 권리가 있습니다.', '시민으로 인해 투표할 권리가 있습니다.', '시민만큼 투표할 권리가 있습니다.'],
        correctIndex: 0,
        explanation: 'Chỉ tư cách con người dùng (으)로서.'
      }
    ]
  },
  {
    id: 'cc5_u3',
    levelId: 'cao_cap_1',
    unitNumber: 3,
    titleKo: '한국의 역사',
    titleVi: 'Bài 3: Lịch sử Hàn Quốc',
    titleEn: 'Unit 3: Korean History & Dynasties',
    description: 'Tiến trình lịch sử, như đã biết -다시피, thông qua / bằng cách -(으)ㅁ으로써, đến bờ vực -(으)ㄹ 지경이다.',
    audioTrack: { trackName: 'Track 03 (Cao cấp 5)', fileName: '003.mp3', audioUrl: '/audio/so-cap-1/003.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u3_w1',
        hangul: '건국',
        romaja: 'geon-guk',
        type: 'Danh từ',
        meaningVi: 'Thành lập đất nước / Dựng nước / Lập quốc',
        meaningEn: 'Founding of a nation',
        example: { ko: '단군신화는 고조선의 건국 이념을 담고 있습니다.', vi: 'Huyền thoại Dangun chứa đựng triết lý lập quốc của vương triều Gojoseon.', en: 'The Dangun myth embodies the founding philosophy of Gojoseon.' },
        dialogue: {
          speakerA: '역사학자', speakerB: '학생',
          lineA: '훈민정음 창제의 의의는 무엇일까요?', lineB: '백성을 계몽함으로써 문화적 자주성을 확립한 데 있습니다.',
          lineAVi: 'Ý nghĩa của việc sáng tạo chữ Hunminjeongeum là gì?', lineBVi: 'Chính là thông qua việc khai sáng cho bách tính mà xác lập tính tự chủ văn hóa.',
          lineAEn: 'What is the significance of creating Hunminjeongeum?', lineBEn: 'It lies in establishing cultural independence by enlightening the people.'
        },
        exercise: {
          questionKo: '새로운 나라를 세우는 역사적 사건은?',
          questionVi: 'Sự kiện lịch sử dựng nên một quốc gia mới là gì?',
          questionEn: 'Historical event of establishing a new state?',
          options: ['건국', '패망', '침략', '조약'],
          correctIndex: 0,
          explanation: '건국 (建國) nghĩa là dựng nước, lập quốc.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '여러분도 익히 아시다시피 조선은 유교적 통치 이념을 바탕으로 세워졌습니다.', vi: 'Như quý vị cũng đã tường tận, triều đại Joseon được dựng nên trên nền tảng trị quốc của Nho giáo.', en: 'As you are well aware, Joseon was founded on Confucian governing ideals.' },
      { time: '00:09', ko: '수많은 국난을 슬기롭게 극복함으로써 민족의 얼을 지켜 냈습니다.', vi: 'Thông qua việc vượt qua muôn vàn quốc nạn một cách khôn khéo, họ đã bảo toàn được hồn thiêng dân tộc.', en: 'By sagaciously overcoming numerous national crises, they preserved the spirit of the nation.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㅁ으로써 (Bằng cách / Thông qua việc... - Phương thức đạt mục tiêu)',
        formula: 'Thân động từ + (으)ㅁ으로써',
        explanationVi: 'Diễn tả phương tiện hoặc phương thức trọng yếu để hoàn thành một sự nghiệp, mục đích.',
        explanationEn: 'Formal literary ending expressing method or means (\"by doing / through\").',
        examples: [
          { ko: '신기술을 개발함으로써 국제 경쟁력을 확보했습니다.', vi: 'Thông qua việc phát minh công nghệ mới, ta đã xác lập được năng lực cạnh tranh quốc tế.', en: 'By developing new technology, we secured international competitiveness.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u3_q1',
        question: 'Dịch: "Như quý vị đã thấy tận mắt..."',
        options: ['직접 보시다시피', '직접 보시느니', '직접 보심으로써', '직접 보실 뿐더러'],
        correctIndex: 0,
        explanation: 'Cấu trúc "như đã..." dùng -다시피 -> 보시다시피.'
      }
    ]
  },
  {
    id: 'cc5_u4',
    levelId: 'cao_cap_1',
    unitNumber: 4,
    titleKo: '역사 속의 인물',
    titleVi: 'Bài 4: Nhân vật trong lịch sử',
    titleEn: 'Unit 4: Figures in History & Legacy',
    description: 'Vĩ nhân lịch sử, liên từ liệt kê trọng thể 이며, giả định quá khứ trái thực tế -았/었더라면.',
    audioTrack: { trackName: 'Track 04 (Cao cấp 5)', fileName: '004.mp3', audioUrl: '/audio/so-cap-1/004.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u4_w1',
        hangul: '위인',
        romaja: 'wi-in',
        type: 'Danh từ',
        meaningVi: 'Vĩ nhân / Danh nhân',
        meaningEn: 'Great historical figure',
        example: { ko: '세종대왕은 한국사에서 가장 존경받는 위인입니다.', vi: 'Vua Sejong là bậc vĩ nhân được tôn kính bậc nhất trong lịch sử Hàn Quốc.', en: 'King Sejong the Great is the most revered historical figure in Korean history.' },
        dialogue: {
          speakerA: '학생', speakerB: '교수',
          lineA: '이순신 장군의 승리가 없었더라면 어떻게 되었을까요?', lineB: '조선의 국권이 흔들리고 백성들의 고통이 극에 달했을 것입니다.',
          lineAVi: 'Nếu thuở ấy không có những thắng lợi của tướng quân Yi Sun-sin thì sẽ ra sao ạ?', lineBVi: 'Chủ quyền Joseon hẳn đã lung lay và nỗi đau bách tính ắt lên đến tột cùng.',
          lineAEn: 'What would have happened if Admiral Yi had not won?', lineBEn: 'Joseon\'s sovereignty would have shaken and citizens\' suffering peaked.'
        },
        exercise: {
          questionKo: '역사적으로 뛰어난 업적을 남긴 훌륭한 인물은?',
          questionVi: 'Nhân vật kiệt xuất để lại chiến công vĩ đại trong lịch sử là?',
          questionEn: 'Remarkable person who left outstanding historical achievements?',
          options: ['위인', '간신', '범인', '평민'],
          correctIndex: 0,
          explanation: '위인 (偉人) là bậc vĩ nhân.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '그 지도자가 결단을 내리지 않았더라면 역사의 물줄기는 바뀌었을 것입니다.', vi: 'Nếu người lãnh đạo ấy đã không dứt khoát hạ quyết tâm, dòng chảy lịch sử hẳn đã rẽ sang hướng khác.', en: 'Had that leader not made the decisive move, the stream of history would have altered.' },
      { time: '00:08', ko: '그는 탁월한 지략가이며 동시에 청렴결백한 공직자였습니다.', vi: 'Ông vừa là một nhà mưu lược trứ danh, đồng thời lại là một công bộc thanh liêm chính trực.', en: 'He was an outstanding strategist and simultaneously an incorruptible public servant.' }
    ],
    grammarPoints: [
      {
        name: '-았/었더라면 (Giá như trong quá khứ đã... - Giả thiết trái với sự thật quá khứ)',
        formula: 'Thân động/tính từ + 았/었더라면',
        explanationVi: 'Đặt ra giả định hoàn toàn trái ngược với thực tế đã xảy ra trong quá khứ.',
        explanationEn: 'Past counterfactual conditional (\"if only ... had done\").',
        examples: [
          { ko: '조금만 더 주의를 기울였더라면 사고를 막았을 것입니다.', vi: 'Giá mà để tâm chú ý hơn một chút thì đã có thể ngăn chặn được tai nạn.', en: 'If only we had paid a bit more attention, the accident would have been prevented.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u4_q1',
        question: 'Dịch: "Nếu thuở ấy chăm chỉ thì giờ đây tôi đã thành công rồi."',
        options: ['그때 열심히 했더라면 지금 성공했을 텐데요.', '그때 열심히 한 만큼 지금 성공했어요.', '그때 열심히 함으로써 지금 성공했어요.', '그때 열심히 하느니 지금 성공하겠어요.'],
        correctIndex: 0,
        explanation: 'Giả định quá khứ trái thực tế dùng -았/었더라면.'
      }
    ]
  },
  {
    id: 'cc5_u5',
    levelId: 'cao_cap_1',
    unitNumber: 5,
    titleKo: '뉴스와 신문',
    titleVi: 'Bài 5: Tin tức và Báo chí',
    titleEn: 'Unit 5: Journalism & Media Analysis',
    description: 'Báo chí truyền thông, cuối cùng đành rơi vào -고 말다, xác nhận tin đồn -(ㄴ/는)다지요?.',
    audioTrack: { trackName: 'Track 05 (Cao cấp 5)', fileName: '005.mp3', audioUrl: '/audio/so-cap-1/005.mp3', duration: '03:10' },
    vocabulary: [
      {
        id: 'cc5_u5_w1',
        hangul: '특종',
        romaja: 'teuk-jong',
        type: 'Danh từ',
        meaningVi: 'Tin độc quyền / Tin sốt dẻo',
        meaningEn: 'Scoop / Exclusive news',
        example: { ko: '그 기자는 끈질긴 취재 끝에 특종을 터뜨렸습니다.', vi: 'Nhà báo đó sau quá trình tác nghiệp bền bỉ đã tung ra tin tức độc quyền chấn động.', en: 'That journalist broke a scoop after persistent investigative reporting.' },
        dialogue: {
          speakerA: '편집장', speakerB: '기자',
          lineA: '이번 사건의 배후가 밝혀졌다지요?', lineB: '네, 결국 핵심 연루자가 혐의를 인정하고 말았습니다.',
          lineAVi: 'Nghe bảo kẻ đứng sau vụ việc lần này đã lộ diện rồi phải không?', lineBVi: 'Vâng, rốt cuộc nhân vật dính líu then chốt đã đành phải cúi đầu nhận tội.',
          lineAEn: 'Is it true that the mastermind behind this case was revealed?', lineBEn: 'Yes, the key person involved ended up admitting the charges.'
        },
        exercise: {
          questionKo: '다른 언론사보다 먼저 단독으로 보도하는 중요한 뉴스는?',
          questionVi: 'Tin tức quan trọng do một tòa soạn độc quyền đưa tin trước các báo khác là?',
          questionEn: 'Important news reported exclusively ahead of competitors?',
          options: ['특종', '오보', '속보', '사설'],
          correctIndex: 0,
          explanation: '특종 (特種) là tin sốt dẻo độc quyền (scoop).'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '시장의 과열 양상이 지속되더니 결국 거품이 꺼지고 말았습니다.', vi: 'Thị trường quá nóng kéo dài rốt cuộc bong bóng cũng đành phải vỡ tan.', en: 'The overblown market persisted and eventually the bubble ended up bursting.' },
      { time: '00:08', ko: '정부에서 특단의 대책을 곧 발표한다지요?', vi: 'Nghe nói chính phủ sắp sửa công bố giải pháp đặc cách đúng không ạ?', en: 'They say the government will announce special countermeasures soon, right?' }
    ],
    grammarPoints: [
      {
        name: '-고 말다 (Cuối cùng đành phải... - Kết cục ngoài ý muốn)',
        formula: 'Thân động từ + 고 말다',
        explanationVi: 'Diễn tả hành động rốt cuộc đã xảy ra dẫn tới một kết cục đáng tiếc ngoài mong đợi.',
        explanationEn: 'Indicates that an undesirable action ultimately ended up happening (\"ended up doing\").',
        examples: [
          { ko: '끝내 비밀을 누설하고 말았어요.', vi: 'Đến cuối cùng tôi đã lỡ để lộ bí mật mất rồi.', en: 'In the end, I ended up leaking the secret.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u5_q1',
        question: 'Dịch: "Rốt cuộc thì đàm phán đã thất bại."',
        options: ['결국 협상이 결렬되고 말았습니다.', '결국 협상이 결렬될 뿐입니다.', '결국 협상이 결렬되는 법입니다.', '결국 협상이 결렬되기에 이르렀습니다.'],
        correctIndex: 0,
        explanation: 'Kết cục đáng tiếc rốt cuộc đã diễn ra dùng -고 말다.'
      }
    ]
  },
  {
    id: 'cc5_u6',
    levelId: 'cao_cap_1',
    unitNumber: 6,
    titleKo: '역사와 문화',
    titleVi: 'Bài 6: Lịch sử và Văn hóa',
    titleEn: 'Unit 6: Cultural Heritage & History',
    description: 'Di sản phi vật thể, giữ gìn bản sắc, phương thức -(으)ㅁ으로써, tương xứng -(으)ㄴ/는 만큼.',
    audioTrack: { trackName: 'Track 06 (Cao cấp 5)', fileName: '006.mp3', audioUrl: '/audio/so-cap-1/006.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u6_w1',
        hangul: '계승하다',
        romaja: 'gye-seung-ha-da',
        type: 'Động từ',
        meaningVi: 'Kế thừa / Nối dõi phát huy',
        meaningEn: 'To inherit / To succeed',
        example: { ko: '선조들의 지혜와 전통문화를 올바르게 계승해야 합니다.', vi: 'Chúng ta phải kế thừa đúng đắn trí tuệ và văn hóa truyền thống của tiền nhân.', en: 'We must properly inherit our ancestors\' wisdom and traditional culture.' },
        dialogue: {
          speakerA: '문화재청장', speakerB: '연구원',
          lineA: '무형문화재 전승에 어떤 어려움이 있습니까?', lineB: '젊은 세대의 관심이 적어 전수자를 육성하기가 여간 어렵지 않습니다.',
          lineAVi: 'Việc truyền thừa di sản văn hóa phi vật thể đang gặp khó khăn gì?', lineBVi: 'Thế hệ trẻ ít quan tâm nên việc bồi dưỡng người kế nghiệp khó khăn không hề nhỏ.',
          lineAEn: 'What difficulties are in transmitting intangible heritage?', lineBEn: 'Youth interest is low, making nurturing successors extremely difficult.'
        },
        exercise: {
          questionKo: '선대의 업적이나 문화적 유산을 이어받는 것은?',
          questionVi: 'Việc tiếp nhận và phát huy sự nghiệp di sản của thế hệ trước là?',
          questionEn: 'Carrying forward ancestors\' accomplishments or cultural legacy?',
          options: ['계승하다', '단념하다', '왜곡하다', '은폐하다'],
          correctIndex: 0,
          explanation: '계승하다 (繼承) là kế thừa, nối tiếp truyền thống.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '전통문화를 현대적 감각으로 재해석함으로써 세계화에 성공했습니다.', vi: 'Bằng cách tái diễn giải văn hóa truyền thống dưới lăng kính hiện đại, ta đã thành công toàn cầu hóa.', en: 'By reinterpreting traditional culture with modern senses, we succeeded in globalization.' },
      { time: '00:08', ko: '유서 깊은 유산인 만큼 철저한 보존 대책이 뒤따라야 마땅합니다.', vi: 'Tương xứng với di sản thâm sâu dày dặn lịch sử, đương nhiên phải có đối sách bảo tồn triệt để.', en: 'As it is a venerable heritage, thorough preservation measures naturally must follow.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㅁ으로써 (Bằng việc / Thông qua...)',
        formula: 'Thân động từ + (으)ㅁ으로써',
        explanationVi: 'Chỉ phương tiện, phương pháp đóng vai trò quyết định để mang lại thành quả.',
        explanationEn: 'Grammatical device designating the crucial instrument or means.',
        examples: [
          { ko: '대화를 나눔으로써 오해를 풀었습니다.', vi: 'Thông qua việc cởi mở trò chuyện, ta đã hóa giải hiểu lầm.', en: 'By sharing dialogue, we cleared up the misunderstanding.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u6_q1',
        question: 'Dịch: "Thông qua việc giữ gìn truyền thống, chúng ta bảo vệ bản sắc."',
        options: ['전통을 지킴으로써 정체성을 확립합니다.', '전통을 지킬 뿐만 아니라 정체성을 확립합니다.', '전통을 지키는 탓에 정체성을 확립합니다.', '전통을 지킬까 봐 정체성을 확립합니다.'],
        correctIndex: 0,
        explanation: 'Phương thức then chốt đạt mục đích: -(으)ㅁ으로써.'
      }
    ]
  },
  {
    id: 'cc5_u7',
    levelId: 'cao_cap_1',
    unitNumber: 7,
    titleKo: '속담과 관용표현',
    titleVi: 'Bài 7: Tục ngữ & Quán dụng ngữ',
    titleEn: 'Unit 7: Proverbs & Idiomatic Expressions',
    description: 'Thành ngữ dân gian, lẽ dĩ nhiên -(으)ㄴ/는 법이다, như thể là -(으)ㄴ/는 듯이, viện dẫn -(ㄴ/는)다고.',
    audioTrack: { trackName: 'Track 07 (Cao cấp 5)', fileName: '007.mp3', audioUrl: '/audio/so-cap-1/007.mp3', duration: '03:10' },
    vocabulary: [
      {
        id: 'cc5_u7_w1',
        hangul: '가는 말이 고와야 오는 말이 곱다',
        romaja: 'ga-neun mar-i go-wa-ya o-neun mar-i gop-da',
        type: 'Tục ngữ',
        meaningVi: 'Lời nói đi có đẹp thì lời nhận về mới hay (Chim khôn hót tiếng rảnh rang, người khôn nói tiếng dịu dàng dễ nghe)',
        meaningEn: 'Nice words bring nice words in return',
        example: { ko: '가는 말이 고와야 오는 말이 고운 법이니 항상 말을 조심해라.', vi: 'Lời nói đi có đẹp thì nhận lại mới hay là lẽ tự nhiên, hãy luôn cẩn trọng lời ăn tiếng nói.', en: 'Treat others kindly to be treated kindly, so always mind your speech.' },
        dialogue: {
          speakerA: '어머니', speakerB: '딸',
          lineA: '친구와 말다툼을 했다면서?', lineB: '제가 무심코 한 말이 화근이었어요. 가는 말이 고와야 하는 법인데...',
          lineAVi: 'Nghe bảo con vừa cãi cọ với bạn à?', lineBVi: 'Lời con lỡ thốt ra vô ý chính là mầm mống họa. Đáng ra lời nói đi phải đẹp đẽ là lẽ dĩ nhiên...',
          lineAEn: 'I heard you quarreled with your friend?', lineBEn: 'A thoughtless word of mine was the spark. Good words should yield good words naturally...'
        },
        exercise: {
          questionKo: '내가 남에게 좋게 대해야 남도 나를 좋게 대한다는 속담은?',
          questionVi: 'Câu tục ngữ khuyên ta phải đối xử tử tế với người thì người mới tử tế với ta là?',
          questionEn: 'Proverb that you must treat others well to receive good treatment?',
          options: ['가는 말이 고와야 오는 말이 곱다', '소 잃고 외양간 고친다', '백지장도 맞들면 낫다', '발 없는 말이 천 리 간다'],
          correctIndex: 0,
          explanation: '가는 말이 고와야 오는 말이 곱다 là tục ngữ về giao tiếp ứng xử.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '시작이 반이라는 말처럼 첫걸음을 떼면 일은 절반쯤 풀리는 법이에요.', vi: 'Như câu vạn sự khởi đầu nan có bắt đầu là coi như xong phân nửa, hễ cất bước đi là việc đã hanh thông.', en: 'As well begun is half done, once you take the first step, things naturally work out halfway.' },
      { time: '00:08', ko: '그는 모든 비밀을 다 알고 있는 듯이 의미심장한 미소를 지었습니다.', vi: 'Anh ta nở nụ cười đầy ẩn ý cứ như thể biết tỏng mọi bí mật trên đời.', en: 'He wore a meaningful smile as if he already knew all the secrets.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 법이다 (Là lẽ đương nhiên / Tất yếu theo quy luật)',
        formula: 'Động từ + 는 법이다 | Tính từ + (으)ㄴ 법이다',
        explanationVi: 'Diễn tả chân lý phổ quát, đạo lý tự nhiên tất yếu ai cũng phải công nhận.',
        explanationEn: 'Expresses natural law or inevitable truth (\"it is natural that / bound to\").',
        examples: [
          { ko: '화려한 꽃도 시간이 지나면 시드는 법입니다.', vi: 'Hoa dẫu có rực rỡ đến mấy rồi theo thời gian cũng tàn úa là lẽ thường tình.', en: 'Even splendid flowers are bound to wither over time.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u7_q1',
        question: 'Dịch chân lý: "Ai rồi cũng sẽ già đi theo năm tháng là lẽ đương nhiên."',
        options: ['누구나 세월이 흐르면 늙는 법입니다.', '누구나 세월이 흐르면 늙을 뻔합니다.', '누구나 세월이 흐르면 늙는 척합니다.', '누구나 세월이 흐르면 늙을까 봐요.'],
        correctIndex: 0,
        explanation: 'Quy luật tất yếu tự nhiên dùng -는 법이다.'
      }
    ]
  },
  {
    id: 'cc5_u8',
    levelId: 'cao_cap_1',
    unitNumber: 8,
    titleKo: '정치제도',
    titleVi: 'Bài 8: Chế độ chính trị',
    titleEn: 'Unit 8: Political Systems & Democracy',
    description: 'Dân chủ tam quyền phân lập, liệt kê -(ㄴ/는)다거나, rất dễ rơi vào -기 십상이다, kiểm soát quyền lực.',
    audioTrack: { trackName: 'Track 08 (Cao cấp 5)', fileName: '008.mp3', audioUrl: '/audio/so-cap-1/008.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u8_w1',
        hangul: '삼권분립',
        romaja: 'sam-gwon-bun-rip',
        type: 'Danh từ',
        meaningVi: 'Tam quyền phân lập',
        meaningEn: 'Separation of powers',
        example: { ko: '민주주의는 삼권분립을 통해 권력의 남용을 견제합니다.', vi: 'Dân chủ thông qua tam quyền phân lập để kiềm tỏa sự lạm quyền.', en: 'Democracy checks power abuses through the separation of powers.' },
        dialogue: {
          speakerA: '교수', speakerB: '학생',
          lineA: '권력이 한곳에 집중되면 어떤 폐해가 발생합니까?', lineB: '독재로 치닫거나 부패가 만연하기 십상입니다.',
          lineAVi: 'Nếu quyền lực bị thâu tóm vào một nơi sẽ phát sinh tệ nạn gì?', lineBVi: 'Rất dễ rơi vào cảnh độc tài hoặc tham nhũng lộng hành khắp nơi ạ.',
          lineAEn: 'What harms arise if power concentrates in one place?', lineBEn: 'It is prone to slide into dictatorship or rampant corruption.'
        },
        exercise: {
          questionKo: '입법, 사법, 행정의 세 권력을 분립시키는 제도는?',
          questionVi: 'Chế độ phân lập 3 nhánh quyền lực Lập pháp, Tư pháp, Hành pháp là?',
          questionEn: 'System dividing powers among legislative, judicial, executive branches?',
          options: ['삼권분립', '일당독재', '군주제', '계엄령'],
          correctIndex: 0,
          explanation: '삼권분립 (三權分立) là nguyên lý tam quyền phân lập.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '시민의 감시가 소홀해지면 권력은 부패하기 십상입니다.', vi: 'Hễ sự giám sát của người dân lơ là, quyền lực rất dễ biến chất mục nát.', en: 'If civic vigilance slacks, power is apt to corrupt.' },
      { time: '00:08', ko: '투표에 참여한다거나 정책을 비판하는 것은 성숙한 시민의 의무입니다.', vi: 'Dù là đi bầu cử hay phản biện chính sách đều là nghĩa vụ của công dân trưởng thành.', en: 'Participating in voting or critiquing policies is the duty of mature citizens.' }
    ],
    grammarPoints: [
      {
        name: '-기 십상이다 (Rất dễ... / Thường hay bị... - Nguy cơ tiêu cực xảy ra)',
        formula: 'Thân động từ + 기 십상이다',
        explanationVi: 'Nhấn mạnh khả năng cao rơi vào một tình huống tiêu cực, sơ suất nếu không cẩn trọng.',
        explanationEn: 'Indicates high probability of an undesirable outcome (\"apt to / prone to\").',
        examples: [
          { ko: '서두르다 보면 실수를 저지르기 십상이에요.', vi: 'Cứ hấp tấp vội vàng là rất dễ phạm phải sai lầm.', en: 'If you hurry, you are apt to make mistakes.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u8_q1',
        question: 'Dịch: "Nếu không kiểm tra kỹ thì rất dễ mất đồ."',
        options: ['잘 확인하지 않으면 잃어버리기 십상입니다.', '잘 확인하지 않으면 잃어버리는 법입니다.', '잘 확인하지 않으면 잃어버릴 뿐입니다.', '잘 확인하지 않으면 잃어버린 셈입니다.'],
        correctIndex: 0,
        explanation: 'Khả năng cao mắc phải sự cố tiêu cực dùng -기 십상이다.'
      }
    ]
  },
  {
    id: 'cc5_u9',
    levelId: 'cao_cap_1',
    unitNumber: 9,
    titleKo: '생활의 변화와 주거',
    titleVi: 'Bài 9: Biến đổi sinh hoạt & Nhà ở',
    titleEn: 'Unit 9: Housing Evolution & Lifestyle Changes',
    description: 'Từ nhà Hanok đến chung cư thông minh, ít nhất cũng (이)라도, tại vì hỗn loạn -는 통에, vì thế mà -기에.',
    audioTrack: { trackName: 'Track 09 (Cao cấp 5)', fileName: '009.mp3', audioUrl: '/audio/so-cap-1/009.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u9_w1',
        hangul: '주거 형태',
        romaja: 'ju-geo hyeong-tae',
        type: 'Danh từ',
        meaningVi: 'Hình thái nhà ở / Loại hình cư trú',
        meaningEn: 'Housing type / Residential form',
        example: { ko: '1인 가구의 증가로 주거 형태가 소형화되고 있습니다.', vi: 'Do hộ gia đình 1 người tăng lên, hình thái nhà ở đang được thu nhỏ kích thước.', en: 'With the rise of single-person households, housing types are downsizing.' },
        dialogue: {
          speakerA: '사회학자', speakerB: '건축가',
          lineA: '아파트 위주의 주거 문화가 가져온 변화는 무엇입니까?', lineB: '편리함은 극대화되었지만 이웃 간의 소통은 단절되는 통에 삭막해졌지요.',
          lineAVi: 'Văn hóa nhà ở trọng tâm chung cư mang lại biến đổi gì?', lineBVi: 'Tiện nghi được tối đa hóa, nhưng trong cơn tắc nghẽn giao lưu chòm xóm bị đứt gãy nên trở nên khô khan.',
          lineAEn: 'What changes did apartment-centered housing culture bring?', lineBEn: 'Convenience maximized, but amid severed neighborly communication it grew bleak.'
        },
        exercise: {
          questionKo: '아파트, 단독주택, 오피스텔 등 집의 모양과 거주 방식을 뜻하는 말은?',
          questionVi: 'Từ chỉ hình dáng và phương thức sinh sống của căn nhà là?',
          questionEn: 'Term for types of dwellings and living arrangements?',
          options: ['주거 형태', '도시 계획', '건축 양식', '교통망'],
          correctIndex: 0,
          explanation: '주거 형태 (住居形態) là hình thái nhà ở.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '집값이 급등하는 통에 청년들의 내 집 마련이 더 힘들어졌습니다.', vi: 'Trong cơn bão giá nhà leo thang chóng mặt, việc thanh niên sở hữu căn nhà cho riêng mình càng khó khăn hơn.', en: 'Amid skyrocketing housing prices, young people\'s home ownership became harder.' },
      { time: '00:08', ko: '작은 원룸이라도 나만의 안식처가 되어 주기에 소중합니다.', vi: 'Dù chỉ là căn phòng trọ nhỏ, vì nó là chốn bình yên riêng của mình nên rất đỗi trân quý.', en: 'Even a small studio is precious as it serves as my own haven.' }
    ],
    grammarPoints: [
      {
        name: '-는 통에 (Trong cơn lộn xộn / Tại vì náo loạn... mà dẫn tới hậu quả)',
        formula: 'Thân động từ + 는 통에',
        explanationVi: 'Chỉ nguyên nhân là một tình huống hỗn độn, ồn ào dẫn đến kết quả dở khóc dở cười.',
        explanationEn: 'Expresses cause amidst a chaotic or distressing situation (\"in the flurry of / because of\").',
        examples: [
          { ko: '아이들이 떠드는 통에 정신이 하나도 없었어요.', vi: 'Lũ trẻ hò hét náo loạn làm tôi chẳng còn tâm trí đâu nữa.', en: 'In the commotion of kids making noise, I couldn\'t focus at all.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u9_q1',
        question: 'Dịch: "Trong lúc mọi người nhốn nháo chen lấn, tôi bị mất điện thoại."',
        options: ['사람들이 밀치는 통에 휴대전화를 잃어버렸어요.', '사람들이 밀칠 뿐더러 휴대전화를 잃어버렸어요.', '사람들이 밀치는 법이라 휴대전화를 잃어버렸어요.', '사람들이 밀치는 대신에 휴대전화를 잃어버렸어요.'],
        correctIndex: 0,
        explanation: 'Nguyên nhân do tình huống nhốn nháo xô đẩy dùng -는 통에.'
      }
    ]
  },
  {
    id: 'cc5_u10',
    levelId: 'cao_cap_1',
    unitNumber: 10,
    titleKo: '경제와 소비',
    titleVi: 'Bài 10: Kinh tế và Tiêu dùng',
    titleEn: 'Unit 10: Economics & Consumer Behavior',
    description: 'Thị trường tài chính, coi như là / tính ra là -(으)ㄴ/는 셈이다, chỉ đành -(으)ㄹ 따름이다.',
    audioTrack: { trackName: 'Track 10 (Cao cấp 5)', fileName: '010.mp3', audioUrl: '/audio/so-cap-1/010.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u10_w1',
        hangul: '가치소비',
        romaja: 'ga-chi-so-bi',
        type: 'Danh từ',
        meaningVi: 'Tiêu dùng giá trị / Tiêu dùng theo niềm tin đạo đức',
        meaningEn: 'Value-based consumption',
        example: { ko: '친환경 제품을 구매하는 가치소비가 확산되고 있습니다.', vi: 'Tiêu dùng theo giá trị mua các sản phẩm thân thiện môi trường đang lan rộng.', en: 'Value-based consumption of buying eco-friendly products is expanding.' },
        dialogue: {
          speakerA: '경제 애널리스트', speakerB: '진행자',
          lineA: '이번 분기 수출 실적은 어떻게 평가하십니까?', lineB: '환율 상승분을 감안하면 제자리걸음을 한 셈입니다.',
          lineAVi: 'Ông đánh giá thế nào về kim ngạch xuất khẩu quý này?', lineBVi: 'Nếu tính đến phần tỷ giá tăng thì coi như ta vẫn đang giậm chân tại chỗ.',
          lineAEn: 'How do you evaluate export performance this quarter?', lineBEn: 'Considering exchange rate rises, we virtually stood still.'
        },
        exercise: {
          questionKo: '자신의 신념이나 가치관에 부합하는 제품을 구매하는 행위는?',
          questionVi: 'Hành vi mua sắm sản phẩm phù hợp với niềm tin hay hệ giá trị bản thân là?',
          questionEn: 'Purchasing goods aligning with one\'s beliefs or values?',
          options: ['가치소비', '과소비', '충동구매', '사재기'],
          correctIndex: 0,
          explanation: '가치소비 (價値消費) là tiêu dùng định hướng giá trị.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '물가상승률을 감안하면 실질 소득은 오히려 줄어든 셈이에요.', vi: 'Nếu xét đến tỉ lệ lạm phát thì thu nhập thực tế coi như là bị thụt lùi.', en: 'Factoring in inflation, real income has practically decreased.' },
      { time: '00:08', ko: '세계 경제의 불확실성 속에서 신중을 기할 따름입니다.', vi: 'Giữa cơn bấp bênh của kinh tế toàn cầu, chúng ta chỉ đành cẩn trọng tối đa mà thôi.', en: 'Amid global economic uncertainties, we are merely exercising caution.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 셈이다 (Coi như là / Tính ra là... - Đánh giá quy đổi)',
        formula: 'Động từ + 는 셈이다 | Tính từ + (으)ㄴ 셈이다',
        explanationVi: 'Dùng khi muốn đúc kết một kết quả sau khi đã tính toán, cân nhắc mọi yếu tố.',
        explanationEn: 'Indicates practical equivalence after calculation (\"practically / virtually as good as\").',
        examples: [
          { ko: '거의 다 끝났으니 다 한 셈이에요.', vi: 'Gần xong hết rồi nên coi như đã hoàn thành.', en: 'It is almost done, so it is practically finished.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u10_q1',
        question: 'Dịch: "Nếu tiết kiệm chừng này mỗi tháng thì một năm coi như dư được 1 cây vàng."',
        options: ['한 해에 큰돈을 모은 셈입니다.', '한 해에 큰돈을 모을 뿐입니다.', '한 해에 큰돈을 모으는 법입니다.', '한 해에 큰돈을 모을까 봅니다.'],
        correctIndex: 0,
        explanation: 'Quy đổi kết quả tương đương dùng -(으)ㄴ/는 셈이다.'
      }
    ]
  },
  {
    id: 'cc5_u11',
    levelId: 'cao_cap_1',
    unitNumber: 11,
    titleKo: '관광과 안내',
    titleVi: 'Bài 11: Du lịch & Hướng dẫn',
    titleEn: 'Unit 11: Tourism Promotion & Guiding',
    description: 'Quảng bá danh thắng, mặc dù vậy mà -(으)ㄴ/는데도, không hề đơn giản chút nào 여간 -지 않다.',
    audioTrack: { trackName: 'Track 11 (Cao cấp 5)', fileName: '011.mp3', audioUrl: '/audio/so-cap-1/011.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u11_w1',
        hangul: '명소',
        romaja: 'myeong-so',
        type: 'Danh từ',
        meaningVi: 'Thắng cảnh nổi tiếng / Điểm đến trứ danh',
        meaningEn: 'Famous landmark / Renowned attraction',
        example: { ko: '한국의 숨은 명소를 발굴하여 관광 상품으로 개발합니다.', vi: 'Khai quật các danh lam thắng cảnh ẩn giấu để phát triển thành sản phẩm du lịch.', en: 'Discovering hidden gems of Korea and developing them into tourism products.' },
        dialogue: {
          speakerA: '가이드', speakerB: '관광객',
          lineA: '날씨가 궂은데도 많은 분들이 찾아오셨네요.', lineB: '네, 경치가 여간 아름답지 않다는 소문을 듣고 왔습니다.',
          lineAVi: 'Thời tiết mưa gió thế mà quý khách vẫn tìm đến đông đảo quá.', lineBVi: 'Vâng, chúng tôi nghe đồn phong cảnh nơi đây đẹp không hề tầm thường nên đã tới.',
          lineAEn: 'Many visitors came despite inclement weather.', lineBEn: 'Yes, we came hearing rumors that scenery is exceedingly beautiful.'
        },
        exercise: {
          questionKo: '경치나 유적이 뛰어나 널리 알려진 곳은?',
          questionVi: 'Nơi có phong cảnh hoặc di tích kiệt xuất được nhiều người biết đến là?',
          questionEn: 'Place widely known for scenic beauty or historical sites?',
          options: ['명소', '험지', '폐허', '오지'],
          correctIndex: 0,
          explanation: '명소 (名所) là danh lam thắng cảnh nổi tiếng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '비가 쏟아지는데도 관광객들의 발길이 끊이지 않았습니다.', vi: 'Mặc cho trời đổ mưa như trút, bước chân du khách vẫn không hề ngơi nghỉ.', en: 'Even though rain poured down, tourist steps did not cease.' },
      { time: '00:08', ko: '외국인들에게 전통문화를 알리는 일은 보람이 여간 크지 않습니다.', vi: 'Việc giới thiệu văn hóa truyền thống tới bạn bè quốc tế mang lại niềm tự hào to lớn vô cùng.', en: 'Promoting traditional culture to foreigners is extraordinarily rewarding.' }
    ],
    grammarPoints: [
      {
        name: '여간 -지 않다 (Không phải dạng vừa đâu / Cực kỳ... vô cùng...)',
        formula: '여간 + Thân tính/động từ + 지 않다',
        explanationVi: 'Cách nói phủ định để nhấn mạnh mức độ đặc biệt cao độ (\"không hề tầm thường chút nào\").',
        explanationEn: 'Emphatic litotes denoting extraordinary degree (\"not just ordinary / extremely\").',
        examples: [
          { ko: '시험 준비가 여간 힘들지 않았어요.', vi: 'Việc chuẩn bị kỳ thi vất vả không hề nhẹ nhàng chút nào.', en: 'Exam preparation was extraordinarily difficult.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u11_q1',
        question: 'Dịch: "Công việc này khó khăn không hề đơn giản chút nào."',
        options: ['이 일은 여간 어렵지 않습니다.', '이 일은 어려울 뻔했습니다.', '이 일은 어려운 셈입니다.', '이 일은 어려울 뿐입니다.'],
        correctIndex: 0,
        explanation: 'Nhấn mạnh mức độ cực kỳ cao dùng 여간 -지 않다.'
      }
    ]
  },
  {
    id: 'cc5_u12',
    levelId: 'cao_cap_1',
    unitNumber: 12,
    titleKo: '산업과 경제',
    titleVi: 'Bài 12: Công nghiệp & Kinh tế',
    titleEn: 'Unit 12: Industry, Tech & Economic Growth',
    description: 'Công nghệ bán dẫn đóng tàu, chỉ vỏn vẹn ở mức 에 불과하다, chỉ duy nhất -(으)ㄹ 따름이다.',
    audioTrack: { trackName: 'Track 12 (Cao cấp 5)', fileName: '012.mp3', audioUrl: '/audio/so-cap-1/012.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u12_w1',
        hangul: '첨단 산업',
        romaja: 'cheom-dan san-eop',
        type: 'Danh từ',
        meaningVi: 'Ngành công nghiệp mũi nhọn / Công nghệ cao',
        meaningEn: 'High-tech industry / Advanced sector',
        example: { ko: '반도체와 인공지능은 국가의 미래를 좌우할 첨단 산업입니다.', vi: 'Bán dẫn và AI là những ngành công nghiệp mũi nhọn định đoạt tương lai đất nước.', en: 'Semiconductors and AI are high-tech industries determining nation\'s future.' },
        dialogue: {
          speakerA: '기업인', speakerB: '연구원',
          lineA: '이번 특허 출원의 의의는 무엇인가?', lineB: '기존 기술의 개량에 불과했던 수준을 넘어 독자적 원천기술을 확보한 데 있습니다.',
          lineAVi: 'Ý nghĩa của việc đăng ký bằng sáng chế lần này là gì?', lineBVi: 'Đó là vượt lên trên mức vốn chỉ vỏn vẹn là cải tiến công nghệ cũ để xác lập công nghệ nguồn độc quyền.',
          lineAEn: 'What is the significance of this patent filing?', lineBEn: 'It lies in securing proprietary core technology beyond mere modifications.'
        },
        exercise: {
          questionKo: '최신의 고도 기술을 집약하여 제품을 생산하는 산업 분야는?',
          questionVi: 'Lĩnh vực công nghiệp tích hợp công nghệ cao mới nhất để sản xuất là?',
          questionEn: 'Industrial field producing goods by integrating cutting-edge tech?',
          options: ['첨단 산업', '사양 산업', '1차 산업', '가내수공업'],
          correctIndex: 0,
          explanation: '첨단 산업 (尖端産業) là ngành công nghiệp mũi nhọn công nghệ cao.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '초기 시장 점유율은 5%에 불과했으나 기술 혁신으로 1위를 달성했습니다.', vi: 'Thị phần ban đầu chỉ vỏn vẹn 5%, nhưng nhờ đột phá công nghệ ta đã vươn lên số 1.', en: 'Initial market share was a mere 5%, but we hit #1 via innovation.' },
      { time: '00:08', ko: '국가 경쟁력을 높이기 위해 기술 개발에 매진할 따름입니다.', vi: 'Để nâng cao sức cạnh tranh quốc gia, ta chỉ duy nhất dốc toàn lực phát triển công nghệ mà thôi.', en: 'To boost national competitiveness, we solely devote ourselves to R&D.' }
    ],
    grammarPoints: [
      {
        name: '에 불과하다 (Chỉ vỏn vẹn... / Chẳng qua chỉ là...)',
        formula: 'Danh từ / Con số + 에 불과하다',
        explanationVi: 'Nhấn mạnh số lượng hoặc tính chất là rất nhỏ nhoi, không đáng kể.',
        explanationEn: 'Formal particle meaning \"nothing more than / mere / only\".',
        examples: [
          { ko: '그것은 시작에 불과합니다.', vi: 'Đó mới chỉ là sự khởi đầu mà thôi.', en: 'That is merely the beginning.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u12_q1',
        question: 'Dịch: "Đó chẳng qua chỉ là lời bào chữa mà thôi."',
        options: ['그것은 변명에 불과합니다.', '그것은 변명인 셈입니다.', '그것은 변명하는 법입니다.', '그것은 변명일 뻔했습니다.'],
        correctIndex: 0,
        explanation: 'Chẳng qua chỉ là... dùng 에 불과하다.'
      }
    ]
  },
  {
    id: 'cc5_u13',
    levelId: 'cao_cap_1',
    unitNumber: 13,
    titleKo: '한국인의 사고방식',
    titleVi: 'Bài 13: Lối tư duy người Hàn Quốc',
    titleEn: 'Unit 13: Korean Mindset & Cultural Psychology',
    description: 'Văn hóa Jeong (tình nghĩa) & Nunchi, tuyệt đối không thể -(으)ㄹ 리가 없다, đối chiếu soi chiếu 에 비추어 보다.',
    audioTrack: { trackName: 'Track 13 (Cao cấp 5)', fileName: '013.mp3', audioUrl: '/audio/so-cap-1/013.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u13_w1',
        hangul: '정(情)',
        romaja: 'jeong',
        type: 'Danh từ',
        meaningVi: 'Tình cảm / Tình người sâu nặng (Đặc trưng văn hóa Hàn)',
        meaningEn: 'Jeong / Deep emotional bond',
        example: { ko: '한국인들은 오랜 이웃 사이에 끈끈한 정을 나눕니다.', vi: 'Người Hàn Quốc sẻ chia thứ tình cảm keo sơn sâu sắc giữa những người hàng xóm lâu năm.', en: 'Koreans share sticky deep affection among longtime neighbors.' },
        dialogue: {
          speakerA: '외국인 연구원', speakerB: '문화인류학자',
          lineA: '한국인의 \'우리\'라는 공동체 의식은 어디서 비롯됩니까?', lineB: '상부상조하는 농경 사회의 두레 전통에 비추어 볼 때 정 문화와 직결됩니다.',
          lineAVi: 'Ý thức cộng đồng \'chúng tôi\' của người Hàn bắt nguồn từ đâu?', lineBVi: 'Soi chiếu theo truyền thống tương thân tương ái Dure của xã hội nông nghiệp, nó liên kết trực tiếp với văn hóa Jeong.',
          lineAEn: 'Where does Koreans\' communal \'Uri\' consciousness originate?', lineBEn: 'Viewed against agricultural mutual-aid traditions, it links directly to Jeong.'
        },
        exercise: {
          questionKo: '한국인의 정서에서 사람 간의 따뜻하고 끈끈한 유대감을 일컫는 단어는?',
          questionVi: 'Từ chỉ sợi dây tình cảm ấm áp, keo sơn giữa con người trong tâm thức người Hàn là?',
          questionEn: 'Term for warm, affectionate emotional bond between people in Korean mindset?',
          options: ['정(情)', '한(恨)', '눈치', '체면'],
          correctIndex: 0,
          explanation: '정 (情 - Jeong) là nét tâm lý văn hóa đặc trưng của người Hàn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국인의 행동 양식을 전통적 가치관에 비추어 보면 쉽게 이해할 수 있습니다.', vi: 'Nếu soi chiếu lối hành xử của người Hàn theo hệ giá trị truyền thống thì ta có thể dễ dàng thấu hiểu.', en: 'One can easily comprehend Korean behavioral patterns when viewed against traditional values.' },
      { time: '00:08', ko: '남을 배려하는 따뜻한 정이 사라졌을 리가 없습니다.', vi: 'Thứ tình nghĩa ấm áp biết nghĩ cho người khác tuyệt đối không thể nào biến mất được.', en: 'There is no way that warm affection caring for others has vanished.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 리가 없다 (Không có lý nào... / Tuyệt đối không thể...)',
        formula: 'Thân động/tính từ + (으)ㄹ 리가 없다',
        explanationVi: 'Khẳng định một cách dứt khoát sự việc không thể nào xảy ra vì không có lý do thỏa đáng.',
        explanationEn: 'Strong denial of possibility (\"there is no way that / impossible\").',
        examples: [
          { ko: '그 성실한 사람이 약속을 어겼을 리가 없어요.', vi: 'Một người đứng đắn thế ấy không có lý nào lại thất hứa.', en: 'There is no way that such a diligent person broke the promise.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u13_q1',
        question: 'Dịch: "Không có lý nào anh ấy lại nói dối."',
        options: ['그가 거짓말을 했을 리가 없습니다.', '그가 거짓말을 했을 텐데요.', '그가 거짓말을 한 셈입니다.', '그가 거짓말을 하기 십상입니다.'],
        correctIndex: 0,
        explanation: 'Khẳng định tuyệt đối không thể nào: -(으)ㄹ 리가 없다.'
      }
    ]
  },
  {
    id: 'cc5_u14',
    levelId: 'cao_cap_1',
    unitNumber: 14,
    titleKo: '현대 사회',
    titleVi: 'Bài 14: Xã hội hiện đại',
    titleEn: 'Unit 14: Modern Society & Social Dynamics',
    description: 'Thế giới số & phân hóa, thà làm này còn hơn -느니 차라리, chừng nào còn -(으)ㄴ/는 한.',
    audioTrack: { trackName: 'Track 14 (Cao cấp 5)', fileName: '014.mp3', audioUrl: '/audio/so-cap-1/014.mp3', duration: '03:15' },
    vocabulary: [
      {
        id: 'cc5_u14_w1',
        hangul: '양극화',
        romaja: 'yang-geuk-hwa',
        type: 'Danh từ',
        meaningVi: 'Lưỡng cực hóa / Phân hóa giàu nghèo sâu sắc',
        meaningEn: 'Polarization / Widening divide',
        example: { ko: '경제적 양극화는 사회 통합을 저해하는 심각한 요인입니다.', vi: 'Phân hóa kinh tế lưỡng cực là yếu tố nghiêm trọng cản trở hòa hợp xã hội.', en: 'Economic polarization is a serious factor impeding social cohesion.' },
        dialogue: {
          speakerA: '사회학자', speakerB: '정책관',
          lineA: '소득 불평등을 방치하는 한 사회적 갈등은 치유되기 어렵습니다.', lineB: '동의합니다. 불공정한 제도를 방치하느니 차라리 근본적인 복지 개혁을 단행해야 합니다.',
          lineAVi: 'Chừng nào còn buông lỏng bất bình đẳng thu nhập, mâu thuẫn xã hội còn khó lòng hàn gắn.', lineBVi: 'Đồng ý. Thà tiến hành cải cách phúc lợi căn cơ còn hơn cứ để mặc chế độ bất công.',
          lineAEn: 'As long as income inequality is neglected, social conflict is hard to heal.', lineBEn: 'Agreed. Rather than tolerating an unfair system, we should undertake fundamental welfare reform.'
        },
        exercise: {
          questionKo: '중간층이 줄어들고 양 극단으로 쏠리는 현상은?',
          questionVi: 'Hiện tượng tầng lớp trung lưu teo tóp và dồn về hai thái cực là?',
          questionEn: 'Phenomenon of shrinking middle class and tilting toward two extremes?',
          options: ['양극화', '다원화', '도시화', '세계화'],
          correctIndex: 0,
          explanation: '양극화 (兩極化) là lưỡng cực hóa, phân cực.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '원칙 없는 타협을 하느니 차라리 원점에서 다시 논의하겠습니다.', vi: 'Thà quay về vạch xuất phát bàn bạc lại từ đầu còn hơn là thỏa hiệp vô nguyên tắc.', en: 'Rather than making unprincipled compromises, I would rather discuss again from scratch.' },
      { time: '00:08', ko: '시민들이 깨어 있는 한 민주주의의 후퇴는 결코 없을 것입니다.', vi: 'Chừng nào người dân còn tỉnh thức, bước thụt lùi của nền dân chủ tuyệt đối sẽ không xảy ra.', en: 'As long as citizens stay awake, backsliding of democracy will never occur.' }
    ],
    grammarPoints: [
      {
        name: '-느니 차라리 (Thà... còn hơn là làm việc trước)',
        formula: 'Thân động từ + 느니 차라리',
        explanationVi: 'Lựa chọn phương án sau vì cảm thấy phương án trước quá tệ hại, không thể chấp nhận.',
        explanationEn: 'Expresses preference for an alternative over an intolerable option (\"would rather ... than\").',
        examples: [
          { ko: '거짓말을 하느니 차라리 솔직하게 혼나겠어요.', vi: 'Thà thật thà chịu mắng còn hơn là đi nói dối.', en: 'I would rather be scolded honestly than tell a lie.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u14_q1',
        question: 'Dịch: "Chừng nào sự thật chưa sáng tỏ, cuộc điều tra vẫn tiếp tục."',
        options: ['진실이 밝혀지지 않는 한 조사는 계속됩니다.', '진실이 밝혀지느니 조사는 계속됩니다.', '진실이 밝혀짐으로써 조사는 계속됩니다.', '진실이 밝혀지는 통에 조사는 계속됩니다.'],
        correctIndex: 0,
        explanation: 'Cấu trúc "Chừng nào còn...": -(으)ㄴ/는 한.'
      }
    ]
  },
  {
    id: 'cc5_u15',
    levelId: 'cao_cap_1',
    unitNumber: 15,
    titleKo: '문화와 예술',
    titleVi: 'Bài 15: Văn hóa và Nghệ thuật',
    titleEn: 'Unit 15: Arts, Aesthetics & Cultural Identity',
    description: 'Tuyệt tác nghệ thuật, vô cùng cùng cực -기 짝이 없다, không bao giờ có chuyện -는 법이 없다.',
    audioTrack: { trackName: 'Track 15 (Cao cấp 5)', fileName: '015.mp3', audioUrl: '/audio/so-cap-1/015.mp3', duration: '03:20' },
    vocabulary: [
      {
        id: 'cc5_u15_w1',
        hangul: '백자',
        romaja: 'baek-ja',
        type: 'Danh từ',
        meaningVi: 'Bạch sứ / Đồ sứ trắng thời Joseon',
        meaningEn: 'White porcelain of Joseon',
        example: { ko: '조선 백자의 절제된 아름다움은 세계인의 찬사를 받습니다.', vi: 'Vẻ đẹp tiết chế thanh tao của bạch sứ Joseon nhận được sự tán thưởng của toàn cầu.', en: 'The restrained beauty of Joseon white porcelain wins global acclaim.' },
        dialogue: {
          speakerA: '미술평론가', speakerB: '큐레이터',
          lineA: '달항아리의 매력은 무엇입니까?', lineB: '꾸밈없는 소박함과 순백의 넉넉함이 조화를 이루어 경이롭기 짝이 없습니다.',
          lineAVi: 'Sức quyến rũ của chiếc bình gốm trăng Dalhangari là gì?', lineBVi: 'Sự mộc mạc không cầu kỳ hòa quyện cùng nét đôn hậu trắng muốt kỳ diệu khôn xiết.',
          lineAEn: 'What is the charm of the Moon Jar?', lineBEn: 'Its unadorned simplicity and pure white generosity are exceedingly wondrous.'
        },
        exercise: {
          questionKo: '조선 시대를 대표하는 순백색의 자기 공예품은?',
          questionVi: 'Tác phẩm gốm sứ màu trắng tinh khiết tiêu biểu cho triều đại Joseon là?',
          questionEn: 'Pure white porcelain craftwork representing the Joseon era?',
          options: ['백자', '청자', '토기', '옹기'],
          correctIndex: 0,
          explanation: '백자 (白磁) là đồ bạch sứ Joseon.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '한국 전통 국악의 깊은 울림은 듣는 이에게 감동을 주기에 모자람이 없습니다.', vi: 'Tiếng ngân sâu thẳm của âm nhạc truyền thống Gugak mang lại niềm xúc động vô bờ cho người thưởng thức.', en: 'The profound resonance of Korean traditional music offers boundless emotion to listeners.' },
      { time: '00:08', ko: '거장의 유작을 마주하니 숭고한 예술혼에 감탄스럽기 짝이 없네요.', vi: 'Đối diện trước di tác của bậc đại sư, lòng tôi khôn xiết cảm phục linh hồn nghệ thuật cao cả.', en: 'Facing the master\'s posthumous work, I am exceedingly in awe of the sublime artistic soul.' }
    ],
    grammarPoints: [
      {
        name: '-기 짝이 없다 (Vô cùng... / Không gì sánh bằng... - Cảm thán tột bực)',
        formula: 'Thân tính từ + 기 짝이 없다',
        explanationVi: 'Nhấn mạnh cảm xúc hoặc trạng thái đã lên tới mức tột đỉnh không gì sánh kịp.',
        explanationEn: 'Literary expression meaning \"incomparably / beyond measure / exceedingly\".',
        examples: [
          { ko: '도움을 주셔서 감사하기 짝이 없습니다.', vi: 'Nhận được sự giúp đỡ của quý vị, tôi vô cùng cảm kích khôn xiết.', en: 'I am incomparably grateful for your assistance.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc5_u15_q1',
        question: 'Dịch: "Gặp lại người bạn cũ thuở ấu thơ, tôi vui mừng khôn xiết."',
        options: ['어릴 적 친구를 다시 만나니 반갑기 짝이 없었습니다.', '어릴 적 친구를 다시 만나니 반가울 뻔했습니다.', '어릴 적 친구를 다시 만나니 반가운 셈이었습니다.', '어릴 적 친구를 다시 만나니 반가울 뿐이었습니다.'],
        correctIndex: 0,
        explanation: 'Cảm xúc tột bực dùng -기 짝이 없다 -> 반갑기 짝이 없었습니다.'
      }
    ]
  }
];
