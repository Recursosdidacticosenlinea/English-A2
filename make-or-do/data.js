window.UNIT = {
  slug: "make-or-do",
  number: 38,
  title: "Make or Do?",
  level: "A2",
  minutes: 50,
  speakers: { "Mom": "f", "Iker": "m", "Host": "f", "Renata": "f", "Luis": "m", A: "f", B: "m" },
  focus: ["make and do collocations", "make the bed, do the dishes, make a mistake, do homework", "make + person + verb / let + person + verb", "family life and responsibilities", "Who makes…? Who does…?"],

  presentation: {
    scene: "🛏️🍽️📚🧺",
    situation: "It's Saturday morning. Iker wants to go out with friends, but his mom has other plans.",
    warmup: {
      prompt: "Which expressions do you know? Choose all.",
      options: ["make the bed", "do the dishes", "make breakfast", "do homework", "make a mistake", "do the laundry", "make friends", "do exercise", "make a phone call", "do the shopping"],
      response: "Good! In this unit you'll learn when to use *make* and when to use *do*."
    },
    dialogueTitle: "Saturday chores",
    dialogue: [
      { who: "Iker", line: "Mom, can I go to the park? My friends are waiting." },
      { who: "Mom", line: "First you have to *make your bed* and *do the dishes*." },
      { who: "Iker", line: "But I *did the dishes* yesterday! It's Sofi's turn." },
      { who: "Mom", line: "Sofi is *doing her homework*. And you *made a mess* in the kitchen last night." },
      { who: "Iker", line: "OK, OK… You always *make me do* everything!" },
      { who: "Mom", line: "That's not true. I *let you play* video games until midnight yesterday." },
      { who: "Iker", line: "Fine. Can I *make a phone call* first? I need to tell my friends I'll be late." },
      { who: "Mom", line: "Yes. And when you finish, I'll *make you* some pancakes!" }
    ]
  },

  objectives: [
    "I can use common collocations with *make* and *do*.",
    "I can talk about chores and responsibilities at home.",
    "I can use *make someone do* and *let someone do*.",
    "I can describe who does what in my family."
  ],

  explanation: {
    vocabTitle: "Make and do",
    vocab: [
      { word: "make the bed", icon: "🛏️" }, { word: "make breakfast / dinner", icon: "🍳" }, { word: "make a mistake", icon: "❌" },
      { word: "make a mess", icon: "🌪️" }, { word: "make a phone call", icon: "📞" }, { word: "make friends", icon: "🤝" },
      { word: "make money", icon: "💰" }, { word: "make a decision", icon: "🤔" }, { word: "do the dishes", icon: "🍽️" },
      { word: "do homework", icon: "📚" }, { word: "do the laundry", icon: "🧺" }, { word: "do the shopping", icon: "🛒" },
      { word: "do exercise", icon: "🏃" }, { word: "do your best", icon: "🌟" }, { word: "do a favor", icon: "🙏" }
    ],
    grammar: [
      {
        title: "Make or do?",
        head: ["make (create / produce)", "do (activities, work, tasks)"],
        rows: [
          ["*make* breakfast, a cake, a list", "*do* homework, an exam, a course"],
          ["*make* a mistake, a decision, a plan", "*do* the dishes, the laundry, the shopping"],
          ["*make* friends, money, noise, a mess", "*do* exercise, yoga, sport"],
          ["*make* a phone call, an appointment", "*do* your best, someone a favor, nothing"]
        ],
        note: "General rule: *make* = create something new. *do* = actions and jobs. But many are just collocations — learn them!"
      },
      {
        title: "Make / let + person + verb",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*make* + person + verb", "force / oblige", "My mom *makes me do* the dishes."],
          ["*let* + person + verb", "allow / permit", "She *lets me play* video games."],
          ["negative", "", "My dad *doesn't let me go out* on school nights."]
        ],
        note: "No *to* after *make / let*: *She makes me clean* — never *makes me to clean*."
      }
    ],
    watchOut: [
      ["I did a mistake.", "I made a mistake."],
      ["I have to make my homework.", "I have to do my homework."],
      ["My mom makes me to clean my room.", "My mom makes me clean my room."],
      ["My parents don't let me to go.", "My parents don't let me go."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *make, makes, do* or *does*.",
      items: [
        "Can you [[make]] the bed, please?",
        "I always [[do]] my homework after dinner.",
        "My sister [[does]] yoga every morning.",
        "Don't worry, everybody can [[make]] a mistake.",
        "My dad [[makes]] me wash the car on Sundays.",
        "Could you [[do]] me a favor?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "A radio host asks two people about rules and chores when they were teenagers. Listen.",
      title: "Radio: Strict or relaxed parents?",
      script: [
        { who: "Host", line: "Renata, were your parents strict?" },
        { who: "Renata", line: "Very! My mom made me do my homework as soon as I got home. And she didn't let me watch TV on weekdays." },
        { who: "Host", line: "What chores did you do?" },
        { who: "Renata", line: "I did the dishes every night and I made my bed every morning. My brother did the shopping." },
        { who: "Host", line: "Luis, what about you?" },
        { who: "Luis", line: "My parents were relaxed. They let me go out with friends on Saturday nights. But my dad made me do exercise every morning — he was a sports teacher!" },
        { who: "Host", line: "Did you help at home?" },
        { who: "Luis", line: "Not much, honestly. My grandma did the laundry and made all our meals. Now I live alone and I make a lot of mistakes in the kitchen!" }
      ],
      activities: [
        {
          type: "sort", title: "Renata or Luis?",
          prompt: "Sort the information.",
          bins: ["Renata", "Luis"],
          items: [
            { text: "had to do homework immediately", bin: 0 }, { text: "couldn't watch TV on weekdays", bin: 0 }, { text: "did the dishes every night", bin: 0 },
            { text: "could go out on Saturday nights", bin: 1 }, { text: "had to do exercise every morning", bin: 1 }, { text: "makes mistakes in the kitchen now", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Renata's brother did the shopping.", a: true },
            { s: "Luis's parents were very strict.", a: false },
            { s: "Luis's dad was a sports teacher.", a: true },
            { s: "Luis did the laundry.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the answers to a survey about teenagers and chores.",
      title: "Survey: Do teenagers help at home?",
      text: [
        { author: "Results", body: "We asked 200 students from Puebla about chores. 78% make their bed every day, but only 35% do the dishes regularly. Girls do more chores than boys: on average, girls spend six hours a week on housework, boys only three." },
        { author: "Comments", body: "\"My parents make me do the laundry because they both work,\" says Sara, 16. \"My mom lets me choose: I can do the dishes or make dinner,\" says Pablo, 15. \"I do nothing at home and I feel bad about it,\" says Kevin, 17." }
      ],
      activities: [
        {
          type: "gap", title: "Read and complete",
          prompt: "Write a number or one word.",
          items: [
            "[[78]]% of students make their bed every day.",
            "Only [[35]]% do the dishes regularly.",
            "Girls spend [[six|6]] hours a week on housework.",
            "Sara's parents make her do the [[laundry]].",
            "Kevin does [[nothing]] at home."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "Boys do more chores than girls.", a: false },
            { s: "Pablo's mom lets him choose a chore.", a: true },
            { s: "Kevin feels good about not helping.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *make* and *do*, then write about chores in your home.",
      activities: [
        {
          type: "sort", title: "Make or do?",
          prompt: "Sort the expressions.",
          bins: ["make", "do"],
          items: [
            { text: "a mistake", bin: 0 }, { text: "the bed", bin: 0 }, { text: "a decision", bin: 0 }, { text: "friends", bin: 0 }, { text: "a phone call", bin: 0 },
            { text: "homework", bin: 1 }, { text: "the dishes", bin: 1 }, { text: "exercise", bin: 1 }, { text: "the shopping", bin: 1 }, { text: "a favor", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Make or let?",
          prompt: "Rewrite with *make* or *let*.",
          items: [
            { q: "My mom forces me to do the dishes. (make)", a: ["My mom makes me do the dishes."] },
            { q: "My dad allows me to use his car. (let)", a: ["My dad lets me use his car."] },
            { q: "My parents don't allow me to go out late. (let)", a: ["My parents don't let me go out late.", "My parents do not let me go out late."] }
          ]
        },
        {
          type: "write", title: "Rules and chores at home",
          prompt: "Write about chores and rules in your home (now or when you were younger). Who does what? What do your parents make you do or let you do? Use at least six *make / do* collocations.",
          minWords: 60, maxWords: 110,
          model: "In my house, everybody helps. My mom makes breakfast and my dad does the shopping on Saturdays. I make my bed every day and I do the dishes after dinner. My little brother doesn't do much — he only makes a mess! When I was younger, my parents made me do my homework before I could play. Now they let me go out on weekends, but I have to make a phone call if I'm late.",
          bank: ["My mom / dad makes…", "I do the… / I make my…", "My parents make me…", "They let me…", "They don't let me…", "When I was younger,…"],
          checklist: [
            "I used at least **six** *make / do* collocations.",
            "I used *make + person + verb*.",
            "I used *let + person + verb*.",
            "I didn't use *to* after *make / let*."
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
            "First you have to make your bed.",
            "I did the dishes yesterday.",
            "She's doing her homework.",
            "Everybody makes mistakes.",
            "My mom makes me do the dishes.",
            "My parents let me go out on weekends."
          ]
        },
        {
          type: "speak", title: "Strict or relaxed?",
          prompt: "Record yourself talking about your parents' rules when you were a teenager (or now). What did they make you do? What did they let you do? What chores did you do?",
          language: ["My parents were strict / relaxed.", "They made me…", "They let me…", "They didn't let me…", "I did the… / I made the…"],
          seconds: 75,
          checklist: ["use *make* and *do* collocations?", "use *make / let + person + verb*?", "use the past simple?", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can choose *make* or *do* in common collocations.", review: "Explanation; Writing activity 1" },
    { can: "I can talk about chores at home.", review: "Presentation; Reading" },
    { can: "I can use *make + person + verb*.", review: "Explanation: make / let; Writing activity 2" },
    { can: "I can use *let + person + verb*.", review: "Explanation: make / let" },
    { can: "I can understand people talking about family rules.", review: "Listening: strict or relaxed parents?" },
    { can: "I can write about rules and chores in my home.", review: "Writing activity 3" }
  ]
};
