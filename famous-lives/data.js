window.UNIT = {
  slug: "famous-lives",
  number: 10,
  title: "Famous Lives",
  level: "A2",
  minutes: 50,
  speakers: { "Teacher": "f", "Emilio": "m", "Guide": "m", "Lucía": "f", A: "f", B: "m" },
  focus: ["biographies: was born, grew up, became, died", "past simple: regular and irregular review", "could / couldn't for past ability", "dates and time expressions: in 1950, at the age of…, later", "Wh- questions in the past"],

  presentation: {
    scene: "📜🎤🏆🎬",
    situation: "In English class, Emilio presents the life of a famous Mexican person. His classmates and teacher ask questions.",
    warmup: {
      prompt: "Which famous Mexicans do you know? Choose the ones you can talk about.",
      options: ["Frida Kahlo", "Octavio Paz", "Rodolfo Neri Vela", "Lorena Ochoa", "Pedro Infante", "Sor Juana", "Guillermo del Toro", "Benito Juárez", "Chespirito", "Ana Guevara"],
      response: "Great! In this unit you'll learn to tell the story of someone's life."
    },
    dialogueTitle: "A class presentation",
    dialogue: [
      { who: "Emilio", line: "My presentation is about Rodolfo Neri Vela. He *was born* in Chilpancingo, Guerrero, *in 1952*." },
      { who: "Emilio", line: "He *studied* engineering at UNAM and *later* he *did* a PhD in England." },
      { who: "Teacher", line: "*What did he do* after that?" },
      { who: "Emilio", line: "In 1985 he *became* the first Mexican in space! He *traveled* on the space shuttle Atlantis." },
      { who: "Teacher", line: "Wow! *How long was* he in space?" },
      { who: "Emilio", line: "About seven days. He *couldn't* sleep well at first, but he *could* see Mexico from the window!" },
      { who: "Teacher", line: "*Is* he still alive?" },
      { who: "Emilio", line: "Yes, he is. Today he *gives* talks to young people about science." }
    ]
  },

  objectives: [
    "I can describe the main events of a person's life.",
    "I can use the past simple of regular and irregular verbs.",
    "I can use *could / couldn't* for past ability.",
    "I can ask and answer questions about someone's life."
  ],

  explanation: {
    vocabTitle: "Life events",
    vocab: [
      { word: "be born", icon: "👶" }, { word: "grow up", icon: "🧒" }, { word: "go to school", icon: "🏫" },
      { word: "study", icon: "📚" }, { word: "graduate", icon: "🎓" }, { word: "get a job", icon: "💼" },
      { word: "become", icon: "⭐" }, { word: "get married", icon: "💍" }, { word: "have children", icon: "👨‍👩‍👧" },
      { word: "move to", icon: "🚚" }, { word: "win a prize", icon: "🏆" }, { word: "retire", icon: "🏖️" },
      { word: "die", icon: "🕯️" }, { word: "famous for", icon: "🌟" }, { word: "at the age of", icon: "🎂" }
    ],
    grammar: [
      {
        title: "Telling a life story",
        head: ["Event", "Example"],
        rows: [
          ["birth", "He *was born* in Chilpancingo *in 1952*."],
          ["childhood", "She *grew up* in Coyoacán."],
          ["studies / work", "He *studied* engineering. She *became* a painter."],
          ["age", "*At the age of* 33, he *went* to space."],
          ["order", "*Later*, … / *After that*, … / *Two years later*, …"]
        ],
        note: "Say *was born* (passive) — never *I born* or *I was borned*."
      },
      {
        title: "Could / couldn't (past ability)",
        head: ["", "Example"],
        rows: [
          ["affirmative", "He *could* see Mexico from space."],
          ["negative", "She *couldn't* walk for a year after the accident."],
          ["question", "*Could* you swim when you were five?"],
          ["short answer", "Yes, I *could*. / No, I *couldn't*."]
        ]
      },
      {
        title: "Questions about the past",
        head: ["Question", "Answer"],
        rows: [
          ["*Where was* she *born*?", "In Coyoacán."],
          ["*When did* he *go* to space?", "In 1985."],
          ["*What did* she *study*?", "Medicine."],
          ["*Who did* he *marry*?", "A famous singer."],
          ["*Who won* the prize? (subject question)", "Octavio Paz won it in 1990."]
        ]
      }
    ],
    watchOut: [
      ["He born in 1952.", "He was born in 1952."],
      ["When he went to space?", "When did he go to space?"],
      ["She could to speak four languages.", "She could speak four languages."],
      ["He becomed famous.", "He became famous."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the past simple.",
      items: [
        "Frida Kahlo [[was]] born in 1907. (be)",
        "She [[grew]] up in Coyoacán. (grow)",
        "Neri Vela [[became]] an astronaut. (become)",
        "Octavio Paz [[won]] the Nobel Prize in 1990. (win)",
        "Lorena Ochoa [[began|started]] playing golf at the age of five. (begin)",
        "Sor Juana [[could]] read when she was three! (can)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A museum guide tells a group about the life of a famous athlete. Listen.",
      title: "At the sports museum",
      script: [
        { who: "Guide", line: "This is the section about Ana Gabriela Guevara. She was born in Nogales, Sonora, in 1977." },
        { who: "Guide", line: "When she was young, she played basketball, but at the age of nineteen she started running." },
        { who: "Lucía", line: "Was she good at it immediately?" },
        { who: "Guide", line: "Yes! She could run very fast. In 2003 she became world champion in the 400 meters in Paris." },
        { who: "Lucía", line: "Did she win an Olympic medal?" },
        { who: "Guide", line: "Yes, she did. She won a silver medal at the Athens Olympics in 2004. Unfortunately, she couldn't win the gold." },
        { who: "Lucía", line: "What did she do after she stopped running?" },
        { who: "Guide", line: "She went into politics. Later she worked for the government as director of sports." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the timeline",
          prompt: "Write the year or the event.",
          items: [
            "[[1977]]: born in Nogales, Sonora",
            "age 19: started [[running]]",
            "[[2003]]: world champion in Paris",
            "2004: [[silver]] medal in Athens",
            "after running: went into [[politics]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "She played basketball when she was young.", a: true },
            { s: "She started running at the age of nine.", a: false },
            { s: "She won a gold medal in Athens.", a: false },
            { s: "She worked as director of sports.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short biography from an online encyclopedia for students.",
      title: "Sor Juana Inés de la Cruz",
      text: [
        { author: "Early life", body: "Juana Inés de Asbaje was born in 1648 in San Miguel Nepantla, near the volcano Popocatépetl. She was a very intelligent child. She could read at the age of three, and she learned Latin in only twenty lessons!" },
        { author: "Adult life", body: "Women couldn't go to university at that time, so Juana wanted to dress as a man to study. Her mother said no. At the age of 16 she moved to Mexico City and worked at the court of the viceroy. Later, she became a nun, because she wanted time to read and write." },
        { author: "Her work", body: "She wrote poems, plays and essays. She defended the right of women to study. She died in 1695. Today she is on the 200-peso bill, and many schools have her name." }
      ],
      activities: [
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["Where was she born?", "in San Miguel Nepantla"],
            ["When could she read?", "at the age of three"],
            ["Why did she want to dress as a man?", "to go to university"],
            ["Where did she move at 16?", "to Mexico City"],
            ["What did she defend?", "the right of women to study"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, she did / No, she couldn't…*",
          items: [
            { q: "Could women go to university then?", a: ["No, they couldn't.", "No, they could not."] },
            { q: "Did her mother let her dress as a man?", a: ["No, she didn't.", "No, she did not."] },
            { q: "Did she write poems?", a: ["Yes, she did."] },
            { q: "Could she read at the age of three?", a: ["Yes, she could."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice past questions, then write a short biography.",
      activities: [
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write a question for the words in *italics*.",
          items: [
            { q: "She was born *in 1907*. (When…?)", a: ["When was she born?"] },
            { q: "He studied *engineering*. (What…?)", a: ["What did he study?"] },
            { q: "She moved *to Mexico City*. (Where…?)", a: ["Where did she move?", "Where did she move to?"] },
            { q: "*Octavio Paz* won the Nobel Prize. (Who…?)", a: ["Who won the Nobel Prize?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She was born in a small town." },
            { a: "He became famous at the age of twenty." },
            { a: "She couldn't go to university." },
            { a: "Two years later, they moved to Spain." },
            { a: "When did he win the prize?" }
          ]
        },
        {
          type: "write", title: "A famous life",
          prompt: "Write a short biography of a famous person you admire (or a person in your family). Include birth, childhood, studies or work, important events and why they are special. Use *could / couldn't* once.",
          minWords: 70, maxWords: 130,
          model: "My grandmother, Rosa, was born in 1950 in a village in Oaxaca. She grew up with seven brothers and sisters. She couldn't go to secondary school because her family needed help with the farm. At the age of 18 she moved to Puebla and got a job in a bakery. Later, she opened her own bakery. She worked hard for forty years and sent all her children to university. She's my hero because she never gave up.",
          bank: ["… was born in … in…", "He / She grew up in…", "At the age of…", "He / She studied / became…", "Later, … / Two years later, …", "He / She couldn't…", "He / She is famous for…"],
          checklist: [
            "I used *was born*.",
            "I used at least five past simple verbs (some irregular).",
            "I used *could* or *couldn't*.",
            "I used time expressions: *at the age of, later, in…*"
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "He was born in Guerrero in 1952.",
            "She grew up in a small town.",
            "He became the first Mexican in space.",
            "She could read at the age of three.",
            "Women couldn't go to university then.",
            "When did she win the medal?"
          ]
        },
        {
          type: "speak", title: "My hero",
          prompt: "Record a short presentation about the life of a person you admire. Talk about where they were born, what they did and why they are important to you.",
          language: ["My presentation is about…", "He / She was born in…", "When he / she was young,…", "At the age of…", "Later,…", "He / She could / couldn't…", "I admire him / her because…"],
          seconds: 90,
          checklist: ["use *was born*?", "use the past simple correctly?", "use time expressions?", "say why you admire the person?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe the main events of a person's life.", review: "Explanation: telling a life story" },
    { can: "I can use regular and irregular past verbs.", review: "Quick check" },
    { can: "I can use *could / couldn't* for past ability.", review: "Explanation: could / couldn't; Reading activity 2" },
    { can: "I can ask questions about someone's life.", review: "Explanation: questions; Writing activity 1" },
    { can: "I can understand a biography.", review: "Listening and Reading" },
    { can: "I can write a short biography.", review: "Writing activity 3" }
  ]
};
