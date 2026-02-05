const rules = {
  ka:["ካ","ከ","ክ"],
  se:["ሰ","ሠ"],
  sel:["ሰል","ሠል"],
  sela:["ሰላ","ሠላ"],
  selam:["ሰላም","ሠላም"],
  ma:["ማ"],
  lam:["ላም"],
  lamh:["ለምሕ"],
};

const syllables = {
  ha:"ሀ", hu:"ሁ", hi:"ሂ", he:"ሄ", ho:"ሆ", h:"ህ",
  sa:"ሳ", su:"ሱ", si:"ሲ", se:"ሰ", so:"ሶ", s:"ስ",
  la:"ላ", lu:"ሉ", li:"ሊ", le:"ለ", lo:"ሎ", l:"ል",
  ma:"ማ", mu:"ሙ", mi:"ሚ", me:"መ", mo:"ሞ", m:"ም",
  ra:"ራ", ru:"ሩ", ri:"ሪ", re:"ረ", ro:"ሮ", r:"ር",
  na:"ና", nu:"ኑ", ni:"ኒ", ne:"ነ", no:"ኖ", n:"ን",
  a:"አ", e:"እ", i:"ኢ", o:"ኦ", u:"ኡ"
};

export function transliterateWord(word) {
  let out = "";
  let i = 0;

  while (i < word.length) {
    let matched = false;

    for (let len = 3; len > 0; len--) {
      let part = word.substr(i, len).toLowerCase();
      if (syllables[part]) {
        out += syllables[part];
        i += len;
        matched = true;
        break;
      }
    }

    if (!matched) {
      out += word[i];
      i++;
    }
  }

  return out;
}

export function getSuggestions(word) {
  return rules[word.toLowerCase()] || [];
}
