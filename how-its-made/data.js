window.UNIT = {
  slug: "how-its-made",
  number: 43,
  title: "How It's Made",
  level: "A2",
  minutes: 50,
  speakers: { "Guide": "m", "Paulina": "f", "Host": "f", "Don Ramón": "m", A: "f", B: "m" },
  focus: ["present simple passive: is made / are grown", "made of / made from / made in", "processes: first, then, after that", "products and materials", "Where is it made? What is it made of?"],

  presentation: {
    scene: "🏺🎨🔥🏭",
    situation: "Paulina and her class are on a school trip to a Talavera pottery workshop in Puebla.",
    warmup: {
      prompt: "Which products are made in Mexico? Choose all.",
      options: ["Talavera pottery", "tequila", "silver jewelry", "chocolate", "cars", "coffee", "avocados", "textiles", "mezcal", "TVs"],
      response: "Mexico makes a lot! In this unit you'll learn to describe how things are made with the passive."
    },
    dialogueTitle: "The Talavera workshop",
    dialogue: [
      { who: "Guide", line: "Welcome! Here, Talavera *is made* by hand, the same way as 400 years ago." },
      { who: "Paulina", line: "*What is it made of*?" },
      { who: "Guide", line: "*It's made from* two kinds of clay. First, the clay *is mixed* with water and *left* for three months." },
      { who: "Paulina", line: "Three months! And then?" },
      { who: "Guide", line: "Then the pieces *are shaped* on a wheel. After that, they *are dried* and *fired* in an oven." },
      { who: "Paulina", line: "*Are* they *painted* by machines?" },
      { who: "Guide", line: "No! Every piece *is painted* by an artist. The blue paint *is made* with natural minerals." },
      { who: "Paulina", line: "Wow. And *where is* the pottery *sold*?" },
      { who: "Guide", line: "It *is sold* in Mexico and *exported* to more than twenty countries." }
    ]
  },

  objectives: [
    "I can use the present simple passive to describe processes.",
    "I can use *made of, made from, made in*.",
    "I can describe how a product is made step by step.",
    "I can talk about products from my country."
  ],

  explanation: {
    vocabTitle: "Products and processes",
    vocab: [
      { word: "clay", icon: "🟤" }, { word: "cotton", icon: "☁️" }, { word: "wool", icon: "🐑" },
      { word: "glass", icon: "🫙" }, { word: "silver", icon: "🥈" }, { word: "wood", icon: "🪵" },
      { word: "grow", icon: "🌱" }, { word: "harvest", icon: "🧺" }, { word: "mix", icon: "🥣" },
      { word: "heat / fire", icon: "🔥" }, { word: "shape", icon: "🏺" }, { word: "paint", icon: "🎨" },
      { word: "pack", icon: "📦" }, { word: "export", icon: "🚢" }, { word: "by hand", icon: "✋" }
    ],
    grammar: [
      {
        title: "Present simple passive",
        head: ["Active", "Passive (is / are + past participle)"],
        rows: [
          ["Artists *paint* every piece.", "Every piece *is painted* (by artists)."],
          ["Farmers *grow* coffee in Chiapas.", "Coffee *is grown* in Chiapas."],
          ["They *export* avocados to the USA.", "Avocados *are exported* to the USA."],
          ["question", "*Where is* it *made*? *Are* they *painted* by hand?"]
        ],
        note: "We use the passive when the action or product is more important than the person who does it. Use *by* to say who."
      },
      {
        title: "Made of / from / in",
        head: ["Phrase", "Use", "Example"],
        rows: [
          ["*made of*", "the material you can see", "This table is *made of* wood."],
          ["*made from*", "the material changes completely", "Paper is *made from* trees. Tequila is *made from* agave."],
          ["*made in*", "the place", "This shirt is *made in* Oaxaca."],
          ["*made by*", "the person / company", "It's *made by* local artists."]
        ]
      }
    ],
    watchOut: [
      ["Coffee grows in Chiapas by farmers.", "Coffee is grown in Chiapas."],
      ["The pottery is paint by hand.", "The pottery is painted by hand."],
      ["Avocados is exported.", "Avocados are exported."],
      ["This bag is made with leather.", "This bag is made of leather."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the present simple passive.",
      items: [
        "Talavera [[is made]] in Puebla. (make)",
        "Coffee [[is grown]] in Veracruz and Chiapas. (grow)",
        "Avocados [[are exported]] to many countries. (export)",
        "Each piece [[is painted]] by hand. (paint)",
        "Paper is made [[from]] wood."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A TV program visits Don Ramón, a chocolate maker in Oaxaca. Listen to how chocolate is made.",
      title: "TV: From bean to bar",
      script: [
        { who: "Host", line: "Don Ramón, how is chocolate made here?" },
        { who: "Don Ramón", line: "First, the cacao beans are harvested in Tabasco and Chiapas. Then they are left in the sun for about a week to dry." },
        { who: "Host", line: "What happens next?" },
        { who: "Don Ramón", line: "The beans are roasted in a big pan over a wood fire. After that, the skins are removed by hand." },
        { who: "Host", line: "And then?" },
        { who: "Don Ramón", line: "The beans are ground with sugar, cinnamon and sometimes almonds. Finally, the chocolate is shaped into bars and packed." },
        { who: "Host", line: "Is it used for desserts?" },
        { who: "Don Ramón", line: "Mostly for hot chocolate! And it's also used in mole, of course." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the process in order",
          prompt: "Put the words in order to make each step.",
          items: [
            { a: "The cacao beans are harvested." },
            { a: "They are left in the sun." },
            { a: "The beans are roasted over a fire." },
            { a: "The beans are ground with sugar." },
            { a: "The chocolate is shaped into bars." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "The cacao is harvested in Oaxaca.", a: false },
            { s: "The beans are dried for about a week.", a: true },
            { s: "The skins are removed by machine.", a: false },
            { s: "The chocolate is used in mole.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read short descriptions of famous products from Mexico.",
      title: "Made in Mexico",
      text: [
        { author: "Silver from Taxco", body: "Taxco, in Guerrero, is famous for its silver. The silver is taken from local mines. Rings, necklaces and earrings are made by hand in hundreds of small workshops." },
        { author: "Tequila from Jalisco", body: "Tequila is made from the blue agave plant. The plants are grown for seven to ten years. Then the heart of the plant is cooked, crushed and fermented." },
        { author: "Textiles from Chiapas", body: "Colorful textiles are woven by indigenous women in Chiapas. They are made of cotton or wool, and the designs are passed from mothers to daughters." }
      ],
      activities: [
        {
          type: "match", title: "Which product?",
          prompt: "Match the sentence with the product.",
          pairs: [
            ["It's taken from local mines.", "silver"],
            ["It's made from the blue agave.", "tequila"],
            ["They're woven by indigenous women.", "textiles"]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "Where is the silver jewelry made?", a: ["In Taxco.", "in Taxco", "In Taxco, Guerrero.", "In small workshops in Taxco."] },
            { q: "How long are the agave plants grown?", a: ["For seven to ten years.", "seven to ten years", "Seven to ten years."] },
            { q: "What are the textiles made of?", a: ["Cotton or wool.", "cotton or wool", "They're made of cotton or wool."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive, then describe how a product is made.",
      activities: [
        {
          type: "rewrite", title: "Active to passive",
          prompt: "Rewrite in the passive.",
          items: [
            { q: "Farmers grow avocados in Michoacán.", a: ["Avocados are grown in Michoacán.", "Avocados are grown in Michoacán by farmers."] },
            { q: "Artists paint the pottery by hand.", a: ["The pottery is painted by hand.", "The pottery is painted by hand by artists."] },
            { q: "They make tortillas from corn.", a: ["Tortillas are made from corn."] },
            { q: "They sell the textiles in markets.", a: ["The textiles are sold in markets."] }
          ]
        },
        {
          type: "sort", title: "Made of or made from?",
          prompt: "Choose the right phrase.",
          bins: ["made of", "made from"],
          items: [
            { text: "a wooden chair: wood", bin: 0 }, { text: "a cotton shirt: cotton", bin: 0 }, { text: "a silver ring: silver", bin: 0 },
            { text: "paper: trees", bin: 1 }, { text: "tequila: agave", bin: 1 }, { text: "tortillas: corn", bin: 1 }
          ]
        },
        {
          type: "write", title: "How it's made",
          prompt: "Describe how a product from your region is made (tortillas, mole, coffee, bread, a craft…). Explain the steps with the passive and sequencers. Say where it's sold.",
          minWords: 60, maxWords: 110,
          model: "Tortillas are one of the most important foods in Mexico. They are made from corn. First, the corn is cooked with water and lime. Then it's left overnight. The next day, the corn is ground into a dough called masa. After that, small balls of masa are pressed flat and cooked on a hot comal. Tortillas are sold everywhere, from small shops to supermarkets, and they're eaten every day.",
          bank: ["… is made from / of…", "First, … is…", "Then, … are…", "After that,…", "Finally,…", "It's sold in…", "It's eaten / used…"],
          checklist: [
            "I used the present simple passive at least **five** times.",
            "I used *made of* or *made from*.",
            "I used sequencers.",
            "I used *is* for singular and *are* for plural."
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
            "Talavera is made by hand.",
            "What is it made of?",
            "Coffee is grown in Chiapas.",
            "Every piece is painted by an artist.",
            "Avocados are exported to many countries.",
            "Tequila is made from agave."
          ]
        },
        {
          type: "speak", title: "Made in my region",
          prompt: "Record a short presentation about a product from your region. Say what it's made of, how it's made and where it's sold.",
          language: ["… is a famous product from…", "It's made from / of…", "First, … is…", "Then, … are…", "It's sold in…", "It's used for…"],
          seconds: 75,
          checklist: ["use the passive?", "use *made of / from*?", "describe the steps in order?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the present simple passive.", review: "Explanation; Quick check" },
    { can: "I can change active sentences to passive.", review: "Writing activity 1" },
    { can: "I can use *made of / from / in / by*.", review: "Explanation; Writing activity 2" },
    { can: "I can understand a description of a process.", review: "Listening: from bean to bar" },
    { can: "I can talk about products from Mexico.", review: "Reading: made in Mexico" },
    { can: "I can describe how a product is made.", review: "Writing activity 3" }
  ]
};
