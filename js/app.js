function showMarkdown() {
    const parsedUrl = new URL(window.location.href);
    let pathParm = parsedUrl.searchParams.get('path');
    if (!pathParm)
        pathParm = 'index/index';
    const path = './markdown/' + pathParm + '.md';
    fetch(path).then(
        response => {
            response.text().then(
                text => {
                    const converter = new showdown.Converter();
                    const converted_html = document.getElementById('converted_html');
                    const html = converter.makeHtml(text);
                    converted_html.innerHTML = html;
                });
        });
}
