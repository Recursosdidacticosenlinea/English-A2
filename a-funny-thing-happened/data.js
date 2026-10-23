window.UNIT = {
  slug: "a-funny-thing-happened",
  number: 9,
  title: "A Funny Thing Happened…",
  level: "A2",
  minutes: 50,
  speakers: { "Rodrigo": "m", "Camila": "f", "Host": "f", "Kevin": "m", A: "m", B: "f" },
  focus: ["telling stories in the past", "adverbs of manner: quickly, carefully, badly", "sequencers: first, then, suddenly, in the end", "time clauses: when, as soon as, after", "reacting: No way! What happened next?"],

  presentation: {
    scene: "😂🚌🐕📱",
    situation: "Rodrigo tells his friend Camila about a crazy morning he had on the way to a job interview.",
    warmup: {
      prompt: "What bad or funny things can happen on a busy morning? Choose all.",
      options: ["miss the bus", "forget your keys", "spill coffee", "lose your phone", "get lost", "fall asleep", "break something", "meet a famous person", "get wet in the rain", "wear different shoes"],
      response: "We all have days like that! In this unit you'll learn to tell a story in English."
    },
    dialogueTitle: "The worst morning",
    dialogue: [
      { who: "Rodrigo", line: "You won't believe what happened yesterday! I had a job interview at nine." },
      { who: "Camila", line: "Oh no. *What happened*?" },
      { who: "Rodrigo", line: "*First*, my alarm didn't ring, so I got dressed *really quickly* and ran to the bus stop." },
      { who: "Camila", line: "And?" },
      { who: "Rodrigo", line: "*As soon as* I got on the bus, I spilled coffee on my white shirt!" },
      { who: "Camila", line: "*No way!*" },
      { who: "Rodrigo", line: "*Then*, *when* I arrived at the office, I realized I had different shoes — one black and one brown!" },
      { who: "Camila", line: "Ha ha! *What happened next*?" },
      { who: "Rodrigo", line: "*Suddenly*, the manager walked in… wearing different shoes too! We laughed *loudly*, and *in the end*, I got the job!" }
    ]
  },

  objectives: [
    "I can tell a short story in the past.",
    "I can use adverbs of manner to describe how people did things.",
    "I can order events with sequencers and time clauses.",
    "I can react to someone's story."
  ],

  explanation: {
    vocabTitle: "Story words",
    vocab: [
      { word: "suddenly", icon: "⚡" }, { word: "quickly", icon: "🏃" }, { word: "slowly", icon: "🐢" },
      { word: "carefully", icon: "🔍" }, { word: "loudly", icon: "📢" }, { word: "quietly", icon: "🤫" },
      { word: "badly", icon: "👎" }, { word: "well", icon: "👍" }, { word: "happily", icon: "😊" },
      { word: "luckily", icon: "🍀" }, { word: "unfortunately", icon: "😞" }, { word: "realize", icon: "💡" },
      { word: "spill", icon: "☕" }, { word: "drop", icon: "⬇️" }, { word: "in the end", icon: "🏁" }
    ],
    grammar: [
      {
        title: "Adverbs of manner",
        head: ["Adjective", "Adverb", "Example"],
        rows: [
          ["quick", "quick*ly*", "I got dressed *quickly*."],
          ["careful", "careful*ly*", "She drove *carefully*."],
          ["happy", "happ*ily*", "They lived *happily*."],
          ["good / fast / hard", "*well / fast / hard* (irregular)", "He played *well*. She works *hard*."]
        ],
        note: "Adverbs describe a verb and usually go after the verb or object: *She spoke English perfectly.*"
      },
      {
        title: "Ordering a story",
        head: ["Word", "Example"],
        rows: [
          ["*First, / At first,*", "*First*, my alarm didn't ring."],
          ["*Then, / After that,*", "*Then* I ran to the bus stop."],
          ["*Suddenly,*", "*Suddenly*, the manager walked in."],
          ["*Luckily, / Unfortunately,*", "*Luckily*, he laughed."],
          ["*In the end, / Finally,*", "*In the end*, I got the job."]
        ]
      },
      {
        title: "Time clauses",
        head: ["Word", "Example"],
        rows: [
          ["*when*", "*When* I arrived, I saw my shoes."],
          ["*as soon as* (= immediately after)", "*As soon as* I got on the bus, I spilled my coffee."],
          ["*after / before* + -ing or clause", "*After* the interview, I called my mom."]
        ],
        note: "If the time clause comes first, use a comma: *When I arrived, …*"
      }
    ],
    watchOut: [
      ["He drove very careful.", "He drove very carefully."],
      ["She speaks English very good.", "She speaks English very well."],
      ["In the finally, I got the job.", "In the end, I got the job."],
      ["As soon as I got on the bus I spill coffee.", "As soon as I got on the bus, I spilled coffee."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the adverb.",
      items: [
        "I ran [[quickly]] to the bus stop. (quick)",
        "Please close the door [[quietly]]. (quiet)",
        "She speaks English very [[well]]. (good)",
        "He drove [[carefully]] in the rain. (careful)",
        "We laughed [[loudly]]. (loud)",
        "They played [[badly]] and lost the game. (bad)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio show, listeners call to tell their funniest travel stories. Listen to Kevin.",
      title: "Radio: My funniest trip",
      script: [
        { who: "Host", line: "Our next caller is Kevin. Kevin, tell us your story!" },
        { who: "Kevin", line: "OK. Last summer I flew to Cancún with my friends. When we arrived at the hotel, I opened my suitcase and… it wasn't my suitcase!" },
        { who: "Host", line: "No way! Whose was it?" },
        { who: "Kevin", line: "It belonged to an old man. It was full of Hawaiian shirts! I called the airport quickly, but they couldn't find my bag." },
        { who: "Host", line: "So what did you do?" },
        { who: "Kevin", line: "I wore the Hawaiian shirts for three days! Everybody looked at me strangely. Then, on the fourth day, the old man arrived at our hotel with my suitcase." },
        { who: "Host", line: "That's amazing!" },
        { who: "Kevin", line: "In the end, we had dinner together. He was really funny. And he let me keep one shirt!" }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Put the words in order to make sentences from Kevin's story.",
          items: [
            { a: "Kevin flew to Cancún with his friends." },
            { a: "He opened the wrong suitcase." },
            { a: "He wore Hawaiian shirts for three days." },
            { a: "The old man arrived with his suitcase." },
            { a: "In the end, they had dinner together." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The suitcase belonged to a young woman.", a: false },
            { s: "The airport found Kevin's bag quickly.", a: false },
            { s: "People looked at Kevin strangely.", a: true },
            { s: "Kevin kept one shirt.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short story from a student writing competition.",
      title: "The Lost Dog",
      text: [
        { author: "by Paulina, 17", body: "Last Saturday I was walking home from the market when I saw a small white dog. It was shaking badly and it looked very hungry. I gave it some bread and it ate it quickly. The dog had a collar with a phone number, so I called it immediately." },
        { author: "", body: "A woman answered the phone and started crying happily. Her name was Señora Ruiz, and her dog, Copito, was lost for two days. As soon as she arrived, Copito jumped into her arms. She thanked me again and again. In the end, she invited me to her café, and now I have free coffee every Saturday!" }
      ],
      activities: [
        {
          type: "match", title: "Who or what?",
          prompt: "Match to make true sentences.",
          pairs: [
            ["The dog was shaking", "badly."],
            ["It ate the bread", "quickly."],
            ["Paulina called the number", "immediately."],
            ["Señora Ruiz started crying", "happily."]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "Where was Paulina walking from?", a: ["From the market.", "the market", "from the market", "She was walking home from the market."] },
            { q: "What did she give the dog?", a: ["Some bread.", "bread", "She gave it some bread.", "Bread."] },
            { q: "What was the dog's name?", a: ["Copito.", "Copito"] },
            { q: "What does Paulina have every Saturday now?", a: ["Free coffee.", "free coffee", "She has free coffee."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice story language, then write your own funny or strange story.",
      activities: [
        {
          type: "sort", title: "Beginning, middle or end?",
          prompt: "Where in a story do these words usually go?",
          bins: ["Beginning", "Middle", "End"],
          items: [
            { text: "Last summer,", bin: 0 }, { text: "One day,", bin: 0 }, { text: "First,", bin: 0 },
            { text: "Suddenly,", bin: 1 }, { text: "Then,", bin: 1 }, { text: "As soon as…", bin: 1 },
            { text: "In the end,", bin: 2 }, { text: "Finally,", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the sentences with the word in brackets. Put the time clause first.",
          items: [
            { q: "I got home. I called my mom. (as soon as)", a: ["As soon as I got home, I called my mom."] },
            { q: "I opened the door. I saw a cat. (when)", a: ["When I opened the door, I saw a cat."] },
            { q: "We finished the exam. We went for tacos. (after)", a: ["After we finished the exam, we went for tacos."] }
          ]
        },
        {
          type: "write", title: "My story",
          prompt: "Write a true or invented story about a funny, strange or bad day. Use sequencers, at least one time clause and three adverbs of manner. End with what happened in the end.",
          minWords: 70, maxWords: 130,
          model: "Last month I went to my cousin's wedding. First, I forgot the present at home, so I drove back quickly to get it. When I arrived at the church, the ceremony was starting. I walked in very quietly, but suddenly my phone started ringing loudly. Everybody turned around and looked at me! Unfortunately, it was my mom calling. Luckily, the bride laughed. In the end, I danced happily all night and nobody remembered my phone.",
          bank: ["Last month / One day,…", "First,…", "When I arrived,…", "As soon as…", "Suddenly,…", "Luckily / Unfortunately,…", "In the end,…"],
          checklist: [
            "I used sequencers: *first, then, suddenly, in the end*.",
            "I used *when* or *as soon as*.",
            "I used three adverbs of manner.",
            "My verbs are in the past."
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
            "You won't believe what happened yesterday!",
            "I got dressed really quickly.",
            "As soon as I got on the bus, I spilled my coffee.",
            "Suddenly, the manager walked in.",
            "No way! What happened next?",
            "In the end, I got the job."
          ]
        },
        {
          type: "speak", title: "Tell your story",
          prompt: "Record yourself telling a funny, strange or embarrassing story from your life (or an invented one). Use story words and adverbs.",
          language: ["You won't believe what happened…", "First,…", "When…", "Suddenly,…", "…quickly / loudly / carefully", "In the end,…"],
          seconds: 90,
          checklist: ["tell the events in order?", "use the past simple?", "use adverbs of manner?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can tell a short story in the past.", review: "Presentation; Writing activity 3" },
    { can: "I can form adverbs of manner.", review: "Explanation: adverbs of manner; Quick check" },
    { can: "I can use sequencers to order a story.", review: "Explanation: ordering a story; Writing activity 1" },
    { can: "I can use *when, as soon as, after*.", review: "Explanation: time clauses; Writing activity 2" },
    { can: "I can understand a story when I listen or read.", review: "Listening and Reading" },
    { can: "I can react to someone's story.", review: "Presentation dialogue" }
  ]
};
