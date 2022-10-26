/* DROPDOWN JAVASCRIP ERIK BEGIN */

const dropdowns = document.querySelectorAll('.fl-dropdown');

dropdowns.forEach(dropdown => {

  const select = dropdown.querySelector('.fl-select');
  const caret = dropdown.querySelector('.fl-caret');
  const menu = dropdown.querySelector('.fl-menu');
  const options = dropdown.querySelectorAll('.fl-menu li');
  const selected = dropdown.querySelector('.fl-selected');


  select.addEventListener('click', () => {

    select.classList.toggle('fl-select-clicked');

    caret.classList.toggle('fl-caret-rotate');

    menu.classList.toggle('fl-menu-open');
  });


  options.forEach(option => {

    option.addEventListener('click', () => {

      selected.innerText = option.innerText;

      select.classList.remove('fl-select-clicked');

      caret.classList.remove('fl-caret-rotate');

      menu.classList.remove('fl-menu-open');

      options.forEach(option => {
        option.classList.remove('fl-active');
      });

      option.classList.add('fl-active');
    });
  });
});

/* DROPDOWN JAVASCRIP ERIK END */