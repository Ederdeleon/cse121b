function generateSentence() {
    fetch('final.json')
      .then(response => response.json())
      .then(data => {
        const { nouns, verbs, adjectives, adverbs } = data;

        const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

        const subject = getRandomElement(nouns);
        const verb = getRandomElement(verbs);
        const adjective = getRandomElement(adjectives);
        const adverb = getRandomElement(adverbs);

        const sentence = `The ${subject} ${verb} ${adverb} ${adjective}.`;

        document.getElementById('sentence').textContent = sentence;
      })
      .catch(error => console.error('Error fetching data:', error));
  }