window.addEventListener('DOMContentLoaded', (event) => {

  console.log(document.querySelector('button'));


  const extraInfo1 = document.querySelectorAll('.extraInfo1');
  const extraInfo2 = document.querySelectorAll('.extraInfo2');
  const form = document.querySelector('form');
  const remove = document.querySelector('#remove');
  const remove2 = document.querySelector('#remove2');
  const add = document.querySelector('#add');
  const row7 = document.querySelector('#appender');
  const rows = document.querySelectorAll('.row');
  const lastRow = rows[rows.length - 1];
  var lastRowClone = document.querySelector('#lastRow').cloneNode(true);
  var lastRowClone2 = document.querySelector('#sem2lastRow').cloneNode(true);
  const semester2 = document.querySelector('#semester2');

  console.log(lastRowClone);
  console.log(lastRow);
  console.log(extraInfo1);
  console.log(extraInfo2);

  semester2.remove();

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  for(let i = 0; i < extraInfo1.length; i += 1) {
    extraInfo1[i].setAttribute('title', 'Semester = 2.5, Full Year = 5, Course With Lab = 6');
    extraInfo2[i].setAttribute('title', 'Must be written as a NUMBER')
  };
  const lastRowHeight = lastRow.offsetHeight;

  console.log(lastRowHeight);

  //remove.addEventListener('click', deleteRow(remove, '#lastRow'));
  //remove2.addEventListener('click', deleteRow(remove2, '#sem2lastRow'));

  //add.addEventListener('click', addRow(add, '#lastRow'));
  //add2.addEventListener('click', addRow(add2, '#sem2lastRow'));



  function deleteRow(e, last) {
    console.log($(last));
    console.log(e);
    setTimeout(function(){$(last).remove();}, 225)
    $(last).animate({height: 0}, 250);
    e.style.display = 'none';
    e.nextElementSibling.style.display = 'block';
  };

  console.log(rows.length);

  if(rows.length == 7) {
    remove.style.display = 'none';
    add.style.display = 'block'
  }
  if(rows.length == 8) {
    console.log('hi');
    add.style.display = 'none';
    remove.style.display = 'block';
  }

  remove.addEventListener('click', function() {
    setTimeout(function(){$('#lastRow').remove();}, 225)
    $('#lastRow').animate({height: 0}, 250);
    remove.style.display = 'none';
    add.style.display = 'block';
  })

  add.addEventListener('click', function() {
    insertAfter(lastRowClone, row7);
    $('#lastRow').height(0).animate({height: lastRowHeight}, 250);
    add.style.display = 'none';
    remove.style.display = 'block';
  })

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
    localStorage.setItem('storageLength', storageLength);

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
