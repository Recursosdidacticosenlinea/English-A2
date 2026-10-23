window.UNIT = {
  slug: "talking-about-personal-objects",
  number: 2,
  title: "Talking About Personal Objects",
  level: "A2",
  minutes: 50,
  focus: ["possessive adjectives: my, your, his, her, its, our, their", "its vs. it's", "describing objects: color, size, material", "What's it made of?", "have / has"],

  presentation: {
    scene: "🎧⌚🧢🎸",
    situation: "The English club is making a video called *Objects That Tell Our Story*. Each student brings a special object and talks about it.",
    warmup: {
      prompt: "Which objects are special to you? Choose everything that is true.",
      options: ["a photo", "a necklace", "a watch", "a guitar", "a ball", "a cap", "a book", "a stuffed toy", "a bracelet", "a phone", "a ring", "a sketchbook"],
      response: "Great! In this unit you'll learn to describe your objects and say who they belong to."
    },
    dialogueTitle: "Objects that tell our story",
    dialogue: [
      { who: "Teacher", line: "OK, who's first? Alan, what's *your* object?" },
      { who: "Alan", line: "This is *my* grandfather's guitar. Well, now it's *my* guitar. *Its* wood is very old, but the sound is beautiful." },
      { who: "Teacher", line: "Lovely. And you, Brisa?" },
      { who: "Brisa", line: "This is *our* family photo album. *My* mom and *her* sisters made it. *Their* photos are from the 1990s!" },
      { who: "Teacher", line: "Wonderful. And Kevin, what do you have?" },
      { who: "Kevin", line: "It's a cap. It's *my* brother's favorite team. *His* team is the Pumas, and *their* colors are blue and gold." },
      { who: "Teacher", line: "And why is it special?" },
      { who: "Kevin", line: "*My* brother lives in Canada now. *His* cap reminds me of him." }
    ]
  },

  objectives: [
    "I can use *my, your, his, her, its, our* and *their* correctly.",
    "I can describe objects: color, size, shape and material.",
    "I can explain why an object is special to me.",
    "I can tell the difference between *its* and *it's*, and *their* and *they're*."
  ],

  explanation: {
    vocabTitle: "Objects and materials",
    vocab: [
      { word: "necklace", icon: "📿" }, { word: "bracelet", icon: "💫" }, { word: "ring", icon: "💍" },
      { word: "watch", icon: "⌚" }, { word: "cap", icon: "🧢" }, { word: "photo album", icon: "📔" },
      { word: "stuffed toy", icon: "🧸" }, { word: "guitar", icon: "🎸" }, { word: "skateboard", icon: "🛹" },
      { word: "made of wood", icon: "🪵" }, { word: "made of metal", icon: "🔩" }, { word: "made of leather", icon: "👜" },
      { word: "made of plastic", icon: "🧴" }, { word: "made of cotton", icon: "👕" }, { word: "made of glass", icon: "🫙" }
    ],
    grammar: [
      {
        title: "Possessive adjectives",
        head: ["Subject", "Possessive adjective", "Example"],
        rows: [
          ["I", "*my*", "This is *my* watch."],
          ["you", "*your*", "Is this *your* cap?"],
          ["he", "*his*", "Kevin loves *his* brother's cap."],
          ["she", "*her*", "Brisa shows *her* photo album."],
          ["it", "*its*", "The guitar is old. *Its* sound is beautiful."],
          ["we", "*our*", "This is *our* family album."],
          ["they", "*their*", "The Pumas are great. *Their* colors are blue and gold."]
        ],
        note: "A possessive adjective always goes **before a noun** and never changes for plural: *my books* (not *mys books*)."
      },
      {
        title: "Describing objects",
        head: ["Opinion", "Size", "Age", "Color", "Material", "Noun"],
        rows: [
          ["*beautiful*", "*small*", "*old*", "*silver*", "", "necklace"],
          ["*cool*", "*big*", "*new*", "*black*", "*leather*", "jacket"],
          ["*favorite*", "", "*old*", "*brown*", "*wooden*", "guitar"]
        ],
        note: "Ask *What color is it? How big is it? What's it made of?* Answer: *It's made of wood / metal / plastic.*"
      },
      {
        title: "Don't confuse them!",
        head: ["Possessive", "Contraction"],
        rows: [
          ["*its* = belongs to it: The dog loves *its* toy.", "*it's* = it is: *It's* my dog."],
          ["*their* = belongs to them: *Their* house is big.", "*they're* = they are: *They're* my cousins."],
          ["*your* = belongs to you: Is this *your* pen?", "*you're* = you are: *You're* late!"]
        ]
      }
    ],
    watchOut: [
      ["Ana loves his cat.", "Ana loves her cat."],
      ["The dog is playing with it's ball.", "The dog is playing with its ball."],
      ["Their my best friends.", "They're my best friends."],
      ["I have a jacket black.", "I have a black jacket."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with a possessive adjective.",
      items: [
        "Mariana always wears [[her]] silver bracelet.",
        "My parents love [[their]] old car.",
        "Diego, is this [[your]] sketchbook?",
        "My cat sleeps in [[its]] small bed."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three more students present their special objects in the English club video. Listen and take notes.",
      title: "More special objects",
      script: [
        { who: "Paulina", line: "Hi! My object is this necklace. It's small and it's made of silver. It was my great-grandmother's. Her name was Rosa, and her initials are on the back. My mom gave it to me on my fifteenth birthday." },
        { who: "Ernesto", line: "Hello. This is my skateboard. It's old and a little broken, but it's my favorite thing. My friends and I painted it. Our names are on it, in red and green. Its wheels are new, I changed them last month." },
        { who: "Lin", line: "Hi, everyone. My object is a book. It's a big book of Chinese fairy tales. My grandparents live in Shanghai, and their gift arrived by mail when I was six. Its cover is red and gold. My little brother and I still read it together. It's our favorite book." }
      ],
      activities: [
        {
          type: "sort", title: "Whose object?",
          prompt: "Listen. Put each detail under the right student.",
          bins: ["Paulina", "Ernesto", "Lin"],
          items: [
            { text: "made of silver", bin: 0 }, { text: "her great-grandmother's", bin: 0 }, { text: "a birthday gift from her mom", bin: 0 },
            { text: "old and a little broken", bin: 1 }, { text: "painted with his friends", bin: 1 }, { text: "new wheels", bin: 1 },
            { text: "a gift from Shanghai", bin: 2 }, { text: "red and gold cover", bin: 2 }, { text: "reads it with her brother", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Listen for the possessives",
          prompt: "Listen again and complete with a possessive adjective.",
          bank: true,
          items: [
            "It was [[my]] great-grandmother's.",
            "[[Her]] name was Rosa.",
            "[[Our]] names are on it, in red and green.",
            "[[Its]] wheels are new.",
            "My grandparents live in Shanghai, and [[their]] gift arrived by mail."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a school magazine about objects and memories.",
      title: "The things we keep",
      text: [
        { body: "Why do we keep old objects? Scientists say that objects help us remember people and important moments. For many people, a simple thing like a ticket or a shirt has a big story." },
        { body: "Mr. Salinas, a teacher at BUAP, keeps his father's old watch in his desk. \"Its glass is broken and it doesn't work,\" he says, \"but my father used it every day for forty years. It's a part of him.\"" },
        { body: "Fernanda and Iván, two students, keep a box under their bed. In it there are cinema tickets, a dry flower and photos from their first year together. \"Our box is our history,\" says Fernanda." },
        { body: "Not everybody keeps things. Lorena, 17, says: \"I don't keep objects. My memories are in my phone. My photos and my messages are my treasure.\" What about you? What's your special object?" }
      ],
      activities: [
        {
          type: "match", title: "Who says it?",
          prompt: "Match each idea with the person or people.",
          pairs: [
            ["His father's watch doesn't work.", "Mr. Salinas"],
            ["Their box has tickets and photos.", "Fernanda and Iván"],
            ["Her memories are digital.", "Lorena"],
            ["Objects help us remember.", "Scientists"]
          ]
        },
        {
          type: "rewrite", title: "Correct the possessives",
          prompt: "Each sentence about the article has a mistake. Write the correct sentence.",
          items: [
            { q: "Mr. Salinas keeps her father's watch.", a: ["Mr. Salinas keeps his father's watch."] },
            { q: "The watch is old. It's glass is broken.", a: ["The watch is old. Its glass is broken.", "Its glass is broken."] },
            { q: "Fernanda and Iván keep a box under his bed.", a: ["Fernanda and Iván keep a box under their bed."] },
            { q: "Lorena says her memories are in hers phone.", a: ["Lorena says her memories are in her phone."] },
            { q: "Fernanda says: \"Their box is our history.\"", a: ["Fernanda says: \"Our box is our history.\"", "Our box is our history."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing objects, then write about your own special object.",
      activities: [
        {
          type: "tiles", title: "Describe the objects",
          items: [
            { a: "She has a beautiful silver necklace." },
            { a: "My brother has an old wooden guitar." },
            { a: "What is your bracelet made of?" },
            { a: "Their new car is very big." },
            { a: "The cat is playing with its toy." }
          ]
        },
        {
          type: "gap", title: "its / it's · their / they're · your / you're",
          prompt: "Choose the correct word and write it.",
          items: [
            "[[It's]] my favorite cap. (its / it's)",
            "The phone is new, but [[its]] screen is broken. (its / it's)",
            "[[They're]] my cousins from Monterrey. (their / they're)",
            "My neighbors love [[their]] dog. (their / they're)",
            "Is this [[your]] umbrella? (your / you're)",
            "[[You're]] very lucky! (your / you're)"
          ]
        },
        {
          type: "write", title: "My special object",
          prompt: "Write about a special object. Describe it (color, size, material, age), say where it's from or whose it was, and explain why it's important to you.",
          minWords: 60, maxWords: 90,
          model: "My special object is a small wooden box. It's brown and it's very old. Its lid has flowers on it. It was my grandmother's. She kept her earrings in it. Now I keep my favorite photos and letters from my friends in it. When I open it, I remember my grandmother and her house in Oaxaca. It's my treasure!",
          bank: ["My special object is", "It's made of", "Its … is / are", "It was my …'s", "His / Her / Their", "I keep it in", "It's important to me because"],
          checklist: [
            "I described **color, size and material**.",
            "I used at least **three** different possessive adjectives.",
            "I put adjectives **before** the noun.",
            "I checked *its / it's* and *their / they're*."
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
            "This is my favorite backpack.",
            "Its color is dark blue.",
            "It's made of leather.",
            "What's it made of?",
            "Is this your phone or his?",
            "Their house is near the park."
          ]
        },
        {
          type: "speak", title: "The story of my object",
          prompt: "Record yourself for about one minute, like the students in the English club video. Show or describe your special object and tell its story.",
          language: ["This is my…", "It's made of…", "It was my …'s.", "Its … is…", "It's special because…", "When I see it, I remember…"],
          seconds: 75,
          checklist: ["describe the object?", "use at least three possessive adjectives?", "explain why it's special?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *my, your, his, her, its, our, their* correctly.", review: "Explanation: possessive adjectives" },
    { can: "I can choose *his* or *her* for men and women correctly.", review: "Reading activity 2" },
    { can: "I can describe an object's color, size and material.", review: "Explanation: describing objects; Writing activity 1" },
    { can: "I can tell the difference between *its / it's* and *their / they're*.", review: "Explanation: don't confuse them; Writing activity 2" },
    { can: "I can ask *What's it made of?* and *Whose is it?*", review: "Speaking activity 1 (listen and repeat)" },
    { can: "I can talk or write about a special object and why it's important.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
