let music = new Audio();

const songs = [
    {
    id:'1',
    songname:`Miên Man
    <div class="subtitle">Minh Huy</div>`,
    poster:"songs/1.png",
    lyrics:``,
    hitname: `Miên Man`,

    },
    {
        id:'2',
        songname:`Tò Te Tí
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/2.png",
        lyrics:`b`,
        hitname: `Tò Te Tí`,
    },
    {
        id:'3',
        songname:`Vòng Xoay
        <div class="subtitle">KoQuet</div>`,
        poster:"songs/3.png",
        lyrics:`c`,
        hitname: `Vòng Xoay`,
    },
    {
        id:'4',
        songname:`Don't Côi
        <div class="subtitle">RPT-Orijinn ft Ronboogz</div>`,
        poster:"songs/4.png",
        lyrics:`d`,
        hitname: `Don't Côi`,
    },
    {
        id:'5',
        songname:`Can We Kiss Forever?
        <div class="subtitle">Kun Lâm</div>`,
        poster:"songs/5.png",
        lyrics:`e`,
        hitname: `Can We Kiss Forever?`,
    },
    {
        id:'6',
        songname:`itsatlcd
        <div class="subtitle">RADWIMPS</div>`,
        poster:"songs/6.png",
        lyrics:`f`,
        hitname: `itsatlcd`,
    },
    {
        id:'7',
        songname:`Em Xinh
        <div class="subtitle">Mono</div>`,
        poster:"songs/7.png",
        lyrics:`g`,
        hitname: `Em Xinh`,
    },
    {
        id:'8',
        songname:`Có Hẹn Với Thanh Xuân
        <div class="subtitle">MONSTAR</div>`,
        poster:"songs/8.png",
        lyrics:`h`,
        hitname: `Có Hẹn Với Thanh Xuân`,
    },
    {
        id:'9',
        songname:`3107 - 2
        <div class="subtitle">Duongg ft Nâu</div>`,
        poster:"songs/9.png",
        lyrics:`i`,
        hitname: `3107 - 2`,
    },
    {
        id:'10',
        songname:`Nàng Thơ
        <div class="subtitle">Hoàng Dũng</div>`,
        poster:"songs/10.png",
        lyrics:`k`,
        hitname: `Nàng Thơ`,
    },
    {
        id:'11',
        songname:`Lan Man
        <div class="subtitle">Ronboogz</div>`,
        poster:"songs/11.png",
        lyrics:`l`,
        hitname: `Lan Man`,
    },
    {
        id:'12',
        songname:`Những Lời Hứa Bỏ Quên
        <div class="subtitle">Vũ</div>`,
        poster:"songs/12.png",
        lyrics:`m`,
        hitname: `Những Lời Hứa Bỏ Quên`,
    },
    {
        id:'13',
        songname:`Bạn Đời
        <div class="subtitle">Karik ft GDucky</div>`,
        poster:"songs/13.png",
        lyrics:`m`,
        hitname: `Bạn Đời`,
    },
    {
        id:'14',
        songname:`Anh Là Ngoại Lệ Của Em
        <div class="subtitle">Phương Ly</div>`,
        poster:"songs/14.png",
        lyrics:`o`,
        hitname: `Anh Là Ngoại Lệ Của Em`,
    },
    {
        id:'15',
        songname:`Không Phải Gu
        <div class="subtitle">HIEUTHUHAI</div>`,
        poster:"songs/15.png",
        lyrics:`l`,
        hitname: `Không Phải Gu`,
    },
    {
        id:'16',
        songname:`Chịu Cách Mình Nói Thua
        <div class="subtitle">Rhyder, BAN, CoolKid</div>`,
        poster:"songs/16.png",
        lyrics:`g`,
        hitname: `Chịu Cách Mình Nói Thua`,
    },
    {
        id:'17',
        songname:`Từng Quen
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/17.png",
        lyrics:`t`,
        hitname: `Từng Quen`,
    },
    {
        id:'18',
        songname:`Anh Đã Ổn Hơn
        <div class="subtitle">RPT MCK</div>`,
        poster:"songs/18.png",
        lyrics:`u`,
        hitname: `Anh Đã Ổn Hơn`,
    },
    {
        id:'19',
        songname:`Có Một Nơi Như Thế
        <div class="subtitle">Phan Mạnh Quỳnh</div>`,
        poster:"songs/19.png",
        lyrics:`y`,
        hitname: `Có Một Nơi Như Thế`,
    },
    {
        id:'20',
        songname:`Nơi Này Có Anh
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/20.png",
        lyrics:`r`,
        hitname: `Nơi Này Có Anh`,
    },
    {
        id:'21',
        songname:`Lover
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/21.png",
        lyrics:`e`,
        hitname: `Lover`,
    },
    {
        id:'22',
        songname:`You and Me
        <div class="subtitle">Jennie</div>`,
        poster:"songs/22.png",
        lyrics:`w`,
        hitname: `You and Me`,
    },
    {
        id:'23',
        songname:`Enchanted
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/23.png",
        lyrics:`q`,
        hitname: `Enchanted`,
    },
    {
        id:'24',
        songname:`Anh Nhớ Em Nhiều VL
        <div class="subtitle">Khánh Bells</div>`,
        poster:"songs/24.png",
        lyrics:`z`,
        hitname: `Anh Nhớ Em Nhiều VL`,
    },
    {
        id:'25',
        songname:`Nademonaiya
        <div class="subtitle">RADWIMPS</div>`,
        poster:"songs/25.png",
        lyrics:`b`,
        hitname: `Nademonaiya`,
    },
    {
        id:'26',
        songname:`Sao Mình Chưa Nắm Tay Nhau
        <div class="subtitle">Yan Nguyễn ft Haky</div>`,
        poster:"songs/26.png",
        lyrics:`b`,
        hitname: `Sao Mình Chưa Nắm Tay Nhau`,
    },
    {
        id:'27',
        songname:`Em Ổn Không
        <div class="subtitle">Trịnh Thiên Ân, Viruss</div>`,
        poster:"songs/27.png",
        lyrics:`b`,
        hitname: `Em Ổn Không`,
    },
    {
        id:'28',
        songname:`Có Chắc Yêu Là Đây
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/28.png",
        lyrics:`b`,
        hitname: `Có Chắc Yêu Là Đây`,
    },
    {
        id:'29',
        songname:`Muộn Rồi Mà Sao Còn
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/29.png",
        lyrics:`b`,
        hitname: `Muộn Rồi Mà Sao Còn`,
    },
    {
        id:'30',
        songname:`Lạc  Trôi
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/30.png",
        lyrics:`b`,
        hitname: `Lạc Trôi`,
    },
    {
        id:'31',
        songname:`Hãy Trao Cho Anh
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/31.png",
        lyrics:`b`,
        hitname: `Hãy Trao Cho Anh`,
    },
    {
        id:'32',
        songname:`Thái Bình Mồ Hôi Rơi
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/32.png",
        lyrics:`b`,
        hitname: `Thái Bình Mồ Hôi Rơi`,
    },
    {
        id:'33',
        songname:`Chúng Ta Của Hiện Tại
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster:"songs/33.png",
        lyrics:`b`,
        hitname: `Chúng Ta Của Hiện Tại`,
    },
    {
        id:'34',
        songname:`Waiting For You
        <div class="subtitle">Mono</div>`,
        poster:"songs/34.png",
        lyrics:`b`,
        hitname: `Waiting For You`,
    },
    {
        id:'35',
        songname:`Quên Anh Đi
        <div class="subtitle">Mono</div>`,
        poster:"songs/35.png",
        lyrics:`b`,
        hitname: `Quên Anh Đi`,
    },
    {
        id:'36',
        songname:`Em Là
        <div class="subtitle">Mono</div>`,
        poster:"songs/36.png",
        lyrics:`b`,
        hitname: `Em Là`,
    },
    {
        id:'37',
        songname:`Young
        <div class="subtitle">Mono</div>`,
        poster:"songs/37.png",
        lyrics:`b`,
        hitname: `Young`,
    },
    {
        id:'38',
        songname:`Cười Lên
        <div class="subtitle">Mono</div>`,
        poster:"songs/38.png",
        lyrics:`b`,
        hitname: `Cười Lên`,
    },
    {
        id:'39',
        songname:`Anh Không Thể
        <div class="subtitle">Mono</div>`,
        poster:"songs/39.png",
        lyrics:`b`,
        hitname: `Anh Không Thể`,
    },
    {
        id:'40',
        songname:`Like Deja Vu
        <div class="subtitle">Minh Huy ft THIENVU & NAM JOYY</div>`,
        poster:"songs/40.png",
        lyrics:`b`,
        hitname: `Like Deja Vu`,
    },
    {
        id:'41',
        songname:`Without U
        <div class="subtitle">Minh Huy ft NAM JOYY</div>`,
        poster:"songs/41.png",
        lyrics:`b`,
        hitname: `Without U`,
    },
    {
        id:'42',
        songname:`Anh Đã Cố Gắng
        <div class="subtitle">Minh Huy ft O.LEW</div>`,
        poster:"songs/42.png",
        lyrics:`b`,
        hitname: `Anh Đã Cố Gắng`,
    },
    {
        id:'43',
        songname:`Chẳng Thể Quay Lại
        <div class="subtitle">Minh Huy ft Pjnboys</div>`,
        poster:"songs/43.png",
        lyrics:`b`,
        hitname: `Chẳng Thể Quay Lại`,
    },
    {
        id:'44',
        songname:`Hành Tinh Song Song
        <div class="subtitle">Minh Huy ft ARI</div>`,
        poster:"songs/44.png",
        lyrics:`b`,
        hitname: `Hành Tinh Song Song`,
    },
    {
        id:'45',
        songname:`If Alone
        <div class="subtitle">Minh Huy</div>`,
        poster:"songs/45.png",
        lyrics:`b`,
        hitname: `If Alone`,
    },
    {
        id:'46',
        songname:`Lạc Vào Trong Mơ
        <div class="subtitle">SimonC x Wuy</div>`,
        poster:"songs/46.png",
        lyrics:`b`,
        hitname: `Lạc Vào Trong Mơ`,
    },
    {
        id:'47',
        songname:`Là Anh
        <div class="subtitle">Mộng Nhiên</div>`,
        poster:"songs/47.png",
        lyrics:`b`,
        hitname: `Là Anh`,
    },
    {
        id:'48',
        songname:`id072019 | 3107
        <div class="subtitle">W/n ft 267</div>`,
        poster:"songs/48.png",
        lyrics:`b`,
        hitname: `id072019 | 3107`,
    },
    {
        id:'49',
        songname:`Ngồi Nhìn Em Khóc
        <div class="subtitle">Sáo</div>`,
        poster:"songs/49.png",
        lyrics:`b`,
        hitname: `Ngồi Nhìn Em Khóc`,
    },
    {
        id:'50',
        songname:`Vùng Ký Ức
        <div class="subtitle">Chillies</div>`,
        poster:"songs/50.png",
        lyrics:`b`,
        hitname: `Vùng Ký Ức`,
    },
    {
        id:'51',
        songname:`Everything Goes On
        <div class="subtitle">Porter Robinson</div>`,
        poster:"songs/51.png",
        lyrics:`b`,
        hitname: `Everything Goes On`,
    },
    {
        id:'52',
        songname:`Mộng Uyên Ương Hồ Điệp
        <div class="subtitle">Dương Edward</div>`,
        poster:"songs/52.png",
        lyrics:`b`,
        hitname: `Mộng Uyên Ương Hồ Điệp`,
    },
    {
        id:'53',
        songname:`Phố Không Em
        <div class="subtitle">Thái Đinh</div>`,
        poster:"songs/53.png",
        lyrics:`b`,
        hitname: `Phố Không Em`,
    },
    {
        id:'54',
        songname:`Bao Tiền Một Mớ Bình Yên?
        <div class="subtitle">14Casper & Bon</div>`,
        poster:"songs/54.png",
        lyrics:`b`,
        hitname: `Bao Tiền Một Mớ Bình Yên?`,
    },
    {
        id:'55',
        songname:`Tấm Lòng Son
        <div class="subtitle">H-Kray</div>`,
        poster:"songs/55.png",
        lyrics:`b`,
        hitname: `Tấm Lòng Son`,
    },
    {
        id:'56',
        songname:`3107 - 1
        <div class="subtitle">W/n ft Nâu, Duongg</div>`,
        poster:"songs/56.png",
        lyrics:`b`,
        hitname: `3107 - 1`,
    },
    {
        id:'57',
        songname:`Rung Động
        <div class="subtitle">Dương Edward x Vũ Khắc Anh</div>`,
        poster:"songs/57.png",
        lyrics:`b`,
        hitname: `Rung Động`,
    },
    {
        id:'58',
        songname:`Thích Em Hơi Nhiều
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/58.png",
        lyrics:`b`,
        hitname: `Thích Em Hơi Nhiều`,
    },
    {
        id:'59',
        songname:`Cầu Vĩnh Tuy
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/59.png",
        lyrics:`b`,
        hitname: `Cầu Vĩnh Tuy`,
    },
    {
        id:'60',
        songname:`Phóng Đổ Tim Em
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/60.png",
        lyrics:`b`,
        hitname: `Phóng Đổ Tim Em`,
    },
    {
        id:'61',
        songname:`Bé Ơi Từ Từ
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/61.png",
        lyrics:`b`,
        hitname: `Bé Ơi Từ Từ`,
    },
    {
        id:'62',
        songname:`Việt Kiều
        <div class="subtitle">Wren Evans</div>`,
        poster:"songs/62.png",
        lyrics:`b`,
        hitname: `Việt Kiều`,
    },
    {
        id:'63',
        songname:`Thanh Xuân
        <div class="subtitle">Da LAB</div>`,
        poster:"songs/63.png",
        lyrics:`b`,
        hitname: `Thanh Xuân`,
    },
    {
        id:'64',
        songname:`Chuyện Đôi Ta
        <div class="subtitle">Emcee L(Da LAB) ft Muội</div>`,
        poster:"songs/64.png",
        lyrics:`b`,
        hitname: `Chuyện Đôi Ta`,
    },
    {
        id:'65',
        songname:`Một Nhà
        <div class="subtitle">Da LAB</div>`,
        poster:"songs/65.png",
        lyrics:`b`,
        hitname: `Một Nhà`,
    },
    {
        id:'66',
        songname:`Nước Mắt Em Lau Bằng Tình Yêu Mới
        <div class="subtitle">Da LAB ft Tóc Tiên</div>`,
        poster:"songs/66.png",
        lyrics:`b`,
        hitname: `Nước Mắt Em Lau Bằng Tình Yêu Mới`,
    },
    {
        id:'67',
        songname:`Từ Ngày Em Đến
        <div class="subtitle">Da LAB</div>`,
        poster:"songs/67.png",
        lyrics:`b`,
        hitname: `Từ Ngày Em Đến`,
    },
    {
        id:'68',
        songname:`Gác Lại Âu Lo
        <div class="subtitle">Da LAB ft Miu Lê</div>`,
        poster:"songs/68.png",
        lyrics:`b`,
        hitname: `Gác Lại Âu Lo`,
    },
    {
        id:'69',
        songname:`Chạy Khỏi Thế Giới Này
        <div class="subtitle">Da LAB ft Phương Ly</div>`,
        poster:"songs/69.png",
        lyrics:`b`,
        hitname: `Chạy Khỏi Thế Giới Này`,
    },
    {
        id:'70',
        songname:`Happy For You
        <div class="subtitle">Lukas Graham ft Vũ</div>`,
        poster:"songs/70.png",
        lyrics:`b`,
        hitname: `Happy For You`,
    },
    {
        id:'71',
        songname:`Lạ Lùng
        <div class="subtitle">Vũ</div>`,
        poster:"songs/71.png",
        lyrics:`b`,
        hitname: `Lạ Lùng`,
    },
    {
        id:'72',
        songname:`Anh Nhớ Ra
        <div class="subtitle">Vũ (ft Trang)</div>`,
        poster:"songs/72.png",
        lyrics:`b`,
        hitname: `Anh Nhớ Ra`,
    },
    {
        id:'73',
        songname:`Vì Anh Đâu Có Biết
        <div class="subtitle">Madihu ft Vũ</div>`,
        poster:"songs/73.png",
        lyrics:`b`,
        hitname: `Vì Anh Đâu Có Biết`,
    },
    {
        id:'74',
        songname:`Bước Qua Mùa Cô Đơn
        <div class="subtitle">Vũ</div>`,
        poster:"songs/74.png",
        lyrics:`b`,
        hitname: `Bước Qua Mùa Cô Đơn`,
    },
    {
        id:'75',
        songname:`Đông Kiếm Em
        <div class="subtitle">Vũ</div>`,
        poster:"songs/75.png",
        lyrics:`b`,
        hitname: `Đông Kiếm Em`,
    },
    {
        id:'76',
        songname:`Ngày Mai Em Đi
        <div class="subtitle">Touliver x Lê Hiếu x Soobin Hoàng Sơn</div>`,
        poster:"songs/76.png",
        lyrics:`b`,
        hitname: `Ngày Mai Em Đi`,
    },
    {
        id:'77',
        songname:`Vinh Quang Đang Chờ Ta
        <div class="subtitle">Touliver x Rhymastic x Soobin Hoàng Sơn</div>`,
        poster:"songs/77.png",
        lyrics:`b`,
        hitname: `Vinh Quang Đang Chờ Ta`,
    },
    {
        id:'78',
        songname:`They Said
        <div class="subtitle">Touliver x Binz</div>`,
        poster:"songs/78.png",
        lyrics:`b`,
        hitname: `They Said`,
    },
    {
        id:'79',
        songname:`Em Không Thể
        <div class="subtitle">Touliver x Tiên Tiên</div>`,
        poster:"songs/79.png",
        lyrics:`b`,
        hitname: `Em Không Thể`,
    },
    {
        id:'80',
        songname:`Forget About Her
        <div class="subtitle">Touliver x Justatee</div>`,
        poster:"songs/80.png",
        lyrics:`b`,
        hitname: `Forget About Her`,
    },
    {
        id:'81',
        songname:`Luật Rừng
        <div class="subtitle">Binz x Rhymastic x 16Typh x Gonzo x Tinle</div>`,
        poster:"songs/81.png",
        lyrics:`b`,
        hitname: `Luật Rừng`,
    },
    {
        id:'82',
        songname:`Bigcityboi
        <div class="subtitle">Touliver x Binz</div>`,
        poster:"songs/82.png",
        lyrics:`b`,
        hitname: `Bigcityboi`,
    },
    {
        id:'83',
        songname:`tinhiulagi?
        <div class="subtitle">RPT Orijinn x bachyyy</div>`,
        poster:"songs/83.png",
        lyrics:`b`,
        hitname: `tinhiulagi?`,
    },
    {
        id:'84',
        songname:`Xinloivacamon
        <div class="subtitle">RPT Orijinn</div>`,
        poster:"songs/84.png",
        lyrics:`b`,
        hitname: `Xinloivacamon`,
    },
    {
        id:'85',
        songname:`Thủ Đô Cypher
        <div class="subtitle">RPT Orijinn, LOW G, RZMas, RPT MCK</div>`,
        poster:"songs/85.png",
        lyrics:`b`,
        hitname: `Thủ Đô Cypher`,
    },
    {
        id:'86',
        songname:`Rap Chậm Thôi
        <div class="subtitle">RPT MCK x RPT Orijinn ft. RZ Ma$</div>`,
        poster:"songs/86.png",
        lyrics:`b`,
        hitname: `Rap Chậm Thôi`,
    },
    {
        id:'87',
        songname:`CITY9
        <div class="subtitle">RPT Orijinn x Simple DEESLOWZ x RPT Groovie x Nguyễn Tune</div>`,
        poster:"songs/87.png",
        lyrics:`b`,
        hitname: `CITY9`,
    },
    {
        id:'88',
        songname:`Ối Giời Ơi
        <div class="subtitle">RPT Orijinn</div>`,
        poster:"songs/88.png",
        lyrics:`b`,
        hitname: `Ối Giời Ơi`,
    },
    {
        id:'89',
        songname:`Còn Yêu, Đâu Ai Rời Đi
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/89.png",
        lyrics:`b`,
        hitname: `Còn Yêu, Đâu Ai Rời Đi`,
    },
    {
        id:'90',
        songname:`Hết Thương Cạn Nhớ
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/90.png",
        lyrics:`b`,
        hitname: `Hết Thương Cạn Nhớ`,
    },
    {
        id:'91',
        songname:`Hơn Cả Yêu
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/91.png",
        lyrics:`b`,
        hitname: `Hơn Cả Yêu`,
    },
    {
        id:'92',
        songname:`Ta Còn Yêu Nhau
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/92.png",
        lyrics:`b`,
        hitname: `Ta Còn Yêu Nhau`,
    },
    {
        id:'93',
        songname:`Ngày Đầu Tiên
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/93.png",
        lyrics:`b`,
        hitname: `Ngày Đầu Tiên`,
    },
    {
        id:'94',
        songname:`Em Đồng Ý 
        <div class="subtitle">Đức Phúc x 911 x Khắc Hưng</div>`,
        poster:"songs/94.png",
        lyrics:`b`,
        hitname: `Em Đồng Ý `,
    },
    {
        id:'95',
        songname:`Yêu Được Không
        <div class="subtitle">Đức Phúc</div>`,
        poster:"songs/95.png",
        lyrics:`b`,
        hitname: `Yêu Được Không`,
    },
    {
        id:'96',
        songname:`Ngủ Một Mình
        <div class="subtitle">HIEUTHUHAI ft Negav</div>`,
        poster:"songs/96.png",
        lyrics:`b`,
        hitname: `Ngủ Một Mình`,
    },
    {
        id:'97',
        songname:`Không Thể Say
        <div class="subtitle">HIEUTHUHAI</div>`,
        poster:"songs/97.png",
        lyrics:`b`,
        hitname: `Không Thể Say`,
    },
    {
        id:'98',
        songname:`Cua
        <div class="subtitle">HIEUTHUHAI & Manbo</div>`,
        poster:"songs/98.png",
        lyrics:`b`,
        hitname: `Cua`,
    },
    {
        id:'99',
        songname:`Chơi
        <div class="subtitle">HIEUTHUHAI & Manbo</div>`,
        poster:"songs/99.png",
        lyrics:`b`,
        hitname: `Chơi`,
    },
    {
        id:'100',
        songname:`Nghe Như Tình Yêu
        <div class="subtitle">HIEUTHUHAI</div>`,
        poster:"songs/100.png",
        lyrics:`b`,
        hitname: `Nghe Như Tình Yêu`,
    },
    {
        id:'101',
        songname:`Vệ Tinh
        <div class="subtitle">HIEUTHUHAI ft Hoàng Tôn</div>`,
        poster:"songs/101.png",
        lyrics:`b`,
        hitname: `Vệ Tinh`,
    },
    {
        id:'102',
        songname:`Bài Này Chill Phết
        <div class="subtitle">Đen ft Min</div>`,
        poster:"songs/102.png",
        lyrics:`b`,
        hitname: `Bài Này Chill Phết`,
    },
    {
        id:'103',
        songname:`Đi Về Nhà
        <div class="subtitle">Đen x JustaTee</div>`,
        poster:"songs/103.png",
        lyrics:`b`,
        hitname: `Đi Về Nhà`,
    },
    {
        id:'104',
        songname:`Lối Nhỏ
        <div class="subtitle">Đen ft Phương Anh Đào</div>`,
        poster:"songs/104.png",
        lyrics:`b`,
        hitname: `Lối Nhỏ`,
    },
    {
        id:'105',
        songname:`Mười Năm
        <div class="subtitle">Đen ft Ngọc Linh</div>`,
        poster:"songs/105.png",
        lyrics:`b`,
        hitname: `Mười Năm`,
    },
    {
        id:'106',
        songname:`Một Triệu Like
        <div class="subtitle">Đen ft Thành Đồng</div>`,
        poster:"songs/106.png",
        lyrics:`b`,
        hitname: `Một Triệu Like`,
    },
    {
        id:'107',
        songname:`Mang Tiền Về Cho Mẹ
        <div class="subtitle">Đen ft Nguyên Thảo</div>`,
        poster:"songs/107.png",
        lyrics:`b`,
        hitname: `Mang Tiền Về Cho Mẹ`,
    },
    {
        id:'108',
        songname:`Hai Triệu Năm
        <div class="subtitle">Đen ft Biên</div>`,
        poster:"songs/108.png",
        lyrics:`b`,
        hitname: `Hai Triệu Năm`,
    },
    {
        id:'109',
        songname:`Đoạn Kết Mới
        <div class="subtitle">Hoàng Dũng</div>`,
        poster:"songs/109.png",
        lyrics:`b`,
        hitname: `Đoạn Kết Mới`,
    },
    {
        id:'110',
        songname:`Đôi Mươi
        <div class="subtitle">Hoàng Dũng</div>`,
        poster:"songs/110.png",
        lyrics:`b`,
        hitname: `Đôi Mươi`,
    },
    {
        id:'111',
        songname:`Thói Quen
        <div class="subtitle">Hoàng Dũng, GDucky, Màu Nước Band</div>`,
        poster:"songs/111.png",
        lyrics:`b`,
        hitname: `Thói Quen`,
    },
    {
        id:'112',
        songname:`Vì Anh Vẫn
        <div class="subtitle">Hoàng Dũng</div>`,
        poster:"songs/112.png",
        lyrics:`b`,
        hitname: `Vì Anh Vẫn`,
    },
    {
        id:'113',
        songname:`Nửa Thập Kỷ
        <div class="subtitle">Hoàng Dũng, Màu Nước Band</div>`,
        poster:"songs/113.png",
        lyrics:`b`,
        hitname: `Nửa Thập Kỷ`,
    },
    {
        id:'114',
        songname:`Gói Nắng Mang Về
        <div class="subtitle">Hoàng Dũng</div>`,
        poster:"songs/114.png",
        lyrics:`b`,
        hitname: `Gói Nắng Mang Về`,
    },
    {
        id:'115',
        songname:`Chìm Sâu
        <div class="subtitle">RPT MCK ft Trung Trần</div>`,
        poster:"songs/115.png",
        lyrics:`b`,
        hitname: `Chìm Sâu`,
    },
    {
        id:'116',
        songname:`Tại Vì Sao
        <div class="subtitle">RPT MCK</div>`,
        poster:"songs/116.png",
        lyrics:`b`,
        hitname: `Tại Vì Sao`,
    },
    {
        id:'117',
        songname:`Thôi Em Đừng Đi
        <div class="subtitle">RPT MCK</div>`,
        poster:"songs/117.png",
        lyrics:`b`,
        hitname: `Thôi Em Đừng Đi`,
    },
    {
        id:'118',
        songname:`Va Vào Giai Điệu Này
        <div class="subtitle">RPT MCK</div>`,
        poster:"songs/118.png",
        lyrics:`b`,
        hitname: `Va Vào Giai Điệu Này`,
    },
    {
        id:'119',
        songname:`Ai Mới Là Kẻ Xấu Xa
        <div class="subtitle">RPT MCK</div>`,
        poster:"songs/119.png",
        lyrics:`b`,
        hitname: `Ai Mới Là Kẻ Xấu Xa`,
    },
    {
        id:'120',
        songname:`Chỉ Một Đêm Nữa Thôi
        <div class="subtitle">RPT MCK ft tlinh</div>`,
        poster:"songs/120.png",
        lyrics:`b`,
        hitname: `Chỉ Một Đêm Nữa Thôi`,
    },
    {
        id:'121',
        songname:`Đường Tôi Chở Em Về
        <div class="subtitle">buitruonglinh</div>`,
        poster:"songs/121.png",
        lyrics:`b`,
        hitname: `Đường Tôi Chở Em Về`,
    },
    {
        id:'122',
        songname:`Dù Cho Mai Về Sau
        <div class="subtitle">buitruonglinh</div>`,
        poster:"songs/122.png",
        lyrics:`b`,
        hitname: `Dù Cho Mai Về Sau`,
    },
    {
        id:'123',
        songname:`Em Không Khóc
        <div class="subtitle">buitruonglinh ft vuphungtien</div>`,
        poster:"songs/123.png",
        lyrics:`b`,
        hitname: `Em Không Khóc`,
    },
    {
        id:'124',
        songname:`Yêu Người Có Ước Mơ
        <div class="subtitle">buitruonglinh</div>`,
        poster:"songs/124.png",
        lyrics:`b`,
        hitname: `Yêu Người Có Ước Mơ`,
    },
    {
        id:'125',
        songname:`Em À
        <div class="subtitle">buitruonglinh</div>`,
        poster:"songs/125.png",
        lyrics:`b`,
        hitname: `Em À`,
    },
    {
        id:'126',
        songname:`Dại
        <div class="subtitle">buitruonglinh ft Tuyên</div>`,
        poster:"songs/126.png",
        lyrics:`b`,
        hitname: `Dại`,
    },
    {
        id:'127',
        songname:`Một Mình Ta
        <div class="subtitle">buitruonglinh</div>`,
        poster:"songs/127.png",
        lyrics:`b`,
        hitname: `Một Mình Ta`,
    },
    {
        id:'128',
        songname:`Look What You Made Me Do
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/128.png",
        lyrics:`b`,
        hitname: `Look What You Made Me Do`,
    },
    {
        id:'129',
        songname:`Wildest Dreams
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/129.png",
        lyrics:`b`,
        hitname: `Wildest Dreams`,
    },
    {
        id:'130',
        songname:`Daylight
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/130.png",
        lyrics:`b`,
        hitname: `Daylight`,
    },
    {
        id:'131',
        songname:`Love Story
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/131.png",
        lyrics:`b`,
        hitname: `Love Story`,
    },
    {
        id:'132',
        songname:`Midnight Rain
        <div class="subtitle">Taylor Swift</div>`,
        poster:"songs/132.png",
        lyrics:`b`,
        hitname: `Midnight Rain`,
    },
]


function readTxtFileAsync(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .catch(error => {
            console.error(error);
            return null;
        });
}

// Đường dẫn đến thư mục chứa các file lyric
const lyricFolderPath = 'lyrics/';

// Cập nhật nội dung lyrics cho từng bài hát
Promise.all(songs.map(song => {
    const lyricFilePath = `${lyricFolderPath}${song.id}.txt`;

    return readTxtFileAsync(lyricFilePath)
        .then(lyricsContent => {
            song.lyrics = lyricsContent || ''; // Nếu không có nội dung, giữ nguyên giá trị trống
        });
})).then(() => {
    // Khi tất cả các lyric đã được lấy, in ra mảng songs
    console.log(songs);
});

Array.from(document.getElementsByClassName('songItem')).forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML= songs[i].songname;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',(e)=>{

    if(music.paused || music.currentTime<=0){
        music.play();
        
        
        // index = e.target.id;
        // makeAllPlays();
        // e.target.classList.remove('bi-play-circle-fill');
        // e.target.classList.add('bi-pause-circle-fill');


        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
        makeAllPlays();
        makeAllPlays2();
        // makeAllBackgrounds();
    }

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
           
        })
}
const makeAllBackgrounds = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        
          element.style.background = "rgb(105,105,170,0)"
           
        })
    }
let index = 0;
let index1 = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `music/${index}.mp3`;
        poster_master_play.src = `songs/${index}.png`;

        music.play();

        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        // music.addEventListener('ended',()=>{
        //     masterPlay.classList.add('bi-play-fill');
        //     masterPlay.classList.remove('bi-pause-fill');
        //     wave.classList.remove('active2');
        //     e.target.classList.add('bi-play-circle-fill');
        //     e.target.classList.remove('bi-pause-circle-fill');
        // })
        makeAllBackgrounds();
        lenDinh();
        stopScrolling();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
        
    })

})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seekbar = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if(sec<10){
        sec = `0${sec}`;
    }

    currentEnd.innerText = `${min}:${sec}`;
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})
music.addEventListener('ended',()=>{
    // masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `songs/${index}.png`;
    music.play();

    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele=>{
        let {songname} = ele;
        title.innerHTML = songname;
        
    })
    
    song_title.forEach(ele=>{
        let {lyrics} = ele;
        lyrical.innerHTML = lyrics;
        let {songname} = ele;
        title_album.innerHTML = songname;
        poster_album.src = `songs/${ele.id}.png`;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    
    lenDinh();
    stopScrolling();
    
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>0 ){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click',()=>{
    index -=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `music/${index}.mp3`;
        poster_master_play.src = `songs/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        makeAllPlays();
        lenDinh();
        stopScrolling();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
})


