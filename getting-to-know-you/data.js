window.UNIT = {
  slug: "getting-to-know-you",
  number: 1,
  title: "Getting to Know You",
  level: "A2",
  minutes: 50,
  speakers: { "Sofía": "f", "Marco": "m", "Host": "f", "Lin": "f", "Pablo": "m", A: "f", B: "m" },
  focus: ["question forms: Do you…? / Are you…? / Have you got…?", "Wh- questions with be, do and have", "subject questions: Who lives…? What happened?", "follow-up questions: Really? Why?", "small talk"],

  presentation: {
    scene: "☕🗣️🤝🌍",
    situation: "Sofía and Marco are new members of a language exchange group. They meet at a café and start talking.",
    warmup: {
      prompt: "What do you ask a new person? Choose the questions you use.",
      options: ["What's your name?", "Where are you from?", "What do you do?", "Do you have brothers or sisters?", "What do you do in your free time?", "Why are you learning English?", "Have you got any pets?", "Where do you live?", "Do you like music?", "How old are you?"],
      response: "Great questions! In this unit you'll practice making all kinds of questions to get to know people."
    },
    dialogueTitle: "At the language exchange",
    dialogue: [
      { who: "Marco", line: "Hi, I'm Marco. *Is this* your first time here?" },
      { who: "Sofía", line: "Yes, it is. I'm Sofía. *Where are you from*, Marco?" },
      { who: "Marco", line: "I'm from Naples, in Italy. I'm here for a year. *What do you do*?" },
      { who: "Sofía", line: "I'm studying architecture at BUAP. *Why are you* in Puebla?" },
      { who: "Marco", line: "I'm working for a car company. *Do you speak* any Italian?" },
      { who: "Sofía", line: "Just *ciao* and *pizza*! *Who teaches* the Italian class here?" },
      { who: "Marco", line: "A woman from Rome, I think. *Have you got* time for a coffee after the meeting?" },
      { who: "Sofía", line: "Sure! *What kind of* coffee *do* Italians drink in the afternoon?" },
      { who: "Marco", line: "Ha! Never a cappuccino after twelve!" }
    ]
  },

  objectives: [
    "I can ask questions with *be, do* and *have got* correctly.",
    "I can use Wh- questions to ask for information.",
    "I can make subject questions: *Who teaches…? What happened?*",
    "I can keep a conversation going with follow-up questions."
  ],

  explanation: {
    vocabTitle: "Small talk topics",
    vocab: [
      { word: "hometown", icon: "🏘️" }, { word: "job / studies", icon: "💼" }, { word: "free time", icon: "🎮" },
      { word: "family", icon: "👨‍👩‍👧" }, { word: "languages", icon: "🗣️" }, { word: "travel", icon: "✈️" },
      { word: "food", icon: "🍝" }, { word: "music", icon: "🎶" }, { word: "pets", icon: "🐶" },
      { word: "weekend", icon: "🗓️" }, { word: "Really?", icon: "😮" }, { word: "Why?", icon: "❓" },
      { word: "How come?", icon: "🤔" }, { word: "Me too!", icon: "🙌" }, { word: "What about you?", icon: "👉" }
    ],
    grammar: [
      {
        title: "Questions with be, do and have got",
        head: ["Verb", "Question", "Answer"],
        rows: [
          ["*be*", "*Are* you a student? *Is* he Italian?", "Yes, I am. / No, he isn't."],
          ["*do / does*", "*Do* you speak Italian? *Does* she work here?", "Yes, I do. / No, she doesn't."],
          ["*have got*", "*Have* you *got* a car? *Has* she *got* kids?", "Yes, I have. / No, she hasn't."],
          ["present continuous", "*Are* you *working* at the moment?", "Yes, I am."]
        ],
        note: "Word order: (question word) + *auxiliary* + subject + verb. *Where do you live?* — never *Where you live?*"
      },
      {
        title: "Subject and object questions",
        head: ["Object question (uses do)", "Subject question (no do)"],
        rows: [
          ["*Who do* you *know* here? – I know Marco.", "*Who knows* Marco? – Sofía knows him."],
          ["*What does* she *teach*? – Italian.", "*Who teaches* Italian? – A woman from Rome."],
          ["*What did* you *see*? – A movie.", "*What happened*? – My phone broke."]
        ],
        note: "When *who* or *what* is the subject, don't use *do / does / did*: *Who lives with you?* — never *Who does live with you?*"
      },
      {
        title: "Keeping the conversation going",
        head: ["Strategy", "Example"],
        rows: [
          ["show interest", "*Really? / That's interesting! / Cool!*"],
          ["ask why", "*Why? / How come?*"],
          ["ask for more", "*What's it like? / Tell me more.*"],
          ["return the question", "*What about you? / And you?*"]
        ]
      }
    ],
    watchOut: [
      ["Where you live?", "Where do you live?"],
      ["Who does teach Italian?", "Who teaches Italian?"],
      ["What means 'ciao'?", "What does 'ciao' mean?"],
      ["Do you have got a car?", "Have you got a car? / Do you have a car?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *are, is, do, does, have* or *has*.",
      items: [
        "Where [[do]] you live?",
        "[[Is]] your sister a student?",
        "[[Have]] you got any brothers?",
        "What [[does]] your dad do?",
        "[[Are]] you working this week?",
        "[[Has]] Marco got a car in Mexico?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A podcast host interviews two international students who live in Puebla. Listen.",
      title: "Podcast: New in town",
      script: [
        { who: "Host", line: "Welcome to New in Town! Today I'm talking to Lin and Pablo. Lin, where are you from?" },
        { who: "Lin", line: "I'm from Taipei, in Taiwan. I'm studying Spanish and business here." },
        { who: "Host", line: "How long are you staying?" },
        { who: "Lin", line: "Ten months. I live with a Mexican family. They have two kids, so I practice Spanish all the time!" },
        { who: "Host", line: "Pablo, you're from Spain. Do you find Mexican Spanish different?" },
        { who: "Pablo", line: "Yes, very! Mexicans use a lot of words I don't know, like 'chido' and 'ahorita'." },
        { who: "Host", line: "Ha! What do you do here?" },
        { who: "Pablo", line: "I teach English at a language school. And at weekends I play in a band." },
        { who: "Host", line: "Who plays with you?" },
        { who: "Pablo", line: "Two Mexican guys and a girl from Canada. We play rock music in bars downtown." }
      ],
      activities: [
        {
          type: "sort", title: "Lin or Pablo?",
          prompt: "Sort the information.",
          bins: ["Lin", "Pablo"],
          items: [
            { text: "from Taiwan", bin: 0 }, { text: "studies business", bin: 0 }, { text: "lives with a family", bin: 0 }, { text: "staying ten months", bin: 0 },
            { text: "from Spain", bin: 1 }, { text: "teaches English", bin: 1 }, { text: "plays in a band", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write the question for each answer from the podcast.",
          items: [
            { q: "Ten months. (How long…?)", a: ["How long are you staying?", "How long are you staying here?"] },
            { q: "She lives with a Mexican family. (Who… with?)", a: ["Who does she live with?", "Who does Lin live with?"] },
            { q: "He teaches English. (What…?)", a: ["What does he do?", "What does Pablo do?", "What does he teach?", "What does Pablo teach?"] },
            { q: "Two Mexican guys and a Canadian girl play with him. (Who…?)", a: ["Who plays with him?", "Who plays with Pablo?", "Who plays in the band?"] }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the profiles on the language exchange group's website.",
      title: "Meet our members",
      text: [
        { author: "Ji-woo, 27 · from Busan, Korea", body: "I'm a graphic designer. I work from home, so I want to meet people! I'm learning Spanish because my boyfriend is Mexican. I've got a cat called Kimchi. Ask me about K-pop!" },
        { author: "Ernesto, 45 · from Puebla", body: "I'm a doctor. I need English for medical conferences. I don't have much free time, but I love cycling and old movies. Who wants to practice on Saturday mornings?" },
        { author: "Claire, 22 · from Lyon, France", body: "I'm an exchange student at UDLAP. I'm studying international relations. I speak French, English and a little Spanish. What do Mexicans do on weekends? Show me!" }
      ],
      activities: [
        {
          type: "sort", title: "Who is it?",
          prompt: "Put each piece of information under the right person.",
          bins: ["Ji-woo", "Ernesto", "Claire"],
          items: [
            { text: "works from home", bin: 0 }, { text: "has got a cat", bin: 0 }, { text: "likes K-pop", bin: 0 },
            { text: "needs English for conferences", bin: 1 }, { text: "loves old movies", bin: 1 }, { text: "goes cycling", bin: 1 },
            { text: "speaks three languages", bin: 2 }, { text: "studies international relations", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Ji-woo is learning Spanish for her boyfriend.", a: true },
            { s: "Ernesto has a lot of free time.", a: false },
            { s: "Claire studies at BUAP.", a: false },
            { s: "Claire wants to know about Mexican weekends.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice question forms, then write your own profile with questions for other members.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Where does your family live?" },
            { a: "Who teaches the Italian class?" },
            { a: "Have you got any pets?" },
            { a: "What are you studying at the moment?" },
            { a: "Why are you learning English?" }
          ]
        },
        {
          type: "rewrite", title: "Correct the questions",
          prompt: "Each question has one mistake. Write it correctly.",
          items: [
            { q: "Where you work?", a: ["Where do you work?"] },
            { q: "Who does live with you?", a: ["Who lives with you?"] },
            { q: "What means this word?", a: ["What does this word mean?"] },
            { q: "Does she has a car?", a: ["Does she have a car?"] },
            { q: "Are you speak French?", a: ["Do you speak French?"] }
          ]
        },
        {
          type: "write", title: "My member profile",
          prompt: "Write a profile for the language exchange website. Say who you are, what you do, why you're learning English and what you like. Finish with two questions for other members (one with *do*, one subject question with *who*).",
          minWords: 50, maxWords: 100,
          model: "Hi! I'm Daniela, I'm 24 and I'm from Tlaxcala. I'm a nurse, and at the moment I'm working at a hospital in Puebla. I'm learning English because I want to work in Canada one day. In my free time I go running and watch Korean dramas. Questions for you: Do you like running? Who wants to watch a movie in English with me?",
          bank: ["Hi! I'm…", "I'm from…", "At the moment I'm…", "I'm learning English because…", "In my free time I…", "Do you…?", "Who wants to…?"],
          checklist: [
            "I wrote about my job or studies and my free time.",
            "I used the present continuous for *now / at the moment*.",
            "I wrote a question with *do* and a subject question with *who*.",
            "My questions have the correct word order."
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
            "Is this your first time here?",
            "Where are you from?",
            "What do you do in your free time?",
            "Who teaches the Italian class?",
            "Have you got time for a coffee?",
            "Really? That's interesting!"
          ]
        },
        {
          type: "speak", title: "Twenty questions about me",
          prompt: "Record yourself answering these questions in full sentences: Where are you from? What do you do? Who do you live with? What are you doing these days? What do you like doing on weekends? Why are you learning English? Add one extra detail to each answer.",
          language: ["I'm from…", "I'm a… / I'm studying…", "I live with…", "These days I'm…", "On weekends I usually…", "I'm learning English because…"],
          seconds: 90,
          checklist: ["answer all six questions?", "use the present simple and the present continuous?", "add extra details?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can ask questions with *be, do* and *have got*.", review: "Explanation: questions; Quick check" },
    { can: "I can use Wh- questions with the correct word order.", review: "Writing activities 1 and 2" },
    { can: "I can make subject questions with *who* and *what*.", review: "Explanation: subject and object questions" },
    { can: "I can keep a conversation going.", review: "Explanation: keeping the conversation going" },
    { can: "I can understand people introducing themselves.", review: "Listening and Reading" },
    { can: "I can write a profile and say my answers aloud.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
