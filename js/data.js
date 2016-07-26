angular.module('fifApp.data', [])

// Could have used an angular resource here that returns a JSON array for on all factories, but since we don't have a server running an API, we hardcode for now

  // data
.factory('Speakers', function() {
  
  var speakers = [
  
  	{ id: 0, name: 'Professor EH Guti', avatar: 'img/speakers/eh-thumb.jpg', image: 'img/speakers/eh-photo.jpg', profile: "Archbishop Dr E.H Guti, a humble servant of God with unmistakable marks of Apostleship upon him.\n\n Prof E.H Guti holds the following qualifications: BA;M.A;D.D;D.Min & Phd in religion. Founder of Zaoga Forward in Faith who has ministered in for 65 years and has spoken in many different countries, colleges and universities. He has founded 9 bible schools, 3 in Zimbabwe, 2 in Mozambique, 1 in Zambia, 1 in Ghana, 1 in UK, 1 in Australia and several evening bible schools. He has founded various ministries which include Go Quickly, FIF Children's home, Africa Christian Business Fellowship, Forward in Faith College and High School Ministry, Blind and Sighted Integration ministry just to mention a few, a seasoned counselor to a class of people and nationalities.\n\nHe is a man of love, soul winner, author, great intercessor with a fatherly love for the people." },
	
	{ id: 1, name: 'Apostle Dr Eunor Guti', avatar: 'img/speakers/eunor-thumb.jpg', image: 'img/speakers/guti-photo.jpg', profile: "President for Gracious Women, Ordained Pastor, First woman marriage officer in Zimbabwe, B.A, DD in Ministry from Friends University, State Registered Nurse with diplomas in Business Administration, Bookkeeping, Dressmaking and Designing and Christian radio and TV.\n\nShe is a director of women’s ministry in ZAOGA F.I.F. She says “women are highly favoured by God.” Rise up and take your position, not above the husbands head, not under his feet, but side by side next to his heart with a sweet spirit.\n\nShe believes in being outstanding for God in the things of God before it is 5 o’clock in the afternoon, time to knock off from office which is being dismissed from his earthly body. She travels together with her husband ministering. A mother and an inspiration in the ministry.\n\nShe motivated many groups of intercession and spoken in amny women conferences and leadership seminars in the U.S.A and the world over. In 2004 she received Esther’s Leadership Award from third world leaders association presented to her by honourable Prime Minister of Bahamas. Headed the Good News Deliverance Explo 2005 in 25 stadiums preaching the Word of God with prophetic healing ministry, with signs and wonders following. She is the visionary of “Todays Woman international conference” which was launched in 2007." },
	
	{ id: 2, name: 'Bishop Mavis Ngorima', avatar: 'img/speakers/default-thumb.jpg', image: 'img/speakers/default-photo.jpg', profile: 'AMFCC post graduate, a seasoned speaker of the word of God. She has preached throughout Zimbabwe and in countries such as United Kingdom, USA, South Africa, Botswana, Mozambique and Zambia. She is a mother of six children and 11 grandchildren. Bishop Mavis has been serving in ZAOGA F.I.F for over 49 years and still believes and she shares on the unchanging power of the love of God. She gave her life to Christ as a young girl and have great passion for the work of God.' },
	
	{ id: 3, name: 'Apostle Christopher Kapandura', avatar: 'img/speakers/kapandura-thumb.jpg', image: 'img/speakers/kapandura-photo.jpg', profile: 'Amfcc post graduate, has been in the ministry for over 29years.\n\nHis passion is to develop poor people and underprivileged and has a burden to develop remote areas to have state of the art fellowship centres. An unwavering man of truth who call a spade a spade. A former Overseer of Mash Central, Mberengwa, Gutu, Harare East, Kwekwe Golden Province. Currently Overseers of Norton Wealth Province. Populary known as The Commander.\n\nHe is a holder of B.A in Theology, Bachelor of Arts honorary in Ministry - with (AQC) Devine Grace Institute.' },
	
    { id: 4, name: 'Pastor Calisto& Sikhanyisiwe Manyati', avatar: 'img/speakers/manyati-thumb.jpg', image: 'img/speakers/manyati-photo.jpg', profile: 'Pastor Cals was called from Holland into AMFCC Harare.Holds a certificate in. Computer Science.Deploma in Christian Leadership,Deploma in Church Administration and Chaplainncy Diploma in information Technology Deploma in international Communocations,Deplomacy&NGO Stiudies.Holds a BBS&MA Theology and os stidying for a BA Intl Relations&Deploma in Chrostian Leadership and BBS degree.They are mission and members of Good News Deliverence EXPLO' },	
	
	{ id: 5, name: 'Pastors T&B Mukamuri', avatar: 'img/speakers/mukamuri-thumb.jpg', image: 'img/speakers/mukamuri-photo.jpg', profile: 'Pastor Tawanda and Bianca are currenlty pastors in ACT. Pastor Tawanda holds a BA (Theology) from PACC, BA (Biblical Studies) FICU, and Masters of Church Administration from FICU, AMFCC diploma and has studied Stores Management and Stock Control.\n\n Pastor Tawanda has a passion for the youth ministry and has served in the youth ministry for many years. Pastor Bianca holds a BA Psychology from UWS and has completed 2nd year Bachelor of Law with CDU and is an AMFCC (Australia) gradaute. Pastor Bianca is a product of Youth ministry  in Australia and she once held the position of Girls Chairlady and was a vibrant member of the youth. Pastor Tawanda and Bianca have been happily married of six years and God has blessed them with two lovely children Alicia and Shane. they are currently the Australia National Youth Directors' },
	
    { id: 6, name: 'Pastor Godfrey Chipoya', avatar: 'img/speakers/chipoya-thumb.jpg', image: 'img/speakers/chipoya-photo.jpg', profile: 'Pastor Godfrey Chipoya is an anfcc post graduate & Vineyard Harvest Theological School,has saved in many portfolios in the youth ministry, together with his wife Joyce have preached in many seminars,conferences within & outside the country.The grace of God has been evident in his life,what you value the people you lead will also value you.They are currently serving as district pastors for kabwata autonomous.' },
    
	
    { id: 7, name: 'Br Paudino Antonio', avatar: 'img/speakers/paudino-thumb.jpg', image: 'img/speakers/paudino-photo.jpg', profile: 'Br Paudino Antonio holds a degree in Education Planning, Administration and Management. Have been speaker at Mozambique leadership Deeper Life conference, Youth Conference, and Great Beira events.\n\nHave been district boys fellowship chairman and currently is the Sofala Zone Chairman since end of 2010. A powerful speaker of the Word.' },
	
    { id: 8, name: 'Elder Ndanga', avatar: 'img/speakers/default-thumb.jpg', image: 'img/speakers/default-photo.jpg', profile: '' },
	
    { id: 9, name: 'Pastor A Kaguramamba', avatar: 'img/speakers/default-thumb.jpg', image: 'img/speakers/default-photo.jpg', profile: '' },
	
    { id: 10, name: 'Sister Precious', avatar: 'img/speakers/default-thumb.jpg', image: 'img/speakers/default-photo.jpg', profile: '' }
  ];

  return {
    all: function() {
      return speakers;
    },
    get: function(speakerId) {
      // Simple index lookup
      return speakers[speakerId];
    }
  }
})

