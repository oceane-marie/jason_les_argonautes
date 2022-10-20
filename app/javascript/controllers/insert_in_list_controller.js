const button = document.getElementById('btn-create');
const input = document.getElementById('new_argonaute');
const list = document.getElementById('list');

button.addEventListener('click', function(e) {
  const p = document.createElement('p');
  p.textContent = input.value;
  list.appendChild(p);
});
