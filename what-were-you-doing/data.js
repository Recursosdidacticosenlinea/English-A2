window.UNIT = {
  slug: "what-were-you-doing",
  number: 7,
  title: "What Were You Doing?",
  level: "A2",
  minutes: 55,
  speakers: { "Officer Cruz": "f", "Mr. Bravo": "m", "Mrs. Solís": "f", "Ulises": "m", "Narrator": "f", "Gael": "m", "Ivonne": "f", A: "f", B: "m" },
  focus: ["past continuous: was / were + -ing", "past continuous vs. past simple", "when and while", "What were you doing at 8 p.m.?", "telling a story"],

  presentation: {
    scene: "🕵️‍♀️🔦🖼️❓",
    situation: "Last night, someone took a famous painting from a small museum in Puebla's city center. Officer Cruz is asking people questions.",
    warmup: {
      prompt: "What were you doing yesterday at 8 p.m.? Choose everything that is true.",
      options: ["having dinner", "watching TV", "doing homework", "working", "traveling home", "talking on the phone", "playing video games", "sleeping", "taking a shower", "studying English", "reading", "cooking"],
      response: "Great! In this unit you'll learn to describe actions in progress in the past and tell stories."
    },
    dialogueTitle: "The missing painting",
    dialogue: [
      { who: "Officer Cruz", line: "Mr. Bravo, *what were you doing* last night at nine o'clock?" },
      { who: "Mr. Bravo", line: "*I was cleaning* the second floor of the museum. *I was listening* to music." },
      { who: "Officer Cruz", line: "*Were you working* alone?" },
      { who: "Mr. Bravo", line: "No, *I wasn't*. Mrs. Solís *was working* too. She *was closing* the gift shop." },
      { who: "Officer Cruz", line: "Mrs. Solís, is that true?" },
      { who: "Mrs. Solís", line: "Yes. *While I was counting* the money, I *heard* a strange noise." },
      { who: "Officer Cruz", line: "What did you do?" },
      { who: "Mrs. Solís", line: "*I went* upstairs. *When I arrived*, the window *was* open and the painting *wasn't* there!" }
    ]
  },

  objectives: [
    "I can describe actions in progress at a time in the past.",
    "I can form the past continuous with *was / were* + *-ing*.",
    "I can combine the past continuous and the past simple with *when* and *while*.",
    "I can tell a short story about something that happened to me."
  ],

  explanation: {
    vocabTitle: "Story words",
    vocab: [
      { word: "suddenly", icon: "⚡" }, { word: "while", icon: "⏳" }, { word: "when", icon: "🕘" },
      { word: "a noise", icon: "🔊" }, { word: "the lights went out", icon: "🌑" }, { word: "fall", icon: "🍂", say: "fall, fell" },
      { word: "break", icon: "💔", say: "break, broke" }, { word: "drop", icon: "📉", say: "drop, dropped" }, { word: "ring", icon: "📞", say: "ring, rang" },
      { word: "hear", icon: "👂", say: "hear, heard" }, { word: "see", icon: "👀", say: "see, saw" }, { word: "run away", icon: "🏃", say: "run away, ran away" },
      { word: "a thief", icon: "🦹" }, { word: "a witness", icon: "🙋" }, { word: "an accident", icon: "🚑" }
    ],
    grammar: [
      {
        title: "Past continuous: form",
        head: ["", "Example"],
        rows: [
          ["I / he / she / it", "I *was reading*. She *wasn't sleeping*."],
          ["you / we / they", "They *were playing*. We *weren't listening*."],
          ["question", "*Were* you *working*? – Yes, I *was*. / No, I *wasn't*."],
          ["Wh- question", "*What were* you *doing* at 9 p.m.?"]
        ],
        note: "Use it for an action **in progress** at a specific time in the past: *At 8 p.m. I was having dinner.*"
      },
      {
        title: "Past continuous + past simple",
        head: ["Long action (past continuous)", "Short action (past simple)"],
        rows: [
          ["*I was walking* home…", "…*when* it *started* to rain."],
          ["*While she was cooking*,…", "…the phone *rang*."],
          ["*We were watching* a movie…", "…*when* the lights *went* out."]
        ],
        note: "*While* + long action (past continuous). *When* + short action (past simple). The short action interrupts the long one."
      },
      {
        title: "Two actions at the same time",
        head: ["Form", "Example"],
        rows: [
          ["*while* + past continuous, past continuous", "*While* I *was studying*, my brother *was playing* video games."]
        ],
        note: "Don't use the past continuous with *know, like, want, understand*: *I wanted a coffee.* (not *I was wanting*)."
      }
    ],
    watchOut: [
      ["I was study when you called.", "I was studying when you called."],
      ["They was playing soccer.", "They were playing soccer."],
      ["While I walked, I was seeing an accident.", "While I was walking, I saw an accident."],
      ["What you were doing?", "What were you doing?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the past continuous or the past simple.",
      items: [
        "At 10 p.m. I [[was sleeping]]. (sleep)",
        "We [[were having]] dinner when the lights went out. (have)",
        "While she was running, she [[fell]]. (fall)",
        "[[Were]] you listening to me? – No, I wasn't, sorry!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Officer Cruz talks to two more witnesses. Listen and complete her notes.",
      title: "The witnesses",
      script: [
        { who: "Officer Cruz", line: "Ulises, you live across the street from the museum. What were you doing last night at nine?" },
        { who: "Ulises", line: "I was walking my dog. It was raining a little, so I was wearing a big raincoat." },
        { who: "Officer Cruz", line: "Did you see anything strange?" },
        { who: "Ulises", line: "Yes. While I was waiting at the corner, I saw a man with a long box. He was getting into a white car." },
        { who: "Officer Cruz", line: "Thank you. And you, Ivonne? You work at the café next door." },
        { who: "Ivonne", line: "Yes. At nine, I was washing the cups and my boss was counting the money. Suddenly, the alarm of the museum started." },
        { who: "Officer Cruz", line: "What did you do?" },
        { who: "Ivonne", line: "I ran to the window. A white car was leaving very fast. I took a photo of it with my phone!" },
        { who: "Officer Cruz", line: "Excellent! Can I see it?" }
      ],
      activities: [
        {
          type: "sort", title: "Long or short action?",
          prompt: "Was it a long action in progress or a short action that happened?",
          bins: ["In progress (was / were + -ing)", "Short action (past simple)"],
          items: [
            { text: "Ulises was walking his dog.", bin: 0 }, { text: "It was raining a little.", bin: 0 },
            { text: "A man was getting into a white car.", bin: 0 }, { text: "Ivonne was washing the cups.", bin: 0 },
            { text: "Ulises saw a man with a long box.", bin: 1 }, { text: "The alarm started.", bin: 1 },
            { text: "Ivonne ran to the window.", bin: 1 }, { text: "She took a photo.", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Officer Cruz's notes",
          prompt: "Listen again and complete with one word.",
          items: [
            "Ulises was walking his [[dog]].",
            "He was wearing a big [[raincoat]].",
            "The man was carrying a long [[box]].",
            "The car was [[white]].",
            "Ivonne's boss was counting the [[money]].",
            "Ivonne took a photo with her [[phone]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a story from the BUAP student magazine's section *It Happened to Me*.",
      title: "It happened to me: the worst first day",
      text: [
        { body: "It was my first day at university. I was so nervous! I woke up late because my alarm didn't ring. While I was taking a shower, the water suddenly went cold. Great start!" },
        { body: "I ran to the bus stop. While I was waiting, it started to rain, and I didn't have an umbrella. When I finally got on the bus, I was completely wet." },
        { body: "I arrived ten minutes late. The teacher was writing on the board and all the students were listening. When I opened the door, everybody turned and looked at me. I wanted to disappear!" },
        { body: "I sat down next to a girl. She was smiling. \"Don't worry,\" she said, \"I was late too.\" Her name was Ivonne. Now, three years later, she's my best friend. So, it wasn't the worst day after all. – *Gael, Engineering*" }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Make sentences from the story.",
          items: [
            { a: "His alarm didn't ring." },
            { a: "The water went cold while he was taking a shower." },
            { a: "It started to rain while he was waiting." },
            { a: "The teacher was writing on the board." },
            { a: "A girl was smiling at him." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false?",
          items: [
            { s: "Gael woke up early.", a: false },
            { s: "He had an umbrella.", a: false },
            { s: "The students were listening to the teacher when he arrived.", a: true },
            { s: "Ivonne was late too.", a: true },
            { s: "Gael and Ivonne aren't friends now.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice combining the two tenses, then write your own story.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the two sentences with the word in parentheses.",
          items: [
            { q: "I was cooking. I cut my finger. (when)", a: ["I was cooking when I cut my finger."] },
            { q: "She was driving. She saw an accident. (while)", a: ["While she was driving, she saw an accident.", "While she was driving she saw an accident.", "She saw an accident while she was driving."] },
            { q: "We were sleeping. The earthquake started. (when)", a: ["We were sleeping when the earthquake started."] },
            { q: "They were playing soccer. It started to rain. (while)", a: ["While they were playing soccer, it started to rain.", "While they were playing soccer it started to rain.", "It started to rain while they were playing soccer."] },
            { q: "I was studying. My brother was watching TV. (while)", a: ["While I was studying, my brother was watching TV.", "While I was studying my brother was watching TV.", "My brother was watching TV while I was studying."] }
          ]
        },
        {
          type: "gap", title: "Complete the story",
          prompt: "Complete with the past continuous or past simple of the verbs in parentheses.",
          items: [
            "Last Saturday, I [[was riding]] my bike in the park. (ride)",
            "The sun [[was shining]] and birds were singing. (shine)",
            "Suddenly, a dog [[ran]] in front of me. (run)",
            "I [[fell]] off my bike and hurt my knee. (fall)",
            "While I [[was sitting]] on the grass, the dog's owner came to help me. (sit)"
          ]
        },
        {
          type: "write", title: "It happened to me",
          prompt: "Write a story for the magazine: a funny, scary or embarrassing moment. Describe the scene with the past continuous, then tell what happened with the past simple.",
          minWords: 70, maxWords: 100,
          model: "Last December, my family and I were having dinner at my aunt's house. Everybody was talking and laughing, and my little cousin was playing with a ball. Suddenly, the ball hit the Christmas tree and the tree fell on the table! While we were cleaning the mess, the dog was eating the turkey from the floor. We didn't have a turkey dinner, but now it's our favorite family story.",
          bank: ["Last…, I was…", "Everybody was…", "Suddenly,", "When…,", "While I was…,", "In the end,"],
          checklist: [
            "I described the scene with *was / were + -ing*.",
            "I used the past simple for the main events.",
            "I used *when* and *while* at least once each.",
            "I wrote a clear ending."
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
            "What were you doing at eight last night?",
            "I was watching a movie.",
            "While I was cooking, the phone rang.",
            "She was walking home when it started to rain.",
            "We weren't sleeping.",
            "What happened next?"
          ]
        },
        {
          type: "speak", title: "Tell your story",
          prompt: "Record yourself for about one minute. Tell a short story about a surprising, funny or scary moment in your life. Start by describing the scene.",
          language: ["It was…", "I was … with…", "We were…ing", "Suddenly…", "When…", "While…", "In the end…"],
          seconds: 90,
          checklist: ["describe the scene with the past continuous?", "tell the events with the past simple?", "use *when* or *while*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the past continuous with *was / were + -ing*.", review: "Explanation: past continuous form" },
    { can: "I can say what I was doing at a time in the past.", review: "Explanation: past continuous; Speaking activity 1 (listen and repeat)" },
    { can: "I can choose between the past continuous and the past simple.", review: "Explanation: past continuous + past simple; Listening activity 1" },
    { can: "I can use *when* and *while* correctly.", review: "Writing activity 1" },
    { can: "I can understand a story told in the past.", review: "Reading: the worst first day" },
    { can: "I can tell a short story in writing or in a recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
