import { User } from "../interfaces/User";

export const USERS: User[] = [
    {
      id: 1,
      firstname: 'Alex',
      lastname: 'Doe',
      age: 28,
      company: 'Coherent',
      department: 'frontend',
      email: 'acc1@gmail.com',
      gender: 'Male',
      active: true
    },
    {
      id: 2,
      firstname: 'Maria',
      lastname: 'Gomez',
      age: 31,
      company: 'Apple',
      department: '',
      email: 'acc2@gmail.com',
      gender: 'Female',
      active: true
    },
    {
      id: 3,
      firstname: 'Joe',
      lastname: 'Benson',
      age: 22,
      company: 'Google',
      department: '',
      email: 'acc3@gmail.com',
      gender: 'Male',
      active: true
    },
]