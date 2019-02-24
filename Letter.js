var Letter = function (char) {
    this.char = char;
    this.guessed = false;
    this.returnChar = function () {
        if (this.guessed) {
            return this.char;
        } else {
            return '_';
        }
    };
    this.checkChar = function (character) {
        if (this.char === character) {
            this.guessed = true;
        }
    };
};

// var Classroom = function(professor, roomNumber) {
//     this.students = [];
//     this.studentCount = function(){
//         console.log(this.students.length);
//     };
//     this.professor = professor;
//     this.roomNumber = roomNumber;
//     this.addStudent = function(name, subject, GPA) {
//         this.students.push(new Student(name, subject, GPA));
//     };
// };

module.exports = Letter;