window.UNIT = {
  slug: "my-plans-for-the-weekend",
  number: 4,
  title: "My Plans for the Weekend",
  level: "A2",
  minutes: 55,
  focus: ["present progressive for arrangements", "will for quick decisions and offers", "What are you doing on Saturday?", "I'll…, I won't…", "this weekend, on Sunday, tomorrow"],

  presentation: {
    scene: "📅🎬🎉🚲",
    situation: "It's Friday at BUAP. Two friends try to find a time to meet this weekend, but their calendars are very full!",
    warmup: {
      prompt: "What do you usually do on weekends? Choose everything that is true.",
      options: ["sleep late", "see friends", "visit family", "go to the movies", "do homework", "play sports", "work", "go shopping", "clean the house", "go to a party", "watch series", "go to the park"],
      response: "Great! In this unit you'll learn to talk about your plans and make quick decisions."
    },
    dialogueTitle: "Are you free this weekend?",
    dialogue: [
      { who: "Nico", line: "Hey, Tania! *What are you doing* this weekend?" },
      { who: "Tania", line: "On Saturday morning *I'm working* at the bakery. In the afternoon *I'm visiting* my grandparents in Xochimilco." },
      { who: "Nico", line: "And on Sunday? *We're playing* a basketball game at ten. Do you want to come?" },
      { who: "Tania", line: "Hmm, *I'm having* lunch with my cousins at two… but OK, *I'll come* to your game first!" },
      { who: "Nico", line: "Great! The game is at the sports center near Metro Copilco." },
      { who: "Tania", line: "I don't know where that is. *I'll check* it on my phone." },
      { who: "Nico", line: "Don't worry. *I'll send* you the location." },
      { who: "Tania", line: "Perfect. *I'll bring* some water for the team!" }
    ]
  },

  objectives: [
    "I can talk about fixed plans and arrangements with the present progressive.",
    "I can make quick decisions and offers with *will*.",
    "I can ask about someone's plans and invite them.",
    "I can accept or refuse an invitation politely."
  ],

  explanation: {
    vocabTitle: "Weekend plans",
    vocab: [
      { word: "go to a concert", icon: "🎤" }, { word: "have a party", icon: "🎉" }, { word: "visit my grandparents", icon: "👵" },
      { word: "go to the movies", icon: "🎬" }, { word: "play a game", icon: "🏀" }, { word: "go for a bike ride", icon: "🚲" },
      { word: "have lunch with friends", icon: "🍕" }, { word: "stay at home", icon: "🏠" }, { word: "go shopping", icon: "🛍️" },
      { word: "meet my friends", icon: "🧑‍🤝‍🧑" }, { word: "go camping", icon: "⛺" }, { word: "study for a test", icon: "📝" },
      { word: "this weekend", icon: "📅" }, { word: "tomorrow", icon: "➡️" }, { word: "next Saturday", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Present progressive for arrangements",
        head: ["Form", "Example"],
        rows: [
          ["*am / is / are* + *-ing* + time", "*I'm meeting* Ana on Saturday."],
          ["negative", "We *aren't going* to the party tomorrow."],
          ["question", "*What are* you *doing* this weekend?"],
          ["yes/no question", "*Is* she *coming* to the game? – Yes, she *is*."]
        ],
        note: "Use it for plans that are **fixed**: you have a time, a place, or a ticket. Always say **when**: *on Sunday, tonight, next week*."
      },
      {
        title: "Will for decisions and offers",
        head: ["Use", "Example"],
        rows: [
          ["a decision at the moment of speaking", "It's raining. *I'll take* an umbrella."],
          ["an offer", "Your bag looks heavy. *I'll help* you."],
          ["a promise", "*I'll call* you tonight. *I won't forget*."],
          ["form", "*I'll / you'll / she'll…* + verb · *won't* = will not"]
        ],
        note: "*Will* is the same for all subjects: *I will, she will, they will*. Never *I will to go* or *she wills*."
      },
      {
        title: "Invitations",
        head: ["Invite", "Accept", "Refuse"],
        rows: [
          ["*Do you want to* come to my party?", "*I'd love to!* / *Sure!*", "*Sorry, I can't. I'm visiting my aunt.*"],
          ["*Would you like to* go to the movies?", "*That sounds great!*", "*I'd love to, but I'm working.*"]
        ],
        note: "When you refuse, give a reason with the present progressive: *Sorry, I'm studying.*"
      }
    ],
    watchOut: [
      ["I meeting Ana tomorrow.", "I'm meeting Ana tomorrow."],
      ["The phone is ringing. I answer it.", "The phone is ringing. I'll answer it."],
      ["She will to come.", "She will come."],
      ["What do you do this weekend?", "What are you doing this weekend?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present progressive or *will*.",
      items: [
        "I have tickets! We [[are going|'re going]] to the concert on Friday.",
        "I'm thirsty. – Wait, I [[will get|'ll get]] you some water.",
        "[[Are]] you [[doing]] anything on Sunday?",
        "Sorry, I can't come. I [[am studying|'m studying]] for a test."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three phone calls. Friends are making plans for the weekend.",
      title: "Three phone calls",
      script: [
        { who: "Iris", line: "Hi, Joel! Are you doing anything on Saturday night? It's my birthday party." },
        { who: "Joel", line: "Oh, I'd love to come, but I'm working at my dad's restaurant until eleven." },
        { who: "Iris", line: "Oh, no! Come after work, then. The party finishes late." },
        { who: "Joel", line: "OK, I'll come at eleven thirty. I'll bring a cake!" },
        { who: "Mateo", line: "Hello, Lupita. We're going for a bike ride on Sunday morning. Do you want to come?" },
        { who: "Lupita", line: "Sorry, I can't. My family is going to Cuernavaca this weekend. We're leaving on Saturday at eight." },
        { who: "Mateo", line: "No problem. Next weekend, then." },
        { who: "Lupita", line: "Yes! I'll call you when I'm back." },
        { who: "Carla", line: "Hi, Grandpa. I'm calling about Sunday. Are we still having lunch together?" },
        { who: "Grandpa", line: "Yes, of course! Your grandmother is making mole." },
        { who: "Carla", line: "Mmm! I'll be there at two. I'll buy some bread on the way." }
      ],
      activities: [
        {
          type: "match", title: "What's the plan?",
          prompt: "Match each person with their plan.",
          pairs: [
            ["Iris", "is having a birthday party on Saturday night."],
            ["Joel", "is working until eleven on Saturday."],
            ["Mateo", "is going for a bike ride on Sunday."],
            ["Lupita", "is going to Cuernavaca with her family."],
            ["Carla", "is having lunch with her grandparents on Sunday."]
          ]
        },
        {
          type: "sort", title: "Plan or quick decision?",
          prompt: "Is it an arrangement (fixed before) or a decision at the moment of speaking?",
          bins: ["Arrangement (present progressive)", "Quick decision or offer (will)"],
          items: [
            { text: "I'm working at my dad's restaurant.", bin: 0 }, { text: "We're leaving on Saturday at eight.", bin: 0 },
            { text: "Your grandmother is making mole.", bin: 0 }, { text: "We're going for a bike ride.", bin: 0 },
            { text: "I'll bring a cake!", bin: 1 }, { text: "I'll call you when I'm back.", bin: 1 },
            { text: "I'll buy some bread on the way.", bin: 1 }, { text: "I'll come at eleven thirty.", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read Daniela's messages to her friends in a group chat.",
      title: "Weekend group chat",
      text: [
        { author: "Daniela · Friday 6:15 p.m.", body: "Hi, guys! What are you all doing this weekend? My parents are going to Puebla, so I'm having a movie night at my house on Saturday at seven. Who wants to come? 🍿" },
        { author: "Emilio · 6:20 p.m.", body: "I'd love to! I'm playing soccer on Saturday afternoon, but I'm free after six. I'll bring popcorn." },
        { author: "Renata · 6:24 p.m.", body: "Sorry, Dani, I can't. I'm taking my little sister to a birthday party. But I'm not doing anything on Sunday. Coffee on Sunday morning?" },
        { author: "Daniela · 6:30 p.m.", body: "Great, Emilio! Renata, sure, Sunday is perfect. I'll meet you at the café near the park at eleven." },
        { author: "Joaquín · 6:41 p.m.", body: "I'm in! But I don't have a ride. Can someone pick me up? 🙏" },
        { author: "Emilio · 6:43 p.m.", body: "No problem, Joaquín. My brother is driving me. We'll pick you up at six thirty." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the chat. Are the sentences true or false?",
          items: [
            { s: "Daniela's parents are going to Puebla this weekend.", a: true },
            { s: "The movie night is on Sunday.", a: false },
            { s: "Emilio is playing soccer on Saturday afternoon.", a: true },
            { s: "Renata is going to the movie night.", a: false },
            { s: "Daniela and Renata are meeting at a café on Sunday.", a: true },
            { s: "Joaquín's brother is driving him to Daniela's house.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with a full sentence.",
          items: [
            { q: "What is Emilio bringing?", a: ["He's bringing popcorn.", "He is bringing popcorn.", "He'll bring popcorn.", "He will bring popcorn.", "Emilio is bringing popcorn.", "Emilio will bring popcorn."] },
            { q: "Why can't Renata go on Saturday?", a: ["She's taking her little sister to a birthday party.", "She is taking her little sister to a birthday party.", "Because she's taking her little sister to a birthday party.", "Because she is taking her little sister to a birthday party."] },
            { q: "What time are Daniela and Renata meeting?", a: ["At eleven.", "They're meeting at eleven.", "They are meeting at eleven.", "At 11.", "At 11:00."] },
            { q: "Who is picking up Joaquín?", a: ["Emilio and his brother.", "Emilio and his brother are picking him up.", "Emilio's brother and Emilio."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the two forms, then write a message about your weekend.",
      activities: [
        {
          type: "gap", title: "Arrangement or decision?",
          prompt: "Complete with the present progressive or *will* + the verb in parentheses.",
          items: [
            "We [[are flying|'re flying]] to Cancún on Friday. We have the tickets! (fly)",
            "A: There's no milk. B: OK, I [[will buy|'ll buy]] some. (buy)",
            "My brother [[is getting|'s getting]] married next month. (get)",
            "A: I don't understand this exercise. B: I [[will help|'ll help]] you. (help)",
            "[[Are]] you [[coming]] to the meeting tomorrow? (come)",
            "Don't worry, I [[won't|will not]] tell anybody your secret. (not tell)"
          ]
        },
        {
          type: "tiles", title: "Invitations and answers",
          items: [
            { a: "Do you want to come to my party?" },
            { a: "I'd love to, but I'm working." },
            { a: "What are you doing on Sunday?" },
            { a: "I'll send you the address." },
            { a: "We aren't going camping this weekend." }
          ]
        },
        {
          type: "write", title: "My weekend plans",
          prompt: "Write a message to a friend. Tell them three things you're doing this weekend (with days and times), invite them to one of them, and offer to do something with *I'll…*",
          minWords: 60, maxWords: 90,
          model: "Hi, Leo! This weekend is busy. On Saturday morning I'm helping my mom at the market. In the afternoon I'm playing volleyball with my team at the sports center. On Sunday I'm having lunch with my grandparents. On Saturday night I'm not doing anything. Do you want to watch a movie at my house? I'll make pizza! I'll send you a message tomorrow.",
          bank: ["This weekend", "On Saturday morning I'm", "In the afternoon", "On Sunday", "Do you want to", "I'll make / bring / send", "I'm not doing anything"],
          checklist: [
            "I wrote **three** plans with days or times.",
            "I used the present progressive for my arrangements.",
            "I wrote one invitation.",
            "I used *I'll…* for an offer or a decision."
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
            "What are you doing on Saturday?",
            "I'm meeting my cousins at the mall.",
            "We're having a barbecue on Sunday.",
            "Are you doing anything tonight?",
            "I'll bring the drinks.",
            "I won't be late, I promise."
          ]
        },
        {
          type: "speak", title: "Voice message: my weekend",
          prompt: "Record a voice message (about one minute) to a friend. Tell them your plans for the weekend and invite them to one activity.",
          language: ["Hi…! It's me.", "This weekend I'm…", "On Saturday…", "On Sunday…", "Do you want to come?", "I'll…", "Call me back!"],
          seconds: 75,
          checklist: ["describe at least three plans?", "say days and times?", "invite your friend?", "use *I'll* at least once?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about my weekend arrangements with the present progressive.", review: "Explanation: present progressive for arrangements" },
    { can: "I can use *will* for quick decisions, offers and promises.", review: "Explanation: will; Writing activity 1" },
    { can: "I can tell the difference between an arrangement and a quick decision.", review: "Listening activity 2" },
    { can: "I can invite someone and accept or refuse politely.", review: "Explanation: invitations; Speaking activity 1 (listen and repeat)" },
    { can: "I can understand people making plans in a conversation or chat.", review: "Listening and Reading" },
    { can: "I can describe my plans in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
