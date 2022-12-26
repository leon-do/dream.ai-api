// https://www.fantasynamegenerators.com/wizard-names.php
module.exports = function properName() {
  var nm1 = ["a", "e", "i", "o", "u"];
  var nm2 = ["", "", "", "c", "cr", "d", "dh", "dr", "g", "gr", "j", "k", "kr", "kh", "p", "pr", "q", "qr", "r", "rh", "sh", "st", "str", "t", "th", "tr", "v", "vr", "w", "x", "z"];
  var nm3 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
  var nm4 = ["d", "g", "l", "n", "r", "v", "z", "d", "g", "l", "n", "r", "v", "z", "d", "dr", "g", "gr", "l", "lr", "lv", "lz", "n", "nd", "nv", "nz", "r", "rl", "v", "z"];
  var nm5 = ["bahn", "barin", "beus", "bin", "bras", "bus", "dalf", "darin", "del", "dium", "dius", "dor", "dore", "dus", "farihm", "faris", "feus", "flyn", "forn", "gast", "geor", "gorim", "gron", "grus", "hagan", "harad", "haris", "hith", "hone", "jahr", "jamar", "kalis", "key", "kius", "kore", "kron", "ldor", "lenor", "leus", "lin", "lius", "lore", "maex", "marim", "mazz", "monar", "morn", "naxx", "neth", "neus", "nior", "nitor", "norim", "pan", "phiar", "phior", "pius", "prix", "qihr", "qiohr", "qirax", "qium", "qor", "quam", "ras", "rhan", "rick", "rius", "rnas", "ronin", "rune", "shan", "sim", "sior", "sorin", "strum", "tarum", "taz", "thar", "tior", "torn", "trix", "veus", "viar", "vior", "vius", "vras", "wix", "wyn", "xar", "xeor", "xium", "xius", "xon", "zahl", "zahr", "zax", "zin", "zohr", "zor"];
  var nm6 = ["", "", "", "", "", "c", "ch", "d", "f", "fr", "h", "l", "m", "n", "ph", "q", "r", "rh", "s", "sh", "th", "v", "z"];
  var nm7 = ["d", "h", "l", "ll", "m", "mn", "n", "nn", "ph", "r", "s", "t", "z"];
  var nm8 = ["baris", "belle", "bess", "bine", "bis", "dali", "deis", "delis", "dores", "drisse", "dyora", "dyrin", "ffaeh", "faris", "ffea", "fora", "fyne", "gaell", "ganis", "ghis", "goris", "greth", "haen", "harise", "harith", "hione", "hith", "khealis", "kely", "key", "kon", "kora", "llaes", "lleas", "less", "lore", "lune", "lyn", "lyna", "maev", "mari", "menazz", "monora", "morith", "naxis", "nneas", "nelle", "ni", "nilorh", "nora", "nydae", "nyll", "phaen", "phi", "phiane", "phior", "phyx", "pianne", "prixy", "qia", "qille", "qinn", "qiohne", "qora", "rass", "rihann", "rish", "ro", "rune", "ssaem", "shann", "sinore", "sophi", "strea", "tarish", "tazz", "thall", "tiye", "tosh", "trixi", "vae", "via", "vile", "vira", "vys", "waelle", "weahl", "wixe", "wyss", "wyn", "xaryl", "xea", "xis", "xone", "xyll", "zahne", "zith", "zohra", "zora", "zyni"];
  var nm9 = ["barin", "baris", "bin", "bine", "bis", "bras", "dall", "dali", "darin", "deis", "del", "delis", "dor", "dyrin", "farih", "ffaeh", "ffyn", "gaell", "ghis", "gorin", "goris", "greth", "haen", "haris", "harith", "hion", "hith", "kalis", "kelis", "key", "kias", "konn", "kore", "karon", "ldor", "lenor", "less", "lin", "llaes", "lleas", "lore", "lyn", "mal", "mari", "monar", "morith", "nell", "neth", "neas", "ni", "nilorh", "nior", "nneas", "noran", "norim", "nyll", "pan", "phiar", "phior", "prix", "qihr", "qill", "qinn", "qiohn", "qor", "ras", "rass", "rhan", "rihann", "rish", "rias", "rnas", "ro", "ronin", "rin", "shan", "shann", "sim", "sior", "sorin", "ssaem", "strea", "tarish", "thall", "tior", "tosh", "trix", "veus", "viar", "vior", "vius", "vys", "wyn", "wyss", "xyll", "zahl", "zin", "zith", "zohr", "zor"];
  var nm10 = ["", "", "d", "dh", "g", "h", "k", "kh", "l", "m", "n", "p", "ph", "r", "rh", "s", "sh", "t", "th", "v", "z"];
  var nm11 = ["d", "h", "l", "ll", "m", "n", "nn", "ph", "r", "rr", "s", "v", "z"];

  // random nuber between 0-2 for gender
  var tp = Math.floor(Math.random() * 3);

  for (i = 0; i < 10; i++) {
    const nTp = (Math.random() * 3) | 0;
    if (tp === 1) {
      if (nTp === 0) {
        rnd3 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm8.length) | 0;
        names = nm3[rnd5] + nm8[rnd6];
      } else if (nTp === 1) {
        rnd2 = (Math.random() * nm6.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm8.length) | 0;
        while (nm6[rnd2] === nm8[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm6.length) | 0;
        }
        names = nm6[rnd2] + nm3[rnd5] + nm8[rnd6];
      } else {
        rnd = (Math.random() * nm1.length) | 0;
        rnd2 = (Math.random() * nm7.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm8.length) | 0;
        while (nm7[rnd2] === nm8[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm7.length) | 0;
        }
        names = nm1[rnd] + nm7[rnd2] + nm3[rnd5] + nm8[rnd6];
      }
    } else if (tp === 2) {
      if (nTp === 0) {
        rnd3 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm9.length) | 0;
        names = nm3[rnd5] + nm9[rnd6];
      } else if (nTp === 1) {
        rnd2 = (Math.random() * nm10.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm9.length) | 0;
        while (nm10[rnd2] === nm9[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm10.length) | 0;
        }
        names = nm10[rnd2] + nm3[rnd5] + nm9[rnd6];
      } else {
        rnd = (Math.random() * nm1.length) | 0;
        rnd2 = (Math.random() * nm11.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm9.length) | 0;
        while (nm11[rnd2] === nm9[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm11.length) | 0;
        }
        names = nm1[rnd] + nm11[rnd2] + nm3[rnd5] + nm9[rnd6];
      }
    } else {
      if (nTp === 0) {
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm5.length) | 0;
        names = nm3[rnd5] + nm5[rnd6];
      } else if (nTp === 1) {
        rnd2 = (Math.random() * nm2.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm5.length) | 0;
        while (nm2[rnd2] === nm5[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm2.length) | 0;
        }
        names = nm2[rnd2] + nm3[rnd5] + nm5[rnd6];
      } else {
        rnd = (Math.random() * nm1.length) | 0;
        rnd2 = (Math.random() * nm4.length) | 0;
        rnd5 = (Math.random() * nm3.length) | 0;
        rnd6 = (Math.random() * nm5.length) | 0;
        while (nm4[rnd2] === nm5[rnd6].charAt(0)) {
          rnd2 = (Math.random() * nm4.length) | 0;
        }
        names = nm1[rnd] + nm4[rnd2] + nm3[rnd5] + nm5[rnd6];
      }
    }
  }

  // capitilize first letter of name
  return names.charAt(0).toUpperCase() + names.slice(1);
};