.factory('Programs', function() {
  // Might use a resource here that returns a JSON array

  // data
  var programs = {'thurs': [
  	{activity: 'Registration', by: '', time: '08:30hrs-18:00hrs' },
    {activity: 'TBA', by: '', time: '19:00hrs-21:00hrs' }
  ],
  'fri': [
  	{activity: 'BREAKFAST', by: '#', time: '06:00hrs-07:45hrs'},
    {activity: 'Youth speaker/Pastor Chipoya', by: '#/app/speakers/3', time: '08:00hrs-08:30hrs' },
    {activity: 'Br Poudino Antonio', by: '#/app/speakers/6', time: '08:30hrs-09:30hrs' },
    {activity: 'TBA', by: '#', time: '09:30hrs-10:30hrs' },
	{activity: 'MORNING BREAK', by: '#', time: '10:30hrs-11:00hrs'},
    {activity: 'Bishop Ngorima', by: '#/app/speakers/4', time: '11:00hrs-12:00hrs' },
	{activity: 'Pastor A Kaguramamba', by: '#/app/speakers/8', time: '12:00hrs-13:00hrs' },
	{activity: 'LUNCH', by: '#', time: '13:00hrs-14:00hrs'},
	{activity: 'Apostle A Kapandura', by: '#/app/speakers/2', time: '14:00hrs-15:00hrs' },
	{activity: 'Apostle C Kapandura', by: '#/app/speakers/2', time: '15:00hrs-16:00hrs'},	
	{activity: 'SUPPER', by: '#', time: '16:00hrs-17:00hrs'},
	{activity: 'Apostle C Kapandura', by: '#/app/speakers/2', time: '17:00hrs-18:00hrs'},
	{activity: 'Official Opening/Pastor Manyati', by: '#/app/speakers/1', time: '19:00hrs-21:00hrs'}
  ],
  'sat': [
    {activity: 'BREAKFAST', by: '#', time: '06:00hrs-07:45hrs'},
    {activity: 'Pastor Mukamuri', by: '#/app/speakers/5', time: '08:00hrs-08:30hrs' },
    {activity: 'Elder Ndanga', by: '#/app/speakers/7', time: '08:30hrs-09:30hrs' },
    {activity: 'AOB', by: '#', time: '09:30hrs-10:30hrs' },
	{activity: 'MORNING BREAK', by: '#', time: '10:30hrs-11:00hrs'},
    {activity: 'International Director', by: '#/app/speakers/1', time: '11:00hrs-12:00hrs' },
	{activity: 'TBA/Co-ordination', by: '#', time: '12:00hrs-13:00hrs' },
	{activity: 'LUNCH', by: '#', time: '13:00hrs-14:00hrs'},
	{activity: 'Apostle C Kapandura', by: '#/app/speakers/2', time: '14:00hrs-15:00hrs' },
	{activity: 'Conference', by: '#', time: '15:00hrs-16:00hrs'},	
	{activity: 'SUPPER', by: '#', time: '16:00hrs-17:00hrs'},
	{activity: 'Holy Communion', by: '#', time: '17:00hrs-18:00hrs'},
	{activity: 'Apostle C Kapandura', by: '#/app/speakers/2', time: '19:00hrs-21:00hrs'}
  ],
  'sun': [
     {activity: 'BREAKFAST', by: '#', time: '06:00hrs-07:45hrs'},
    {activity: 'International Director', by: '#/app/speakers/3', time: '08:00hrs-08:30hrs' },
    {activity: 'Appraisal', by: '#', time: '08:30hrs-09:30hrs' },
    {activity: 'TBA', by: '#', time: '09:30hrs-10:30hrs' },
	{activity: 'TBA', by: '#/app/speakers/3', time: '10:30hrs-11:00hrs'},
    {activity: 'TBA', by: '#/app/speakers/3', time: '11:00hrs-12:00hrs' },
	{activity: 'Apostle C Kapandura', by: '#', time: '12:00hrs-13:00hrs' }
  ],
  };

  return {
    all: function() {
      return programs;
    }
  }
})

