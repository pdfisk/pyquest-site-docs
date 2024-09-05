function showMarkdown() {
    let origin = document.location.origin;
    let href = document.location.href.substring(origin.length);
    let hash = document.location.hash;
    if (hash.length > 0)
        hash = '#index/index';
    const path = './markdown/' + hash.substring(1) + '.md';
    console.log('PATH', path);
    fetch('./markdown/index/index.md').then(
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
}
