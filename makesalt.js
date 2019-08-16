const bcrypt = require('bcrypt');

// bcrypt.genSalt(10, (err, res) => {
//     console.log(res);
// })

bcrypt.compare('ciao', "$2b$10$iYJ0/hBnkJhNFWZuBTmma..9LfCAylv8Pel9Xjx3jS3IIzmfHneBm", (error, res) => {
  console.log('compare hash result = ', res);
});

bcrypt.hash('ciao', "$2b$10$iYJ0/hBnkJhNFWZuBTmma.", (err, hash) => {
  console.log('password hash = ', hash)
})

// bump = "$2b$10$iYJ0/hBnkJhNFWZuBTmma.Yxwugo7uTXn/cp9sxzEG4HKI4D72fcu"
// poo666 = "$2b$10$iYJ0/hBnkJhNFWZuBTmma.RcgZHxWjFm.rVEm3Fz1kaKV4/Zz76HC"
// ciao = "$2b$10$iYJ0/hBnkJhNFWZuBTmma..9LfCAylv8Pel9Xjx3jS3IIzmfHneBm"
// butts = "$2b$10$iYJ0/hBnkJhNFWZuBTmma.rdnUme6fFMbFk/vzYaz2wv6HzrLH7dy"
