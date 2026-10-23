window.UNIT = {
  slug: "go-green",
  number: 42,
  title: "Go Green",
  level: "A2",
  minutes: 50,
  speakers: { "Teacher": "f", "Kevin": "m", "Lin": "f", "Host": "m", "Fernanda": "f", A: "f", B: "m" },
  focus: ["should / shouldn't / ought to for advice", "We need to… / It's better to…", "the environment: recycle, reuse, reduce, pollution", "stop + -ing / start + -ing / try to", "eco-friendly habits"],

  presentation: {
    scene: "♻️🌍🚲🌱",
    situation: "Kevin's class is starting an eco-project at their school. The teacher asks for ideas.",
    warmup: {
      prompt: "Which eco-friendly habits do you have? Choose all.",
      options: ["recycle", "use a reusable bottle", "turn off lights", "take short showers", "walk or cycle", "use cloth bags", "buy local food", "repair things", "eat less meat", "plant trees"],
      response: "Great! In this unit you'll learn to give advice about protecting the environment."
    },
    dialogueTitle: "Our eco-project",
    dialogue: [
      { who: "Teacher", line: "OK, class. How can we make our school greener?" },
      { who: "Kevin", line: "*We should recycle* more. There's only one trash can for everything." },
      { who: "Lin", line: "And *we shouldn't use* plastic bottles. *It's better to bring* reusable ones." },
      { who: "Teacher", line: "Good ideas. What about energy?" },
      { who: "Kevin", line: "People *ought to turn off* the lights and computers when they leave the classroom." },
      { who: "Lin", line: "*We need to stop wasting* paper too. Teachers *should send* homework online." },
      { who: "Teacher", line: "Ha! Maybe. I'll *try to use* less paper. Anything else?" },
      { who: "Kevin", line: "*Let's start planting* trees in the garden! Everyone *should plant* one." }
    ]
  },

  objectives: [
    "I can give advice with *should / shouldn't / ought to*.",
    "I can say what is necessary with *need to* and *It's better to*.",
    "I can use *stop / start + -ing* and *try to*.",
    "I can talk about environmental problems and solutions."
  ],

  explanation: {
    vocabTitle: "The environment",
    vocab: [
      { word: "recycle", icon: "♻️" }, { word: "reuse", icon: "🔁" }, { word: "reduce", icon: "📉" },
      { word: "waste", icon: "🗑️" }, { word: "pollution", icon: "🏭" }, { word: "plastic", icon: "🧴" },
      { word: "energy", icon: "⚡" }, { word: "save water", icon: "💧" }, { word: "climate change", icon: "🌡️" },
      { word: "public transport", icon: "🚌" }, { word: "solar panels", icon: "☀️" }, { word: "compost", icon: "🌱" },
      { word: "reusable", icon: "🛍️" }, { word: "eco-friendly", icon: "🌍" }, { word: "plant trees", icon: "🌳" }
    ],
    grammar: [
      {
        title: "Giving advice",
        head: ["Structure", "Example"],
        rows: [
          ["*should* + verb", "We *should* recycle more."],
          ["*shouldn't* + verb", "We *shouldn't* use plastic bottles."],
          ["*ought to* + verb (= should)", "People *ought to* turn off the lights."],
          ["*need to* + verb (necessary)", "We *need to* stop wasting paper."],
          ["*It's better to* + verb", "*It's better to* take the bus."]
        ],
        note: "After *should* use the base verb: *We should recycle* — not *should to recycle*. But *ought to* has *to*."
      },
      {
        title: "Verb patterns for change",
        head: ["Structure", "Example"],
        rows: [
          ["*stop* + -ing", "*Stop using* plastic bags."],
          ["*start* + -ing / to", "Let's *start planting* trees."],
          ["*try to* + verb", "I'll *try to use* less paper."],
          ["*avoid* + -ing", "*Avoid buying* things you don't need."]
        ]
      }
    ],
    watchOut: [
      ["We should to recycle.", "We should recycle."],
      ["You ought recycle more.", "You ought to recycle more."],
      ["Stop to use plastic!", "Stop using plastic!"],
      ["We must to save water.", "We must save water."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *should, shouldn't, to* or *-ing* form.",
      items: [
        "We [[should]] take shorter showers.",
        "You [[shouldn't|should not]] leave the TV on all night.",
        "People ought [[to]] use public transport.",
        "Stop [[using]] plastic bags! (use)",
        "I'm trying [[to]] eat less meat."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host interviews Fernanda, who lives a 'zero waste' life. Listen.",
      title: "Radio: My zero waste life",
      script: [
        { who: "Host", line: "Fernanda, all your trash from one year fits in a small jar. How?" },
        { who: "Fernanda", line: "It started three years ago. I stopped buying things with plastic. I take my own bags and containers to the market." },
        { who: "Host", line: "Isn't it difficult?" },
        { who: "Fernanda", line: "At first, yes. But now it's easy. I make my own shampoo and I repair my clothes. I compost my food waste for my plants." },
        { who: "Host", line: "What advice do you have for our listeners?" },
        { who: "Fernanda", line: "You shouldn't try to change everything in one day. Start with one thing. For example, you ought to carry a reusable bottle. And we all need to buy less. It's better to have fewer things of good quality." },
        { who: "Host", line: "Great advice. Thank you!" }
      ],
      activities: [
        {
          type: "sort", title: "What does Fernanda do?",
          prompt: "Sort: her habits or her advice for listeners?",
          bins: ["Her habits", "Her advice"],
          items: [
            { text: "takes her own containers", bin: 0 }, { text: "makes her own shampoo", bin: 0 }, { text: "repairs her clothes", bin: 0 }, { text: "composts food waste", bin: 0 },
            { text: "start with one thing", bin: 1 }, { text: "carry a reusable bottle", bin: 1 }, { text: "buy less", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Fernanda's trash for a year fits in a jar.", a: true },
            { s: "It was easy for her from the start.", a: false },
            { s: "She says you should change everything in one day.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an infographic about water in Mexico.",
      title: "Every drop counts",
      text: [
        { author: "The problem", body: "Many cities in Mexico, like Mexico City and Monterrey, have water problems. A family of four uses about 1,000 liters of water a day. A ten-minute shower uses about 200 liters!" },
        { author: "What you should do", body: "Take five-minute showers. Turn off the tap when you brush your teeth — you'll save 12 liters each time. Repair dripping taps. Collect rainwater for your plants." },
        { author: "What you shouldn't do", body: "Don't wash your car with a hose — use a bucket. Don't water your garden at midday, when the sun is strong. And don't throw oil down the sink — it pollutes thousands of liters of water." }
      ],
      activities: [
        {
          type: "gap", title: "Find the numbers",
          prompt: "Write the number.",
          items: [
            "A family of four uses about [[1000|1,000]] liters a day.",
            "A ten-minute shower uses about [[200]] liters.",
            "You save [[12|twelve]] liters when you turn off the tap.",
            "You should take [[five|5]]-minute showers."
          ]
        },
        {
          type: "sort", title: "Should or shouldn't?",
          prompt: "Sort the actions.",
          bins: ["✅ You should", "❌ You shouldn't"],
          items: [
            { text: "repair dripping taps", bin: 0 }, { text: "collect rainwater", bin: 0 }, { text: "turn off the tap", bin: 0 },
            { text: "wash your car with a hose", bin: 1 }, { text: "water the garden at midday", bin: 1 }, { text: "throw oil down the sink", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice advice language, then write an eco-plan for your home or school.",
      activities: [
        {
          type: "rewrite", title: "Give advice",
          prompt: "Rewrite with *should* or *shouldn't*.",
          items: [
            { q: "It's a good idea to recycle paper.", a: ["We should recycle paper.", "You should recycle paper."] },
            { q: "It's a bad idea to use plastic bags.", a: ["We shouldn't use plastic bags.", "You shouldn't use plastic bags.", "We should not use plastic bags.", "You should not use plastic bags."] },
            { q: "It's a good idea to walk to school.", a: ["We should walk to school.", "You should walk to school."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "We should recycle more at school." },
            { a: "You shouldn't leave the lights on." },
            { a: "People ought to use public transport." },
            { a: "Stop buying water in plastic bottles." },
            { a: "It's better to repair your clothes." }
          ]
        },
        {
          type: "write", title: "Our eco-plan",
          prompt: "Write an eco-plan for your home, school or workplace. Describe two problems and give at least five pieces of advice. Use *should, shouldn't, ought to, need to, stop + -ing*.",
          minWords: 60, maxWords: 110,
          model: "Our eco-plan for my house: We have two big problems. First, we use too much electricity. We should turn off the lights when we leave a room, and we shouldn't leave the TV on all night. Second, we make a lot of trash. We need to stop buying food in plastic packaging. We ought to take cloth bags to the market. It's also better to compost our fruit and vegetable waste for the garden.",
          bank: ["We have … problems.", "First,… / Second,…", "We should…", "We shouldn't…", "We ought to…", "We need to stop + -ing…", "It's better to…"],
          checklist: [
            "I described two problems.",
            "I gave at least **five** pieces of advice.",
            "I used *should / shouldn't* with the base verb.",
            "I used *stop + -ing* or *try to*."
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
            "We should recycle more.",
            "We shouldn't use plastic bottles.",
            "It's better to bring a reusable bottle.",
            "People ought to turn off the lights.",
            "We need to stop wasting paper.",
            "Let's start planting trees!"
          ]
        },
        {
          type: "speak", title: "Eco-tips video",
          prompt: "Record a short video or audio with eco-tips for your city. Describe one environmental problem and give four pieces of advice.",
          language: ["In my city, there's a problem with…", "We should…", "We shouldn't…", "People ought to…", "It's better to…", "Let's start…"],
          seconds: 75,
          checklist: ["describe a problem?", "give four pieces of advice?", "use *should / ought to / need to*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can give advice with *should / shouldn't*.", review: "Explanation; Writing activity 1" },
    { can: "I can use *ought to* and *need to*.", review: "Explanation; Quick check" },
    { can: "I can use *stop + -ing* and *try to*.", review: "Explanation: verb patterns" },
    { can: "I can talk about environmental problems.", review: "Explanation: vocabulary; Reading" },
    { can: "I can understand an interview about the environment.", review: "Listening: zero waste" },
    { can: "I can write an eco-plan.", review: "Writing activity 3" }
  ]
};
