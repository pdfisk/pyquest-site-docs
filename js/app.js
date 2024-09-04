function showMarkdown() {
    // let hash = document.location.hash;
    // if (hash.length === 0)
    //     hash = '#index';
    // const path = hash.substring(1) + '.md';
    // fetch(path).then(
    //     (response) => {
    //         console.log('PATH', path);
    //         console.log('RESPONSE', response);
    //         window.X = response;
    //     }
    // )
    fetch('./background_notes/01_browser_environment.md').then(
        response => {
            console.log('RESPONSE', response);
            response.text().then(
                text => {
                    console.log('TEXT', text);
                    const converter = new showdown.Converter();
                    const converted_html = document.getElementById('converted_html');
                    const html = converter.makeHtml(text);
                    converted_html.innerHTML = html;
                });
        });
    // if (!response.ok)
    //     throw new Error(`Response status: ${response.status}`);
    // const markdown = await response.text();
    // const converter = new showdown.Converter();
    // const converted_html = document.getElementById('converted_html');
    // converted_html.innerHTML = converter.makeHtml(markdown);
}
