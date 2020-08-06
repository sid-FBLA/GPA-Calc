classGrades = new Array(8);
var check = true;

function askClass() {
  for(let i = 0; i < 8; i += 1) {
    if (check === true) {
      classGrades[i] = new Array(1);
      console.log(classGrades);
      var period = (i + 1).toString();
      console.log(period);
      var newClass = prompt("Class " + period + " Difficulty(CP, HONORS OR AP *Type in caps*)");
      classGrades[i][0] = newClass;
      var newClassGrade = prompt("What is your percentage in Class " + period);
      classGrades[i][1] = newClassGrade.toUpperCase();
      classGrades[i][1] = parseInt(classGrades[i][1]);
      if (i === 6) {
        const value = prompt('Do you have more classes, if you do type YES, if not type NO');
        if (value.toUpperCase() === 'NO') {
          check === false;
          classGrades.pop();
          return false;
        }
      }
    }
  }
}

askClass();
console.log(classGrades);

const convertToLetter = classGrades.map(function(grade) {
 return grade.map(function(letter) {
  if(typeof letter == 'number') {
    console.log(letter)
    if(letter > 93) {
     return letter = 'A';
    } else if(letter >= 90) {
      return letter = 'A-';
    } else if(letter >= 87) {
      return letter = 'B+';
    } else if(letter >= 83) {
      return letter = 'B';
    } else if(letter >= 80) {
      return letter = 'B-';
    } else if(letter >= 77) {
      return letter = 'C+';
    } else if(letter >= 73) {
      return letter = 'C';
    } else if(letter >= 70) {
      return letter = 'C-';
    } else if(letter >= 67) {
      return letter = 'D+';
    } else if(letter >= 63) {
      return letter = 'D';
    } else if(letter >= 60) {
      return letter = 'D-';
    } else if(letter < 60) {
      return letter = 'F';
    }
  } else {
    console.log('returning grade');
    return letter;
  }
 });
});

console.log(convertToLetter);
console.log(convertToLetter[0][1])
const APindex = new Array();
const HONORSindex = new Array();
const CPindex = new Array();

const classGPA = convertToLetter.map(function(subarray, index) {
  console.log(index);
  return subarray.map(function(GPA, i) {
    console.log(i);
    if (i === 0) {
      if(GPA.toUpperCase() == "AP") {
        APindex.push(index);
      } else if(GPA.toUpperCase() == "HONORS") {
        HONORSindex.push(index);
      } else if(GPA.toUpperCase() == "CP") {
        CPindex.push(index);
      }
    }
    if (i === 1) {
      console.log(index);
      console.log(APindex[index]);
      if(index == APindex[index]) {
        console.log(convertToLetter[index][1]);
        if (convertToLetter[APindex[index]][1] === 'A') {
          return GPA = 5.00;
        } else if(convertToLetter[APindex[index]][1] === 'A-') {
          return GPA = 4.66;
        } else if(convertToLetter[APindex[index]][1] === 'B+') {
          return GPA = 4.33;
        } else if(convertToLetter[APindex[index]][1] === 'B') {
          return GPA = 4.00;
        } else if(convertToLetter[APindex[index]][1] === 'B-') {
          return GPA = 3.66;
        } else if(convertToLetter[APindex[index]][1] === 'C+') {
          return GPA = 3.33;
        } else if(convertToLetter[APindex[index]][1] === 'C') {
          return GPA = 3.00;
        } else if(convertToLetter[APindex[index]][1] === 'C-') {
          return GPA = 2.66;
        } else if(convertToLetter[APindex[index]][1] === 'D+') {
          return GPA = 2.33;
        } else if(convertToLetter[APindex[index]][1] === 'D') {
          return GPA = 2.0;
        } else if(convertToLetter[APindex[index]][1] === 'D-') {
          return GPA = 1.66;
        } else if(convertToLetter[APindex[index]][1] === 'F') {
          return GPA = 0;
        }
      }
      if(index == HONORSindex[index]) {
        if (convertToLetter[HONORSindex[index]][1] === 'A') {
          return GPA = 4.50;
        } else if(convertToLetter[HONORSindex[index]][1] === 'A-') {
          return GPA = 4.16;
        } else if(convertToLetter[HONORSindex[index]][1] === 'B+') {
          return GPA = 3.83;
        } else if(convertToLetter[HONORSindex[index]][1] === 'B') {
          return GPA = 3.50;
        } else if(convertToLetter[HONORSindex[index]][1] === 'B-') {
          return GPA = 3.16;
        } else if(convertToLetter[HONORSindex[index]][1] === 'C+') {
          return GPA = 2.88;
        } else if(convertToLetter[HONORSindex[index]][1] === 'C') {
          return GPA = 2.50;
        } else if(convertToLetter[HONORSindex[index]][1] === 'C-') {
          return GPA = 2.16;
        } else if(convertToLetter[HONORSindex[index]][1] === 'D+') {
          return GPA = 1.83;
        } else if(convertToLetter[HONORSindex[index]][1] === 'D') {
          return GPA = 1.50;
        } else if(convertToLetter[HONORSindex[index]][1] === 'D-') {
          return GPA = 1.16;
        } else if(convertToLetter[HONORSindex[index]][1] === 'F') {
          return GPA = 0;
        }
      }
      if(index == CPindex[index]) {
        if (convertToLetter[CPindex[index]][1] === 'A') {
          return GPA = 4.00;
        } else if(convertToLetter[CPindex[index]][1] === 'A-') {
          return GPA = 3.66;
        } else if(convertToLetter[CPindex[index]][1] === 'B+') {
          return GPA = 3.33;
        } else if(convertToLetter[CPindex[index]][1] === 'B') {
          return GPA = 3.00;
        } else if(convertToLetter[CPindex[index]][1] === 'B-') {
          return GPA = 2.66;
        } else if(convertToLetter[CPindex[index]][1] === 'C+') {
          return GPA = 2.33;
        } else if(convertToLetter[CPindex[index]][1] === 'C') {
          return GPA = 2.00;
        } else if(convertToLetter[CPindex[index]][1] === 'C-') {
          return GPA = 1.66;
        } else if(convertToLetter[CPindex[index]][1] === 'D+') {
          return GPA = 1.33;
        } else if(convertToLetter[CPindex[index]][1] === 'D') {
          return GPA = 1.00;
        } else if(convertToLetter[CPindex[index]][1] === 'D-') {
          return GPA = 0.66;
        } else if(convertToLetter[CPindex[index]][1] === 'F') {
          return GPA = 0;
        }
      }
    }
    // if (i === 0) {
    //   return GPA;
    // }
  });
});

console.log(APindex);
console.log(HONORSindex);
console.log(CPindex);
console.log(APindex.length);

console.log(classGPA)
