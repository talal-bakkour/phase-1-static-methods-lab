// class Formatter {
//   //add static methods here
// }
class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-\s']/g, '');
  }

  static titleize(str) {
    const nonCapitalizedWords = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];

    const words = str.split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !nonCapitalizedWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });

    return capitalizedWords.join(' ');
  }
}

module.exports = Formatter;
