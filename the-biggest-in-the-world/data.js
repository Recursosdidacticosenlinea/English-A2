window.UNIT = {
  slug: "the-biggest-in-the-world",
  number: 17,
  title: "The Biggest in the World",
  level: "A2",
  minutes: 50,
  speakers: { "Quiz host": "m", "Andrea": "f", "Joel": "m", "Guide": "f", A: "f", B: "m" },
  focus: ["superlative adjectives: the biggest, the most famous, the best", "in the world / in Mexico / of all", "spelling: the hottest, the driest", "world records and geography", "Which is the…? I think it's…"],

  presentation: {
    scene: "🌎🏔️🏆🐋",
    situation: "Andrea and Joel are contestants on a TV quiz show about world records.",
    warmup: {
      prompt: "Which of these do you think are world records? Guess!",
      options: ["the tallest building: Dubai", "the longest river: the Nile", "the biggest animal: the blue whale", "the largest city: Tokyo", "the highest mountain: Everest", "the hottest desert: the Sahara", "the smallest country: Vatican City", "the deepest ocean: the Pacific"],
      response: "Good guesses — all of them are true! In this unit you'll learn to talk about records with superlatives."
    },
    dialogueTitle: "World Records Quiz",
    dialogue: [
      { who: "Quiz host", line: "Welcome back! Andrea, first question: *what's the biggest animal in the world*?" },
      { who: "Andrea", line: "*I think it's* the blue whale." },
      { who: "Quiz host", line: "Correct! Joel, *which is the longest river* in South America?" },
      { who: "Joel", line: "The Amazon. It's also *one of the longest* rivers *in the world*." },
      { who: "Quiz host", line: "Right! Andrea: *what's the highest mountain in Mexico*?" },
      { who: "Andrea", line: "Hmm… Popocatépetl?" },
      { who: "Quiz host", line: "Sorry, no! It's the Pico de Orizaba. It's *the highest* in Mexico and *the third highest* in North America." },
      { who: "Joel", line: "Can I answer the next one? I know *the most famous* pyramid in Mexico — Teotihuacán's Pyramid of the Sun!" },
      { who: "Quiz host", line: "Wait for the question, Joel!" }
    ]
  },

  objectives: [
    "I can use superlative adjectives correctly.",
    "I can talk about world records and geography.",
    "I can use *in, of* and *one of the* with superlatives.",
    "I can ask and answer quiz questions."
  ],

  explanation: {
    vocabTitle: "Geography and records",
    vocab: [
      { word: "mountain", icon: "🏔️" }, { word: "river", icon: "🏞️" }, { word: "ocean", icon: "🌊" },
      { word: "desert", icon: "🏜️" }, { word: "volcano", icon: "🌋" }, { word: "waterfall", icon: "💦" },
      { word: "lake", icon: "🛶" }, { word: "island", icon: "🏝️" }, { word: "building", icon: "🏙️" },
      { word: "bridge", icon: "🌉" }, { word: "tall / high", icon: "📏" }, { word: "long", icon: "↔️" },
      { word: "deep", icon: "⬇️" }, { word: "dry", icon: "☀️" }, { word: "world record", icon: "🏆" }
    ],
    grammar: [
      {
        title: "Superlative adjectives",
        head: ["Adjective", "Rule", "Superlative"],
        rows: [
          ["short: tall, long, deep", "*the* + *-est*", "*the* tall*est*, *the* long*est*"],
          ["ending in -e: large, wide", "*the* + *-st*", "*the* large*st*"],
          ["one vowel + consonant: big, hot", "double + *-est*", "*the* bi*ggest*, *the* ho*ttest*"],
          ["ending in -y: dry, busy, easy", "y → *-iest*", "*the* dr*iest*, *the* bus*iest*"],
          ["long: famous, beautiful", "*the most* + adjective", "*the most* famous"],
          ["irregular: good, bad, far", "", "*the best, the worst, the farthest*"]
        ]
      },
      {
        title: "Using superlatives",
        head: ["Structure", "Example"],
        rows: [
          ["*in* + place / group", "the highest mountain *in* Mexico"],
          ["*of* + period / group with number", "the best day *of* the year / *of* all"],
          ["*one of the* + superlative + plural", "*one of the* longest *rivers* in the world"],
          ["ordinal + superlative", "the *third* highest mountain"]
        ],
        note: "Always use *the* before a superlative: *It's the biggest.* — never *It's biggest.*"
      }
    ],
    watchOut: [
      ["It's the more famous pyramid.", "It's the most famous pyramid."],
      ["the bigest animal", "the biggest animal"],
      ["the highest mountain of Mexico", "the highest mountain in Mexico"],
      ["one of the longest river", "one of the longest rivers"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the superlative.",
      items: [
        "The blue whale is [[the biggest]] animal in the world. (big)",
        "The Atacama is one of [[the driest]] places on Earth. (dry)",
        "Mexico City is one of [[the largest]] cities in the world. (large)",
        "That was [[the best]] day of my vacation. (good)",
        "Chichén Itzá is one of [[the most famous]] places in Mexico. (famous)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A tour guide talks about natural records in Mexico. Listen.",
      title: "Mexico's natural records",
      script: [
        { who: "Guide", line: "Mexico has some amazing natural records. The Pico de Orizaba is the highest mountain in the country: 5,636 meters." },
        { who: "Guide", line: "The Copper Canyon in Chihuahua is bigger and deeper than the Grand Canyon in the USA!" },
        { who: "Guide", line: "The longest river in Mexico is the Bravo, on the border with the United States. And Lake Chapala, in Jalisco, is the largest lake in the country." },
        { who: "Guide", line: "Mexico also has one of the biggest underwater cave systems in the world, in Quintana Roo." },
        { who: "Guide", line: "Finally, the Monarch Butterfly Reserve in Michoacán is one of the most beautiful places you can visit in winter." }
      ],
      activities: [
        {
          type: "match", title: "Mexico's records",
          prompt: "Match the place with the record.",
          pairs: [
            ["Pico de Orizaba", "the highest mountain in Mexico"],
            ["the Bravo", "the longest river in Mexico"],
            ["Lake Chapala", "the largest lake in Mexico"],
            ["Quintana Roo", "one of the biggest underwater cave systems"],
            ["the Copper Canyon", "bigger than the Grand Canyon"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The Pico de Orizaba is 5,636 meters high.", a: true },
            { s: "The Copper Canyon is in Sonora.", a: false },
            { s: "Lake Chapala is in Jalisco.", a: true },
            { s: "The Monarch Butterfly Reserve is beautiful in summer.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about amazing world records.",
      title: "Records you won't believe",
      text: [
        { author: "The tallest building", body: "The Burj Khalifa in Dubai is the tallest building in the world. It's 828 meters high and has 163 floors. The fastest elevator takes you to the top in about one minute." },
        { author: "The driest place", body: "The Atacama Desert in Chile is the driest non-polar place on Earth. Some parts haven't had rain for hundreds of years. Scientists use it to test robots for Mars!" },
        { author: "The busiest airport", body: "Atlanta's airport in the USA is one of the busiest airports in the world. More than 100 million passengers use it every year — that's almost the population of Mexico!" }
      ],
      activities: [
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with a number or one word from the article.",
          items: [
            "The Burj Khalifa is [[828]] meters high.",
            "It has [[163]] floors.",
            "The Atacama is in [[Chile]].",
            "Scientists test robots for [[Mars]] there.",
            "More than 100 [[million]] passengers use Atlanta's airport every year."
          ]
        },
        {
          type: "rewrite", title: "Write the superlative sentence",
          prompt: "Write a sentence with a superlative.",
          items: [
            { q: "Burj Khalifa / tall / building / world", a: ["The Burj Khalifa is the tallest building in the world.", "Burj Khalifa is the tallest building in the world."] },
            { q: "Atacama / dry / place / Earth", a: ["The Atacama is the driest place on Earth.", "Atacama is the driest place on Earth.", "The Atacama Desert is the driest place on Earth."] },
            { q: "Atlanta's airport / one of / busy / airports", a: ["Atlanta's airport is one of the busiest airports.", "Atlanta's airport is one of the busiest airports in the world."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice superlatives, then write a quiz about your country or city.",
      activities: [
        {
          type: "rewrite", title: "Spell the superlative",
          prompt: "Write the superlative with *the*.",
          items: [
            { q: "hot", a: ["the hottest"] },
            { q: "dry", a: ["the driest"] },
            { q: "large", a: ["the largest"] },
            { q: "beautiful", a: ["the most beautiful"] },
            { q: "bad", a: ["the worst"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What's the tallest building in Mexico?" },
            { a: "It's one of the oldest cities in America." },
            { a: "This is the best restaurant in town." },
            { a: "Which is the longest river in the world?" },
            { a: "That was the worst day of the year." }
          ]
        },
        {
          type: "write", title: "My city's records",
          prompt: "Write a short guide to the records of your city or state: the oldest building, the best restaurant, the most beautiful place, the busiest street… Add one fact for each.",
          minWords: 60, maxWords: 110,
          model: "Puebla is full of records! The oldest public library in America, the Palafoxiana, is here. It opened in 1646. The most famous dish is mole poblano, and the best place to eat it is a small restaurant near the zócalo. The tallest building is the Torre JV. The busiest street is Reforma — it's always full of cars. And the most beautiful view is from the pyramid in Cholula, with the volcanoes behind it.",
          bank: ["The oldest … is…", "The most famous … is…", "The best place to … is…", "The busiest street is…", "One of the most beautiful…", "It's the … in Mexico."],
          checklist: [
            "I used at least **five** superlatives.",
            "I used *the* before every superlative.",
            "I used *in* or *one of the*.",
            "I added a fact for each record."
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
            "What's the biggest animal in the world?",
            "I think it's the blue whale.",
            "It's one of the longest rivers in the world.",
            "It's the highest mountain in Mexico.",
            "That's the most famous pyramid.",
            "This is the best day of the year!"
          ]
        },
        {
          type: "speak", title: "Quiz master",
          prompt: "Record yourself as a quiz host. Ask five superlative questions about the world or Mexico, and then give the answers.",
          language: ["Question one: What's the … in the world?", "Which is the most…?", "The answer is…", "It's one of the…", "Correct! / Sorry, that's wrong."],
          seconds: 75,
          checklist: ["ask five questions with superlatives?", "use *the* correctly?", "give the answers with facts?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form superlative adjectives.", review: "Explanation: superlative adjectives; Writing activity 1" },
    { can: "I can use *in, of, one of the* with superlatives.", review: "Explanation: using superlatives" },
    { can: "I can talk about geography and records.", review: "Listening and Reading" },
    { can: "I can ask and answer quiz questions.", review: "Presentation; Speaking activity 2" },
    { can: "I can write sentences with superlatives.", review: "Reading activity 2; Quick check" },
    { can: "I can write a guide to my city's records.", review: "Writing activity 3" }
  ]
};
