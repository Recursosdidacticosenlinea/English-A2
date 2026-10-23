window.UNIT = {
  slug: "stress-free",
  number: 25,
  title: "Stress-Free",
  level: "A2",
  minutes: 50,
  speakers: { "Counselor": "f", "Pablo": "m", "Host": "m", "Lin": "f", "Omar": "m", A: "f", B: "m" },
  focus: ["zero conditional: If / When I feel stressed, I…", "feelings: stressed, nervous, anxious, calm", "relaxing activities", "imperatives for advice", "What do you do when…?"],

  presentation: {
    scene: "😫🧘‍♂️🎧🌿",
    situation: "It's exam week. Pablo feels very stressed. He visits the university counselor.",
    warmup: {
      prompt: "What makes you feel stressed? Choose all.",
      options: ["exams", "traffic", "homework", "money", "work", "family problems", "speaking in public", "too much noise", "deadlines", "bad news"],
      response: "Everybody feels stressed sometimes. In this unit you'll learn to talk about stress and ways to feel calm."
    },
    dialogueTitle: "Exam week",
    dialogue: [
      { who: "Counselor", line: "Hi, Pablo. How are you feeling this week?" },
      { who: "Pablo", line: "Terrible. *When I have exams, I can't sleep*. And *if I don't sleep, I feel* anxious all day." },
      { who: "Counselor", line: "That's very common. *What do you do when you feel* stressed?" },
      { who: "Pablo", line: "*If I'm stressed, I eat* a lot of junk food and play video games." },
      { who: "Counselor", line: "Hmm. *When you play games late, your brain doesn't* rest. Try this: *when you feel nervous, breathe* slowly for one minute." },
      { who: "Pablo", line: "Does that really work?" },
      { who: "Counselor", line: "Yes. *If you breathe slowly, your heart slows* down. Also, take short breaks. *If you study for two hours without a break, you don't* remember much." },
      { who: "Pablo", line: "OK. Breathe, take breaks, and turn off the console. I'll try!" }
    ]
  },

  objectives: [
    "I can use the zero conditional for general truths and habits.",
    "I can talk about stress and feelings.",
    "I can describe what I do when I feel stressed.",
    "I can give advice with imperatives."
  ],

  explanation: {
    vocabTitle: "Stress and relaxation",
    vocab: [
      { word: "stressed", icon: "😫" }, { word: "nervous", icon: "😬" }, { word: "anxious", icon: "😟" },
      { word: "worried", icon: "😥" }, { word: "calm", icon: "😌" }, { word: "relaxed", icon: "🛀" },
      { word: "breathe", icon: "🌬️" }, { word: "meditate", icon: "🧘" }, { word: "take a break", icon: "☕" },
      { word: "go for a walk", icon: "🚶" }, { word: "listen to music", icon: "🎧" }, { word: "talk to a friend", icon: "💬" },
      { word: "deadline", icon: "📅" }, { word: "pressure", icon: "⏲️" }, { word: "heart rate", icon: "❤️" }
    ],
    grammar: [
      {
        title: "Zero conditional",
        head: ["If / When + present simple", "present simple"],
        rows: [
          ["*If* I *don't sleep*,", "I *feel* anxious."],
          ["*When* I *have* exams,", "I *can't* sleep."],
          ["*If* you *breathe* slowly,", "your heart *slows* down."],
          ["*If* you *heat* water to 100°C,", "it *boils*. (scientific fact)"]
        ],
        note: "We use the zero conditional for things that are always or generally true. *If* and *when* have almost the same meaning here."
      },
      {
        title: "Questions and advice",
        head: ["Structure", "Example"],
        rows: [
          ["*What do you do when / if…?*", "*What do you do when* you feel nervous?"],
          ["*If / When…, + imperative*", "*When* you feel stressed, *take* a break."],
          ["*If…, don't…*", "*If* you're tired, *don't* drink coffee at night."],
          ["order", "*I eat chocolate if I'm stressed.* (no comma)"]
        ],
        note: "Use a comma when *if / when* comes first: *If I'm tired, I go to bed early.*"
      }
    ],
    watchOut: [
      ["If I will be stressed, I eat chocolate.", "If I'm stressed, I eat chocolate."],
      ["When I am nervous I am sweating.", "When I'm nervous, I sweat."],
      ["What you do when you're sad?", "What do you do when you're sad?"],
      ["If you're stressed, you take a break. (advice)", "If you're stressed, take a break."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the verb in the present simple.",
      items: [
        "If I [[don't sleep|do not sleep]], I feel tired all day. (not sleep)",
        "When Pablo has exams, he [[eats]] a lot of junk food. (eat)",
        "If you breathe slowly, your heart [[slows]] down. (slow)",
        "What [[do]] you do when you feel nervous?",
        "When you feel stressed, [[take]] a short break. (take)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A podcast asks two people how they deal with stress. Listen.",
      title: "Podcast: My stress-free tricks",
      script: [
        { who: "Host", line: "Lin, what do you do when you feel stressed?" },
        { who: "Lin", line: "When I feel stressed, I go for a walk in the park. If it's raining, I do yoga at home. Twenty minutes is enough." },
        { who: "Host", line: "What makes you stressed?" },
        { who: "Lin", line: "Deadlines at work. If I have too many projects, I make a list. When I see everything on paper, I feel calmer." },
        { who: "Host", line: "Omar, what about you?" },
        { who: "Omar", line: "Traffic! If I'm in traffic for more than an hour, I get really angry. So I listen to podcasts in the car." },
        { who: "Host", line: "Does it help?" },
        { who: "Omar", line: "Yes. When I listen to comedy podcasts, I laugh and forget about the traffic. And on weekends, if I have time, I cook. Cooking relaxes me." }
      ],
      activities: [
        {
          type: "match", title: "If… then…",
          prompt: "Match to make true sentences.",
          pairs: [
            ["When Lin feels stressed,", "she goes for a walk."],
            ["If it's raining,", "she does yoga at home."],
            ["If Omar is in traffic for over an hour,", "he gets really angry."],
            ["When Omar listens to comedy podcasts,", "he laughs."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Lin feels calmer when she makes a list.", a: true },
            { s: "Deadlines make Omar stressed.", a: false },
            { s: "Omar listens to music in the car.", a: false },
            { s: "Cooking relaxes Omar.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a leaflet from the university health center.",
      title: "Beat exam stress!",
      text: [
        { author: "Your body", body: "When you're stressed, your body produces a hormone called cortisol. If you have too much cortisol for a long time, you sleep badly and get sick more easily." },
        { author: "Five easy tips", body: "1. If you feel nervous, breathe in for four seconds and out for six. 2. When you study, take a ten-minute break every hour. 3. If you can, walk outside for fifteen minutes a day. 4. Don't drink coffee after 4 p.m. if you want to sleep well. 5. When you're worried, talk to a friend — you aren't alone." },
        { author: "Need help?", body: "If you feel stressed for more than two weeks, come to the health center. It's free for students." }
      ],
      activities: [
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers from the leaflet.",
          items: [
            { q: "What hormone does your body produce when you're stressed?", a: ["Cortisol.", "cortisol"] },
            { q: "How long is the break every hour?", a: ["Ten minutes.", "ten minutes", "10 minutes."] },
            { q: "When should you stop drinking coffee?", a: ["After 4 p.m.", "after 4 p.m.", "After 4.", "At 4 p.m."] },
            { q: "How much does the health center cost for students?", a: ["Nothing.", "It's free.", "free", "It's free for students."] }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Too much cortisol can make you sleep badly.", a: true },
            { s: "You should breathe out for four seconds.", a: false },
            { s: "Walking outside helps with stress.", a: true },
            { s: "If you feel stressed for two days, you have to go to the health center.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the zero conditional, then write your own stress-free tips.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the sentences with *If* or *When* at the beginning.",
          items: [
            { q: "I'm stressed. I listen to music. (When)", a: ["When I'm stressed, I listen to music.", "When I am stressed, I listen to music."] },
            { q: "I don't eat breakfast. I get a headache. (If)", a: ["If I don't eat breakfast, I get a headache.", "If I do not eat breakfast, I get a headache."] },
            { q: "You feel nervous. Breathe slowly. (When)", a: ["When you feel nervous, breathe slowly."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "What do you do when you're stressed?" },
            { a: "If I'm tired, I go to bed early." },
            { a: "When I feel nervous, I breathe slowly." },
            { a: "If you study too long, take a break." },
            { a: "Cooking makes me feel relaxed." }
          ]
        },
        {
          type: "write", title: "My stress-free guide",
          prompt: "Write a short guide for other students: What makes you stressed? What happens to you when you're stressed? What do you do to feel better? Give three tips with *If / When…, + imperative*.",
          minWords: 60, maxWords: 110,
          model: "Exams and speaking in public make me stressed. When I'm nervous, my hands shake and I can't eat. If I don't sleep well, everything is worse. These are my tips: When you feel stressed, go for a walk and listen to your favorite music. If you have a lot of homework, make a list and do one thing at a time. And if you're worried, talk to a friend. It really helps!",
          bank: ["… makes me stressed.", "When I'm nervous, I…", "If I don't…, I…", "When you feel stressed, …", "If you have…, …", "Don't…", "It really helps!"],
          checklist: [
            "I used the zero conditional at least three times.",
            "I used the present simple in both parts.",
            "I gave advice with *If / When…, + imperative*.",
            "I used a comma when *if / when* comes first."
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
            "When I have exams, I can't sleep.",
            "If I don't sleep, I feel anxious.",
            "What do you do when you feel stressed?",
            "When you feel nervous, breathe slowly.",
            "If you breathe slowly, your heart slows down.",
            "Cooking makes me feel relaxed."
          ]
        },
        {
          type: "speak", title: "How I stay calm",
          prompt: "Record yourself explaining what makes you stressed, what happens when you're stressed, and three things you do to feel calm.",
          language: ["… makes me stressed.", "When I'm stressed, I…", "If I…, I…", "To feel calm, I…", "My best tip is: when you…, …"],
          seconds: 75,
          checklist: ["use the zero conditional?", "talk about feelings?", "give a tip with an imperative?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use the zero conditional.", review: "Explanation: zero conditional; Quick check" },
    { can: "I can talk about stress and feelings.", review: "Explanation: vocabulary" },
    { can: "I can say what I do when I'm stressed.", review: "Presentation; Listening" },
    { can: "I can give advice with *If / When + imperative*.", review: "Explanation: questions and advice; Writing activity 1" },
    { can: "I can understand a health leaflet.", review: "Reading: beat exam stress" },
    { can: "I can write a guide with tips.", review: "Writing activity 3" }
  ]
};