//song factories
.factory('Songs', function() {
  // Might use a resource here that returns a JSON array

  // data
  var songs = [
    { id: 0, name: 'Abakholwa kuJesu', lyrics: 'Abakholwa kuJesu x2\nBayophila kunaphakade\n\nAbakholwayo yindodana\nBayophila nokunaphakade\nAbakholwa kuJesu x2\nBayophila kunaphakade\n\nVanotenda kunaShe x2\nVachagara nekusingaperi\nVanotenda kumwanakomana\nVachagara nekusingaperi\nVanotenda kunaShe x2\nVachagara nekusingaperi\n\n' },
	
    { id: 1, name: 'Alpha and Omega', lyrics: 'You are alpha and omega\nWe worship you our Lord\nYou are worthy to be praised\n\nWe give you all the glory we worship you our Lord\nYou are worthy to be praised\n'},
	
    { id: 2, name: 'Amen', lyrics: 'AMEN AMEN AMEN... HALLELUJAH\nJESUS JESUS JESUS... HALLELUJAH\nSAVIOUR SAVIOUR SAVIOUR\nHEALER HEALER HEALER\nPROVIDER PROVIDER PROVIDER\nFATHER...FATHER...FATHER  HALLELUJAH\nLIFT JESUS HIGHER...HIGHER\n' },
	
    { id: 3, name: 'SOLID ROCK', lyrics: 'Haleluyah Haleluyal Oh Haleluyah- Ah\n\nYou are my solid rock and my salvation,\nNo one but You\nYou are my pleasant help in times of trouble\nI will praise you\n\nAgambebura Aleluyah buru\nPara Aleluya Para\nAgambebura Aleluya bugara Chineke\n\n(Otuaka Chineke Nobi)\n\nAgdigbaye-e-e-e\n\nwhen i remember what He has done for me\nwhen i remember what you have for me Lord\n\nAgdibaye-e-e-e' },
	
	{ id: 4, name: 'Ane hanya', lyrics: 'ANE HANYA\n\nOH ANE HANYA\nOH ANE HANYA\nJESU WEDU ANE HANYA NESU\n\nJESU WEDU ANEHANYA NESU\nJESU WEDU ANEHANYA NESU\nANE HANYA NESU\n\nWANDITORA APA ANDIISA APA\nANDIBVISA APA ANDISIMUDZIRA\nANEHANYA NESU\n\nUJESU LO UNOBUBELE NAMI\nUJESU LO UNOBUBELE NAMI\nUNOBUBELE NAMI\n\nWANGITHATHA LAPHA WANGIBEKA LAPHA\nWANGISUSA LAPHA WANGBEKA LE\nUNOBUBELE NAMI\n\nITHUBA LOKUTHANDAZA\n\nSINALO SINALO\nITHUBA LOKUTHANDAZA\n\nNGUVA YEKUNAMATA\n\nTINAYO, TINAYO\nNGUVA YOKUNAMATA' },
	
	{ id: 5, name: 'Anogona zvose', lyrics: 'Anogona zvose\nanogona zvose\nanogona zvose Jesu Kristu\n\nJesu wakanaka\nHiya Hiya\nHiya iya iya iya iya\nHiya\n\ntambira jehovah\ntambira jehovah\n\niwewe newe\niwewe newe\ntamira Jehovah.'},
	
	{ id: 6, name: 'Bayethe', lyrics: 'bayethe\nBayethe bayethe wezulu\nBayethe thixo somandla\nBayethe ngonyama kaJudah\nBayethe uphakeme\n\nMuchinda werugare topfugamira \nMuchinda werugare topururudza\n\nBayethe uyingonyama….\n\nNgatimurumbidze samasimba\nNgatimuimbire samasimba\nNgatimutambire samasimba\nNgatimuwombere sama simba\n\nOh LORD how excellent is your name\n'},
	
	{ id: 7, name: 'Mercy found me', lyrics: 'Be glorified\n\nBe glorified in the heavens\nBe glorified in the earth\nBe glorified in this temple\nJesus, Jesus\nBe thou glorified' },
	
	{ id: 8, name: 'Be still and know', lyrics: 'Be still and know that I am God……\nI am the Lord that healeth thee…..\nIn thee O lord I put my trust......\nMwari baba ndovimba nemi...\n' },
	
	{ id: 9, name: 'Jesus', lyrics: 'Bind us together Lord\nBind us together with cords\nThat cannot be broken\nBind us together with love\n\nBind us together Lord\nBind us together Lord\nBind us together with love\n\nOhohohohohohohoho' },
	
	{ id: 10, name: 'Bless the lord with me', lyrics: 'BLESS THE LORD WITH ME\n\nHALLELUYAH HALLELUYAH\n\nCLAP YOUR HANDS WITH ME\n\nSTOMP YOUR FOOT WITH ME\n\ndance for the lord with me' },
	
    { id: 11, name: 'Blessings and honour', lyrics: 'Blessings and honour be unto thee\nThat sitteth upon the throne\nAmen\nAmen .…..\n'},
	
    { id: 12, name: 'Bonga', lyrics: 'BONGA\nBONGA\nNJENGENYONI ENHLE HLABELELA\n\nHLABELELA\nHLABELELA\nNJENGENYONI ENHLE HLABELELA\n' },
	
    { id: 13, name: 'Bow down and worship him', lyrics: 'BOW DOWN AND WORSHIP HIM\nWORSHIP HIM\nO WORSHIP HIM\n\nCONSUMING FIRE ,SWEET PERFUME\nHIS AWESOME PRESENCE FILLS THIS PLACE\nTHIS IS HOLY GROUND\nSO BOW DOWN AND WORSHIP HIM\n' },
	
	{ id: 14, name: 'Come on everybody', lyrics: 'COME ON EVERYBODY ITS TIME TO START\nPRAISE THE LORD YOUR GOD WITH ALL YOUR HEART\n\nPRAISE THE LORD\nEVERYBODY PRAISE THE LORD\n\nEVERY BODY CLAP YOUR HANDS\n' },
	
	{ id: 15, name: 'Faithful is our God', lyrics: "Faithful, faithful, faithful is our God\nFaithful, faithful, faithful is our God\nFaithful, faithful, faithful is our God\nFaithful, faithful, faithful is our God\n\nI'm reaping the harvest God promised me\nTake back what the devil stole from me\nAnd I rejoice today, for I shall recover it all\nYes, I rejoice today, for I shall recover it all\n\nHoly, holy, holy is our God\nHoly, holy, holy is our God\nHoly, holy, holy is our God\nHoly, holy, holy is our God\n\nI'm reaping the harvest God promised me\nTake back what the devil stole from me\nAnd I rejoice today, for I shall recover it all\nYes, I rejoice today, for I shall recover it all\n\nJesus, Jesus, Jesus is our God\nJesus, Jesus, Jesus is our God\nJesus, Jesus, Jesus is our God\nJesus, Jesus, Jesus is our God\n\nI''m reaping the harvest God promised me\nTake back what the devil stole from me(12x)\n\nAnd I rejoice today (8x)\nFor I shall recover it all"},
	
	{ id: 16, name: 'Father we are here', lyrics: 'FATHER WE ARE HERE\nWE ARE HERE FOR YOU\n\nJESUS WE ARE HERE\nWE ARE HERE FOR YOU\n\nSPIRIT WE ARE HERE\nWE ARE HERE FOR YOU\n\nSAVIOUR WE ARE HERE\nWE ARE HERE FOR YOU\n\nBABA TAVE PANO\nTAVE PANO NOKUDA KWENYU'},
	
	{ id: 17, name: 'Father we come before you to worship you/ hosanna in the highest', lyrics: 'FATHER WE COME BEFORE YOU TO WORSHIP AND TO PRAISE YOU\nJESUS WE COME BEFORE YOU TO WORSHIP AND TO PRAISE YOU\nSPIRIT WE COME BEFORE YOU TO WORSHIP AND TO PRAISE YOU\nHOSSANA...HOSSANA\nHOSSANA IN THE HIGHEST' },
	
	{ id: 18, name: 'Makanaka', lyrics: 'GLORY TO GOD\nGLORY TO GOD\nGLORY TO GOD\nGLORY TO GOD\n\nMAKANAKA..MAKANAKA....MAKANAKA\n\nNGAARUMBIDZWE...NGAARUMBIDZWE…. NGAARUMBIDZWE\n\nTINOTENDA...TINOTENDA...TINOTENDA' },
	
	{ id: 19, name: 'GOD IS GOOD FOR HE HAS DONE ME WELL', lyrics: 'GOD IS GOOD\n(GOD IS GOOD)\nFOR HE HAS DONE ME WELL\n(OH MY SOUL)\nRISE UP AND PRAISE THE LORD\n\nGLORY BELONGS TO GOD\nHONOUR BELONGS TO HIM\n\nI AM A WINNER\nI KNOW THAT I AM A WINNER\n\n(THE SPIRIT OF THE LORD)\nIS UPON ME\nI KNOW THAT I AM A WINNER\n' },
	
	{ id: 20, name: 'HAKUNA MUMWE', lyrics: 'HAKUNA MUMWE ANOTUNGAMIRA\nHAKUNA....HAKUNA MUMWE\n\nHAKUNA....MUMWE KUPINDA JESU\nHAKUNA..HAKUCHINA\n\nJESU NDIYE SHAMWARI YEDU\nANONATSA KUTUNGAMIRA\n\nHAKUNA MUMWE KUPINDA JESU\nHAKUNA...HAKUCHINA\n' },
	
    { id: 21, name: 'HALLELUJAH THE LORD ALMIGHTY REIGNS', lyrics: 'Halleluah the Lord Almighty Reigns\nHalleluah the Lord Almighty Reigns\n\nLet us sing and rejoice\nAnd give Him all the glory\n\nHe reigns, He reigns, He reigns'},
	
    { id: 22, name: 'HE HAS DONE GREAT THINGS', lyrics: 'He has done great things\nBless his holy name\n\nHallelujah...He has done great things\nHallelujah...He has done great things\n\nBless his holy name\n\nbless the Lord all my soul and all that is within me\nbless his holy name' },
	
    { id: 23, name: 'HOW GREAT', lyrics: 'How great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God\n\nHow great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God\n\nName above all names\nWorthy of our praise\nMy heart will sing\nHow great is our God\n\n(How great is our God and all will see)\n(How great, how great is our God)\n\nMy heart will sing\nHow great is our God\n\nHow great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God\n\nHow great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God\n\nHow great is our God, sing with me\nHow great is our God and all will see\nHow great, how great is our God\n' },
	
	{ id: 24, name: 'Ane hanya', lyrics: 'ANE HANYA\n\nOH ANE HANYA\nOH ANE HANYA\nJESU WEDU ANE HANYA NESU\n\nJESU WEDU ANEHANYA NESU\nJESU WEDU ANEHANYA NESU\nANE HANYA NESU\n\nWANDITORA APA ANDIISA APA\nANDIBVISA APA ANDISIMUDZIRA\nANEHANYA NESU\n\nUJESU LO UNOBUBELE NAMI\nUJESU LO UNOBUBELE NAMI\nUNOBUBELE NAMI\n\nWANGITHATHA LAPHA WANGIBEKA LAPHA\nWANGISUSA LAPHA WANGBEKA LE\nUNOBUBELE NAMI\n\nITHUBA LOKUTHANDAZA\n\nSINALO SINALO\nITHUBA LOKUTHANDAZA\n\nNGUVA YEKUNAMATA\n\nTINAYO, TINAYO\nNGUVA YOKUNAMATA' },
	
	{ id: 25, name: 'HOW GREAT THOU ART', lyrics: 'O Lord my God, When I in awesome wonder,\nConsider all the worlds Thy Hands have made;\n\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.\n\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art.\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art!\n\nWhen through the woods, and forest glades I wander,\nAnd hear the birds sing sweetly in the trees.\nWhen I look down, from lofty mountain grandeur\nAnd see the brook, and feel the gentle breeze.\n\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art.\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art!\n\nAnd when I think, that God, His Son not sparing;\nSent Him to die, I scarce can take it in;\nThat on the Cross, my burden gladly bearing,\nHe bled and died to take away my sin.\n\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art.\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art!\n\nWhen Christ shall come, with shout of acclamation,\nAnd take me home, what joy shall fill my heart.\nThen I shall bow, in humble adoration,\nAnd then proclaim: "My God, how great Thou art!"\n\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art.\nThen sings my soul, My Saviour God, to Thee,\nHow great Thou art, How great Thou art!'},
	
	{ id: 26, name: 'HUYAI TIMURUMBIDZE', lyrics: 'Huyayi timurumbidze….\nHuyayi timutambire…\nHuyayi timuwombere….\n'},
	
	{ id: 27, name: 'I LOVE YOU LORD WITH ALL MY HEART', lyrics: 'I LOVE YOU LORD WITH ALL MY HEART\n\nI LOVE YOU LORD WITH ALL MY STRENGHT\n\nI LOVE YOU LORD WITH ALL MY SOUL\n\nMARVELOUS ARE YOUR WORKS\n\nYOU ARE FEARFULLY AND WONDERFULLY MADE\n\nI’M FEARFULLY AND WONDERFULLY MADE\n\nMARVELOUS ARE YOUR WORKS' },
	
	{ id: 28, name: 'I NEED YOU', lyrics: 'I need you, you need me\nWe’re all a part of God’s body\nStand with me, agree with me\nWe’re all a part of God’s body\n\nIt is His will that every need be supplied\nYou are important to me\nI need you to survive\n\nI pray for you, you pray for me\nI love you I need you to survive\nI won’t harm you with words from my mouth\n\nI love you I need you to survive\nIt is His will that every need be supplied\nYou are important to me\nI need you to survive' },
	
	{ id: 29, name: 'ICHOKWADI', lyrics: 'ICHOKWADI MWARI ARIKO\n\nPEMBERAI...... PEMBERAI...... MWARI ARIKO\n\nFARAI.... FARAI..... MWARI ARIKO' },
	
	{ id: 30, name: 'ISHE WEMBA INO', lyrics: 'NDIMI ISHE WEMBA INO, TONAMATA TONGAI MAIRI\nHUYAI MUTONGE, ISHE WEMBA INO TONGAI MAIRI\n' },
	
	{ id: 31, name: 'JEHOVAH IS YOUR NAME', lyrics: 'JEHOVA IS YOUR NAME X2\n\nMIGHTY WARRIOR\nGREAT AND AWESOME\nJEHOVA IS YOUR NAME\n' },
	
    { id: 32, name: 'JEHOVAH WE WORSHIP YOU', lyrics: 'JEHOVAH WE WORSHIP YOU, WE MAGNIFY YOUR NANE\nHOLY, HOLY, HOLY IS YOUR NAME\n\nHOLY.......HOLY.....HOLY\nHOLY, HOLY....HOLY IS YOUR NAME'},
	
    { id: 33, name: 'JEHOVAH ELOHIM', lyrics: 'Jehovah Elohim, the Most High God\nJehovah Nissi, the Lord our Banner\nJehovah Raphah, the Lord our Healer\nThe God our Father, the Sovereign Master\n\nI lift Him high above the earth\nI lift Him high above the earth\nJehovah Shammah\nThe Lord is here' },
	
    { id: 34, name: 'JESUS YOU ARE A WONDERFUL KING', lyrics: 'JESUS...YOU ARE A WONDERFUL KING; WE EXALT YOUR HOLY NAME....\n\nHOSANNA....HOSANNA.....HOSANNA\nYou are faithful Lord\nWe exalt your HOLY name\n\nHosanna Hosanna\nYou are faithful Lord\nWe exalt your HOLY name' },
	
	{ id: 35, name: 'LET YOUR LIVING WATERS', lyrics: 'Let your living waters flow over my soul\nLet your holy spirit come and take control\nEvery situation that has troubled my mind\nAll my cares and burdens unto you I roll\n\nJesus……\n\nFather ……\n\nSpirit……' },
	
	{ id: 36, name: 'LION OF JUDAH', lyrics: 'Lion of Judah\nwe worship you\nLion of judah\nyou are holy\n\nshumba ya Judah\ntonamata\nShumba yajudah\nMurimutsvene'},
	
	{ id: 37, name: 'Bayethe', lyrics: 'bayethe\nBayethe bayethe wezulu\nBayethe thixo somandla\nBayethe ngonyama kaJudah\nBayethe uphakeme\n\nMuchinda werugare topfugamira \nMuchinda werugare topururudza\n\nBayethe uyingonyama….\n\nNgatimurumbidze samasimba\nNgatimuimbire samasimba\nNgatimutambire samasimba\nNgatimuwombere sama simba\n\nOh LORD how excellent is your name\n'},
	
	{ id: 38, name: 'LOVE YOU LORD ', lyrics: 'Love you LORD with all my Heart\nLove you LORD with all my Soul\n\nLove you LORD with all my strength\nMarvellous are your works\n\n I AM Fearfully and Wonderfully made (x3)\nMarvellous are your works' },
	
	{ id: 39, name: 'MAKATENDEKA JESU', lyrics: 'makatendeka Jesu.....makatendeka Jesu\nmazuva ose, nguva dzose, makatendeka Jesu\n\nmakatendeka Jesu.....makatendeka Jesu\n\nevery day, every hour, you are faithful oh Lord..\n\nyou are faithful oh Lord.....' },
	
	{ id: 40, name: 'MBIRI KUGWAYANA', lyrics: 'MBIRI KUGWYANA\nRAMWARI RAMWARI\nRAMWARI' },
	
	{ id: 41, name: 'MIGHTY IS OUR GOD', lyrics: 'Mighty is our God\nMighty is our King\nMighty is our Lord\nRuler of everything\n\nHis name is higher\nHigher than any other name\nHis power is greater\nFor He has created everything' },
	
    { id: 42, name: 'MODIMO', lyrics: 'modhimo\n\nmodhimo riboka wena\n\ntsohle diyenswe kiwena\nmodhimo riboka wena\n\nmomomo modhimo riboka wena'},
	
    { id: 43, name: 'MOLWENI', lyrics: 'Molweni x 2\nNgegama likaJesu x 2\n\nMhoroi x 2 Muzita raJesu x 2\n\nSabona X2 Ngegama lika Jesu x 2' },
	
    { id: 44, name: 'MURI MUTSVENE', lyrics: 'MURI MUTSVENE BABA MURI MUTSVENE\nMURI MUTSVENE...\n\nYOU ARE HOLY FATHER \nYOU ARE HOLY' },
	
	{ id: 45, name: 'MURI MWARI BABA', lyrics: 'Muri Mwari baba\nMuri Jehova\nMuri mponesi wedu\nTinosimudzira zita renyu\nMwari baba' },
	
	{ id: 46, name: 'BABA WEDU WARI KUDENGA', lyrics: "BABA WEDU WARI KUDENGA ZITA RENYU NGARIKUDZWE\n HUMAMBO HWENYU NGAHUKUDZWE\n\nMBIRI MBIRI MBIRI KUNABABA HUMAMBO HWENYU NGAKUUYE"},
	
	{ id: 47, name: 'MWARI MURI ZUVA REDU', lyrics: 'Mwari muri zuva redu\nRinopenya pauzuru\nAsi mweya ungaone\nPaunozofamba napo\n\nMwari murinhowo yedu\nHatidzitye hondo dzedu\nDzose dzinokundwa nemi\nTigouya nekufara\n\nMunotipa ngoni dzenyu\nMunotipa nehutsvene\nMunopa wanonamata\nMunopa makomborero\n\nMakomborero makuru\nMakomborero edenga\nAripo awanofunga\nKuti wanodiswa nemi'},
	
	{ id: 48, name: 'Ndichakudza', lyrics: 'Ndichakudza zita raJesu….\n\n(Nekuti) Rakanaka …… \n\nNdichakudza zita raJesu\n(Mwari baba totenda)\n\nTotenda kunaka, totenda kunaka\nTotenda kunaka\nKwenyu Jesu' },
	
	{ id: 49, name: 'Ndinodisa kufamba naJesu', lyrics: 'NDINODISA KUMUTEVERA JESU\nNDINODISA KUFAMBA NAYE\n\nNDINODISA KUMUTEVERA JESU\nPESE PAANOENDA NDOMUTEVERA\n\nNDOMUTEVERA NDOMUTEVERA JESU\nNDOMUTEVERA JESU INZIRA\nNDOMUTEVERA NDOMUTEVERA JESU\nPESE PAANOENDA NDOMUTEVERA' },
	
	{ id: 50, name: 'Ndinoshamiswa kwazvo', lyrics: 'NDINOSHAMISWA KWAZVO NAMABASA MAKURU\nAKAITIWA NEMIOSE ANORUMBIDZWA\n\nHUKURU HWENYU MWARI  HUNOSHAMISA KWAZVO\n\nKANA NDORANGARIRA MABASA EKUDENGA\nKANA NDORANGARIRA MABASA EPANYIKA\n\nINOBUDA MISODZI KANA NDOFUNGA IMI\n\nMWARI WATATU MUMWE ITAI KUTI TIKUDEI\nNOKUTI MAKATIDA MAKAZOTIPA JESU\n\nMATIPA MWEYA WENYU WOKUTISIMBARADZA\n\nRUMBIDZA IWE DENGA\nRUMBIDZA IWE NYIKA\nRUMBIDZA IWE GUNGWA\n\nNESU NGATIRUMBIDZE\nUYU MUSIKI WEDU ANERUDO RUKURU' },
	
	{ id: 51, name: 'Ndoda Mwari', lyrics: 'NDODA MWARI MUYAMURI MURI WANGU\nNDAKATENGWA NEROPA RAISHE INI\nNDAWA WENYU CHOSE' },
	
    { id: 52, name: 'Ngaawongwe ishe wamadzishe', lyrics: 'NGAAVONGWE...NGAAVONGWE..NGAAVONGWE\nNGAAVONGWE ISHE WEMADZISHE' },
	
    { id: 53, name: 'Obrigado', lyrics: 'obrigado xikwembu xamatimba\nobrigado\n\nkinkensile xikwembu xamatimba\n\ntinotenda Mwari wamasimba' },
	
	{ id: 54, name: 'ohh lord receive the praise', lyrics: 'O Lord receive all praise\nUnto your name we give the praise\n\nO Mighty God\nWe bless your name\n\nWE BLESS YOUR NAME\nWE BLESS YOUR NAME\n\nWE MAGNIFY YOUR NAME\nWE BLESS YOUR NAME' },
	
	{ id: 55, name: 'Reign Jesus', lyrics: 'Reign Jesus Reign X2\nKing of Zion lion of Judah\nReign Jesus Reign\n\nReign Spirit Reign x2\nSweet anointing x2\nReign Spirit Reign.'},
	
	{ id: 56, name: 'Rinamatwe', lyrics: 'RINAMATWE RIKUDZWE\nNEUTSVENE ZITA RENYU\n\nRITENDWE RIVONGWE\nNEUTSVENE ZITA RENYU\n\nZITA RENYU NGARIKUDZWE\nRIBATWE NEHUTSVENE\nZITA RENYU NGARIKUDZWE\nZITA RAJESU..\nRINAMATWE RIKUDZWE\nNEUTSVENE ZITA RENYU\n'},
	
	{ id: 57, name: 'Simi lapha', lyrics: 'SIMI LAPHA\nSIMEMEZELA UKUNQOBA\nUKUNQOBA EGAZINI LEMVANA\n\nSINQOBILE SINQOBILE SINQOBILE\nSINQOBILE EGAZINI LEMVANA\n\nHERE WE STAND AND PROCLAIM VICTORY VICTORY IN THE BLOOD OF THE LAMB\n\nTHERE IS VICTORY VICTORY VICTORY\nIN THE BLOOD OF THE LAMB' },
	
	{ id: 58, name: 'Siyabonga Jesu', lyrics: 'SIYABONGA JESU\nSIYABONGA QHAWE LEZULU\n\nSIYABONGA JESU\nSIYABONGA\n\nWAHAMBA NATHI HEH WAHAMBA NATHI\nHEH WAHAMBANATHI SIYABONGA\n\nTINOTENDA JESU\nTINOTENDA GAMBA REDENGA\nTINOTENDA JESU TINOTENDA\n\nWAFAMBA NESU HEH WAFAMBA NESU\nHEH WAFAMBA NESU TINOTENDA' },
	
	{ id: 59, name: 'Take all the glory', lyrics: 'FOR YOUR FAITHFULLNESS, POWER AND YOUR LOVE\n\nTAKE ALL THE GLORY..ALL THE GLORY OH MIGHTY GOD\n\nTAKE ALL THE GLORY...ALL THE GLORY OH LORD' },
	
	{ id: 60, name: 'Thina sizile', lyrics: 'Thina sizile ukuzom’dumis’ uJesu\nNgoba akekho omunye ofana naye\n\nIsu tauya kuzom’rumbidza Jesu\nNekuti hakuna wakafanana naye\n\nHey, hey, hey, uhlaleleni bo\nHey, hey, hey, Jesu ndimambo\nX2\n\nHey, hey, hey, rise up and praise the Lord' },
	
    { id: 61, name: 'This is the day', lyrics: 'This is the day, this is the day \nThat the Lord has made, that the Lord has made\nWe will rejoice, we will rejoice\nAnd be glad in it and be glad in it\n\nThis is the day that the Lord has made\nWe will rejoice and be glad in it\n\nThis is the day, this is the day\nThat the Lord has made'},
	
    { id: 62, name: 'Tinokuwongai', lyrics: 'TINOKUVONGAI ISHE JESU\n\nMURI MWARI WAMASIMBA OSE\n\nTINOKUNAMATAI MWARI BABA' },
	
    { id: 63, name: 'Tinomurumbidza', lyrics: 'tinomurumbidza\nIshe wemadzishe\n\nhakuna mumwe wakafanana naye\nishe wemadzishe\n\nsiyakudhumisa\nnkosi yamankosi' },
	
	{ id: 64, name: 'Tomurumbidza', lyrics: 'TOMURUMBIDZA\nTOMURUMBIDZA\nJEHOVAH\nJEHOVAH\n\nTOMUOMBERA\nTOMUOMBERA\nJEHOVAH\nJEHOVAH\n\nTOMUTAMBIRA\nTOMUTAMBIRA\nJEHOVAH\nJEHOVAH' },
	
	{ id: 65, name: 'Torai moyo wangu', lyrics: "TORAI MOYO WANGU\nMUNYIKE MUROPA\nNDISHAMBIDZEI...NDICHENE SECHANDO CHAMATSUTSO"},
	
	{ id: 66, name: 'Touch me now my savior', lyrics: 'OHH BLESS ME MY SAVIOUR ICOME TO THEE\n\nTOUCH ME NOW MY SAVIOUR I COME TO THEE\n\nBLESS ME NOW MY SAVIOUR I COME TO THEE\n\nTEACH ME NOW MY SAVIOUR...I COME TO THEE...'},
	
	{ id: 67, name: 'Trading my sorrows', lyrics: "I'm trading my sorrow\nI'm trading my shame\nI'm laying it down for the joy of the Lord\n\nI'm trading my sickness\nI'm trading my pain\nI'm laying it down for the joy of the Lord\n\nChorus:\nAnd we say yes Lord yes Lord yes yes Lord\nYes Lord yes Lord yes yes Lord\nYes Lord yes Lord yes yes Lord Amen\n\nI'm pressed but not crushed persecuted not abandoned\nStruck down but not destroyed\nI'm blessed beyond the curse for his promise will endure\nAnd his joy's gonna be my strength\n\nThough the sorrow may last for the night\nHis joy comes with the morning\n" },
	
	{ id: 68, name: 'Vongwai Jehovah', lyrics: 'VONGWAI JEHOVAH NEKUTI MAKANAKA\nNGONI DZENYU DZINOGARA NEKUSINGAPERI' },
	
	{ id: 69, name: 'WE BLESS YOUR NAME', lyrics: 'We bless your name O mighty God\nWe bow before your throne\n\nWe glorify your holy name\nQhawe lamaqhawe\n\nTonamata zita renyu\nIshe wamadzishe\n\nTosimudza zita renyu\nIshe wamadzishe' },
	
	{ id: 70, name: 'WE LOVE ONE ANOTHER', lyrics: 'We love one another and praise the lord\n\nWe clap our hands and praise the lord\n\nWe sing hossana and praise the lord' },
	
    { id: 71, name: 'WE GIVE YOU ALL THE GLORY', lyrics: 'We give you all the glory\nWe give you all the praise\nWe give you all the glory\nYou alone deserve it\n\nHalleluah, Halleluah, Halleluah\nYou alone deserve it\n\nTokupai mbiri yose\nTokupai rumbidzo\nTokupai mbiri yose\nImi makafanira\n\nHalleluah, Halleluah, Halleluah\nImi makafanira\n\nSikunik’ inkazimulo\nSikunika udumo\nSikunik’ inkazimulo\nWena ufanelwe\n\nHalleluah, Halleluah, Halleluah\nWena ufanelwe\n\nWe raise our voices to you O Lord\nWe declare that your name is great'},
	
    { id: 72, name: 'WE GIVE YOU THE HIGHEST PRAISE', lyrics: 'We give you the highest praise\n\nFor you are worthy to be lifted up\n\nWorthy, worthy, worthy\n\nYou are worthy to be lifted up' },
	
    { id: 73, name: 'WE LIFT OUR HANDS', lyrics: 'We lift our hands\nWe give all the praise\nWe worship O mighty God\n\nWe worship O Mighty God\nWe worship O Mighty God' },
	
	{ id: 74, name: 'WE LOVE ONE ANOTHER', lyrics: 'We love one another and praise the Lord….\n\nWe clap our hands and praise the Lord...\n\nWe shout hosanna and praise the Lord\n\nWe shout halelluah and praise the Lord\n\nWe wave our hands and praise the Lord\n\nWE GREET ONE ANOTHER AND PRAISE THE LORD' },
	
	{ id: 75, name: 'WE PRAISE YOU LORD', lyrics: 'We praise you Lord, we magnify your name\n\nYou are worthy, worthy, we magnify your name\n\nWe magnify, we magnify, we magnify your name\n\nYou’re worthy, Hossana!\nWe love you, Hossana!\nYou reign, Hossana\nForever and ever...'},
	
	{ id: 76, name: 'WE WORSHIP', lyrics: 'We worship O Mighty God\nWe bow down before\nYour Holy Throne\nKing of Kings\nLord of Lords\nThe Everlasting God'},
	
	{ id: 77, name: 'ZAWA ZINDONGA', lyrics: 'Zawa zindoga zeJericho \nZawa zawelale\n\n awa masvingo ejericho\nawa awira pasi\n\nwagarireiko hauoni awa\nawa awira pasi\n\nziwelele....le\nziwelele....le\nziwelele...le' },
	
	{ id: 78, name: 'ZITA RENYU NGARIKUDZWE', lyrics: 'zita renyu ngarikudzwe\nipo panyika sekudenga\n\nribatwe nehutsvene\nzita renyu ngarikuzwe\n\nRIBATWE NEHUTSVENE\n\nZITA RENYU NGARIKUDZWE' }
		
	];

  return {
    all: function() {
      return songs;
    },
    get: function(songId) {
      // Simple index lookup
      return songs[songId];
    }
  }
})


