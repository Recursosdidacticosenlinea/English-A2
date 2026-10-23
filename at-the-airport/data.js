window.UNIT = {
  slug: "at-the-airport",
  number: 49,
  title: "At the Airport",
  level: "A2",
  minutes: 50,
  speakers: { "Check-in agent": "f", "Diego": "m", "Officer": "m", "Announcer": "f", "Lucía": "f", A: "f", B: "m" },
  focus: ["airport vocabulary: check in, boarding pass, gate, security", "present perfect: Have you packed…? I've already checked in.", "polite questions at check-in and immigration", "announcements: delayed, cancelled, boarding", "How long are you staying? / What's the purpose of your trip?"],

  presentation: {
    scene: "✈️🛂🧳🎫",
    situation: "Diego is flying to Vancouver, Canada, for an English summer course. It's his first international flight.",
    warmup: {
      prompt: "What do you do at an airport? Choose all.",
      options: ["check in", "drop off a suitcase", "go through security", "show your passport", "buy duty-free", "wait at the gate", "board the plane", "collect your luggage", "go through customs", "change money"],
      response: "Ready to fly! In this unit you'll learn the English you need at an airport."
    },
    dialogueTitle: "Check-in",
    dialogue: [
      { who: "Check-in agent", line: "Good morning. *Can I see your passport*, please?" },
      { who: "Diego", line: "Here you are. I'm flying to Vancouver." },
      { who: "Check-in agent", line: "Thank you. *How many bags are you checking*?" },
      { who: "Diego", line: "Just one suitcase. And this backpack is my *carry-on*." },
      { who: "Check-in agent", line: "*Have you packed* your bag yourself?" },
      { who: "Diego", line: "Yes, I have." },
      { who: "Check-in agent", line: "*Window or aisle seat*?" },
      { who: "Diego", line: "Window, please. It's my first international flight!" },
      { who: "Check-in agent", line: "Here's your *boarding pass*. You're in seat 23A. *Boarding* starts at 10:40 at *gate* 12. Have a nice flight!" }
    ]
  },

  objectives: [
    "I can check in for a flight.",
    "I can understand airport announcements.",
    "I can answer questions at immigration.",
    "I can use the present perfect for things I've already done or haven't done yet."
  ],

  explanation: {
    vocabTitle: "At the airport",
    vocab: [
      { word: "check in", icon: "🛄" }, { word: "boarding pass", icon: "🎫" }, { word: "passport", icon: "🛂" },
      { word: "carry-on bag", icon: "🎒" }, { word: "suitcase", icon: "🧳" }, { word: "security", icon: "🔍" },
      { word: "gate", icon: "🚪" }, { word: "board", icon: "🛫" }, { word: "delayed", icon: "⏳" },
      { word: "cancelled", icon: "❌" }, { word: "departures / arrivals", icon: "🛬" }, { word: "immigration", icon: "🏛️" },
      { word: "customs", icon: "📋" }, { word: "baggage claim", icon: "🧳" }, { word: "duty-free", icon: "🛍️" }
    ],
    grammar: [
      {
        title: "Useful airport questions",
        head: ["Question", "Answer"],
        rows: [
          ["*Can I see your passport, please?*", "*Here you are.*"],
          ["*How many bags are you checking?*", "*One suitcase.*"],
          ["*Have you packed your bag yourself?*", "*Yes, I have.*"],
          ["*What's the purpose of your trip?*", "*I'm here to study / on vacation / for work.*"],
          ["*How long are you staying?*", "*For four weeks.*"],
          ["*Where are you staying?*", "*With a host family / at a hotel.*"]
        ]
      },
      {
        title: "Present perfect at the airport",
        head: ["Use", "Example"],
        rows: [
          ["done (already)", "I*'ve already checked* in online."],
          ["not done (yet)", "I *haven't changed* money *yet*."],
          ["just", "The plane *has just landed*."],
          ["questions", "*Have* you *got* anything to declare? / *Has* the flight *been* delayed?"]
        ]
      }
    ],
    watchOut: [
      ["I'm here for study.", "I'm here to study."],
      ["I stay four weeks.", "I'm staying for four weeks."],
      ["The flight is delay.", "The flight is delayed."],
      ["Where is the gate twelve?", "Where is gate twelve?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the question with the answer.",
      pairs: [
        ["What's the purpose of your trip?", "I'm here to study English."],
        ["How long are you staying?", "For four weeks."],
        ["Where are you staying?", "With a host family."],
        ["Window or aisle seat?", "Window, please."],
        ["Have you packed your bag yourself?", "Yes, I have."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Lucía is at the airport. Listen to the announcements and her conversation with an immigration officer.",
      title: "Announcements and immigration",
      script: [
        { who: "Announcer", line: "Attention, please. Flight AM 650 to Madrid is now boarding at gate 8. Passengers in rows 20 to 35, please board now." },
        { who: "Announcer", line: "Flight AM 210 to Los Angeles has been delayed. The new departure time is 3:45 p.m." },
        { who: "Announcer", line: "We're sorry to announce that flight VB 118 to Monterrey has been cancelled due to bad weather." },
        { who: "Officer", line: "Good afternoon. Passport, please. What's the purpose of your visit to Spain?" },
        { who: "Lucía", line: "I'm here on vacation. I'm visiting my cousin." },
        { who: "Officer", line: "How long are you staying?" },
        { who: "Lucía", line: "Two weeks. I've got a return ticket for the 28th." },
        { who: "Officer", line: "Where are you staying?" },
        { who: "Lucía", line: "At my cousin's apartment in Madrid." },
        { who: "Officer", line: "OK. Enjoy your stay." }
      ],
      activities: [
        {
          type: "match", title: "Flight information",
          prompt: "Match the flight with its status.",
          pairs: [
            ["AM 650 to Madrid", "boarding at gate 8"],
            ["AM 210 to Los Angeles", "delayed until 3:45 p.m."],
            ["VB 118 to Monterrey", "cancelled"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The Monterrey flight was cancelled because of bad weather.", a: true },
            { s: "Lucía is visiting Spain for work.", a: false },
            { s: "She's staying for two weeks.", a: true },
            { s: "She's staying at a hotel.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an airline's tips for international travelers.",
      title: "Flying abroad? Read this first!",
      text: [
        { author: "Before you leave", body: "Check that your passport is valid for at least six months. Have you checked if you need a visa? Many countries require one. Check in online 24 hours before your flight." },
        { author: "At the airport", body: "Arrive three hours before international flights. Liquids in your carry-on bag must be in containers of 100 ml or less. Don't leave your bags alone." },
        { author: "On arrival", body: "Fill in the customs form before you land. At immigration, answer the officer's questions clearly. If your suitcase hasn't arrived, go to the baggage office immediately." }
      ],
      activities: [
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "How long must your passport be valid?", a: ["At least six months.", "six months", "For at least six months.", "Six months."] },
            { q: "When can you check in online?", a: ["24 hours before your flight.", "24 hours before", "Twenty-four hours before the flight.", "24 hours before the flight."] },
            { q: "How early should you arrive for international flights?", a: ["Three hours before.", "three hours", "3 hours before.", "Three hours."] },
            { q: "What's the maximum size for liquids?", a: ["100 ml.", "100 ml", "100 milliliters."] }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "All countries require a visa.", a: false },
            { s: "You can leave your bags alone for a short time.", a: false },
            { s: "If your suitcase doesn't arrive, go to the baggage office.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice airport language, then write a message about your trip.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Can I see your boarding pass?" },
            { a: "I've already checked in online." },
            { a: "Our flight has been delayed." },
            { a: "I'm staying with a host family." },
            { a: "Where is the baggage claim?" }
          ]
        },
        {
          type: "sort", title: "Before or after the flight?",
          prompt: "When do you do these things?",
          bins: ["Before the flight", "After landing"],
          items: [
            { text: "check in", bin: 0 }, { text: "go through security", bin: 0 }, { text: "wait at the gate", bin: 0 }, { text: "board", bin: 0 },
            { text: "go through immigration", bin: 1 }, { text: "collect your luggage", bin: 1 }, { text: "go through customs", bin: 1 }
          ]
        },
        {
          type: "write", title: "Message from the airport",
          prompt: "You're at the airport before an international trip. Write a message to your family. Say what you've already done, what you haven't done yet, any problem (delay, gate change…) and when you'll arrive.",
          minWords: 50, maxWords: 100,
          model: "Hi Mom! I'm at the airport. I've already checked in and I've gone through security — no problems! I've just bought a sandwich. I haven't changed money yet, but I'll do it in Vancouver. Our flight has been delayed by one hour, so we're boarding at 11:40 now. I'll arrive at about 6 p.m. Vancouver time. I'll message you as soon as I land. Love you!",
          bank: ["I'm at the airport.", "I've already…", "I've just…", "I haven't … yet.", "Our flight has been delayed…", "I'll arrive at…", "I'll message you as soon as…"],
          checklist: [
            "I used the present perfect with *already, just, yet*.",
            "I used airport vocabulary.",
            "I mentioned a problem or change.",
            "I said when I'll arrive."
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
            "Can I see your passport, please?",
            "How many bags are you checking?",
            "Window or aisle seat?",
            "Boarding starts at gate twelve.",
            "I'm here to study English.",
            "I'm staying for four weeks."
          ]
        },
        {
          type: "speak", title: "At immigration",
          prompt: "Record yourself answering an immigration officer's questions. Imagine you're arriving in another country. Answer: What's the purpose of your trip? How long are you staying? Where are you staying? Have you been here before? What do you do?",
          language: ["I'm here to… / I'm here on vacation.", "I'm staying for…", "I'm staying with / at…", "No, it's my first time. / Yes, I've been here once.", "I'm a student / I work as…"],
          seconds: 60,
          checklist: ["answer all the questions?", "use *to* + verb for purpose?", "use *for* + time?", "speak clearly and politely?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can check in for a flight.", review: "Presentation: check-in" },
    { can: "I can understand airport announcements.", review: "Listening: announcements" },
    { can: "I can answer questions at immigration.", review: "Explanation; Speaking activity 2" },
    { can: "I can use the present perfect at the airport.", review: "Explanation: present perfect" },
    { can: "I can understand travel tips.", review: "Reading: flying abroad?" },
    { can: "I can write a message from the airport.", review: "Writing activity 3" }
  ]
};
