const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience) {
    super(firstName, lastName, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((total, teacher) => total + teacher.yearsOfExperience, 0);
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