next.addEventListener('click',()=>{
    index -= 0;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `music/${index}.mp3`;
        poster_master_play.src = `songs/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        makeAllPlays();
        lenDinh();
        stopScrolling();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
})
right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=330;
})
right_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=330;
})


let btnplay = document.getElementById('btnplay');

btnplay.addEventListener('click',()=>{
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index = 23;
    
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `songs/${index}.png`;
    music.play();
    makeAllBackgrounds();
    lenDinh();
    stopScrolling();

    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele=>{
        let {songname} = ele;
        title.innerHTML = songname;
    })})


let lyrical = document.getElementById('lyrical');
let poster_album = document.getElementById('poster_album');
let title_album = document.getElementById('title_album');  


    poster_master_play.addEventListener('click',()=>{
        let songLyricsBlock = document.getElementById('songLyricsBlock');
            songLyricsBlock.style.bottom = '0';
            // index1 = index;
            // songLyricsBlock.style.display = 'block';
            let song_title = songs.filter((ele)=>{
                return ele.id == index;
            })
            song_title.forEach(ele=>{
                let {lyrics} = ele;
                lyrical.innerHTML = lyrics;
                let {songname} = ele;
                title_album.innerHTML = songname;
                poster_album.src = `songs/${ele.id}.png`;
            })

            
        })

    let close_lyrics = document.getElementById('close_btn');
    close_lyrics.addEventListener('click',()=>{
        let songLyricsBlock = document.getElementById('songLyricsBlock');
        songLyricsBlock.style.bottom = '-2000';
    })

    
    const lyricsBlock = document.getElementById('lyricsBlock');
    let scrollInterval;

    function scrollLyricsBlock() {
        const scrollSpeed = 2; // Tốc độ cuộn
        lyricsBlock.scrollTop += scrollSpeed;
    }

    function startScrolling() {
        // Đặt khoảng thời gian giữa các lần cuộn (đơn vị: mili giây)
        const scrollIntervalTime = 100; 

        // Bắt đầu cuộn tự động và lặp lại sau mỗi khoảng thời gian
        scrollInterval = setInterval(scrollLyricsBlock, scrollIntervalTime);
    }
    function stopScrolling() {
        // Hủy bỏ định kỳ cuộn nếu đang tồn tại
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null; // Đặt lại biến để đảm bảo không có định kỳ đang chạy
        }
    }
    function lenDinh(){
        lyricsBlock.scrollTop = 0;;
    }
lyricsBlock.addEventListener('click',()=>{
    startScrolling();
})
lyricsBlock.addEventListener('mousedown',()=>{
   stopScrolling() ;
})

let next_l = document.getElementById('next_l');
let master_play_l = document.getElementById('master_play_l');
let back_l= document.getElementById('back_l');

back_l.addEventListener('click',()=>{
    index -=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `music/${index}.mp3`;
        poster_master_play.src = `songs/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        song_title.forEach(ele=>{
            let {lyrics} = ele;
            lyrical.innerHTML = lyrics;
            let {songname} = ele;
            title_album.innerHTML = songname;
            poster_album.src = `songs/${ele.id}.png`;
        })
        makeAllPlays();
        lenDinh();
        stopScrolling();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
})


