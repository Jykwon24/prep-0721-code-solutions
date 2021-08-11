var person = {
  firstName: 'Zenitsu',
  lastName: 'Agatsuma',
  hobby: 'Cowardice',
  job: 'Demon Slayer',
  previousJob: 'Full Time Coward'
};

var firstName = person.firstName;

var lastName = person.lastName;

// eslint-disable-next-line no-unused-vars
var hobby = person['hobby'];
console.log(person);

var fullName = firstName + ' ' + lastName;
console.log("The person's name is:", fullName);

var job = person.job;
console.log("This person's current job is:", job);

var previousJob = person.previousJob;
console.log("This person's previous job was:", previousJob);

console.log('The complete person object:', person);
