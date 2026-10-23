window.UNIT = {
  slug: "a-typical-week",
  number: 3,
  title: "A Typical Week",
  level: "A2",
  minutes: 50,
  speakers: { "Andrés": "m", "Paulina": "f", "Reporter": "f", "Gabriel": "m", A: "f", B: "m" },
  focus: ["present simple vs. present continuous", "routines vs. temporary situations", "usually / this week / at the moment", "state verbs: like, want, know, need", "How's your week going?"],

  presentation: {
    scene: "🗓️💼📚🔄",
    situation: "Andrés and Paulina are old friends. They meet at the supermarket and talk about their lives.",
    warmup: {
      prompt: "Is your week normal or different? Choose what is true for you this week.",
      options: ["I'm working a lot", "I'm studying for exams", "I'm on vacation", "I'm sleeping badly", "I'm exercising more", "I'm eating healthy food", "I'm reading a good book", "I'm watching a series", "I'm helping my family", "It's a normal week"],
      response: "Thanks! In this unit you'll learn to talk about your usual routine and what is different now."
    },
    dialogueTitle: "A busy month",
    dialogue: [
      { who: "Paulina", line: "Andrés! How are you? *Are you still working* at the bank?" },
      { who: "Andrés", line: "Yes, I *usually work* in the main office downtown, but *this month I'm working* in Cholula." },
      { who: "Paulina", line: "Oh, is that better or worse?" },
      { who: "Andrés", line: "Worse! *I normally walk* to work, but *at the moment I'm driving* forty minutes every day. And you?" },
      { who: "Paulina", line: "*I'm studying* for my final exams, so *I'm not going out* much." },
      { who: "Andrés", line: "*Do you still play* volleyball on Saturdays?" },
      { who: "Paulina", line: "*I usually do*, but *I'm not playing* this month. *I need* to study!" },
      { who: "Andrés", line: "Good luck! *I know* you can do it." }
    ]
  },

  objectives: [
    "I can describe my usual routine with the present simple.",
    "I can describe temporary situations with the present continuous.",
    "I can choose the right tense with time expressions.",
    "I can use state verbs like *like, want, know, need* correctly."
  ],

  explanation: {
    vocabTitle: "Routines and changes",
    vocab: [
      { word: "commute", icon: "🚗" }, { word: "work from home", icon: "🏠" }, { word: "do overtime", icon: "⏰" },
      { word: "take a course", icon: "📖" }, { word: "study for exams", icon: "📚" }, { word: "go on a diet", icon: "🥗" },
      { word: "train for a race", icon: "🏃" }, { word: "look after", icon: "🤲" }, { word: "stay with", icon: "🏡" },
      { word: "usually", icon: "🔁" }, { word: "normally", icon: "✔️" }, { word: "at the moment", icon: "⏱️" },
      { word: "this week / month", icon: "📅" }, { word: "these days", icon: "🗓️" }, { word: "still", icon: "➡️" }
    ],
    grammar: [
      {
        title: "Present simple or present continuous?",
        head: ["Present simple", "Present continuous"],
        rows: [
          ["routines, habits, things that are always true", "actions now and temporary situations"],
          ["I *usually work* downtown.", "*This month I'm working* in Cholula."],
          ["She *plays* volleyball on Saturdays.", "She *isn't playing* this month."],
          ["*every day, usually, normally, on Mondays*", "*now, at the moment, this week, these days*"]
        ]
      },
      {
        title: "State verbs",
        intro: "Some verbs describe states, not actions. We don't usually use them in the continuous form.",
        head: ["Type", "Verbs", "Example"],
        rows: [
          ["feelings", "*like, love, hate, want, need, prefer*", "I *need* to study. (not *I'm needing*)"],
          ["thinking", "*know, think, believe, understand, remember*", "I *know* you can do it."],
          ["possession", "*have (= possess), own, belong*", "She *has* a new car."]
        ],
        note: "*Have* can be an action: *I'm having lunch / a shower / a great time.* That's OK in the continuous."
      }
    ],
    watchOut: [
      ["I'm usually working downtown.", "I usually work downtown."],
      ["This week I work in Cholula.", "This week I'm working in Cholula."],
      ["I'm needing a break.", "I need a break."],
      ["Are you knowing the answer?", "Do you know the answer?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the verb in the present simple or present continuous.",
      items: [
        "I usually [[walk]] to work, but this week I [['m driving|am driving]]. (walk / drive)",
        "Paulina [['s studying|is studying]] for her exams at the moment. (study)",
        "We [[don't go|do not go]] out much on weekdays. (not go)",
        "I [[need]] a holiday! (need)",
        "Look! It [['s raining|is raining]] again. (rain)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio reporter asks Gabriel, a chef, about his normal week and this special week. Listen.",
      title: "A chef's week",
      script: [
        { who: "Reporter", line: "Gabriel, you're a chef. What's a normal week like for you?" },
        { who: "Gabriel", line: "Normally I work from Tuesday to Sunday. I start at two in the afternoon and finish at midnight. Monday is my day off." },
        { who: "Reporter", line: "And this week?" },
        { who: "Gabriel", line: "This week is crazy! It's the city food festival, so I'm cooking for the festival every morning, and I'm working in the restaurant every night." },
        { who: "Reporter", line: "Are you sleeping at all?" },
        { who: "Gabriel", line: "Not much! I'm sleeping about five hours a night. And I'm not having my day off this week." },
        { who: "Reporter", line: "Do you enjoy it?" },
        { who: "Gabriel", line: "Yes, I love it. I meet a lot of people, and I'm learning new recipes from other chefs." }
      ],
      activities: [
        {
          type: "sort", title: "Normal week or this week?",
          prompt: "Sort the sentences.",
          bins: ["A normal week", "This week"],
          items: [
            { text: "works Tuesday to Sunday", bin: 0 }, { text: "starts at 2 p.m.", bin: 0 }, { text: "has Monday off", bin: 0 },
            { text: "cooks for the festival every morning", bin: 1 }, { text: "sleeps about five hours", bin: 1 }, { text: "isn't having a day off", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Gabriel normally finishes work at midnight.", a: true },
            { s: "This week he's only working in the restaurant.", a: false },
            { s: "He's sleeping eight hours a night.", a: false },
            { s: "He's learning new recipes this week.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages in a family group chat.",
      title: "Family chat: How's everyone?",
      text: [
        { author: "Mom", body: "Hi everyone! How are you all? Dad and I are fine. Dad is painting the kitchen this week, so we're eating in the garden! 😄" },
        { author: "Diego", body: "Hi Mom! I'm OK. I normally go to the gym after work, but this week I'm training for the Puebla half marathon, so I'm running in the park every morning at six." },
        { author: "Valeria", body: "I'm working from home this month because the office is closed. I love it! I don't commute, so I have more time. But I miss my colleagues." },
        { author: "Grandma", body: "I'm staying with your aunt in Oaxaca this week. I usually don't use this phone a lot, but your cousin is teaching me. Love you all!" }
      ],
      activities: [
        {
          type: "match", title: "What's different this week?",
          prompt: "Match the person with the temporary situation.",
          pairs: [
            ["Dad", "is painting the kitchen."],
            ["Diego", "is training for a half marathon."],
            ["Valeria", "is working from home."],
            ["Grandma", "is staying with her daughter in Oaxaca."]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers: *Yes, he does / No, she isn't…*",
          items: [
            { q: "Does Diego normally go to the gym after work?", a: ["Yes, he does."] },
            { q: "Is Diego running in the evening this week?", a: ["No, he isn't.", "No, he is not.", "No, he's not."] },
            { q: "Does Valeria commute this month?", a: ["No, she doesn't.", "No, she does not."] },
            { q: "Is Grandma learning to use her phone?", a: ["Yes, she is."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the two tenses, then write an update for your family or friends.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I usually get up at seven." },
            { a: "This week I'm working from home." },
            { a: "She isn't going to the gym these days." },
            { a: "Do you still play volleyball?" },
            { a: "I don't understand this exercise." }
          ]
        },
        {
          type: "sort", title: "Which tense?",
          prompt: "Which tense do you use with these words?",
          bins: ["Present simple", "Present continuous"],
          items: [
            { text: "every Monday", bin: 0 }, { text: "usually", bin: 0 }, { text: "never", bin: 0 }, { text: "twice a week", bin: 0 },
            { text: "right now", bin: 1 }, { text: "this month", bin: 1 }, { text: "at the moment", bin: 1 }, { text: "these days", bin: 1 }
          ]
        },
        {
          type: "write", title: "Life update",
          prompt: "Write a message to a friend you haven't seen for a long time. Describe your normal routine and what is different these days. Use both tenses and at least two state verbs.",
          minWords: 50, maxWords: 100,
          model: "Hi Majo! How are you? I'm fine. I usually work in a store downtown from Monday to Friday, and on weekends I visit my grandparents. But this month things are different. I'm taking an English course in the evenings, so I'm not seeing my friends much. I'm also learning to drive! I love it, but I need more practice. What about you? Are you still living in Mérida?",
          bank: ["I usually…", "On weekends I normally…", "But this month…", "At the moment I'm…", "I'm not … much.", "I love / need / want…", "Are you still…?"],
          checklist: [
            "I described my normal routine (present simple).",
            "I described something temporary (present continuous).",
            "I used time expressions: *usually, this month, at the moment*.",
            "I didn't use state verbs in the continuous."
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
            "I usually work in the main office.",
            "This month I'm working in Cholula.",
            "I'm studying for my final exams.",
            "Do you still play volleyball on Saturdays?",
            "I'm not going out much these days.",
            "I need a break!"
          ]
        },
        {
          type: "speak", title: "My week: normal vs. now",
          prompt: "Record yourself comparing a normal week in your life with this week. Talk about work or studies, free time and sleep. Use both tenses.",
          language: ["Normally I…", "I usually… on…", "But this week I'm…", "At the moment I'm not…", "These days I…", "I need / want…"],
          seconds: 90,
          checklist: ["describe your normal routine?", "describe something temporary?", "use time expressions?", "speak for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe my routine with the present simple.", review: "Explanation: present simple or continuous?" },
    { can: "I can describe temporary situations with the present continuous.", review: "Presentation; Reading" },
    { can: "I can choose the tense with time expressions.", review: "Writing activity 2; Quick check" },
    { can: "I can use state verbs correctly.", review: "Explanation: state verbs" },
    { can: "I can understand people comparing normal life and now.", review: "Listening: a chef's week" },
    { can: "I can write a life update.", review: "Writing activity 3" }
  ]
};
