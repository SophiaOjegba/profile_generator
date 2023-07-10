const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What's your name? Nicknames are also acceptable ", (name) => {
    console.log(`Your Name is: ${name}`);
      rl.question("What's an activity you like doing? ", (activity) => {
        console.log(`Best activity: ${activity}`);
          rl.question('What do you listen to while doing that? ', (music) => {
            console.log(`Your goto is ${music}`);
              rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favourite_Meal) => {
                console.log(`Your Favorite meal is ${favourite_Meal}`);
                  rl.question("What's your favourite thing to eat for that meal? ", (meal) => {
                    console.log(`Favorite food: ${meal}`);
                      rl.question('Which sport is your absolute favourite? ', (sport) => {
                        console.log(`Favorite Sport: ${sport}`);
                          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
                            console.log(`Yor superpower is: ${superpower}`);
                            rl.close();
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
 
