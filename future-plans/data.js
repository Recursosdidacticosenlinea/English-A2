window.UNIT = {
  slug: "future-plans",
  number: 46,
  title: "Future Plans",
  level: "A2",
  minutes: 50,
  speakers: { "Sofía": "f", "Hugo": "m", "Mom": "f", "Iker": "m", A: "f", B: "m" },
  focus: ["present continuous for fixed arrangements", "be going to for intentions", "will for decisions now, offers and promises", "choosing the right future form", "What are you doing on…? / I'm meeting…"],

  presentation: {
    scene: "📅✈️🎓🤔",
    situation: "It's December. Sofía and Hugo are talking about their plans for the vacation and the new year.",
    warmup: {
      prompt: "What are you doing this vacation? Choose all that are true for you.",
      options: ["visiting family", "traveling", "working", "studying", "resting at home", "going to parties", "learning something new", "seeing friends", "moving house", "I don't know yet"],
      response: "Nice! In this unit you'll learn to choose the right future form for plans, arrangements and decisions."
    },
    dialogueTitle: "Vacation plans",
    dialogue: [
      { who: "Hugo", line: "*What are you doing* for the vacation, Sofía?" },
      { who: "Sofía", line: "*I'm flying* to Mérida on the 20th. *My aunt is meeting* me at the airport." },
      { who: "Hugo", line: "Nice! *Are you going to visit* Chichén Itzá?" },
      { who: "Sofía", line: "Yes, *I'm going to visit* the pyramids and swim in a cenote. What about you?" },
      { who: "Hugo", line: "*I'm working* until the 24th. Then *I'm going to rest*. In January *I'm going to start* a French course." },
      { who: "Sofía", line: "Great! Oh no, I need a new suitcase. Mine is broken." },
      { who: "Hugo", line: "Don't buy one. *I'll lend* you mine!" },
      { who: "Sofía", line: "Really? Thanks! *I'll bring* you something from Mérida. *I promise*." }
    ]
  },

  objectives: [
    "I can use the present continuous for fixed arrangements.",
    "I can use *going to* for intentions and plans.",
    "I can use *will* for decisions, offers and promises.",
    "I can talk about my plans for the vacation and the new year."
  ],

  explanation: {
    vocabTitle: "Plans",
    vocab: [
      { word: "arrangement", icon: "📅" }, { word: "plan", icon: "🗺️" }, { word: "intention", icon: "🎯" },
      { word: "book a flight", icon: "✈️" }, { word: "meet someone", icon: "🤝" }, { word: "start a course", icon: "📖" },
      { word: "take a break", icon: "🏖️" }, { word: "promise", icon: "🤞" }, { word: "decide", icon: "💡" },
      { word: "the day after tomorrow", icon: "➡️" }, { word: "next weekend", icon: "🗓️" }, { word: "in two weeks", icon: "⏳" },
      { word: "New Year's resolution", icon: "🎆" }, { word: "busy", icon: "📌" }, { word: "free", icon: "🆓" }
    ],
    grammar: [
      {
        title: "Three future forms",
        head: ["Form", "Use", "Example"],
        rows: [
          ["present continuous", "fixed arrangements (time, place, other people)", "*I'm flying* to Mérida on the 20th."],
          ["*be going to*", "intentions and plans (decided before)", "*I'm going to start* a French course."],
          ["*will*", "decisions at the moment of speaking", "*I'll lend* you mine!"],
          ["*will*", "offers and promises", "*I'll bring* you something. *I promise*."]
        ],
        note: "Arrangements are often in a calendar: *I'm seeing the dentist on Monday.* Intentions are in your head: *I'm going to eat healthier.*"
      },
      {
        title: "Questions about plans",
        head: ["Question", "Answer"],
        rows: [
          ["*What are you doing* on Saturday?", "*I'm meeting* some friends."],
          ["*Are you going to* travel this year?", "Yes, *I'm going to* visit Peru."],
          ["*Will you help* me?", "Of course *I will*!"]
        ]
      }
    ],
    watchOut: [
      ["I meet my aunt at the airport tomorrow.", "I'm meeting my aunt at the airport tomorrow."],
      ["I'm going to lend you my suitcase! (decision now)", "I'll lend you my suitcase!"],
      ["Tomorrow I will go to the dentist at 4. (arrangement)", "Tomorrow I'm going to the dentist at 4."],
      ["What will you do on Saturday? (arrangement)", "What are you doing on Saturday?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the best future form of the verb.",
      items: [
        "I [['m flying|am flying]] to Cancún on Friday at 7 a.m. My ticket is here. (fly)",
        "Next year I [['m going to learn|am going to learn]] to drive. (learn)",
        "\"The phone is ringing!\" \"I[['ll answer|will answer]] it.\" (answer)",
        "Don't worry, I [['ll help|will help]] you with your homework. I promise. (help)",
        "What [[are]] you doing on Saturday night?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Iker talks to his mom about his plans for next week. Listen.",
      title: "A busy week",
      script: [
        { who: "Mom", line: "Iker, are you free on Tuesday? Grandma wants to see you." },
        { who: "Iker", line: "Sorry, Mom. On Tuesday I'm having my English exam in the morning, and in the afternoon I'm playing in the soccer final." },
        { who: "Mom", line: "Oh! What about Wednesday?" },
        { who: "Iker", line: "On Wednesday I'm meeting my project group at the library. But I'm free on Thursday." },
        { who: "Mom", line: "Perfect. Are you going to do anything special for the vacation?" },
        { who: "Iker", line: "Yes! I'm going to get a part-time job. I want to save money for a trip." },
        { who: "Mom", line: "That's a good idea. Oh, I need to buy Grandma a present." },
        { who: "Iker", line: "I'll go with you on Thursday! I'll help you choose." }
      ],
      activities: [
        {
          type: "match", title: "Iker's week",
          prompt: "Match the day with Iker's arrangement.",
          pairs: [
            ["Tuesday morning", "English exam"],
            ["Tuesday afternoon", "soccer final"],
            ["Wednesday", "meeting his project group"],
            ["Thursday", "free — going shopping with Mom"]
          ]
        },
        {
          type: "sort", title: "Which future form?",
          prompt: "Sort Iker's sentences.",
          bins: ["Arrangement (present continuous)", "Intention (going to)", "Decision now (will)"],
          items: [
            { text: "I'm having my exam.", bin: 0 }, { text: "I'm meeting my group.", bin: 0 },
            { text: "I'm going to get a part-time job.", bin: 1 },
            { text: "I'll go with you.", bin: 2 }, { text: "I'll help you choose.", bin: 2 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three people's New Year posts on social media.",
      title: "New year, new plans!",
      text: [
        { author: "Daniela", body: "Big news: I'm starting a new job at a design studio on January 8th! I'm also going to take a pottery class. And this year I'm going to read one book a month." },
        { author: "Ricardo", body: "My girlfriend and I are getting married on March 15th in Oaxaca! 💍 We're going to have a small party with family. We aren't going to spend a lot of money." },
        { author: "Lin", body: "I'm going to learn to cook Mexican food this year. My friend Majo is teaching me every Sunday. If anyone has an easy recipe, send it to me — I'll try it!" }
      ],
      activities: [
        {
          type: "sort", title: "Arrangement or intention?",
          prompt: "Sort the plans.",
          bins: ["Fixed arrangement", "Intention"],
          items: [
            { text: "Daniela starts a new job on Jan 8th", bin: 0 }, { text: "Ricardo gets married on March 15th", bin: 0 }, { text: "Majo teaches Lin every Sunday", bin: 0 },
            { text: "Daniela reads one book a month", bin: 1 }, { text: "Ricardo has a small party", bin: 1 }, { text: "Lin learns to cook Mexican food", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Ricardo is getting married in Oaxaca.", a: true },
            { s: "Ricardo is going to spend a lot of money.", a: false },
            { s: "Lin is learning to cook on Sundays.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the three future forms, then write about your plans.",
      activities: [
        {
          type: "rewrite", title: "Respond with will",
          prompt: "Respond with a decision or offer using *I'll…*",
          items: [
            { q: "\"I'm thirsty.\" (get you some water)", a: ["I'll get you some water.", "I will get you some water."] },
            { q: "\"This box is heavy.\" (help you)", a: ["I'll help you.", "I will help you.", "I'll help you with it."] },
            { q: "\"It's cold in here.\" (close the window)", a: ["I'll close the window.", "I will close the window."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What are you doing on Saturday?" },
            { a: "I'm meeting my cousins at the mall." },
            { a: "I'm going to study French next year." },
            { a: "Don't worry, I'll call you later." },
            { a: "We're flying to Cancún on Friday." }
          ]
        },
        {
          type: "write", title: "My plans",
          prompt: "Write a message to a friend about your plans. Include two fixed arrangements (present continuous with days or times), two intentions (*going to*) and one offer or promise (*will*).",
          minWords: 60, maxWords: 110,
          model: "Hi Ale! My next weeks are busy. On Friday I'm having dinner with my parents for my dad's birthday, and on Saturday I'm playing in a volleyball tournament. During the vacation I'm going to visit my grandparents in Atlixco and I'm going to learn to bake bread. Are you free next Sunday? I'll cook lunch for you — I promise it will be delicious!",
          bank: ["On Friday I'm…", "On Saturday I'm…", "I'm going to…", "This vacation I'm going to…", "I'll…", "I promise…", "Are you free…?"],
          checklist: [
            "I used the present continuous for arrangements.",
            "I used *going to* for intentions.",
            "I used *will* for an offer or promise.",
            "I included days or times."
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
            "What are you doing for the vacation?",
            "I'm flying to Mérida on the twentieth.",
            "I'm going to visit the pyramids.",
            "I'm working until the twenty-fourth.",
            "Don't buy one. I'll lend you mine!",
            "I'll bring you something. I promise."
          ]
        },
        {
          type: "speak", title: "My next month",
          prompt: "Record yourself describing your plans for the next month: arrangements you have, things you intend to do, and one promise you make to yourself.",
          language: ["On … I'm…", "Next week I'm meeting…", "I'm going to…", "I'm not going to…", "I'll… I promise!"],
          seconds: 75,
          checklist: ["use the present continuous for arrangements?", "use *going to* for intentions?", "use *will* for a promise?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the present continuous for arrangements.", review: "Explanation; Quick check" },
    { can: "I can use *going to* for intentions.", review: "Explanation; Reading activity 1" },
    { can: "I can use *will* for decisions, offers and promises.", review: "Writing activity 1" },
    { can: "I can choose the right future form.", review: "Listening activity 2" },
    { can: "I can ask about people's plans.", review: "Explanation: questions about plans" },
    { can: "I can write about my plans.", review: "Writing activity 3" }
  ]
};
