// Dữ liệu 15 bài học Trung cấp 2 (중급 4) theo Giáo trình Tiếng Hàn Tổng Hợp
export const TRUNG_CAP_2_UNITS = [
  {
    id: 'tc4_u1',
    levelId: 'trung_cap_2',
    unitNumber: 1,
    titleKo: '유행',
    titleVi: 'Bài 1: Thời trang & Xu hướng',
    titleEn: 'Unit 1: Trends & Fashion',
    description: 'Trào lưu thịnh hành, phán đoán trực tiếp -나 보다 / -(으)ㄴ가 보다, hỏi lại kinh ngạc -다고요?, tùy theo 에 따라.',
    audioTrack: { trackName: 'Track 01 (Trung cấp 4)', fileName: '001.mp3', audioUrl: '/audio/so-cap-1/001.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u1_w1',
        hangul: '유행을 따르다',
        romaja: 'yu-haeng-eul tta-reu-da',
        type: 'Cụm động từ',
        meaningVi: 'Chạy theo mốt / Theo xu hướng',
        meaningEn: 'To follow trends',
        example: { ko: '무조건 유행을 따르기보다 자신만의 개성이 중요합니다.', vi: 'Thay vì mù quáng chạy theo mốt, cá tính riêng của bản thân quan trọng hơn.', en: 'Rather than unconditionally following trends, one\'s own individuality is more important.' },
        dialogue: {
          speakerA: '지민', speakerB: '수현',
          lineA: '요즘 레트로 패션이 다시 유행인가 봐요.', lineB: '네, 길거리에 복고풍 옷을 입은 사람들이 부쩍 늘었어요.',
          lineAVi: 'Dạo này có vẻ thời trang retro đang là mốt trở lại.', lineBVi: 'Vâng, trên đường phố người mặc đồ hoài cổ tăng lên trông thấy.',
          lineAEn: 'It seems retro fashion is trendy again these days.', lineBEn: 'Yes, people wearing vintage outfits on the streets have noticeably increased.'
        },
        exercise: {
          questionKo: '사회적으로 널리 퍼진 옷차림이나 스타일을 쫓아가는 것은?',
          questionVi: 'Việc chạy theo kiểu cách hay phong cách trang phục đang thịnh hành là?',
          questionEn: 'Following a widely spread style or look?',
          options: ['유행을 따르다', '유행을 이끌다', '유행에 뒤처지다', '개성을 살리다'],
          correctIndex: 0,
          explanation: '유행을 따르다 nghĩa là theo xu hướng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '시대의 흐름에 따라 사람들의 가치관도 크게 변하나 봐요.', vi: 'Tùy theo dòng chảy thời đại, có vẻ như hệ giá trị của con người cũng biến đổi lớn.', en: 'It seems that people\'s values also change significantly according to the trends of the times.' },
      { time: '00:08', ko: '네, 소비 패턴이나 라이프스타일도 예전과 사뭇 달라졌지요.', vi: 'Vâng, mô hình tiêu dùng và lối sống cũng đã khác hẳn ngày xưa rồi.', en: 'Yes, consumption patterns and lifestyles have also become quite different from the past.' }
    ],
    grammarPoints: [
      {
        name: '-나 보다 / -(으)ㄴ가 보다 (Dường như / Có vẻ như... - Phán đoán qua mắt thấy tai nghe)',
        formula: 'Động từ + 나 보다 | Tính từ + (으)ㄴ가 보다',
        explanationVi: 'Đưa ra phán đoán dựa trên chứng cứ thực tế mà người nói trực tiếp quan sát được.',
        explanationEn: 'Conjecture based on direct observation (\"it seems that / looks like\").',
        examples: [
          { ko: '밖에 비가 오나 봐요. 사람들이 우산을 쓰고 있어요.', vi: 'Có vẻ ngoài trời đang mưa. Mọi người đều đang che ô.', en: 'It seems to be raining outside. People are holding umbrellas.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u1_q1',
        question: 'Chọn câu phán đoán dựa trên quan sát: "Có vẻ anh ấy đang rất bận."',
        options: ['그 사람이 많이 바쁜가 봐요.', '그 사람이 많이 바쁠 거예요.', '그 사람이 많이 바쁠 텐데요.', '그 사람이 많이 바쁠 리가 없어요.'],
        correctIndex: 0,
        explanation: 'Tính từ 바쁘다 dùng -(으)ㄴ가 보다 -> 바쁜가 봐요.'
      }
    ]
  },
  {
    id: 'tc4_u2',
    levelId: 'trung_cap_2',
    unitNumber: 2,
    titleKo: '집안일',
    titleVi: 'Bài 2: Việc nhà',
    titleEn: 'Unit 2: Housework & Chores',
    description: 'Phân chia công việc gia đình, nhắc nhở -잖아요 (chẳng phải... sao), ngay khi -자마자, động từ sai khiến (사동사), bắt ai làm -게 하다.',
    audioTrack: { trackName: 'Track 02 (Trung cấp 4)', fileName: '002.mp3', audioUrl: '/audio/so-cap-1/002.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u2_w1',
        hangul: '분리수거',
        romaja: 'bun-ri-su-geo',
        type: 'Danh từ',
        meaningVi: 'Phân loại rác thải',
        meaningEn: 'Waste sorting / Recycling',
        example: { ko: '재활용 쓰레기는 분리수거를 철저히 해야 합니다.', vi: 'Rác tái chế phải phân loại thật triệt để.', en: 'Recyclable waste must be thoroughly sorted.' },
        dialogue: {
          speakerA: '남편', speakerB: '아내',
          lineA: '퇴근하자마자 분리수거부터 하고 올게.', lineB: '고마워요, 오늘 플라스틱 배출일이잖아요.',
          lineAVi: 'Ngay khi đi làm về anh sẽ đi phân loại rác trước nhé.', lineBVi: 'Cảm ơn anh, hôm nay chẳng phải là ngày gom rác nhựa sao.',
          lineAEn: 'As soon as I get home, I will sort the recycling first.', lineBEn: 'Thank you, today is plastic collection day, isn\'t it?'
        },
        exercise: {
          questionKo: '종이, 유리, 플라스틱 등을 종류별로 나누어 버리는 것은?',
          questionVi: 'Việc chia rác giấy, thủy tinh, nhựa theo từng loại để vứt là?',
          questionEn: 'Sorting and discarding paper, glass, plastic by category?',
          options: ['분리수거', '음식물 쓰레기', '빨래', '설거지'],
          correctIndex: 0,
          explanation: '분리수거 (分離收去) là phân loại rác tái chế.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '식사가 끝나자마자 바로 설거지를 해 놓는 게 위생적이에요.', vi: 'Ngay khi dùng bữa xong dọn rửa bát đĩa ngay thì rất vệ sinh.', en: 'Doing the dishes right after eating is hygienic.' },
      { time: '00:07', ko: '집안일은 가족 모두가 함께 분담해야 하잖아요.', vi: 'Việc nhà thì tất cả thành viên trong gia đình chẳng phải cùng san sẻ sao.', en: 'After all, all family members should share the housework, shouldn\'t they?' }
    ],
    grammarPoints: [
      {
        name: '-자마자 (Ngay khi vừa... thì...)',
        formula: 'Thân động từ + 자마자',
        explanationVi: 'Diễn tả hành động vế sau diễn ra ngay tức khắc sau khi kết thúc hành động vế trước.',
        explanationEn: 'Indicates that the second action occurs immediately after the first (\"as soon as\").',
        examples: [
          { ko: '집에 도착하자마자 손을 씻었어요.', vi: 'Vừa về tới nhà là tôi rửa tay ngay.', en: 'As soon as I arrived home, I washed my hands.' }
        ]
      },
      {
        name: '-잖아요 (Chẳng phải... hay sao - Nhắc lại điều cả hai đều biết)',
        formula: 'Thân động/tính từ + 잖아요',
        explanationVi: 'Dùng khi muốn khẳng định hoặc nhắc nhở đối phương về một sự thật hiển nhiên mà cả hai cùng biết.',
        explanationEn: 'Reconfirms a fact already known to both speaker and listener (\"you know / isn\'t it\").',
        examples: [
          { ko: '오늘 우리 약속 있잖아요.', vi: 'Hôm nay chúng mình có hẹn rồi chẳng phải sao.', en: 'We have an appointment today, as you know.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u2_q1',
        question: 'Dịch: "Vừa đặt lưng xuống giường là tôi ngủ ngay thiếp đi."',
        options: ['침대에 눕자마자 잠이 들었어요.', '침대에 누워서 잠이 들었어요.', '침대에 누우니까 잠이 들었어요.', '침대에 누우면 잠이 들어요.'],
        correctIndex: 0,
        explanation: 'Ngay khi vừa... thì... dùng -자마자.'
      }
    ]
  },
  {
    id: 'tc4_u3',
    levelId: 'trung_cap_2',
    unitNumber: 3,
    titleKo: '감정',
    titleVi: 'Bài 3: Cảm xúc & Tình cảm',
    titleEn: 'Unit 3: Emotions & Feelings',
    description: 'Thế giới nội tâm, quá khứ hoàn tất -았/었었-, hồi tưởng -던, trải nghiệm quá khứ đã chấm dứt -았/었던, diễn tả cảm xúc ngôi thứ ba -아/어하다.',
    audioTrack: { trackName: 'Track 03 (Trung cấp 4)', fileName: '003.mp3', audioUrl: '/audio/so-cap-1/003.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u3_w1',
        hangul: '뿌듯하다',
        romaja: 'ppu-deut-ha-da',
        type: 'Tính từ',
        meaningVi: 'Tự hào / Hãnh diện thỏa mãn trong lòng',
        meaningEn: 'Proud and fulfilled / Heartwarming satisfaction',
        example: { ko: '어려운 시험을 통과하고 나니 마음이 뿌듯했습니다.', vi: 'Vượt qua kỳ thi khó nhằn xong trong lòng thấy vô cùng tự hào thỏa mãn.', en: 'After passing the tough exam, my heart felt deeply fulfilled.' },
        dialogue: {
          speakerA: '어머니', speakerB: '아들',
          lineA: '봉사활동 다녀오니까 기분이 어떠니?', lineB: '힘은 들었지만 보람차고 정말 뿌듯했어요.',
          lineAVi: 'Đi hoạt động tình nguyện về con thấy thế nào?', lineBVi: 'Tuy mệt nhưng đầy ý nghĩa và rất tự hào ạ.',
          lineAEn: 'How do you feel after returning from volunteer work?', lineBEn: 'Tired, but it was rewarding and deeply fulfilling.'
        },
        exercise: {
          questionKo: '자신이 해낸 일에 대해 스스로 만족스럽고 대견한 감정은?',
          questionVi: 'Cảm xúc tự hài lòng và hãnh diện về việc bản thân đã hoàn thành là?',
          questionEn: 'Emotion of feeling self-satisfied and proud of achievement?',
          options: ['뿌듯하다', '답답하다', '서운하다', '허탈하다'],
          correctIndex: 0,
          explanation: '뿌듯하다 là cảm giác tự hào, ngập tràn thỏa mãn.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '어릴 때 자주 뛰놀던 골목길이 지금은 다 사라졌어요.', vi: 'Con hẻm nhỏ nơi tôi từng thường nô đùa hồi bé nay đã biến mất hoàn toàn.', en: 'The alley where I used to play often as a child has all disappeared now.' },
      { time: '00:07', ko: '그 시절의 소중했던 추억들이 아련하게 떠오르네요.', vi: 'Những kỷ niệm quý giá của thuở ấy lại thấp thoáng hiện về.', en: 'Those precious memories of those days come back dimly.' }
    ],
    grammarPoints: [
      {
        name: '-던 (Hồi tưởng thói quen / việc chưa hoàn tất trong quá khứ)',
        formula: 'Thân động/tính từ + 던 + Danh từ',
        explanationVi: 'Hồi tưởng về một hành vi thường diễn ra lặp lại hoặc đang dở dang trong quá khứ.',
        explanationEn: 'Retrospective adnominal particle denoting habitual past or incomplete past action.',
        examples: [
          { ko: '자주 가던 카페에 갔어요.', vi: 'Tôi đã ghé quán cà phê hồi trước hay tới.', en: 'I went to the cafe I used to visit often.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u3_q1',
        question: 'Dịch: "Chiếc áo khoác tôi từng mặc hồi trung học":',
        options: ['고등학교 때 입던 외투', '고등학교 때 입을 외투', '고등학교 때 입는 외투', '고등학교 때 입어야 할 외투'],
        correctIndex: 0,
        explanation: 'Hồi tưởng hành động lặp lại trong quá khứ dùng -던 -> 입던 외투.'
      }
    ]
  },
  {
    id: 'tc4_u4',
    levelId: 'trung_cap_2',
    unitNumber: 4,
    titleKo: '생활 정보',
    titleVi: 'Bài 4: Thông tin sinh hoạt',
    titleEn: 'Unit 4: Daily Life Information',
    description: 'Mẹo vặt cuộc sống, dạng rút gọn trích dẫn gián tiếp trong văn nói: -대요 (bảo là), -내요 (hỏi là), -(으)래요 (bảo hãy), -재요 (rủ cùng).',
    audioTrack: { trackName: 'Track 04 (Trung cấp 4)', fileName: '004.mp3', audioUrl: '/audio/so-cap-1/004.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u4_w1',
        hangul: '꿀팁',
        romaja: 'kkul-tip',
        type: 'Danh từ',
        meaningVi: 'Mẹo vàng / Bí kíp cực hay',
        meaningEn: 'Great tip / Helpful trick',
        example: { ko: '자취 생활에 유용한 꿀팁을 공유합니다.', vi: 'Chia sẻ những bí kíp vàng hữu ích cho cuộc sống tự lập.', en: 'Sharing useful great tips for living alone.' },
        dialogue: {
          speakerA: '친구 A', speakerB: '친구 B',
          lineA: '내일 마트에서 대규모 세일을 한대요.', lineB: '정말? 그럼 같이 장 보러 가자고 연락해야겠다.',
          lineAVi: 'Nghe bảo ngày mai siêu thị đại hạ giá lớn đấy.', lineBVi: 'Thật á? Thế thì phải rủ cùng đi mua đồ thôi.',
          lineAEn: 'They say the mart has a massive sale tomorrow.', lineBEn: 'Really? Then I should text to go grocery shopping together.'
        },
        exercise: {
          questionKo: '매우 유용하고 실용적인 생활 정보나 요령은?',
          questionVi: 'Thông tin sinh hoạt hoặc kỹ xảo cực kỳ hữu ích là?',
          questionEn: 'Extremely useful and practical tips?',
          options: ['꿀팁', '가짜뉴스', '소문', '단점'],
          correctIndex: 0,
          explanation: '꿀팁 là mẹo vặt hữu ích, bí kíp vàng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '이번 주말에 시민공원에서 벼룩시장이 열린대요.', vi: 'Nghe bảo cuối tuần này có chợ trời đồ cũ mở ở công viên thành phố.', en: 'They say a flea market is opening at the civic park this weekend.' },
      { time: '00:07', ko: '좋은 물건을 싸게 살 수 있으니까 꼭 가 보래요.', vi: 'Vì có thể mua đồ tốt giá rẻ nên người ta bảo nhất định hãy đi thử.', en: 'They told us to definitely check it out because we can buy good goods cheaply.' }
    ],
    grammarPoints: [
      {
        name: 'Trích dẫn rút gọn khẩu ngữ: -대요, -(으)래요, -재요',
        formula: 'Trần thuật: -대요 | Mệnh lệnh: -(으)래요 | Rủ rê: -재요',
        explanationVi: 'Dạng nói tắt cực kỳ phổ biến trong giao tiếp hàng ngày của -다고 해요, -(으)라고 해요, -자고 해요.',
        explanationEn: 'Contracted colloquial indirect speech endings widely used in spoken Korean.',
        examples: [
          { ko: '선생님이 내일 시험이래.', vi: 'Thầy bảo mai là ngày thi đấy.', en: 'The teacher said tomorrow is the exam.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u4_q1',
        question: 'Dịch câu khẩu ngữ: "Bạn tôi rủ đi ăn cơm trưa cùng" (nói tắt):',
        options: ['친구가 점심 같이 먹재요.', '친구가 점심 같이 먹대요.', '친구가 점심 같이 먹으래요.', '친구가 점심 같이 먹네요.'],
        correctIndex: 0,
        explanation: 'Dạng rút gọn của rủ rê (-자고 해요) là -재요 -> 먹재요.'
      }
    ]
  },
  {
    id: 'tc4_u5',
    levelId: 'trung_cap_2',
    unitNumber: 5,
    titleKo: '취직',
    titleVi: 'Bài 5: Xin việc / Tìm việc',
    titleEn: 'Unit 5: Job Hunting & Employment',
    description: 'Tuyển dụng, điều kiện tiên quyết -아/어야 (phải... thì mới), chuẩn bị sẵn sàng -아/어 놓다, cứ ngỡ / không ngờ -(으)ㄴ/는 줄 알다/모르다.',
    audioTrack: { trackName: 'Track 05 (Trung cấp 4)', fileName: '005.mp3', audioUrl: '/audio/so-cap-1/005.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u5_w1',
        hangul: '자기소개서',
        romaja: 'ja-gi-so-gae-seo',
        type: 'Danh từ',
        meaningVi: 'Bản tự giới thiệu bản thân / Cover letter',
        meaningEn: 'Self-introduction letter / Statement of purpose',
        example: { ko: '기업 맞춤형으로 자기소개서를 작성했습니다.', vi: 'Tôi đã viết thư xin việc phù hợp theo tiêu chí từng doanh nghiệp.', en: 'I wrote a tailored self-introduction letter for each company.' },
        dialogue: {
          speakerA: '선배', speakerB: '구직자',
          lineA: '면접 준비는 잘 되어 가나?', lineB: '예상 질문에 대한 답변을 미리 정리해 놓았습니다.',
          lineAVi: 'Chuẩn bị phỏng vấn tiến triển tốt chứ?', lineBVi: 'Em đã hệ thống sẵn các câu trả lời cho bộ câu hỏi dự kiến rồi ạ.',
          lineAEn: 'Is interview preparation going well?', lineBEn: 'I have organized answers to expected questions in advance.'
        },
        exercise: {
          questionKo: '자신의 성장 과정과 역량을 글로 소개하는 서류는?',
          questionVi: 'Tài liệu giới thiệu quá trình trưởng thành và năng lực bản thân bằng văn bản là?',
          questionEn: 'Document introducing one\'s background and capabilities?',
          options: ['자기소개서', '주민등록증', '가족관계증명서', '성적표'],
          correctIndex: 0,
          explanation: '자기소개서 là bài tự giới thiệu (thư xin việc).'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '실무 경험을 충분히 쌓아야 원하는 기업에 합격할 수 있어요.', vi: 'Phải tích lũy đầy đủ kinh nghiệm thực tế thì mới trúng tuyển vào doanh nghiệp mong muốn.', en: 'Only by accumulating sufficient practical experience can one pass into desired companies.' },
      { time: '00:08', ko: '필요한 자격증은 지난 학기에 다 취득해 놓았어요.', vi: 'Các chứng chỉ cần thiết tôi đã thi đỗ sẵn từ học kỳ trước rồi.', en: 'I already obtained all required certifications last semester.' }
    ],
    grammarPoints: [
      {
        name: '-아/어 놓다 (Làm sẵn / Chuẩn bị sẵn và duy trì trạng thái)',
        formula: 'Thân động từ + 아/어 놓다',
        explanationVi: 'Diễn tả hành động được thực hiện trước để chuẩn bị cho tương lai và kết quả đó được duy trì.',
        explanationEn: 'Indicates performing an action beforehand and maintaining its resulting state.',
        examples: [
          { ko: '비행기 표를 미리 예매해 놓았어요.', vi: 'Tôi đã đặt mua vé máy bay sẵn từ trước.', en: 'I booked the flight tickets in advance.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u5_q1',
        question: 'Dịch: "Tôi đã nấu cơm sẵn rồi."',
        options: ['밥을 미리 해 놓았어요.', '밥을 미리 해야 해요.', '밥을 미리 할 텐데요.', '밥을 미리 하느라고 바빴어요.'],
        correctIndex: 0,
        explanation: 'Làm sẵn việc gì dùng -아/어 놓다 -> 해 놓았어요.'
      }
    ]
  },
  {
    id: 'tc4_u6',
    levelId: 'trung_cap_2',
    unitNumber: 6,
    titleKo: '고장',
    titleVi: 'Bài 6: Hư hỏng / Sự cố',
    titleEn: 'Unit 6: Breakdowns & Repairs',
    description: 'Sửa chữa bảo hành thiết bị, động từ bị động (피동사: 이, 히, 리, 기), trở nên bị -아/어지다, thời điểm -았/했을 때.',
    audioTrack: { trackName: 'Track 06 (Trung cấp 4)', fileName: '006.mp3', audioUrl: '/audio/so-cap-1/006.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u6_w1',
        hangul: '수리 센터',
        romaja: 'su-ri sen-teo',
        type: 'Danh từ',
        meaningVi: 'Trung tâm sửa chữa / Bảo hành',
        meaningEn: 'Repair service center',
        example: { ko: '스마트폰 화면이 깨져서 수리 센터에 맡겼습니다.', vi: 'Màn hình điện thoại bị vỡ nên tôi đã gửi vào trung tâm sửa chữa.', en: 'The smartphone screen broke, so I submitted it to the repair center.' },
        dialogue: {
          speakerA: '기사', speakerB: '고객',
          lineA: '어디가 고장 났습니까?', lineB: '노트북 전원이 갑자기 안 켜져요.',
          lineAVi: 'Máy bị hỏng chỗ nào ạ?', lineBVi: 'Nguồn máy tính xách tay tự nhiên không bật lên được ạ.',
          lineAEn: 'What is malfunctioning?', lineBEn: 'The laptop power suddenly does not turn on.'
        },
        exercise: {
          questionKo: '고장 난 기계나 전자제품을 고쳐 주는 곳은?',
          questionVi: 'Nơi sửa chữa máy móc hoặc đồ điện tử bị hỏng là?',
          questionEn: 'Place where broken machines or electronics are repaired?',
          options: ['수리 센터', '주유소', '세탁소', '약국'],
          correctIndex: 0,
          explanation: '수리 센터 (Service Center) là trung tâm bảo hành/sửa chữa.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '문이 저절로 닫히더니 밖에서 안 열려요.', vi: 'Cửa tự động đóng sập lại rồi giờ từ bên ngoài không mở ra được.', en: 'The door closed by itself, and now it won\'t open from outside.' },
      { time: '00:07', ko: '열쇠 수리 기사님께 연락을 드렸으니 잠시만 기다리세요.', vi: 'Tôi đã liên lạc với thợ sửa khóa rồi nên bạn đợi một lát nhé.', en: 'I have contacted the locksmith, so please wait a moment.' }
    ],
    grammarPoints: [
      {
        name: 'Động từ bị động (피동사: 이/히/리/기)',
        formula: 'Gắn tiền tố 피동: 보다->보이다, 닫다->닫히다, 열다->열리다, 끊다->끊기다',
        explanationVi: 'Diễn tả chủ ngữ tiếp nhận tác động từ một ngoại lực khách quan (bị/được).',
        explanationEn: 'Passive voice suffixes attached to verbs indicating passive occurrence.',
        examples: [
          { ko: '바람에 창문이 닫혔어요.', vi: 'Gió làm cửa sổ bị đóng sập lại.', en: 'The window was closed by the wind.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u6_q1',
        question: 'Chọn dạng bị động của "열다" (mở):',
        options: ['열리다', '열히다', '열이다', '열기다'],
        correctIndex: 0,
        explanation: '열다 chuyển sang bị động thành 열리다.'
      }
    ]
  },
  {
    id: 'tc4_u7',
    levelId: 'trung_cap_2',
    unitNumber: 7,
    titleKo: '명절',
    titleVi: 'Bài 7: Ngày lễ tết',
    titleEn: 'Unit 7: Traditional Holidays & Festivals',
    description: 'Phong tục Tết Seollal & Chuseok, cấu trúc biết bao nhiêu 얼마나 -(으)ㄴ/는지, thói quen -곤 하다, kèm thêm vào đó 에다가.',
    audioTrack: { trackName: 'Track 07 (Trung cấp 4)', fileName: '007.mp3', audioUrl: '/audio/so-cap-1/007.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u7_w1',
        hangul: '차례를 지내다',
        romaja: 'cha-rye-reul ji-nae-da',
        type: 'Cụm động từ',
        meaningVi: 'Làm lễ cúng tổ tiên ngày lễ tết',
        meaningEn: 'To perform ancestral rites during holidays',
        example: { ko: '설날 아침에는 온 가족이 모여 차례를 지냅니다.', vi: 'Sáng mùng một Tết cả nhà tề tựu làm lễ cúng tổ tiên.', en: 'On New Year\'s morning, the whole family gathers to hold ancestral rites.' },
        dialogue: {
          speakerA: '화', speakerB: '준영',
          lineA: '추석에는 어떤 음식을 먹어요?', lineB: '가족들과 송편을 빚어서 나누어 먹곤 해요.',
          lineAVi: 'Vào tết Trung thu người Hàn ăn món gì?', lineBVi: 'Mọi người thường nặn bánh Songpyeon cùng cả nhà rồi cùng chia nhau ăn.',
          lineAEn: 'What food do you eat on Chuseok?', lineBEn: 'We often make and share songpyeon with family.'
        },
        exercise: {
          questionKo: '명절에 조상에게 제사를 드리는 예식은?',
          questionVi: 'Nghi thức dâng cúng tổ tiên vào dịp lễ tết là?',
          questionEn: 'Ritual of paying respect to ancestors on traditional holidays?',
          options: ['차례를 지내다', '세배하다', '덕담을 나누다', '윷놀이를 하다'],
          correctIndex: 0,
          explanation: '차례를 지내다 là làm lễ cúng tổ tiên dịp tết.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '명절에 고향으로 내려가는 길이 얼마나 막히는지 몰라요.', vi: 'Đường về quê dịp lễ tết không biết tắc đến mức nào đâu.', en: 'You have no idea how congested the highway home gets during holidays.' },
      { time: '00:08', ko: '오랜만에 만난 친척들과 밤늦도록 정을 나누곤 하지요.', vi: 'Chúng tôi thường hàn huyên tình cảm thâu đêm cùng họ hàng lâu ngày mới gặp.', en: 'We often share warmth late into the night with relatives we haven\'t seen in a while.' }
    ],
    grammarPoints: [
      {
        name: '-곤 하다 (Thường hay làm gì - Thói quen lặp đi lặp lại)',
        formula: 'Thân động từ + 곤 하다',
        explanationVi: 'Diễn tả hành vi được thực hiện thường lệ, đều đặn theo thói quen.',
        explanationEn: 'Indicates a repeated habit or routine practice (\"routinely / frequently do\").',
        examples: [
          { ko: '주말마다 공원에서 자전거를 타곤 해요.', vi: 'Cứ mỗi cuối tuần tôi thường đạp xe ở công viên.', en: 'I routinely ride bicycles in the park every weekend.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u7_q1',
        question: 'Dịch: "Hồi bé tôi thường hay thả diều cùng ông nội."',
        options: ['어릴 적에 할아버지와 연을 날리곤 했어요.', '어릴 적에 할아버지와 연을 날릴 뻔했어요.', '어릴 적에 할아버지와 연을 날려야 했어요.', '어릴 적에 할아버지와 연을 날릴 만했어요.'],
        correctIndex: 0,
        explanation: 'Thói quen lặp lại trong quá khứ dùng -곤 하다 -> 날리곤 했어요.'
      }
    ]
  },
  {
    id: 'tc4_u8',
    levelId: 'trung_cap_2',
    unitNumber: 8,
    titleKo: '여가 생활',
    titleVi: 'Bài 8: Đời sống giải trí',
    titleEn: 'Unit 8: Leisure & Recreation',
    description: 'Thư giãn tái tạo năng lượng, hồi tưởng trực tiếp -더라구요, nhấn mạnh thực sự là -야말로, đáng để làm -(으)ㄹ 만하다.',
    audioTrack: { trackName: 'Track 08 (Trung cấp 4)', fileName: '008.mp3', audioUrl: '/audio/so-cap-1/008.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u8_w1',
        hangul: '재충전',
        romaja: 'jae-chung-jeon',
        type: 'Danh từ',
        meaningVi: 'Tái tạo năng lượng / Nạp lại năng lượng',
        meaningEn: 'Recharging / Refreshing',
        example: { ko: '주말의 여가 활동은 삶의 재충전이 됩니다.', vi: 'Hoạt động giải trí cuối tuần giúp tái tạo năng lượng sống.', en: 'Weekend leisure activities serve as a recharge for life.' },
        dialogue: {
          speakerA: '민우', speakerB: '지수',
          lineA: '이번 주말에 본 뮤지컬 어땠어?', lineB: '배우들의 가창력이 대단하더라고. 꼭 볼 만해!',
          lineAVi: 'Vở nhạc kịch cậu xem cuối tuần này thế nào?', lineBVi: 'Giọng hát của các diễn viên đỉnh lắm luôn ấy. Rất đáng xem!',
          lineAEn: 'How was the musical you watched this weekend?', lineBEn: 'The actors\' vocals were amazing. Well worth watching!'
        },
        exercise: {
          questionKo: '지친 심신을 쉬게 하여 활력을 되찾는 것은?',
          questionVi: 'Việc để tâm thân mỏi mệt nghỉ ngơi nhằm lấy lại sức sống là?',
          questionEn: 'Resting tired mind and body to regain vitality?',
          options: ['재충전', '야근', '과로', '절약'],
          correctIndex: 0,
          explanation: '재충전 (再充電) là nạp lại năng lượng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '건강한 여가 생활이야말로 삶의 질을 높이는 지름길이에요.', vi: 'Đời sống giải trí lành mạnh thực sự chính là con đường ngắn nhất nâng cao chất lượng cuộc sống.', en: 'A healthy leisure life is indeed the shortcut to raising the quality of life.' },
      { time: '00:07', ko: '그 전시회는 볼거리가 많아서 추천할 만해요.', vi: 'Triển lãm đó có rất nhiều điều hay để chiêm ngưỡng nên rất đáng để giới thiệu.', en: 'That exhibition has plenty to see, so it is well worth recommending.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 만하다 (Đáng để... / Bõ công làm gì)',
        formula: 'Thân động từ + (으)ㄹ 만하다',
        explanationVi: 'Đánh giá hành vi nào đó có giá trị xứng đáng để bỏ công sức thực hiện.',
        explanationEn: 'Indicates that something is worth doing or tolerable (\"worth doing\").',
        examples: [
          { ko: '한국에서 경주는 꼭 가 볼 만한 도시입니다.', vi: 'Gyeongju là thành phố rất đáng để ghé thăm tại Hàn Quốc.', en: 'Gyeongju is a city well worth visiting in Korea.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u8_q1',
        question: 'Dịch: "Cuốn sách này rất đáng đọc."',
        options: ['이 책은 읽을 만해요.', '이 책은 읽는 척해요.', '이 책은 읽을 텐데요.', '이 책은 읽으려고 해요.'],
        correctIndex: 0,
        explanation: 'Đáng để làm gì dùng -(으)ㄹ 만하다 -> 읽을 만해요.'
      }
    ]
  },
  {
    id: 'tc4_u9',
    levelId: 'trung_cap_2',
    unitNumber: 9,
    titleKo: '직장',
    titleVi: 'Bài 9: Nơi làm việc / Công sở',
    titleEn: 'Unit 9: Workplace & Career Culture',
    description: 'Văn hóa công sở, không những mà còn -(으)ㄹ 뿐만 아니라, bất kể là -든지 -든지, vì thế mà -아/어 가지고.',
    audioTrack: { trackName: 'Track 09 (Trung cấp 4)', fileName: '009.mp3', audioUrl: '/audio/so-cap-1/009.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u9_w1',
        hangul: '회식',
        romaja: 'hoe-sik',
        type: 'Danh từ',
        meaningVi: 'Liên hoan công ty / Bữa tiệc đồng nghiệp',
        meaningEn: 'Company dinner / Get-together',
        example: { ko: '오늘 퇴근 후에 부서 회식이 있습니다.', vi: 'Hôm nay sau giờ làm có buổi liên hoan phòng ban.', en: 'There is a department dinner after work today.' },
        dialogue: {
          speakerA: '팀장', speakerB: '사원',
          lineA: '김 대리는 업무 능력이 뛰어날 뿐만 아니라 대인관계도 참 좋아.', lineB: '네, 항상 솔선수범해서 모두가 신뢰합니다.',
          lineAVi: 'Trợ lý Kim không những năng lực xuất sắc mà quan hệ bạn bè đồng nghiệp cũng cực tốt.', lineBVi: 'Vâng, anh ấy luôn tiên phong gương mẫu nên ai cũng tin cậy.',
          lineAEn: 'Assistant Manager Kim is not only capable but also has great interpersonal skills.', lineBEn: 'Yes, he always leads by example so everyone trusts him.'
        },
        exercise: {
          questionKo: '직장 동료들이 함께 모여 식사나 술을 함께하는 자리는?',
          questionVi: 'Buổi tụ họp đồng nghiệp cùng ăn uống sau giờ làm là?',
          questionEn: 'Gathering of workplace colleagues for dinner or drinks?',
          options: ['회식', '면접', '출장', '조퇴'],
          correctIndex: 0,
          explanation: '회식 (會食) là liên hoan công ty.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '직장에서는 능동적인 태도뿐만 아니라 협동심도 매우 중요합니다.', vi: 'Nơi làm việc không chỉ thái độ chủ động mà tinh thần hợp tác cũng hết sức quan trọng.', en: 'In the workplace, not only a proactive attitude but also cooperation is vital.' },
      { time: '00:08', ko: '보고서든 발표자료든 꼼꼼하게 검토하고 제출하세요.', vi: 'Dù là báo cáo hay bài thuyết trình cũng hãy rà soát kỹ lưỡng rồi nộp.', en: 'Whether it is a report or presentation materials, review thoroughly before submitting.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 뿐만 아니라 (Không những... mà còn...)',
        formula: 'Động/Tính từ + -(으)ㄹ 뿐만 아니라',
        explanationVi: 'Nhấn mạnh thêm sự việc vế sau ngoài sự thật ở vế trước.',
        explanationEn: 'Expresses addition (\"not only ... but also\").',
        examples: [
          { ko: '그는 영어를 잘할 뿐만 아니라 한국어도 유창해요.', vi: 'Anh ấy không những giỏi tiếng Anh mà tiếng Hàn cũng lưu loát.', en: 'He not only speaks English well but is also fluent in Korean.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u9_q1',
        question: 'Dịch: "Người đó không những tốt bụng mà còn rất thông minh."',
        options: ['친절할 뿐만 아니라 똑똑해요.', '친절한 대신에 똑똑해요.', '친절하느라고 똑똑해요.', '친절한 탓에 똑똑해요.'],
        correctIndex: 0,
        explanation: 'Cấu trúc "không những... mà còn": -(으)ㄹ 뿐만 아니라.'
      }
    ]
  },
  {
    id: 'tc4_u10',
    levelId: 'trung_cap_2',
    unitNumber: 10,
    titleKo: '절약',
    titleVi: 'Bài 10: Tiết kiệm',
    titleEn: 'Unit 10: Frugality & Financial Wisdom',
    description: 'Thực hành tiết kiệm, càng... càng -(으)ㄹ수록, có vẻ như -(으)ㄴ/는 모양이다, mải mê nên bỏ lỡ -느라고.',
    audioTrack: { trackName: 'Track 10 (Trung cấp 4)', fileName: '010.mp3', audioUrl: '/audio/so-cap-1/010.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u10_w1',
        hangul: '알뜰하다',
        romaja: 'al-tteul-ha-da',
        type: 'Tính từ',
        meaningVi: 'Tiết kiệm / Căn cơ vén khéo',
        meaningEn: 'Frugal / Thrifty',
        example: { ko: '어머니는 항상 알뜰하게 살림을 꾸리십니다.', vi: 'Mẹ luôn vén khéo chi tiêu quán xuyến gia đình rất tiết kiệm.', en: 'Mother always manages household finances thriftily.' },
        dialogue: {
          speakerA: '친구 A', speakerB: '친구 B',
          lineA: '가계부를 쓰니까 불필요한 지출이 줄었어?', lineB: '응, 돈의 흐름을 알수록 절약하기 쉬워지더라고.',
          lineAVi: 'Ghi chép sổ chi tiêu xong chi tiêu lãng phí có giảm không?', lineBVi: 'Có chứ, càng hiểu rõ dòng tiền thì càng dễ tiết kiệm.',
          lineAEn: 'Did unnecessary expenses decrease after keeping a ledger?', lineBEn: 'Yes, the more I understand cash flow, the easier saving becomes.'
        },
        exercise: {
          questionKo: '돈이나 물건을 아끼고 규모 있게 쓰는 태도는?',
          questionVi: 'Thái độ quý trọng và chi tiêu tiền bạc đồ đạc có chừng mực là?',
          questionEn: 'Attitude of frugality and managing resources prudently?',
          options: ['알뜰하다', '낭비하다', '사치스럽다', '인색하다'],
          correctIndex: 0,
          explanation: '알뜰하다 nghĩa là vén khéo, tiết kiệm hợp lý.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '티끌 모아 태산이라는 말처럼 아낄수록 큰돈이 모여요.', vi: 'Đúng như câu kiến tha lâu cũng đầy tổ, càng biết chắt chiu thì càng gom được món tiền lớn.', en: 'Just as drops make an ocean, the more you save, the bigger fortune gathers.' },
      { time: '00:08', ko: '요즘 물가가 너무 올라서 다들 허리띠를 졸라매는 모양이에요.', vi: 'Dạo này vật giá leo thang quá nên có vẻ ai nấy đều thắt lưng buộc bụng.', en: 'With prices rising so high lately, it seems everyone is tightening their belts.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ수록 (Càng... thì càng...)',
        formula: 'Thân động/tính từ + (으)ㄹ수록',
        explanationVi: 'Diễn tả mức độ của vế sau tăng tiến tương ứng theo sự gia tăng của vế trước.',
        explanationEn: 'Proportional change structure (\"the more ... the more\").',
        examples: [
          { ko: '갈수록 태산이다.', vi: 'Càng đi càng gặp núi cao (càng lúc càng gian nan).', en: 'The further one goes, the steeper the mountains.' },
          { ko: '배울수록 재미있어요.', vi: 'Càng học càng thấy thú vị.', en: 'The more I learn, the more interesting it is.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u10_q1',
        question: 'Dịch: "Càng tập luyện nhiều thì càng nói giỏi."',
        options: ['연습할수록 말을 잘해요.', '연습하는 대신에 말을 잘해요.', '연습하느라고 말을 잘해요.', '연습할 만해서 말을 잘해요.'],
        correctIndex: 0,
        explanation: 'Cấu trúc "càng... càng": -(으)ㄹ수록.'
      }
    ]
  },
  {
    id: 'tc4_u11',
    levelId: 'trung_cap_2',
    unitNumber: 11,
    titleKo: '결혼',
    titleVi: 'Bài 11: Kết hôn',
    titleEn: 'Unit 11: Marriage & Wedding Traditions',
    description: 'Nghi lễ cưới hỏi, giả định nếu -다면, phỏng đoán e rằng -(으)ㄹ 텐데, lo lắng sợ rằng -(으)ㄹ까 봐.',
    audioTrack: { trackName: 'Track 11 (Trung cấp 4)', fileName: '011.mp3', audioUrl: '/audio/so-cap-1/011.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u11_w1',
        hangul: '청첩장',
        romaja: 'cheong-cheop-jang',
        type: 'Danh từ',
        meaningVi: 'Thiệp cưới / Thiệp mời thành hôn',
        meaningEn: 'Wedding invitation',
        example: { ko: '다음 달에 결혼하는 친구에게 청첩장을 받았습니다.', vi: 'Tôi đã nhận được thiệp cưới từ người bạn kết hôn vào tháng sau.', en: 'I received a wedding invitation from a friend getting married next month.' },
        dialogue: {
          speakerA: '친구 A', speakerB: '친구 B',
          lineA: '결혼식 날 비가 오면 어쩌지?', lineB: '비가 올까 봐 실내 예식장으로 예약했대.',
          lineAVi: 'Ngày cưới mà trời mưa thì tính sao?', lineBVi: 'Sợ trời mưa nên họ đã đặt sẵn hội trường trong nhà rồi đấy.',
          lineAEn: 'What if it rains on wedding day?', lineBEn: 'Fearing rain, they reportedly booked an indoor wedding hall.'
        },
        exercise: {
          questionKo: '결혼식에 하객을 초대하기 위해 보내는 편지는?',
          questionVi: 'Thư gửi mời khách đến dự lễ cưới là?',
          questionEn: 'Invitation letter sent to guests for a wedding ceremony?',
          options: ['청첩장', '연하장', '감사장', '추천서'],
          correctIndex: 0,
          explanation: '청첩장 (請牒狀) là thiệp cưới.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '인생의 반려자를 만난다면 서로를 존중하는 것이 가장 중요해요.', vi: 'Nếu gặp được bạn đời của cuộc đời mình thì việc tôn trọng nhau là điều quan trọng nhất.', en: 'If one meets a lifelong partner, respecting each other is paramount.' },
      { time: '00:08', ko: '손님이 많이 오실 텐데 예식장 준비를 철저히 해야겠어요.', vi: 'Chắc là khách mời sẽ đến đông lắm, chúng ta phải chuẩn bị hội trường thật chu tất.', en: 'Guests will likely arrive in large numbers, so we must prepare the venue thoroughly.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ까 봐 (Lo rằng / Sợ rằng... nên đã hành động)',
        formula: 'Thân động/tính từ + (으)ㄹ까 봐 (걱정되어서/준비했다)',
        explanationVi: 'Diễn tả hành vi được tiến hành nhằm phòng ngừa một việc lo ngại có thể xảy ra.',
        explanationEn: 'Expresses taking precautions due to apprehension or fear (\"fearing that / in case\").',
        examples: [
          { ko: '지각할까 봐 택시를 탔어요.', vi: 'Sợ muộn giờ nên tôi đã bắt taxi.', en: 'Afraid of being late, I took a taxi.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u11_q1',
        question: 'Dịch: "Sợ trời lạnh nên tôi đã mang thêm áo ấm."',
        options: ['추울까 봐 따뜻한 옷을 챙겼어요.', '추울수록 따뜻한 옷을 챙겼어요.', '추운 대신에 따뜻한 옷을 챙겼어요.', '추우려던 참에 따뜻한 옷을 챙겼어요.'],
        correctIndex: 0,
        explanation: 'Sợ rằng/lo rằng việc gì nên chuẩn bị: -(으)ㄹ까 봐.'
      }
    ]
  },
  {
    id: 'tc4_u12',
    levelId: 'trung_cap_2',
    unitNumber: 12,
    titleKo: '사건과 사고',
    titleVi: 'Bài 12: Sự kiện và Tai nạn',
    titleEn: 'Unit 12: Incidents, Accidents & Safety',
    description: 'An toàn cứu hộ, sau khi trải nghiệm mới nhận ra -아/어 보니까, suýt chút nữa -(으)ㄹ 뻔하다, trạng thái duy trì -아/어 있다.',
    audioTrack: { trackName: 'Track 12 (Trung cấp 4)', fileName: '012.mp3', audioUrl: '/audio/so-cap-1/012.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u12_w1',
        hangul: '음주운전',
        romaja: 'eum-ju-un-jeon',
        type: 'Danh từ',
        meaningVi: 'Lái xe khi say rượu / Vi phạm nồng độ cồn',
        meaningEn: 'Drunk driving / DUI',
        example: { ko: '음주운전은 타인의 생명을 위협하는 중대한 범죄입니다.', vi: 'Lái xe sau khi uống rượu là tội phạm nghiêm trọng đe dọa sinh mạng người khác.', en: 'Drunk driving is a grave crime endangering others\' lives.' },
        dialogue: {
          speakerA: '경찰', speakerB: '목격자',
          lineA: '사고 현장을 목격하셨습니까?', lineB: '네, 빙판길에 차가 미끄러져서 큰 사고가 날 뻔했습니다.',
          lineAVi: 'Bác đã chứng kiến hiện trường tai nạn ạ?', lineBVi: 'Vâng, đường đóng băng trơn trượt xe suýt nữa thì xảy ra tai nạn lớn.',
          lineAEn: 'Did you witness the accident scene?', lineBEn: 'Yes, the car skidded on ice and nearly caused a huge accident.'
        },
        exercise: {
          questionKo: '술을 마신 상태에서 자동차를 운전하는 불법 행위는?',
          questionVi: 'Hành vi trái pháp luật điều khiển xe hơi trong tình trạng uống rượu là?',
          questionEn: 'Illegal act of driving a motor vehicle under the influence of alcohol?',
          options: ['음주운전', '안전운전', '난폭운전', '신호위반'],
          correctIndex: 0,
          explanation: '음주운전 (飮酒運轉) là lái xe khi say rượu.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '빗길에 미끄러져서 하마터면 넘어질 뻔했어요.', vi: 'Trơn trượt trên đường mưa suýt chút nữa là tôi ngã nhào rồi.', en: 'Slipping on the rainy road, I almost fell down.' },
      { time: '00:07', ko: '직접 겪어 보니까 안전벨트의 중요성을 절감하게 되네요.', vi: 'Trực tiếp trải qua rồi mới thấm thía sâu sắc tầm quan trọng của dây an toàn.', en: 'Having experienced it firsthand, I come to acutely realize the importance of seatbelts.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 뻔하다 (Suýt chút nữa... - Sự việc suýt xảy ra nhưng đã không xảy ra)',
        formula: 'Thân động từ + (으)ㄹ 뻔하다',
        explanationVi: 'Thường đi kèm với phó từ 하마터면 biểu thị suýt xảy ra một hậu quả nguy hiểm.',
        explanationEn: 'Indicates that something almost happened but was narrowly avoided (\"almost / nearly\").',
        examples: [
          { ko: '지각할 뻔했어요.', vi: 'Suýt nữa thì tôi đi trễ.', en: 'I almost arrived late.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u12_q1',
        question: 'Dịch: "Suýt nữa thì tôi để quên ví ở quán ăn."',
        options: ['식당에 지갑을 두고 올 뻔했어요.', '식당에 지갑을 두고 왔을 텐데요.', '식당에 지갑을 둘수록 안 돼요.', '식당에 지갑을 두려던 참이에요.'],
        correctIndex: 0,
        explanation: 'Suýt chút nữa xảy ra việc gì dùng -(으)ㄹ 뻔하다.'
      }
    ]
  },
  {
    id: 'tc4_u13',
    levelId: 'trung_cap_2',
    unitNumber: 13,
    titleKo: '교육제도',
    titleVi: 'Bài 13: Chế độ giáo dục',
    titleEn: 'Unit 13: Education System & Academics',
    description: 'Hệ thống thi cử giáo dục, cốt để / sao cho -도록, không những thế còn -는 데다가, liên từ văn viết -(으)며.',
    audioTrack: { trackName: 'Track 13 (Trung cấp 4)', fileName: '013.mp3', audioUrl: '/audio/so-cap-1/013.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u13_w1',
        hangul: '수능',
        romaja: 'su-neung',
        type: 'Danh từ',
        meaningVi: 'Kỳ thi tuyển sinh đại học quốc gia Hàn Quốc (Suneung)',
        meaningEn: 'College Scholastic Ability Test (CSAT)',
        example: { ko: '한국에서는 수능 시험 당일에 출근 시간이 늦춰지기도 합니다.', vi: 'Ở Hàn Quốc vào ngày thi Suneung giờ đi làm còn được lùi lại muộn hơn.', en: 'In Korea, office commute hours are even delayed on the day of the CSAT.' },
        dialogue: {
          speakerA: '기자', speakerB: '교육 전문가',
          lineA: '한국의 교육열이 매우 높은 이유는 무엇입니까?', lineB: '대학 진학이 사회적 성공의 중요한 발판으로 인식되기 때문입니다.',
          lineAVi: 'Lý do cơn sốt giáo dục tại Hàn Quốc cao ngất ngưởng là gì?', lineBVi: 'Vì việc vào đại học được coi là bệ phóng quan trọng cho thành công xã hội.',
          lineAEn: 'Why is the passion for education in Korea so intense?', lineBEn: 'Because entering university is perceived as a vital springboard for social success.'
        },
        exercise: {
          questionKo: '대학 입학을 위해 치르는 한국의 전국 단위 표준화 시험은?',
          questionVi: 'Kỳ thi chuẩn hóa quy mô toàn quốc tại Hàn Quốc để vào đại học là?',
          questionEn: 'National standardized exam taken for college entrance in Korea?',
          options: ['수능', '공무원 시험', '토픽', '운전면허 시험'],
          correctIndex: 0,
          explanation: '수능 (대학수학능력시험) là kỳ thi đại học quốc gia.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '학생들이 잠재력을 마음껏 발휘할 수 있도록 제도를 개선해야 합니다.', vi: 'Phải cải tiến chế độ sao cho học sinh có thể phát huy hết mức tiềm năng của mình.', en: 'We must reform the system so that students can fully unleash their potential.' },
      { time: '00:08', ko: '사교육비 부담이 큰 데다가 입시 경쟁도 너무 치열하니까요.', vi: 'Vì gánh nặng học thêm vừa lớn mà cạnh tranh thi cử lại quá đỗi khốc liệt.', en: 'Because not only is private tutoring burdensome, but entrance competition is also excessively fierce.' }
    ],
    grammarPoints: [
      {
        name: '-는 데다가 / -(으)ㄴ 데다가 (Không những... thêm vào đó lại còn...)',
        formula: 'Động từ + 는 데다가 | Tính từ + (으)ㄴ 데다가',
        explanationVi: 'Diễn tả tình huống vế sau bổ sung tích lũy theo cùng hướng tích cực hoặc tiêu cực với vế trước.',
        explanationEn: 'Indicates compounding addition along the same positive or negative sentiment (\"on top of that\").',
        examples: [
          { ko: '비가 오는 데다가 바람까지 세게 불어요.', vi: 'Trời vừa mưa thêm vào đó gió lại còn thổi mạnh nữa.', en: 'Not only is it raining, but strong wind is also blowing.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u13_q1',
        question: 'Dịch: "Món ăn này vừa ngon thêm vào đó giá lại rẻ."',
        options: ['맛있는 데다가 가격도 싸요.', '맛있는 대신에 가격도 싸요.', '맛있을수록 가격도 싸요.', '맛있을 텐데 가격도 싸요.'],
        correctIndex: 0,
        explanation: 'Cộng dồn ưu điểm dùng -는/-(으)ㄴ 데다가.'
      }
    ]
  },
  {
    id: 'tc4_u14',
    levelId: 'trung_cap_2',
    unitNumber: 14,
    titleKo: '생활과 환경',
    titleVi: 'Bài 14: Sinh hoạt và Môi trường',
    titleEn: 'Unit 14: Environment & Eco-living',
    description: 'Bảo vệ sinh thái, trái lại mặt khác -(으)ㄴ/는 반면에, đến mức độ -(으)ㄹ 정도이다, theo như số liệu 에 따르면.',
    audioTrack: { trackName: 'Track 14 (Trung cấp 4)', fileName: '014.mp3', audioUrl: '/audio/so-cap-1/014.mp3', duration: '02:30' },
    vocabulary: [
      {
        id: 'tc4_u14_w1',
        hangul: '온실가스',
        romaja: 'on-sil-ga-seu',
        type: 'Danh từ',
        meaningVi: 'Khí nhà kính',
        meaningEn: 'Greenhouse gas',
        example: { ko: '지구 온난화를 막기 위해 온실가스 배출을 줄여야 합니다.', vi: 'Để ngăn chặn trái đất nóng lên phải cắt giảm phát thải khí nhà kính.', en: 'To curb global warming, we must reduce greenhouse gas emissions.' },
        dialogue: {
          speakerA: '환경운동가', speakerB: '시민',
          lineA: '최근 보고서에 따르면 북극의 빙하가 급격히 녹고 있다고 합니다.', lineB: '정말 심각하네요. 일회용품 사용부터 줄여야겠어요.',
          lineAVi: 'Theo báo cáo gần đây, băng ở Bắc Cực đang tan chảy nhanh chóng.', lineBVi: 'Thật sự nghiêm trọng. Phải giảm dùng đồ nhựa một lần trước tiên thôi.',
          lineAEn: 'According to recent reports, Arctic glaciers are melting rapidly.', lineBEn: 'That is truly alarming. We must cut disposable products first.'
        },
        exercise: {
          questionKo: '지구 온난화의 주범이 되는 대기 중의 가스는?',
          questionVi: 'Chất khí trong khí quyển là thủ phạm chính gây nóng lên toàn cầu là gì?',
          questionEn: 'Atmospheric gases that are primary culprits of global warming?',
          options: ['온실가스', '산소', '수소', '질소'],
          correctIndex: 0,
          explanation: '온실가스 (Greenhouse Gas) là khí nhà kính.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '편리한 도시 문명을 누리는 반면에 환경 파괴는 심각해지고 있어요.', vi: 'Một mặt tận hưởng văn minh đô thị tiện lợi, mặt khác sự tàn phá môi trường đang trở nên nghiêm trọng.', en: 'While enjoying convenient urban civilization, environmental destruction is growing severe.' },
      { time: '00:08', ko: '숨을 쉬기 힘들 정도로 미세먼지가 심한 날이 늘어났습니다.', vi: 'Những ngày bụi mịn nặng đến mức khó thở đã tăng lên đáng kể.', en: 'Days with fine dust so intense that breathing is difficult have multiplied.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 정도이다 (Đến mức độ / Tới mức mà...)',
        formula: 'Thân động/tính từ + (으)ㄹ 정도이다',
        explanationVi: 'Dùng để nhấn mạnh mức độ cao của một trạng thái hoặc hành vi.',
        explanationEn: 'Expresses degree or extent (\"to the extent that / so ... that\").',
        examples: [
          { ko: '눈물이 날 정도로 감동적이었어요.', vi: 'Xúc động đến mức trào cả nước mắt.', en: 'It was touching to the point of tears.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u14_q1',
        question: 'Dịch: "Cười nhiều đến mức đau cả bụng."',
        options: ['배가 아플 정도로 많이 웃었어요.', '배가 아픈 대신에 많이 웃었어요.', '배가 아플수록 많이 웃었어요.', '배가 아플까 봐 많이 웃었어요.'],
        correctIndex: 0,
        explanation: 'Nhấn mạnh mức độ dùng -(으)ㄹ 정도이다 -> 아플 정도로.'
      }
    ]
  },
  {
    id: 'tc4_u15',
    levelId: 'trung_cap_2',
    unitNumber: 15,
    titleKo: '옛날 이야기',
    titleVi: 'Bài 15: Truyện cổ tích / Chuyện xưa',
    titleEn: 'Unit 15: Folk Tales & Cultural Lore',
    description: 'Truyền thuyết dân gian, ngay khi -자, trải nghiệm lâu dài phát hiện -다 보니까, giả vờ làm -(으)ㄴ 척하다.',
    audioTrack: { trackName: 'Track 15 (Trung cấp 4)', fileName: '015.mp3', audioUrl: '/audio/so-cap-1/015.mp3', duration: '02:35' },
    vocabulary: [
      {
        id: 'tc4_u15_w1',
        hangul: '권선징악',
        romaja: 'gwon-seon-jing-ak',
        type: 'Thành ngữ bốn chữ',
        meaningVi: 'Khuyến thiện trừng ác (Ở hiền gặp lành, ác giả ác báo)',
        meaningEn: 'Promoting virtue and punishing evil',
        example: { ko: '한국의 전래동화는 대부분 권선징악의 교훈을 담고 있습니다.', vi: 'Hầu hết truyện cổ tích Hàn Quốc đều gửi gắm bài học khuyến thiện trừng ác.', en: 'Most Korean folk tales embody the moral of rewarding good and punishing evil.' },
        dialogue: {
          speakerA: '할머니', speakerB: '손자',
          lineA: '흥부와 놀부 이야기 다 들었니?', lineB: '네! 착하게 살면 복을 받는다는 교훈을 배웠어요.',
          lineAVi: 'Cháu đã nghe xong câu chuyện Heungbu và Nolbu chưa?', lineBVi: 'Dạ rồi! Cháu đã học được bài học sống lương thiện sẽ nhận được phúc lành.',
          lineAEn: 'Did you hear all of the Heungbu and Nolbu story?', lineBEn: 'Yes! I learned that living kindly brings blessings.'
        },
        exercise: {
          questionKo: '착한 행실을 권장하고 악한 행실을 벌한다는 사자성어는?',
          questionVi: 'Thành ngữ 4 chữ chỉ việc khuyến khích việc thiện và trừng trị cái ác là?',
          questionEn: 'Four-character idiom for encouraging virtue and punishing vice?',
          options: ['권선징악', '동문서답', '작심삼일', '일석이조'],
          correctIndex: 0,
          explanation: '권선징악 (勸善懲惡) là khuyến thiện trừng ác.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '호랑이가 나타나자 사람들은 겁에 질려 도망쳤습니다.', vi: 'Ngay khi hổ xuất hiện, mọi người hoảng loạn bỏ chạy tán loạn.', en: 'As soon as the tiger appeared, people fled in terror.' },
      { time: '00:07', ko: '흥부는 마음씨가 착해서 가난한 척하지 않고 정직하게 살았어요.', vi: 'Heungbu tấm lòng đôn hậu nên không bao giờ giả nghèo giả khổ mà sống rất cương trực.', en: 'Heungbu had a pure heart, so he never pretended and lived honestly.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 척하다 (Giả vờ như / Làm bộ như...)',
        formula: 'Động từ + 는 척하다 | Tính từ + (으)ㄴ 척하다',
        explanationVi: 'Diễn tả hành vi cố tình làm bộ làm tịch ra vẻ như một trạng thái không có thật.',
        explanationEn: 'Expresses pretending or feigning a certain act or state.',
        examples: [
          { ko: '알면서 모르는 척했어요.', vi: 'Biết rõ mười mươi mà giả vờ như không biết.', en: 'Even though I knew, I pretended not to know.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'tc4_u15_q1',
        question: 'Dịch: "Dù mệt nhưng anh ấy vẫn giả vờ như không mệt."',
        options: ['피곤하지만 안 피곤한 척했어요.', '피곤하지만 안 피곤할 뻔했어요.', '피곤하지만 안 피곤한 대신에 일했어요.', '피곤하지만 안 피곤할수록 일했어요.'],
        correctIndex: 0,
        explanation: 'Giả vờ thế nào dùng -(으)ㄴ/는 척하다 -> 안 피곤한 척했어요.'
      }
    ]
  }
];