next_l.addEventListener('click',()=>{
    index -= 0;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `music/${index}.mp3`;
        poster_master_play.src = `songs/${index}.png`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        song_title.forEach(ele=>{
            let {lyrics} = ele;
            lyrical.innerHTML = lyrics;
            let {songname} = ele;
            title_album.innerHTML = songname;
            poster_album.src = `songs/${ele.id}.png`;
        })
        makeAllPlays();
        lenDinh();
        stopScrolling();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
})

master_play_l.addEventListener('click',(e)=>{

    if(music.paused || music.currentTime<=0){
        music.play();
        
        startScrolling();
        // index = e.target.id;
        // makeAllPlays();
        // e.target.classList.remove('bi-play-circle-fill');
        // e.target.classList.add('bi-pause-circle-fill');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');


        master_play_l.classList.remove('bi-play-circle-fill');
        master_play_l.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
    }else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        master_play_l.classList.add('bi-play-circle-fill');
        master_play_l.classList.remove('bi-pause-circle-fill');
        wave.classList.remove('active2');
        makeAllPlays();
        stopScrolling();
        // makeAllBackgrounds();
        makeAllPlays2();
    }

})

let profile_avatar = document.getElementById('profile_avatar');
let profile_name = document.getElementById('profile_name');
let artist_profile = document.getElementById('artist_profile');
Array.from(document.getElementsByClassName('follow')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        index1 = e.target.id;
        artist_profile.style.top = '0';
        profile_avatar.src = `artists/${index1}.jpg`;
        let{name}=artists[index1-1];
        profile_name.innerHTML = name;
        // Array.from(document.getElementsByClassName('artist_hit')).forEach((element,j) => {
        //     element.getElementsByTagName('img')[0].src = songs[artists[index1].hit[j]].poster;
            
        // })
        makeAllPlays2();
        Array.from(document.getElementsByClassName('artist_hit')).forEach((element) => {
            // Lấy ra danh sách các elements img trong từng element có class 'artist_hit'
            let imgElements = element.getElementsByTagName('img');
            let name_hit = element.getElementsByTagName('h5');
            let play_hit = element.getElementsByTagName('i');
            // Lặp qua mảng hit của nghệ sĩ tương ứng
            artists[parseInt(index1)-1].hit.forEach((hitIndex, j) => {
                // Thiết lập nguồn ảnh cho từng imgElement
                
                imgElements[j].src = songs[hitIndex-1].poster;
                name_hit[j].innerHTML = songs[hitIndex-1].hitname;
                play_hit[j].id = hitIndex;
                

            });
        });
          
    })

})
let close_profile = document.getElementById('close_profile');
close_profile.addEventListener('click',()=>{
    artist_profile.style.top = '-2000';
    love_button.style.color = '#fff';
     love_button.style.fontSize = '35px';
})
let btnfollow = document.getElementById('btnfollow');
btnfollow.addEventListener('click',()=>{
    artist_profile.style.top = '0';
    index1 = 17;
    profile_avatar.src = `artists/${index1}.jpg`;
     let{name}=artists[index1-1];
    profile_name.innerHTML = name;

    Array.from(document.getElementsByClassName('artist_hit')).forEach((element) => {
        // Lấy ra danh sách các elements img trong từng element có class 'artist_hit'
        let imgElements = element.getElementsByTagName('img');
        let name_hit = element.getElementsByTagName('h5');
        let play_hit = element.getElementsByTagName('i');
        // Lặp qua mảng hit của nghệ sĩ tương ứng
        artists[parseInt(index1)-1].hit.forEach((hitIndex, j) => {
            // Thiết lập nguồn ảnh cho từng imgElement
            
            imgElements[j].src = songs[hitIndex-1].poster;
            name_hit[j].innerHTML = songs[hitIndex-1].hitname;
            play_hit[j].id = hitIndex;
            

        });
    });
})
const artists =[
    {
        id:'1',
        name:`Sơn Tùng M-TP`,
        image:`artists/1.jpg`,
        hit:[20,28,29,30,31,32,33],
    },
    {
        id:'2',
        name:`Mono`,
        image:`artists/2.jpg`,
        hit:[7,34,35,36,37,38,39],
    },
    {
        id:'3',
        name:`Minh Huy`,
        image:`artists/3.jpg`,
        hit:[1,40,41,42,43,44,45],
    },
    {
        id:'4',
        name:`Kun Lâm`,
        image:`artists/4.jpg`,
        hit:[5,46,47,48,49,50,51],
    },
    {
        id:'5',
        name:`Khánh Bells`,
        image:`artists/5.jpg`,
        hit:[24,52,53,54,55,56,57],
    },
    {
        id:'6',
        name:`Wren Evans`,
        image:`artists/6.jpg`,
        hit:[17,2,58,59,60,61,62],
    },
    {
        id:'7',
        name:`Da Lab`,
        image:`artists/7.jpg`,
        hit:[63,64,65,66,67,68,69],
    },
    {
        id:'8',
        name:`Vũ`,
        image:`artists/8.jpg`,
        hit:[12,70,71,72,73,74,75],
    },
    {
        id:'9',
        name:`SpaceSpeakers`,
        image:`artists/9.jpg`,
        hit:[76,77,78,79,80,81,82],
    },
    {
        id:'10',
        name:`RPT-Orijinn`,
        image:`artists/10.jpg`,
        hit:[4,83,84,85,86,87,88],
    },
    {
        id:'11',
        name:`Đức Phúc`,
        image:`artists/11.jpg`,
        hit:[89,90,91,92,93,94,95],
    },
    {
        id:'12',
        name:`HIEUTHUHAI`,
        image:`artists/12.jpg`,
        hit:[15,96,97,98,99,100,101],
    },
    {
        id:'13',
        name:`Đen Vâu`,
        image:`artists/13.jpg`,
        hit:[102,103,104,105,106,107,108],
    },
    {
        id:'14',
        name:`Hoàng Dũng`,
        image:`artists/14.jpg`,
        hit:[10,109,110,111,112,113,114],
    },
    {
        id:'15',
        name:`MCK`,
        image:`artists/15.jpg`,
        hit:[18,115,116,117,118,119,120],
    },
    {
        id:'16',
        name:`buitruonglinh`,
        image:`artists/16.jpg`,
        hit:[121,122,123,124,125,126,127],
    },
    {
        id:'17',
        name:`Taylor Swift`,
        image:`artists/17.jpg`,
        hit:[21,23,128,129,130,131,132],
    },


]
Array.from(document.getElementsByClassName('artist_list')).forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = artists[i].image;
    element.getElementsByTagName('img')[0].title= artists[i].name;
})
  
