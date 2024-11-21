(function () {
  const consoleLog = console.log;

  console.lol = function (...args) {
    const laughsEmojis = ["😂😂😂", "🤣🤣🤣", "😆😆😆", "😹😹😹", "😜😜😜", "🤣🤣🤣🤣🤣"];
    const randomLaughEmoji =
      laughsEmojis[Math.floor(Math.random() * laughsEmojis.length)];

    const laughs = [
      "Ahahaha",
      "Hahahaha",
      "Lol!!!",
      "Lmao!!!",
      "Ehehehe",
      "Hahaha",
      "Uahahaahahah",
      "🎅 Ohohohoho",
      "Uahaha",
      "Aahahah WTF!",
    ];

    const randomLaugh = laughs[Math.floor(Math.random() * laughs.length)];

    consoleLog(randomLaugh, ...args, randomLaughEmoji);
  };
})();
