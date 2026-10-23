window.UNIT = {
  slug: "my-last-vacation",
  number: 6,
  title: "My Last Vacation",
  level: "A2",
  minutes: 55,
  focus: ["past simple: visited, went, saw", "was / were", "didn't + verb", "Where did you go?", "last summer, two years ago"],

  presentation: {
    scene: "🧳✈️🏝️📸",
    situation: "School starts again after the vacation. Two friends meet in the cafeteria and talk about their trips.",
    warmup: {
      prompt: "What did you do on your last vacation? Choose everything that is true.",
      options: ["stayed at home", "visited family", "went to the beach", "traveled by bus", "traveled by plane", "slept a lot", "worked", "went to a museum", "took photos", "ate new food", "went camping", "watched series"],
      response: "Great! In this unit you'll learn to talk about past trips and experiences."
    },
    dialogueTitle: "Back to school",
    dialogue: [
      { who: "Ale", line: "Hi, Mónica! *How was* your vacation?" },
      { who: "Mónica", line: "It *was* amazing! I *went* to Oaxaca with my family." },
      { who: "Ale", line: "Cool! *How did* you *travel*?" },
      { who: "Mónica", line: "We *took* the bus. It *was* a long trip, seven hours! But the city *was* beautiful." },
      { who: "Ale", line: "*What did* you *do* there?" },
      { who: "Mónica", line: "We *visited* Monte Albán, we *ate* tlayudas and I *bought* a black clay pot for my grandma. And you?" },
      { who: "Ale", line: "I *didn't go* anywhere. I *stayed* home and I *worked* at my uncle's shop. But I *saved* money for a new phone!" }
    ]
  },

  objectives: [
    "I can talk about a past trip with the past simple.",
    "I can use regular and common irregular verbs in the past.",
    "I can use *was* and *were* to describe places and experiences.",
    "I can ask and answer *Did you…?* and *Where / What / How did you…?*"
  ],

  explanation: {
    vocabTitle: "Vacation verbs (past simple)",
    vocab: [
      { word: "went", icon: "🚶", say: "go, went" }, { word: "traveled", icon: "🧳", say: "travel, traveled" }, { word: "stayed", icon: "🏨", say: "stay, stayed" },
      { word: "visited", icon: "🏛️", say: "visit, visited" }, { word: "saw", icon: "👀", say: "see, saw" }, { word: "took photos", icon: "📸", say: "take, took photos" },
      { word: "ate", icon: "🌮", say: "eat, ate" }, { word: "bought", icon: "🛍️", say: "buy, bought" }, { word: "swam", icon: "🏊", say: "swim, swam" },
      { word: "flew", icon: "✈️", say: "fly, flew" }, { word: "had fun", icon: "🎉", say: "have, had fun" }, { word: "met", icon: "🤝", say: "meet, met" },
      { word: "relaxed", icon: "🏖️", say: "relax, relaxed" }, { word: "got lost", icon: "🗺️", say: "get, got lost" }, { word: "came back", icon: "🏠", say: "come, came back" }
    ],
    grammar: [
      {
        title: "Past simple: regular and irregular verbs",
        head: ["Type", "Rule", "Examples"],
        rows: [
          ["regular", "verb + *-ed*", "visit → *visited*, stay → *stayed*, walk → *walked*"],
          ["regular: spelling", "-e → *-d* · consonant + y → *-ied* · double consonant", "dance → *danced*, study → *studied*, stop → *stopped*"],
          ["irregular", "learn them!", "go → *went*, see → *saw*, eat → *ate*, buy → *bought*, take → *took*"]
        ],
        note: "The past simple is the same for all subjects: *I went, she went, they went*."
      },
      {
        title: "Negatives and questions",
        head: ["Form", "Example"],
        rows: [
          ["negative: *didn't* + verb", "We *didn't go* to the beach. (not *didn't went*)"],
          ["question: *Did* + subject + verb", "*Did* you *take* photos? – Yes, I *did*. / No, I *didn't*."],
          ["Wh- question", "*Where did* you *go*? *What did* you *eat*? *How did* you *travel*?"]
        ]
      },
      {
        title: "Was / were",
        head: ["Subject", "Affirmative", "Negative / question"],
        rows: [
          ["I / he / she / it", "The hotel *was* nice.", "It *wasn't* expensive. *Was* it fun?"],
          ["you / we / they", "The people *were* friendly.", "They *weren't* busy. *Were* you tired?"]
        ],
        note: "Use *was / were* to describe: *How was the trip? – It was great! The beaches were beautiful.*"
      }
    ],
    watchOut: [
      ["I goed to Oaxaca.", "I went to Oaxaca."],
      ["We didn't visited the museum.", "We didn't visit the museum."],
      ["Did you went to the beach?", "Did you go to the beach?"],
      ["The people was friendly.", "The people were friendly."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the past simple of the verb in parentheses.",
      items: [
        "Last summer we [[went]] to Veracruz. (go)",
        "I [[visited]] the aquarium. (visit)",
        "My brother [[didn't|did not]] swim in the sea. (not swim)",
        "The hotel [[was]] very small. (be)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to Andrés talking about a vacation that didn't go as planned.",
      title: "A vacation to remember",
      script: [
        { who: "Interviewer", line: "Andrés, tell us about your last vacation." },
        { who: "Andrés", line: "Well, last December my friends and I went to Puerto Escondido, on the coast of Oaxaca. We traveled by bus. It was a twelve-hour trip!" },
        { who: "Interviewer", line: "Wow. Where did you stay?" },
        { who: "Andrés", line: "We stayed in a small hostel near the beach. It wasn't expensive, and the people were really friendly." },
        { who: "Interviewer", line: "What did you do there?" },
        { who: "Andrés", line: "On the first day we swam and played volleyball on the beach. But I forgot my sunscreen, so I got a terrible sunburn. I didn't go to the beach for two days!" },
        { who: "Interviewer", line: "Oh, no! What did you do then?" },
        { who: "Andrés", line: "I stayed in the hostel and I met a girl from Germany. She taught me some German words and I taught her some Spanish. We're still friends!" },
        { who: "Interviewer", line: "So it was a good vacation in the end?" },
        { who: "Andrés", line: "Yes, it was. And now I always carry sunscreen!" }
      ],
      activities: [
        {
          type: "tiles", title: "What happened?",
          prompt: "Listen and make sentences about Andrés's trip.",
          items: [
            { a: "They traveled by bus." },
            { a: "They stayed in a small hostel." },
            { a: "He forgot his sunscreen." },
            { a: "He didn't go to the beach for two days." },
            { a: "He met a girl from Germany." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. Are the sentences true or false?",
          items: [
            { s: "Andrés went on vacation last summer.", a: false },
            { s: "The bus trip was twelve hours.", a: true },
            { s: "The hostel was expensive.", a: false },
            { s: "Andrés played volleyball on the first day.", a: true },
            { s: "He taught the German girl some Spanish.", a: true },
            { s: "Andrés and the girl aren't friends now.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three short travel reviews from a website for young travelers.",
      title: "Your travel stories",
      text: [
        { author: "Valeria · Guanajuato ★★★★★", body: "I went to Guanajuato in July with my sister. The city was so colorful! We walked through the tunnels, visited the Mummy Museum and listened to the callejoneadas at night. We ate enchiladas mineras every day. I didn't want to come back!" },
        { author: "Tomás · Mexico City ★★★☆☆", body: "I came from Chile to visit Mexico City for a week. I saw the pyramids of Teotihuacán and I loved them. But the traffic was horrible and I got lost on the metro twice. The food was fantastic, but I ate too many tacos al pastor and I got sick!" },
        { author: "Ruth · Chiapas ★★★★☆", body: "Last spring, my friends and I went camping near the lakes of Montebello. The lakes were blue and green, and the forest was beautiful. It rained a lot, so we didn't sleep very well in our tent. But we had a lot of fun and we took hundreds of photos." }
      ],
      activities: [
        {
          type: "sort", title: "Whose trip was it?",
          prompt: "Put each sentence under the right traveler.",
          bins: ["Valeria", "Tomás", "Ruth"],
          items: [
            { text: "walked through tunnels", bin: 0 }, { text: "traveled with her sister", bin: 0 }, { text: "didn't want to come back", bin: 0 },
            { text: "visited the pyramids", bin: 1 }, { text: "got lost on the metro", bin: 1 }, { text: "got sick", bin: 1 },
            { text: "slept in a tent", bin: 2 }, { text: "saw blue and green lakes", bin: 2 }, { text: "had a lot of rain", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Make questions",
          prompt: "Write the question for each answer. Use *Did…?* or a Wh- question.",
          items: [
            { q: "Valeria went to Guanajuato *in July*. → When…?", a: ["When did Valeria go to Guanajuato?", "When did she go to Guanajuato?", "When did she go?"] },
            { q: "Tomás saw *the pyramids*. → What…?", a: ["What did Tomás see?", "What did he see?"] },
            { q: "Ruth went camping *with her friends*. → Who…with?", a: ["Who did Ruth go camping with?", "Who did she go camping with?", "Who did she go with?"] },
            { q: "Yes, Tomás got lost on the metro. → Did…?", a: ["Did Tomás get lost on the metro?", "Did he get lost on the metro?"] },
            { q: "No, Ruth didn't sleep well. → Did…?", a: ["Did Ruth sleep well?", "Did she sleep well?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the verbs first, then write about your last vacation.",
      activities: [
        {
          type: "match", title: "Irregular verbs",
          prompt: "Match each verb with its past form.",
          pairs: [
            ["go", "went"], ["see", "saw"], ["eat", "ate"], ["buy", "bought"],
            ["take", "took"], ["have", "had"], ["get", "got"], ["swim", "swam"]
          ]
        },
        {
          type: "gap", title: "A postcard from the beach",
          prompt: "Complete the postcard with the past simple of the verbs in parentheses.",
          items: [
            "Hi, Grandma! Last week we [[arrived]] in Mazatlán. (arrive)",
            "The beach [[was]] beautiful and the water [[was]] warm. (be)",
            "On Monday we [[took]] a boat tour and we [[saw]] dolphins! (take / see)",
            "Dad [[bought]] a big hat, and Mom [[tried]] fish tacos. (buy / try)",
            "I [[didn't|did not]] like the seafood, but I [[had]] a great time. (not like / have)"
          ]
        },
        {
          type: "write", title: "My last vacation",
          prompt: "Write about your last vacation or a special trip. Say where you went, who with, how you traveled, what you did and how it was. If you stayed home, write about that!",
          minWords: 70, maxWords: 100,
          model: "Last summer I went to Tepoztlán with my cousins. We traveled by bus from Taxqueña. It was only one hour! On the first day, we climbed the Tepozteco. It was very hard, but the view was amazing. In the afternoon we walked around the market and I bought a bracelet. We didn't stay in a hotel. We stayed at my aunt's house. It was a short trip, but we had a lot of fun.",
          bank: ["Last summer / December", "I went to … with…", "We traveled by", "On the first day,", "After that,", "It was amazing / terrible", "We didn't", "I had a great time"],
          checklist: [
            "I said **where, who with, how** and **what** I did.",
            "I used at least **four** irregular verbs.",
            "I used *was / were* to describe something.",
            "I wrote one negative with *didn't* + verb."
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
            "Where did you go last summer?",
            "We went to the beach in Oaxaca.",
            "The hotel was very nice.",
            "I ate a lot of seafood.",
            "We didn't visit the museum.",
            "It was a wonderful trip!"
          ]
        },
        {
          type: "speak", title: "Travel vlog",
          prompt: "Record a short travel vlog (about one minute). Tell the story of a trip: where you went, what you did, the best moment and the worst moment.",
          language: ["Hi, everyone! Today I want to tell you about…", "Last…, I went to…", "First, we…", "Then…", "The best moment was…", "The worst moment was…"],
          seconds: 90,
          checklist: ["say where and when you went?", "use at least five past verbs?", "describe the best and worst moments?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use regular past verbs with correct spelling.", review: "Explanation: regular and irregular verbs" },
    { can: "I can use at least 12 common irregular verbs.", review: "Explanation: the vocabulary cards; Writing activity 1" },
    { can: "I can use *was / were* to describe places and experiences.", review: "Explanation: was / were" },
    { can: "I can make negatives with *didn't* + verb.", review: "Explanation: negatives and questions; Writing activity 2" },
    { can: "I can ask *Did you…?* and *Where / What / How did you…?*", review: "Reading activity 2 and Speaking activity 1 (listen and repeat)" },
    { can: "I can tell the story of a trip in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
