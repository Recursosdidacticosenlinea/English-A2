window.UNIT = {
  slug: "money-money-money",
  number: 29,
  title: "Money, Money, Money",
  level: "A2",
  minutes: 50,
  speakers: { "Daniel": "m", "Sara": "f", "Host": "f", "Bank teller": "m", "Kevin": "m", A: "f", B: "m" },
  focus: ["money verbs: spend, save, earn, borrow, lend, owe, cost", "spend money on / spend time + -ing", "lend vs. borrow", "How much does it cost? / It costs…", "talking about budgets"],

  presentation: {
    scene: "💰🐷💳📉",
    situation: "It's the 25th of the month. Daniel has no money left. He asks his sister Sara for help.",
    warmup: {
      prompt: "What do you spend most money on? Choose all.",
      options: ["food", "transport", "clothes", "going out", "my phone", "rent", "books", "video games", "presents", "coffee"],
      response: "Thanks! In this unit you'll learn to talk about money and budgets."
    },
    dialogueTitle: "Broke again!",
    dialogue: [
      { who: "Daniel", line: "Sara, *can you lend me* 500 pesos? I'm broke." },
      { who: "Sara", line: "Again? You *borrowed* 300 last month! You *owe* me 300 already." },
      { who: "Daniel", line: "I know, I know. But my phone broke and the new screen *cost* 1,200 pesos." },
      { who: "Sara", line: "Daniel, you *earn* a good salary. *What do you spend* your money *on*?" },
      { who: "Daniel", line: "Hmm… I *spend* a lot *on* food delivery and concert tickets." },
      { who: "Sara", line: "You need a budget. Try to *save* 10% of your salary every month." },
      { who: "Daniel", line: "OK. *If you lend* me the money, I'll *pay* you *back* on the first of the month." },
      { who: "Sara", line: "Fine. But this is the last time. And no more pizza delivery!" }
    ]
  },

  objectives: [
    "I can use money verbs correctly.",
    "I can explain the difference between *lend* and *borrow*.",
    "I can talk about what I spend money on.",
    "I can give simple advice about saving money."
  ],

  explanation: {
    vocabTitle: "Money",
    vocab: [
      { word: "earn", icon: "💼" }, { word: "spend", icon: "🛍️" }, { word: "save", icon: "🐷" },
      { word: "borrow", icon: "🤲" }, { word: "lend", icon: "🫴" }, { word: "owe", icon: "📝" },
      { word: "pay back", icon: "↩️" }, { word: "cost", icon: "🏷️" }, { word: "waste", icon: "🗑️" },
      { word: "salary", icon: "💵" }, { word: "budget", icon: "📊" }, { word: "bill", icon: "🧾" },
      { word: "cash", icon: "💴" }, { word: "credit card", icon: "💳" }, { word: "broke", icon: "😩" }
    ],
    grammar: [
      {
        title: "Lend or borrow?",
        head: ["Verb", "Structure", "Example"],
        rows: [
          ["*lend* (give)", "lend + person + thing", "Can you *lend me* 500 pesos?"],
          ["*borrow* (take)", "borrow + thing + from + person", "Can I *borrow* 500 pesos *from* you?"],
          ["past", "lend → *lent* · borrow → *borrowed*", "Sara *lent* Daniel money. Daniel *borrowed* money."]
        ]
      },
      {
        title: "Other money verbs",
        head: ["Verb", "Structure / past", "Example"],
        rows: [
          ["*spend*", "spend money *on* + noun / spend time + *-ing* · *spent*", "I *spend* a lot *on* food. I *spent* hours shopping."],
          ["*cost*", "*It costs…* · past: *cost*", "The screen *cost* 1,200 pesos."],
          ["*owe*", "owe + person + amount", "You *owe me* 300 pesos."],
          ["*pay (back)*", "pay + for + thing · *paid*", "I *paid for* dinner. I'll *pay* you *back* tomorrow."],
          ["*earn / save*", "*earned / saved*", "She *earns* 15,000 a month and *saves* 2,000."]
        ]
      }
    ],
    watchOut: [
      ["Can you borrow me 100 pesos?", "Can you lend me 100 pesos?"],
      ["I spend a lot of money in clothes.", "I spend a lot of money on clothes."],
      ["How much it costs?", "How much does it cost?"],
      ["I paid the dinner.", "I paid for the dinner."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *lend, borrow, spend, save, owe* or *cost*.",
      items: [
        "Can I [[borrow]] your pen?",
        "Could you [[lend]] me 50 pesos until Friday?",
        "How much did your new phone [[cost]]?",
        "I want to [[save]] money for a trip.",
        "I [[spend]] too much money on coffee.",
        "You [[owe]] me 200 pesos!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A financial advisor on the radio answers a question from a student, Kevin. Listen.",
      title: "Radio: Ask the money expert",
      script: [
        { who: "Host", line: "Our next caller is Kevin. Hi Kevin, what's your question?" },
        { who: "Kevin", line: "Hi. I'm a student and I work part-time. I earn about 5,000 pesos a month, but I never have money at the end of the month." },
        { who: "Host", line: "What do you spend your money on?" },
        { who: "Kevin", line: "Transport costs about 800. Food is about 2,000. And I spend a lot on going out with friends — maybe 1,500." },
        { who: "Host", line: "OK. My first tip: write down everything you spend for one month. Most people waste money on small things like snacks and coffee." },
        { who: "Kevin", line: "That's true. I buy two coffees a day!" },
        { who: "Host", line: "Second tip: save money first, not last. When you get paid, put 500 pesos in a savings account. And third: don't borrow money from friends. It can damage your friendships." }
      ],
      activities: [
        {
          type: "gap", title: "Kevin's budget",
          prompt: "Write the numbers.",
          items: [
            "Kevin earns about $[[5000|5,000]] a month.",
            "Transport costs about $[[800]].",
            "Food costs about $[[2000|2,000]].",
            "He spends about $[[1500|1,500]] on going out.",
            "The expert says: save $[[500]] when you get paid."
          ]
        },
        {
          type: "sort", title: "Tips",
          prompt: "Is it the expert's advice or Kevin's problem?",
          bins: ["Kevin's problem", "Expert's advice"],
          items: [
            { text: "never has money at the end of the month", bin: 0 }, { text: "buys two coffees a day", bin: 0 }, { text: "spends a lot on going out", bin: 0 },
            { text: "write down everything you spend", bin: 1 }, { text: "save money first", bin: 1 }, { text: "don't borrow from friends", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a student magazine.",
      title: "Five ways to save money at university",
      text: [
        { author: "1 · Cook at home", body: "Students spend about 40% of their money on food. If you cook at home and bring lunch, you can save more than 1,000 pesos a month." },
        { author: "2 · Buy second-hand", body: "Don't buy new books. Borrow them from the library or buy them second-hand from older students." },
        { author: "3 · Use student discounts", body: "Museums, cinemas and buses often have discounts for students. Always ask!" },
        { author: "4 · Wait 24 hours", body: "Before you buy something you don't need, wait one day. Often you don't want it any more." },
        { author: "5 · Lend carefully", body: "Lending money to friends is kind, but write down who owes you money and when they'll pay you back." }
      ],
      activities: [
        {
          type: "match", title: "Which tip?",
          prompt: "Match the situation with the tip.",
          pairs: [
            ["You want new sneakers but you don't need them.", "Wait 24 hours."],
            ["Your textbook costs 900 pesos.", "Buy second-hand."],
            ["You buy lunch every day.", "Cook at home."],
            ["You want to go to the cinema.", "Use student discounts."],
            ["A friend asks for 300 pesos.", "Lend carefully."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Students spend about 40% of their money on food.", a: true },
            { s: "The article says: buy new books.", a: false },
            { s: "Cinemas never have discounts for students.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice money verbs, then write about your spending habits.",
      activities: [
        {
          type: "rewrite", title: "Lend or borrow?",
          prompt: "Rewrite the sentence with the verb in brackets.",
          items: [
            { q: "Can you lend me your bike? (borrow)", a: ["Can I borrow your bike?"] },
            { q: "Can I borrow 100 pesos from you? (lend)", a: ["Can you lend me 100 pesos?"] },
            { q: "Sara gave Daniel money for a short time. (lent)", a: ["Sara lent Daniel money.", "Sara lent Daniel some money.", "Sara lent money to Daniel."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How much does this jacket cost?" },
            { a: "I spend too much money on clothes." },
            { a: "Could you lend me some money?" },
            { a: "I'll pay you back next week." },
            { a: "She saves part of her salary every month." }
          ]
        },
        {
          type: "write", title: "My money habits",
          prompt: "Write about your money habits. What do you spend money on? Do you save money? Have you ever borrowed or lent money? What can you do to save more?",
          minWords: 60, maxWords: 110,
          model: "I'm a student and I work at a café on weekends. I earn about 3,000 pesos a month. I spend most of my money on transport and food, and I spend too much on clothes. I try to save 300 pesos every month for a trip to Mérida. Last month I lent my friend 200 pesos, and he paid me back a week later. To save more, I'm going to bring lunch from home and stop buying coffee every day.",
          bank: ["I earn about…", "I spend most of my money on…", "I spend too much on…", "I try to save…", "I lent / borrowed…", "To save more, I'm going to…"],
          checklist: [
            "I used at least **five** money verbs.",
            "I used *spend … on* correctly.",
            "I used *lend* or *borrow* correctly.",
            "I wrote a plan to save money."
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
            "Can you lend me five hundred pesos?",
            "You borrowed money last month.",
            "What do you spend your money on?",
            "The new screen cost twelve hundred pesos.",
            "Try to save ten percent of your salary.",
            "I'll pay you back next week."
          ]
        },
        {
          type: "speak", title: "Money tips",
          prompt: "Record a short video or audio with your best tips for saving money. Talk about what students spend money on and three ways to save.",
          language: ["Students spend a lot on…", "You can save money if…", "Don't borrow…", "Try to…", "It costs…", "My best tip is…"],
          seconds: 75,
          checklist: ["use money verbs?", "use *spend … on*?", "give three tips?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use money verbs: earn, spend, save, cost…", review: "Explanation: other money verbs; Quick check" },
    { can: "I can use *lend* and *borrow* correctly.", review: "Explanation: lend or borrow?; Writing activity 1" },
    { can: "I can say what I spend money on.", review: "Presentation" },
    { can: "I can understand advice about money.", review: "Listening and Reading" },
    { can: "I can ask and say how much things cost.", review: "Writing activity 2" },
    { can: "I can write about my money habits.", review: "Writing activity 3" }
  ]
};
