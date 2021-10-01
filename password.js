

// function greeting(name){
//     console.log(`Hello, ${name}! What is your password?`)
// }
// greeting('')

// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////

// function passwordValidator(attemptedPassword){
//     if(attemptedPassword.length >= 10){
//         console.log('Success!')
//     } else {
//         console.log('Failure to validate')
//     }
    
// }
// passwordValidator('')



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Hello, What is your name?', name => {
    console.log(`Hey there ${name}!`);
    // readline.close();
  
  readline.question(`What is your password?`, password => {
        if(password.length >= 10){
            console.log(`success! password validated!`)
    } else {
        console.log(`Password could not be validated. Goodbye.`)
        readline.close();
    }
  })
  });
