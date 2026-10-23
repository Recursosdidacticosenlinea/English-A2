window.UNIT = {
  slug: "my-a2-journey",
  number: 50,
  title: "My A2 Journey",
  level: "A2",
  minutes: 60,
  speakers: { "Ms. Reyes": "f", "Kenji": "m", "Interviewer": "m", "Paulina": "f", A: "f", B: "m" },
  focus: ["A2 review: past simple, past continuous, used to", "present perfect: experience, just / already / yet, for / since", "comparatives and superlatives", "future forms and the first conditional", "final project: My A2 journey"],

  presentation: {
    scene: "🏁🎓🗺️⭐",
    situation: "It's the end of the A2 course. Kenji presents his final project, \"My A2 Journey\", to the class.",
    warmup: {
      prompt: "What can you do in English now that you couldn't do before A2? Choose all.",
      options: ["tell stories in the past", "talk about experiences", "compare things", "give advice", "make plans", "talk about rules", "describe people", "order in a restaurant", "talk on the phone", "make predictions"],
      response: "Fantastic progress! In this final unit you'll review the A2 grammar and present your journey."
    },
    dialogueTitle: "Kenji's presentation",
    dialogue: [
      { who: "Kenji", line: "When I started this course, I *was* very nervous. I *didn't use to* speak in class." },
      { who: "Kenji", line: "*While* I *was studying* unit 9, I *wrote* my first story in English. That *was* a big moment!" },
      { who: "Kenji", line: "Since then, *I've written* twelve stories and *I've read* three books in English." },
      { who: "Kenji", line: "Speaking is still *harder than* writing for me, but it's *much easier than* before." },
      { who: "Kenji", line: "*The most useful* unit *was* \"On the Phone\". Now I *can* call hotels in English!" },
      { who: "Ms. Reyes", line: "Excellent, Kenji! What are your plans now?" },
      { who: "Kenji", line: "*I'm starting* B1 in January. *If I practice* every day, *I'll pass* the B1 exam next year. And *I might* study in Canada!" }
    ]
  },

  objectives: [
    "I can use the main A2 grammar structures correctly.",
    "I can talk about my past, my experiences and my future in English.",
    "I can describe my progress and my learning goals.",
    "I can present a final project about my A2 journey."
  ],

  explanation: {
    vocabTitle: "Talking about progress",
    vocab: [
      { word: "progress", icon: "📈" }, { word: "improve", icon: "⬆️" }, { word: "confidence", icon: "😎" },
      { word: "achievement", icon: "🏆" }, { word: "challenge", icon: "🧗" }, { word: "goal", icon: "🎯" },
      { word: "mistake", icon: "❌" }, { word: "practice", icon: "🔁" }, { word: "skill", icon: "🛠️" },
      { word: "fluent", icon: "🌊" }, { word: "proud", icon: "🙌" }, { word: "motivated", icon: "🔥" },
      { word: "since then", icon: "➡️" }, { word: "so far", icon: "📍" }, { word: "from now on", icon: "🚀" }
    ],
    grammar: [
      {
        title: "A2 grammar at a glance",
        head: ["Use", "Form", "Example"],
        rows: [
          ["past habits", "*used to*", "I *didn't use to* speak in class."],
          ["background + event", "past continuous + past simple", "*While* I *was studying*, I *wrote* a story."],
          ["experience / until now", "present perfect", "I*'ve written* twelve stories *since* then."],
          ["comparing", "comparatives / superlatives", "Speaking is *harder than* writing. *The most useful* unit…"],
          ["obligation / advice", "*have to, must, should*", "You *should* practice every day."],
          ["future", "*going to, will*, present continuous", "I*'m starting* B1 in January."],
          ["possibility", "*might, may*", "I *might* study in Canada."],
          ["conditions", "first conditional", "*If* I *practice*, I*'ll pass*."]
        ]
      },
      {
        title: "Talking about progress",
        head: ["Structure", "Example"],
        rows: [
          ["*When I started…, I…*", "*When I started*, I couldn't understand movies."],
          ["*Now I can…*", "*Now I can* talk on the phone."],
          ["*I've improved my…*", "*I've improved my* pronunciation a lot."],
          ["*… is still difficult for me.*", "Listening *is still difficult for me*."],
          ["*From now on, I'm going to…*", "*From now on, I'm going to* read every day."]
        ]
      }
    ],
    watchOut: [
      ["I have studied English since three years.", "I've studied English for three years."],
      ["Speaking is more hard than writing.", "Speaking is harder than writing."],
      ["If I will practice, I will pass.", "If I practice, I'll pass."],
      ["I use to be shy.", "I used to be shy."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the correct form of the verb.",
      items: [
        "I [[used to]] be very shy in class. (use to)",
        "I [['ve read|have read]] three books in English since January. (read)",
        "While I [[was studying]], my phone rang. (study)",
        "English is [[easier]] for me now than before. (easy)",
        "If I practice every day, I [['ll pass|will pass]] the exam. (pass)",
        "Next year I [[might|may]] study abroad, but I'm not sure. (possibility)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "An interviewer asks Paulina about her experience in the A2 course. Listen.",
      title: "Interview: Looking back",
      script: [
        { who: "Interviewer", line: "Paulina, how long have you studied English?" },
        { who: "Paulina", line: "I've studied for about two years. I started A1 in 2024." },
        { who: "Interviewer", line: "What was the most difficult part of A2?" },
        { who: "Paulina", line: "The present perfect! At first I didn't understand when to use it. But now it's much clearer." },
        { who: "Interviewer", line: "What has helped you the most?" },
        { who: "Paulina", line: "Watching series with subtitles. I used to watch everything in Spanish, but now I watch in English." },
        { who: "Interviewer", line: "Have you used your English outside class?" },
        { who: "Paulina", line: "Yes! Last month I was working at a hotel when some tourists from Australia arrived. I helped them with directions. I was so proud!" },
        { who: "Interviewer", line: "What's next?" },
        { who: "Paulina", line: "I'm going to take B1. If I pass it, I'll apply for an exchange program." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Paulina has studied English for about two years.", a: true },
            { s: "The most difficult part was the past simple.", a: false },
            { s: "She used to watch series in Spanish.", a: true },
            { s: "She helped tourists from Canada.", a: false },
            { s: "If she passes B1, she'll apply for an exchange program.", a: true }
          ]
        },
        {
          type: "sort", title: "Which grammar?",
          prompt: "Which structure does each sentence use?",
          bins: ["Present perfect", "Used to", "Past continuous", "First conditional"],
          items: [
            { text: "I've studied for two years.", bin: 0 }, { text: "Have you used your English?", bin: 0 },
            { text: "I used to watch everything in Spanish.", bin: 1 },
            { text: "I was working at a hotel when…", bin: 2 },
            { text: "If I pass it, I'll apply.", bin: 3 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two students' posts on the CAA \"My A2 Journey\" wall.",
      title: "My A2 Journey wall",
      text: [
        { author: "Hugo, 24 · engineer", body: "When I started A2, I could only read technical texts. Now I can have meetings in English with my company's clients in Texas. Last week I gave my first presentation in English! It was the most stressful moment of the year, but it went well. Listening is still harder than reading for me. From now on, I'm going to listen to a podcast every morning." },
        { author: "Majo, 19 · student", body: "I've loved this course! My favorite unit was \"The Best Day Ever\" because I wrote about my 18th birthday. I used to be afraid of making mistakes, but now I know mistakes help me learn. Next summer I'm going to work at a camp in the USA. If I improve my speaking, I'll be a camp leader!" }
      ],
      activities: [
        {
          type: "sort", title: "Who is it?",
          prompt: "Put each piece of information under the right person.",
          bins: ["Hugo", "Majo"],
          items: [
            { text: "has meetings with clients in Texas", bin: 0 }, { text: "gave a presentation last week", bin: 0 }, { text: "is going to listen to podcasts", bin: 0 },
            { text: "used to be afraid of mistakes", bin: 1 }, { text: "wrote about her 18th birthday", bin: 1 }, { text: "is going to work at a camp", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "For Hugo, listening is harder than reading.", a: true },
            { s: "Hugo's presentation went badly.", a: false },
            { s: "Majo's favorite unit was about her birthday.", a: true },
            { s: "Majo is going to work at a camp in Canada.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Review the main A2 structures, then write your final project.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I have studied English since two years.", a: ["I have studied English for two years.", "I've studied English for two years."] },
            { q: "Writing is more easy than speaking.", a: ["Writing is easier than speaking."] },
            { q: "If I will study, I will pass.", a: ["If I study, I will pass.", "If I study, I'll pass."] },
            { q: "When I was child, I use to play soccer.", a: ["When I was a child, I used to play soccer."] },
            { q: "I might to study in Canada.", a: ["I might study in Canada."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I've improved my English a lot this year." },
            { a: "Listening is still difficult for me." },
            { a: "I used to be afraid of speaking." },
            { a: "If I practice every day, I'll improve." },
            { a: "I'm going to start B1 in January." }
          ]
        },
        {
          type: "write", title: "My A2 journey",
          prompt: "Write your final project. Describe how you were when you started (*used to*, past simple), a special moment (past continuous + past simple), what you've achieved (present perfect), what's easier or harder now (comparatives), and your plans and goals (future forms, first conditional, *might*).",
          minWords: 100, maxWords: 180,
          model: "When I started A2, I used to translate everything into Spanish in my head, and I didn't use to speak much in class. A special moment was in March: I was waiting for the bus when a tourist asked me for directions, and I answered in English without thinking! Since then, I've watched four series in English and I've written a lot of short stories. Grammar is easier for me now, but listening is still harder than reading. The most useful unit was \"At the Doctor's\", because I'm studying nursing. Next year I'm starting B1. If I practice every day, I'll pass the B1 exam, and I might do an internship in Canada.",
          bank: ["When I started A2, I used to…", "I didn't use to…", "I was … when…", "Since then, I've…", "… is easier / harder than…", "The most useful unit was…", "Next year I'm…", "If I…, I'll…", "I might…"],
          checklist: [
            "I used *used to* and the past simple.",
            "I used the past continuous with *when / while*.",
            "I used the present perfect and a comparative or superlative.",
            "I used future forms, the first conditional and *might*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your final evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "When I started this course, I was very nervous.",
            "I didn't use to speak in class.",
            "Since then, I've written twelve stories.",
            "Speaking is harder than writing for me.",
            "If I practice every day, I'll pass the exam.",
            "I might study in Canada next year."
          ]
        },
        {
          type: "speak", title: "My A2 journey (final video)",
          prompt: "Record your final video (two minutes). Present your A2 journey: how you were at the start, a special moment, what you've achieved, what's still difficult, and your plans for B1 and beyond. Congratulations — you finished A2! 🎉",
          language: ["When I started A2, I used to…", "A special moment was when…", "Since then, I've…", "Now … is easier, but … is still difficult.", "The most useful unit was…", "Next year I'm going to…", "If I…, I'll…", "I might…"],
          seconds: 120,
          checklist: ["talk about past, present and future?", "use at least six different A2 structures?", "describe your progress and goals?", "speak for about two minutes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about the past with the past simple, past continuous and *used to*.", review: "Modules 2 and 9 (units 6–10, 44)" },
    { can: "I can talk about experiences and recent events with the present perfect.", review: "Module 3 (units 11–15)" },
    { can: "I can compare people, places and things.", review: "Module 4 (units 16–18)" },
    { can: "I can give advice and talk about rules and obligations.", review: "Units 21, 31, 42" },
    { can: "I can talk about the future: plans, predictions, possibilities and conditions.", review: "Units 34, 41, 46–48" },
    { can: "I can describe my progress and goals in English.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
