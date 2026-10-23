window.UNIT = {
  slug: "learning-languages",
  number: 33,
  title: "Learning Languages",
  level: "A2",
  minutes: 50,
  speakers: { "Teacher": "f", "Kevin": "m", "Host": "m", "Yuki": "f", "Andrés": "m", A: "f", B: "m" },
  focus: ["-ing as subject: Learning a language is fun.", "It's important / easy / difficult to + verb", "The best way to learn is…", "language learning strategies", "advice: Try + -ing / Why don't you…?"],

  presentation: {
    scene: "🗣️📚🎧🌍",
    situation: "Kevin feels frustrated with his English. He talks to his teacher after class.",
    warmup: {
      prompt: "How do you practice English? Choose all.",
      options: ["watch series", "listen to music", "use apps", "read books", "talk to friends", "write a diary", "play video games", "follow social media in English", "use flashcards", "travel"],
      response: "Great strategies! In this unit you'll learn to talk about learning languages and give advice."
    },
    dialogueTitle: "After class",
    dialogue: [
      { who: "Kevin", line: "Teacher, I study grammar every day, but *speaking is* still very difficult for me." },
      { who: "Teacher", line: "That's normal, Kevin. *It's important to practice* speaking, not only grammar." },
      { who: "Kevin", line: "But I'm shy. *It's hard to talk* to people in English." },
      { who: "Teacher", line: "*Try recording* yourself. *Listening to* your own voice helps a lot." },
      { who: "Kevin", line: "OK. And vocabulary? I forget new words quickly." },
      { who: "Teacher", line: "*The best way to remember* words *is using* them in sentences. *Why don't you* write five sentences every day?" },
      { who: "Kevin", line: "Five sentences… *That's easy to do*!" },
      { who: "Teacher", line: "Exactly. And *watching* series with English subtitles *is* fun and useful too." }
    ]
  },

  objectives: [
    "I can use *-ing* forms as the subject of a sentence.",
    "I can use *It's + adjective + to + verb*.",
    "I can talk about language learning strategies.",
    "I can give advice about learning English."
  ],

  explanation: {
    vocabTitle: "Learning languages",
    vocab: [
      { word: "vocabulary", icon: "📖" }, { word: "grammar", icon: "📐" }, { word: "pronunciation", icon: "👄" },
      { word: "accent", icon: "🗣️" }, { word: "fluent", icon: "🌊" }, { word: "native speaker", icon: "🌎" },
      { word: "subtitles", icon: "🎬" }, { word: "flashcards", icon: "🃏" }, { word: "make mistakes", icon: "❌" },
      { word: "improve", icon: "📈" }, { word: "practice", icon: "🔁" }, { word: "memorize", icon: "🧠" },
      { word: "translate", icon: "🔄" }, { word: "language exchange", icon: "🤝" }, { word: "confident", icon: "😎" }
    ],
    grammar: [
      {
        title: "-ing form as the subject",
        head: ["Structure", "Example"],
        rows: [
          ["*-ing* + verb (singular)", "*Learning* a language *is* fun."],
          ["", "*Watching* series *helps* with listening."],
          ["", "*Speaking* in public *makes* me nervous."],
          ["negative", "*Not practicing* every day *is* a problem."]
        ],
        note: "The *-ing* subject takes a singular verb: *Reading books is useful.*"
      },
      {
        title: "It's + adjective + to + verb",
        head: ["Structure", "Example"],
        rows: [
          ["*It's important to…*", "*It's important to practice* every day."],
          ["*It's easy / hard to…*", "*It's hard to understand* native speakers."],
          ["*It's a good idea to…*", "*It's a good idea to use* flashcards."],
          ["*The best way to … is…*", "*The best way to learn* is *practicing*."]
        ]
      },
      {
        title: "Giving advice",
        head: ["Structure", "Example"],
        rows: [
          ["*Try* + -ing", "*Try recording* yourself."],
          ["*Why don't you* + verb?", "*Why don't you* join a language exchange?"],
          ["*You should* + verb", "*You should* read more."],
          ["*Don't be afraid of* + -ing / noun", "*Don't be afraid of making* mistakes."]
        ]
      }
    ],
    watchOut: [
      ["Learn English is difficult.", "Learning English is difficult."],
      ["Watching series help me.", "Watching series helps me."],
      ["Is important to practice.", "It's important to practice."],
      ["Try to recording yourself.", "Try recording yourself."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the verb.",
      items: [
        "[[Learning]] new words is easier with flashcards. (learn)",
        "It's important [[to practice]] every day. (practice)",
        "[[Watching]] movies helps me with listening. (watch)",
        "Try [[recording]] yourself when you speak. (record)",
        "Don't be afraid of [[making]] mistakes. (make)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A podcast interviews two people who learned a language as adults. Listen.",
      title: "Podcast: I did it!",
      script: [
        { who: "Host", line: "Yuki, you're Japanese and you speak perfect Spanish. How did you learn?" },
        { who: "Yuki", line: "Thank you! At first, it was really hard to understand people. Mexicans speak fast! But living with a Mexican family helped a lot. Speaking every day is the best way to learn." },
        { who: "Host", line: "Did you use apps?" },
        { who: "Yuki", line: "Yes, but only for vocabulary. Listening to Mexican music was more useful for me. I learned a lot of words from songs." },
        { who: "Host", line: "Andrés, you learned English at forty-five!" },
        { who: "Andrés", line: "Yes! It was difficult to start, because I was embarrassed about my accent. But my teacher said it's normal to have an accent." },
        { who: "Host", line: "What's your advice?" },
        { who: "Andrés", line: "Don't be afraid of making mistakes. And try watching your favorite movies in English — you already know the story, so it's easier to understand." }
      ],
      activities: [
        {
          type: "sort", title: "Yuki or Andrés?",
          prompt: "Sort the information.",
          bins: ["Yuki", "Andrés"],
          items: [
            { text: "lived with a Mexican family", bin: 0 }, { text: "learned words from songs", bin: 0 }, { text: "used apps for vocabulary", bin: 0 },
            { text: "started at 45", bin: 1 }, { text: "was embarrassed about his accent", bin: 1 }, { text: "recommends watching favorite movies", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Yuki found it easy to understand Mexicans at first.", a: false },
            { s: "Yuki thinks speaking every day is the best way.", a: true },
            { s: "Andrés's teacher said accents are a problem.", a: false },
            { s: "Andrés says don't be afraid of mistakes.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from the CAA's newsletter.",
      title: "Seven habits of successful language learners",
      text: [
        { author: "", body: "1. They practice a little every day. Studying fifteen minutes a day is better than studying three hours once a week. 2. They make mistakes — and learn from them. 3. They listen a lot. Listening to podcasts on the bus is an easy way to practice." },
        { author: "", body: "4. They use the language in real life: ordering food, writing messages, talking to tourists. 5. They learn phrases, not just single words. 6. They set goals, like 'I want to understand a movie without subtitles'. 7. They have fun! Learning with songs, games and series keeps you motivated." }
      ],
      activities: [
        {
          type: "match", title: "Match the habit",
          prompt: "Match the habit with the example.",
          pairs: [
            ["practice a little every day", "15 minutes a day"],
            ["listen a lot", "podcasts on the bus"],
            ["use the language in real life", "talking to tourists"],
            ["set goals", "understand a movie without subtitles"],
            ["have fun", "songs, games and series"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Studying three hours once a week is the best option.", a: false },
            { s: "Successful learners avoid making mistakes.", a: false },
            { s: "Learning phrases is better than single words.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the new structures, then write advice for a new English student.",
      activities: [
        {
          type: "rewrite", title: "Start with -ing",
          prompt: "Rewrite the sentence starting with an *-ing* form.",
          items: [
            { q: "It's fun to learn languages.", a: ["Learning languages is fun."] },
            { q: "It's difficult to understand native speakers.", a: ["Understanding native speakers is difficult."] },
            { q: "It's useful to read in English.", a: ["Reading in English is useful."] },
            { q: "It's important to speak every day.", a: ["Speaking every day is important."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Learning a language is a long process." },
            { a: "It's important to practice every day." },
            { a: "The best way to learn is speaking." },
            { a: "Why don't you join a language exchange?" },
            { a: "Don't be afraid of making mistakes." }
          ]
        },
        {
          type: "write", title: "Advice for a new student",
          prompt: "A new student at the CAA asks you: \"How can I improve my English?\" Write a message with your experience and at least four pieces of advice. Use *-ing* subjects, *It's … to…* and *Try + -ing*.",
          minWords: 60, maxWords: 110,
          model: "Hi! Learning English isn't easy, but it's possible! For me, speaking was the hardest part. It's important to practice a little every day — fifteen minutes is enough. Try watching series with English subtitles; it really helps with listening. Writing a short diary is also a good idea for grammar. And don't be afraid of making mistakes: everybody makes them. Good luck!",
          bank: ["Learning English is…", "… was the hardest part for me.", "It's important to…", "Try + -ing…", "… is a good idea.", "Why don't you…?", "Don't be afraid of…"],
          checklist: [
            "I used at least two *-ing* subjects.",
            "I used *It's + adjective + to + verb*.",
            "I used *Try + -ing* or *Why don't you…?*",
            "I gave at least four pieces of advice."
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
            "Speaking is still difficult for me.",
            "It's important to practice every day.",
            "Try recording yourself.",
            "Learning a language is fun.",
            "The best way to learn is speaking.",
            "Don't be afraid of making mistakes."
          ]
        },
        {
          type: "speak", title: "My English journey",
          prompt: "Record yourself talking about how you learn English: what's easy and what's difficult for you, what you do to practice, and your best tip for other students.",
          language: ["For me, … is easy / difficult.", "… is the hardest part.", "I practice by…", "It's important to…", "My best tip is: try…"],
          seconds: 75,
          checklist: ["use *-ing* subjects?", "use *It's … to…*?", "give a tip?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *-ing* forms as subjects.", review: "Explanation; Writing activity 1" },
    { can: "I can use *It's + adjective + to + verb*.", review: "Explanation; Quick check" },
    { can: "I can talk about learning strategies.", review: "Reading: seven habits" },
    { can: "I can give advice about learning English.", review: "Explanation: giving advice" },
    { can: "I can understand people describing how they learned.", review: "Listening: I did it!" },
    { can: "I can write advice for a new student.", review: "Writing activity 3" }
  ]
};
