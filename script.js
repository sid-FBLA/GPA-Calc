window.addEventListener('DOMContentLoaded', (event) => {

  console.log(document.querySelector('button'));


  const extraInfo1 = document.querySelector("#extraInfo1");
  const extraInfo2 = document.querySelector("#extraInfo2");
  const form = document.querySelector('form');
  const remove = document.querySelector('#remove');
  const add = document.querySelector('#add');
  const rows = document.querySelectorAll('.row');
  const lastRow = rows[rows.length - 1];
  var lastRowClone = document.querySelector('#lastRow').cloneNode(true);

  console.log(lastRowClone);
  console.log(lastRow);
  console.log(extraInfo1);
  console.log(extraInfo2);

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }


  extraInfo1.setAttribute('title', 'Semester = 2.5, Full Year = 5, Full Year + Lab = 6');
  extraInfo2.setAttribute('title', 'Must be written as a NUMBER do not add any other symbols.' + '&#10;' + 'If you are in the second semester, take the average of your two semesters')

  const lastRowHeight = lastRow.offsetHeight;

  console.log(lastRowHeight);

  //console.log(document.querySelectorAll('custom-select').value);

  remove.addEventListener('click', function() {
    setTimeout(function(){$('#lastRow').remove();}, 225)
    $('#lastRow').animate({height: 0}, 250);
    remove.style.display = 'none';
    add.style.display = 'block';
  });

  add.addEventListener('click', function() {
    form.insertBefore(lastRowClone, form.lastElementChild);
    $('#lastRow').height(0).animate({height: lastRowHeight}, 250);
    add.style.display = 'none';
    remove.style.display = 'block';
  })

});
