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
    fetch('./index.md').then(
        (response) => {
            response.text().then((text) => { console.log(text); });
            window.X = response;
            // console.log('response', response);
            // response.text().then(
            //     (text) => {
            //         console.log(text);
            //     })
        });
    // if (!response.ok)
    //     throw new Error(`Response status: ${response.status}`);
    // const markdown = await response.text();
    // const converter = new showdown.Converter();
    // const converted_html = document.getElementById('converted_html');
    // converted_html.innerHTML = converter.makeHtml(markdown);
}
