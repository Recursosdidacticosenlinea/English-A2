window.UNIT = {
  slug: "something-special",
  number: 39,
  title: "Something Special",
  level: "A2",
  minutes: 50,
  speakers: { "Lucía": "f", "Pablo": "m", "Shop assistant": "f", "Host": "m", "Grandma": "f", A: "f", B: "m" },
  focus: ["indefinite pronouns: something, anything, nothing, everything", "someone / anyone / no one / everyone", "somewhere / anywhere / nowhere / everywhere", "gifts and celebrations", "What do you give someone who has everything?"],

  presentation: {
    scene: "🎁🛍️🎂🤔",
    situation: "It's Lucía's mom's 50th birthday next week. Lucía and her brother Pablo are trying to choose a present.",
    warmup: {
      prompt: "What do you usually give as a present? Choose all.",
      options: ["clothes", "flowers", "chocolates", "books", "perfume", "a gift card", "an experience", "jewelry", "something handmade", "money"],
      response: "Nice ideas! In this unit you'll learn to talk about presents with *something, anything, nothing*."
    },
    dialogueTitle: "The perfect present",
    dialogue: [
      { who: "Lucía", line: "We need to buy *something special* for Mom's birthday." },
      { who: "Pablo", line: "I know, but she has *everything*! Clothes, books, perfume…" },
      { who: "Lucía", line: "Is there *anything* she wants?" },
      { who: "Pablo", line: "*Nothing*. I asked her and she said, \"I don't need *anything*.\"" },
      { who: "Lucía", line: "Hmm. What about an experience? We could take her *somewhere* nice." },
      { who: "Pablo", line: "Good idea! *Someone* at work told me about a cooking class in Cholula." },
      { who: "Lucía", line: "Perfect! *No one* in our family can make French desserts. She'll love it." },
      { who: "Pablo", line: "And let's invite *everyone* to a surprise dinner after the class!" }
    ]
  },

  objectives: [
    "I can use *something, anything, nothing, everything*.",
    "I can use *someone, anyone, no one, everyone*.",
    "I can use *somewhere, anywhere, nowhere, everywhere*.",
    "I can talk about choosing and giving presents."
  ],

  explanation: {
    vocabTitle: "Presents and celebrations",
    vocab: [
      { word: "present / gift", icon: "🎁" }, { word: "wrap", icon: "🎀" }, { word: "card", icon: "💌" },
      { word: "gift card", icon: "💳" }, { word: "handmade", icon: "🧶" }, { word: "an experience", icon: "🎟️" },
      { word: "perfume", icon: "🌸" }, { word: "jewelry", icon: "💍" }, { word: "surprise party", icon: "🎉" },
      { word: "anniversary", icon: "💑" }, { word: "graduation", icon: "🎓" }, { word: "thank-you note", icon: "📝" },
      { word: "choose", icon: "🤔" }, { word: "receive", icon: "📥" }, { word: "useful", icon: "🔧" }
    ],
    grammar: [
      {
        title: "Indefinite pronouns",
        head: ["", "things", "people", "places"],
        rows: [
          ["*some-* (affirmative)", "*something*", "*someone / somebody*", "*somewhere*"],
          ["*any-* (questions & negatives)", "*anything*", "*anyone / anybody*", "*anywhere*"],
          ["*no-* (negative meaning)", "*nothing*", "*no one / nobody*", "*nowhere*"],
          ["*every-* (all)", "*everything*", "*everyone / everybody*", "*everywhere*"]
        ],
        note: "Use *any-* with *not*: *I don't need anything.* = *I need nothing.* Never use two negatives: *I don't need nothing* ❌."
      },
      {
        title: "Using them",
        head: ["Rule", "Example"],
        rows: [
          ["singular verb", "*Everyone is* here. *Nobody knows* the answer."],
          ["+ adjective after", "something *special*, somewhere *nice*, nothing *new*"],
          ["offers with *some-*", "Would you like *something* to drink?"]
        ]
      }
    ],
    watchOut: [
      ["I don't need nothing.", "I don't need anything. / I need nothing."],
      ["Everyone are happy.", "Everyone is happy."],
      ["We want special something.", "We want something special."],
      ["Is there something in the box? (question, no idea)", "Is there anything in the box?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *something, anything, nothing, someone, anyone, everyone* or *somewhere*.",
      items: [
        "I want to buy [[something]] special for my mom.",
        "Is there [[anything]] in the fridge? I'm hungry.",
        "[[Nothing|No one|Nobody]] knows about the party. It's a surprise!",
        "Did you see [[anyone|anybody]] at the café?",
        "[[Everyone|Everybody]] loved the cake.",
        "Let's go [[somewhere]] nice for dinner."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Pablo is in a store looking for a present. Listen to his conversation with the shop assistant.",
      title: "In the gift shop",
      script: [
        { who: "Shop assistant", line: "Hello! Are you looking for anything in particular?" },
        { who: "Pablo", line: "Yes, I need something for my grandma. She's eighty, and she says she doesn't want anything." },
        { who: "Shop assistant", line: "Everyone says that! What does she like?" },
        { who: "Pablo", line: "She loves gardening and she goes everywhere with her dog." },
        { who: "Shop assistant", line: "How about this personalized photo frame? You can put a photo of her and her dog." },
        { who: "Pablo", line: "That's nice, but she has photos everywhere in her house!" },
        { who: "Shop assistant", line: "Then what about a set of special seeds? Nobody in town sells these flowers." },
        { who: "Pablo", line: "Perfect! It's something useful and different. Can you wrap it, please?" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Pablo is buying a present for his mom.", a: false },
            { s: "His grandma says she wants a lot of things.", a: false },
            { s: "His grandma loves gardening.", a: true },
            { s: "Pablo buys the photo frame.", a: false },
            { s: "Nobody else in town sells the seeds.", a: true }
          ]
        },
        {
          type: "gap", title: "Complete the sentences",
          prompt: "Write the indefinite pronoun you hear.",
          items: [
            "Are you looking for [[anything]] in particular?",
            "[[Everyone]] says that!",
            "She goes [[everywhere]] with her dog.",
            "It's [[something]] useful and different."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about gift-giving around the world.",
      title: "Gift etiquette around the world",
      text: [
        { author: "Japan", body: "In Japan, people wrap presents beautifully. Don't give anything in sets of four — the number four sounds like the word for death. Receive presents with both hands." },
        { author: "China", body: "Never give someone a clock as a present — it's a sign of bad luck. Red wrapping paper is lucky. People often say no two or three times before they accept a gift." },
        { author: "Mexico", body: "At birthday parties, everyone sings \"Las Mañanitas\". Guests usually bring something small: flowers, a bottle of wine or a dessert. Nobody opens presents in front of the guests at some family parties — they open them later." }
      ],
      activities: [
        {
          type: "match", title: "Which country?",
          prompt: "Match the custom with the country.",
          pairs: [
            ["Don't give anything in sets of four.", "Japan"],
            ["Never give someone a clock.", "China"],
            ["Everyone sings \"Las Mañanitas\".", "Mexico"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "In Japan, you receive presents with one hand.", a: false },
            { s: "Red paper is lucky in China.", a: true },
            { s: "Mexican guests usually bring something small.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice indefinite pronouns, then write about a special present.",
      activities: [
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite with *any-* and *not*.",
          items: [
            { q: "I know nobody here.", a: ["I don't know anybody here.", "I don't know anyone here.", "I do not know anyone here.", "I do not know anybody here."] },
            { q: "She bought nothing.", a: ["She didn't buy anything.", "She did not buy anything."] },
            { q: "We went nowhere last weekend.", a: ["We didn't go anywhere last weekend.", "We did not go anywhere last weekend."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I want to buy something special." },
            { a: "Is there anything you need?" },
            { a: "Everyone loved the surprise party." },
            { a: "Nobody knew about the present." },
            { a: "Let's go somewhere quiet." }
          ]
        },
        {
          type: "write", title: "The best present",
          prompt: "Write about the best present you've ever received or given. Who was it from / for? What was it? Why was it special? Use at least four indefinite pronouns.",
          minWords: 60, maxWords: 110,
          model: "The best present I've ever received was from my grandpa. For my 15th birthday, everyone gave me clothes or money, but my grandpa gave me something different: an old notebook with his drawings. Nobody in the family knew that he could draw! There was a drawing of every place where he lived — he traveled everywhere in Mexico. I don't need anything else to remember him.",
          bank: ["The best present I've ever received / given was…", "Everyone gave me…", "… gave me something…", "Nobody knew…", "I don't need anything…", "It was special because…"],
          checklist: [
            "I used at least **four** indefinite pronouns.",
            "I used *any-* with negatives.",
            "I used a singular verb with *everyone / nobody*.",
            "I explained why the present was special."
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
            "We need to buy something special.",
            "She has everything!",
            "I don't need anything.",
            "Someone at work told me about it.",
            "No one in our family can cook French food.",
            "Let's invite everyone to a surprise dinner."
          ]
        },
        {
          type: "speak", title: "Gift advice",
          prompt: "Record yourself giving advice: What can you give someone who has everything? Talk about three ideas and explain why they're good.",
          language: ["For someone who has everything, …", "You can give them something…", "Nobody needs…", "Everyone loves…", "Take them somewhere…", "It's something…"],
          seconds: 75,
          checklist: ["use indefinite pronouns?", "give three ideas?", "explain your reasons?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *something, anything, nothing, everything*.", review: "Explanation; Quick check" },
    { can: "I can use *someone, anyone, no one, everyone*.", review: "Explanation; Listening activity 2" },
    { can: "I can use *somewhere, anywhere, nowhere, everywhere*.", review: "Writing activity 1" },
    { can: "I can avoid double negatives.", review: "Explanation: watch out!" },
    { can: "I can understand customs about gifts.", review: "Reading: gift etiquette" },
    { can: "I can write about a special present.", review: "Writing activity 3" }
  ]
};
