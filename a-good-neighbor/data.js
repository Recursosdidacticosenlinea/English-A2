window.UNIT = {
  slug: "a-good-neighbor",
  number: 40,
  title: "A Good Neighbor",
  level: "A2",
  minutes: 50,
  speakers: { "Doña Elena": "f", "Marco": "m", "Brisa": "f", "Mr. Vega": "m", A: "f", B: "m" },
  focus: ["offers: Shall I…? / I'll… / Would you like me to…?", "requests: Could you…? / Do you mind if I…?", "accepting and refusing offers", "neighborhood problems: noise, parking, pets", "That's very kind of you."],

  presentation: {
    scene: "🏘️🤝📦🐕",
    situation: "Marco has just moved into an apartment building. His neighbor, Doña Elena, knocks on his door.",
    warmup: {
      prompt: "What does a good neighbor do? Choose all.",
      options: ["says hello", "helps with heavy bags", "keeps quiet at night", "waters your plants", "takes your packages", "lends things", "invites you to parties", "looks after your pet", "parks correctly", "shares food"],
      response: "Great list! In this unit you'll learn to offer help and make polite requests."
    },
    dialogueTitle: "The new neighbor",
    dialogue: [
      { who: "Doña Elena", line: "Hello! I'm Elena, from number 4. Welcome to the building!" },
      { who: "Marco", line: "Hi, I'm Marco. Nice to meet you. Sorry about the boxes everywhere." },
      { who: "Doña Elena", line: "Don't worry. *Shall I help* you carry them?" },
      { who: "Marco", line: "*That's very kind of you*, but I'm OK, thanks." },
      { who: "Doña Elena", line: "*I'll bring* you some coffee, then. *Would you like me to* show you where the trash goes?" },
      { who: "Marco", line: "*Yes, please*. And *could you tell me* the Wi-Fi company here?" },
      { who: "Doña Elena", line: "Of course. Oh, and if you go away, *I'll water* your plants." },
      { who: "Marco", line: "Thanks! *Do you mind if I* park my bike in the entrance?" },
      { who: "Doña Elena", line: "*Not at all*. Just don't block the door!" }
    ]
  },

  objectives: [
    "I can offer help with *Shall I…? / I'll… / Would you like me to…?*",
    "I can make polite requests with *Could you…? / Do you mind if I…?*",
    "I can accept and refuse offers politely.",
    "I can talk about neighborhood life and problems."
  ],

  explanation: {
    vocabTitle: "Neighbors",
    vocab: [
      { word: "neighbor", icon: "🏘️" }, { word: "building", icon: "🏢" }, { word: "entrance", icon: "🚪" },
      { word: "parking space", icon: "🅿️" }, { word: "package", icon: "📦" }, { word: "noise", icon: "🔊" },
      { word: "trash / garbage", icon: "🗑️" }, { word: "water the plants", icon: "🪴" }, { word: "feed the cat", icon: "🐈" },
      { word: "borrow / lend", icon: "🔁" }, { word: "block the door", icon: "🚫" }, { word: "complain", icon: "😤" },
      { word: "kind", icon: "💗" }, { word: "helpful", icon: "🙌" }, { word: "rude", icon: "😠" }
    ],
    grammar: [
      {
        title: "Offering help",
        head: ["Offer", "Accept", "Refuse"],
        rows: [
          ["*Shall I* carry your bags?", "*Yes, please. Thanks!*", "*No, thanks. I'm OK.*"],
          ["*I'll* water your plants.", "*That's very kind of you.*", "*Don't worry, I can do it.*"],
          ["*Would you like me to* help?", "*That would be great!*", "*Thanks, but it's fine.*"]
        ]
      },
      {
        title: "Making requests",
        head: ["Request", "Answer: yes", "Answer: no"],
        rows: [
          ["*Could you* turn down the music, please?", "*Sure. Sorry!*", "*I'm afraid I can't…*"],
          ["*Would you mind* taking my package?", "*Not at all. / No problem.*", "*Sorry, I won't be home.*"],
          ["*Do you mind if I* park here?", "*No, go ahead.*", "*Actually, I'd prefer you didn't.*"]
        ],
        note: "Careful: *Do you mind…?* asks if it's a problem. To say *yes, OK*, answer *No / Not at all*!"
      }
    ],
    watchOut: [
      ["Shall I to help you?", "Shall I help you?"],
      ["I help you with that. (offer now)", "I'll help you with that."],
      ["Do you mind if I park here? – Yes, of course! (meaning OK)", "No, not at all. / No, go ahead."],
      ["Would you like that I help you?", "Would you like me to help you?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "[[Shall]] I open the window?",
        "Don't worry, I[['ll|will]] take your package.",
        "Would you like [[me]] to feed your cat?",
        "Do you [[mind]] if I use your parking space?",
        "That's very [[kind]] of you!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Brisa has a problem with her neighbor, Mr. Vega. She goes to talk to him. Listen.",
      title: "A noisy neighbor",
      script: [
        { who: "Brisa", line: "Hi, Mr. Vega. Sorry to bother you. Could I talk to you for a minute?" },
        { who: "Mr. Vega", line: "Of course. Is everything OK?" },
        { who: "Brisa", line: "Well, I have exams this week, and the music from your apartment is very loud at night. Would you mind turning it down after ten?" },
        { who: "Mr. Vega", line: "Oh, I'm so sorry! My son is practicing with his band. I'll tell him to stop at ten." },
        { who: "Brisa", line: "Thank you. That's very kind of you." },
        { who: "Mr. Vega", line: "And if you need anything, just ask. Shall I give you my phone number? You can message me if it's too loud." },
        { who: "Brisa", line: "That would be great. Oh, and do you mind if I leave my bike in the hall? There's no space in my apartment." },
        { who: "Mr. Vega", line: "Not at all. Good luck with your exams!" }
      ],
      activities: [
        {
          type: "sort", title: "Request or offer?",
          prompt: "Is it a request or an offer?",
          bins: ["Request", "Offer"],
          items: [
            { text: "Would you mind turning it down?", bin: 0 }, { text: "Do you mind if I leave my bike?", bin: 0 }, { text: "Could I talk to you?", bin: 0 },
            { text: "I'll tell him to stop at ten.", bin: 1 }, { text: "Shall I give you my phone number?", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Brisa has exams this week.", a: true },
            { s: "Mr. Vega is playing the music.", a: false },
            { s: "Mr. Vega is angry with Brisa.", a: false },
            { s: "Brisa can leave her bike in the hall.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages in the building's group chat.",
      title: "Building chat · Torre Azul",
      text: [
        { author: "Doña Elena (4)", body: "Good morning! I'm going to Oaxaca for a week. Would anyone mind feeding my cat, Mimí? I'll leave the key with the doorman. Thank you! 🐈" },
        { author: "Marco (7)", body: "Hi Elena, I'll feed her! Don't worry. Shall I water your plants too?" },
        { author: "Mr. Vega (5)", body: "Hello everyone. Could the person in the gray car please not park in front of the garage? I couldn't get out this morning. Thanks." },
        { author: "Brisa (6)", body: "Sorry, Mr. Vega! That was my sister's car. It won't happen again. Also, does anyone have a ladder I could borrow?" }
      ],
      activities: [
        {
          type: "match", title: "Who wrote it?",
          prompt: "Match the message with the person.",
          pairs: [
            ["asked for help with a cat", "Doña Elena"],
            ["offered to water plants", "Marco"],
            ["complained about parking", "Mr. Vega"],
            ["wants to borrow a ladder", "Brisa"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Doña Elena will leave the key with the doorman.", a: true },
            { s: "The gray car was Brisa's.", a: false },
            { s: "Mr. Vega couldn't get his car out.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice offers and requests, then write messages to your neighbors.",
      activities: [
        {
          type: "rewrite", title: "Make an offer",
          prompt: "Write an offer with *Shall I…?*",
          items: [
            { q: "Your neighbor has heavy bags.", a: ["Shall I carry your bags?", "Shall I help you with your bags?", "Shall I carry them?", "Shall I help you?"] },
            { q: "Your neighbor is going on vacation and has plants.", a: ["Shall I water your plants?", "Shall I water them?"] },
            { q: "Your neighbor isn't home and a package arrives.", a: ["Shall I take your package?", "Shall I keep your package?", "Shall I take it?"] }
          ]
        },
        {
          type: "rewrite", title: "Make it polite",
          prompt: "Rewrite with *Could you…?* or *Would you mind…?*",
          items: [
            { q: "Turn down the music! (Could you…?)", a: ["Could you turn down the music, please?", "Could you turn the music down, please?"] },
            { q: "Don't park here! (Would you mind not…?)", a: ["Would you mind not parking here?", "Would you mind not parking here, please?"] },
            { q: "Close the door! (Would you mind…?)", a: ["Would you mind closing the door?", "Would you mind closing the door, please?"] }
          ]
        },
        {
          type: "write", title: "Messages to neighbors",
          prompt: "Write two messages for your building's group chat: one offering help to a neighbor, and one making a polite request about a problem (noise, parking, trash…).",
          minWords: 50, maxWords: 100,
          model: "1) Hi everyone! I'm going to the supermarket this afternoon. Shall I buy anything for anyone? Doña Lupe, I'll take your trash down too. 2) Hello neighbors. Could the person in apartment 3 please not leave bags of trash in the hall? It smells bad and attracts cats. Would you mind taking it downstairs? Thank you very much!",
          bank: ["Shall I…?", "I'll…", "Would you like me to…?", "Could you please…?", "Would you mind + -ing?", "Do you mind if I…?", "Thank you very much!"],
          checklist: [
            "I made an offer with *Shall I / I'll / Would you like me to*.",
            "I made a polite request.",
            "I used *please* and *thank you*.",
            "I described the problem clearly."
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
            "Shall I help you carry the boxes?",
            "That's very kind of you.",
            "I'll water your plants.",
            "Would you like me to show you?",
            "Do you mind if I park my bike here?",
            "Not at all."
          ]
        },
        {
          type: "speak", title: "Talking to a neighbor",
          prompt: "Record yourself talking to a neighbor: offer to help with something, then make a polite request about a problem. Imagine their answers.",
          language: ["Hi! Sorry to bother you.", "Shall I…?", "I'll…", "Would you mind + -ing…?", "Could you please…?", "Thanks, that's very kind of you."],
          seconds: 60,
          checklist: ["make an offer?", "make a polite request?", "use *Would you mind + -ing*?", "sound friendly and polite?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can offer help with *Shall I / I'll / Would you like me to*.", review: "Explanation: offering help; Writing activity 1" },
    { can: "I can make polite requests.", review: "Explanation: making requests; Writing activity 2" },
    { can: "I can answer *Do you mind…?* correctly.", review: "Explanation: note; Quick check" },
    { can: "I can accept and refuse offers politely.", review: "Presentation" },
    { can: "I can understand neighbors' messages and conversations.", review: "Listening and Reading" },
    { can: "I can write messages to my neighbors.", review: "Writing activity 3" }
  ]
};