//Map data factory
.factory('Map', function() {
	 var distance = -1;
	 return {
		 getDistance: function()
		 {
			 return distance;
		 },
		 drawMap: function(){			
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
				var lat = position.coords.latitude;
				var lng = position.coords.longitude;
				Markers = [];
				
				var mapOptions = {
								center: new google.maps.LatLng(lat, lng),
								zoom: 13,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							};
							
				var myMap = new google.maps.Map(document.getElementById('map'), mapOptions);
				
				//user position
				var latlng = new google.maps.LatLng(lat,lng);
				myMap.setCenter(latlng);
				Markers.push(new google.maps.Marker({ map: myMap, position: latlng}));	
				
				
				//destination position
				var destlatlng = new google.maps.LatLng(-17.929204, 30.960427);	
				Markers.push(new google.maps.Marker({ map: myMap, position: destlatlng}));
				
				//distance
				var origin = latlng;	
				var destination = destlatlng;
				var distanceService = new google.maps.DistanceMatrixService();	
				
				distanceService.getDistanceMatrix({
				origins: [origin],
				destinations: [destination],
				travelMode: google.maps.TravelMode.DRIVING,
				avoidHighways: false,
				avoidTolls: false
					}, 
					function(response, status) {
					if(status=="OK") {				
							if(response.rows[0].elements[0].distance !=  undefined)
							{
								distance = response.rows[0].elements[0].distance.text;									
							}
					} else {
						alert("Error: " + status);				
					}
				});
				
				//http://www.aspforums.net/Threads/151361/Google-Maps-V3-How-to-draw-route-between-two-locations-points/
				//draw path
				var directionsService = new google.maps.DirectionsService();
				var directionsDisplay = new google.maps.DirectionsRenderer();		
				directionsDisplay.setMap(myMap);
				calcRoute(origin,destination,directionsService, directionsDisplay);
				}, function(error){
					switch (error.code) {
					case error.PERMISSION_DENIED:
						alert("Please Go to your setting and allow the app to access Geolocation.");
						break;
					case error.POSITION_UNAVAILABLE:
						alert("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						alert("The request to get user location timed out.");
						break;
					case error.UNKNOWN_ERROR:
						alert("Make sure your device's location setting allow for apps to access Geolocation Data.");
						break;
						}
				})		
			}
		  }
	 }
	//function to draw path on Google map
	function calcRoute(origin, destination, directionsService, directionsDisplay) {	  
	  var request = {
		  origin:origin,
		  destination:destination,
		  travelMode: google.maps.TravelMode.DRIVING
	  };
	  directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  directionsDisplay.setDirections(response);
		}
	  });
	}
  });
