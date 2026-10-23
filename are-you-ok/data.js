window.UNIT = {
  slug: "are-you-ok",
  number: 21,
  title: "Are You OK?",
  level: "A2",
  minutes: 55,
  focus: ["health problems: a headache, a cold…", "should / shouldn't", "Maybe you could…", "Why don't you…?", "You'd better…"],

  presentation: {
    scene: "🤒🤕💊🫖",
    situation: "It's exam week at BUAP. Many students are tired, stressed or sick. Jimena notices that her friend Rafa doesn't look very well.",
    warmup: {
      prompt: "When you feel sick or stressed, what do you do? Choose everything that is true.",
      options: ["drink tea", "take medicine", "sleep", "go to the doctor", "call my mom", "eat soup", "listen to music", "go for a walk", "talk to a friend", "do nothing"],
      response: "Great! In this unit you'll learn to describe problems and give advice."
    },
    dialogueTitle: "Exam week",
    dialogue: [
      { who: "Jimena", line: "Rafa, *are you OK*? You look terrible." },
      { who: "Rafa", line: "*I have a headache* and *a sore throat*. And I'm very tired." },
      { who: "Jimena", line: "Oh, no. *You should* go home and rest." },
      { who: "Rafa", line: "I can't. I have a math exam at twelve." },
      { who: "Jimena", line: "Well, *maybe you could* talk to the teacher after the exam. And *you shouldn't* study all night again!" },
      { who: "Rafa", line: "You're right. I studied until three a.m." },
      { who: "Jimena", line: "*Why don't you* drink some tea with honey? It's good for your throat." },
      { who: "Rafa", line: "Good idea. And if I have a fever tonight?" },
      { who: "Jimena", line: "Then *you'd better* see a doctor. Seriously!" }
    ]
  },

  objectives: [
    "I can describe common health problems and how I feel.",
    "I can give advice with *should* and *shouldn't*.",
    "I can make soft suggestions with *maybe you could* and *why don't you…?*",
    "I can give strong advice or a warning with *you'd better*."
  ],

  explanation: {
    vocabTitle: "Health problems and remedies",
    vocab: [
      { word: "a headache", icon: "🤕" }, { word: "a stomachache", icon: "🤢" }, { word: "a sore throat", icon: "🗣️" },
      { word: "a cold", icon: "🤧" }, { word: "a fever", icon: "🤒" }, { word: "a cough", icon: "😷" },
      { word: "a toothache", icon: "🦷" }, { word: "a backache", icon: "🧍" }, { word: "stressed", icon: "😫" },
      { word: "tired", icon: "🥱" }, { word: "take medicine", icon: "💊" }, { word: "rest", icon: "🛋️" },
      { word: "drink water", icon: "💧" }, { word: "see a doctor", icon: "🩺" }, { word: "go to the dentist", icon: "🪥" }
    ],
    grammar: [
      {
        title: "Should / shouldn't",
        head: ["", "Example"],
        rows: [
          ["affirmative", "You *should* drink more water."],
          ["negative", "He *shouldn't* eat so much candy."],
          ["question", "*Should* I go to the doctor? – Yes, you *should*."],
          ["Wh- question", "What *should* I do?"]
        ],
        note: "*Should* + verb without *to*: *You should rest.* Never *You should to rest* or *She shoulds*."
      },
      {
        title: "Other ways to give advice",
        head: ["Expression", "How strong?", "Example"],
        rows: [
          ["*Maybe you could* + verb", "soft, polite", "*Maybe you could* take a break."],
          ["*Why don't you* + verb?", "friendly suggestion", "*Why don't you* go to bed early?"],
          ["*You should* + verb", "normal advice", "*You should* see a dentist."],
          ["*You'd better* + verb", "strong; there's a problem if you don't", "*You'd better* go to the hospital!"],
          ["*You'd better not* + verb", "strong negative", "*You'd better not* go out with a fever."]
        ],
        note: "*You'd better* = *you had better*. It's for the present or near future, not the past."
      },
      {
        title: "Describing problems",
        head: ["Ask", "Answer"],
        rows: [
          ["*What's the matter?* / *What's wrong?*", "I *have a* headache. / I *have a* cold."],
          ["*How do you feel?*", "I *feel* tired / sick / stressed."],
          ["*Does it hurt?*", "Yes, my back *hurts*."]
        ],
        note: "Use *a* with most problems: *a cold, a fever, a cough, a headache*."
      }
    ],
    watchOut: [
      ["You should to rest.", "You should rest."],
      ["I have headache.", "I have a headache."],
      ["You had better to go.", "You'd better go."],
      ["Why you don't drink tea?", "Why don't you drink tea?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the advice with one word.",
      items: [
        "You [[should]] drink tea with honey for your sore throat.",
        "You [[shouldn't|should not]] go to school with a high fever.",
        "Why [[don't]] you take a short break?",
        "Your tooth is bleeding! You'd [[better]] see a dentist today."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a school radio program, *Ask Doctor Ana*. Students call with their problems.",
      title: "Ask Doctor Ana",
      script: [
        { who: "Dr. Ana", line: "Good afternoon! You're listening to Ask Doctor Ana. Our first caller is Luis. What's the matter, Luis?" },
        { who: "Luis", line: "Hi, Doctor. I always have a backache after school. My backpack is very heavy." },
        { who: "Dr. Ana", line: "You shouldn't carry all your books every day. Maybe you could leave some in your locker. And you should use both straps." },
        { who: "Dr. Ana", line: "Next caller: Valentina." },
        { who: "Valentina", line: "Hello. I can't sleep at night. I'm in bed at eleven, but I'm on my phone until two." },
        { who: "Dr. Ana", line: "That's the problem! Why don't you leave your phone in another room? And you shouldn't drink coffee in the afternoon." },
        { who: "Dr. Ana", line: "And our last caller is Omar." },
        { who: "Omar", line: "Hi. I ate some seafood at a street stand yesterday and now I have a terrible stomachache and a fever." },
        { who: "Dr. Ana", line: "Omar, you'd better see a doctor today. And you should drink a lot of water. You'd better not eat anything heavy." }
      ],
      activities: [
        {
          type: "match", title: "Problems and advice",
          prompt: "Match each caller with their problem.",
          pairs: [
            ["Luis", "has a backache because of his backpack."],
            ["Valentina", "can't sleep because she uses her phone late."],
            ["Omar", "has a stomachache and a fever."]
          ]
        },
        {
          type: "sort", title: "Whose advice is it?",
          prompt: "Listen again. Put each piece of advice under the right caller.",
          bins: ["Luis", "Valentina", "Omar"],
          items: [
            { text: "Leave some books in your locker.", bin: 0 }, { text: "Use both straps.", bin: 0 },
            { text: "Leave your phone in another room.", bin: 1 }, { text: "Don't drink coffee in the afternoon.", bin: 1 },
            { text: "See a doctor today.", bin: 2 }, { text: "Drink a lot of water.", bin: 2 }, { text: "Don't eat anything heavy.", bin: 2 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a post on a student forum and the replies.",
      title: "Student forum · Help, I'm so stressed!",
      text: [
        { author: "Pao_17", body: "I have four exams next week and a project for biology. I'm studying every night until two a.m. I feel tired all the time, I have headaches and I'm always in a bad mood with my family. What should I do?" },
        { author: "Memo", body: "You should make a study plan. Write what you need to study every day. It really helps! And you shouldn't study until two. Your brain needs sleep." },
        { author: "Sofi.R", body: "Maybe you could study with a friend. It's more fun and you can help each other. Why don't you go for a walk or listen to music between study sessions?" },
        { author: "Prof. Gómez (adviser)", body: "Pao, these are good ideas. Also, you'd better talk to your teachers if you feel you can't finish the project. They can help you. And if the headaches continue, you'd better see a doctor." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. Are these sentences true or false?",
          items: [
            { s: "Pao has three exams next week.", a: false },
            { s: "Pao is sleeping very little.", a: true },
            { s: "Memo thinks a study plan is a good idea.", a: true },
            { s: "Sofi says Pao should always study alone.", a: false },
            { s: "Prof. Gómez says Pao should talk to the teachers.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Say it with should",
          prompt: "Rewrite each piece of advice from the forum with *should* or *shouldn't*.",
          items: [
            { q: "Make a study plan.", a: ["You should make a study plan.", "Pao should make a study plan.", "She should make a study plan."] },
            { q: "Don't study until two.", a: ["You shouldn't study until two.", "You should not study until two.", "Pao shouldn't study until two.", "She shouldn't study until two."] },
            { q: "Maybe you could study with a friend.", a: ["You should study with a friend.", "Pao should study with a friend.", "She should study with a friend."] },
            { q: "Why don't you go for a walk?", a: ["You should go for a walk.", "Pao should go for a walk.", "She should go for a walk."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the expressions, then write a reply to a friend who needs help.",
      activities: [
        {
          type: "tiles", title: "Put the advice in order",
          items: [
            { a: "You should drink more water." },
            { a: "Why don't you go to bed early?" },
            { a: "Maybe you could take a break." },
            { a: "You'd better see a doctor." },
            { a: "You shouldn't eat so much sugar." },
            { a: "What should I do?" }
          ]
        },
        {
          type: "match", title: "Problem and advice",
          prompt: "Match each problem with the best advice.",
          pairs: [
            ["I have a toothache.", "You'd better go to the dentist."],
            ["I'm always tired in the morning.", "You should go to bed earlier."],
            ["I have a cold.", "Why don't you drink some hot tea?"],
            ["I'm stressed about my exam.", "Maybe you could study with a classmate."],
            ["I have a stomachache.", "You shouldn't eat spicy food today."]
          ]
        },
        {
          type: "write", title: "Reply to a friend",
          prompt: "Your friend writes: *I'm always tired, I don't eat well, and I'm stressed about school. What should I do?* Write a reply with at least four pieces of advice. Use different expressions.",
          minWords: 60, maxWords: 90,
          model: "Hi, Toño! I'm sorry you feel bad. First, you should go to bed before eleven. You shouldn't use your phone in bed. Why don't you have a good breakfast before school? Fruit and eggs are great. Maybe you could do some exercise too, like walking or riding a bike. And if you still feel stressed, you'd better talk to the school counselor. Take care!",
          bank: ["I'm sorry you feel bad.", "You should", "You shouldn't", "Why don't you", "Maybe you could", "You'd better", "Take care!"],
          checklist: [
            "I gave at least **four** pieces of advice.",
            "I used *should* and *shouldn't* + verb (no *to*).",
            "I used *Why don't you…?* or *Maybe you could…*",
            "I used *You'd better* for the most serious problem."
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
            "What's the matter?",
            "I've got a terrible headache.",
            "You should go to bed early.",
            "You shouldn't drink so much coffee.",
            "Why don't you see a doctor?",
            "You'd better take a rest."
          ]
        },
        {
          type: "speak", title: "Tips for exam week",
          prompt: "Record a short video or audio (about one minute) for new BUAP students: give five tips to stay healthy and calm during exam week.",
          language: ["During exam week…", "You should…", "You shouldn't…", "Why don't you…?", "Maybe you could…", "You'd better not…"],
          seconds: 75,
          checklist: ["give five tips?", "use at least three different expressions?", "pronounce *should* without the *l*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 10 health problems and remedies.", review: "Explanation: the vocabulary cards" },
    { can: "I can ask *What's the matter?* and describe how I feel.", review: "Explanation: describing problems" },
    { can: "I can give advice with *should* and *shouldn't*.", review: "Explanation: should; Reading activity 2" },
    { can: "I can make soft suggestions with *maybe you could* and *why don't you…?*", review: "Explanation: other ways to give advice" },
    { can: "I can use *you'd better* for strong advice.", review: "Explanation: other ways to give advice; Writing activity 2" },
    { can: "I can give advice in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
