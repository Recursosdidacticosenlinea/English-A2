window.UNIT = {
  slug: "have-you-done-it-yet",
  number: 12,
  title: "Have You Done It Yet?",
  level: "A2",
  minutes: 50,
  speakers: { "Majo": "f", "Leo": "m", "Mom": "f", "Iker": "m", A: "f", B: "m" },
  focus: ["present perfect with just, already, yet", "Have you…yet? Yes, I've already… / No, not yet.", "to-do lists", "regular and irregular past participles", "Has she…? She's just…"],

  presentation: {
    scene: "📝✅🎉🎂",
    situation: "Majo and Leo are organizing a surprise party for their friend Ana tonight. They check their to-do list.",
    warmup: {
      prompt: "What do you need to do before a party? Choose all.",
      options: ["send invitations", "buy food", "order a cake", "decorate the room", "make a playlist", "clean the house", "buy drinks", "choose a present", "borrow chairs", "tell the neighbors"],
      response: "Party time! In this unit you'll learn to talk about what you've done and what you haven't done yet."
    },
    dialogueTitle: "The surprise party",
    dialogue: [
      { who: "Majo", line: "OK, let's check the list. *Have you ordered* the cake *yet*?" },
      { who: "Leo", line: "Yes, *I've already ordered* it. It's chocolate, Ana's favorite." },
      { who: "Majo", line: "Great. *I've just bought* the drinks and the balloons." },
      { who: "Leo", line: "*Have you sent* the invitations to her cousins?" },
      { who: "Majo", line: "*No, not yet*. I'll send them now." },
      { who: "Leo", line: "And the playlist? *Has* Kenji *made* it *yet*?" },
      { who: "Majo", line: "Yes, *he's just sent* it. It's perfect!" },
      { who: "Leo", line: "Oh no… *We haven't bought* a present *yet*!" },
      { who: "Majo", line: "Don't worry. *I've already found* one — concert tickets!" }
    ]
  },

  objectives: [
    "I can use the present perfect for recent actions.",
    "I can use *just, already* and *yet* in the right position.",
    "I can ask and answer *Have you…yet?*",
    "I can talk about a to-do list."
  ],

  explanation: {
    vocabTitle: "Getting things done",
    vocab: [
      { word: "to-do list", icon: "📝" }, { word: "order", icon: "📞" }, { word: "book", icon: "📅" },
      { word: "pack", icon: "🧳" }, { word: "send", icon: "📤" }, { word: "pay the bills", icon: "💳" },
      { word: "finish", icon: "🏁" }, { word: "fix", icon: "🔧" }, { word: "tidy up", icon: "🧹" },
      { word: "decorate", icon: "🎈" }, { word: "already", icon: "✅" }, { word: "just", icon: "⏱️" },
      { word: "yet", icon: "⏳" }, { word: "not yet", icon: "❌" }, { word: "done", icon: "✔️" }
    ],
    grammar: [
      {
        title: "Present perfect: have / has + past participle",
        head: ["", "Example"],
        rows: [
          ["affirmative", "I*'ve ordered* the cake. She*'s sent* the invitations."],
          ["negative", "We *haven't bought* a present. He *hasn't called*."],
          ["question", "*Have* you *finished*? *Has* she *arrived*?"],
          ["short answer", "Yes, I *have*. / No, she *hasn't*."]
        ],
        note: "Irregular participles to remember: *buy → bought, send → sent, make → made, find → found, do → done, write → written, eat → eaten*."
      },
      {
        title: "Just, already, yet",
        head: ["Word", "Meaning", "Position", "Example"],
        rows: [
          ["*just*", "a very short time ago", "between *have* and participle", "I've *just* bought the drinks."],
          ["*already*", "before now, maybe sooner than expected", "between *have* and participle", "I've *already* ordered it."],
          ["*yet* (questions)", "until now", "end of the sentence", "Have you sent them *yet*?"],
          ["*yet* (negatives)", "until now (but we expect it)", "end of the sentence", "We haven't bought it *yet*."]
        ]
      }
    ],
    watchOut: [
      ["I've ordered yet the cake.", "I've already ordered the cake."],
      ["Have you sent already the invitations?", "Have you sent the invitations yet?"],
      ["I just have bought the drinks.", "I've just bought the drinks."],
      ["She hasn't came yet.", "She hasn't come yet."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *just, already* or *yet*.",
      items: [
        "Have you finished your homework [[yet]]?",
        "I've [[already]] seen this movie. Let's watch another one.",
        "She's [[just]] left. You missed her by one minute!",
        "We haven't booked the hotel [[yet]].",
        "Don't cook! I've [[already]] eaten."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Iker is going on a school trip tomorrow. His mom checks if he's ready. Listen.",
      title: "Ready for the trip?",
      script: [
        { who: "Mom", line: "Iker, the bus leaves at six tomorrow. Have you packed your bag yet?" },
        { who: "Iker", line: "Yes, I've already packed it. I've put in two T-shirts, a sweater and my swimsuit." },
        { who: "Mom", line: "Good. Have you charged your phone?" },
        { who: "Iker", line: "Not yet. I'll do it now." },
        { who: "Mom", line: "And has your teacher sent the permission form?" },
        { who: "Iker", line: "Yes, she's just sent it by email. Can you sign it, please?" },
        { who: "Mom", line: "Sure. Have you found your sunglasses?" },
        { who: "Iker", line: "No, I haven't found them yet. I think my sister has them!" }
      ],
      activities: [
        {
          type: "sort", title: "Done or not yet?",
          prompt: "Sort Iker's list.",
          bins: ["✅ Done", "⏳ Not yet"],
          items: [
            { text: "pack his bag", bin: 0 }, { text: "teacher sends the form", bin: 0 },
            { text: "charge his phone", bin: 1 }, { text: "find his sunglasses", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The bus leaves at seven.", a: false },
            { s: "Iker has packed a swimsuit.", a: true },
            { s: "The teacher sent the form a week ago.", a: false },
            { s: "Iker thinks his sister has his sunglasses.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read Valentina's to-do list and her message to her roommate.",
      title: "Moving day",
      text: [
        { author: "To-do list", body: "✅ rent a van · ✅ pack the kitchen · ✅ pay the last electricity bill · ❌ clean the bathroom · ❌ give the keys to the landlord · ❌ change my address at the bank" },
        { author: "Message to Rocío", body: "Hi Rocío! The moving day is almost here! I've already rented the van and I've packed all the kitchen things. I've just paid the electricity bill too. But I haven't cleaned the bathroom yet — sorry! Could you help me tomorrow? Also, I haven't given the keys to the landlord yet. I'll do it on Saturday." }
      ],
      activities: [
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, she has.* or *No, she hasn't.*",
          items: [
            { q: "Has Valentina rented a van?", a: ["Yes, she has."] },
            { q: "Has she cleaned the bathroom yet?", a: ["No, she hasn't.", "No, she has not."] },
            { q: "Has she paid the electricity bill?", a: ["Yes, she has."] },
            { q: "Has she changed her address at the bank yet?", a: ["No, she hasn't.", "No, she has not."] }
          ]
        },
        {
          type: "gap", title: "Read and complete",
          prompt: "Complete the sentences.",
          items: [
            "Valentina has [[already]] packed the kitchen.",
            "She has [[just]] paid the bill.",
            "She hasn't given the keys to the landlord [[yet]].",
            "She'll give the keys on [[Saturday]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the present perfect, then write a message about your to-do list.",
      activities: [
        {
          type: "rewrite", title: "Write the past participle",
          prompt: "Write the past participle.",
          items: [
            { q: "buy", a: ["bought"] },
            { q: "send", a: ["sent"] },
            { q: "write", a: ["written"] },
            { q: "do", a: ["done"] },
            { q: "eat", a: ["eaten"] },
            { q: "find", a: ["found"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Have you booked the hotel yet?" },
            { a: "I've already paid the bill." },
            { a: "She's just called me." },
            { a: "We haven't finished the project yet." },
            { a: "Has he fixed the car yet?" }
          ]
        },
        {
          type: "write", title: "My to-do list",
          prompt: "Imagine you're preparing for a trip, a party or an exam. Write a message to a friend: say what you've already done, what you've just done and what you haven't done yet. Ask your friend one question with *yet*.",
          minWords: 50, maxWords: 100,
          model: "Hi Sam! Our trip to Oaxaca is on Friday and I'm almost ready. I've already booked the hotel and I've bought the bus tickets. I've just packed my backpack! But I haven't changed money yet, and I haven't found my sunglasses. Have you printed the museum tickets yet? Let me know!",
          bank: ["I've already…", "I've just…", "I haven't … yet.", "Have you … yet?", "Has … yet?", "Let me know!"],
          checklist: [
            "I used *already* and *just* before the participle.",
            "I used *yet* at the end of a negative and a question.",
            "I used at least two irregular participles.",
            "I used *have / has* correctly."
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
            "Have you ordered the cake yet?",
            "Yes, I've already ordered it.",
            "I've just bought the drinks.",
            "We haven't bought a present yet.",
            "Has he sent the playlist?",
            "No, not yet."
          ]
        },
        {
          type: "speak", title: "My week so far",
          prompt: "Record yourself talking about this week. What have you already done? What have you just done today? What haven't you done yet?",
          language: ["This week I've already…", "Today I've just…", "I haven't … yet.", "I still need to…", "My friend has…"],
          seconds: 75,
          checklist: ["use the present perfect?", "use *just, already, yet* correctly?", "use irregular participles?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the present perfect for recent actions.", review: "Explanation: present perfect" },
    { can: "I can use *just* and *already* in the right position.", review: "Explanation: just, already, yet; Quick check" },
    { can: "I can use *yet* in questions and negatives.", review: "Reading activity 2" },
    { can: "I can form irregular past participles.", review: "Writing activity 1" },
    { can: "I can understand people checking a to-do list.", review: "Listening: ready for the trip?" },
    { can: "I can write about what I have and haven't done.", review: "Writing activity 3" }
  ]
};
