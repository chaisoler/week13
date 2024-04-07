fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projectHeader').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projectFooter').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));

fetch('sidepanel.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('projectSidePanel').innerHTML = data;
    })
    .catch(error => console.error('Error getting code!: ', error));