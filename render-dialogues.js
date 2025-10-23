dialogues.forEach(line => {
  const container = document.createElement('div');
  container.className = 'dialogue-block';

  const text = document.createElement('p');
  text.innerHTML = `<strong>${line.speaker}:</strong> ${line.text}`;
  container.appendChild(text);

  const audio = document.createElement('audio');
  audio.controls = true;
  audio.src = line.audioFile;
  container.appendChild(audio);

  document.getElementById('dialogue-container').appendChild(container);
});
