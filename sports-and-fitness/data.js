window.UNIT = {
  slug: "sports-and-fitness",
  number: 24,
  title: "Sports and Fitness",
  level: "A2",
  minutes: 50,
  speakers: { "Coach": "m", "Ximena": "f", "Host": "f", "Ricardo": "m", A: "f", B: "m" },
  focus: ["can / could / be able to", "will be able to (future ability)", "sports equipment and places", "How fast / far / long can you…?", "training goals"],

  presentation: {
    scene: "🏃‍♀️🏊🚴⏱️",
    situation: "Ximena wants to run her first 10 km race. She meets a running coach at the park.",
    warmup: {
      prompt: "What sports and fitness activities do you do or want to do? Choose all.",
      options: ["running", "swimming", "cycling", "yoga", "lifting weights", "dancing", "boxing", "hiking", "climbing", "pilates"],
      response: "Let's get moving! In this unit you'll learn to talk about abilities in the past, present and future."
    },
    dialogueTitle: "Meeting the coach",
    dialogue: [
      { who: "Coach", line: "So, Ximena, *how far can you run* now?" },
      { who: "Ximena", line: "*I can run* about three kilometers, but then I'm exhausted." },
      { who: "Coach", line: "Did you do any sports when you were younger?" },
      { who: "Ximena", line: "Yes! *I could swim* really well. But *I couldn't run* fast at all." },
      { who: "Coach", line: "No problem. With training, *you'll be able to run* 10 kilometers in three months." },
      { who: "Ximena", line: "Really? Last year I hurt my knee and *I wasn't able to* exercise for six months." },
      { who: "Coach", line: "Then we're going to start slowly. *Can you come* three times a week?" },
      { who: "Ximena", line: "*I can come* on Mondays and Wednesdays. On Fridays *I won't be able to*, because I work late." }
    ]
  },

  objectives: [
    "I can talk about ability with *can / can't*.",
    "I can talk about past ability with *could / couldn't / was able to*.",
    "I can talk about future ability with *will be able to*.",
    "I can describe my fitness goals."
  ],

  explanation: {
    vocabTitle: "Sports and fitness",
    vocab: [
      { word: "gym", icon: "🏋️" }, { word: "track", icon: "🏟️" }, { word: "pool", icon: "🏊" },
      { word: "court", icon: "🎾" }, { word: "field", icon: "⚽" }, { word: "sneakers", icon: "👟" },
      { word: "helmet", icon: "⛑️" }, { word: "goggles", icon: "🥽" }, { word: "weights", icon: "🏋️‍♀️" },
      { word: "race", icon: "🏁" }, { word: "coach", icon: "🧢" }, { word: "train", icon: "⏱️" },
      { word: "warm up", icon: "🤸" }, { word: "stretch", icon: "🧘" }, { word: "get fit", icon: "💪" }
    ],
    grammar: [
      {
        title: "Ability: past, present, future",
        head: ["Time", "Affirmative", "Negative"],
        rows: [
          ["present", "I *can* run 3 km.", "I *can't* swim."],
          ["past (general)", "I *could* swim well as a child.", "I *couldn't* run fast."],
          ["past (one situation)", "I *was able to* finish the race!", "I *wasn't able to* exercise for six months."],
          ["future", "You*'ll be able to* run 10 km.", "I *won't be able to* come on Friday."]
        ],
        note: "*Can* has no future form. Use *will be able to*: *I'll be able to swim* — never *I will can swim*."
      },
      {
        title: "Questions about ability",
        head: ["Question", "Answer"],
        rows: [
          ["*How far can* you run?", "About five kilometers."],
          ["*How fast can* you swim 50 meters?", "In one minute."],
          ["*How long can* you hold a plank?", "Thirty seconds!"],
          ["*Could* you ride a bike when you were six?", "Yes, I *could*. / No, I *couldn't*."]
        ]
      }
    ],
    watchOut: [
      ["I will can run 10 km.", "I'll be able to run 10 km."],
      ["When I was a child I can swim.", "When I was a child I could swim."],
      ["She cans play tennis.", "She can play tennis."],
      ["I could to finish the race.", "I was able to finish the race."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *can, could, couldn't, able* or *be able*.",
      items: [
        "When I was five, I [[could]] swim, but I [[couldn't|could not]] ride a bike.",
        "Now I [[can]] run five kilometers.",
        "After the training, you'll [[be able]] to run 10 km.",
        "I hurt my leg, so I wasn't [[able]] to play last week.",
        "How fast [[can]] you run 100 meters?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host interviews Ricardo, a Paralympic swimmer. Listen.",
      title: "Radio: Never give up",
      script: [
        { who: "Host", line: "Ricardo, you lost your leg in an accident when you were twelve. Could you swim before that?" },
        { who: "Ricardo", line: "Yes, I could swim a little, but I wasn't very good. After the accident, I couldn't walk for a year." },
        { who: "Host", line: "How did you start swimming again?" },
        { who: "Ricardo", line: "My doctor recommended it. At first I could only swim one length of the pool. But I trained every day." },
        { who: "Host", line: "And now?" },
        { who: "Ricardo", line: "Now I can swim 100 meters in just over one minute. Last year I was able to win a silver medal at the Parapan American Games." },
        { who: "Host", line: "What's your next goal?" },
        { who: "Ricardo", line: "The Paralympics. If I train hard, I'll be able to compete for a gold medal. I'm sure!" }
      ],
      activities: [
        {
          type: "sort", title: "Past, present or future?",
          prompt: "Sort Ricardo's abilities.",
          bins: ["Past", "Present", "Future"],
          items: [
            { text: "could swim a little", bin: 0 }, { text: "couldn't walk for a year", bin: 0 }, { text: "was able to win a silver medal", bin: 0 },
            { text: "can swim 100 m in about a minute", bin: 1 },
            { text: "will be able to compete for gold", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Ricardo was an excellent swimmer before the accident.", a: false },
            { s: "His doctor recommended swimming.", a: true },
            { s: "At first he could swim ten lengths.", a: false },
            { s: "He won a silver medal last year.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three people's fitness goals on a gym's message board.",
      title: "My fitness goal",
      text: [
        { author: "Hugo, 40", body: "Two years ago I couldn't walk up the stairs without stopping. Now I can cycle 30 kilometers! My goal: next year I'll be able to cycle from Puebla to Atlixco and back." },
        { author: "Lupita, 25", body: "I can't swim — I never learned as a child. I've started classes and I'm a bit scared. But my teacher says I'll be able to swim one length in a month." },
        { author: "Daniel, 17", body: "Last month I was able to lift 60 kilos for the first time! I want to be stronger, but I also want to be more flexible. I can't touch my toes!" }
      ],
      activities: [
        {
          type: "match", title: "Who is it?",
          prompt: "Match the person with the goal.",
          pairs: [
            ["Hugo", "cycle from Puebla to Atlixco and back"],
            ["Lupita", "swim one length of the pool"],
            ["Daniel", "be stronger and more flexible"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, he could / No, she can't…*",
          items: [
            { q: "Could Hugo walk up the stairs easily two years ago?", a: ["No, he couldn't.", "No, he could not."] },
            { q: "Can Lupita swim now?", a: ["No, she can't.", "No, she cannot."] },
            { q: "Was Daniel able to lift 60 kilos last month?", a: ["Yes, he was."] },
            { q: "Can Daniel touch his toes?", a: ["No, he can't.", "No, he cannot."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice ability forms, then write your fitness goal.",
      activities: [
        {
          type: "rewrite", title: "Change the time",
          prompt: "Rewrite the sentence for the time in brackets.",
          items: [
            { q: "I can run 5 km. (past: when I was 15)", a: ["When I was 15, I could run 5 km.", "I could run 5 km when I was 15."] },
            { q: "I can swim well. (future: next summer)", a: ["Next summer I'll be able to swim well.", "I'll be able to swim well next summer.", "I will be able to swim well next summer."] },
            { q: "She can't come. (future: tomorrow)", a: ["She won't be able to come tomorrow.", "Tomorrow she won't be able to come.", "She will not be able to come tomorrow."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How far can you run?" },
            { a: "I couldn't swim when I was a child." },
            { a: "You'll be able to run ten kilometers." },
            { a: "I wasn't able to finish the race." },
            { a: "Can you come three times a week?" }
          ]
        },
        {
          type: "write", title: "My fitness story and goal",
          prompt: "Write a post for the gym's message board. Say what you could or couldn't do in the past, what you can do now, and what you'll be able to do in the future if you train.",
          minWords: 60, maxWords: 110,
          model: "When I was a child, I could play soccer for hours, but I couldn't swim. Last year I started swimming lessons. At first I wasn't able to swim more than ten meters! Now I can swim 500 meters without stopping. My goal is to swim in the sea in Huatulco next summer. My teacher says I'll be able to do it if I practice three times a week.",
          bank: ["When I was a child, I could…", "I couldn't…", "At first I wasn't able to…", "Now I can…", "My goal is to…", "I'll be able to…"],
          checklist: [
            "I used *could / couldn't* for the past.",
            "I used *can* for the present.",
            "I used *will be able to* for the future.",
            "I wrote a clear goal."
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
            "How far can you run?",
            "I could swim really well as a child.",
            "I couldn't run fast at all.",
            "You'll be able to run ten kilometers.",
            "I wasn't able to exercise for six months.",
            "I won't be able to come on Friday."
          ]
        },
        {
          type: "speak", title: "Then, now and next",
          prompt: "Record yourself talking about a sport or physical activity: what you could do as a child, what you can do now, and what you'll be able to do in a year.",
          language: ["When I was a child, I could…", "I couldn't…", "Now I can…", "I can't … yet.", "In a year, I'll be able to…"],
          seconds: 75,
          checklist: ["use *could / couldn't*?", "use *can / can't*?", "use *will be able to*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about my abilities now with *can*.", review: "Explanation: ability" },
    { can: "I can talk about past abilities with *could / was able to*.", review: "Explanation; Quick check" },
    { can: "I can talk about future abilities with *will be able to*.", review: "Writing activity 1" },
    { can: "I can ask *How far / fast / long can you…?*", review: "Explanation: questions about ability" },
    { can: "I can understand an interview about sports.", review: "Listening: never give up" },
    { can: "I can write about my fitness goals.", review: "Writing activity 3" }
  ]
};
