window.UNIT = {
  slug: "gadgets",
  number: 45,
  title: "Gadgets",
  level: "A2",
  minutes: 50,
  speakers: { "Shop assistant": "m", "Andrea": "f", "Grandpa": "m", "Host": "f", "Leo": "m", A: "f", B: "m" },
  focus: ["It's used for + -ing / You use it to + verb", "giving instructions: First, press… Then, swipe…", "technology verbs: charge, download, turn on, log in", "comparing gadgets", "How does it work?"],

  presentation: {
    scene: "📱⌚🎧🔋",
    situation: "Andrea is helping her grandpa buy his first smartwatch. They're in an electronics store.",
    warmup: {
      prompt: "Which gadgets do you use every day? Choose all.",
      options: ["smartphone", "laptop", "tablet", "smartwatch", "wireless headphones", "smart speaker", "e-reader", "game console", "power bank", "fitness tracker"],
      response: "We all use a lot of gadgets! In this unit you'll learn to explain what they're for and how they work."
    },
    dialogueTitle: "Grandpa's first smartwatch",
    dialogue: [
      { who: "Grandpa", line: "So, what's this watch *used for*? I already have a watch!" },
      { who: "Shop assistant", line: "*It's used for* checking your heart rate, counting your steps and reading messages." },
      { who: "Grandpa", line: "Hmm. *How does it work*?" },
      { who: "Andrea", line: "It's easy, Grandpa. *First, you charge* it. *Then you download* an app on your phone." },
      { who: "Shop assistant", line: "*After that, you turn on* Bluetooth and connect them. *You use* this button *to go back*." },
      { who: "Grandpa", line: "Is it *better than* that one?" },
      { who: "Shop assistant", line: "This one is *lighter* and the battery *lasts longer* — about five days." },
      { who: "Grandpa", line: "OK, I'll take it. But you have to teach me, Andrea!" }
    ]
  },

  objectives: [
    "I can explain what a gadget is for with *used for + -ing* and *to + verb*.",
    "I can give step-by-step instructions.",
    "I can use technology verbs correctly.",
    "I can compare gadgets."
  ],

  explanation: {
    vocabTitle: "Technology verbs",
    vocab: [
      { word: "charge", icon: "🔌" }, { word: "turn on / off", icon: "⏻" }, { word: "download", icon: "⬇️" },
      { word: "install", icon: "📲" }, { word: "log in / out", icon: "🔐" }, { word: "click / tap", icon: "👆" },
      { word: "swipe", icon: "👉" }, { word: "connect", icon: "🔗" }, { word: "update", icon: "🔄" },
      { word: "save", icon: "💾" }, { word: "battery", icon: "🔋" }, { word: "screen", icon: "📱" },
      { word: "Bluetooth", icon: "📶" }, { word: "password", icon: "🔑" }, { word: "app", icon: "🧩" }
    ],
    grammar: [
      {
        title: "Saying what something is for",
        head: ["Structure", "Example"],
        rows: [
          ["*It's used for* + -ing", "*It's used for* counting your steps."],
          ["*You use it to* + verb", "*You use* this button *to go* back."],
          ["*It's for* + -ing", "A power bank *is for* charging your phone."],
          ["question", "*What's it used for?* / *What's it for?*"]
        ]
      },
      {
        title: "Giving instructions",
        head: ["Step", "Example"],
        rows: [
          ["*First,*", "*First,* charge the watch."],
          ["*Then,*", "*Then* download the app."],
          ["*After that,*", "*After that,* turn on Bluetooth."],
          ["*Finally,*", "*Finally,* tap 'Connect'."],
          ["*Make sure you…* / *Don't forget to…*", "*Don't forget to* save your password."]
        ],
        note: "Instructions use imperatives: *Press, tap, swipe, connect*. Phrasal verbs: *turn it on* — the pronoun goes in the middle."
      }
    ],
    watchOut: [
      ["It's used for count steps.", "It's used for counting steps."],
      ["You use it for go back.", "You use it to go back."],
      ["Turn on it.", "Turn it on."],
      ["How it works?", "How does it work?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the verb.",
      items: [
        "A smartwatch is used for [[counting]] steps. (count)",
        "You use this app to [[pay]] in shops. (pay)",
        "A power bank is for [[charging]] your phone. (charge)",
        "First, turn the laptop [[on]].",
        "Don't forget [[to save]] your work. (save)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a tech podcast, Leo reviews two pairs of wireless headphones. Listen.",
      title: "Podcast: Tech review",
      script: [
        { who: "Host", line: "Leo, which headphones are better, the SoundMax or the AirBeat?" },
        { who: "Leo", line: "It depends. The SoundMax are cheaper — only 900 pesos. They're used for listening to music and making calls." },
        { who: "Host", line: "And the AirBeat?" },
        { who: "Leo", line: "They're more expensive, 2,500 pesos, but they have noise cancelling. You use it to block the sound around you. Great for the bus!" },
        { who: "Host", line: "What about the battery?" },
        { who: "Leo", line: "The AirBeat battery lasts longer: 30 hours. The SoundMax last about 12 hours." },
        { who: "Host", line: "Are they easy to use?" },
        { who: "Leo", line: "Both are easy. First, you charge them. Then you turn on Bluetooth on your phone and choose the headphones. That's it!" }
      ],
      activities: [
        {
          type: "sort", title: "SoundMax or AirBeat?",
          prompt: "Sort the information.",
          bins: ["SoundMax", "AirBeat"],
          items: [
            { text: "900 pesos", bin: 0 }, { text: "12-hour battery", bin: 0 }, { text: "cheaper", bin: 0 },
            { text: "2,500 pesos", bin: 1 }, { text: "noise cancelling", bin: 1 }, { text: "30-hour battery", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The SoundMax are more expensive.", a: false },
            { s: "Noise cancelling is used for blocking sound around you.", a: true },
            { s: "Only the AirBeat are easy to use.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the quick start guide for a smart speaker.",
      title: "EchoHome · Quick start guide",
      text: [
        { author: "Set up", body: "1. Plug the speaker in. The light will turn blue. 2. Download the EchoHome app on your phone. 3. Log in or create an account. 4. Connect the speaker to your Wi-Fi. Make sure your phone and speaker are in the same room." },
        { author: "What can it do?", body: "EchoHome is used for playing music, checking the weather and setting alarms. You can also use it to turn on smart lights. Just say \"Hey Echo\" and ask a question." },
        { author: "Problems?", body: "If the light turns red, the speaker isn't connected. Turn it off, wait ten seconds and turn it on again. Don't forget to update the app regularly." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the steps in order",
          prompt: "Put the words in order to make each step.",
          items: [
            { a: "Plug the speaker in." },
            { a: "Download the app on your phone." },
            { a: "Log in or create an account." },
            { a: "Connect the speaker to your Wi-Fi." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "The light turns blue when you plug it in.", a: true },
            { s: "EchoHome is used for setting alarms.", a: true },
            { s: "A green light means it isn't connected.", a: false },
            { s: "You should update the app regularly.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice explaining gadgets, then write instructions.",
      activities: [
        {
          type: "rewrite", title: "What's it for?",
          prompt: "Write a sentence with *It's used for + -ing*.",
          items: [
            { q: "a charger / charge your phone", a: ["It's used for charging your phone.", "A charger is used for charging your phone.", "It is used for charging your phone."] },
            { q: "a webcam / make video calls", a: ["It's used for making video calls.", "A webcam is used for making video calls.", "It is used for making video calls."] },
            { q: "an e-reader / read books", a: ["It's used for reading books.", "An e-reader is used for reading books.", "It is used for reading books."] }
          ]
        },
        {
          type: "match", title: "Gadget and purpose",
          prompt: "Match the gadget with its use.",
          pairs: [
            ["a power bank", "charging your phone when you're out"],
            ["a fitness tracker", "counting steps and calories"],
            ["a smart speaker", "playing music with your voice"],
            ["noise-cancelling headphones", "blocking the noise around you"]
          ]
        },
        {
          type: "write", title: "Instructions for Grandma",
          prompt: "Write step-by-step instructions for an older person to do something with a gadget (send a photo on WhatsApp, make a video call, use a streaming app…). Say what the app is used for, then give at least five steps.",
          minWords: 60, maxWords: 110,
          model: "Grandma, WhatsApp is used for sending messages and photos to the family. To send a photo: First, open WhatsApp and tap the chat with my name. Then, tap the camera icon at the bottom. After that, choose a photo from your gallery or take a new one. You can write a message if you want. Finally, tap the green arrow to send it. Don't forget to turn on the Wi-Fi first!",
          bank: ["… is used for + -ing…", "To …, …", "First,…", "Then,…", "After that,…", "Finally,…", "Don't forget to…", "Make sure you…"],
          checklist: [
            "I explained what the gadget or app is used for.",
            "I gave at least **five** steps with imperatives.",
            "I used sequencers.",
            "I used technology verbs."
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
            "What's this watch used for?",
            "It's used for counting your steps.",
            "How does it work?",
            "First, you charge it.",
            "Then you download an app on your phone.",
            "The battery lasts longer."
          ]
        },
        {
          type: "speak", title: "My favorite gadget",
          prompt: "Record yourself presenting your favorite gadget or app. Say what it's used for, how it works and why it's better than others.",
          language: ["My favorite gadget is…", "It's used for…", "You use it to…", "First, you… Then…", "It's better than … because…"],
          seconds: 75,
          checklist: ["use *used for + -ing*?", "give instructions with sequencers?", "compare it with something?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can say what something is used for.", review: "Explanation; Writing activity 1" },
    { can: "I can give step-by-step instructions.", review: "Explanation: giving instructions; Reading" },
    { can: "I can use technology verbs.", review: "Explanation: vocabulary; Quick check" },
    { can: "I can compare gadgets.", review: "Listening: tech review" },
    { can: "I can understand a quick start guide.", review: "Reading: EchoHome" },
    { can: "I can write instructions for using a gadget.", review: "Writing activity 3" }
  ]
};
