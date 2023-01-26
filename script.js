function toggleOpen(event) {
  let elem = event.target.closest('div');
  elem.classList.toggle('open');
  elem.classList.toggle('open-active');
}

// event listener for toggleOpen function d
//test comment
document.addEventListener('click', (event) => {
  let target = event.target.closest('div');
  console.log(target);
  if (!target) return;
  toggleOpen(event);
});
