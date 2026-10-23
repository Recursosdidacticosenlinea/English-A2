window.UNIT = {
  slug: "city-or-country",
  number: 16,
  title: "City or Country?",
  level: "A2",
  minutes: 50,
  speakers: { "Fernanda": "f", "Diego": "m", "Host": "m", "Rosa": "f", "Toño": "m", A: "f", B: "m" },
  focus: ["comparative adjectives: bigger, more expensive, better", "than / much / a bit", "spelling: hotter, easier, nicer", "describing cities and the countryside", "Which is better…? I prefer… because…"],

  presentation: {
    scene: "🏙️🌄🚗🐄",
    situation: "Fernanda and Diego are a couple. Diego got a job offer in a small town near the mountains. They discuss if they should move.",
    warmup: {
      prompt: "Where would you like to live? Choose the things that are important for you.",
      options: ["quiet streets", "clean air", "lots of shops", "nightlife", "nature", "good transport", "cheap houses", "big parks", "friendly neighbors", "good jobs"],
      response: "Interesting! In this unit you'll learn to compare places and say what you prefer."
    },
    dialogueTitle: "Should we move?",
    dialogue: [
      { who: "Diego", line: "Think about it, Fernanda. Life in Zacatlán is *quieter than* in Puebla." },
      { who: "Fernanda", line: "Yes, but it's *much smaller*. There are fewer jobs for me." },
      { who: "Diego", line: "True. But houses are *cheaper*, and the air is *cleaner*." },
      { who: "Fernanda", line: "It's also *colder* and *rainier*. And the hospitals in Puebla are *better*." },
      { who: "Diego", line: "But traffic here is *worse* every year! I spend two hours a day in the car." },
      { who: "Fernanda", line: "Hmm. The country is *more relaxing*, I agree. But the city is *more exciting*." },
      { who: "Diego", line: "*Which is better* for a family?" },
      { who: "Fernanda", line: "Maybe the country. Let's visit first. *I prefer* to decide slowly!" }
    ]
  },

  objectives: [
    "I can compare two things with comparative adjectives.",
    "I can spell comparatives correctly.",
    "I can use *much / a bit* to make comparisons stronger or weaker.",
    "I can say which place I prefer and why."
  ],

  explanation: {
    vocabTitle: "City and country",
    vocab: [
      { word: "noisy", icon: "📢" }, { word: "quiet", icon: "🤫" }, { word: "crowded", icon: "👥" },
      { word: "polluted", icon: "🏭" }, { word: "clean", icon: "🌿" }, { word: "safe", icon: "🛡️" },
      { word: "dangerous", icon: "⚠️" }, { word: "expensive", icon: "💸" }, { word: "cheap", icon: "🪙" },
      { word: "exciting", icon: "🎆" }, { word: "relaxing", icon: "😌" }, { word: "traffic", icon: "🚗" },
      { word: "nightlife", icon: "🌃" }, { word: "countryside", icon: "🌄" }, { word: "fresh air", icon: "🍃" }
    ],
    grammar: [
      {
        title: "Comparative adjectives",
        head: ["Adjective", "Rule", "Comparative"],
        rows: [
          ["short: cheap, clean, small", "+ *-er*", "cheap*er*, clean*er*, small*er*"],
          ["ending in -e: nice, safe", "+ *-r*", "nice*r*, safe*r*"],
          ["one vowel + one consonant: big, hot", "double + *-er*", "bi*gger*, ho*tter*"],
          ["ending in -y: busy, easy, rainy", "y → *-ier*", "bus*ier*, eas*ier*, rain*ier*"],
          ["long: expensive, relaxing", "*more* + adjective", "*more* expensive, *more* relaxing"],
          ["irregular: good, bad, far", "", "*better, worse, farther / further*"]
        ],
        note: "Use *than* to compare: *The city is noisier than the country.*"
      },
      {
        title: "Stronger and weaker comparisons",
        head: ["Word", "Example"],
        rows: [
          ["*much / a lot* (big difference)", "Puebla is *much bigger* than Zacatlán."],
          ["*a bit / a little* (small difference)", "Zacatlán is *a bit colder*."],
          ["*less* + long adjective", "The country is *less stressful*."]
        ]
      },
      {
        title: "Preferences",
        head: ["Structure", "Example"],
        rows: [
          ["*I prefer* A *to* B", "*I prefer* the country *to* the city."],
          ["*I'd rather* live in…", "*I'd rather* live near the sea."],
          ["*Which is better, A or B?*", "*I think* A is better *because*…"]
        ]
      }
    ],
    watchOut: [
      ["The city is more big than the town.", "The city is bigger than the town."],
      ["It's more cheaper.", "It's cheaper."],
      ["Puebla is gooder for jobs.", "Puebla is better for jobs."],
      ["It's hoter in summer.", "It's hotter in summer."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the comparative form.",
      items: [
        "The country is [[quieter]] than the city. (quiet)",
        "Mexico City is [[bigger]] than Puebla. (big)",
        "Houses in the city are [[more expensive]]. (expensive)",
        "Traffic is [[worse]] every year. (bad)",
        "Life in a small town is [[easier]]. (easy)",
        "The hospitals here are [[better]]. (good)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio show, two people talk about moving. Rosa moved from Mexico City to a village. Toño did the opposite. Listen.",
      title: "Radio: I moved and I don't regret it",
      script: [
        { who: "Host", line: "Rosa, you moved from Mexico City to a village in Oaxaca. Why?" },
        { who: "Rosa", line: "I wanted a slower life. In the village, everything is calmer. The food is fresher and people are friendlier. And my rent is much cheaper!" },
        { who: "Host", line: "Is anything worse?" },
        { who: "Rosa", line: "Yes. The internet is slower, and the nearest hospital is an hour away." },
        { who: "Host", line: "Toño, you moved from a small town to Monterrey." },
        { who: "Toño", line: "Yes. For me the city is more interesting. There are more jobs and the salaries are higher. I also have more options for my free time." },
        { who: "Host", line: "And the bad things?" },
        { who: "Toño", line: "It's much more stressful, and the air is dirtier. But I prefer the city to my old town." }
      ],
      activities: [
        {
          type: "sort", title: "Rosa or Toño?",
          prompt: "Who says it about their new home?",
          bins: ["Rosa (village)", "Toño (city)"],
          items: [
            { text: "calmer", bin: 0 }, { text: "fresher food", bin: 0 }, { text: "cheaper rent", bin: 0 }, { text: "slower internet", bin: 0 },
            { text: "more jobs", bin: 1 }, { text: "higher salaries", bin: 1 }, { text: "more stressful", bin: 1 }, { text: "dirtier air", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Rosa moved because she wanted a faster life.", a: false },
            { s: "The hospital is near Rosa's village.", a: false },
            { s: "Toño moved to Monterrey.", a: true },
            { s: "Toño prefers his old town.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a student magazine.",
      title: "Puebla or Cholula: where should students live?",
      text: [
        { author: "Puebla downtown", body: "Downtown Puebla is bigger and busier than Cholula. There are more museums, cafés and old buildings. Apartments are a bit more expensive, and it's noisier at night. But transport is better: there are more buses to the universities." },
        { author: "San Andrés Cholula", body: "Cholula is smaller and greener. It's closer to some universities, so many students walk or cycle. Apartments are newer and often cheaper. The nightlife is very popular with young people, but it can be crowded on weekends." }
      ],
      activities: [
        {
          type: "sort", title: "Which place?",
          prompt: "Put each comparison under the right place.",
          bins: ["Downtown Puebla", "Cholula"],
          items: [
            { text: "more museums", bin: 0 }, { text: "noisier at night", bin: 0 }, { text: "better transport", bin: 0 }, { text: "a bit more expensive", bin: 0 },
            { text: "smaller and greener", bin: 1 }, { text: "closer to some universities", bin: 1 }, { text: "newer apartments", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Compare",
          prompt: "Write a sentence with the comparative and *than*.",
          items: [
            { q: "Puebla / Cholula (big)", a: ["Puebla is bigger than Cholula.", "Downtown Puebla is bigger than Cholula."] },
            { q: "Cholula / Puebla (green)", a: ["Cholula is greener than Puebla."] },
            { q: "apartments in Puebla / apartments in Cholula (expensive)", a: ["Apartments in Puebla are more expensive than apartments in Cholula.", "Apartments in Puebla are more expensive than in Cholula.", "Apartments in Puebla are a bit more expensive than apartments in Cholula.", "Apartments in Puebla are a bit more expensive than in Cholula."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice comparatives, then compare two places you know.",
      activities: [
        {
          type: "rewrite", title: "Spell the comparative",
          prompt: "Write the comparative.",
          items: [
            { q: "hot", a: ["hotter"] },
            { q: "busy", a: ["busier"] },
            { q: "safe", a: ["safer"] },
            { q: "dangerous", a: ["more dangerous"] },
            { q: "far", a: ["farther", "further"] },
            { q: "good", a: ["better"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The city is much noisier than the country." },
            { a: "Houses are a bit cheaper here." },
            { a: "I prefer the beach to the mountains." },
            { a: "Which is better for a family?" },
            { a: "Life in a village is less stressful." }
          ]
        },
        {
          type: "write", title: "Two places",
          prompt: "Compare your city or town with another place you know (a city you visited, your grandparents' town…). Write about size, prices, transport, nature and people. Say which you prefer and why.",
          minWords: 60, maxWords: 110,
          model: "I live in Puebla, but my grandparents live in Cuetzalan. Puebla is much bigger and busier than Cuetzalan. There are more shops and the transport is better. But Cuetzalan is greener and quieter, and the air is much cleaner. Food is a bit cheaper there too. It's rainier and colder, so I need a jacket! I prefer Cuetzalan for vacations, but I'd rather live in Puebla because there are more jobs.",
          bank: ["… is much bigger than…", "… is a bit cheaper…", "There are more / fewer…", "The air is cleaner / dirtier.", "I prefer … to … because…", "I'd rather live in…"],
          checklist: [
            "I used at least **five** comparatives.",
            "I used *than*.",
            "I used *much* or *a bit*.",
            "I said which place I prefer and why."
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
            "Life in the country is quieter.",
            "The city is much bigger than the town.",
            "Houses are cheaper and the air is cleaner.",
            "The traffic is worse every year.",
            "The city is more exciting.",
            "I prefer the country to the city."
          ]
        },
        {
          type: "speak", title: "City or country?",
          prompt: "Record yourself answering: Is it better to live in a big city or in the countryside? Give at least four comparisons and say what you prefer.",
          language: ["The city is … than the country.", "The country is much…", "… is a bit more…", "On the other hand,…", "I prefer … to … because…"],
          seconds: 90,
          checklist: ["use at least four comparatives?", "use *than*?", "give your opinion with reasons?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can compare two things with comparatives.", review: "Explanation: comparative adjectives" },
    { can: "I can spell comparatives correctly.", review: "Writing activity 1; Quick check" },
    { can: "I can use *much / a bit / less*.", review: "Explanation: stronger and weaker comparisons" },
    { can: "I can say which place I prefer and why.", review: "Explanation: preferences" },
    { can: "I can understand people comparing places.", review: "Listening and Reading" },
    { can: "I can write a comparison of two places.", review: "Writing activity 3" }
  ]
};
