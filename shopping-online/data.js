window.UNIT = {
  slug: "shopping-online",
  number: 30,
  title: "Shopping Online",
  level: "A2",
  minutes: 50,
  speakers: { "Lupita": "f", "Iker": "m", "Agent": "f", "Customer": "m", A: "f", B: "m" },
  focus: ["online shopping: order, deliver, return, refund", "past simple in complaints: I ordered…, it arrived…", "it was worth it / a waste of money", "comparing products: better, cheaper, the best value", "contacting customer service"],

  presentation: {
    scene: "🛒💻📦🚚",
    situation: "Lupita and her brother Iker are looking at their new online orders. One of them is not happy.",
    warmup: {
      prompt: "What do you buy online? Choose all.",
      options: ["clothes", "books", "electronics", "food", "concert tickets", "makeup", "games", "furniture", "shoes", "plane tickets"],
      response: "Online shopping is everywhere! In this unit you'll learn to talk about orders, deliveries and problems."
    },
    dialogueTitle: "The package",
    dialogue: [
      { who: "Lupita", line: "Finally! My headphones *arrived*. *I ordered* them two weeks ago." },
      { who: "Iker", line: "Two weeks? That's a long time. *Were they cheap*?" },
      { who: "Lupita", line: "Yes, *they were cheaper than* in the store. And they sound great. *They were worth it*!" },
      { who: "Iker", line: "Lucky you. Look at my sneakers. *I ordered* a size 27, but *they sent* me a 25." },
      { who: "Lupita", line: "Oh no! *You can return* them. Most stores *give you a refund*." },
      { who: "Iker", line: "And look — the color is different from the photo. *What a waste of money*!" },
      { who: "Lupita", line: "Write to customer service. Send them a photo." },
      { who: "Iker", line: "Good idea. *Next time I'll read the reviews* before I buy!" }
    ]
  },

  objectives: [
    "I can talk about buying things online.",
    "I can describe a problem with an order using the past simple.",
    "I can compare products and give my opinion.",
    "I can write a message to customer service."
  ],

  explanation: {
    vocabTitle: "Online shopping",
    vocab: [
      { word: "order", icon: "🛒" }, { word: "deliver / delivery", icon: "🚚" }, { word: "package", icon: "📦" },
      { word: "return", icon: "↩️" }, { word: "refund", icon: "💸" }, { word: "exchange", icon: "🔄" },
      { word: "track", icon: "📍" }, { word: "review", icon: "⭐" }, { word: "customer service", icon: "🎧" },
      { word: "damaged", icon: "💥" }, { word: "wrong size", icon: "📏" }, { word: "out of stock", icon: "🚫" },
      { word: "free shipping", icon: "🆓" }, { word: "worth it", icon: "👍" }, { word: "a waste of money", icon: "👎" }
    ],
    grammar: [
      {
        title: "Describing a problem",
        head: ["Step", "Example"],
        rows: [
          ["what you did", "I *ordered* a pair of sneakers on May 3rd."],
          ["what happened", "They *arrived* yesterday, but they *sent* the wrong size."],
          ["more problems", "The color *was* different and the box *was* damaged."],
          ["what you want", "*I'd like to* return them. / *Could you* send me a refund, please?"]
        ]
      },
      {
        title: "Giving an opinion about a product",
        head: ["Structure", "Example"],
        rows: [
          ["*It was worth it.*", "Expensive, but good: *It was worth it.*"],
          ["*It was a waste of money.*", "Bad quality: *It was a waste of money.*"],
          ["comparative", "It was *cheaper than* in the store."],
          ["superlative", "It's *the best* phone case I've ever had."],
          ["*the best value*", "This one is *the best value* for money."]
        ]
      }
    ],
    watchOut: [
      ["I bought it in internet.", "I bought it online."],
      ["They sended me the wrong size.", "They sent me the wrong size."],
      ["I want my money back now!", "I'd like a refund, please."],
      ["It worthed the money.", "It was worth the money."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      bank: ["ordered", "arrived", "refund", "return", "worth", "waste"],
      items: [
        "I [[ordered]] a jacket online last week.",
        "The package [[arrived]] this morning.",
        "It's the wrong size, so I want to [[return]] it.",
        "They gave me a full [[refund]].",
        "It was expensive, but it was [[worth]] it.",
        "Those cheap headphones broke in a day — a [[waste]] of money!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A customer calls an online store's customer service. Listen.",
      title: "Customer service call",
      script: [
        { who: "Agent", line: "Thank you for calling TecnoShop. How can I help you?" },
        { who: "Customer", line: "Hi. I ordered a tablet from your website ten days ago, but it hasn't arrived yet." },
        { who: "Agent", line: "I'm sorry about that. Can I have your order number, please?" },
        { who: "Customer", line: "Yes, it's 4-7-2-9-1." },
        { who: "Agent", line: "Thank you. I can see the problem. The package went to the wrong city — Puebla in Tabasco, not Puebla city!" },
        { who: "Customer", line: "Oh no! So what happens now?" },
        { who: "Agent", line: "We'll send you a new tablet today with express delivery. It will arrive in two days. And we'll give you a 10% discount on your next order." },
        { who: "Customer", line: "OK, thank you. That's great." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the information",
          prompt: "Write one word or a number.",
          items: [
            "Product: a [[tablet]]",
            "Ordered: [[ten|10]] days ago",
            "Order number: [[47291]]",
            "New delivery: in [[two|2]] days",
            "Discount on next order: [[10|ten]]%"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The tablet arrived damaged.", a: false },
            { s: "The package went to the wrong city.", a: true },
            { s: "The customer has to pay for the new delivery.", a: false },
            { s: "The customer is happy at the end.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the reviews of a wireless speaker on a shopping website.",
      title: "Reviews · BoomBox Mini speaker · $899",
      text: [
        { author: "⭐⭐⭐⭐⭐ Andrea", body: "Amazing sound for a small speaker! It arrived in two days with free shipping. It's cheaper than other brands and the battery lasts all day. Totally worth it." },
        { author: "⭐ Hugo", body: "Mine arrived damaged — the box was broken and the speaker didn't turn on. I returned it and I'm still waiting for my refund after three weeks. A waste of time and money." },
        { author: "⭐⭐⭐⭐ Lin", body: "Good value for money. The sound isn't as good as my old speaker, which cost three times more. But it's small and perfect for the beach." }
      ],
      activities: [
        {
          type: "match", title: "Who says it?",
          prompt: "Match the opinion with the person.",
          pairs: [
            ["It's totally worth it.", "Andrea"],
            ["It's a waste of time and money.", "Hugo"],
            ["It's good value for money.", "Lin"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Andrea paid for shipping.", a: false },
            { s: "Hugo's speaker didn't work.", a: true },
            { s: "Hugo got his refund quickly.", a: false },
            { s: "Lin's old speaker was more expensive.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing problems, then write to customer service.",
      activities: [
        {
          type: "rewrite", title: "Past simple",
          prompt: "Write the sentence in the past simple.",
          items: [
            { q: "I order a dress online.", a: ["I ordered a dress online."] },
            { q: "They send the wrong color.", a: ["They sent the wrong color."] },
            { q: "The package arrives late.", a: ["The package arrived late."] },
            { q: "I don't receive a refund.", a: ["I didn't receive a refund.", "I did not receive a refund."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I ordered a pair of sneakers last week." },
            { a: "They sent me the wrong size." },
            { a: "I'd like to return them, please." },
            { a: "Could you send me a refund?" },
            { a: "It was cheaper than in the store." }
          ]
        },
        {
          type: "write", title: "Email to customer service",
          prompt: "Write an email to an online store. Say what you ordered and when, describe the problem (wrong size, damaged, late…), and say what you want them to do.",
          minWords: 60, maxWords: 110,
          model: "Dear TecnoShop, On June 2nd I ordered a pair of wireless headphones (order number 58312). They arrived yesterday, but there are two problems. First, the box was damaged. Second, the right headphone doesn't work. I'd like to return them and get a new pair. If that's not possible, could you send me a full refund, please? I've attached a photo. Thank you. Best regards, Iker Pérez",
          bank: ["Dear…,", "On … I ordered…", "It arrived…, but…", "The box was damaged.", "They sent the wrong…", "I'd like to return…", "Could you send me a refund, please?", "Best regards,"],
          checklist: [
            "I said what I ordered and when (past simple).",
            "I described the problem clearly.",
            "I said what I want politely.",
            "I used an email format."
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
            "I ordered them two weeks ago.",
            "They were cheaper than in the store.",
            "They sent me the wrong size.",
            "I'd like to return them, please.",
            "It was worth it!",
            "What a waste of money!"
          ]
        },
        {
          type: "speak", title: "Best and worst buy",
          prompt: "Record yourself talking about the best and the worst thing you've ever bought (online or in a store). What was it? How much did it cost? Was it worth it?",
          language: ["The best thing I've ever bought is…", "I bought it…", "It cost…", "It was worth it because…", "The worst was…", "It was a waste of money because…"],
          seconds: 75,
          checklist: ["describe two purchases?", "use the past simple?", "use *worth it / waste of money*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use online shopping vocabulary.", review: "Explanation: vocabulary; Quick check" },
    { can: "I can describe a problem with an order.", review: "Explanation: describing a problem" },
    { can: "I can give my opinion of a product.", review: "Explanation: giving an opinion; Reading" },
    { can: "I can understand a customer service call.", review: "Listening" },
    { can: "I can use the past simple in complaints.", review: "Writing activity 1" },
    { can: "I can write an email to customer service.", review: "Writing activity 3" }
  ]
};
