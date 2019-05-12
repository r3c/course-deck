const make_trie = (replacements) => {
  const append = (node, search, replacement) => {
    if (search === "") {
      node.value = replacement;
    } else {
      if (node.childNodes[search[0]] === undefined) {
        node.childNodes[search[0]] = { "childNodes": {} };
      }

      append(node.childNodes[search[0]], search.substr(1), replacement);
    }
  };

  const root = { "childNodes": {} };

  for (let search in replacements)
    append(root, search, replacements[search]);

  return root;
};

const replace_all = (subject, root, output) => {
  let current = root;
  let pending = "";

  for (let character of subject) {
    pending += character;

    const next = current.childNodes[character];

    if (next === undefined) {
      output.write(pending);

      current = root;
      pending = "";
    } else if (next.value === undefined) {
      current = next;
    } else {
      output.write(next.value);

      current = root;
      pending = "";
    }
  }
};

replace_all("abcdef\n", make_trie({ "ab": "x", "ef": "y" }), process.stdout);
//replace_all("aab\n", make_trie({ "ab": "x" }), process.stdout);
