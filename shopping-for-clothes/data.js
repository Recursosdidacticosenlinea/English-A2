window.UNIT = {
  slug: "shopping-for-clothes",
  number: 27,
  title: "Shopping for Clothes",
  level: "A2",
  minutes: 55,
  speakers: { "Salesperson": "f", "Diego": "m", "Andrea": "f", "Cashier": "m", "Customer": "f", "Clerk": "m", A: "f", B: "m" },
  focus: ["clothes and sizes", "too big / not big enough", "Can I try it on? How much is it?", "it / them: try them on", "shop language: Can I help you?"],

  presentation: {
    scene: "👕👖🧥🛍️",
    situation: "Diego needs new clothes for a job interview next week. He goes to a store in Angelópolis with his sister Andrea.",
    warmup: {
      prompt: "What are you wearing today? Choose everything that is true.",
      options: ["jeans", "a T-shirt", "a sweater", "a hoodie", "a jacket", "sneakers", "a skirt", "a dress", "shorts", "boots", "a cap", "a uniform"],
      response: "Great! In this unit you'll learn to buy clothes and talk about size, color and price."
    },
    dialogueTitle: "At the clothes store",
    dialogue: [
      { who: "Salesperson", line: "Hi! *Can I help you*?" },
      { who: "Diego", line: "Yes, please. I'm looking for a shirt and some pants for a job interview." },
      { who: "Salesperson", line: "*What size* are you?" },
      { who: "Diego", line: "Medium, I think. *Can I try* this blue shirt *on*?" },
      { who: "Salesperson", line: "Sure. The fitting rooms are over there." },
      { who: "Andrea", line: "Hmm… the shirt is OK, but the pants are *too long*." },
      { who: "Diego", line: "And they *aren't big enough* here. Do you have *them* in a bigger size?" },
      { who: "Salesperson", line: "Yes, here you go. Try *them on*." },
      { who: "Diego", line: "Perfect! *How much are* they?" },
      { who: "Salesperson", line: "The pants are 650 pesos and the shirt is 420." },
      { who: "Andrea", line: "That's not *too expensive*. You look great!" }
    ]
  },

  objectives: [
    "I can name clothes, colors, sizes and materials.",
    "I can use *too* and *enough* to explain problems with clothes.",
    "I can use shop language: ask for sizes, try things on, ask prices and pay.",
    "I can use *it* and *them* correctly: *try it on, try them on*."
  ],

  explanation: {
    vocabTitle: "Clothes",
    vocab: [
      { word: "shirt", icon: "👔" }, { word: "T-shirt", icon: "👕" }, { word: "pants", icon: "👖" },
      { word: "dress", icon: "👗" }, { word: "blouse", icon: "👚" }, { word: "jacket", icon: "🧥" },
      { word: "sweater", icon: "🧶" }, { word: "shoes", icon: "👞" }, { word: "sneakers", icon: "👟" },
      { word: "boots", icon: "🥾" }, { word: "socks", icon: "🧦" }, { word: "scarf", icon: "🧣" },
      { word: "cap", icon: "🧢" }, { word: "fitting room", icon: "🚪" }, { word: "receipt", icon: "🧾" }
    ],
    grammar: [
      {
        title: "Too and enough",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*too* + adjective", "more than you want ❌", "These shoes are *too small*."],
          ["*not* + adjective + *enough*", "less than you need ❌", "The jacket *isn't warm enough*."],
          ["adjective + *enough*", "exactly what you need ✅", "This shirt is *big enough*."]
        ],
        note: "*Too* goes **before** the adjective; *enough* goes **after** it. *Too* is negative: *It's too expensive* = I can't or don't want to pay."
      },
      {
        title: "It or them?",
        head: ["One thing", "Plural (pants, jeans, shoes…)"],
        rows: [
          ["Can I try *it* on?", "Can I try *them* on?"],
          ["How much *is it*?", "How much *are they*?"],
          ["*It's* too big.", "*They're* too big."]
        ],
        note: "*Pants, jeans, shorts, glasses* are always plural in English: *My jeans are new.*"
      },
      {
        title: "Shop language",
        head: ["Salesperson", "Customer"],
        rows: [
          ["*Can I help you?*", "*I'm looking for…* / *I'm just looking, thanks.*"],
          ["*What size are you?*", "*Small / Medium / Large.* / *I'm a size 26.*"],
          ["*How does it fit?*", "*It's perfect.* / *It's too tight.*"],
          ["*How would you like to pay?*", "*By card, please.* / *In cash.*"]
        ]
      }
    ],
    watchOut: [
      ["The pants is too long.", "The pants are too long."],
      ["This jacket is enough big.", "This jacket is big enough."],
      ["Can I try on it?", "Can I try it on?"],
      ["It's too much cheap.", "It's very cheap. / It's cheap enough."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *too*, *enough*, *it* or *them*.",
      items: [
        "I can't wear these shoes. They're [[too]] small.",
        "This sweater isn't warm [[enough]] for winter.",
        "I like these jeans. Can I try [[them]] on?",
        "That dress is beautiful. How much is [[it]]?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three short conversations in a department store.",
      title: "At the department store",
      script: [
        { who: "Customer", line: "Excuse me, do you have this dress in a size small?" },
        { who: "Clerk", line: "Let me check… Yes, we do. Here you are. Do you want to try it on?" },
        { who: "Customer", line: "Yes, please." },
        { who: "Customer", line: "Hmm, it's still too big. And the color isn't bright enough. I'll leave it, thanks." },
        { who: "Clerk", line: "Hi. Can I help you?" },
        { who: "Diego", line: "Yes. I want to return these sneakers. They're too tight. Here's the receipt." },
        { who: "Clerk", line: "No problem. Do you want a refund or a different size?" },
        { who: "Diego", line: "A bigger size, please. Size 28." },
        { who: "Cashier", line: "OK, that's one jacket and two pairs of socks. That's 1,150 pesos, please." },
        { who: "Andrea", line: "Wow, that's more than I thought. Is the jacket on sale?" },
        { who: "Cashier", line: "Yes, it's twenty percent off. It was 1,250. How would you like to pay?" },
        { who: "Andrea", line: "By card, please." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "The first customer buys the dress.", a: false },
            { s: "The dress is too big for her.", a: true },
            { s: "Diego wants to return his sneakers because they're too big.", a: false },
            { s: "Diego wants a different size, not his money back.", a: true },
            { s: "Andrea pays 1,150 pesos.", a: true },
            { s: "Andrea pays in cash.", a: false }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word or number.",
          items: [
            "The customer wants the dress in a size [[small]].",
            "The color isn't [[bright]] enough.",
            "Diego has the [[receipt]].",
            "He wants size [[28|twenty-eight]].",
            "The jacket is [[twenty|20]] percent off."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three online reviews of clothes bought from a store's website.",
      title: "Customer reviews",
      text: [
        { author: "★★★★★ Winter jacket · by Pau_M", body: "I love this jacket! It's warm enough for the mornings in Puebla, and it's not too heavy. I usually wear a medium, and the medium fits perfectly. It's a little expensive, but the quality is excellent." },
        { author: "★★☆☆☆ Skinny jeans · by Rafa77", body: "The color is nice, but the jeans are too tight. I ordered my normal size, 30, and I can't sit down! Buy a bigger size. Also, the material isn't strong enough. After two weeks, there's a hole." },
        { author: "★★★☆☆ Cotton T-shirt · by Lu_Reyes", body: "It's cheap and comfortable, but it's too short for me (I'm tall). The colors are bright. After washing it, it's a little smaller. Good for the price, but not perfect." }
      ],
      activities: [
        {
          type: "sort", title: "Good or bad?",
          prompt: "Put each comment in the right box.",
          bins: ["Positive 👍", "Negative 👎"],
          items: [
            { text: "The jacket is warm enough.", bin: 0 }, { text: "The jacket's quality is excellent.", bin: 0 },
            { text: "The jeans' color is nice.", bin: 0 }, { text: "The T-shirt is comfortable.", bin: 0 },
            { text: "The jeans are too tight.", bin: 1 }, { text: "The jeans' material isn't strong enough.", bin: 1 },
            { text: "The T-shirt is too short.", bin: 1 }, { text: "The T-shirt gets smaller.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Too or enough?",
          prompt: "Rewrite the sentences with the word in parentheses.",
          items: [
            { q: "The jeans are very tight. I can't sit down. (too)", a: ["The jeans are too tight."] },
            { q: "The material is weak. (not strong enough)", a: ["The material isn't strong enough.", "The material is not strong enough."] },
            { q: "The T-shirt is short for Lu. (too)", a: ["The T-shirt is too short for Lu.", "The T-shirt is too short."] },
            { q: "The jacket is warm for the mornings. (enough)", a: ["The jacket is warm enough for the mornings.", "The jacket is warm enough."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures, then write a review.",
      activities: [
        {
          type: "tiles", title: "Shop conversations",
          items: [
            { a: "Can I try these shoes on?" },
            { a: "Do you have it in blue?" },
            { a: "This sweater isn't big enough." },
            { a: "How much are these jeans?" },
            { a: "I'd like to pay by card." }
          ]
        },
        {
          type: "match", title: "Questions and answers",
          prompt: "Match the salesperson's question with the customer's answer.",
          pairs: [
            ["Can I help you?", "I'm just looking, thanks."],
            ["What size are you?", "I'm a medium."],
            ["How does it fit?", "It's a little too tight."],
            ["Do you want to try it on?", "Yes, please. Where are the fitting rooms?"],
            ["How would you like to pay?", "In cash, please."]
          ]
        },
        {
          type: "write", title: "Write a review",
          prompt: "Write an online review of something you bought (clothes, shoes, a backpack…). Give stars, describe it, say how it fits, and use *too* and *enough* at least once each.",
          minWords: 60, maxWords: 90,
          model: "★★★★☆ Black hoodie. I bought this hoodie online last month. It's black, with a big pocket, and it's made of cotton. I usually wear a large, but the large was too big, so I changed it for a medium. Now it fits well. It's warm enough for winter, and it's not too expensive: only 499 pesos. The only problem: it's too long in the arms!",
          bank: ["I bought", "It's made of", "I usually wear a", "It fits well / It's too", "It isn't … enough", "It costs", "I recommend it because"],
          checklist: [
            "I described the item: color, material, size.",
            "I used *too* + adjective.",
            "I used *(not) + adjective + enough*.",
            "I used *it / them* correctly."
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
            "Can I help you?",
            "Can I try these jeans on?",
            "They're too big.",
            "This jacket isn't big enough.",
            "Have you got it in medium?",
            "I'll take it, thanks."
          ]
        },
        {
          type: "speak", title: "My favorite outfit",
          prompt: "Record yourself for about one minute. Describe your favorite clothes or outfit: what it is, where you bought it, how it fits, and why you like it.",
          language: ["My favorite outfit is…", "I bought it / them at…", "It's / They're made of…", "It fits perfectly.", "It's warm / comfortable enough.", "It isn't too…"],
          seconds: 75,
          checklist: ["describe at least two pieces of clothing?", "use *too* or *enough*?", "say why you like it?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 15 items of clothing.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *too* + adjective.", review: "Explanation: too and enough" },
    { can: "I can use *(not) + adjective + enough*.", review: "Explanation: too and enough; Reading activity 2" },
    { can: "I can use *it* and *them* with clothes.", review: "Explanation: it or them?" },
    { can: "I can ask for sizes, try things on and pay in a store.", review: "Explanation: shop language; Speaking activity 1 (listen and repeat)" },
    { can: "I can write a review or describe my clothes in a recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
