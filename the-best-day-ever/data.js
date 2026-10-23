window.UNIT = {
  slug: "the-best-day-ever",
  number: 14,
  title: "The Best Day Ever",
  level: "A2",
  minutes: 50,
  speakers: { "Hugo": "m", "Renata": "f", "Host": "f", "Omar": "m", "Brisa": "f", A: "m", B: "f" },
  focus: ["superlative + present perfect: the best… I've ever…", "-ed and -ing adjectives: bored / boring, excited / exciting", "extreme adjectives: amazing, terrible, delicious", "describing experiences", "What's the… you've ever…?"],

  presentation: {
    scene: "🎢🌋🍽️🎤",
    situation: "Hugo and Renata are playing a question game on a long bus trip.",
    warmup: {
      prompt: "Which experiences can you describe? Choose the ones you have had.",
      options: ["a great concert", "a scary movie", "an amazing meal", "a boring class", "an exciting game", "a beautiful place", "a long trip", "a funny party", "a terrible day", "a crazy adventure"],
      response: "Let's talk about them! In this unit you'll learn to describe your best and worst experiences."
    },
    dialogueTitle: "The question game",
    dialogue: [
      { who: "Renata", line: "OK, next question. *What's the best concert you've ever been to*?" },
      { who: "Hugo", line: "Easy! Coldplay in Mexico City. It was *amazing*. I was so *excited*!" },
      { who: "Renata", line: "And *what's the most delicious thing you've ever eaten*?" },
      { who: "Hugo", line: "My grandma's mole. It's *the best food in the world*. Your turn. *What's the scariest thing you've ever done*?" },
      { who: "Renata", line: "I went bungee jumping in Veracruz. It was *terrifying*, but *fantastic*!" },
      { who: "Hugo", line: "No way! *What's the most boring movie you've ever seen*?" },
      { who: "Renata", line: "A three-hour movie about a lighthouse. I was so *bored* that I fell asleep!" },
      { who: "Hugo", line: "Ha! This trip is *the longest trip I've ever taken*. Are we there yet?" }
    ]
  },

  objectives: [
    "I can talk about experiences with *the + superlative + I've ever…*",
    "I can choose between *-ed* and *-ing* adjectives.",
    "I can use extreme adjectives like *amazing* and *terrible*.",
    "I can describe my best and worst experiences."
  ],

  explanation: {
    vocabTitle: "Describing experiences",
    vocab: [
      { word: "amazing", icon: "🤩" }, { word: "fantastic", icon: "🌟" }, { word: "delicious", icon: "😋" },
      { word: "terrible", icon: "😫" }, { word: "terrifying", icon: "😱" }, { word: "exhausting", icon: "🥵" },
      { word: "exciting / excited", icon: "🎉" }, { word: "boring / bored", icon: "🥱" }, { word: "interesting / interested", icon: "🤔" },
      { word: "surprising / surprised", icon: "😮" }, { word: "relaxing / relaxed", icon: "😌" }, { word: "disappointing / disappointed", icon: "😞" },
      { word: "embarrassing / embarrassed", icon: "😳" }, { word: "frightening / frightened", icon: "👻" }, { word: "tiring / tired", icon: "😴" }
    ],
    grammar: [
      {
        title: "Superlative + present perfect",
        head: ["Question", "Answer"],
        rows: [
          ["What's *the best* concert *you've ever been* to?", "*The best* concert *I've ever been* to was Coldplay."],
          ["What's *the most delicious* thing *you've ever eaten*?", "It's my grandma's mole."],
          ["What's *the scariest* thing *you've ever done*?", "Bungee jumping!"],
          ["", "That was *the worst* movie *I've ever seen*."]
        ],
        note: "Superlatives: *good → the best, bad → the worst, scary → the scariest, long → the longest, delicious → the most delicious*."
      },
      {
        title: "-ed or -ing adjectives?",
        head: ["-ing = the thing / experience", "-ed = how a person feels"],
        rows: [
          ["The movie was *boring*.", "I was *bored*."],
          ["The game was *exciting*.", "We were *excited*."],
          ["The news was *surprising*.", "She was *surprised*."],
          ["The trip was *tiring*.", "They were *tired*."]
        ]
      },
      {
        title: "Extreme adjectives",
        head: ["Normal", "Extreme (use *absolutely / really*, not *very*)"],
        rows: [
          ["very good", "*amazing, fantastic, wonderful*"],
          ["very bad", "*terrible, awful*"],
          ["very tasty", "*delicious*"],
          ["very scary / very tired", "*terrifying / exhausted*"]
        ],
        note: "Say *It was absolutely amazing!* or *really amazing* — not *very amazing*."
      }
    ],
    watchOut: [
      ["I was very boring in class.", "I was very bored in class."],
      ["It's the best movie I ever saw.", "It's the best movie I've ever seen."],
      ["The trip was very exhausted.", "The trip was exhausting."],
      ["It was very delicious.", "It was really delicious."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Choose the correct adjective form.",
      items: [
        "The movie was so [[boring]] that I fell asleep. (bored / boring)",
        "I'm really [[excited]] about the concert! (excited / exciting)",
        "It's the most [[interesting]] book I've ever read. (interested / interesting)",
        "We were [[tired]] after the long walk. (tired / tiring)",
        "That was the [[worst]] day I've ever had! (bad)",
        "This is the [[best]] pizza I've ever eaten. (good)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A travel podcast asks two guests about their best and worst travel experiences. Listen.",
      title: "Podcast: Travel highs and lows",
      script: [
        { who: "Host", line: "Omar, what's the most beautiful place you've ever visited?" },
        { who: "Omar", line: "Probably Hierve el Agua in Oaxaca. The view was absolutely amazing. I was really surprised because it wasn't crowded." },
        { who: "Host", line: "And the worst experience?" },
        { who: "Omar", line: "A twelve-hour bus trip to Chiapas. The air conditioning was freezing and the movie was so boring. It was the most exhausting trip I've ever taken." },
        { who: "Host", line: "Brisa, what about you?" },
        { who: "Brisa", line: "The most exciting thing I've ever done is swimming with whale sharks in Holbox. I was frightened at first, but it was fantastic." },
        { who: "Host", line: "And your worst?" },
        { who: "Brisa", line: "I lost my passport in Madrid. It was the most stressful day of my life! But a kind woman found it and called me." }
      ],
      activities: [
        {
          type: "match", title: "Best and worst",
          prompt: "Match the experience with the description.",
          pairs: [
            ["Hierve el Agua", "absolutely amazing"],
            ["the bus trip to Chiapas", "the most exhausting trip"],
            ["swimming with whale sharks", "the most exciting thing"],
            ["losing her passport", "the most stressful day"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Hierve el Agua was very crowded.", a: false },
            { s: "The air conditioning on the bus was too cold.", a: true },
            { s: "Brisa felt frightened at first.", a: true },
            { s: "Brisa never found her passport.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the reviews on a website about adventure tours.",
      title: "Adventure tour reviews",
      text: [
        { author: "⭐⭐⭐⭐⭐ Zip-lining in Cuetzalan · Diego", body: "This is the most exciting tour I've ever done! At first I was terrified, but the guides were fantastic. The views of the forest were absolutely amazing." },
        { author: "⭐⭐ Night tour of the pyramids · Lin", body: "Disappointing. We waited for an hour and the light show was boring. The worst part: it was freezing and nobody told us to bring a jacket." },
        { author: "⭐⭐⭐⭐ Cooking class in Puebla · Kevin", body: "A really interesting experience. We made mole poblano — it's the most complicated recipe I've ever tried! It was tiring, but the food was delicious." }
      ],
      activities: [
        {
          type: "sort", title: "Positive or negative?",
          prompt: "Sort the words from the reviews.",
          bins: ["😊 Positive", "😞 Negative"],
          items: [
            { text: "exciting", bin: 0 }, { text: "fantastic", bin: 0 }, { text: "amazing", bin: 0 }, { text: "delicious", bin: 0 },
            { text: "disappointing", bin: 1 }, { text: "boring", bin: 1 }, { text: "freezing", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Diego was terrified at the start.", a: true },
            { s: "Lin enjoyed the light show.", a: false },
            { s: "Kevin thinks mole is an easy recipe.", a: false },
            { s: "Kevin's class was tiring.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing experiences, then write about your best day ever.",
      activities: [
        {
          type: "rewrite", title: "Make a question",
          prompt: "Write the question. Example: *good / movie / see* → *What's the best movie you've ever seen?*",
          items: [
            { q: "good / book / read", a: ["What's the best book you've ever read?", "What is the best book you have ever read?"] },
            { q: "bad / food / eat", a: ["What's the worst food you've ever eaten?", "What is the worst food you have ever eaten?"] },
            { q: "beautiful / place / visit", a: ["What's the most beautiful place you've ever visited?", "What is the most beautiful place you have ever visited?"] },
            { q: "scary / thing / do", a: ["What's the scariest thing you've ever done?", "What is the scariest thing you have ever done?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "It was the best day I've ever had." },
            { a: "I was really excited about the trip." },
            { a: "The movie was absolutely terrible." },
            { a: "We were bored during the class." },
            { a: "What's the longest trip you've ever taken?" }
          ]
        },
        {
          type: "write", title: "My best day ever",
          prompt: "Write about the best day of your life (or one of the best). Where were you? What happened? How did you feel? Use a superlative with *I've ever*, two *-ed / -ing* adjectives and one extreme adjective.",
          minWords: 60, maxWords: 120,
          model: "The best day I've ever had was my 18th birthday. My friends organized a surprise trip to Valle de Bravo. I was so surprised when they picked me up at six in the morning! We went paragliding — it was terrifying at first, but absolutely amazing. Then we ate the most delicious fish I've ever tried. At night I was exhausted, but really happy. It was the most exciting day of my life.",
          bank: ["The best day I've ever had was…", "I was so surprised / excited…", "It was absolutely amazing / terrifying.", "the most … I've ever…", "At night I was exhausted.", "It was the … day of my life."],
          checklist: [
            "I used *the + superlative + I've ever*.",
            "I used *-ed* for feelings and *-ing* for things.",
            "I used an extreme adjective with *absolutely* or *really*.",
            "I used the past simple for the events."
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
            "What's the best concert you've ever been to?",
            "It was absolutely amazing.",
            "I was so excited!",
            "The movie was really boring.",
            "It's the most delicious food I've ever eaten.",
            "That was the worst day of my life."
          ]
        },
        {
          type: "speak", title: "Highs and lows",
          prompt: "Record yourself answering three questions: What's the best place you've ever visited? What's the most delicious thing you've ever eaten? What's the most boring or embarrassing thing that has happened to you? Explain how you felt.",
          language: ["The best place I've ever visited is…", "The most delicious thing I've ever eaten is…", "It was absolutely…", "I felt really excited / bored / embarrassed.", "It was the … I've ever…"],
          seconds: 90,
          checklist: ["use superlatives with *I've ever*?", "use -ed and -ing adjectives correctly?", "use extreme adjectives?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *the + superlative + I've ever*.", review: "Explanation: superlative + present perfect; Writing activity 1" },
    { can: "I can choose *-ed* or *-ing* adjectives.", review: "Explanation: -ed or -ing?; Quick check" },
    { can: "I can use extreme adjectives correctly.", review: "Explanation: extreme adjectives" },
    { can: "I can understand people describing experiences.", review: "Listening and Reading" },
    { can: "I can ask about other people's experiences.", review: "Presentation dialogue" },
    { can: "I can write about my best day.", review: "Writing activity 3" }
  ]
};
