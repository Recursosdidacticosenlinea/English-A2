window.UNIT = {
  slug: "my-dream-house",
  number: 18,
  title: "My Dream House",
  level: "A2",
  minutes: 50,
  speakers: { "Agent": "f", "Mr. Torres": "m", "Mrs. Torres": "f", "Host": "m", "Paulina": "f", A: "f", B: "m" },
  focus: ["(not) as … as", "too + adjective / not + adjective + enough", "describing homes: spacious, cozy, sunny", "would like / would love + noun / to + verb", "It has… / There's…"],

  presentation: {
    scene: "🏡🔑🛋️🌳",
    situation: "Mr. and Mrs. Torres are looking for a new house. A real estate agent shows them two options.",
    warmup: {
      prompt: "What does your dream house have? Choose all.",
      options: ["a big garden", "a swimming pool", "a balcony", "a big kitchen", "a home office", "a garage", "a roof terrace", "lots of windows", "a fireplace", "a sea view"],
      response: "Sounds great! In this unit you'll learn to describe and compare homes."
    },
    dialogueTitle: "House hunting",
    dialogue: [
      { who: "Agent", line: "This is the house on Pino Street. It's *as big as* the one we saw this morning, but it's newer." },
      { who: "Mrs. Torres", line: "It's nice, but the kitchen is *too small*. I love cooking!" },
      { who: "Agent", line: "I understand. The other house has a bigger kitchen." },
      { who: "Mr. Torres", line: "Yes, but the other house *isn't as sunny as* this one. And the garden *isn't big enough* for our dogs." },
      { who: "Agent", line: "This one has a beautiful garden, and it's *not as expensive as* the other one." },
      { who: "Mrs. Torres", line: "Hmm. *I'd love* a big kitchen, and *I'd like to have* a home office too." },
      { who: "Mr. Torres", line: "Is it *quiet enough*? I work at night." },
      { who: "Agent", line: "Yes, the street is very quiet. *Would you like to* see the bedrooms?" }
    ]
  },

  objectives: [
    "I can compare things with *(not) as … as*.",
    "I can use *too* and *enough* to describe problems.",
    "I can describe a house with adjectives.",
    "I can say what I would like with *would like / would love*."
  ],

  explanation: {
    vocabTitle: "Describing homes",
    vocab: [
      { word: "spacious", icon: "📐" }, { word: "cozy", icon: "🛋️" }, { word: "sunny", icon: "☀️" },
      { word: "dark", icon: "🌑" }, { word: "modern", icon: "🏢" }, { word: "old-fashioned", icon: "🕰️" },
      { word: "noisy / quiet", icon: "🔊" }, { word: "furnished", icon: "🪑" }, { word: "garden", icon: "🌳" },
      { word: "balcony", icon: "🌇" }, { word: "roof terrace", icon: "🏙️" }, { word: "home office", icon: "💻" },
      { word: "neighborhood", icon: "🏘️" }, { word: "rent", icon: "💵" }, { word: "landlord", icon: "🔑" }
    ],
    grammar: [
      {
        title: "(not) as … as",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*as* + adjective + *as*", "the same", "This house is *as big as* the other one."],
          ["*not as* + adjective + *as*", "less", "It *isn't as expensive as* the other one."],
          ["", "", "= The other one is *more expensive*."]
        ]
      },
      {
        title: "Too and enough",
        head: ["Structure", "Example"],
        rows: [
          ["*too* + adjective (more than we want)", "The kitchen is *too small*."],
          ["adjective + *enough* (the right amount)", "Is it *quiet enough*?"],
          ["*not* + adjective + *enough* (less than we need)", "The garden *isn't big enough*."],
          ["*enough* + noun", "There *isn't enough* space for the dogs."]
        ],
        note: "Remember the order: *too big* but *big enough*."
      },
      {
        title: "Would like / would love",
        head: ["Structure", "Example"],
        rows: [
          ["*would like / love* + noun", "I*'d love* a big kitchen."],
          ["*would like / love* + *to* + verb", "I*'d like to have* a home office."],
          ["question", "*Would you like to* see the bedrooms?"]
        ]
      }
    ],
    watchOut: [
      ["It's as big than the other.", "It's as big as the other."],
      ["The garden is enough big.", "The garden is big enough."],
      ["It's too much small.", "It's too small."],
      ["I would like have a pool.", "I'd like to have a pool."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *as, too* or *enough*.",
      items: [
        "This apartment is [[as]] big as my old one.",
        "The bedroom is [[too]] dark. There's only one small window.",
        "The garden isn't big [[enough]] for a pool.",
        "It isn't as expensive [[as]] the house in Angelópolis.",
        "Is the living room spacious [[enough]] for a party?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a TV show about homes, Paulina describes her tiny apartment in Mexico City. Listen.",
      title: "TV: Small spaces, big ideas",
      script: [
        { who: "Host", line: "Paulina, your apartment is only twenty-five square meters. Is it big enough for you?" },
        { who: "Paulina", line: "Yes! It isn't as big as my parents' house, but it's big enough for one person and a cat." },
        { who: "Host", line: "What's the best thing about it?" },
        { who: "Paulina", line: "The location. It's in Roma Norte, near everything. And it's very sunny." },
        { who: "Host", line: "And the worst thing?" },
        { who: "Paulina", line: "The kitchen is too small to cook for friends. And the street is too noisy on weekends." },
        { who: "Host", line: "What would you like to change?" },
        { who: "Paulina", line: "I'd love a balcony, and I'd like to have more space for my books. But the rent isn't as high as in other neighborhoods, so I'm happy." }
      ],
      activities: [
        {
          type: "sort", title: "Good or bad?",
          prompt: "Sort Paulina's comments.",
          bins: ["😊 Good", "😕 Bad"],
          items: [
            { text: "big enough for her and her cat", bin: 0 }, { text: "great location", bin: 0 }, { text: "very sunny", bin: 0 }, { text: "the rent isn't too high", bin: 0 },
            { text: "the kitchen is too small", bin: 1 }, { text: "too noisy on weekends", bin: 1 }, { text: "no balcony", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The apartment is 25 square meters.", a: true },
            { s: "It's as big as her parents' house.", a: false },
            { s: "She can easily cook for friends.", a: false },
            { s: "She'd like more space for books.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the ads on a home rental website.",
      title: "Homes for rent",
      text: [
        { author: "Cozy studio · $6,000", body: "A small, cozy studio near BUAP. It's furnished and very sunny. It isn't big enough for two people, but it's perfect for a student. There's no parking." },
        { author: "Family house · $15,000", body: "A spacious house with three bedrooms, a garden and a garage. It's in a quiet neighborhood, but it's far from the center — you need a car. The kitchen is old-fashioned." },
        { author: "Modern apartment · $11,000", body: "A modern two-bedroom apartment with a roof terrace and a gym in the building. It isn't as spacious as a house, but the views are amazing. Pets are not allowed." }
      ],
      activities: [
        {
          type: "match", title: "The right home",
          prompt: "Match the person with the best home.",
          pairs: [
            ["A student who lives alone and has no car", "Cozy studio"],
            ["A family with two kids and a car", "Family house"],
            ["A couple who love views and exercise", "Modern apartment"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "The studio is big enough for a couple.", a: false },
            { s: "The family house is near the center.", a: false },
            { s: "The apartment isn't as spacious as a house.", a: true },
            { s: "You can have a dog in the modern apartment.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *as…as, too* and *enough*, then describe your dream house.",
      activities: [
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite with *not as … as*.",
          items: [
            { q: "The house is bigger than the apartment. (The apartment…)", a: ["The apartment isn't as big as the house.", "The apartment is not as big as the house."] },
            { q: "The studio is cheaper than the house. (The house…)", a: ["The house isn't as cheap as the studio.", "The house is not as cheap as the studio."] },
            { q: "My room is sunnier than yours. (Your room…)", a: ["Your room isn't as sunny as mine.", "Your room is not as sunny as mine.", "Your room isn't as sunny as my room."] }
          ]
        },
        {
          type: "rewrite", title: "Too or enough?",
          prompt: "Rewrite with *too* or *not … enough*.",
          items: [
            { q: "The kitchen is very small. I can't cook there. (too)", a: ["The kitchen is too small.", "The kitchen is too small to cook there."] },
            { q: "The garden is too small for the dogs. (big enough)", a: ["The garden isn't big enough for the dogs.", "The garden is not big enough for the dogs."] },
            { q: "The street is too noisy. (quiet enough)", a: ["The street isn't quiet enough.", "The street is not quiet enough."] }
          ]
        },
        {
          type: "write", title: "My home and my dream home",
          prompt: "Describe your home now: what's good and what's too small, too noisy, not big enough… Then describe your dream house with *I'd love… / I'd like to…*. Compare them with *(not) as … as*.",
          minWords: 60, maxWords: 120,
          model: "I live in a small apartment with my mom and my brother. It's cozy and sunny, but it isn't big enough for three people. My bedroom is too small for a desk, so I study in the kitchen. My dream house is near the beach in Oaxaca. I'd love a big garden and a roof terrace, and I'd like to have a home office. It wouldn't be as busy as my street now — just the sound of the sea!",
          bank: ["I live in…", "It's cozy / sunny / spacious.", "It isn't big enough for…", "My … is too…", "My dream house…", "I'd love… / I'd like to…", "It isn't as … as…"],
          checklist: [
            "I used *too* and *not … enough* correctly.",
            "I used *(not) as … as* once.",
            "I used *I'd love / I'd like to*.",
            "I used at least four home adjectives."
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
            "It's as big as the other house.",
            "The kitchen is too small.",
            "The garden isn't big enough for our dogs.",
            "It isn't as expensive as the other one.",
            "I'd love a big kitchen.",
            "Would you like to see the bedrooms?"
          ]
        },
        {
          type: "speak", title: "Dream house tour",
          prompt: "Record a tour of your dream house. Describe the rooms, the garden and the location, and compare it with your home now.",
          language: ["Welcome to my dream house!", "It has…", "There's a … with…", "It's much more spacious than…", "My home now isn't as … as…", "I'd love…"],
          seconds: 90,
          checklist: ["describe at least four parts of the house?", "use *as … as* or *too / enough*?", "use *would love / would like*?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can compare with *(not) as … as*.", review: "Explanation; Writing activity 1" },
    { can: "I can use *too* and *enough* correctly.", review: "Explanation: too and enough; Quick check" },
    { can: "I can describe homes with adjectives.", review: "Explanation: vocabulary; Reading" },
    { can: "I can say what I'd like with *would like / love*.", review: "Explanation: would like / would love" },
    { can: "I can understand people describing homes.", review: "Listening: small spaces" },
    { can: "I can write about my home and my dream home.", review: "Writing activity 3" }
  ]
};
