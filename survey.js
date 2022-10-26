const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  const name = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    const hobbies = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      const music = answer;
      rl.question('Which meal is your favourite? ', (answer) => {
        const faveMeal = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          const faveFood = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            const faveSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              const superpower = answer;
              console.log(`Meet ${name}. ${name} enjoys doing ${hobbies}, while listenig to ${music}. ${name} loves to eat ${faveMeal}, especially ${faveFood}. ${name} is a big fan of ${faveSport}. ${name}'s superpower according to them: ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});