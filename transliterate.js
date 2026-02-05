const syllables = {
  "ha":"ሀ","hu":"ሁ","hi":"ሂ","haa":"ሃ","he":"ሄ","ho":"ሆ","h":"ህ",
  "sa":"ሳ","su":"ሱ","si":"ሲ","se":"ሰ","so":"ሶ","s":"ስ",
  "la":"ላ","lu":"ሉ","li":"ሊ","le":"ለ","lo":"ሎ","l":"ል",
  "ma":"ማ","mu":"ሙ","mi":"ሚ","me":"መ","mo":"ሞ","m":"ም",
  "ra":"ራ","ru":"ሩ","ri":"ሪ","re":"ረ","ro":"ሮ","r":"ር",
  "na":"ና","nu":"ኑ","ni":"ኒ","ne":"ነ","no":"ኖ","n":"ን",
  "ta":"ታ","tu":"ቱ","ti":"ቲ","te":"ተ","to":"ቶ","t":"ት",
  "ya":"ያ","yu":"ዩ","yi":"ይ","ye":"የ","yo":"ዮ","y":"ይ",
  "a":"አ","e":"እ","i":"ኢ","o":"ኦ","u":"ኡ"
};

function transliterate(input) {
  let out = "";
  let i = 0;

  while (i < input.length) {
    let match = "";

    for (let len = 3; len > 0; len--) {
      let part = input.substr(i, len).toLowerCase();
      if (syllables[part]) {
        match = syllables[part];
        i += len;
        break;
      }
    }

    if (match) {
      out += match;
    } else {
      out += input[i];
      i++;
    }
  }

  return out;
}
