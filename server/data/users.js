import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Toni Miller',
    email: 'toni@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sara Thompson',
    email: 'sara@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jay Amick',
    email: 'jay@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
