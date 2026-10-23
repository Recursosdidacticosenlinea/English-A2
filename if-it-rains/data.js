window.UNIT = {
  slug: "if-it-rains",
  number: 47,
  title: "If It Rains…",
  level: "A2",
  minutes: 50,
  speakers: { "Majo": "f", "Rodrigo": "m", "Teacher": "f", "Paco": "m", A: "f", B: "m" },
  focus: ["first conditional: If + present, will + verb", "unless / as soon as / when + present", "possible future situations", "making plans with conditions", "What will you do if…?"],

  presentation: {
    scene: "🌦️⛺🤔📲",
    situation: "Majo and Rodrigo are planning a camping trip to La Malinche for the weekend, but the weather forecast is not clear.",
    warmup: {
      prompt: "What do you do if your plans go wrong? Choose all.",
      options: ["stay at home", "change the date", "find another activity", "call a friend", "watch a movie", "get angry", "cancel", "go anyway", "make a plan B", "laugh about it"],
      response: "Always have a plan B! In this unit you'll learn to talk about possible situations and their results."
    },
    dialogueTitle: "Plan B",
    dialogue: [
      { who: "Majo", line: "The forecast says 50% chance of rain on Saturday. *What will we do if it rains*?" },
      { who: "Rodrigo", line: "*If it rains, we'll stay* in the cabin and play board games." },
      { who: "Majo", line: "OK. But *if it's really cold, I won't sleep* in the tent!" },
      { who: "Rodrigo", line: "Don't worry. *If it's too cold, we'll rent* a room in the village." },
      { who: "Majo", line: "And *what if* the car breaks down?" },
      { who: "Rodrigo", line: "*We won't go unless* my brother checks the car first. He's a mechanic." },
      { who: "Majo", line: "Good. *I'll make* sandwiches *as soon as* I get home tonight." },
      { who: "Rodrigo", line: "Perfect. *If we're lucky, we'll see* the sunrise from the top!" }
    ]
  },

  objectives: [
    "I can use the first conditional for possible future situations.",
    "I can use *unless, as soon as* and *when* with the present.",
    "I can ask *What will you do if…?*",
    "I can make plans with conditions."
  ],

  explanation: {
    vocabTitle: "Plans and possibilities",
    vocab: [
      { word: "chance of rain", icon: "🌦️" }, { word: "forecast", icon: "📺" }, { word: "plan B", icon: "🅱️" },
      { word: "cancel", icon: "❌" }, { word: "postpone", icon: "⏭️" }, { word: "break down", icon: "🚗" },
      { word: "get lost", icon: "🗺️" }, { word: "miss the bus", icon: "🚌" }, { word: "be lucky", icon: "🍀" },
      { word: "tent", icon: "⛺" }, { word: "cabin", icon: "🛖" }, { word: "sunrise", icon: "🌅" },
      { word: "unless", icon: "🚫" }, { word: "as soon as", icon: "⚡" }, { word: "what if…?", icon: "❓" }
    ],
    grammar: [
      {
        title: "First conditional",
        head: ["If + present simple", "will / won't + verb"],
        rows: [
          ["*If* it *rains*,", "we*'ll stay* in the cabin."],
          ["*If* it*'s* too cold,", "I *won't sleep* in the tent."],
          ["*If* we *don't leave* early,", "we*'ll miss* the sunrise."],
          ["We*'ll see* the sunrise", "*if* we*'re* lucky. (no comma)"]
        ],
        note: "Never use *will* after *if*: *If it rains* — not *If it will rain*."
      },
      {
        title: "Unless, as soon as, when",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*unless* + present", "if not", "We won't go *unless* he checks the car. (= if he doesn't check)"],
          ["*as soon as* + present", "immediately after", "I'll make sandwiches *as soon as* I get home."],
          ["*when* + present", "sure it will happen", "I'll call you *when* I arrive."],
          ["question", "", "*What will you do if* it rains?"]
        ]
      }
    ],
    watchOut: [
      ["If it will rain, we'll stay home.", "If it rains, we'll stay home."],
      ["If you don't hurry, you miss the bus.", "If you don't hurry, you'll miss the bus."],
      ["I'll call you when I will arrive.", "I'll call you when I arrive."],
      ["Unless you don't study, you'll fail.", "Unless you study, you'll fail."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the verb.",
      items: [
        "If it [[rains]], we'll stay at home. (rain)",
        "If you study hard, you [['ll pass|will pass]] the exam. (pass)",
        "I won't go unless you [[come]] with me. (come)",
        "I'll text you as soon as I [[arrive]]. (arrive)",
        "What [[will]] you do if you miss the bus?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A teacher explains the plans for a school trip and answers questions. Listen.",
      title: "The school trip",
      script: [
        { who: "Teacher", line: "OK, everyone. Tomorrow we're going to the Cacaxtla ruins. The bus leaves at seven. If you're late, the bus won't wait!" },
        { who: "Paco", line: "What will happen if it rains?" },
        { who: "Teacher", line: "If it rains, we'll visit the museum first and the ruins later. Bring an umbrella." },
        { who: "Paco", line: "Do we need to bring money?" },
        { who: "Teacher", line: "Only if you want to buy souvenirs. Lunch is included. But you can't come unless your parents sign the permission form." },
        { who: "Paco", line: "What if we get lost?" },
        { who: "Teacher", line: "You won't get lost if you stay with your group. And if you have a problem, call me immediately. I'll send you my number as soon as we finish class." }
      ],
      activities: [
        {
          type: "match", title: "If…",
          prompt: "Match to make the teacher's sentences.",
          pairs: [
            ["If you're late,", "the bus won't wait."],
            ["If it rains,", "they'll visit the museum first."],
            ["You can't come", "unless your parents sign the form."],
            ["You won't get lost", "if you stay with your group."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The bus leaves at eight.", a: false },
            { s: "Lunch is included.", a: true },
            { s: "Students must bring money for lunch.", a: false },
            { s: "The teacher will send her number after class.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a fun personality quiz from a magazine.",
      title: "Quiz: What will you do if…?",
      text: [
        { author: "Question 1", body: "If you find 1,000 pesos in the street, what will you do? a) I'll take it to the police. b) I'll keep it and buy something nice. c) I'll share it with my friends." },
        { author: "Question 2", body: "If your friend tells you a secret, will you tell anyone? a) No, never. b) Only my best friend. c) I'll try not to, but I'm bad at secrets!" },
        { author: "Results", body: "Mostly a: You're honest and responsible. People will trust you if they have a problem. Mostly b: You're practical — you think of yourself first. Mostly c: You're fun and social, but be careful: if you share too much, people won't tell you their secrets!" }
      ],
      activities: [
        {
          type: "match", title: "Which result?",
          prompt: "Match the answers with the result.",
          pairs: [
            ["mostly a", "honest and responsible"],
            ["mostly b", "practical"],
            ["mostly c", "fun and social"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Answer 1a means you'll keep the money.", a: false },
            { s: "People will trust 'mostly a' people with problems.", a: true },
            { s: "'Mostly c' people are very good at keeping secrets.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the first conditional, then write your own plan B.",
      activities: [
        {
          type: "rewrite", title: "Make a conditional",
          prompt: "Join the ideas with *if* and *will*.",
          items: [
            { q: "it / be sunny → we / go to the beach", a: ["If it's sunny, we'll go to the beach.", "If it is sunny, we will go to the beach."] },
            { q: "you / not hurry → you / miss the bus", a: ["If you don't hurry, you'll miss the bus.", "If you do not hurry, you will miss the bus."] },
            { q: "I / have time → I / call you", a: ["If I have time, I'll call you.", "If I have time, I will call you."] },
            { q: "she / not study → she / not pass", a: ["If she doesn't study, she won't pass.", "If she does not study, she will not pass."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What will you do if it rains?" },
            { a: "If it rains, we'll stay at home." },
            { a: "I'll call you as soon as I arrive." },
            { a: "We won't go unless the weather is good." },
            { a: "If we're lucky, we'll see the sunrise." }
          ]
        },
        {
          type: "write", title: "Plan A and plan B",
          prompt: "Write about a plan for next weekend (a trip, a party, a sports event…). Describe plan A, then three things that could go wrong and what you will do (plan B). Use *if, unless, as soon as*.",
          minWords: 60, maxWords: 110,
          model: "Next Saturday my friends and I are going to have a picnic in the Ecological Park. If the weather is good, we'll play soccer and have lunch on the grass. If it rains, we'll go to my house and watch movies instead. If some friends can't come, we'll invite my cousins. We won't go to the park unless Dani brings the ball! I'll send everyone a message as soon as I check the forecast.",
          bank: ["Next … we're going to…", "If the weather is good, we'll…", "If it rains, we'll…", "If …, we won't…", "We won't … unless…", "I'll … as soon as…"],
          checklist: [
            "I used the first conditional at least three times.",
            "I didn't use *will* after *if*.",
            "I used *unless* or *as soon as*.",
            "I described plan A and plan B."
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
            "What will we do if it rains?",
            "If it rains, we'll stay in the cabin.",
            "If it's too cold, I won't sleep in the tent.",
            "We won't go unless he checks the car.",
            "I'll make sandwiches as soon as I get home.",
            "If we're lucky, we'll see the sunrise."
          ]
        },
        {
          type: "speak", title: "What will you do if…?",
          prompt: "Record your answers to these questions with full sentences: What will you do if it rains this weekend? What will you do if you pass all your exams? What will you do if you get a lot of money? What will you do if you miss the bus tomorrow?",
          language: ["If it rains this weekend, I'll…", "If I pass all my exams, I'll…", "If I get a lot of money, I'll…", "If I miss the bus, I'll…", "I won't… unless…"],
          seconds: 75,
          checklist: ["answer all four questions?", "use *if* + present and *will*?", "use *unless* or *as soon as*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the first conditional.", review: "Explanation; Quick check" },
    { can: "I don't use *will* after *if*.", review: "Explanation: watch out!" },
    { can: "I can use *unless, as soon as, when*.", review: "Explanation; Listening activity 1" },
    { can: "I can ask *What will you do if…?*", review: "Presentation; Reading" },
    { can: "I can make conditional sentences from ideas.", review: "Writing activity 1" },
    { can: "I can write a plan with a plan B.", review: "Writing activity 3" }
  ]
};
