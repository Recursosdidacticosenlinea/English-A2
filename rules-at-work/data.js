window.UNIT = {
  slug: "rules-at-work",
  number: 31,
  title: "Rules at Work",
  level: "A2",
  minutes: 50,
  speakers: { "Manager": "f", "Rafa": "m", "Host": "m", "Carla": "f", "Joel": "m", A: "f", B: "m" },
  focus: ["must / mustn't for rules", "have to / don't have to for obligation", "mustn't vs. don't have to", "jobs and workplaces", "Do I have to…? Am I allowed to…?"],

  presentation: {
    scene: "🏢🦺👔⏰",
    situation: "It's Rafa's first day as a waiter at a hotel restaurant. The manager explains the rules.",
    warmup: {
      prompt: "Which rules are common at work? Choose all.",
      options: ["wear a uniform", "arrive on time", "not use your phone", "work on weekends", "smile at customers", "wash your hands", "not eat in the kitchen", "speak English", "clock in and out", "not smoke"],
      response: "Rules everywhere! In this unit you'll learn to talk about obligations and prohibitions at work."
    },
    dialogueTitle: "First day at work",
    dialogue: [
      { who: "Manager", line: "Welcome, Rafa! First, the rules. You *must* arrive fifteen minutes before your shift." },
      { who: "Rafa", line: "OK. *Do I have to* wear a uniform?" },
      { who: "Manager", line: "Yes, you *have to* wear the black shirt and pants. We give you the shirt. You *don't have to* buy it." },
      { who: "Rafa", line: "Great. Can I use my phone?" },
      { who: "Manager", line: "No. You *mustn't* use your phone in the restaurant. You can use it in your break." },
      { who: "Rafa", line: "*Do I have to* speak English with customers?" },
      { who: "Manager", line: "Only with tourists. You *don't have to* speak perfectly, but you *have to* be polite." },
      { who: "Rafa", line: "And can I eat here?" },
      { who: "Manager", line: "Yes, staff lunch is free. But you *mustn't* eat in front of customers!" }
    ]
  },

  objectives: [
    "I can talk about rules with *must / mustn't*.",
    "I can talk about obligations with *have to / don't have to*.",
    "I can explain the difference between *mustn't* and *don't have to*.",
    "I can describe the rules of a job."
  ],

  explanation: {
    vocabTitle: "Work",
    vocab: [
      { word: "shift", icon: "🕒" }, { word: "uniform", icon: "👔" }, { word: "break", icon: "☕" },
      { word: "boss / manager", icon: "👩‍💼" }, { word: "colleague", icon: "🧑‍🤝‍🧑" }, { word: "customer", icon: "🧍" },
      { word: "salary", icon: "💵" }, { word: "overtime", icon: "⏰" }, { word: "safety helmet", icon: "⛑️" },
      { word: "clock in / out", icon: "🕐" }, { word: "full-time", icon: "📆" }, { word: "part-time", icon: "🌓" },
      { word: "day off", icon: "🏖️" }, { word: "office", icon: "🏢" }, { word: "factory", icon: "🏭" }
    ],
    grammar: [
      {
        title: "Must, have to, mustn't, don't have to",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*must* + verb", "it's a rule / very important", "You *must* arrive on time."],
          ["*have to / has to* + verb", "it's necessary (obligation)", "You *have to* wear a uniform."],
          ["*mustn't* + verb", "it's prohibited ❌", "You *mustn't* use your phone."],
          ["*don't / doesn't have to*", "it's not necessary (you can if you want)", "You *don't have to* buy the shirt."]
        ],
        note: "*Mustn't* ≠ *don't have to*! *You mustn't smoke* = prohibido. *You don't have to come* = no es necesario."
      },
      {
        title: "Questions and past",
        head: ["Form", "Example"],
        rows: [
          ["question", "*Do I have to* work on Sundays? *Does* she *have to* wear a helmet?"],
          ["past obligation", "I *had to* work late yesterday."],
          ["past: not necessary", "We *didn't have to* pay for lunch."]
        ],
        note: "*Must* has no past form. Use *had to*."
      }
    ],
    watchOut: [
      ["You don't have to smoke here. (prohibited)", "You mustn't smoke here."],
      ["She must to wear a uniform.", "She must wear a uniform."],
      ["Do I must work on Sunday?", "Do I have to work on Sunday?"],
      ["Yesterday I must work late.", "Yesterday I had to work late."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must, mustn't, have to, has to* or *don't have to*.",
      items: [
        "You [[mustn't|must not]] smoke in the building. It's dangerous.",
        "Rafa [[has to]] wear a black shirt.",
        "We [[don't have to|do not have to]] work on Sundays. It's our day off.",
        "Workers [[must]] wear a helmet in the factory.",
        "Do I [[have to]] speak English with customers?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio show compares two very different jobs. Listen to Carla and Joel.",
      title: "Radio: My job, my rules",
      script: [
        { who: "Host", line: "Carla, you're a nurse. What are the rules in your job?" },
        { who: "Carla", line: "There are a lot! We must wash our hands all the time, and we mustn't wear jewelry or long nails. I have to work night shifts twice a week." },
        { who: "Host", line: "Do you have to wear a uniform?" },
        { who: "Carla", line: "Yes, a blue one. But I don't have to wash it — the hospital does it." },
        { who: "Host", line: "Joel, you work for a tech company." },
        { who: "Joel", line: "My job is very flexible. I don't have to go to the office every day. I can work from home on Mondays and Fridays." },
        { who: "Host", line: "No rules at all?" },
        { who: "Joel", line: "Some! We have to attend a video meeting every morning at nine, and we mustn't share company information on social media." }
      ],
      activities: [
        {
          type: "sort", title: "Carla or Joel?",
          prompt: "Sort the rules.",
          bins: ["Carla (nurse)", "Joel (tech company)"],
          items: [
            { text: "must wash hands all the time", bin: 0 }, { text: "mustn't wear jewelry", bin: 0 }, { text: "has to work night shifts", bin: 0 }, { text: "doesn't have to wash the uniform", bin: 0 },
            { text: "doesn't have to go to the office every day", bin: 1 }, { text: "has to attend a meeting at nine", bin: 1 }, { text: "mustn't share company information", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Carla can have long nails.", a: false },
            { s: "Carla's uniform is blue.", a: true },
            { s: "Joel works from home on Mondays and Fridays.", a: true },
            { s: "Joel's meeting is at ten.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the rules for summer staff at a water park.",
      title: "AquaPark · Staff rules",
      text: [
        { author: "Before work", body: "All staff must arrive 20 minutes before the park opens. You have to clock in at the main entrance. Lifeguards have to do a short swim test every Monday." },
        { author: "During work", body: "You must wear your uniform and name badge at all times. You mustn't use your phone near the pools. You don't have to stay in the same area all day — managers will move you every two hours." },
        { author: "Breaks and food", body: "You have a 45-minute lunch break. Staff food is free. You mustn't eat or drink in the customer areas. You don't have to bring your own sunscreen — we provide it." }
      ],
      activities: [
        {
          type: "sort", title: "Necessary, prohibited or not necessary?",
          prompt: "Sort the rules.",
          bins: ["have to / must", "mustn't", "don't have to"],
          items: [
            { text: "arrive 20 minutes early", bin: 0 }, { text: "wear a name badge", bin: 0 }, { text: "clock in", bin: 0 },
            { text: "use your phone near the pools", bin: 1 }, { text: "eat in customer areas", bin: 1 },
            { text: "stay in the same area all day", bin: 2 }, { text: "bring your own sunscreen", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, they do / No, they don't*.",
          items: [
            { q: "Do lifeguards have to do a swim test?", a: ["Yes, they do."] },
            { q: "Do staff have to pay for food?", a: ["No, they don't.", "No, they do not."] },
            { q: "Do staff have to bring sunscreen?", a: ["No, they don't.", "No, they do not."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice rules language, then write the rules of a job or place.",
      activities: [
        {
          type: "match", title: "What does it mean?",
          prompt: "Match the sentence with its meaning.",
          pairs: [
            ["You mustn't park here.", "Parking here is prohibited."],
            ["You don't have to park here.", "You can park somewhere else if you want."],
            ["You have to park here.", "It's necessary to park here."]
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "She have to work on Saturdays.", a: ["She has to work on Saturdays."] },
            { q: "You must to wear a helmet.", a: ["You must wear a helmet."] },
            { q: "Do I must come tomorrow?", a: ["Do I have to come tomorrow?"] },
            { q: "Yesterday we must stay late.", a: ["Yesterday we had to stay late."] }
          ]
        },
        {
          type: "write", title: "Job rules",
          prompt: "Describe the rules of your job, your school or a job you know (a doctor, a chef, a pilot…). Use *must, have to, mustn't* and *don't have to*. Say which rule you like and which you don't.",
          minWords: 60, maxWords: 110,
          model: "My sister is a chef in a big restaurant. She has to start at seven in the morning and she often has to work on weekends. In the kitchen, she must wear a white jacket and a hat, and she mustn't wear rings or a watch. She doesn't have to wash the dishes — there's a person for that. She loves her job, but she doesn't like working on Sundays.",
          bank: ["He / She has to…", "He / She must…", "He / She mustn't…", "He / She doesn't have to…", "He / She had to…", "The rule I like is…"],
          checklist: [
            "I used *must / have to* for obligations.",
            "I used *mustn't* for something prohibited.",
            "I used *don't have to* for something not necessary.",
            "I used *has to* with *he / she*."
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
            "You must arrive fifteen minutes early.",
            "Do I have to wear a uniform?",
            "You don't have to buy the shirt.",
            "You mustn't use your phone in the restaurant.",
            "She has to work night shifts.",
            "Yesterday I had to work late."
          ]
        },
        {
          type: "speak", title: "The rules of my place",
          prompt: "Record yourself explaining the rules of your school, workplace or home to a new person. Include at least two things they must do, one thing they mustn't do and one thing they don't have to do.",
          language: ["Welcome! Here are the rules.", "You have to…", "You must…", "You mustn't…", "You don't have to…", "If you have questions,…"],
          seconds: 75,
          checklist: ["use *must / have to*?", "use *mustn't* correctly?", "use *don't have to* correctly?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about rules with *must / mustn't*.", review: "Explanation; Quick check" },
    { can: "I can use *have to / don't have to*.", review: "Explanation; Reading activity 2" },
    { can: "I can explain the difference between *mustn't* and *don't have to*.", review: "Writing activity 1" },
    { can: "I can use *had to* for the past.", review: "Explanation: questions and past" },
    { can: "I can understand people describing job rules.", review: "Listening and Reading" },
    { can: "I can write the rules of a job.", review: "Writing activity 3" }
  ]
};
