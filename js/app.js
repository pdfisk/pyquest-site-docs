async function showMarkdown() {
    let hash = document.location.hash;
    if (hash.length === 0)
        hash = '#index';
    const path = hash.substring(1) + '.md';
    const response = await fetch(path);
    if (!response.ok)
        throw new Error(`Response status: ${response.status}`);
    const markdown = await response.text();
    const converter = new showdown.Converter();
    const converted_html = document.getElementById('coverted_html');
    converted_html.innerHTML = converter.makeHtml(markdown);
}
