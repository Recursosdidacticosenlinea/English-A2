window.UNIT = {
  slug: "a-weekend-away",
  number: 20,
  title: "A Weekend Away",
  level: "A2",
  minutes: 50,
  speakers: { "Brenda": "f", "Óscar": "m", "Receptionist": "f", "Ale": "m", A: "f", B: "m" },
  focus: ["be going to for plans and intentions", "infinitive of purpose: to + verb (We're going to Oaxaca to see…)", "booking accommodation", "What are you going to do there?", "Wh- questions with going to"],

  presentation: {
    scene: "🧳🏨🗺️📸",
    situation: "Brenda and Óscar have a long weekend. They're planning a trip to San Miguel de Allende.",
    warmup: {
      prompt: "What do you like doing on a weekend trip? Choose all.",
      options: ["visit museums", "try local food", "go hiking", "take photos", "go shopping", "relax at the hotel", "go to the beach", "dance at night", "meet locals", "visit churches"],
      response: "Let's plan a trip! In this unit you'll learn to talk about travel plans and give reasons."
    },
    dialogueTitle: "Planning the trip",
    dialogue: [
      { who: "Óscar", line: "So, *we're going to* leave on Friday afternoon, right?" },
      { who: "Brenda", line: "Yes. *We're going to take* the bus *to save* money." },
      { who: "Óscar", line: "Where *are we going to stay*?" },
      { who: "Brenda", line: "*I'm going to book* a small hotel near the main square. I'll call them today." },
      { who: "Óscar", line: "Great. *What are we going to do* on Saturday?" },
      { who: "Brenda", line: "In the morning *we're going to walk* around downtown *to see* the famous pink church. In the afternoon, *I'm going to visit* the art market *to buy* presents." },
      { who: "Óscar", line: "And *I'm going to try* the hot springs *to relax*!" },
      { who: "Brenda", line: "Perfect. *We aren't going to work* at all this weekend!" }
    ]
  },

  objectives: [
    "I can talk about plans with *be going to*.",
    "I can give reasons with *to* + verb.",
    "I can book a hotel room.",
    "I can ask and answer questions about someone's trip."
  ],

  explanation: {
    vocabTitle: "Travel plans",
    vocab: [
      { word: "book a hotel", icon: "🏨" }, { word: "pack", icon: "🧳" }, { word: "check in / out", icon: "🛎️" },
      { word: "go sightseeing", icon: "📸" }, { word: "hot springs", icon: "♨️" }, { word: "art market", icon: "🖼️" },
      { word: "a day trip", icon: "🚌" }, { word: "a single / double room", icon: "🛏️" }, { word: "breakfast included", icon: "🥐" },
      { word: "reservation", icon: "📅" }, { word: "souvenir", icon: "🎁" }, { word: "save money", icon: "🐷" },
      { word: "relax", icon: "😌" }, { word: "downtown", icon: "🏙️" }, { word: "long weekend", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Be going to: review",
        head: ["", "Example"],
        rows: [
          ["affirmative", "We*'re going to take* the bus."],
          ["negative", "We *aren't going to work*."],
          ["yes/no question", "*Are* you *going to stay* in a hotel?"],
          ["Wh- question", "*Where are* you *going to stay*? *What is* he *going to do*?"]
        ],
        note: "We use *going to* for plans and intentions we already decided."
      },
      {
        title: "Infinitive of purpose: to + verb",
        head: ["Question", "Answer"],
        rows: [
          ["*Why* are you taking the bus?", "*To save* money."],
          ["*Why* are you going to the market?", "I'm going there *to buy* presents."],
          ["", "We're going to Oaxaca *to see* the Guelaguetza."]
        ],
        note: "Say *to see* — not *for see* or *for to see*."
      }
    ],
    watchOut: [
      ["I'm going to the market for buy presents.", "I'm going to the market to buy presents."],
      ["We going to leave on Friday.", "We're going to leave on Friday."],
      ["Where you are going to stay?", "Where are you going to stay?"],
      ["She's going to visits her aunt.", "She's going to visit her aunt."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "We're [[going]] to take the bus on Friday.",
        "I'm going to the hot springs [[to]] relax.",
        "Where [[are]] you going to stay?",
        "She [[isn't|is not]] going to work this weekend.",
        "They're going to the market to [[buy]] souvenirs."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Ale calls a hotel to book a room for the long weekend. Listen.",
      title: "Booking a room",
      script: [
        { who: "Receptionist", line: "Hotel Casa Rosa, good morning." },
        { who: "Ale", line: "Hi. I'd like to book a room for this weekend, please. From Friday to Sunday." },
        { who: "Receptionist", line: "For how many people?" },
        { who: "Ale", line: "Two. A double room, please. Is breakfast included?" },
        { who: "Receptionist", line: "Yes, it is. A double room is 1,800 pesos per night." },
        { who: "Ale", line: "OK. We're going to arrive late on Friday, about eleven p.m. Is that a problem?" },
        { who: "Receptionist", line: "No problem. The reception is open 24 hours. Can I have your name, please?" },
        { who: "Ale", line: "Alejandro Ríos. And we're going to visit the hot springs on Saturday. Can you recommend one?" },
        { who: "Receptionist", line: "Yes, La Gruta is beautiful. We can book a taxi for you." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the booking",
          prompt: "Write the information.",
          items: [
            "Nights: Friday to [[Sunday]]",
            "Room: [[double]] · People: [[2|two]]",
            "Price per night: $[[1800|1,800]]",
            "Arrival time: about [[11|eleven]] p.m.",
            "Recommended hot springs: La [[Gruta]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Breakfast costs extra.", a: false },
            { s: "Arriving late is a problem.", a: false },
            { s: "Ale is going to visit the hot springs on Saturday.", a: true },
            { s: "The hotel can book a taxi.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the travel plans three friends posted in a group chat.",
      title: "Long weekend plans",
      text: [
        { author: "Majo", body: "I'm going to Veracruz to visit my grandparents. We're going to eat seafood and walk along the boardwalk. I'm not going to study at all!" },
        { author: "Daniel", body: "I'm going to stay in Puebla. I'm going to clean my apartment and go to the cinema. My cousins are coming from Monterrey to see the city, so I'm going to be their guide." },
        { author: "Renata", body: "I'm going to go camping in the mountains near Zacatlán to see the stars. My friends and I are going to cook outside and go hiking. I'm going to take my new camera to photograph the sunrise." }
      ],
      activities: [
        {
          type: "match", title: "Why are they doing it?",
          prompt: "Match the plan with the purpose.",
          pairs: [
            ["Majo is going to Veracruz", "to visit her grandparents."],
            ["Daniel's cousins are coming", "to see the city."],
            ["Renata is going to the mountains", "to see the stars."],
            ["Renata is taking her camera", "to photograph the sunrise."]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, she is / No, he isn't…*",
          items: [
            { q: "Is Majo going to study?", a: ["No, she isn't.", "No, she is not.", "No, she's not."] },
            { q: "Is Daniel going to travel?", a: ["No, he isn't.", "No, he is not.", "No, he's not."] },
            { q: "Are Renata and her friends going to cook outside?", a: ["Yes, they are."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice plans and purposes, then write about your next trip.",
      activities: [
        {
          type: "rewrite", title: "Give the reason",
          prompt: "Join the sentences with *to*.",
          items: [
            { q: "I'm going to the market. I want to buy souvenirs.", a: ["I'm going to the market to buy souvenirs.", "I am going to the market to buy souvenirs."] },
            { q: "We're taking the bus. We want to save money.", a: ["We're taking the bus to save money.", "We are taking the bus to save money."] },
            { q: "She's going to Oaxaca. She wants to see the Guelaguetza.", a: ["She's going to Oaxaca to see the Guelaguetza.", "She is going to Oaxaca to see the Guelaguetza."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What are you going to do on Saturday?" },
            { a: "We're going to stay near the beach." },
            { a: "I'm not going to take my laptop." },
            { a: "He's going to Mexico City to see a concert." },
            { a: "Are you going to book a hotel?" }
          ]
        },
        {
          type: "write", title: "My next trip",
          prompt: "Write about a trip you're going to take (real or imagined). Where are you going to go? How are you going to travel? Where are you going to stay? What are you going to do there, and why? Use *to* + verb at least twice.",
          minWords: 60, maxWords: 110,
          model: "Next month I'm going to visit Guanajuato with my sister. We're going to take the bus to save money. We're going to stay in a small hostel downtown. On the first day we're going to walk through the callejones to take photos. Then we're going to visit the Mummy Museum — I'm a bit scared! In the evening we're going to join a callejoneada to listen to music. We aren't going to sleep much!",
          bank: ["Next month I'm going to…", "We're going to take…", "We're going to stay in…", "On the first day…", "to see / to buy / to relax", "We aren't going to…"],
          checklist: [
            "I used *going to* for all my plans.",
            "I used *to* + verb for reasons twice.",
            "I wrote one negative with *going to*.",
            "I described travel, place to stay and activities."
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
            "We're going to leave on Friday afternoon.",
            "We're going to take the bus to save money.",
            "Where are we going to stay?",
            "I'm going to visit the market to buy presents.",
            "I'd like to book a double room, please.",
            "We aren't going to work this weekend!"
          ]
        },
        {
          type: "speak", title: "My weekend plans",
          prompt: "Record yourself describing your plans for a weekend away. Say where, how, where you're going to stay, and three things you're going to do there (with reasons).",
          language: ["I'm going to go to…", "I'm going to travel by…", "I'm going to stay at…", "I'm going to … to…", "I'm not going to…"],
          seconds: 75,
          checklist: ["use *going to* correctly?", "give reasons with *to* + verb?", "describe at least three activities?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about plans with *going to*.", review: "Explanation: be going to" },
    { can: "I can give reasons with *to* + verb.", review: "Explanation: infinitive of purpose; Writing activity 1" },
    { can: "I can ask questions about someone's trip.", review: "Presentation; Quick check" },
    { can: "I can book a hotel room by phone.", review: "Listening: booking a room" },
    { can: "I can understand people's travel plans.", review: "Reading: long weekend plans" },
    { can: "I can write about my next trip.", review: "Writing activity 3" }
  ]
};
