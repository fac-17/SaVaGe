const bcrypt = require('bcrypt');

// bcrypt.genSalt(10, (err, res) => {
//     console.log(res);
// })

bcrypt.compare( 'ciao', '$2b$10$53jDqmY1lhO2JEiUem6pb.HJ6yc7drE8U7mR1KKYT8Cq/qKUz3fD.', (error, res) => {

    console.log('compare hash result = ', res);

  });


  bcrypt.hash(dataObject.password, process.env.SALT, function(err, hash) {
    console.log('password hash = ', hash)