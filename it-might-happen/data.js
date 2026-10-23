window.UNIT = {
  slug: "it-might-happen",
  number: 48,
  title: "It Might Happen",
  level: "A2",
  minutes: 50,
  speakers: { "Ximena": "f", "Ale": "m", "Host": "m", "Dr. Paz": "f", A: "f", B: "m" },
  focus: ["might / may / might not for possibility", "will / won't vs. might", "maybe / perhaps / I'm not sure", "uncertain plans", "I might… or I might…"],

  presentation: {
    scene: "🤷‍♀️🎓🗺️❓",
    situation: "Ximena and Ale are finishing university. Ale doesn't know what he's going to do next.",
    warmup: {
      prompt: "How sure are you about your plans for next year? Choose all that apply.",
      options: ["I might change jobs", "I might move house", "I might travel", "I might study something new", "I might buy a car", "I might get a pet", "I might start a business", "I might learn a language", "I'm not sure", "I know exactly"],
      response: "Life is full of possibilities! In this unit you'll learn to talk about things you're not sure about."
    },
    dialogueTitle: "After graduation",
    dialogue: [
      { who: "Ximena", line: "So, Ale, what are you going to do after graduation?" },
      { who: "Ale", line: "*I'm not sure*. *I might look for* a job in Mexico City, or *I might stay* in Puebla." },
      { who: "Ximena", line: "*Might* you study a master's?" },
      { who: "Ale", line: "*Maybe*. *I may apply* for a scholarship in Canada, but *I might not get* it. It's very competitive." },
      { who: "Ximena", line: "I think you'll get it. Your grades are great!" },
      { who: "Ale", line: "Thanks. What about you?" },
      { who: "Ximena", line: "*I'm definitely going to* work at my aunt's company. And next year *I might travel* to Asia with my sister." },
      { who: "Ale", line: "Lucky you! *I may visit* you in Japan… if I have money!" }
    ]
  },

  objectives: [
    "I can talk about possibility with *might / may*.",
    "I can use *might not / may not* for negative possibility.",
    "I can compare certainty: *will, going to, might*.",
    "I can talk about uncertain plans."
  ],

  explanation: {
    vocabTitle: "Possibilities",
    vocab: [
      { word: "graduation", icon: "🎓" }, { word: "scholarship", icon: "🏅" }, { word: "master's degree", icon: "📜" },
      { word: "apply for", icon: "📝" }, { word: "look for a job", icon: "🔍" }, { word: "move abroad", icon: "✈️" },
      { word: "competitive", icon: "🏁" }, { word: "decision", icon: "⚖️" }, { word: "opportunity", icon: "🚪" },
      { word: "maybe / perhaps", icon: "🤔" }, { word: "possibly", icon: "❔" }, { word: "certainly", icon: "✅" },
      { word: "I'm not sure", icon: "🤷" }, { word: "It depends", icon: "↔️" }, { word: "We'll see", icon: "👀" }
    ],
    grammar: [
      {
        title: "Might / may",
        head: ["", "Example"],
        rows: [
          ["affirmative (maybe yes)", "I *might* look for a job in Mexico City."],
          ["", "I *may* apply for a scholarship."],
          ["negative (maybe no)", "I *might not* get it. / It *may not* rain."],
          ["question (less common)", "*Do you think* you'll study a master's?"]
        ],
        note: "*might* and *may* mean the same: 50% possible. They don't change: *She might go* (no -s). No contraction with *may not*."
      },
      {
        title: "How sure?",
        head: ["Certainty", "Example"],
        rows: [
          ["100% ✅", "I*'m definitely going to* work there. / It *will* happen."],
          ["70%", "I*'ll probably* stay in Puebla."],
          ["50% 🤷", "I *might / may* travel to Asia."],
          ["30%", "I *might not* get the scholarship."],
          ["0% ❌", "I *definitely won't* live with my parents."]
        ]
      }
    ],
    watchOut: [
      ["I might to travel.", "I might travel."],
      ["She mights go.", "She might go."],
      ["Maybe I will might go.", "I might go. / Maybe I'll go."],
      ["I mayn't come.", "I may not come."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *might, might not, will* or *won't*.",
      items: [
        "Take an umbrella. It [[might|may]] rain later.",
        "I'm not sure. I [[might not|may not]] come to the party — I have an exam.",
        "Don't worry, I [[will|'ll]] definitely call you tonight. I promise!",
        "She [[might|may]] study in Canada, but she isn't sure yet.",
        "He [[won't|will not]] be late. He's always on time."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host talks to Dr. Paz, a scientist, about life in 2050. Listen.",
      title: "Radio: Life in 2050",
      script: [
        { who: "Host", line: "Dr. Paz, what will life be like in 2050?" },
        { who: "Dr. Paz", line: "Some things are very likely. People will live longer — maybe until 100. And most cars will be electric." },
        { who: "Host", line: "Will we live on Mars?" },
        { who: "Dr. Paz", line: "A few people might live there, but most of us won't. It's too expensive and dangerous." },
        { who: "Host", line: "What about food?" },
        { who: "Dr. Paz", line: "We might eat less meat. Some people may eat insects — they're full of protein! And we'll probably grow more food in cities." },
        { who: "Host", line: "And work?" },
        { who: "Dr. Paz", line: "Robots will do many jobs, so people might work only four days a week. But I'm not sure — it depends on governments." }
      ],
      activities: [
        {
          type: "sort", title: "How sure is Dr. Paz?",
          prompt: "Sort the predictions.",
          bins: ["Sure (will / won't)", "Not sure (might / may)"],
          items: [
            { text: "People will live longer.", bin: 0 }, { text: "Most cars will be electric.", bin: 0 }, { text: "Most of us won't live on Mars.", bin: 0 },
            { text: "A few people might live on Mars.", bin: 1 }, { text: "We might eat less meat.", bin: 1 }, { text: "Some people may eat insects.", bin: 1 }, { text: "People might work four days a week.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Dr. Paz says people might live until 100.", a: true },
            { s: "She thinks most people will live on Mars.", a: false },
            { s: "Insects are full of protein.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three students' answers to the question: 'What will you do after you finish school?'",
      title: "What's next?",
      text: [
        { author: "Renata, 17", body: "I'm definitely going to study medicine. I might study in Puebla or I might go to Guadalajara. It depends on the exam results." },
        { author: "Joel, 18", body: "I'm not sure at all! I might take a year off and work. Or I may study music, but my parents might not like that idea." },
        { author: "Brenda, 17", body: "I'm going to work in my family's restaurant. I won't go to university now, but I might study business online in the future." }
      ],
      activities: [
        {
          type: "match", title: "Who is it?",
          prompt: "Match the sentence with the person.",
          pairs: [
            ["She's definitely going to study medicine.", "Renata"],
            ["He's not sure at all.", "Joel"],
            ["She's going to work in her family's restaurant.", "Brenda"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Renata knows the city where she'll study.", a: false },
            { s: "Joel's parents might not like the idea of music.", a: true },
            { s: "Brenda will go to university next year.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *might / may*, then write about your future possibilities.",
      activities: [
        {
          type: "rewrite", title: "Say it with might",
          prompt: "Rewrite with *might* or *might not*.",
          items: [
            { q: "Maybe I'll go to the party.", a: ["I might go to the party.", "I may go to the party."] },
            { q: "Perhaps it will snow tomorrow.", a: ["It might snow tomorrow.", "It may snow tomorrow."] },
            { q: "Maybe she won't come.", a: ["She might not come.", "She may not come."] },
            { q: "Perhaps they'll buy a house.", a: ["They might buy a house.", "They may buy a house."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I might look for a job in Mexico City." },
            { a: "It may rain this afternoon." },
            { a: "She might not get the scholarship." },
            { a: "I'm not sure what I'm going to do." },
            { a: "We might travel to Asia next year." }
          ]
        },
        {
          type: "write", title: "Possible futures",
          prompt: "Write about your plans and possibilities for next year. Include one thing you're sure about (*going to / will*), three things you might do, and one thing you might not do.",
          minWords: 60, maxWords: 110,
          model: "Next year I'm definitely going to finish my degree in psychology. After that, I'm not sure. I might look for a job in a hospital, or I might work in a school. I may also apply for a master's in Spain, but it's expensive, so I might not go. I might adopt a dog, because I'll probably have my own apartment. We'll see!",
          bank: ["I'm definitely going to…", "After that, I'm not sure.", "I might…, or I might…", "I may…", "I might not…", "It depends on…", "We'll see!"],
          checklist: [
            "I wrote one thing I'm sure about.",
            "I used *might / may* at least three times.",
            "I used *might not* once.",
            "I didn't use *to* after *might*."
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
            "I'm not sure.",
            "I might look for a job in Mexico City.",
            "I may apply for a scholarship.",
            "I might not get it.",
            "It might rain later.",
            "It depends on the results."
          ]
        },
        {
          type: "speak", title: "Next year",
          prompt: "Record yourself talking about next year: what you're sure about and what you might or might not do (work, studies, travel, home).",
          language: ["Next year I'm definitely going to…", "I'll probably…", "I might…", "I may…", "I might not…", "It depends on…"],
          seconds: 75,
          checklist: ["use *might / may*?", "use *might not*?", "show different levels of certainty?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about possibility with *might / may*.", review: "Explanation; Quick check" },
    { can: "I can use *might not / may not*.", review: "Writing activity 1" },
    { can: "I can show how sure I am.", review: "Explanation: how sure?; Listening activity 1" },
    { can: "I can understand predictions about the future.", review: "Listening: life in 2050" },
    { can: "I can understand people talking about uncertain plans.", review: "Reading: what's next?" },
    { can: "I can write about my possible future.", review: "Writing activity 3" }
  ]
};
