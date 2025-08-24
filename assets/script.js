const generateBtn = document.querySelector('.generate-btn');
const textarea = document.querySelector('textarea');

generateBtn.addEventListener('click', async () => {
  if (textarea.value.trim() === '') {
    alert('Please enter your apology first!');
    return;
  }

  generateBtn.disabled = true;
  generateBtn.focus();
  generateBtn.style.display = 'none';
  textarea.style.resize = 'none';

  const image = await htmlToImage.toPng(document.body);
  const a = document.createElement('a');
  a.href = image;
  a.download = 'apology.png';
  a.click();
  a.remove();

  generateBtn.disabled = false;
  generateBtn.style.display = 'inline-block';
  textarea.style.resize = 'vertical';
  textarea.focus();

  alert('Apology image generated and downloaded!');
});