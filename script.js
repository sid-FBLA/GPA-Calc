window.addEventListener('DOMContentLoaded', (event) => {

  console.log(document.querySelector('button'));


  const extraInfo1 = document.querySelector("#extraInfo1");
  const extraInfo2 = document.querySelector("#extraInfo2");
  const form = document.querySelector('form');
  const remove = document.querySelector('#remove');
  const sem2Remove = document.querySelector('#sem2remove');
  const removeSemester = document.querySelector('#removeSemester');
  const add = document.querySelector('#add');
  const sem2Add = document.querySelector('#sem2add');
  const addSemester = document.querySelector('#addSemester');
  const semester = document.querySelector('#semester1');
  const row7 = document.querySelector('#appender');
  let rows = document.querySelectorAll('.row');
  const lastRow = rows[rows.length - 1];
  var lastRowClone = document.querySelector('#lastRow').cloneNode(true);
  const semester2Original = document.querySelector('#semester2');
  const semester2 = document.querySelector('#semester2').cloneNode(true);
  const sem2LastRow = document.querySelector('#sem2lastRow');
  const sem2LastRowClone = document.querySelector('#sem2lastRow').cloneNode(true);

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

  if(rows.length == 7) {
    remove.style.display = 'none';
    add.style.display = 'block';
  } else {
    add.style.display = 'none';
    remove.style.display = 'block';
  }
//Refactor

  removeSemester.addEventListener('click', function() {
    console.log('hi');
    setTimeout(function(){$('#semester2').remove();}, 225)
    $('#semester2').animate({height: 0}, 225);
  });

  addSemester.addEventListener('click', function(e) {
    console.log(e);
    let rows = document.querySelectorAll('.row');
    insertAfter(semester2, semester1);
    $('#semester2').height(0).animate({height: semesterHeight}, 250);
    addSemester.style.display = 'none';
    preSelectOption('Difficulty');
    preSelectOption('Credits');
    preSelectValue('Name');
    preSelectValue('Percentage');
    if(rows.length == 7) {
      semester2.offsetHeight = semester2.offsetHeight - sem2LastRow.offsetHeight;
      console.log(rows.length);
      setTimeout(function(){$('#sem2lastRow').remove();}, 225)
      $('#sem2lastRow').height(0);
      console.log($('#sem2lastRow'));
      $('#sem2remove').css({display: 'none !important'});
      $('#sem2add').css({display: 'block !important'});
    }
  });

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

  sem2Remove.addEventListener('click', function() {
    setTimeout(function(){$('#sem2lastRow').remove();}, 25)
    $('#sem2lastRow').animate({height: 0}, 50);
    remove.style.display = 'none';
    add.style.display = 'block';
  })

//End Refactor

  let localStorageItemLength = localStorage.length/4;
  console.log(localStorageItemLength);

  if(localStorageItemLength == 7) {
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
      if(document.body.contains(semester2)) {
        $('#sem2class' + classNumber + store + ' option[value="' + option2 + '"]')
        .attr('selected', 'selected');
      }
    }
  }


  function preSelectValue(store) {
    for(let i = 0; i < localStorageItemLength; i += 1) {
      let classNumber = String(i + 1);
      let option2 = localStorage.getItem(('#class' + classNumber + store));
      document.querySelector('#class' + classNumber + store).value = option2;
      if(document.body.contains(semester2)) {
        document.querySelector('#sem2class' + classNumber + store).value = option2;
      }
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
