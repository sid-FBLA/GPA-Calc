window.addEventListener('DOMContentLoaded', (event) => {

  console.log(document.querySelector('button'));


  const extraInfo1 = document.querySelector("#extraInfo1");
  const extraInfo2 = document.querySelector("#extraInfo2");
  const form = document.querySelector('form');
  const remove = document.querySelector('#remove');
  const removeSemester = document.querySelector('#removeSemester')
  const add = document.querySelector('#add');
  const addSemester = document.querySelector('#addSemester');
  const semester = document.querySelector('#semester1');
  const row7 = document.querySelector('#appender');
  const rows = document.querySelectorAll('.row');
  const lastRow = rows[rows.length - 1];
  var lastRowClone = document.querySelector('#lastRow').cloneNode(true);
  const semester2Original = document.querySelector('#semester2');
  const semester2 = document.querySelector('#semester2').cloneNode(true);

  semester2Original.remove();

  console.log(lastRowClone);
  console.log(lastRow);
  console.log(extraInfo1);
  console.log(extraInfo2);

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }


  extraInfo1.setAttribute('title', 'Semester = 2.5, Full Year = 5, Course With Lab = 6');
  extraInfo2.setAttribute('title', 'Must be written as a NUMBER')

  const lastRowHeight = row7.offsetHeight;
  const semesterHeight = semester1.offsetHeight;

  console.log(lastRowHeight);
//Refactor

  removeSemester.addEventListener('click', function() {
    console.log('hi');
    setTimeout(function(){$('#semester2').remove();}, 225)
    $('#semester2').animate({height: 0}, 225);
  });

  addSemester.addEventListener('click', function(e) {
    console.log(e);
    insertAfter(semester2, semester1);
    $('#semester2').height(0).animate({height: semesterHeight}, 250);
    addSemester.style.display = 'none';
  })

  remove.addEventListener('click', function() {
    setTimeout(function(){$('#lastRow').remove();}, 225)
    $('#lastRow').animate({height: 0}, 250);
    remove.style.display = 'none';
    add.style.display = 'block';
  });

  add.addEventListener('click', function() {
    insertAfter(lastRowClone, row7);
    console.log(lastRowHeight);
    $('#lastRow').height(0).animate({height: lastRowHeight}, 250);
    add.style.display = 'none';
    remove.style.display = 'block';
  });

//End Refactor

  let localStorageItemLength = localStorage.length/4;
  console.log(localStorageItemLength);

  if(localStorageItemLength === 7) {
    $('#lastRow').remove();
    remove.style.display = 'none';
    add.style.display = 'block';
  };



  function preSelectOption(store) {
    for(let i = 0; i < localStorageItemLength; i += 1) {
      let classNumber = String(i + 1);
      let option2 = localStorage.getItem(('#class' + classNumber + store)).toString();
      $('#class' + classNumber + store + ' option[value="' + option2 + '"]')
      .attr('selected', 'selected');
    }
  }

  function preSelectValue(store) {
    for(let i = 0; i < localStorageItemLength; i += 1) {
      let classNumber = String(i + 1);
      let option2 = localStorage.getItem(('#class' + classNumber + store));
      document.querySelector('#class' + classNumber + store).value = option2;
    }
  }

  preSelectOption('Difficulty');
  preSelectOption('Credits');
  preSelectValue('Name');
  preSelectValue('Percentage');

  $('form').submit(function(e) {
    e.preventDefault();
    window.localStorage.clear();
    console.log(localStorage);

    let name = document.querySelectorAll('[placeholder="Class Name"]')
    let credits = document.querySelectorAll('[placeholder="Credits"]');
    let difficulty = document.querySelectorAll('[placeholder="Difficulty"]');
    let percent = document.querySelectorAll('[placeholder="%"]');

    let rows = document.querySelectorAll('.row');
    let storageLength = rows.length;

    formData('Difficulty', difficulty);
    formData('Credits', credits);
    formData('Name', name);
    formData('Percentage', percent);

    function formData(store, variable) {
      for(let i = 0; i < storageLength; i += 1) {
        let classNumber = String(i + 1);
        localStorage.setItem('#class' + classNumber + store, variable[i].value);
        if(storageLength === 7) {
          window.localStorage.removeItem('#class8' + store);
        }
      }
    }


  });

});