let love_button = document.getElementById('love_button');
love_button.addEventListener('click',()=>{
    if(love_button.style.fontSize == '35px'){
    love_button.style.color = 'red';
    love_button.style.fontSize = '40px';}
    else{
        love_button.style.color = '#fff';
        love_button.style.fontSize = '35px';
    }
})
let index2 = 0;
Array.from(document.getElementsByClassName('HitPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        Array.from(document.getElementsByClassName('artist_hit')).forEach((element) => {
           
            let play_hit = element.getElementsByTagName('i');
            // Lặp qua mảng hit của nghệ sĩ tương ứng
            artists[parseInt(index1)-1].hit.forEach((hitIndex, j) => {
                // Thiết lập nguồn ảnh cho từng imgElement
                
               
                play_hit[j].id = hitIndex;
                music.src = `music/${index}.mp3`;
            poster_master_play.src = `songs/${index}.png`;
            })
            music.play();})
            makeAllPlays();
            makeAllBackgrounds();
            makeAllPlays2();
            e.target.classList.remove('bi-play-circle-fill');
            e.target.classList.add('bi-pause-circle-fill');
        

        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele=>{
            let {songname} = ele;
            title.innerHTML = songname;
        })
        song_title.forEach(ele=>{
            let {lyrics} = ele;
            lyrical.innerHTML = lyrics;
            let {songname} = ele;
            title_album.innerHTML = songname;
            poster_album.src = `songs/${ele.id}.png`;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        
        
        lenDinh();
        stopScrolling();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)"
        
    })

})
const makeAllPlays2 = ()=>{
    Array.from(document.getElementsByClassName('HitPlay')).forEach((element) => {
        
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
           
        })
}
let logo = document.getElementById('logo');
logo.addEventListener('click',()=>{
    location.reload();
    
})
logo.addEventListener('dblclick',()=>{
    const githubLink = 'https://github.com/KunLam16';
    window.open(githubLink, '_blank');})

    

    
    