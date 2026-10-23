window.UNIT = {
  slug: "a-healthy-lifestyle",
  number: 22,
  title: "A Healthy Lifestyle",
  level: "A2",
  minutes: 50,
  speakers: { "Nutritionist": "f", "Luis": "m", "Host": "m", "Dr. Ana": "f", A: "f", B: "m" },
  focus: ["too much / too many / not enough", "a lot of / a little / a few / not much / not many", "How much…? How many…?", "healthy habits and diet", "You should eat more… and less…"],

  presentation: {
    scene: "🥗🏃‍♂️😴💧",
    situation: "Luis feels tired all the time. He visits a nutritionist to talk about his lifestyle.",
    warmup: {
      prompt: "Which habits are healthy? Choose all.",
      options: ["drink water", "eat vegetables", "sleep eight hours", "eat fast food every day", "walk every day", "drink a lot of soda", "eat fruit", "use your phone in bed", "do exercise", "skip breakfast"],
      response: "Good choices! In this unit you'll learn to talk about quantities and healthy habits."
    },
    dialogueTitle: "At the nutritionist",
    dialogue: [
      { who: "Nutritionist", line: "So, Luis, *how much water* do you drink a day?" },
      { who: "Luis", line: "Not much. *Maybe two glasses*. But I drink *a lot of* soda." },
      { who: "Nutritionist", line: "That's *too much* sugar. *How many* hours do you sleep?" },
      { who: "Luis", line: "About five. I play video games until late." },
      { who: "Nutritionist", line: "Five hours is *not enough*. You need seven or eight. And vegetables?" },
      { who: "Luis", line: "I eat *a few* carrots sometimes… and *a little* salad on weekends." },
      { who: "Nutritionist", line: "You need *more* vegetables and *less* fast food. You eat *too many* fries!" },
      { who: "Luis", line: "OK, OK. More water, more sleep, more vegetables… and *fewer* video games!" }
    ]
  },

  objectives: [
    "I can talk about quantities with *a lot of, a little, a few*.",
    "I can use *too much / too many / not enough* to describe problems.",
    "I can ask *How much…? How many…?*",
    "I can describe healthy and unhealthy habits."
  ],

  explanation: {
    vocabTitle: "Healthy living",
    vocab: [
      { word: "vegetables", icon: "🥦" }, { word: "fruit", icon: "🍎" }, { word: "water", icon: "💧" },
      { word: "sugar", icon: "🍬" }, { word: "salt", icon: "🧂" }, { word: "fast food", icon: "🍔" },
      { word: "fried food", icon: "🍟" }, { word: "soda", icon: "🥤" }, { word: "sleep", icon: "😴" },
      { word: "exercise", icon: "🏋️" }, { word: "stress", icon: "😫" }, { word: "screen time", icon: "📱" },
      { word: "healthy / unhealthy", icon: "❤️" }, { word: "diet", icon: "🥗" }, { word: "energy", icon: "⚡" }
    ],
    grammar: [
      {
        title: "Quantifiers",
        head: ["", "Countable (fries, hours)", "Uncountable (water, sugar)"],
        rows: [
          ["big quantity", "*a lot of* fries", "*a lot of* sugar"],
          ["small quantity", "*a few* carrots", "*a little* salad"],
          ["small (negative)", "*not many* vegetables", "*not much* water"],
          ["question", "*How many* hours?", "*How much* water?"]
        ]
      },
      {
        title: "Too much / too many / not enough",
        head: ["Structure", "Example"],
        rows: [
          ["*too many* + countable (more than is good)", "You eat *too many* fries."],
          ["*too much* + uncountable", "That's *too much* sugar."],
          ["*not enough* + noun (less than you need)", "You *don't* drink *enough* water."],
          ["*more / less / fewer*", "Eat *more* vegetables, *less* fast food, *fewer* sweets."]
        ],
        note: "*fewer* is for countable nouns (fewer games), *less* for uncountable (less sugar)."
      }
    ],
    watchOut: [
      ["I drink too many water.", "I drink too much water."],
      ["How much hours do you sleep?", "How many hours do you sleep?"],
      ["I don't sleep enough hours enough.", "I don't sleep enough."],
      ["I eat a little vegetables.", "I eat a few vegetables."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *much, many, few, little* or *enough*.",
      items: [
        "How [[much]] water do you drink?",
        "You eat too [[many]] sweets.",
        "I only have a [[little]] time today.",
        "There are a [[few]] apples in the kitchen.",
        "Five hours of sleep isn't [[enough]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio health program, Dr. Ana answers questions about healthy habits for students. Listen.",
      title: "Radio: Healthy students",
      script: [
        { who: "Host", line: "Dr. Ana, what are the most common problems you see in university students?" },
        { who: "Dr. Ana", line: "Many students don't sleep enough. They study late and drink too much coffee." },
        { who: "Host", line: "And food?" },
        { who: "Dr. Ana", line: "They eat too many snacks and not enough fresh food. A lot of students skip breakfast." },
        { who: "Host", line: "What do you recommend?" },
        { who: "Dr. Ana", line: "Sleep at least seven hours. Drink a lot of water — about two liters a day. Eat a few pieces of fruit every day. And move! Thirty minutes of walking is enough." },
        { who: "Host", line: "What about phones?" },
        { who: "Dr. Ana", line: "Students spend too much time on screens. Turn off your phone an hour before bed." }
      ],
      activities: [
        {
          type: "sort", title: "Problem or advice?",
          prompt: "Sort what Dr. Ana says.",
          bins: ["Problems", "Advice"],
          items: [
            { text: "don't sleep enough", bin: 0 }, { text: "too much coffee", bin: 0 }, { text: "too many snacks", bin: 0 }, { text: "too much screen time", bin: 0 },
            { text: "sleep at least seven hours", bin: 1 }, { text: "drink two liters of water", bin: 1 }, { text: "walk thirty minutes", bin: 1 }, { text: "turn off your phone before bed", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Many students skip breakfast.", a: true },
            { s: "Dr. Ana recommends one liter of water a day.", a: false },
            { s: "Thirty minutes of walking is enough.", a: true },
            { s: "She says to turn off your phone ten minutes before bed.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three people's answers in a lifestyle survey.",
      title: "How healthy are you?",
      text: [
        { author: "Mariana, 34, office worker", body: "I sit at my desk for nine hours a day, so I don't do enough exercise. I drink a lot of water and eat a few pieces of fruit, but I eat too many cookies in the afternoon!" },
        { author: "Javier, 19, student", body: "I play soccer four times a week, so I get a lot of exercise. But I don't eat many vegetables, and I drink too much soda. I sleep only about six hours." },
        { author: "Doña Rosa, 70, retired", body: "I walk to the market every morning and I cook with a lot of vegetables. I don't eat much meat and I use very little salt. I sleep eight hours. My only problem: too much coffee!" }
      ],
      activities: [
        {
          type: "match", title: "Who has this problem?",
          prompt: "Match the person with their problem.",
          pairs: [
            ["Mariana", "too many cookies and not enough exercise"],
            ["Javier", "too much soda and not enough sleep"],
            ["Doña Rosa", "too much coffee"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Mariana drinks a lot of water.", a: true },
            { s: "Javier eats a lot of vegetables.", a: false },
            { s: "Doña Rosa uses a lot of salt.", a: false },
            { s: "Doña Rosa sleeps eight hours.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice quantifiers, then write about your lifestyle.",
      activities: [
        {
          type: "sort", title: "Much or many?",
          prompt: "Which word goes with each noun?",
          bins: ["too much", "too many"],
          items: [
            { text: "sugar", bin: 0 }, { text: "coffee", bin: 0 }, { text: "screen time", bin: 0 }, { text: "salt", bin: 0 },
            { text: "fries", bin: 1 }, { text: "cookies", bin: 1 }, { text: "hours online", bin: 1 }, { text: "sodas", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I eat too many bread.", a: ["I eat too much bread."] },
            { q: "How much glasses of water do you drink?", a: ["How many glasses of water do you drink?"] },
            { q: "I don't sleep enough hours enough.", a: ["I don't sleep enough hours.", "I don't sleep enough."] },
            { q: "She eats a little apples every day.", a: ["She eats a few apples every day."] }
          ]
        },
        {
          type: "write", title: "My lifestyle",
          prompt: "Answer the survey: How healthy are you? Write about your food, drinks, sleep, exercise and screen time. Say what you do too much, what you don't do enough, and what you want to change.",
          minWords: 60, maxWords: 110,
          model: "I think I'm quite healthy, but not perfect. I eat a lot of fruit and I drink a lot of water. I walk to the university, so I get a little exercise every day. But I drink too much coffee — four cups a day! I don't sleep enough because I watch too many series at night. I want to sleep more and drink less coffee.",
          bank: ["I eat / drink a lot of…", "I eat a few… / a little…", "I don't … enough.", "I drink too much…", "I eat too many…", "I want to … more / less."],
          checklist: [
            "I used *a lot of, a few* or *a little*.",
            "I used *too much* and *too many* correctly.",
            "I used *not enough*.",
            "I said what I want to change."
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
            "How much water do you drink a day?",
            "That's too much sugar.",
            "You eat too many fries.",
            "Five hours of sleep is not enough.",
            "I eat a few carrots and a little salad.",
            "Eat more vegetables and less fast food."
          ]
        },
        {
          type: "speak", title: "Health coach",
          prompt: "Record yourself as a health coach giving advice to a student who sleeps five hours, drinks four sodas a day and never exercises. Describe the problems and give advice.",
          language: ["You drink too much…", "You eat too many…", "You don't … enough.", "You should eat more / less…", "Try to…", "A few… / a little…"],
          seconds: 75,
          checklist: ["use *too much / too many*?", "use *not enough*?", "give advice with *more / less*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *a lot of, a few, a little*.", review: "Explanation: quantifiers" },
    { can: "I can use *too much / too many / not enough*.", review: "Explanation; Writing activity 1" },
    { can: "I can ask *How much…? How many…?*", review: "Presentation; Quick check" },
    { can: "I can talk about healthy and unhealthy habits.", review: "Listening and Reading" },
    { can: "I can correct mistakes with quantifiers.", review: "Writing activity 2" },
    { can: "I can describe my lifestyle.", review: "Writing activity 3" }
  ]
};
