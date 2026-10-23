window.UNIT = {
  slug: "whats-new",
  number: 15,
  title: "What's New?",
  level: "A2",
  minutes: 50,
  speakers: { "Iván": "m", "Daniela": "f", "Newsreader": "f", "Mom": "f", A: "m", B: "f" },
  focus: ["present perfect for news and changes", "She's had a baby. They've opened a new mall.", "present perfect for news, past simple for details", "life events: get engaged, change jobs, move", "Guess what! / Congratulations! / That's great news!"],

  presentation: {
    scene: "📰💍👶🏙️",
    situation: "Iván has lived in Canada for a year. He's back in Puebla and meets his friend Daniela, who tells him all the news.",
    warmup: {
      prompt: "What news do friends usually share? Choose all.",
      options: ["got a new job", "moved house", "had a baby", "got engaged", "started university", "bought a car", "adopted a pet", "broken up", "won a prize", "learned to drive"],
      response: "So much news! In this unit you'll learn to give news and react to it."
    },
    dialogueTitle: "Back in town",
    dialogue: [
      { who: "Daniela", line: "Iván! Welcome back! So much *has changed* since you left." },
      { who: "Iván", line: "Really? Tell me everything. *What's new*?" },
      { who: "Daniela", line: "*Guess what!* Paola and Luis *have got* engaged!" },
      { who: "Iván", line: "No way! When *did* that *happen*?" },
      { who: "Daniela", line: "Last month. He *asked* her at the top of the pyramid in Cholula. And Beto *has changed* jobs. He's a chef now!" },
      { who: "Iván", line: "*That's great news!* And the city?" },
      { who: "Daniela", line: "They*'ve opened* a new cable car downtown, and the old cinema *has closed*." },
      { who: "Iván", line: "Oh no, I loved that cinema. And you? *Have you done* anything new?" },
      { who: "Daniela", line: "Yes! *I've started* a business. I *opened* a small bakery in May!" }
    ]
  },

  objectives: [
    "I can give news with the present perfect.",
    "I can give details about news with the past simple.",
    "I can talk about life events and changes.",
    "I can react to good and bad news."
  ],

  explanation: {
    vocabTitle: "Life events and changes",
    vocab: [
      { word: "get engaged", icon: "💍" }, { word: "get married", icon: "💒" }, { word: "have a baby", icon: "👶" },
      { word: "break up", icon: "💔" }, { word: "change jobs", icon: "🔄" }, { word: "get promoted", icon: "📈" },
      { word: "start a business", icon: "🏪" }, { word: "move house", icon: "🚚" }, { word: "retire", icon: "🏖️" },
      { word: "pass an exam", icon: "✅" }, { word: "fail an exam", icon: "❌" }, { word: "open / close", icon: "🏬" },
      { word: "Guess what!", icon: "😃" }, { word: "Congratulations!", icon: "🎉" }, { word: "I'm sorry to hear that.", icon: "😔" }
    ],
    grammar: [
      {
        title: "News and details",
        head: ["News (present perfect, no time)", "Details (past simple, specific time)"],
        rows: [
          ["Paola and Luis *have got* engaged!", "He *asked* her *last month*."],
          ["They*'ve opened* a cable car.", "It *opened in* September."],
          ["Beto *has changed* jobs.", "He *started* at the restaurant *two weeks ago*."],
          ["*Have* you *heard* the news?", "*When did* it *happen*?"]
        ],
        note: "First we give the news (present perfect). When we say *when* or give details, we use the past simple."
      },
      {
        title: "Reacting to news",
        head: ["Good news", "Bad news", "Surprising news"],
        rows: [
          ["*Congratulations!*", "*Oh no! I'm sorry to hear that.*", "*No way! / Really?*"],
          ["*That's great news!*", "*That's terrible.*", "*I can't believe it!*"],
          ["*Good for you!*", "*Poor thing!*", "*Are you serious?*"]
        ]
      }
    ],
    watchOut: [
      ["They've got married last year.", "They got married last year."],
      ["Did you hear the news? Ana has a baby!", "Have you heard the news? Ana has had a baby!"],
      ["When has it happened?", "When did it happen?"],
      ["Congratulation!", "Congratulations!"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the present perfect or the past simple.",
      items: [
        "Guess what! My sister [['s had|has had]] a baby! (have)",
        "She [[had]] him on Tuesday at 3 a.m. (have)",
        "They [['ve opened|have opened]] a new museum downtown. (open)",
        "It [[opened]] in August. (open)",
        "[[Have]] you heard the news?",
        "When [[did]] they get engaged?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the local news on the radio.",
      title: "Puebla news update",
      script: [
        { who: "Newsreader", line: "Good evening. Here is the local news. The city has opened a new bike lane on Juárez Avenue. Workers finished it this morning, and hundreds of cyclists have already used it." },
        { who: "Newsreader", line: "A student from BUAP has won an international science prize. Fernanda Ruiz, 21, designed a cheap water filter. She received the prize in Geneva yesterday." },
        { who: "Newsreader", line: "And some sad news for movie fans: the old Cinema Variedades has closed after sixty years. The last film was on Sunday night." },
        { who: "Newsreader", line: "Finally, the weather. It has rained all day, and we expect more rain tomorrow. Good night." }
      ],
      activities: [
        {
          type: "match", title: "News and details",
          prompt: "Match the news with the detail.",
          pairs: [
            ["The city has opened a bike lane.", "Workers finished it this morning."],
            ["A student has won a science prize.", "She received it in Geneva yesterday."],
            ["The old cinema has closed.", "The last film was on Sunday night."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Nobody has used the bike lane yet.", a: false },
            { s: "Fernanda designed a water filter.", a: true },
            { s: "The cinema was open for thirty years.", a: false },
            { s: "It has rained all day.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the messages in a class reunion group chat.",
      title: "Class of 2018 · reunion chat",
      text: [
        { author: "Mónica", body: "Hi everyone! It's been seven years! What's new? I'll start: I've moved to Querétaro and I've become a primary school teacher. I started in January and I love it!" },
        { author: "Kevin", body: "Great to hear from you all! I've started my own video game company with two friends. We launched our first game last week! Also, I've adopted a dog. 🐕" },
        { author: "Brenda", body: "Congratulations, Kevin! My news: I've had a baby girl! Her name is Luz and she was born in March. I haven't slept much since then! 😂" },
        { author: "Joel", body: "Wow! Congratulations, Brenda! I haven't done anything exciting… I still live in the same house! But I've learned to cook. Come and try my lasagna!" }
      ],
      activities: [
        {
          type: "sort", title: "Whose news?",
          prompt: "Sort the news.",
          bins: ["Mónica", "Kevin", "Brenda", "Joel"],
          items: [
            { text: "moved to Querétaro", bin: 0 }, { text: "became a teacher", bin: 0 },
            { text: "started a company", bin: 1 }, { text: "adopted a dog", bin: 1 },
            { text: "had a baby", bin: 2 }, { text: "hasn't slept much", bin: 2 },
            { text: "learned to cook", bin: 3 }, { text: "lives in the same house", bin: 3 }
          ]
        },
        {
          type: "rewrite", title: "When did it happen?",
          prompt: "Answer with information from the chat.",
          items: [
            { q: "When did Mónica start her job?", a: ["In January.", "in January", "She started in January."] },
            { q: "When did Kevin launch his game?", a: ["Last week.", "last week", "He launched it last week."] },
            { q: "When was Luz born?", a: ["In March.", "in March", "She was born in March."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice news language, then write your own news message.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Have you heard the news?" },
            { a: "My brother has changed jobs." },
            { a: "They opened the new mall last month." },
            { a: "When did they get engaged?" },
            { a: "That's great news, congratulations!" }
          ]
        },
        {
          type: "match", title: "How do you react?",
          prompt: "Match the news with the best reaction.",
          pairs: [
            ["I've passed my driving test!", "Congratulations! Good for you!"],
            ["My grandpa has been in the hospital.", "Oh no, I'm sorry to hear that."],
            ["I've won a trip to Japan!", "No way! Are you serious?"],
            ["Our favorite café has closed.", "That's terrible!"]
          ]
        },
        {
          type: "write", title: "My news",
          prompt: "Write a message to a group chat for a reunion with old classmates. Share at least three pieces of news about your life (present perfect) and give details (past simple). React to one classmate's news from the reading.",
          minWords: 60, maxWords: 110,
          model: "Hi everyone! So nice to read your news. Congratulations, Brenda! Luz is a beautiful name. My news: I've finished university! I graduated in June. I've also got my first job, at a design company in Puebla. I started two months ago. And I've moved into an apartment with my cousin — we moved in August. Life has changed a lot!",
          bank: ["Congratulations, …!", "My news: I've…", "I … in June / last month / two weeks ago.", "I've also…", "Life has changed a lot!", "What about you?"],
          checklist: [
            "I gave news with the **present perfect**.",
            "I gave details with the **past simple** and a time.",
            "I reacted to someone's news.",
            "I used at least three life-event phrases."
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
            "Guess what! They've got engaged!",
            "When did that happen?",
            "He's changed jobs. He's a chef now.",
            "They've opened a new museum downtown.",
            "That's great news! Congratulations!",
            "Oh no, I'm sorry to hear that."
          ]
        },
        {
          type: "speak", title: "News from my life",
          prompt: "Imagine you're talking to a friend you haven't seen for a year. Record yourself giving three pieces of news about you, your family or your city, with details.",
          language: ["Guess what!", "I've… / My sister has…", "It happened in…", "They've opened / closed…", "Life has changed a lot.", "What's new with you?"],
          seconds: 75,
          checklist: ["give news with the present perfect?", "add details with the past simple?", "use life-event vocabulary?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can give news with the present perfect.", review: "Explanation: news and details" },
    { can: "I can give details with the past simple.", review: "Quick check; Reading activity 2" },
    { can: "I can talk about life events.", review: "Explanation: vocabulary" },
    { can: "I can react to good, bad and surprising news.", review: "Explanation: reacting to news; Writing activity 2" },
    { can: "I can understand short news reports.", review: "Listening: Puebla news update" },
    { can: "I can write a message with my news.", review: "Writing activity 3" }
  ]
};
