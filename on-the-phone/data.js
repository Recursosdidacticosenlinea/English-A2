window.UNIT = {
  slug: "on-the-phone",
  number: 35,
  title: "On the Phone",
  level: "A2",
  minutes: 50,
  speakers: { "Receptionist": "f", "Mr. Lee": "m", "Ana": "f", "Toño": "m", "Voicemail": "f", A: "f", B: "m" },
  focus: ["phone language: Hello, this is… / Could I speak to…?", "taking and leaving messages", "will for offers and promises: I'll tell her. I'll call you back.", "Could you…? / Would you mind…?", "spelling names and numbers"],

  presentation: {
    scene: "📞🏢📝☎️",
    situation: "Mr. Lee calls a design company in Puebla. He wants to speak to the manager, but she's not available.",
    warmup: {
      prompt: "What do people say on the phone? Choose the phrases you know.",
      options: ["Hello?", "Who's calling?", "Hold on, please.", "She's not here right now.", "Can I take a message?", "I'll call back later.", "Could you speak up?", "Sorry, you're breaking up.", "Thanks for calling.", "Bye for now."],
      response: "Great! In this unit you'll learn to make professional and friendly phone calls."
    },
    dialogueTitle: "A business call",
    dialogue: [
      { who: "Receptionist", line: "Good morning, Nova Design. How can I help you?" },
      { who: "Mr. Lee", line: "Hello. *This is* David Lee from Pacific Imports. *Could I speak to* Ms. Herrera, please?" },
      { who: "Receptionist", line: "*I'm sorry, she's in a meeting* at the moment. *Can I take a message*?" },
      { who: "Mr. Lee", line: "Yes, please. *Could you ask her to call me back*? It's about the new catalog." },
      { who: "Receptionist", line: "Of course. *Could you spell* your last name, please?" },
      { who: "Mr. Lee", line: "L-E-E. And my number is 222 314 0587." },
      { who: "Receptionist", line: "So that's 222 314 0587. *I'll give her the message* as soon as she finishes." },
      { who: "Mr. Lee", line: "Thank you. *Would you mind* telling her it's urgent?" },
      { who: "Receptionist", line: "Not at all. *She'll call you back* before 1 p.m. *Thanks for calling*." }
    ]
  },

  objectives: [
    "I can start and end a phone call politely.",
    "I can take and leave a phone message.",
    "I can make offers and promises with *will*.",
    "I can make polite requests with *Could you…? / Would you mind…?*"
  ],

  explanation: {
    vocabTitle: "Phone language",
    vocab: [
      { word: "call / phone", icon: "📞" }, { word: "call back", icon: "🔁" }, { word: "hang up", icon: "📴" },
      { word: "hold on", icon: "⏳" }, { word: "put through", icon: "🔀" }, { word: "leave a message", icon: "📝" },
      { word: "take a message", icon: "🗒️" }, { word: "voicemail", icon: "📼" }, { word: "extension", icon: "☎️" },
      { word: "busy / engaged", icon: "🚫" }, { word: "breaking up", icon: "📶" }, { word: "speak up", icon: "🔊" },
      { word: "urgent", icon: "⚠️" }, { word: "available", icon: "✅" }, { word: "in a meeting", icon: "👥" }
    ],
    grammar: [
      {
        title: "Phone phrases",
        head: ["Caller", "Person who answers"],
        rows: [
          ["*Hello, this is* David Lee. (not *I am*)", "*Good morning, Nova Design.*"],
          ["*Could I speak to* Ms. Herrera?", "*Who's calling, please?*"],
          ["*Can I leave a message?*", "*Hold on, please. / I'll put you through.*"],
          ["*Could you ask her to call me back?*", "*She's not available. Can I take a message?*"]
        ],
        note: "On the phone, say *This is…* to introduce yourself: *Hi, this is Ana.*"
      },
      {
        title: "Will for offers and promises",
        head: ["Function", "Example"],
        rows: [
          ["offer", "*I'll give* her the message."],
          ["promise", "*She'll call* you back before 1 p.m."],
          ["decision now", "OK, *I'll call* back later."],
          ["polite request", "*Would you mind* + -ing? *Would you mind telling* her it's urgent? – *Not at all.*"]
        ],
        note: "*Would you mind…?* = ¿Le importaría…? Answer *Not at all* or *No problem* to say yes!"
      }
    ],
    watchOut: [
      ["Hello, I am David Lee.", "Hello, this is David Lee."],
      ["Can I talk with Ms. Herrera?", "Could I speak to Ms. Herrera, please?"],
      ["I call you back later.", "I'll call you back later."],
      ["Would you mind to tell her?", "Would you mind telling her?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the phrase with the best response.",
      pairs: [
        ["Could I speak to Mr. Ruiz?", "Who's calling, please?"],
        ["Can I leave a message?", "Of course. Go ahead."],
        ["Would you mind calling back later?", "Not at all."],
        ["Sorry, you're breaking up.", "I'll call you back."],
        ["Thanks for calling.", "Thank you. Bye."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a voicemail message and a phone call between two friends.",
      title: "Messages",
      script: [
        { who: "Voicemail", line: "Hi, you've reached Toño. I can't answer right now. Please leave a message after the beep." },
        { who: "Ana", line: "Hi Toño, this is Ana. It's Thursday, about 5 p.m. I'm calling about the concert on Saturday. I've got the tickets! Could you call me back tonight? My number is 221 908 4433. Bye!" },
        { who: "Toño", line: "Hi Ana, it's Toño. Sorry, I was at the gym. I got your message." },
        { who: "Ana", line: "Hi! So, the concert starts at nine. Shall we meet at eight?" },
        { who: "Toño", line: "Eight is perfect. I'll pick you up in my car." },
        { who: "Ana", line: "Great! Sorry, can you speak up? You're breaking up a bit." },
        { who: "Toño", line: "I said, I'll pick you up at eight!" },
        { who: "Ana", line: "Perfect. See you on Saturday!" }
      ],
      activities: [
        {
          type: "gap", title: "Ana's message",
          prompt: "Complete the message note.",
          items: [
            "From: [[Ana]]",
            "Day: [[Thursday]], about 5 p.m.",
            "About: the [[concert]] on Saturday",
            "Call back: [[tonight]]",
            "Number: 221 908 [[4433]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Toño was at work when Ana called.", a: false },
            { s: "The concert starts at eight.", a: false },
            { s: "Toño will pick Ana up.", a: true },
            { s: "The phone line is a bit bad.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the phone messages that a receptionist wrote for her colleagues.",
      title: "While you were out",
      text: [
        { author: "For: Ms. Herrera · 10:15", body: "David Lee (Pacific Imports) called about the new catalog. Please call him back before 1 p.m. — it's urgent. Tel. 222 314 0587." },
        { author: "For: Rodrigo · 11:40", body: "Your dentist's office called. Your appointment is moved from Friday to Monday at 4:30. You don't have to call back unless Monday is a problem." },
        { author: "For: Mariana · 12:20", body: "Your sister called. She'll pick up the kids from school today, so you don't have to leave early. She'll call you again tonight." }
      ],
      activities: [
        {
          type: "match", title: "Who has to do what?",
          prompt: "Match the person with the action.",
          pairs: [
            ["Ms. Herrera", "has to call back before 1 p.m."],
            ["Rodrigo", "has a new appointment on Monday."],
            ["Mariana", "doesn't have to leave early."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "David Lee's message is urgent.", a: true },
            { s: "Rodrigo has to call the dentist.", a: false },
            { s: "Mariana's sister will call again tonight.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice phone language, then write a phone message and a reply.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Could I speak to the manager, please?" },
            { a: "Can I take a message?" },
            { a: "I'll call you back in ten minutes." },
            { a: "Would you mind spelling your name?" },
            { a: "She's in a meeting at the moment." }
          ]
        },
        {
          type: "rewrite", title: "Offers with will",
          prompt: "Respond to the problem with an offer using *I'll…*",
          items: [
            { q: "\"Ms. Herrera isn't here.\" (take a message)", a: ["I'll take a message.", "I'll take a message for her."] },
            { q: "\"I can't hear you very well.\" (call back)", a: ["I'll call you back.", "I'll call back."] },
            { q: "\"I don't have his number.\" (send it to you)", a: ["I'll send it to you.", "I'll send you his number."] }
          ]
        },
        {
          type: "write", title: "Taking a message",
          prompt: "You answered the phone at work or at home. Write a message note for a colleague or family member: who called, when, why, and what they need to do. Then write a short text reply from that person.",
          minWords: 40, maxWords: 90,
          model: "For: Dad · 3:45 p.m. · Mr. Ortega from the bank called about your credit card. He needs you to call him back today before 6 p.m. His number is 222 450 1129, extension 14. — Reply: Thanks, Lupita! I'll call him back after my meeting. I'll be home at seven.",
          bank: ["For:…", "… called about…", "He / She needs you to…", "Please call back before…", "His / Her number is…", "Thanks! I'll…"],
          checklist: [
            "I wrote who called, when and why.",
            "I wrote what the person has to do.",
            "The reply uses *I'll…*",
            "I wrote the phone number clearly."
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
            "Hello, this is David Lee.",
            "Could I speak to Ms. Herrera, please?",
            "I'm sorry, she's in a meeting.",
            "Can I take a message?",
            "I'll give her the message.",
            "Thanks for calling."
          ]
        },
        {
          type: "speak", title: "Leave a voicemail",
          prompt: "Record a voicemail message for a company or a friend. Say who you are, the day and time, why you're calling, and ask them to call you back. Spell your name and say your number.",
          language: ["Hi, this is…", "It's … o'clock on…", "I'm calling about…", "Could you call me back…?", "My number is…", "That's … spelled…", "Thanks. Bye!"],
          seconds: 45,
          checklist: ["introduce yourself with *This is…*?", "say why you're calling?", "ask for a call back politely?", "say your number clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can start and end a phone call.", review: "Explanation: phone phrases" },
    { can: "I can take a phone message.", review: "Presentation; Writing activity 3" },
    { can: "I can leave a voicemail message.", review: "Listening; Speaking activity 2" },
    { can: "I can make offers and promises with *will*.", review: "Explanation: will; Writing activity 2" },
    { can: "I can use *Would you mind + -ing?*", review: "Explanation; Quick check" },
    { can: "I can understand written phone messages.", review: "Reading: while you were out" }
  ]
};
