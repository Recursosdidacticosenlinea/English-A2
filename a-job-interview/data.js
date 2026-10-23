window.UNIT = {
  slug: "a-job-interview",
  number: 32,
  title: "A Job Interview",
  level: "A2",
  minutes: 50,
  speakers: { "Interviewer": "f", "Diego": "m", "Host": "m", "Paulina": "f", A: "f", B: "m" },
  focus: ["interview questions and answers", "present perfect for experience: I've worked as…", "past simple for details: I worked there for two years", "skills: I'm good at… / I can…", "Why do you want this job?"],

  presentation: {
    scene: "💼🤝📄👔",
    situation: "Diego is 22. He's applying for a part-time job as a tour guide in Puebla. This is his interview.",
    warmup: {
      prompt: "What questions do interviewers usually ask? Choose all.",
      options: ["Tell me about yourself.", "Have you ever worked in…?", "What are your strengths?", "Why do you want this job?", "Can you speak English?", "When can you start?", "What are your weaknesses?", "Do you have any questions?", "Where do you see yourself in five years?", "Are you good at teamwork?"],
      response: "Good! In this unit you'll practice answering interview questions in English."
    },
    dialogueTitle: "The interview",
    dialogue: [
      { who: "Interviewer", line: "Good morning, Diego. *Tell me about yourself*." },
      { who: "Diego", line: "I'm 22 and I'm studying history at BUAP. I love my city and I enjoy meeting people." },
      { who: "Interviewer", line: "*Have you ever worked* with tourists?" },
      { who: "Diego", line: "Yes, *I have*. *I worked* at a hotel reception last summer, *for three months*." },
      { who: "Interviewer", line: "Great. *What are your strengths*?" },
      { who: "Diego", line: "*I'm good at* explaining things, and *I'm very organized*. *I can* speak English and a little French." },
      { who: "Interviewer", line: "*Why do you want this job*?" },
      { who: "Diego", line: "*Because* I'd like to share Puebla's history with visitors, and *I want to improve* my English." },
      { who: "Interviewer", line: "Excellent. *When can you start*?" },
      { who: "Diego", line: "Next Monday, if that's OK." }
    ]
  },

  objectives: [
    "I can answer common interview questions.",
    "I can talk about my experience with the present perfect and past simple.",
    "I can describe my skills and strengths.",
    "I can explain why I want a job."
  ],

  explanation: {
    vocabTitle: "Jobs and skills",
    vocab: [
      { word: "apply for", icon: "📝" }, { word: "CV / résumé", icon: "📄" }, { word: "experience", icon: "🧭" },
      { word: "skills", icon: "🛠️" }, { word: "strengths", icon: "💪" }, { word: "weaknesses", icon: "🔻" },
      { word: "organized", icon: "🗂️" }, { word: "hard-working", icon: "⚙️" }, { word: "reliable", icon: "🤞" },
      { word: "a team player", icon: "🤝" }, { word: "flexible", icon: "🔄" }, { word: "punctual", icon: "⏰" },
      { word: "customer service", icon: "🎧" }, { word: "part-time / full-time", icon: "🕒" }, { word: "start date", icon: "📅" }
    ],
    grammar: [
      {
        title: "Talking about experience",
        head: ["Present perfect (general experience)", "Past simple (details, finished time)"],
        rows: [
          ["*Have you ever worked* with tourists?", "*Where did you work?*"],
          ["Yes, I *have*. I*'ve worked* in a hotel.", "I *worked* at Hotel Colonial *last summer*."],
          ["I*'ve never managed* a team.", "I *was* a waiter *for two years*."]
        ]
      },
      {
        title: "Describing skills",
        head: ["Structure", "Example"],
        rows: [
          ["*I'm good at* + noun / -ing", "I'm good at *solving problems*."],
          ["*I can* + verb", "I *can* speak English and French."],
          ["*I'm* + adjective", "I'm *organized* and *reliable*."],
          ["*I have experience in / with*", "I *have experience with* customers."],
          ["*I'd like to* + verb (reasons)", "I'd like to *improve* my English."]
        ]
      }
    ],
    watchOut: [
      ["I have worked in a hotel last summer.", "I worked in a hotel last summer."],
      ["I'm good in English.", "I'm good at English."],
      ["I have 22 years.", "I'm 22."],
      ["I want this job because the money.", "I want this job because the salary is good."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Write the present perfect or the past simple.",
      items: [
        "[[Have]] you ever worked in a restaurant?",
        "Yes, I [[have]]. I [[worked]] at La Casona in 2023. (work)",
        "I [['ve never managed|have never managed]] a team. (never / manage)",
        "I [[was]] a receptionist for six months. (be)",
        "I'm good [[at]] solving problems."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A career advisor on a podcast gives tips for job interviews. Listen.",
      title: "Podcast: Ace your interview",
      script: [
        { who: "Host", line: "Paulina, you've interviewed hundreds of young people. What's the most important tip?" },
        { who: "Paulina", line: "Prepare! Read about the company before the interview. Many candidates don't know anything about the job." },
        { who: "Host", line: "What about the question 'Tell me about yourself'?" },
        { who: "Paulina", line: "Keep it short — about one minute. Talk about your studies, your experience and one or two strengths." },
        { who: "Host", line: "And if you don't have experience?" },
        { who: "Paulina", line: "Talk about volunteering, school projects or helping in a family business. That's experience too!" },
        { who: "Host", line: "Any other tips?" },
        { who: "Paulina", line: "Arrive ten minutes early, smile and look at the interviewer. And at the end, always ask a question, like 'What does a typical day look like?'" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen. Are the sentences true or false?",
          items: [
            { s: "Paulina says you should read about the company.", a: true },
            { s: "Your answer to 'Tell me about yourself' should be five minutes long.", a: false },
            { s: "Volunteering can count as experience.", a: true },
            { s: "You should arrive exactly on time, not early.", a: false },
            { s: "Paulina says you should ask a question at the end.", a: true }
          ]
        },
        {
          type: "gap", title: "Complete the tips",
          prompt: "Write one word.",
          items: [
            "Read about the [[company]] before the interview.",
            "Talk about your studies, experience and [[strengths]].",
            "Arrive [[ten|10]] minutes early.",
            "Always ask a [[question]] at the end."
          ]
        }
      ]
    },

    reading: {
      intro: "Read two job ads and a short application.",
      title: "Jobs for students",
      text: [
        { author: "Tour guide (part-time)", body: "Puebla Walking Tours is looking for friendly guides. You must speak English. Experience with tourists is an advantage. Weekends only. Start date: next month." },
        { author: "Café assistant", body: "Café Aroma needs a reliable assistant for morning shifts (7–12). No experience necessary — we train you! You have to be punctual and good at teamwork." },
        { author: "Application from Ana", body: "Dear Café Aroma, I'd like to apply for the café assistant job. I've never worked in a café, but I've helped in my family's bakery for three years. I'm punctual and I enjoy working with people. I can start next week. Best regards, Ana Torres" }
      ],
      activities: [
        {
          type: "match", title: "Find the information",
          prompt: "Match the question with the answer.",
          pairs: [
            ["Which job is only on weekends?", "tour guide"],
            ["Which job has morning shifts?", "café assistant"],
            ["Where has Ana worked?", "in her family's bakery"],
            ["When can Ana start?", "next week"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "The café needs people with experience.", a: false },
            { s: "Ana has worked in a café before.", a: false },
            { s: "Ana says she is punctual.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice interview answers, then write a job application.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Have you ever worked with children?" },
            { a: "I worked at a hotel last summer." },
            { a: "I'm good at solving problems." },
            { a: "Why do you want this job?" },
            { a: "When can you start?" }
          ]
        },
        {
          type: "match", title: "Questions and answers",
          prompt: "Match the interview question with a good answer.",
          pairs: [
            ["What are your strengths?", "I'm organized and good at teamwork."],
            ["Have you ever worked in a shop?", "Yes, I worked in a bookstore for a year."],
            ["Why do you want this job?", "Because I love working with people."],
            ["Do you have any questions?", "Yes, what does a typical day look like?"]
          ]
        },
        {
          type: "write", title: "My job application",
          prompt: "Choose one of the jobs from the reading (or a job you want) and write a short application email. Introduce yourself, describe your experience (present perfect + past simple), your skills, why you want the job and when you can start.",
          minWords: 70, maxWords: 120,
          model: "Dear Puebla Walking Tours, I'd like to apply for the tour guide job. I'm 21 and I'm studying tourism at BUAP. I've worked with tourists before: last year I worked at a hostel reception for six months. I speak English and a little Italian, and I'm good at telling stories. I'd love this job because I'm proud of my city's history. I can start next month. Best regards, Diego Ramírez",
          bank: ["I'd like to apply for…", "I'm … and I'm studying…", "I've worked…", "Last year I worked…", "I'm good at…", "I can…", "I'd love this job because…", "I can start…"],
          checklist: [
            "I used the present perfect for experience.",
            "I used the past simple for details.",
            "I described at least two skills.",
            "I said why I want the job and when I can start."
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
            "Tell me about yourself.",
            "Have you ever worked with tourists?",
            "I worked at a hotel last summer.",
            "I'm good at explaining things.",
            "I'd like to improve my English.",
            "When can you start?"
          ]
        },
        {
          type: "speak", title: "My interview answers",
          prompt: "Record your answers to four interview questions: Tell me about yourself. Have you ever worked before? What are your strengths? Why do you want this job?",
          language: ["I'm … and I'm studying / working…", "I've worked… / I've never worked…", "Last year I…", "I'm good at…", "I'm organized / reliable…", "I'd like this job because…"],
          seconds: 90,
          checklist: ["answer all four questions?", "use the present perfect and past simple?", "describe your skills?", "speak clearly for about a minute and a half?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can answer common interview questions.", review: "Presentation; Writing activity 2" },
    { can: "I can talk about my experience with the present perfect.", review: "Explanation: talking about experience" },
    { can: "I can give details with the past simple.", review: "Quick check" },
    { can: "I can describe my skills and strengths.", review: "Explanation: describing skills" },
    { can: "I can understand job ads and interview tips.", review: "Listening and Reading" },
    { can: "I can write a job application email.", review: "Writing activity 3" }
  ]
};
