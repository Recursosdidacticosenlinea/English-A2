window.UNIT = {
  slug: "at-the-doctor",
  number: 23,
  title: "At the Doctor's",
  level: "A2",
  minutes: 50,
  speakers: { "Doctor": "m", "Camila": "f", "Receptionist": "f", "Mr. Gómez": "m", "Pharmacist": "f", A: "f", B: "m" },
  focus: ["symptoms: a sore throat, a temperature, dizzy", "How long have you had…? since / for", "have to / don't have to for instructions", "making an appointment", "medicine instructions: twice a day, after meals"],

  presentation: {
    scene: "🩺🤒💊📋",
    situation: "Camila has felt sick for three days. She goes to see a doctor at the university health center.",
    warmup: {
      prompt: "Which symptoms do you know in English? Choose all.",
      options: ["a sore throat", "a cough", "a temperature", "a runny nose", "a headache", "a stomachache", "feel dizzy", "feel sick", "sneeze", "an allergy"],
      response: "Good! In this unit you'll learn to describe symptoms and understand a doctor's instructions."
    },
    dialogueTitle: "In the doctor's office",
    dialogue: [
      { who: "Doctor", line: "Good morning, Camila. What seems to be the problem?" },
      { who: "Camila", line: "*I've got a sore throat* and *a temperature*. And I feel very tired." },
      { who: "Doctor", line: "*How long have you had* these symptoms?" },
      { who: "Camila", line: "*Since* Monday. So, *for* three days." },
      { who: "Doctor", line: "Let me look… Your throat is very red. *It's an infection*. You *have to take* these antibiotics *twice a day*, *after meals*." },
      { who: "Camila", line: "*Do I have to stay* at home?" },
      { who: "Doctor", line: "Yes, you *have to rest* for two days. You *don't have to come* back unless you feel worse." },
      { who: "Camila", line: "Can I go to my English class on Friday?" },
      { who: "Doctor", line: "Probably. But you *have to finish* all the antibiotics, even if you feel better." }
    ]
  },

  objectives: [
    "I can describe my symptoms to a doctor.",
    "I can say how long I've had a problem with *for* and *since*.",
    "I can understand instructions with *have to / don't have to*.",
    "I can make a doctor's appointment."
  ],

  explanation: {
    vocabTitle: "Symptoms and treatment",
    vocab: [
      { word: "a sore throat", icon: "🗣️" }, { word: "a temperature / fever", icon: "🌡️" }, { word: "a cough", icon: "😷" },
      { word: "a runny nose", icon: "🤧" }, { word: "feel dizzy", icon: "😵" }, { word: "feel sick", icon: "🤢" },
      { word: "an allergy", icon: "🌼" }, { word: "an infection", icon: "🦠" }, { word: "a prescription", icon: "📋" },
      { word: "antibiotics", icon: "💊" }, { word: "syrup", icon: "🧴" }, { word: "an appointment", icon: "📅" },
      { word: "rest", icon: "🛌" }, { word: "twice a day", icon: "✌️" }, { word: "after meals", icon: "🍽️" }
    ],
    grammar: [
      {
        title: "Describing symptoms",
        head: ["Structure", "Example"],
        rows: [
          ["*I've got a* + symptom", "I've got *a sore throat / a temperature*."],
          ["*My* + body part + *hurts*", "My chest *hurts* when I cough."],
          ["*I feel* + adjective", "I feel *dizzy / sick / weak*."],
          ["*How long have you had…?*", "*Since* Monday. / *For* three days."]
        ]
      },
      {
        title: "Have to / don't have to",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*have to / has to* + verb", "it's necessary", "You *have to take* the pills twice a day."],
          ["*don't / doesn't have to*", "it's not necessary", "You *don't have to come* back."],
          ["*Do I have to…?*", "question", "*Do I have to stay* in bed?"],
          ["past: *had to*", "", "I *had to go* to the hospital last year."]
        ],
        note: "*Don't have to* = no es necesario. It doesn't mean *prohibited*."
      }
    ],
    watchOut: [
      ["I have a throat sore.", "I've got a sore throat."],
      ["I have this cough since three days.", "I've had this cough for three days."],
      ["She have to rest.", "She has to rest."],
      ["You don't have to smoke. (= prohibited)", "You mustn't smoke. / Don't smoke."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *have to, has to, don't have to* or *for / since*.",
      items: [
        "You [[have to]] take the medicine after meals.",
        "My brother [[has to]] stay in bed today.",
        "It's not serious. You [[don't have to|do not have to]] go to the hospital.",
        "I've had this headache [[since]] yesterday.",
        "She's had a cough [[for]] two weeks."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mr. Gómez calls the clinic to make an appointment. Then he goes to the pharmacy. Listen.",
      title: "An appointment and a prescription",
      script: [
        { who: "Receptionist", line: "Good morning, San José Clinic." },
        { who: "Mr. Gómez", line: "Hello. I'd like to make an appointment with Dr. Ramírez, please. I've had a bad cough for a week." },
        { who: "Receptionist", line: "Let me see. Is tomorrow at 4:30 OK?" },
        { who: "Mr. Gómez", line: "Yes, perfect. Do I have to bring anything?" },
        { who: "Receptionist", line: "Just your ID. You don't have to pay now. You can pay after the appointment." },
        { who: "Pharmacist", line: "Hello. Can I help you?" },
        { who: "Mr. Gómez", line: "Yes, I've got this prescription from Dr. Ramírez." },
        { who: "Pharmacist", line: "OK. This is a cough syrup. You have to take one spoon three times a day. And you shouldn't drink cold drinks." },
        { who: "Mr. Gómez", line: "Do I have to take it with food?" },
        { who: "Pharmacist", line: "No, you don't have to. But don't take it before you drive — it can make you sleepy." }
      ],
      activities: [
        {
          type: "gap", title: "Complete the notes",
          prompt: "Write one word or a number.",
          items: [
            "Symptom: a bad [[cough]] for a week",
            "Appointment: tomorrow at [[4:30]]",
            "Bring: your [[ID]]",
            "Syrup: one spoon [[three]] times a day",
            "Warning: it can make you [[sleepy]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again.",
          items: [
            { s: "Mr. Gómez has to pay before the appointment.", a: false },
            { s: "He has to take the syrup with food.", a: false },
            { s: "He shouldn't drink cold drinks.", a: true },
            { s: "He shouldn't drive after taking it.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the information sheet that comes with a medicine.",
      title: "FLUSTOP · Patient information",
      text: [
        { author: "What is it for?", body: "FLUSTOP helps with the symptoms of colds and flu: a temperature, a headache, a runny nose and a sore throat." },
        { author: "How do I take it?", body: "Adults have to take one tablet every eight hours. Children under 12 have to ask a doctor first. You don't have to take it with food, but drink a glass of water with each tablet." },
        { author: "Important", body: "Don't take more than three tablets a day. You have to stop taking FLUSTOP and see a doctor if you still have a temperature after three days. Keep it away from children." }
      ],
      activities: [
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Write short answers.",
          items: [
            { q: "How often do adults have to take it?", a: ["Every eight hours.", "every eight hours", "One tablet every eight hours."] },
            { q: "Do you have to take it with food?", a: ["No, you don't.", "No, you do not.", "No."] },
            { q: "What's the maximum number of tablets a day?", a: ["Three.", "three", "3", "Three tablets."] },
            { q: "Who has to ask a doctor first?", a: ["Children under 12.", "children under 12", "Children under twelve."] }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again.",
          items: [
            { s: "FLUSTOP is for a sore throat.", a: true },
            { s: "You have to drink milk with each tablet.", a: false },
            { s: "If you still have a temperature after three days, see a doctor.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice health language, then write a message to your teacher or boss.",
      activities: [
        {
          type: "rewrite", title: "How long?",
          prompt: "Write a sentence with *I've had… for / since…*",
          items: [
            { q: "a cough / Tuesday", a: ["I've had a cough since Tuesday.", "I have had a cough since Tuesday."] },
            { q: "a headache / two days", a: ["I've had a headache for two days.", "I have had a headache for two days."] },
            { q: "a sore throat / the weekend", a: ["I've had a sore throat since the weekend.", "I have had a sore throat since the weekend."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I've got a sore throat and a cough." },
            { a: "How long have you had this pain?" },
            { a: "You have to take one tablet twice a day." },
            { a: "You don't have to stay in bed." },
            { a: "I'd like to make an appointment, please." }
          ]
        },
        {
          type: "write", title: "Sick day message",
          prompt: "Write an email to your teacher or boss. Explain that you can't go to class or work. Describe your symptoms, say how long you've had them, and explain what the doctor said you have to and don't have to do.",
          minWords: 60, maxWords: 110,
          model: "Dear Ms. Reyes, I'm sorry, but I can't go to class this week. I've had a temperature and a bad cough since Sunday. I went to the doctor yesterday and she said it's bronchitis. I have to take antibiotics for seven days and I have to rest at home until Thursday. I don't have to go to the hospital, luckily. Could you send me the homework, please? Best regards, Camila",
          bank: ["Dear…,", "I'm sorry, but I can't…", "I've had … since / for…", "The doctor said…", "I have to…", "I don't have to…", "Could you…?", "Best regards,"],
          checklist: [
            "I described my symptoms.",
            "I used *I've had… for / since*.",
            "I used *have to* and *don't have to*.",
            "I wrote it as a polite email."
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
            "I've got a sore throat and a temperature.",
            "How long have you had these symptoms?",
            "I've had a cough for three days.",
            "You have to take these tablets twice a day.",
            "You don't have to come back.",
            "I'd like to make an appointment, please."
          ]
        },
        {
          type: "speak", title: "Phone the doctor",
          prompt: "Record yourself calling a clinic. Make an appointment, describe your symptoms, say how long you've had them, and ask two questions with *Do I have to…?*",
          language: ["I'd like to make an appointment.", "I've got…", "I've had it for / since…", "Do I have to bring…?", "Do I have to pay…?", "Thank you very much."],
          seconds: 75,
          checklist: ["describe symptoms?", "use *for / since*?", "ask *Do I have to…?*", "speak for about a minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe my symptoms.", review: "Explanation: describing symptoms" },
    { can: "I can say how long I've had a problem.", review: "Writing activity 1; Quick check" },
    { can: "I can understand *have to / don't have to* instructions.", review: "Explanation: have to; Reading" },
    { can: "I can make a doctor's appointment.", review: "Listening: an appointment" },
    { can: "I can understand medicine instructions.", review: "Reading: FLUSTOP" },
    { can: "I can write a sick-day email.", review: "Writing activity 3" }
  ]
};
