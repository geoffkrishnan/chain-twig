document.querySelectorAll('.copy-link').forEach(button => {
  const wrapper = button.closest('.link-wrapper');
  const link = wrapper.querySelector('a').href;
  const img = button.querySelector('img');
  const tooltip = button.querySelector('.tool-tip');

  button.addEventListener('click', e => {
    e.preventDefault();
    navigator.clipboard.writeText(link).then(() => {
      img.src = "images/checkmark.png";
      button.classList.add('show-tool-tip');
      setTimeout(() => {
        img.src = "images/link.png";
        button.classList.remove('show-tool-tip');
      }, 1500);
    });
  });
});

