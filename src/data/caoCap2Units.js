// Dữ liệu 15 bài học Cao cấp 2 (고급 6) theo Giáo trình Tiếng Hàn Tổng Hợp
export const CAO_CAP_2_UNITS = [
  {
    id: 'cc6_u1',
    levelId: 'cao_cap_2',
    unitNumber: 1,
    titleKo: '언어와 사회',
    titleVi: 'Bài 1: Ngôn ngữ và Xã hội',
    titleEn: 'Unit 1: Language & Society',
    description: 'Chức năng xã hội của ngôn ngữ, xét ở khía cạnh -(ㄴ/는)다는 점에서, do bởi nguyên cớ (으)로 말미암아.',
    audioTrack: { trackName: 'Track 01 (Cao cấp 6)', fileName: '001.mp3', audioUrl: '/audio/so-cap-1/001.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u1_w1',
        hangul: '사회언어학',
        romaja: 'sa-hoe-eon-eo-hak',
        type: 'Danh từ',
        meaningVi: 'Xã hội ngôn ngữ học',
        meaningEn: 'Sociolinguistics',
        example: { ko: '사회언어학은 언어와 사회 구조 간의 상호작용을 탐구합니다.', vi: 'Xã hội ngôn ngữ học khám phá tương tác qua lại giữa ngôn ngữ và cấu trúc xã hội.', en: 'Sociolinguistics explores the interaction between language and social structure.' },
        dialogue: {
          speakerA: '학자 A', speakerB: '학자 B',
          lineA: '언어는 단순한 의사소통 수단 이상입니까?', lineB: '그렇습니다. 한 사회의 문화적 가치관을 오롯이 투영한다는 점에서 언어는 정신의 거울입니다.',
          lineAVi: 'Ngôn ngữ có vượt lên trên một phương tiện giao tiếp đơn thuần không?', lineBVi: 'Đúng vậy. Ở khía cạnh phản chiếu trọn vẹn hệ giá trị văn hóa một xã hội, ngôn ngữ là tấm gương của tâm hồn.',
          lineAEn: 'Is language more than a mere communication tool?', lineBEn: 'Yes. In that it fully reflects cultural values, language is a mirror of the mind.'
        },
        exercise: {
          questionKo: '언어 변이와 사회적 요인의 관계를 연구하는 학문은?',
          questionVi: 'Ngành học nghiên cứu quan hệ giữa biến thể ngôn ngữ và các nhân tố xã hội là gì?',
          questionEn: 'Study of relations between linguistic variation and social factors?',
          options: ['사회언어학', '음운론', '통사론', '화용론'],
          correctIndex: 0,
          explanation: '사회언어학 là xã hội ngôn ngữ học.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '언어는 한 민족의 고유한 사고 체계를 담지한다는 점에서 존중받아야 합니다.', vi: 'Ngôn ngữ phải được tôn trọng ở khía cạnh nó dung chứa hệ thống tư duy độc đáo của một dân tộc.', en: 'Language must be respected in that it embodies the unique cognitive system of a nation.' },
      { time: '00:08', ko: '신조어의 무분별한 남발로 말미암아 세대 간 소통 단절이 심화되고 있습니다.', vi: 'Do bởi sự lạm dụng bừa bãi từ ngữ mới mà sự đứt gãy giao tiếp giữa các thế hệ đang ngày một sâu sắc.', en: 'Owing to the indiscriminate flood of neologisms, intergenerational divides are deepening.' }
    ],
    grammarPoints: [
      {
        name: '-(ㄴ/는)다는 점에서 (Ở khía cạnh là... / Xét trên phương diện...)',
        formula: 'Động từ + (ㄴ/는)다는 점에서 | Tính từ + 다는 점에서',
        explanationVi: 'Chỉ ra luận cứ hoặc phương diện nổi bật làm tiền đề cho một nhận định học thuật.',
        explanationEn: 'Formal academic expression indicating a specific point of rationale (\"in that / in terms of\").',
        examples: [
          { ko: '모두가 동등한 권리를 갖는다는 점에서 민주적입니다.', vi: 'Nó mang tính dân chủ ở khía cạnh tất cả mọi người đều có quyền bình đẳng.', en: 'It is democratic in that everyone possesses equal rights.' }
        ]
      },
      {
        name: '(으)로 말미암아 (Bởi vì... / Do nguyên nhân... mà phát sinh)',
        formula: 'Danh từ + (으)로 말미암아',
        explanationVi: 'Văn phong trang trọng diễn tả nguyên nhân hoặc khởi nguồn của một biến cố xã hội lớn.',
        explanationEn: 'Archaic/formal literary particle meaning \"owing to / arising from\".',
        examples: [
          { ko: '전쟁으로 말미암아 무고한 시민들이 희생되었습니다.', vi: 'Do cuộc chiến tranh mà các công dân vô tội đã bị hy sinh.', en: 'Owing to the war, innocent citizens were sacrificed.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u1_q1',
        question: 'Dịch: "Do thảm họa thiên tai mà nền kinh tế bị tổn hại nặng nề."',
        options: ['자연재해로 말미암아 경제적 타격이 컸습니다.', '자연재해인 셈이라 경제적 타격이 컸습니다.', '자연재해일 뻔하여 경제적 타격이 컸습니다.', '자연재해인 척하여 경제적 타격이 컸습니다.'],
        correctIndex: 0,
        explanation: 'Nguyên nhân dẫn tới biến cố trọng thể dùng (으)로 말미암아.'
      }
    ]
  },
  {
    id: 'cc6_u2',
    levelId: 'cao_cap_2',
    unitNumber: 2,
    titleKo: '과학과 미래',
    titleVi: 'Bài 2: Khoa học và Tương lai',
    titleEn: 'Unit 2: Science & The Future',
    description: 'Trí tuệ nhân tạo, khám phá vũ trụ, để nhằm mục đích -고자, vì nghe bảo rằng -(ㄴ/는)다기에.',
    audioTrack: { trackName: 'Track 02 (Cao cấp 6)', fileName: '002.mp3', audioUrl: '/audio/so-cap-1/002.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u2_w1',
        hangul: '특이점',
        romaja: 'teuk-i-jeom',
        type: 'Danh từ',
        meaningVi: 'Điểm kỳ dị công nghệ (Singularity)',
        meaningEn: 'Technological Singularity',
        example: { ko: '인공지능이 인간의 지능을 초월하는 특이점에 다가서고 있습니다.', vi: 'Trí tuệ nhân tạo đang tiến gần đến điểm kỳ dị vượt qua trí năng của con người.', en: 'AI is approaching the singularity exceeding human intelligence.' },
        dialogue: {
          speakerA: '과학자', speakerB: '철학자',
          lineA: '인류의 난제를 해결하고자 AI 기술을 고도화하고 있습니다.', lineB: '기술의 진보 못지않게 윤리적 가이드라인 제정이 시급하다지요.',
          lineAVi: 'Chúng tôi đang nâng cấp công nghệ AI nhằm giải quyết các nan đề của nhân loại.', lineBVi: 'Nghe nói việc ban hành quy chuẩn đạo đức cũng cấp bách không kém bước tiến công nghệ.',
          lineAEn: 'We advance AI to resolve humanity\'s challenges.', lineBEn: 'Establishing ethical guidelines is reportedly as urgent as progress.'
        },
        exercise: {
          questionKo: '미래 기술 발전이 급격해져 인류의 통제를 벗어나는 분기점은?',
          questionVi: 'Điểm bước ngoặt khi công nghệ bùng nổ vượt ngoài tầm kiểm soát con người là?',
          questionEn: 'Hypothetical point where tech growth becomes uncontrollable?',
          options: ['특이점', '전환점', '임계점', '분기점'],
          correctIndex: 0,
          explanation: '특이점 (Singularity) là điểm kỳ dị công nghệ.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '지속 가능한 번영을 도모하고자 신재생 에너지 혁신에 박차를 가하고 있습니다.', vi: 'Nhằm mưu cầu sự phồn vinh bền vững, chúng ta đang dốc toàn lực thúc đẩy đổi mới năng lượng tái tạo.', en: 'To foster sustainable prosperity, we accelerate renewable energy innovation.' },
      { time: '00:08', ko: '양자컴퓨팅이 상용화된다기에 연구진들이 비상한 관심을 보이고 있어요.', vi: 'Vì nghe bảo điện toán lượng tử sắp sửa thương mại hóa nên các nhà nghiên cứu đang quan tâm tột bậc.', en: 'Hearing that quantum computing is becoming commercialized, researchers show extraordinary interest.' }
    ],
    grammarPoints: [
      {
        name: '-고자 (Để / Nhằm mục đích... - Văn phong học thuật)',
        formula: 'Thân động từ + 고자',
        explanationVi: 'Dùng trong diễn văn, bài luận trang trọng để nêu rõ mục đích cao cả của hành động.',
        explanationEn: 'Formal speech/essay connector expressing intent or objective (\"in order to / with the intention of\").',
        examples: [
          { ko: '평화적 해결 방안을 모색하고자 회담을 개최했습니다.', vi: 'Nhằm tìm kiếm giải pháp hòa bình, chúng tôi đã tổ chức hội đàm.', en: 'We held talks in order to seek a peaceful resolution.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u2_q1',
        question: 'Dịch: "Nhằm thông báo cho mọi người, tôi đã gửi email này."',
        options: ['여러분께 알리고자 이 메일을 보냅니다.', '여러분께 알릴 리가 없어 이 메일을 보냅니다.', '여러분께 알린 셈치고 이 메일을 보냅니다.', '여러분께 알리는 척하여 이 메일을 보냅니다.'],
        correctIndex: 0,
        explanation: 'Nhằm mục đích làm gì trong văn thư trang trọng dùng -고자.'
      }
    ]
  },
  {
    id: 'cc6_u3',
    levelId: 'cao_cap_2',
    unitNumber: 3,
    titleKo: '철학과 사상',
    titleVi: 'Bài 3: Triết học và Tư tưởng',
    titleEn: 'Unit 3: Philosophy & Intellectual History',
    description: 'Nho giáo, Phật giáo, Đạo giáo, quy luật tất nhiên -기 마련이다, kết hợp đồng thời -(으)ㄹ 겸해서.',
    audioTrack: { trackName: 'Track 03 (Cao cấp 6)', fileName: '003.mp3', audioUrl: '/audio/so-cap-1/003.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u3_w1',
        hangul: '실학',
        romaja: 'sil-hak',
        type: 'Danh từ',
        meaningVi: 'Thực học (Trào lưu tư tưởng trọng thực tiễn thời hậu Joseon)',
        meaningEn: 'Silhak / Practical Learning movement',
        example: { ko: '실학사상은 백성의 실생활에 도움이 되는 실용성을 추구했습니다.', vi: 'Tư tưởng Thực học theo đuổi tính thực dụng ích nước lợi dân giúp ích cho đời sống bách tính.', en: 'Silhak philosophy pursued practical utility aiding citizens\' daily lives.' },
        dialogue: {
          speakerA: '연구자', speakerB: '교수',
          lineA: '인간의 본성에 대한 논쟁은 끝이 없군요.', lineB: '시대가 변하면 새로운 철학적 고뇌가 싹트기 마련이지요.',
          lineAVi: 'Tranh luận về bản tính con người quả là vô tận.', lineBVi: 'Thời đại đổi thay ắt nảy sinh những nỗi trăn trở triết học mới là lẽ tự nhiên thôi.',
          lineAEn: 'Debates on human nature are endless.', lineBEn: 'As eras change, new philosophical anxieties naturally sprout.'
        },
        exercise: {
          questionKo: '조선 후기 공리공론을 배격하고 실용적 학문을 지향한 사조는?',
          questionVi: 'Trào lưu bài trừ lý thuyết suông hướng tới học thuật thực tiễn thời hậu Joseon là?',
          questionEn: 'Joseon late-dynasty movement rejecting empty theory in favor of pragmatic learning?',
          options: ['실학', '성리학', '훈고학', '음양오행설'],
          correctIndex: 0,
          explanation: '실학 (實學) là phong trào Thực học.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '물극필반(物極必反)이라는 이치처럼 모든 현상은 정점에 이르면 쇠하기 마련입니다.', vi: 'Như đạo lý vật cực tất phản, vạn vật hễ đạt tới đỉnh cao tất sẽ suy vi theo quy luật.', en: 'Like extreme developments turning into their opposites, all phenomena naturally decline once reaching zenith.' },
      { time: '00:08', ko: '머리도 식힐 겸해서 고전 철학 서적을 완독했습니다.', vi: 'Tiện thể vừa thư giãn đầu óc tôi đã đọc trọn vẹn cuốn sách triết học cổ điển.', en: 'To also clear my head, I read through the classical philosophy volume.' }
    ],
    grammarPoints: [
      {
        name: '-기 마련이다 (Tất nhiên là sẽ... / Đương nhiên phải xảy ra theo quy luật)',
        formula: 'Thân động/tính từ + 기 마련이다',
        explanationVi: 'Khẳng định một quy luật khách quan chắc chắn sẽ xảy đến không thể khác được.',
        explanationEn: 'Indicates that something is bound to happen as a natural matter of course.',
        examples: [
          { ko: '사람은 누구나 실수를 하기 마련입니다.', vi: 'Đã là con người ai cũng tất yếu phạm phải sai sót là điều tự nhiên.', en: 'Anyone is naturally bound to make mistakes.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u3_q1',
        question: 'Dịch: "Thời gian trôi đi nỗi đau ắt sẽ nguôi ngoai là lẽ tất nhiên."',
        options: ['시간이 지나면 상처는 아물기 마련입니다.', '시간이 지나면 상처는 아물 텐데요.', '시간이 지나면 상처는 아물 지경입니다.', '시간이 지나면 상처는 아물 뿐더러요.'],
        correctIndex: 0,
        explanation: 'Quy luật tất yếu dùng -기 마련이다.'
      }
    ]
  },
  {
    id: 'cc6_u4',
    levelId: 'cao_cap_2',
    unitNumber: 4,
    titleKo: '한국문학',
    titleVi: 'Bài 4: Văn học Hàn Quốc',
    titleEn: 'Unit 4: Korean Literature & Poetics',
    description: 'Thơ ca & văn xuôi hiện đại, làm xong rồi mới -고서, hồi tưởng chất vấn -던가요?, bất kể là (이)나 할 것 없이.',
    audioTrack: { trackName: 'Track 04 (Cao cấp 6)', fileName: '004.mp3', audioUrl: '/audio/so-cap-1/004.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u4_w1',
        hangul: '서정시',
        romaja: 'seo-jeong-si',
        type: 'Danh từ',
        meaningVi: 'Thơ trữ tình',
        meaningEn: 'Lyric poetry',
        example: { ko: '윤동주의 서정시는 식민지 지식인의 고뇌와 부끄러움을 노래했습니다.', vi: 'Thơ trữ tình Yoon Dong-ju cất lên tiếng hát về nỗi trăn trở và hổ thẹn của trí thức thời thuộc địa.', en: 'Yoon Dong-ju\'s lyric poetry sang of colonial intellectuals\' grief and shame.' },
        dialogue: {
          speakerA: '문학도', speakerB: '비평가',
          lineA: '그 소설의 결말이 그토록 비극적이었던가요?', lineB: '네, 인간 실존의 허무를 뼈저리게 깨닫고서 비로소 펜을 놓았다고 합니다.',
          lineAVi: 'Kết cục cuốn tiểu thuyết đó bi tráng đến dường ấy sao?', lineBVi: 'Vâng, nhà văn sau khi thấm thía nỗi hư vô của kiếp người mới buông bút.',
          lineAEn: 'Was that novel\'s ending so tragic?', lineBEn: 'Yes, author laid down the pen only after acutely realizing existential void.'
        },
        exercise: {
          questionKo: '개인의 주관적인 감정이나 정서를 운율에 담아 표현한 시는?',
          questionVi: 'Thể thơ gửi gắm cảm xúc chủ quan và tâm tư cá nhân qua vần điệu là gì?',
          questionEn: 'Poetry expressing subjective personal emotions rhythmically?',
          options: ['서정시', '서사시', '극시', '풍자시'],
          correctIndex: 0,
          explanation: '서정시 (抒情詩) là thơ trữ tình.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '남녀노소 할 것 없이 모든 독자층의 심금을 울린 걸작입니다.', vi: 'Đây là kiệt tác chạm đến trái tim của mọi tầng lớp độc giả không phân biệt già trẻ gái trai.', en: 'It is a masterpiece that tugged at heartstrings of all readers regardless of age or gender.' },
      { time: '00:08', ko: '시인은 고뇌의 밤을 지새우고서 불후의 명작을 탄생시켰습니다.', vi: 'Nhà thơ sau khi thao thức qua bao đêm dài trăn trở đã cho ra đời tác phẩm bất hủ.', en: 'Only after enduring anguished sleepless nights did the poet create an immortal masterpiece.' }
    ],
    grammarPoints: [
      {
        name: '(이)나 (이)나 할 것 없이 (Bất kể ai / Không phân biệt A hay B)',
        formula: 'Danh từ A + (이)나 Danh từ B + (이)나 할 것 없이',
        explanationVi: 'Nhấn mạnh tính bao hàm toàn thể, không chừa một đối tượng nào.',
        explanationEn: 'Comprehensive idiom meaning \"without exception / regardless of whether A or B\".',
        examples: [
          { ko: '너나 나나 할 것 없이 모두가 피해자입니다.', vi: 'Bất kể bạn hay tôi, tất cả mọi người đều là nạn nhân.', en: 'Regardless of you or me, everyone is a victim.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u4_q1',
        question: 'Dịch: "Bất kể người giàu hay người nghèo, ai cũng muốn hạnh phúc."',
        options: ['부자나 가난한 사람이나 할 것 없이 행복을 바랍니다.', '부자나 가난한 사람인 셈치고 행복을 바랍니다.', '부자나 가난한 사람일 지경으로 행복을 바랍니다.', '부자나 가난한 사람으로 말미암아 행복을 바랍니다.'],
        correctIndex: 0,
        explanation: 'Bất kể ai không phân biệt dùng (이)나 할 것 없이.'
      }
    ]
  },
  {
    id: 'cc6_u5',
    levelId: 'cao_cap_2',
    unitNumber: 5,
    titleKo: '가족과 사회',
    titleVi: 'Bài 5: Gia đình và Xã hội',
    titleEn: 'Unit 5: Family Sociology & Demographics',
    description: 'Tỷ lệ sinh thấp & già hóa dân số, giả định quá khứ -았/었더라면, ra lệnh/dặn dò đối tượng -더러/보고.',
    audioTrack: { trackName: 'Track 05 (Cao cấp 6)', fileName: '005.mp3', audioUrl: '/audio/so-cap-1/005.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u5_w1',
        hangul: '저출산 고령화',
        romaja: 'jeo-chul-san go-ryeong-hwa',
        type: 'Danh từ',
        meaningVi: 'Tỷ lệ sinh thấp và già hóa dân số',
        meaningEn: 'Low birthrate and aging population',
        example: { ko: '저출산 고령화는 국가의 성장 잠재력을 위협하는 심각한 난제입니다.', vi: 'Sinh đẻ thấp và già hóa là nan đề nghiêm trọng đe dọa tiềm năng tăng trưởng quốc gia.', en: 'Low birthrate and aging society threaten nation\'s growth potential.' },
        dialogue: {
          speakerA: '인구학자', speakerB: '복지부 장관',
          lineA: '출산 지원 제도를 일찍이 정비했더라면 인구 절벽을 완화할 수 있었을 것입니다.', lineB: '정부더러 탁상행정만 한다고 비판하지만 구조적 복합 요인이 얽혀 있습니다.',
          lineAVi: 'Giá như chế độ trợ cấp sinh con được kiện toàn từ sớm thì đã xoa dịu được vực thẳm dân số.', lineBVi: 'Người ta phê phán bảo chính phủ chỉ làm việc trên bàn giấy, nhưng có nhiều nhân tố đan xen.',
          lineAEn: 'Had fertility support been reformed early, demographic cliff would have eased.', lineBEn: 'People criticize government for armchair administration, but factors are intertwined.'
        },
        exercise: {
          questionKo: '출생아 수는 급감하고 노인 인구 비율은 급증하는 인구학적 위기는?',
          questionVi: 'Khủng hoảng nhân khẩu học khi trẻ sơ sinh giảm mạnh và người già tăng vọt là?',
          questionEn: 'Demographic crisis of plummeting births and soaring elderly share?',
          options: ['저출산 고령화', '도시 과밀화', '인구 분산', '베이비붐'],
          correctIndex: 0,
          explanation: '저출산 고령화 là vấn đề sinh thấp già hóa.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '일과 가정의 양립을 위한 제도적 뒷받침이 진작 이루어졌더라면 좋았을 것입니다.', vi: 'Giá mà sự nâng đỡ thể chế để cân bằng công việc và gia đình được thực hiện từ sớm thì tốt biết bao.', en: 'Had institutional backing for work-family balance happened earlier, it would have been great.' },
      { time: '00:08', ko: '돌봄의 책임을 오롯이 개인더러 떠안으라고 강요할 수는 없습니다.', vi: 'Không thể bắt ép cá nhân phải đơn thương độc mã gánh trọn vẹn trách nhiệm chăm sóc được.', en: 'One cannot force individuals to shoulder entire caregiving burdens alone.' }
    ],
    grammarPoints: [
      {
        name: '-더러 / -보고 (Bảo ai / Nói với ai... - Khẩu ngữ chỉ đối tượng tiếp nhận)',
        formula: 'Danh từ chỉ người + 더러 / 보고',
        explanationVi: 'Được dùng trong khẩu ngữ thân mật để chỉ đối tượng được hướng tới hoặc bị yêu cầu làm việc gì.',
        explanationEn: 'Colloquial dative markers indicating the target person (\"to someone / telling someone\").',
        examples: [
          { ko: '나더러 어쩌란 말인가?', vi: 'Bảo tôi phải làm sao đây?', en: 'What are you telling me to do?' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u5_q1',
        question: 'Dịch: "Anh ấy bảo tôi hãy đợi một lát."',
        options: ['그가 나더러 잠시 기다리라고 했어요.', '그가 나로 말미암아 잠시 기다리라고 했어요.', '그가 나인 셈치고 잠시 기다리라고 했어요.', '그가 나일 지경으로 잠시 기다리라고 했어요.'],
        correctIndex: 0,
        explanation: 'Chỉ đối tượng được yêu cầu: -더러 -> 나더러.'
      }
    ]
  },
  {
    id: 'cc6_u6',
    levelId: 'cao_cap_2',
    unitNumber: 6,
    titleKo: '문화유산',
    titleVi: 'Bài 6: Di sản văn hóa',
    titleEn: 'Unit 6: Tangible Heritage & Preservation',
    description: 'Di sản thế giới UNESCO, chỉ duy nhất -(으)ㄹ 따름이다, có nguy cơ xảy ra -는 수가 있다.',
    audioTrack: { trackName: 'Track 06 (Cao cấp 6)', fileName: '006.mp3', audioUrl: '/audio/so-cap-1/006.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u6_w1',
        hangul: '원형 복원',
        romaja: 'won-hyeong bok-won',
        type: 'Danh từ',
        meaningVi: 'Phục dựng nguyên trạng / Khôi phục nguyên bản',
        meaningEn: 'Restoring to original form',
        example: { ko: '문화재 복원은 철저한 고증을 거쳐 원형 복원을 원칙으로 합니다.', vi: 'Trùng tu di sản phải qua khảo chứng chặt chẽ theo nguyên tắc phục dựng nguyên trạng.', en: 'Restoring cultural assets principles strict adherence to original form.' },
        dialogue: {
          speakerA: '기자', speakerB: '문화재위원',
          lineA: '섣부른 개발이 문화재에 어떤 악영향을 줍니까?', lineB: '역사적 가치를 영영 훼손하는 수가 있으므로 각별히 경계해야 합니다.',
          lineAVi: 'Việc quy hoạch phát triển hấp tấp gây tác hại gì tới di sản văn hóa?', lineBVi: 'Có nguy cơ làm tổn hại vĩnh viễn giá trị lịch sử nên phải hết sức cảnh giác.',
          lineAEn: 'What harms does hasty development cause cultural heritage?', lineBEn: 'There is a risk of forever damaging historical value, so we must be alert.'
        },
        exercise: {
          questionKo: '훼손된 문화재를 원래의 모습대로 되살리는 작업은?',
          questionVi: 'Công tác khôi phục lại di sản bị tổn hại về hình dáng ban đầu là gì?',
          questionEn: 'Work of reviving damaged cultural heritage to its original state?',
          options: ['원형 복원', '용도 변경', '강제 철거', '재개발'],
          correctIndex: 0,
          explanation: '원형 복원 là phục chế nguyên trạng.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '조상들의 숨결이 깃든 찬란한 유산 앞에 경외심을 느낄 따름입니다.', vi: 'Đứng trước di sản rực rỡ thấm đẫm hơi thở cha ông, lòng tôi chỉ duy nhất dâng trào niềm kính ngưỡng.', en: 'Before splendid heritage imbued with ancestors\' spirit, I merely feel awe.' },
      { time: '00:08', ko: '작은 부주의가 천년 고찰을 잿더미로 만드는 수가 있습니다.', vi: 'Một sơ suất nhỏ thôi cũng có nguy cơ biến ngôi cổ tự ngàn năm thành tro tàn.', en: 'A tiny carelessness can end up turning a millennial temple into ashes.' }
    ],
    grammarPoints: [
      {
        name: '-는 수가 있다 (Có nguy cơ / Coi chừng xảy ra điều tồi tệ)',
        formula: 'Thân động từ + 는 수가 있다',
        explanationVi: 'Cảnh báo về một nguy cơ rủi ro ngoài ý muốn có thể bất thần ập tới.',
        explanationEn: 'Warns of a negative possibility or hazard (\"there is a risk that / may end up doing\").',
        examples: [
          { ko: '방심하다가는 큰 코 다치는 수가 있어요.', vi: 'Cứ lơ là mất cảnh giác là có ngày ê chề trả giá đắt đấy.', en: 'If you stay careless, you might suffer a severe setback.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u6_q1',
        question: 'Dịch: "Nếu coi thường quy tắc có thể bị phạt nặng đấy."',
        options: ['규칙을 무시했다가는 큰 벌을 받는 수가 있습니다.', '규칙을 무시했다가는 큰 벌을 받는 법입니다.', '규칙을 무시했다가는 큰 벌을 받을 따름입니다.', '규칙을 무시했다가는 큰 벌을 받는 셈입니다.'],
        correctIndex: 0,
        explanation: 'Cảnh báo nguy cơ tiêu cực dùng -는 수가 있다.'
      }
    ]
  },
  {
    id: 'cc6_u7',
    levelId: 'cao_cap_2',
    unitNumber: 7,
    titleKo: '인간과 환경',
    titleVi: 'Bài 7: Con người và Môi trường',
    titleEn: 'Unit 7: Humanity & Ecology',
    description: 'Biến đổi khí hậu & bảo tồn, thường hay bị -기 일쑤이다, phải đến khi ấy mới -아/어야 비로소.',
    audioTrack: { trackName: 'Track 07 (Cao cấp 6)', fileName: '007.mp3', audioUrl: '/audio/so-cap-1/007.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u7_w1',
        hangul: '생태계 교란',
        romaja: 'saeng-tae-gye gyo-ran',
        type: 'Danh từ',
        meaningVi: 'Xáo trộn hệ sinh thái / Mất cân bằng sinh thái',
        meaningEn: 'Ecosystem disturbance',
        example: { ko: '외래종의 무분별한 유입은 토착 생태계 교란을 초래합니다.', vi: 'Sự xâm nhập bừa bãi của các loài ngoại lai dẫn tới xáo trộn hệ sinh thái bản địa.', en: 'Indiscriminate inflow of invasive species causes native ecosystem disturbance.' },
        dialogue: {
          speakerA: '환경운동가', speakerB: '시민',
          lineA: '환경 문제는 당장 눈앞의 이익에 밀려 외면받기 일쑤입니다.', lineB: '기후 재앙을 직접 겪고 나서야 비로소 심각성을 깨닫게 되지요.',
          lineAVi: 'Vấn đề môi trường thường hay bị ngó lơ trước các mối lợi ích trước mắt.', lineBVi: 'Phải sau khi trực tiếp nếm trải thảm họa khí hậu thì mới thấm thía mức độ nghiêm trọng.',
          lineAEn: 'Environmental issues are often sidelined by immediate profits.', lineBEn: 'Only after facing climate catastrophe do people realize severity.'
        },
        exercise: {
          questionKo: '생물 종의 균형이 깨져 자연 환경의 질서가 무너지는 상태는?',
          questionVi: 'Trạng thái cân bằng các loài bị phá vỡ khiến trật tự tự nhiên sụp đổ là?',
          questionEn: 'State of collapsed natural order due to broken species balance?',
          options: ['생태계 교란', '자연 정화', '친환경 농업', '녹색성장'],
          correctIndex: 0,
          explanation: '생태계 교란 là sự xáo trộn, hủy hoại hệ sinh thái.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '경제 논리에 밀려 자연보호는 뒷전으로 밀려나기 일쑤였습니다.', vi: 'Bị lấn át bởi toan tính kinh tế, bảo vệ thiên nhiên thường hay bị đẩy xuống hàng thứ yếu.', en: 'Outweighed by economic logic, nature conservation was frequently sidelined.' },
      { time: '00:08', ko: '생태계의 한 축이 무너져야 비로소 인간의 오만을 뉘우치게 됩니다.', vi: 'Phải đến khi một trụ cột hệ sinh thái sụp đổ thì con người mới ăn năn về sự ngạo mạn của mình.', en: 'Only when an ecological pillar crumbles do humans repent their arrogance.' }
    ],
    grammarPoints: [
      {
        name: '-아/어야 비로소 (Phải đến khi... thì mới thực sự...)',
        formula: 'Thân động/tính từ + 아/어야 비로소',
        explanationVi: 'Nhấn mạnh điều kiện hoặc trải nghiệm tất yếu làm bừng sáng sự nhận thức muộn màng.',
        explanationEn: 'Emphasizes that only upon fulfilling a precondition does realization arrive (\"only then\").',
        examples: [
          { ko: '건강을 잃어봐야 비로소 소중함을 압니다.', vi: 'Có mất đi sức khỏe thì mới thấu hiểu được giá trị quý báu của nó.', en: 'Only when losing health does one truly appreciate its value.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u7_q1',
        question: 'Dịch: "Phải đi xa quê hương thì mới nhận ra tình cảm gia đình."',
        options: ['고향을 떠나봐야 비로소 가족의 소중함을 깨닫습니다.', '고향을 떠나보기 일쑤라 가족의 소중함을 깨닫습니다.', '고향을 떠나는 셈치고 가족의 소중함을 깨닫습니다.', '고향을 떠날 지경이라 가족의 소중함을 깨닫습니다.'],
        correctIndex: 0,
        explanation: 'Phải trải qua mới nhận ra chân lý: -아/어야 비로소.'
      }
    ]
  },
  {
    id: 'cc6_u8',
    levelId: 'cao_cap_2',
    unitNumber: 8,
    titleKo: '언론과 여론',
    titleVi: 'Bài 8: Truyền thông & Dư luận',
    titleEn: 'Unit 8: Media Literacy & Public Opinion',
    description: 'Tin giả & trách nhiệm xã hội, đến bờ vực -(으)ㄹ 지경이다, cùng cực -기 짝이 없다.',
    audioTrack: { trackName: 'Track 08 (Cao cấp 6)', fileName: '008.mp3', audioUrl: '/audio/so-cap-1/008.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u8_w1',
        hangul: '확증 편향',
        romaja: 'hwak-jeung pyeon-hyang',
        type: 'Danh từ',
        meaningVi: 'Thiên kiến xác nhận (Chỉ tin vào thông tin củng cố định kiến của mình)',
        meaningEn: 'Confirmation bias',
        example: { ko: '알고리즘에 의한 확증 편향이 여론의 극단화를 부추기고 있습니다.', vi: 'Thiên kiến xác nhận do thuật toán định hướng đang kích động sự cực đoan hóa dư luận.', en: 'Confirmation bias driven by algorithms is fueling polarization of public opinion.' },
        dialogue: {
          speakerA: '언론학자', speakerB: '앵커',
          lineA: '가짜 뉴스로 인한 사회적 피해가 어느 정도입니까?', lineB: '사회적 신뢰 자본이 바닥날 지경이며 공동체 분열이 극심합니다.',
          lineAVi: 'Thiệt hại xã hội do tin giả gây ra ở mức độ nào?', lineBVi: 'Nguồn vốn tin cậy xã hội cạn kiệt đến bờ vực kiệt quệ và chia rẽ cộng đồng vô cùng sâu sắc.',
          lineAEn: 'To what extent is social damage caused by fake news?', lineBEn: 'Social trust capital is depleted to the brink, and division is extreme.'
        },
        exercise: {
          questionKo: '자신의 신념과 일치하는 정보만 받아들이고 반대 정보는 배척하는 심리는?',
          questionVi: 'Tâm lý chỉ đón nhận thông tin hợp ý mình và gạt bỏ thông tin trái chiều là?',
          questionEn: 'Tendency to embrace only info aligning with one\'s beliefs and dismiss opposing views?',
          options: ['확증 편향', '공정 보도', '집단 지성', '알 권리'],
          correctIndex: 0,
          explanation: '확증 편향 (Confirmation Bias) là thiên kiến xác nhận.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '무분별한 왜곡 보도로 인해 진실이 어디에 있는지 혼란스러울 지경입니다.', vi: 'Do các tin tức xuyên tạc bừa bãi, mọi người hoang mang đến mức chẳng còn biết chân tướng ở đâu.', en: 'Due to reckless biased reporting, people are confused to the point of not knowing truth.' },
      { time: '00:08', ko: '언론이 본연의 비판 기능을 상실한 채 권력에 영합하니 한탄스럽기 짝이 없습니다.', vi: 'Báo chí đánh mất chức năng phản biện nguyên bản mà xu nịnh quyền lực thì thật đáng thở dài khôn xiết.', en: 'It is exceedingly lamentable that the media compromises with power, losing its critical role.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 지경이다 (Đến mức độ / Đến bờ vực kiệt quệ...)',
        formula: 'Thân động/tính từ + (으)ㄹ 지경이다',
        explanationVi: 'Nhấn mạnh tình thế ngặt nghèo, mấp mé bên bờ vực của một trạng thái cực hạn.',
        explanationEn: 'Emphasizes extreme threshold or verge (\"on the verge of / almost to the point of\").',
        examples: [
          { ko: '너무 힘들어서 쓰러질 지경이었어요.', vi: 'Mệt quá sức đến mức như sắp ngã quỵ ra đấy.', en: 'I was so exhausted that I was on the verge of collapsing.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u8_q1',
        question: 'Dịch: "Đói đến mức hoa cả mắt."',
        options: ['배가 고파서 눈이 돌아갈 지경입니다.', '배가 고파서 눈이 돌아가기 마련입니다.', '배가 고파서 눈이 돌아가는 법입니다.', '배가 고파서 눈이 돌아갈 따름입니다.'],
        correctIndex: 0,
        explanation: 'Nhấn mạnh trạng thái cận kề cực hạn dùng -(으)ㄹ 지경이다.'
      }
    ]
  },
  {
    id: 'cc6_u9',
    levelId: 'cao_cap_2',
    unitNumber: 9,
    titleKo: '언어학',
    titleVi: 'Bài 9: Ngôn ngữ học',
    titleEn: 'Unit 9: Linguistics & Cognitive Structures',
    description: 'Âm vị học, ngữ pháp học đại cương, -(ㄴ/는)다는 점에서, (으)로 말미암아.',
    audioTrack: { trackName: 'Track 09 (Cao cấp 6)', fileName: '009.mp3', audioUrl: '/audio/so-cap-1/009.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u9_w1',
        hangul: '음운 체계',
        romaja: 'eum-un che-gye',
        type: 'Danh từ',
        meaningVi: 'Hệ thống âm vị / Cấu trúc ngữ âm',
        meaningEn: 'Phonological system',
        example: { ko: '한국어의 음운 체계는 자음과 모음의 대립 구조가 독특합니다.', vi: 'Hệ âm vị tiếng Hàn có cấu trúc đối lập phụ âm và nguyên âm rất độc đáo.', en: 'Korean phonological system has a unique contrastive structure of consonants and vowels.' },
        dialogue: {
          speakerA: '언어학자', speakerB: '대학원생',
          lineA: '한글 창제의 음운학적 가치는 어디에 있습니까?', lineB: '발음 기관의 상형에 기반을 두었다는 점에서 세계 언어학사상 유례가 없습니다.',
          lineAVi: 'Giá trị ngữ âm học của việc sáng chế chữ Hangul nằm ở đâu?', lineBVi: 'Ở phương diện lấy hình dáng cơ quan phát âm làm gốc, nó chưa từng có tiền lệ trong lịch sử ngôn ngữ học nhân loại.',
          lineAEn: 'Where lies the phonological value of Hangul\'s invention?', lineBEn: 'In that it is based on speech organs\' shape, it is unprecedented in world linguistics.'
        },
        exercise: {
          questionKo: '언어에서 의미를 구별해 주는 소리의 최소 단위를 연구하는 체계는?',
          questionVi: 'Hệ thống nghiên cứu đơn vị âm thanh nhỏ nhất phân biệt nghĩa trong ngôn ngữ là?',
          questionEn: 'System studying the smallest sound units distinguishing meaning in language?',
          options: ['음운 체계', '어휘 체계', '문장 구조', '담화 구조'],
          correctIndex: 0,
          explanation: '음운 체계 (音韻體系) là hệ thống âm vị.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '인간의 언어는 무한한 표현을 생성해 낸다는 점에서 동물과 구별됩니다.', vi: 'Ngôn ngữ con người khác biệt với loài vật ở phương diện nó sản sinh ra vô hạn các biểu đạt.', en: 'Human language distinguishes from animals in that it generates infinite expressions.' },
      { time: '00:08', ko: '사고의 깊이는 언어의 정밀성으로 말미암아 비약적으로 확장됩니다.', vi: 'Chiều sâu của tư duy được mở rộng vượt bậc nhờ vào sự tinh chuẩn của ngôn từ.', en: 'Depth of thought expands leaps and bounds owing to linguistic precision.' }
    ],
    grammarPoints: [
      {
        name: '-(ㄴ/는)다는 점에서 (Xét ở khía cạnh...)',
        formula: 'Thân động/tính từ + (ㄴ/는)다는 점에서',
        explanationVi: 'Nhấn mạnh tiêu chí học thuật để định danh đặc trưng bản chất của sự vật.',
        explanationEn: 'Formal criterion marker (\"in the aspect that / given that\").',
        examples: [
          { ko: '과학적 합리성을 갖추었다는 점에서 우수합니다.', vi: 'Nó ưu việt ở khía cạnh hội tụ đầy đủ tính duy lý khoa học.', en: 'It is excellent in that it possesses scientific rationality.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u9_q1',
        question: 'Dịch: "Hangul rất khoa học ở khía cạnh nguyên lý sáng tạo có tính hệ thống."',
        options: ['체계적이라는 점에서 과학적입니다.', '체계적인 셈이라 과학적입니다.', '체계적일 지경이라 과학적입니다.', '체계적이기 마련이라 과학적입니다.'],
        correctIndex: 0,
        explanation: 'Khẳng định phẩm chất dựa trên tiêu chí dùng -(ㄴ/는)다는 점에서.'
      }
    ]
  },
  {
    id: 'cc6_u10',
    levelId: 'cao_cap_2',
    unitNumber: 10,
    titleKo: '사회와 환경',
    titleVi: 'Bài 10: Xã hội & Môi trường',
    titleEn: 'Unit 10: Environmental Governance & Society',
    description: 'Khủng hoảng sinh thái, trong bối cảnh nước sôi lửa bỏng -(으)ㄴ/는 마당에, thà làm việc này -느니 차라리.',
    audioTrack: { trackName: 'Track 10 (Cao cấp 6)', fileName: '010.mp3', audioUrl: '/audio/so-cap-1/010.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u10_w1',
        hangul: '탄소 중립',
        romaja: 'tan-so jung-rip',
        type: 'Danh từ',
        meaningVi: 'Trung hòa carbon (Net Zero)',
        meaningEn: 'Carbon neutrality / Net Zero',
        example: { ko: '2050 탄소 중립 목표를 달성하기 위해 범국가적 노력이 필요합니다.', vi: 'Để đạt mục tiêu trung hòa carbon năm 2050 cần có nỗ lực của toàn thể quốc gia.', en: 'Pan-national efforts are needed to achieve the 2050 carbon neutrality goal.' },
        dialogue: {
          speakerA: '기후학자', speakerB: '정부 관료',
          lineA: '전 지구적 기후 재앙이 코앞에 닥친 마당에 대책이 너무 미온적입니다.', lineB: '형식적인 구호에 그치느니 차라리 강력한 탄소세를 도입해야 합니다.',
          lineAVi: 'Trong bối cảnh thảm họa khí hậu toàn cầu cận kề trước mắt mà giải pháp lại quá hời hợt.', lineBVi: 'Thà áp dụng thuế carbon thật mạnh tay còn hơn chỉ dừng lại ở những khẩu hiệu hình thức.',
          lineAEn: 'Amid impending planetary climate disaster, measures are too lukewarm.', lineBEn: 'Rather than stopping at formal slogans, we should adopt strong carbon taxes.'
        },
        exercise: {
          questionKo: '온실가스 배출량과 흡수량을 같게 하여 실질 배출량을 0으로 만드는 것은?',
          questionVi: 'Việc làm cho lượng phát thải và lượng hấp thụ khí nhà kính cân bằng đưa lượng phát thải thực tế về 0 là?',
          questionEn: 'Making net emissions zero by balancing greenhouse gas emissions and absorption?',
          options: ['탄소 중립', '자연 개발', '원자력 발전', '화석 연료'],
          correctIndex: 0,
          explanation: '탄소 중립 (Carbon Neutrality) là trung hòa carbon.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '지구의 한계선이 무너지고 있는 위급한 마당에 더 이상 머뭇거릴 시간이 없습니다.', vi: 'Trong bối cảnh nguy cấp khi ngưỡng ranh giới chịu đựng của trái đất đang vỡ vụn, ta chẳng còn thì giờ chần chừ.', en: 'In a critical juncture where Earth\'s planetary boundaries collapse, there is no time to hesitate.' },
      { time: '00:08', ko: '미래 세대에게 빚을 떠넘기느니 차라리 지금 과감한 전환의 고통을 감내해야 합니다.', vi: 'Thà chịu đựng nỗi đau chuyển dịch quyết liệt ngay lúc này còn hơn đùn đẩy món nợ cho thế hệ tương lai.', en: 'Rather than dumping debts onto future generations, we would rather endure pains of bold transition now.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 마당에 (Trong bối cảnh / Giữa tình cảnh nước sôi lửa bỏng này...)',
        formula: 'Động từ + 는 마당에 | Quá khứ + (으)ㄴ 마당에',
        explanationVi: 'Nhấn mạnh bối cảnh tình huống đang cấp bách, tế nhị mà lại làm một việc không thỏa đáng.',
        explanationEn: 'Indicates a critical circumstance or juncture (\"in this situation where / under these conditions\").',
        examples: [
          { ko: '모두가 힘을 모아야 할 마당에 분열해서는 안 됩니다.', vi: 'Giữa bối cảnh mọi người phải đồng lòng chung sức thì không được chia rẽ.', en: 'Under circumstances where everyone must unite, we must not divide.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u10_q1',
        question: 'Dịch: "Giữa lúc công ty đang gặp khó khăn này, chúng ta không nên đòi hỏi thêm."',
        options: ['회사가 어려운 마당에 무리한 요구를 해서는 안 됩니다.', '회사가 어려울 지경에 무리한 요구를 해서는 안 됩니다.', '회사가 어려운 셈치고 무리한 요구를 해서는 안 됩니다.', '회사가 어려울 따름에 무리한 요구를 해서는 안 됩니다.'],
        correctIndex: 0,
        explanation: 'Trong bối cảnh tình thế ngặt nghèo dùng -(으)ㄴ/는 마당에.'
      }
    ]
  },
  {
    id: 'cc6_u11',
    levelId: 'cao_cap_2',
    unitNumber: 11,
    titleKo: '현대의 의학',
    titleVi: 'Bài 11: Y học hiện đại',
    titleEn: 'Unit 11: Modern Medicine & Bioethics',
    description: 'Công nghệ sinh học & y học chính xác, nguy cơ cao -기 십상이다, coi như là / giả định -(으)ㄴ/는 셈치다.',
    audioTrack: { trackName: 'Track 11 (Cao cấp 6)', fileName: '011.mp3', audioUrl: '/audio/so-cap-1/011.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u11_w1',
        hangul: '맞춤 의학',
        romaja: 'mat-chum ui-hak',
        type: 'Danh từ',
        meaningVi: 'Y học chính xác / Y học cá thể hóa',
        meaningEn: 'Precision medicine / Personalized healthcare',
        example: { ko: '유전체 분석을 통한 맞춤 의학이 난치병 치료의 새 지평을 열었습니다.', vi: 'Y học cá thể hóa thông qua phân tích bộ gen đã mở ra chân trời mới điều trị bệnh nan y.', en: 'Precision medicine via genomic analysis opened new horizons for curing incurable diseases.' },
        dialogue: {
          speakerA: '의사', speakerB: '환자',
          lineA: '민간요법에 맹신하다가는 치료의 결정적 시기를 놓치기 십상입니다.', lineB: '네, 속는 셈치고 과학적 임상 치료에 전념하겠습니다.',
          lineAVi: 'Mù quáng tin vào thuốc nam dân gian rất dễ bỏ lỡ thời điểm vàng điều trị.', lineBVi: 'Vâng, coi như đánh cược một lần tôi sẽ toàn tâm cho phác đồ lâm sàng khoa học.',
          lineAEn: 'Blindly trusting folk remedies is prone to missing critical treatment windows.', lineBEn: 'Yes, considering it a leap of faith, I will focus on clinical therapy.'
        },
        exercise: {
          questionKo: '개인의 유전 정보와 생활 습관을 고려하여 최적의 치료를 제공하는 의학은?',
          questionVi: 'Nền y học cung cấp điều trị tối ưu dựa trên thông tin di truyền và lối sống từng cá nhân là?',
          questionEn: 'Medicine providing optimal therapy considering personal genetic data and habits?',
          options: ['맞춤 의학', '한의학', '응급의학', '예방접종'],
          correctIndex: 0,
          explanation: '맞춤 의학 (Precision Medicine) là y học cá thể hóa.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '조기 검진을 소홀히 했다가는 질병을 키우기 십상입니다.', vi: 'Nếu lơ là khám tầm soát sớm thì rất dễ làm mầm bệnh ủ lớn hơn.', en: 'Neglecting early screening is apt to aggravate diseases.' },
      { time: '00:08', ko: '좋은 경험을 한 셈치고 긍정적인 마음으로 재활 치료에 임합시다.', vi: 'Coi như đã trải qua một bài học quý, hãy lạc quan đối diện với trị liệu phục hồi chức năng.', en: 'Treating it as a valuable experience, let us engage in rehabilitation positively.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 셈치다 (Coi như là... / Tự nhủ như đã xong để bỏ qua)',
        formula: 'Động từ + (으)ㄴ 셈치다 (quá khứ/đã làm) / 는 셈치다',
        explanationVi: 'Tự thuyết phục bản thân coi như sự việc đã xảy ra như thế để chấp nhận hoàn cảnh.',
        explanationEn: 'Mentally resolving to consider something as done or settled (\"consider as / count as\").',
        examples: [
          { ko: '돈을 잃어버린 셈치고 좋은 일에 썼어요.', vi: 'Coi như làm rơi mất số tiền đó, tôi đã dùng nó làm việc thiện.', en: 'Considering the money as lost, I donated it to a good cause.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u11_q1',
        question: 'Dịch: "Coi như bị lừa một lần, bạn hãy thử tin tưởng đi."',
        options: ['속는 셈치고 한번 믿어 보세요.', '속을 지경이라 한번 믿어 보세요.', '속는 마당에 한번 믿어 보세요.', '속기 마련이라 한번 믿어 보세요.'],
        correctIndex: 0,
        explanation: 'Coi như việc gì đã như thế dùng -(으)ㄴ/는 셈치다 -> 속는 셈치고.'
      }
    ]
  },
  {
    id: 'cc6_u12',
    levelId: 'cao_cap_2',
    unitNumber: 12,
    titleKo: '인간과 자연',
    titleVi: 'Bài 12: Con người và Tự nhiên',
    titleEn: 'Unit 12: Nature, Gaia & Coexistence',
    description: 'Hòa quyện đất trời, chẳng những thế mà còn -(으)ㄹ 뿐더러, tùy theo đà -(으)ㅁ에 따라.',
    audioTrack: { trackName: 'Track 12 (Cao cấp 6)', fileName: '012.mp3', audioUrl: '/audio/so-cap-1/012.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u12_w1',
        hangul: '물아일체',
        romaja: 'mul-a-il-che',
        type: 'Thành ngữ bốn chữ',
        meaningVi: 'Vật ngã nhất thể (Con người và thiên nhiên hòa làm một)',
        meaningEn: 'Oneness of self and nature',
        example: { ko: '선비들은 자연 속에 정자를 짓고 물아일체의 경지를 노래했습니다.', vi: 'Các nho sĩ dựng đình tạ giữa non xanh nước biếc ca ngợi cảnh giới vật ngã nhất thể.', en: 'Scholars built pavilions in nature and sang of the realm of self-nature oneness.' },
        dialogue: {
          speakerA: '자연주의자', speakerB: '청중',
          lineA: '자연 파괴는 인간 자신에 대한 파괴일 뿐더러 후손에 대한 범죄입니다.', lineB: '환경 의식이 성숙해짐에 따라 생태 중심주의로 패러다임이 전환되고 있습니다.',
          lineAVi: 'Phá hủy tự nhiên chẳng những hủy diệt chính con người mà còn là tội ác với hậu thế.', lineBVi: 'Cùng với đà ý thức môi trường chín muồi, hệ hình tư duy đang dịch chuyển sang vị sinh thái.',
          lineAEn: 'Nature destruction harms humans and is a crime against posterity.', lineBEn: 'As eco-consciousness matures, paradigm shifts to ecocentrism.'
        },
        exercise: {
          questionKo: '주관과 객관, 나와 자연이 하나로 융합된 최고의 정신적 경지는?',
          questionVi: 'Cảnh giới tinh thần tối cao khi cái tôi và thiên nhiên hòa quyện làm một là?',
          questionEn: 'Supreme state where subject and object, self and nature fuse into one?',
          options: ['물아일체', '동상이몽', '오매불망', '각골난망'],
          correctIndex: 0,
          explanation: '물아일체 (物我一體) là vật ngã nhất thể.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '숲은 우리에게 맑은 공기를 제공할 뿐더러 심신의 치유를 안겨 줍니다.', vi: 'Rừng già chẳng những cung cấp cho ta bầu không khí trong lành mà còn mang lại sự chữa lành tâm thân.', en: 'Forests not only provide clean air but also bring physical and mental healing.' },
      { time: '00:08', ko: '기온이 상승함에 따라 생물들의 서식지가 북쪽으로 이동하고 있습니다.', vi: 'Theo đà nhiệt độ ấm lên, môi trường sống của các loài sinh vật đang dịch chuyển lên phương bắc.', en: 'As temperatures rise, habitats of living organisms are shifting northward.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄹ 뿐더러 (Chẳng những... mà còn... - Văn phong học thuật)',
        formula: 'Thân động/tính từ + (으)ㄹ 뿐더러',
        explanationVi: 'Nhấn mạnh sự gia tăng thêm thông tin tương tự như -(으)ㄹ 뿐만 아니라 nhưng trang trọng hơn.',
        explanationEn: 'Formal conjunctive ending denoting strong addition (\"not only ... but furthermore\").',
        examples: [
          { ko: '그는 학식이 풍부할 뿐더러 인품 또한 훌륭합니다.', vi: 'Ông ấy chẳng những học thức uyên bác mà nhân cách cũng vô cùng cao thượng.', en: 'He is not only richly erudite but also possessing noble character.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u12_q1',
        question: 'Dịch: "Nơi này chẳng những phong cảnh đẹp mà không khí lại còn trong lành."',
        options: ['경치가 아름다울 뿐더러 공기도 맑습니다.', '경치가 아름다울 지경이라 공기도 맑습니다.', '경치가 아름다운 셈치고 공기도 맑습니다.', '경치가 아름다운 마당에 공기도 맑습니다.'],
        correctIndex: 0,
        explanation: 'Thêm vào đó trang trọng dùng -(으)ㄹ 뿐더러.'
      }
    ]
  },
  {
    id: 'cc6_u13',
    levelId: 'cao_cap_2',
    unitNumber: 13,
    titleKo: '정보와 통신',
    titleVi: 'Bài 13: Thông tin & Viễn thông',
    titleEn: 'Unit 13: Information Theory & Telecommunications',
    description: 'Bảo mật mạng & lượng tử, điều được biết/ghi nhận -(으)ㄴ/는 바, chỉ duy nhất -(으)ㄹ 따름이다.',
    audioTrack: { trackName: 'Track 13 (Cao cấp 6)', fileName: '013.mp3', audioUrl: '/audio/so-cap-1/013.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u13_w1',
        hangul: '정보 격차',
        romaja: 'jeong-bo gyeok-cha',
        type: 'Danh từ',
        meaningVi: 'Hố ngăn cách số / Khoảng cách thông tin (Digital Divide)',
        meaningEn: 'Digital divide / Information gap',
        example: { ko: '디지털 전환이 가속화될수록 정보 격차 해소가 중요한 과제로 부각됩니다.', vi: 'Chuyển đổi số càng gia tốc thì việc xóa bỏ hố ngăn cách số càng nổi lên như bài toán trọng đại.', en: 'As digital transformation accelerates, bridging the digital divide emerges as key.' },
        dialogue: {
          speakerA: '보안 책임자', speakerB: '기자',
          lineA: '이번 해킹 사고의 원인은 파악되었습니까?', lineB: '현재까지 조사된 바로는 외부 침입 경로를 차단하고 취약점을 보완했을 따름입니다.',
          lineAVi: 'Nguyên nhân sự cố tin tặc lần này đã nắm được chưa?', lineBVi: 'Theo những gì được điều tra đến nay, ta mới chỉ chặn đường xâm nhập và vá lỗ hổng mà thôi.',
          lineAEn: 'Has the cause of this hacking incident been identified?', lineBEn: 'As investigated so far, we have merely blocked intrusions and patched flaws.'
        },
        exercise: {
          questionKo: '디지털 기기와 인터넷 접근성 차이로 인해 발생하는 사회적 불평등은?',
          questionVi: 'Bất bình đẳng xã hội phát sinh do sự chênh lệch trong khả năng tiếp cận thiết bị và internet là?',
          questionEn: 'Social inequality arising from disparities in digital devices and internet access?',
          options: ['정보 격차', '소득 분배', '세대 갈등', '문화 지체'],
          correctIndex: 0,
          explanation: '정보 격차 (Digital Divide) là hố ngăn cách thông tin số.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '전문가들이 연구 검토한 바에 따르면 데이터 주권 확립이 시급합니다.', vi: 'Theo những gì các chuyên gia đã nghiên cứu rà soát, xác lập chủ quyền dữ liệu là việc cấp bách.', en: 'According to what experts reviewed, establishing data sovereignty is urgent.' },
      { time: '00:08', ko: '저희 연구진은 국가 기간망의 안전을 지키는 데 최선을 다할 따름입니다.', vi: 'Đội ngũ nghiên cứu của chúng tôi chỉ duy nhất dốc toàn tâm toàn lực bảo vệ mạng lưới huyết mạch quốc gia.', en: 'Our team merely does its utmost to protect the safety of the national backbone.' }
    ],
    grammarPoints: [
      {
        name: '-(으)ㄴ/는 바 (Điều mà... / Theo như nội dung đã ghi nhận)',
        formula: 'Động từ + (으)ㄴ 바 (quá khứ) / 는 바 (hiện tại)',
        explanationVi: 'Danh từ phụ thuộc chỉ sự việc, thực tế đã được phát hiện, điều tra trong văn bản chính luận.',
        explanationEn: 'Formal bound noun denoting a confirmed fact or observation (\"what / as observed\").',
        examples: [
          { ko: '제가 아는 바를 솔직히 말씀드리겠습니다.', vi: 'Tôi xin phép trình bày trung thực những gì tôi được biết.', en: 'I will honestly state what I know.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u13_q1',
        question: 'Dịch: "Theo như điều tôi nghe ngóng được..."',
        options: ['내가 들은 바에 의하면', '내가 들을 지경에 의하면', '내가 들은 셈치고', '내가 들을 뿐더러'],
        correctIndex: 0,
        explanation: 'Theo điều đã ghi nhận dùng -(으)ㄴ 바에 의하면.'
      }
    ]
  },
  {
    id: 'cc6_u14',
    levelId: 'cao_cap_2',
    unitNumber: 14,
    titleKo: '현대사회의 문제',
    titleVi: 'Bài 14: Vấn đề xã hội hiện đại',
    titleEn: 'Unit 14: Modern Dilemmas & Pathologies',
    description: 'Khủng hoảng tâm lý & tha hóa, do bởi -(으)로 인하여, dẫu rằng... huống chi -거늘.',
    audioTrack: { trackName: 'Track 14 (Cao cấp 6)', fileName: '014.mp3', audioUrl: '/audio/so-cap-1/014.mp3', duration: '03:30' },
    vocabulary: [
      {
        id: 'cc6_u14_w1',
        hangul: '사회적 고립',
        romaja: 'sa-hoe-jeok go-rip',
        type: 'Danh từ',
        meaningVi: 'Cô lập xã hội / Tách biệt khỏi cộng đồng',
        meaningEn: 'Social isolation',
        example: { ko: '1인 가구의 증가와 함께 고독사와 사회적 고립이 심각한 사회 문제입니다.', vi: 'Cùng với việc tăng hộ 1 người, chết trong cô độc và cô lập xã hội là vấn đề nhức nhối.', en: 'Along with single households, solitary death and social isolation are critical problems.' },
        dialogue: {
          speakerA: '사회복지사', speakerB: '구청장',
          lineA: '경제적 빈곤으로 인하여 단절된 이웃들이 도움의 손길을 기다립니다.', lineB: '미물인 곤충도 서로 도우며 살아가거늘 하물며 만물의 영장인 인간이 외면할 수 있겠습니까.',
          lineAVi: 'Những người hàng xóm bị đứt gãy do cảnh nghèo khó đang chờ đợi cánh tay cứu giúp.', lineBVi: 'Đến côn trùng nhỏ bé còn biết nương tựa nhau sống, huống chi con người là linh hồn vạn vật sao đành ngó lơ.',
          lineAEn: 'Neighbors severed due to poverty await a helping hand.', lineBEn: 'Even tiny insects live helping each other, how could humans turn away?'
        },
        exercise: {
          questionKo: '사회적 관계망이 단절되어 홀로 고립되는 현상은?',
          questionVi: 'Hiện tượng mạng lưới quan hệ xã hội bị đứt đoạn khiến người ta bị cô lập một mình là?',
          questionEn: 'Phenomenon of being isolated alone due to severed social networks?',
          options: ['사회적 고립', '사회적 유대', '공동체 회복', '연대 의식'],
          correctIndex: 0,
          explanation: '사회적 고립 (Social Isolation) là sự cô lập xã hội.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '과도한 경쟁으로 인하여 현대인들은 극심한 피로 사회를 살아가고 있습니다.', vi: 'Do sự cạnh tranh thái quá mà con người hiện đại đang phải sống trong một xã hội mệt mỏi tột cùng.', en: 'Due to excessive competition, modern people are living in an intensely exhausted society.' },
      { time: '00:08', ko: '하찮은 풀잎도 생명을 아끼거늘 어찌 고귀한 생명을 경시할 수 있겠습니까.', vi: 'Dẫu ngọn cỏ hèn mọn còn biết tiếc sinh linh, huống chi con người sao có thể xem nhẹ sinh mạng cao quý.', en: 'Even trifling grass cherishes life, how could one ever disregard noble life?' }
    ],
    grammarPoints: [
      {
        name: '-거늘 (Dẫu rằng... huống hồ là / Sao lại... - Văn ngôn tu từ)',
        formula: 'Thân động/tính từ + 거늘',
        explanationVi: 'Lối văn ngôn cổ điển dùng để đối chiếu một sự thật tự nhiên để chất vấn, quở trách hành vi con người.',
        explanationEn: 'Archaic rhetorical connector meaning \"even though / given that ... how much more so\".',
        examples: [
          { ko: '짐승도 은혜를 알거늘 사람이 배은망덕해서야 되겠습니까.', vi: 'Đến loài cầm thú còn biết ơn nghĩa, người lẽ nào lại vong ân bội nghĩa sao được.', en: 'Even beasts recognize kindness, how could humans be ungrateful?' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u14_q1',
        question: 'Chọn liên từ tu từ cổ điển: "Đến cây cỏ còn biết thay lá đón xuân, ____ con người sao lại bi quan?"',
        options: ['초목도 봄을 알거늘', '초목도 봄을 아는 마당에', '초목도 봄을 알 지경이라', '초목도 봄을 아는 셈치고'],
        correctIndex: 0,
        explanation: 'Văn phong tu từ đối chiếu chân lý hiển nhiên dùng -거늘.'
      }
    ]
  },
  {
    id: 'cc6_u15',
    levelId: 'cao_cap_2',
    unitNumber: 15,
    titleKo: '취업과 직장 생활',
    titleVi: 'Bài 15: Việc làm & Đời sống công sở',
    titleEn: 'Unit 15: Career Mastery & Global Leadership',
    description: 'Chuyên gia & lãnh đạo toàn cầu, đến cực điểm -(으)ㄹ 지경이다, bất luận không phân biệt 불문하고.',
    audioTrack: { trackName: 'Track 15 (Cao cấp 6)', fileName: '015.mp3', audioUrl: '/audio/so-cap-1/015.mp3', duration: '03:40' },
    vocabulary: [
      {
        id: 'cc6_u15_w1',
        hangul: '글로벌 역량',
        romaja: 'geul-ro-beol yeok-ryang',
        type: 'Danh từ',
        meaningVi: 'Năng lực toàn cầu / Bản lĩnh quốc tế',
        meaningEn: 'Global competence / Leadership capacity',
        example: { ko: '급변하는 국제 시장에서 활약하기 위해 글로벌 역량을 길러야 합니다.', vi: 'Để hoạt động tích cực trên thị trường quốc tế biến chuyển nhanh chóng, phải trau dồi bản lĩnh toàn cầu.', en: 'One must cultivate global competence to thrive in fast-changing international markets.' },
        dialogue: {
          speakerA: '인사총괄이사', speakerB: '신입사원',
          lineA: '우리 회사는 학벌이나 출신을 불문하고 오직 실력만으로 인재를 발탁합니다.', lineB: '그 믿음에 보답하기 위해 온 열정을 다해 기여하겠습니다.',
          lineAVi: 'Công ty chúng tôi bất luận bằng cấp hay xuất thân, tuyển chọn nhân tài duy nhất bằng thực lực.', lineBVi: 'Để đền đáp niềm tin ấy, em sẽ cống hiến bằng tất cả nhiệt huyết của mình.',
          lineAEn: 'Our company selects talents purely on merit, irrespective of academic pedigree.', lineBEn: 'To repay that trust, I will contribute with all my passion.'
        },
        exercise: {
          questionKo: '조건이나 차별을 따지지 않고 모두에게 열려 있음을 뜻하는 한자 표현은?',
          questionVi: 'Cách diễn đạt Hán Hàn biểu thị việc không so đo phân biệt điều kiện là?',
          questionEn: 'Hanja expression meaning regardless of conditions or distinctions?',
          options: ['불문하고', '막론하고', '간주하고', '구애받고'],
          correctIndex: 0,
          explanation: '불문하고 (不問) nghĩa là bất luận, không kể.'
        }
      }
    ],
    parallelSubtitles: [
      { time: '00:00', ko: '국적과 성별을 불문하고 역량 있는 인재들에게 공평한 기회를 보장합니다.', vi: 'Bất luận quốc tịch và giới tính, cơ hội công bằng được bảo đảm cho mọi nhân tài có thực lực.', en: 'Irrespective of nationality or gender, fair opportunities are guaranteed to capable talents.' },
      { time: '00:09', ko: '수많은 역경을 극복해 온 당신이야말로 진정한 글로벌 리더입니다.', vi: 'Bạn chính là người đã vượt qua muôn vàn nghịch cảnh, xứng đáng là nhà lãnh đạo toàn cầu chân chính.', en: 'You, who have overcome numerous adversities, are indeed a true global leader.' }
    ],
    grammarPoints: [
      {
        name: '을/를 불문하고 (Bất luận / Không kể... - Không phân biệt điều kiện)',
        formula: 'Danh từ + 을/를 불문하고',
        explanationVi: 'Nhấn mạnh tính bình đẳng tuyệt đối, không căn cứ vào điều kiện bên ngoài.',
        explanationEn: 'Formal phrase meaning \"regardless of / irrespective of / without distinction of\".',
        examples: [
          { ko: '이유를 불문하고 폭력은 용납될 수 없습니다.', vi: 'Bất luận vì lý do gì, bạo lực không thể dung thứ.', en: 'Irrespective of the reason, violence cannot be tolerated.' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'cc6_u15_q1',
        question: 'Dịch: "Bất luận ngày hay đêm, các bác sĩ luôn túc trực cấp cứu."',
        options: ['주야를 불문하고 의사들은 대기합니다.', '주야인 셈치고 의사들은 대기합니다.', '주야일 지경이라 의사들은 대기합니다.', '주야로 말미암아 의사들은 대기합니다.'],
        correctIndex: 0,
        explanation: 'Bất luận ngày đêm: 주야를 불문하고.'
      }
    ]
  }
];
