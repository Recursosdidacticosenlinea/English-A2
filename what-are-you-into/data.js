window.UNIT = {
  slug: "what-are-you-into",
  number: 5,
  title: "What Are You Into?",
  level: "A2",
  minutes: 50,
  speakers: { "Kenji": "m", "Mariana": "f", "Host": "m", "Iris": "f", "Tomás": "m", A: "f", B: "m" },
  focus: ["verb + -ing: enjoy, love, hate, don't mind, can't stand", "verb + to: want, would like, hope, decide, plan", "be into / be interested in / be good at + -ing", "hobbies and interests", "So do I. / Neither do I."],

  presentation: {
    scene: "🎸📷🧗‍♀️🎨",
    situation: "Kenji and Mariana are filling out a form for a hobby club at the university. They talk about their interests.",
    warmup: {
      prompt: "Which hobbies are you into? Choose all.",
      options: ["photography", "playing an instrument", "drawing", "climbing", "gaming", "baking", "gardening", "reading comics", "dancing", "volunteering"],
      response: "Cool hobbies! In this unit you'll learn to talk about your interests with the right verb patterns."
    },
    dialogueTitle: "The hobby club form",
    dialogue: [
      { who: "Kenji", line: "So, what are you into, Mariana?" },
      { who: "Mariana", line: "*I'm really into* photography. *I enjoy taking* pictures of street art." },
      { who: "Kenji", line: "Nice! *I'm interested in learning* photography too. *I want to buy* a camera." },
      { who: "Mariana", line: "Great! What else *do you like doing*?" },
      { who: "Kenji", line: "*I love playing* the guitar, but *I can't stand practicing* scales!" },
      { who: "Mariana", line: "Ha! *I don't mind practicing*, but *I'm not very good at singing*." },
      { who: "Kenji", line: "*I hope to start* a band this year. *Would you like to* take photos of our concerts?" },
      { who: "Mariana", line: "Sure! *I've decided to try* new things this semester." }
    ]
  },

  objectives: [
    "I can talk about my hobbies and interests.",
    "I can use verb + *-ing* after *enjoy, love, hate, don't mind, can't stand*.",
    "I can use verb + *to* after *want, would like, hope, decide, plan*.",
    "I can agree and disagree with *So do I / Neither do I*."
  ],

  explanation: {
    vocabTitle: "Hobbies and interests",
    vocab: [
      { word: "photography", icon: "📷" }, { word: "play the guitar", icon: "🎸" }, { word: "drawing", icon: "✏️" },
      { word: "climbing", icon: "🧗" }, { word: "gaming", icon: "🎮" }, { word: "baking", icon: "🧁" },
      { word: "gardening", icon: "🪴" }, { word: "hiking", icon: "🥾" }, { word: "knitting", icon: "🧶" },
      { word: "volunteering", icon: "🤝" }, { word: "be into", icon: "😍" }, { word: "be interested in", icon: "🤔" },
      { word: "be good at", icon: "🏅" }, { word: "can't stand", icon: "😖" }, { word: "don't mind", icon: "😐" }
    ],
    grammar: [
      {
        title: "Verb + -ing",
        head: ["Verb", "Example"],
        rows: [
          ["*enjoy / love / like*", "I *enjoy taking* photos."],
          ["*don't mind*", "I *don't mind practicing*."],
          ["*hate / can't stand*", "I *can't stand practicing* scales."],
          ["*finish / stop / spend time*", "I *spend* hours *drawing*."],
          ["preposition + -ing", "I'm *interested in learning*. She's *good at singing*."]
        ],
        note: "After a preposition (*in, at, of, about*) always use *-ing*: *I'm into dancing.*"
      },
      {
        title: "Verb + to + infinitive",
        head: ["Verb", "Example"],
        rows: [
          ["*want / would like*", "I *want to buy* a camera."],
          ["*hope / plan*", "I *hope to start* a band."],
          ["*decide / learn*", "I *decided to try* climbing. She's *learning to draw*."],
          ["*need / try*", "You *need to practice* every day."]
        ]
      },
      {
        title: "Agreeing: So do I / Neither do I",
        head: ["Statement", "Agree", "Disagree"],
        rows: [
          ["I love dancing. (+)", "*So do I.* / *Me too.*", "*Really? I don't.*"],
          ["I don't like jazz. (–)", "*Neither do I.* / *Me neither.*", "*Oh, I do!*"],
          ["I'm into gaming. (+)", "*So am I.*", "*I'm not.*"],
          ["I can't swim. (–)", "*Neither can I.*", "*I can.*"]
        ],
        note: "Use the same auxiliary as the statement: *do, am, can*."
      }
    ],
    watchOut: [
      ["I enjoy to dance.", "I enjoy dancing."],
      ["I want buying a camera.", "I want to buy a camera."],
      ["I'm interested in learn Japanese.", "I'm interested in learning Japanese."],
      ["I don't like it. – So do I.", "Neither do I."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the verb with *-ing* or *to*.",
      items: [
        "I enjoy [[taking]] photos. (take)",
        "We want [[to buy]] a new camera. (buy)",
        "She can't stand [[waiting]] for the bus. (wait)",
        "He's good at [[drawing]] cartoons. (draw)",
        "I've decided [[to learn]] the guitar. (learn)",
        "They don't mind [[cooking]] on weekends. (cook)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio show, two listeners talk about their unusual hobbies. Listen.",
      title: "Radio: Unusual hobbies",
      script: [
        { who: "Host", line: "Today we're talking about unusual hobbies. Iris, what are you into?" },
        { who: "Iris", line: "I'm into birdwatching! I love getting up early and going to the mountains with my binoculars. I'm good at recognizing bird songs." },
        { who: "Host", line: "Do you take photos too?" },
        { who: "Iris", line: "Yes, but I'm not very good at it. I want to take a photography course next year." },
        { who: "Host", line: "And Tomás, what about you?" },
        { who: "Tomás", line: "My hobby is building model planes. I spend hours painting the small parts. My girlfriend can't stand the smell of the paint!" },
        { who: "Host", line: "Ha! Do you fly them?" },
        { who: "Tomás", line: "No, I don't. I just enjoy making them. I hope to open a small shop online one day." }
      ],
      activities: [
        {
          type: "sort", title: "Iris or Tomás?",
          prompt: "Sort the information.",
          bins: ["Iris", "Tomás"],
          items: [
            { text: "loves getting up early", bin: 0 }, { text: "good at recognizing bird songs", bin: 0 }, { text: "wants to take a photography course", bin: 0 },
            { text: "spends hours painting", bin: 1 }, { text: "enjoys making models", bin: 1 }, { text: "hopes to open a shop online", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Iris goes birdwatching in the city.", a: false },
            { s: "Iris is very good at photography.", a: false },
            { s: "Tomás's girlfriend doesn't like the paint smell.", a: true },
            { s: "Tomás flies his planes every weekend.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the posts on the university hobby club page.",
      title: "Join a club!",
      text: [
        { author: "Board Game Club", body: "Do you enjoy playing strategy games? We meet every Thursday at 5 p.m. You don't need to bring anything. We've got more than 80 games! New members who are interested in learning are very welcome." },
        { author: "Urban Gardening Club", body: "We grow tomatoes, herbs and flowers on the roof of Building 5. If you don't mind getting your hands dirty, join us! We plan to sell our vegetables at the student market in May." },
        { author: "Choir", body: "Are you good at singing? Or do you just love music? Everybody can join. This semester we hope to perform at the Cervantino Festival. Rehearsals: Mondays and Wednesdays, 7 p.m." }
      ],
      activities: [
        {
          type: "match", title: "Which club?",
          prompt: "Match the student with the best club.",
          pairs: [
            ["Ana loves plants and doesn't mind working outside.", "Urban Gardening Club"],
            ["Leo enjoys thinking and planning his moves.", "Board Game Club"],
            ["Brisa wants to perform in front of people.", "Choir"]
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete with one word from the posts.",
          items: [
            "Board game club members don't need [[to]] bring anything.",
            "The gardening club plans to [[sell]] vegetables in May.",
            "In the gardening club you get your hands [[dirty]].",
            "The choir hopes to [[perform]] at the Cervantino Festival.",
            "Choir rehearsals are on Mondays and [[Wednesdays]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice verb patterns, then write an application for a club.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I enjoy to read comics.", a: ["I enjoy reading comics."] },
            { q: "She wants learning French.", a: ["She wants to learn French."] },
            { q: "We're interested in join the club.", a: ["We're interested in joining the club.", "We are interested in joining the club."] },
            { q: "He's good at play chess.", a: ["He's good at playing chess.", "He is good at playing chess."] },
            { q: "I hope visiting Japan.", a: ["I hope to visit Japan."] }
          ]
        },
        {
          type: "sort", title: "-ing or to?",
          prompt: "Which form follows these verbs?",
          bins: ["+ -ing", "+ to + verb"],
          items: [
            { text: "enjoy", bin: 0 }, { text: "can't stand", bin: 0 }, { text: "don't mind", bin: 0 }, { text: "be good at", bin: 0 },
            { text: "want", bin: 1 }, { text: "hope", bin: 1 }, { text: "decide", bin: 1 }, { text: "would like", bin: 1 }
          ]
        },
        {
          type: "write", title: "Club application",
          prompt: "Write a message to join one of the clubs. Say what you're into, what you enjoy and don't enjoy, what you're good at, and what you hope to do in the club.",
          minWords: 50, maxWords: 100,
          model: "Hi! My name is Hugo and I'd like to join the Board Game Club. I'm really into strategy games and I enjoy playing with friends on weekends. I'm good at chess, but I'm not very good at card games. I can't stand losing, but I'm learning! I hope to meet new people and learn new games. See you on Thursday!",
          bank: ["I'd like to join…", "I'm really into…", "I enjoy…", "I'm good at… / not very good at…", "I can't stand…", "I hope to…", "I'm interested in…"],
          checklist: [
            "I used three verbs + *-ing*.",
            "I used two verbs + *to*.",
            "I used *good at* or *interested in* + *-ing*.",
            "I said why I want to join."
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
            "I'm really into photography.",
            "I enjoy taking pictures of street art.",
            "I can't stand waiting for the bus.",
            "I want to buy a new camera.",
            "I'm not very good at singing.",
            "I love dancing. So do I!"
          ]
        },
        {
          type: "speak", title: "My interests",
          prompt: "Record yourself talking about your hobbies: what you're into, what you enjoy and can't stand, what you're good at, and something you want to learn.",
          language: ["I'm really into…", "I enjoy… / I love…", "I can't stand…", "I'm good at…", "I'd like to learn…", "I hope to…"],
          seconds: 75,
          checklist: ["use verb + -ing?", "use verb + to?", "use *good at / into* + -ing?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about hobbies and interests.", review: "Explanation: vocabulary" },
    { can: "I can use verb + *-ing* after *enjoy, can't stand…*", review: "Explanation: verb + -ing; Quick check" },
    { can: "I can use verb + *to* after *want, hope, decide…*", review: "Explanation: verb + to; Writing activity 2" },
    { can: "I can use *-ing* after prepositions.", review: "Writing activity 1" },
    { can: "I can agree with *So do I / Neither do I*.", review: "Explanation: agreeing" },
    { can: "I can write an application to join a club.", review: "Writing activity 3" }
  ]
};
