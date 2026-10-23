window.UNIT = {
  slug: "how-long-have-you-lived-here",
  number: 13,
  title: "How Long Have You Lived Here?",
  level: "A2",
  minutes: 50,
  speakers: { "Claire": "f", "Don Pepe": "m", "Host": "f", "Ricardo": "m", A: "f", B: "m" },
  focus: ["present perfect with for and since", "How long have you…?", "for + period / since + point in time", "present perfect vs. past simple: I've lived / I moved", "known, been, had"],

  presentation: {
    scene: "🏘️⏳🧓🌮",
    situation: "Claire, a French student, is interviewing people in her neighborhood for a project. She talks to Don Pepe, who has a taco stand.",
    warmup: {
      prompt: "How long have you done these things? Choose the ones that are more than five years for you.",
      options: ["lived in my house", "known my best friend", "studied English", "had my phone", "had a pet", "lived in my city", "played a sport", "liked the same band", "worn glasses", "had the same haircut"],
      response: "Thanks! In this unit you'll learn to say how long things have continued until now."
    },
    dialogueTitle: "Don Pepe's taco stand",
    dialogue: [
      { who: "Claire", line: "Good afternoon! *How long have you had* this taco stand?" },
      { who: "Don Pepe", line: "*I've had* it *for* thirty years. My father *opened* it in 1970." },
      { who: "Claire", line: "Wow! And *how long have you lived* in this neighborhood?" },
      { who: "Don Pepe", line: "*I've lived* here *since* I was a child. *I've known* most of my customers *for* years." },
      { who: "Claire", line: "*Has* the neighborhood *changed* a lot?" },
      { who: "Don Pepe", line: "Yes! There *have been* a lot of changes *since* 2010. Now there are cafés and students everywhere." },
      { who: "Claire", line: "Do you like the changes?" },
      { who: "Don Pepe", line: "Of course — students love tacos! *I haven't had* a quiet day *since* the university opened!" }
    ]
  },

  objectives: [
    "I can use the present perfect for situations that continue until now.",
    "I can use *for* and *since* correctly.",
    "I can ask and answer *How long have you…?*",
    "I can choose between the present perfect and the past simple."
  ],

  explanation: {
    vocabTitle: "Time and life",
    vocab: [
      { word: "for ten years", icon: "⏳" }, { word: "for a long time", icon: "🕰️" }, { word: "for two weeks", icon: "📆" },
      { word: "since 2010", icon: "📅" }, { word: "since Monday", icon: "🗓️" }, { word: "since I was a child", icon: "🧒" },
      { word: "neighborhood", icon: "🏘️" }, { word: "customer", icon: "🧍" }, { word: "stand / stall", icon: "🌮" },
      { word: "know", icon: "🤝" }, { word: "own", icon: "🔑" }, { word: "change", icon: "🔄" },
      { word: "move", icon: "🚚" }, { word: "be married", icon: "💍" }, { word: "work for", icon: "💼" }
    ],
    grammar: [
      {
        title: "How long…? for and since",
        head: ["", "Example"],
        rows: [
          ["question", "*How long have* you *lived* here?"],
          ["*for* + a period of time", "I've lived here *for* ten years / *for* six months / *for* a long time."],
          ["*since* + a point in time", "I've lived here *since* 2015 / *since* January / *since* I was a child."],
          ["state verbs", "I've *known* him for years. She's *had* her car since May. We've *been* friends since school."]
        ],
        note: "In Spanish we say *Vivo aquí desde hace diez años* (present). In English use the present perfect: *I've lived here for ten years.*"
      },
      {
        title: "Present perfect or past simple?",
        head: ["Present perfect (until now)", "Past simple (finished, specific time)"],
        rows: [
          ["I*'ve lived* in Puebla *for* five years.", "I *moved* to Puebla *in* 2020."],
          ["She*'s had* the stand *since* 1995.", "Her father *opened* it *in* 1970."],
          ["*How long have* you *known* her?", "*When did* you *meet* her?"]
        ]
      }
    ],
    watchOut: [
      ["I live here for ten years.", "I've lived here for ten years."],
      ["I've known her since five years.", "I've known her for five years."],
      ["How long do you know him?", "How long have you known him?"],
      ["I've moved here in 2020.", "I moved here in 2020."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *for* or *since*.",
      items: [
        "I've lived in this house [[since]] 2018.",
        "We've known each other [[for]] twelve years.",
        "She's worked at the hospital [[since]] March.",
        "They've been married [[for]] a long time.",
        "I haven't seen him [[since]] Christmas.",
        "He's had that phone [[for]] three years."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host interviews Ricardo, who works in a famous market. Listen.",
      title: "Radio: Life at the market",
      script: [
        { who: "Host", line: "Ricardo, how long have you worked at the Cinco de Mayo market?" },
        { who: "Ricardo", line: "I've worked here since I was fifteen. So, for twenty-two years now." },
        { who: "Host", line: "What do you sell?" },
        { who: "Ricardo", line: "Fruit and vegetables. My family has had this stall for three generations. My grandmother started it in 1960." },
        { who: "Host", line: "How long have you been married?" },
        { who: "Ricardo", line: "For ten years. I met my wife here at the market! She sold flowers at the next stall." },
        { who: "Host", line: "That's romantic! Has the market changed?" },
        { who: "Ricardo", line: "Yes, a lot. Since the pandemic, we've sold a lot online, too. But I've had the same customers for years." }
      ],
      activities: [
        {
          type: "match", title: "How long?",
          prompt: "Match to make true sentences.",
          pairs: [
            ["Ricardo has worked at the market", "for twenty-two years."],
            ["His family has had the stall", "for three generations."],
            ["His grandmother started it", "in 1960."],
            ["He has been married", "for ten years."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Ricardo sells flowers.", a: false },
            { s: "He met his wife at the market.", a: true },
            { s: "They have sold things online since the pandemic.", a: true },
            { s: "He has new customers every day and no regular ones.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the profiles of three long-time members of a city cycling club.",
      title: "Puebla Cycling Club: our veterans",
      text: [
        { author: "Doña Lupita, 68", body: "I've been a member since 1999. I started cycling when I retired from teaching. I've ridden more than 40,000 kilometers! I haven't missed a Sunday ride for ten years." },
        { author: "Hugo, 35", body: "I've ridden with the club for fifteen years. I joined when I was a university student. I've had the same bike since 2012 — it's old, but I love it." },
        { author: "Mariana, 29", body: "I've only been a member for two years, but I've made a lot of friends. I've lived in Puebla since 2019. Before that, I lived in Toluca." }
      ],
      activities: [
        {
          type: "sort", title: "Who is it?",
          prompt: "Sort the information.",
          bins: ["Doña Lupita", "Hugo", "Mariana"],
          items: [
            { text: "member since 1999", bin: 0 }, { text: "was a teacher", bin: 0 }, { text: "hasn't missed a ride for ten years", bin: 0 },
            { text: "has had the same bike since 2012", bin: 1 }, { text: "joined as a student", bin: 1 },
            { text: "member for two years", bin: 2 }, { text: "lived in Toluca before", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write a question with *How long…?*",
          items: [
            { q: "Doña Lupita has been a member since 1999.", a: ["How long has she been a member?", "How long has Doña Lupita been a member?"] },
            { q: "Hugo has had his bike since 2012.", a: ["How long has he had his bike?", "How long has Hugo had his bike?"] },
            { q: "Mariana has lived in Puebla since 2019.", a: ["How long has she lived in Puebla?", "How long has Mariana lived in Puebla?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice for, since and the two tenses, then write about yourself.",
      activities: [
        {
          type: "sort", title: "For or since?",
          prompt: "Sort the time expressions.",
          bins: ["for", "since"],
          items: [
            { text: "two hours", bin: 0 }, { text: "a long time", bin: 0 }, { text: "ten years", bin: 0 }, { text: "a week", bin: 0 },
            { text: "2015", bin: 1 }, { text: "last summer", bin: 1 }, { text: "I was born", bin: 1 }, { text: "Monday", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Present perfect or past simple?",
          prompt: "Write the verb in the correct tense.",
          items: [
            { q: "I (live) here since 2018.", a: ["I've lived here since 2018.", "I have lived here since 2018."] },
            { q: "We (move) to this city in 2018.", a: ["We moved to this city in 2018."] },
            { q: "She (know) Ana for five years.", a: ["She's known Ana for five years.", "She has known Ana for five years."] },
            { q: "They (meet) at university.", a: ["They met at university."] }
          ]
        },
        {
          type: "write", title: "Me: how long?",
          prompt: "Write about yourself. How long have you lived in your home? How long have you known your best friend? How long have you studied English? Add when these things started (past simple).",
          minWords: 50, maxWords: 100,
          model: "I've lived in San Pedro Cholula for six years. My family moved here in 2019 because my dad got a new job. I've known my best friend, Ale, since primary school — we met when we were seven! I've studied English for three years, and I've had my cat, Mango, since last December. I've wanted a cat for a long time!",
          bank: ["I've lived in … for…", "We moved here in…", "I've known … since…", "We met when…", "I've studied English for…", "I've had … since…"],
          checklist: [
            "I used *for* and *since* correctly.",
            "I used the present perfect for things that continue now.",
            "I used the past simple for when things started.",
            "I used at least one state verb: *know, have, be*."
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
            "How long have you lived here?",
            "I've lived here for ten years.",
            "I've known her since primary school.",
            "My father opened it in 1970.",
            "We've been friends for a long time.",
            "I haven't seen him since Christmas."
          ]
        },
        {
          type: "speak", title: "My life in numbers",
          prompt: "Record yourself answering: How long have you lived in your city? How long have you known your oldest friend? How long have you had your phone? How long have you studied English? Say when each thing started.",
          language: ["I've lived in … for / since…", "I moved here in…", "I've known … for…", "We met in…", "I've had my phone since…", "I've studied English for…"],
          seconds: 75,
          checklist: ["use *for* and *since*?", "use the present perfect?", "use the past simple for when it started?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the present perfect for situations that continue until now.", review: "Explanation: How long…?" },
    { can: "I can use *for* and *since* correctly.", review: "Quick check; Writing activity 1" },
    { can: "I can ask *How long have you…?*", review: "Reading activity 2" },
    { can: "I can choose the present perfect or the past simple.", review: "Explanation; Writing activity 2" },
    { can: "I can understand people talking about their lives.", review: "Listening and Reading" },
    { can: "I can write about how long I've done things.", review: "Writing activity 3" }
  ]
};
