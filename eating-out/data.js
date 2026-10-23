window.UNIT = {
  slug: "eating-out",
  number: 28,
  title: "Eating Out",
  level: "A2",
  minutes: 50,
  speakers: { "Waiter": "m", "Mónica": "f", "Javier": "m", "Manager": "f", "Customer": "m", A: "f", B: "m" },
  focus: ["restaurant language: a table for two, the menu, the check", "polite requests: Could I have…? Could you bring…?", "Would you like…? / I'll have…", "complaining politely: I'm sorry, but…", "describing food: overcooked, cold, salty"],

  presentation: {
    scene: "🍽️🕯️🍷🧾",
    situation: "Mónica and Javier are celebrating their anniversary at a nice restaurant in Puebla.",
    warmup: {
      prompt: "What do you say in a restaurant? Choose the phrases you know.",
      options: ["A table for two, please.", "Can I see the menu?", "I'll have the soup.", "What do you recommend?", "Could I have some water?", "The check, please.", "Is service included?", "It's delicious!", "Excuse me!", "Can we pay by card?"],
      response: "Very useful! In this unit you'll learn to order, ask politely and solve problems in a restaurant."
    },
    dialogueTitle: "An anniversary dinner",
    dialogue: [
      { who: "Waiter", line: "Good evening. Do you have a reservation?" },
      { who: "Javier", line: "Yes, *a table for two* under Ruiz, please." },
      { who: "Waiter", line: "This way, please. *Are you ready to order*?" },
      { who: "Mónica", line: "*What do you recommend*?" },
      { who: "Waiter", line: "The chiles en nogada are excellent. It's the season for them." },
      { who: "Mónica", line: "Great. *I'll have* the chiles en nogada, please." },
      { who: "Javier", line: "*I'd like* the steak, medium, please. And *could you bring* us some water?" },
      { who: "Waiter", line: "Of course. *Would you like* anything to drink?" },
      { who: "Javier", line: "Later… Excuse me, *I'm sorry, but* this steak is *overcooked*. I asked for medium." },
      { who: "Waiter", line: "I'm so sorry, sir. I'll bring you another one right away." }
    ]
  },

  objectives: [
    "I can book a table and order food in a restaurant.",
    "I can make polite requests with *Could I / Could you…?*",
    "I can complain politely about a problem.",
    "I can describe food and ask for recommendations."
  ],

  explanation: {
    vocabTitle: "At the restaurant",
    vocab: [
      { word: "reservation", icon: "📅" }, { word: "menu", icon: "📋" }, { word: "starter", icon: "🥗" },
      { word: "main course", icon: "🍲" }, { word: "dessert", icon: "🍰" }, { word: "side dish", icon: "🍟" },
      { word: "the check / bill", icon: "🧾" }, { word: "tip", icon: "💵" }, { word: "waiter / waitress", icon: "🤵" },
      { word: "overcooked", icon: "🔥" }, { word: "undercooked", icon: "🥩" }, { word: "too salty", icon: "🧂" },
      { word: "cold", icon: "🧊" }, { word: "spicy", icon: "🌶️" }, { word: "vegetarian", icon: "🥦" }
    ],
    grammar: [
      {
        title: "Ordering",
        head: ["Waiter", "Customer"],
        rows: [
          ["*Are you ready to order?*", "*Yes, I'll have* the soup, please."],
          ["*What would you like?*", "*I'd like* the steak, medium."],
          ["*Would you like* anything to drink?", "*Yes, please. Could I have* a lemonade?"],
          ["*How would you like* your steak?", "*Medium / well done / rare*, please."],
          ["*Anything else?*", "*No, that's all, thank you.*"]
        ],
        note: "*I'll have…* is a natural way to order: it's a decision you make at the moment."
      },
      {
        title: "Polite requests and complaints",
        head: ["Function", "Example"],
        rows: [
          ["ask for something", "*Could I have* the menu, please?"],
          ["ask someone to do something", "*Could you bring* us some bread, please?"],
          ["ask for advice", "*What do you recommend?*"],
          ["complain politely", "*I'm sorry, but* my soup is cold. / *Excuse me, I think there's a mistake* in the check."]
        ],
        note: "*Could* is more polite than *can*. Always add *please*."
      }
    ],
    watchOut: [
      ["I want the soup.", "I'll have the soup, please. / I'd like the soup, please."],
      ["Bring me water!", "Could you bring me some water, please?"],
      ["This soup is very cold, I don't want it!", "I'm sorry, but this soup is cold."],
      ["Can I have the count?", "Could I have the check, please?"]
    ],
    check: {
      type: "match", title: "Quick check",
      prompt: "Match the waiter's question with the best answer.",
      pairs: [
        ["Do you have a reservation?", "Yes, a table for two under Ruiz."],
        ["Are you ready to order?", "Yes, I'll have the chicken."],
        ["How would you like your steak?", "Medium, please."],
        ["Would you like any dessert?", "No, thanks. Just the check, please."],
        ["Is everything OK?", "I'm sorry, but my soup is cold."]
      ]
    }
  },

  skills: {
    listening: {
      intro: "A customer has some problems at a restaurant. He talks to the manager. Listen.",
      title: "Talking to the manager",
      script: [
        { who: "Manager", line: "Good evening. The waiter says there's a problem. How can I help?" },
        { who: "Customer", line: "Well, I'm sorry, but we waited forty minutes for our food. And my pasta is cold." },
        { who: "Manager", line: "I'm very sorry. We have a lot of customers tonight. Could I bring you a new plate of pasta?" },
        { who: "Customer", line: "Yes, please. And my wife ordered a vegetarian salad, but there's chicken in it." },
        { who: "Manager", line: "Oh no, I apologize. I'll ask the chef to make a new one immediately." },
        { who: "Customer", line: "Thank you. Also, could you bring us some more bread?" },
        { who: "Manager", line: "Of course. And tonight, your desserts are free. Again, I'm very sorry." },
        { who: "Customer", line: "That's very kind. Thank you." }
      ],
      activities: [
        {
          type: "match", title: "Problems and solutions",
          prompt: "Match the problem with the manager's solution.",
          pairs: [
            ["The pasta is cold.", "a new plate of pasta"],
            ["There's chicken in the vegetarian salad.", "The chef makes a new one."],
            ["They want more bread.", "The manager brings more."],
            ["They waited forty minutes.", "free desserts"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "They waited for twenty minutes.", a: false },
            { s: "The restaurant is busy tonight.", a: true },
            { s: "The wife is vegetarian.", a: true },
            { s: "The manager is rude.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three online reviews of the same restaurant.",
      title: "Reviews · La Casona",
      text: [
        { author: "⭐⭐⭐⭐⭐ Daniela", body: "We had a wonderful dinner. The waiter recommended the mole and it was delicious. The service was fast and friendly. The prices are a bit high, but it's worth it for a special occasion." },
        { author: "⭐⭐ Kevin", body: "The place is beautiful, but the food was disappointing. My steak was overcooked and the fries were too salty. We waited a long time for the check, too." },
        { author: "⭐⭐⭐⭐ Iris", body: "Great vegetarian options! The mushroom tacos were amazing. The only problem: it was very noisy on a Friday night. Book a table early — it's always full." }
      ],
      activities: [
        {
          type: "sort", title: "Positive or negative?",
          prompt: "Sort the comments.",
          bins: ["😊 Positive", "😞 Negative"],
          items: [
            { text: "delicious mole", bin: 0 }, { text: "fast and friendly service", bin: 0 }, { text: "great vegetarian options", bin: 0 }, { text: "beautiful place", bin: 0 },
            { text: "overcooked steak", bin: 1 }, { text: "salty fries", bin: 1 }, { text: "very noisy", bin: 1 }, { text: "a long wait for the check", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Daniela thinks the prices are cheap.", a: false },
            { s: "Kevin enjoyed his steak.", a: false },
            { s: "Iris recommends booking early.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice polite requests, then write a review of a restaurant.",
      activities: [
        {
          type: "rewrite", title: "Make it polite",
          prompt: "Rewrite with *Could I have…?* or *Could you…?* and *please*.",
          items: [
            { q: "Give me the menu.", a: ["Could I have the menu, please?", "Could you give me the menu, please?"] },
            { q: "Bring us some water.", a: ["Could you bring us some water, please?"] },
            { q: "I want the check.", a: ["Could I have the check, please?"] },
            { q: "Recommend a dessert.", a: ["Could you recommend a dessert, please?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "A table for four, please." },
            { a: "I'll have the chicken soup." },
            { a: "What do you recommend?" },
            { a: "I'm sorry, but my food is cold." },
            { a: "Could we have the check, please?" }
          ]
        },
        {
          type: "write", title: "My restaurant review",
          prompt: "Write a review of a restaurant you've been to (real or imagined). What did you order? How was the food and service? Was there any problem? Would you recommend it?",
          minWords: 60, maxWords: 110,
          model: "Last Saturday I went to El Mural with my family for my mom's birthday. We booked a table for six. For starters we had guacamole, and I had the cochinita pibil as a main course. It was delicious! The waiter was very friendly and recommended a great dessert. The only problem was my brother's soup — it was too salty, but they changed it quickly. I recommend it for special occasions.",
          bank: ["Last … I went to…", "We booked a table for…", "I had … as a main course.", "It was delicious / too salty / overcooked.", "The waiter was…", "The only problem was…", "I recommend it for…"],
          checklist: [
            "I described the food and the service.",
            "I used restaurant vocabulary.",
            "I mentioned a problem and the solution.",
            "I gave a recommendation."
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
            "A table for two, please.",
            "What do you recommend?",
            "I'll have the chiles en nogada.",
            "Could you bring us some water?",
            "I'm sorry, but this steak is overcooked.",
            "Could we have the check, please?"
          ]
        },
        {
          type: "speak", title: "A night out",
          prompt: "Record a short role-play playing both the waiter and the customer: arrive, order a starter and a main course, have one problem and ask for the check.",
          language: ["A table for…, please.", "Are you ready to order?", "I'll have…", "Could I have…?", "I'm sorry, but…", "Could we have the check, please?"],
          seconds: 90,
          checklist: ["order politely?", "use *Could I / Could you*?", "complain politely?", "ask for the check?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can book a table and order food.", review: "Explanation: ordering" },
    { can: "I can make polite requests with *Could…?*", review: "Writing activity 1" },
    { can: "I can complain politely.", review: "Explanation: complaints; Listening" },
    { can: "I can describe food problems: cold, salty, overcooked.", review: "Explanation: vocabulary" },
    { can: "I can understand restaurant reviews.", review: "Reading: La Casona" },
    { can: "I can write a restaurant review.", review: "Writing activity 3" }
  ]
};
