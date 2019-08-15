const bcrypt = require('bcrypt');

// bcrypt.genSalt(10, (err, res) => {
//     console.log(res);
// })

bcrypt.compare('$2b$10$53jDqmY1lhO2JEiUem6pb.HJ6yc7drE8U7mR1KKYT8Cq/qKUz3fD.', '$2b$10$53jDqmY1lhO2JEiUem6pb.HJ6yc7drE8U7mR1KKYT8Cq/qKUz3fD.', (error, res) => {

    console.log('compare hash result = ', res);

  });