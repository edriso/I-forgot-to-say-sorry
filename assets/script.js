const generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', async () => {
  generateBtn.style.display = 'none';

  const image = await htmlToImage.toPng(document.body);
  const a = document.createElement('a');
  a.href = image;
  a.download = 'apology.png';
  a.click();
  a.remove();

  generateBtn.style.display = 'inline-block';

  alert('Apology image generated and downloaded!');
});