window.UNIT = {
  slug: "when-i-was-young",
  number: 8,
  title: "When I Was Young",
  level: "A2",
  minutes: 50,
  speakers: { "Grandpa": "m", "Ximena": "f", "Host": "f", "Doña Carmen": "f", A: "f", B: "m" },
  focus: ["used to / didn't use to", "Did you use to…?", "used to vs. past simple", "childhood memories", "then and now: any more / still"],

  presentation: {
    scene: "📻🧸🏡🕰️",
    situation: "Ximena is doing a school project about life in the past. She interviews her grandpa.",
    warmup: {
      prompt: "What did children do in the past, before smartphones? Choose all.",
      options: ["play in the street", "write letters", "listen to the radio", "watch black-and-white TV", "collect stickers", "play marbles", "use a landline phone", "walk to school", "read comics", "visit neighbors"],
      response: "Interesting! In this unit you'll learn to talk about past habits with *used to*."
    },
    dialogueTitle: "Grandpa's childhood",
    dialogue: [
      { who: "Ximena", line: "Grandpa, what *did* you *use to* do after school?" },
      { who: "Grandpa", line: "We *used to play* soccer in the street. There weren't many cars then." },
      { who: "Ximena", line: "*Did* you *use to have* a TV?" },
      { who: "Grandpa", line: "No, we *didn't use to have* one. We *used to listen* to the radio every night." },
      { who: "Ximena", line: "Wow. And how did you talk to your friends?" },
      { who: "Grandpa", line: "We *used to visit* them, or write letters. My best friend moved to Monterrey in 1968, and we *wrote* letters for twenty years!" },
      { who: "Ximena", line: "Do you *still* write letters?" },
      { who: "Grandpa", line: "No, not *any more*. Now I send voice messages, like you!" }
    ]
  },

  objectives: [
    "I can talk about past habits and states with *used to*.",
    "I can make negatives and questions with *use to*.",
    "I can choose between *used to* and the past simple.",
    "I can compare the past and the present with *still* and *any more*."
  ],

  explanation: {
    vocabTitle: "Childhood and the past",
    vocab: [
      { word: "childhood", icon: "🧒" }, { word: "marbles", icon: "🔵" }, { word: "letter", icon: "✉️" },
      { word: "radio", icon: "📻" }, { word: "landline", icon: "☎️" }, { word: "cassette", icon: "📼" },
      { word: "toy", icon: "🧸" }, { word: "neighborhood", icon: "🏘️" }, { word: "chores", icon: "🧹" },
      { word: "strict", icon: "😠" }, { word: "safe", icon: "🛡️" }, { word: "simple", icon: "🌱" },
      { word: "memory", icon: "💭" }, { word: "still", icon: "➡️" }, { word: "not any more", icon: "🚫" }
    ],
    grammar: [
      {
        title: "Used to",
        head: ["", "Example"],
        rows: [
          ["affirmative", "We *used to play* in the street."],
          ["negative", "We *didn't use to have* a TV. (no *-d*)"],
          ["question", "*Did* you *use to walk* to school?"],
          ["short answers", "Yes, I *did*. / No, I *didn't*."]
        ],
        note: "*Used to* = something that was true or happened many times in the past, but not now. It's the same for all subjects."
      },
      {
        title: "Used to or past simple?",
        head: ["used to (repeated / long time)", "past simple (one time / specific)"],
        rows: [
          ["We *used to write* letters.", "My friend *moved* to Monterrey in 1968."],
          ["I *used to live* in Atlixco.", "I *visited* Atlixco last year."],
          ["She *used to be* very shy.", "She *was* shy at the party on Saturday."]
        ],
        note: "Don't use *used to* with a specific date or number of times: *I went to Cancún three times.* — not *I used to go three times.*"
      },
      {
        title: "Then and now",
        head: ["Word", "Example"],
        rows: [
          ["*still* (continues)", "I *still* live in Puebla."],
          ["*not … any more* (stopped)", "I *don't* play marbles *any more*."],
          ["*now / nowadays*", "*Nowadays* children use tablets."]
        ]
      }
    ],
    watchOut: [
      ["I use to play soccer.", "I used to play soccer."],
      ["I didn't used to like vegetables.", "I didn't use to like vegetables."],
      ["Did you used to walk to school?", "Did you use to walk to school?"],
      ["I used to go to Cancún in 2015.", "I went to Cancún in 2015."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *used to, use to* or *didn't use to*.",
      items: [
        "We [[used to]] play marbles at school.",
        "Did your parents [[use to]] be strict?",
        "I [[didn't use to|did not use to]] like vegetables, but now I love them.",
        "My grandma [[used to]] make tamales every Sunday.",
        "Did you [[use to]] have a pet?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio program, Doña Carmen, 78, talks about her childhood in a small town. Listen.",
      title: "Radio: Memories of Zacatlán",
      script: [
        { who: "Host", line: "Doña Carmen, you grew up in Zacatlán. What was life like?" },
        { who: "Doña Carmen", line: "It was very simple. We used to live in a small house with no electricity. My mother used to cook with wood." },
        { who: "Host", line: "Did you use to go to school?" },
        { who: "Doña Carmen", line: "Yes, but only for four years. Girls didn't use to study much then. I used to help my father with the apple trees." },
        { who: "Host", line: "What did you use to do for fun?" },
        { who: "Doña Carmen", line: "We used to dance at the town festivals. That's where I met my husband, in 1965!" },
        { who: "Host", line: "Do you still live in Zacatlán?" },
        { who: "Doña Carmen", line: "No, not any more. I live in Puebla with my daughter now. But I still visit every year for the Apple Fair." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Doña Carmen's house had electricity.", a: false },
            { s: "Her mother used to cook with wood.", a: true },
            { s: "She went to school for ten years.", a: false },
            { s: "She met her husband at a festival.", a: true },
            { s: "She still lives in Zacatlán.", a: false }
          ]
        },
        {
          type: "sort", title: "Habit or one time?",
          prompt: "Is it a past habit (*used to*) or one specific event?",
          bins: ["Past habit", "One specific event"],
          items: [
            { text: "cook with wood", bin: 0 }, { text: "help with the apple trees", bin: 0 }, { text: "dance at festivals", bin: 0 },
            { text: "met her husband in 1965", bin: 1 }, { text: "moved to Puebla", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about how life has changed for teenagers.",
      title: "Teenagers: then and now",
      text: [
        { author: "Communication", body: "In the 1990s, teenagers used to call their friends on the family landline. Parents could hear everything! Today, teens send messages all day, and many of them don't make phone calls any more." },
        { author: "Music", body: "Young people used to buy cassettes and CDs, and they used to record songs from the radio. Now they listen to music online. But some teenagers still buy vinyl records — they're cool again!" },
        { author: "Free time", body: "Teenagers used to spend more time outside: riding bikes, playing in the park or meeting at the mall. Nowadays they spend more time at home with screens. But they didn't use to have so many ways to learn new things." }
      ],
      activities: [
        {
          type: "match", title: "Then and now",
          prompt: "Match the past habit with the present.",
          pairs: [
            ["They used to call on the landline.", "Now they send messages all day."],
            ["They used to buy cassettes and CDs.", "Now they listen to music online."],
            ["They used to spend more time outside.", "Now they spend more time with screens."]
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word from the article.",
          items: [
            "In the 1990s parents could [[hear]] teenagers' phone calls.",
            "Many teens don't make phone calls any [[more]].",
            "Some teenagers [[still]] buy vinyl records.",
            "Teenagers used to record songs from the [[radio]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *used to*, then write about your childhood.",
      activities: [
        {
          type: "rewrite", title: "Write with used to",
          prompt: "Rewrite the sentences with *used to* or *didn't use to*.",
          items: [
            { q: "When I was a child, I played marbles every day.", a: ["When I was a child, I used to play marbles.", "When I was a child, I used to play marbles every day.", "I used to play marbles every day."] },
            { q: "My dad had long hair in the 1990s.", a: ["My dad used to have long hair.", "My dad used to have long hair in the 1990s."] },
            { q: "We didn't have a car then.", a: ["We didn't use to have a car.", "We didn't use to have a car then."] },
            { q: "Were you shy as a child? (Did…?)", a: ["Did you use to be shy?", "Did you use to be shy as a child?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I used to live near the beach." },
            { a: "Did you use to wear a uniform?" },
            { a: "We didn't use to have a computer." },
            { a: "I don't play the piano any more." },
            { a: "My grandparents still live in Oaxaca." }
          ]
        },
        {
          type: "write", title: "My childhood",
          prompt: "Write about your childhood for the school project \"When I was young\". Where did you use to live? What did you use to do for fun? What didn't you use to like? What is different now?",
          minWords: 60, maxWords: 110,
          model: "When I was young, I used to live in a small town near Tehuacán. My brother and I used to ride our bikes everywhere and play soccer in the street until it got dark. I didn't use to like school because my teacher was very strict. My grandma used to make us hot chocolate every evening. Now I live in Puebla and I don't ride my bike any more, but I still love hot chocolate!",
          bank: ["When I was young, I used to…", "My … used to…", "I didn't use to like…", "We used to … every…", "Now I…", "I don't … any more.", "I still…"],
          checklist: [
            "I used *used to* at least three times.",
            "I wrote a negative with *didn't use to*.",
            "I used *still* or *any more*.",
            "I used the past simple for one specific event."
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
            "We used to play soccer in the street.",
            "Did you use to have a TV?",
            "We didn't use to have a car.",
            "My grandma used to make tamales.",
            "Do you still write letters?",
            "I don't play marbles any more."
          ]
        },
        {
          type: "speak", title: "Then and now",
          prompt: "Record yourself comparing your life when you were eight years old with your life now. Talk about where you lived, your hobbies, food, school and friends.",
          language: ["When I was eight, I used to…", "I didn't use to…", "My best friend used to…", "Now I…", "I still…", "I don't … any more."],
          seconds: 90,
          checklist: ["use *used to* several times?", "use *didn't use to*?", "compare with now using *still / any more*?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about past habits with *used to*.", review: "Explanation: used to; Quick check" },
    { can: "I can make negatives and questions with *use to*.", review: "Writing activity 1" },
    { can: "I can choose *used to* or the past simple.", review: "Explanation: used to or past simple?; Listening activity 2" },
    { can: "I can use *still* and *any more*.", review: "Explanation: then and now" },
    { can: "I can understand people describing life in the past.", review: "Listening and Reading" },
    { can: "I can write about my childhood.", review: "Writing activity 3" }
  ]
};
