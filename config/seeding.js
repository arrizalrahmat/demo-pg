const db = require('./config');

const query = `INSERT INTO "Employees" ("fullName", "position", "salary") VALUES 
('Arrizal Rahmat Kurniawan', 'Frontend Developer', 10),
('Rizky Adrian', 'Backend Developer', 20),
('Dhafin', 'Backend Developer', 15),
('Rosa', 'Product Manager', 25) RETURNING *;
`;

db.query(query, (err, res) => {
  if (err) console.log(err.stack);
  else {
    console.log(res);
    db.end();
  }
});
