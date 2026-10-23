window.UNIT = {
  slug: "my-future-career",
  number: 34,
  title: "My Future Career",
  level: "A2",
  minutes: 50,
  speakers: { "Counselor": "m", "Valeria": "f", "Host": "f", "Dr. Ruiz": "m", A: "f", B: "m" },
  focus: ["will / won't for predictions", "probably / definitely / I think… will / I don't think… will", "jobs of the future", "I hope… / I'm sure…", "In ten years…"],

  presentation: {
    scene: "🔮🤖💼🚀",
    situation: "Valeria is finishing high school. She talks to the school counselor about her future.",
    warmup: {
      prompt: "Which jobs do you think will be important in the future? Choose all.",
      options: ["programmer", "nurse", "teacher", "farmer", "drone pilot", "data scientist", "doctor", "climate expert", "chef", "content creator"],
      response: "Interesting predictions! In this unit you'll learn to talk about the future with *will*."
    },
    dialogueTitle: "A talk about the future",
    dialogue: [
      { who: "Counselor", line: "So, Valeria, what do you want to study?" },
      { who: "Valeria", line: "I'm not sure. I like biology and computers. *Will* there *be* jobs in biology in the future?" },
      { who: "Counselor", line: "*Definitely*. *I think* biotechnology *will be* very important. Scientists *will create* new medicines and food." },
      { who: "Valeria", line: "But *robots will probably do* a lot of jobs, right?" },
      { who: "Counselor", line: "Yes, some. But *I don't think* robots *will replace* scientists or nurses. People *will* always *need* creativity and empathy." },
      { who: "Valeria", line: "That's good to know. *I hope I'll find* a job I love." },
      { who: "Counselor", line: "*I'm sure you will*. You're a hard-working student." },
      { who: "Valeria", line: "Thanks! *I won't decide* today, but I'll think about biotechnology." }
    ]
  },

  objectives: [
    "I can make predictions with *will / won't*.",
    "I can show how sure I am with *probably, definitely, I think, I don't think*.",
    "I can talk about jobs of the future.",
    "I can describe my hopes for my career."
  ],

  explanation: {
    vocabTitle: "Careers and the future",
    vocab: [
      { word: "career", icon: "💼" }, { word: "degree", icon: "🎓" }, { word: "robot", icon: "🤖" },
      { word: "artificial intelligence", icon: "🧠" }, { word: "replace", icon: "🔁" }, { word: "create", icon: "✨" },
      { word: "technology", icon: "💻" }, { word: "skills", icon: "🛠️" }, { word: "creativity", icon: "🎨" },
      { word: "empathy", icon: "💗" }, { word: "work remotely", icon: "🏠" }, { word: "earn a good salary", icon: "💰" },
      { word: "definitely", icon: "✅" }, { word: "probably", icon: "🤔" }, { word: "I hope", icon: "🤞" }
    ],
    grammar: [
      {
        title: "Will / won't for predictions",
        head: ["", "Example"],
        rows: [
          ["affirmative", "Robots *will do* many jobs."],
          ["negative", "Robots *won't replace* nurses."],
          ["question", "*Will* there *be* jobs in biology?"],
          ["short answers", "Yes, there *will*. / No, there *won't*."]
        ],
        note: "*will* + base verb, the same for all subjects. *won't = will not*."
      },
      {
        title: "How sure are you?",
        head: ["Certainty", "Example"],
        rows: [
          ["100% *definitely*", "Technology *will definitely* change. / *Definitely*."],
          ["80% *probably*", "I*'ll probably* study abroad."],
          ["opinion: *I think… will*", "*I think* AI *will* help doctors."],
          ["negative opinion", "*I don't think* robots *will* replace teachers."],
          ["*I'm sure / I hope…*", "*I'm sure* you'll find a job. *I hope* I'll travel."]
        ],
        note: "Position: *will probably* / *probably won't*. Say *I don't think… will* — not *I think… won't*."
      }
    ],
    watchOut: [
      ["Robots will to do the work.", "Robots will do the work."],
      ["I think robots won't replace teachers.", "I don't think robots will replace teachers."],
      ["I probably will study medicine.", "I'll probably study medicine."],
      ["In the future there will have more jobs.", "In the future there will be more jobs."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *will, won't, be* or *think*.",
      items: [
        "In 2050, people [[will]] work from home more.",
        "Robots [[won't|will not]] replace nurses. Patients need people!",
        "I don't [[think]] I'll be a doctor.",
        "There will [[be]] new jobs in technology.",
        "[[Will]] AI help teachers? – Yes, it will."
      ]
    }
  },

  skills: {
    listening: {
      intro: "On a radio program, Dr. Ruiz, an expert on work, makes predictions about the future. Listen.",
      title: "Radio: Work in 2040",
      script: [
        { who: "Host", line: "Dr. Ruiz, what will work look like in 2040?" },
        { who: "Dr. Ruiz", line: "I think most office workers will work from home three or four days a week. Offices will be smaller." },
        { who: "Host", line: "Will robots take our jobs?" },
        { who: "Dr. Ruiz", line: "Some jobs, yes. Machines will probably drive trucks and work in factories. But they won't replace jobs that need empathy, like nurses, teachers and psychologists." },
        { who: "Host", line: "What new jobs will there be?" },
        { who: "Dr. Ruiz", line: "There will definitely be more jobs in renewable energy and in caring for older people. People will live longer, so we'll need more caregivers." },
        { who: "Host", line: "Any advice for young people?" },
        { who: "Dr. Ruiz", line: "Keep learning! People will probably change careers three or four times in their lives." }
      ],
      activities: [
        {
          type: "sort", title: "Will or won't?",
          prompt: "Sort Dr. Ruiz's predictions.",
          bins: ["✅ will happen", "❌ won't happen"],
          items: [
            { text: "office workers work from home more", bin: 0 }, { text: "machines drive trucks", bin: 0 }, { text: "more jobs in renewable energy", bin: 0 }, { text: "people change careers several times", bin: 0 },
            { text: "robots replace nurses", bin: 1 }, { text: "robots replace teachers", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Offices will be bigger in 2040.", a: false },
            { s: "We'll need more caregivers because people will live longer.", a: true },
            { s: "Dr. Ruiz says young people should keep learning.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three students' predictions about their careers.",
      title: "Me in ten years",
      text: [
        { author: "Joel, 18", body: "I'm going to study architecture. In ten years I think I'll design eco-friendly houses. I'll probably work in Mexico City, but I hope I'll travel a lot." },
        { author: "Majo, 19", body: "I want to be a nurse. I don't think I'll earn a lot of money, but I'll definitely help people. Maybe I'll work in Canada — they need nurses there!" },
        { author: "Hugo, 17", body: "I'm not sure what I'll do. I like video games and art. Maybe I'll be a game designer. I don't think I'll work in an office — I'll probably work from home." }
      ],
      activities: [
        {
          type: "match", title: "Who will do it?",
          prompt: "Match the prediction with the person.",
          pairs: [
            ["design eco-friendly houses", "Joel"],
            ["definitely help people", "Majo"],
            ["probably work from home", "Hugo"]
          ]
        },
        {
          type: "rewrite", title: "Short answers",
          prompt: "Answer: *Yes, he will / No, she won't…* or *Probably*.",
          items: [
            { q: "Will Joel work in Mexico City?", a: ["Probably.", "Yes, he will.", "He'll probably work in Mexico City.", "Yes, probably."] },
            { q: "Does Majo think she'll earn a lot?", a: ["No, she doesn't.", "No, she does not."] },
            { q: "Does Hugo think he'll work in an office?", a: ["No, he doesn't.", "No, he does not."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice predictions, then write about your future.",
      activities: [
        {
          type: "rewrite", title: "How sure?",
          prompt: "Rewrite the sentence with the word in brackets.",
          items: [
            { q: "I'll study abroad. (probably)", a: ["I'll probably study abroad.", "I will probably study abroad."] },
            { q: "Robots will replace teachers. (I don't think)", a: ["I don't think robots will replace teachers."] },
            { q: "Technology will change our jobs. (definitely)", a: ["Technology will definitely change our jobs."] },
            { q: "You'll find a good job. (I'm sure)", a: ["I'm sure you'll find a good job.", "I'm sure you will find a good job."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I think I'll be a teacher." },
            { a: "Robots won't replace nurses." },
            { a: "Will there be more jobs in technology?" },
            { a: "I'll probably work from home." },
            { a: "I hope I'll travel a lot." }
          ]
        },
        {
          type: "write", title: "Me in ten years",
          prompt: "Write predictions about your life and career in ten years. What will you do? Where will you live? What won't you do? Use *will, won't, probably, definitely, I think, I don't think, I hope*.",
          minWords: 60, maxWords: 110,
          model: "In ten years I'll be 30. I think I'll be a psychologist, because I love helping people. I'll probably work in a hospital in Puebla, but I hope I'll have my own office one day. I definitely won't live with my parents — I'll have my own apartment with a dog! I don't think I'll be rich, but I'm sure I'll be happy. I hope I'll travel to Japan too.",
          bank: ["In ten years I'll be…", "I think I'll…", "I'll probably…", "I definitely won't…", "I don't think I'll…", "I hope I'll…", "I'm sure…"],
          checklist: [
            "I used *will* and *won't*.",
            "I used *probably* and *definitely* in the right position.",
            "I used *I don't think… will*.",
            "I wrote about career and life."
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
            "Will there be jobs in biology in the future?",
            "Technology will be very important.",
            "Robots will probably do a lot of jobs.",
            "I don't think robots will replace nurses.",
            "I hope I'll find a job I love.",
            "I'm sure you will."
          ]
        },
        {
          type: "speak", title: "Predictions",
          prompt: "Record your predictions: How will work be different in 2040? What jobs will be popular? What will you probably do? Give at least five predictions.",
          language: ["In 2040, people will…", "I think … will…", "I don't think … will…", "There will definitely be…", "I'll probably…", "I hope…"],
          seconds: 75,
          checklist: ["make five predictions?", "use *will / won't*?", "use *probably / definitely*?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can make predictions with *will / won't*.", review: "Explanation; Quick check" },
    { can: "I can use *probably, definitely, I think, I don't think*.", review: "Explanation: how sure are you?; Writing activity 1" },
    { can: "I can talk about jobs of the future.", review: "Listening: work in 2040" },
    { can: "I can talk about my hopes with *I hope / I'm sure*.", review: "Presentation" },
    { can: "I can understand people's predictions.", review: "Reading: me in ten years" },
    { can: "I can write about my future.", review: "Writing activity 3" }
  ]
};
