const generateBtn = document.querySelector('.generate-btn');
const textarea = document.querySelector('textarea');

generateBtn.addEventListener('click', async () => {
  generateBtn.style.display = 'none';
  textarea.style.resize = 'none';

  const image = await htmlToImage.toPng(document.body);
  const a = document.createElement('a');
  a.href = image;
  a.download = 'apology.png';
  a.click();
  a.remove();

  generateBtn.style.display = 'inline-block';
  textarea.style.resize = 'vertical';

  alert('Apology image generated and downloaded!');
});