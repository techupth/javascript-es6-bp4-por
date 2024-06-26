let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
//Declare new variable to add 
let updatedHobbie = [
  ...studentProfile.hobbies,
  ...additionalHobbies
];

let newStudentProfile = {
  ...studentProfile,
  hobbies : updatedHobbie //assign value to hobbies
}

console.log(newStudentProfile);
