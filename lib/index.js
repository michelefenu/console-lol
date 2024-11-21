(function () {
  const originalLog = console.log;

  console.lol = function (...args) {
    const laughsEmojis = ["😂", "🤣", "😆", "😹", "😜"];
    const randomLaughEmoji =
      laughsEmojis[Math.floor(Math.random() * laughsEmojis.length)];

    const laughs = [
      "Ahahaha",
      "Hahahaha",
      "Lol",
      "Lmao",
      "Ehehehe",
      "Hahaha",
      "UHAHAHAH",
      "🎅 Ohohohoho",
      "uAHAHAHAH",
      "Aahahah WTF!",
    ];
    
    const randomLaugh = laughs[Math.floor(Math.random() * laughs.length)];

    originalLog(randomLaugh, ...args, randomLaughEmoji);
  };
})();
