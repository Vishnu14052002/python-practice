// Fetch the content of index.html
fetch('index.html')
.then(response => response.text())
.then(html => {
  // Create a temporary DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Get the element with the class "divition"
  const divitionContent = doc.querySelector('.divition');

  // Append the content to the current document
  if (divitionContent) {
    document.getElementById('imported-content').innerHTML = divitionContent.outerHTML;
  }
})
.catch(error => {
  console.error('Error loading content:', error);
});