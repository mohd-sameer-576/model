let openbtn = document.querySelector('.openbtn');
let modelcontainer = document.querySelector('.modelcontainer');
let closebtn = document.querySelector('.closebtn');
openbtn.addEventListener('click', function() {
    let modelcontainer = document.querySelector('.modelcontainer');
    modelcontainer.style.display = 'flex';
});
modelcontainer.addEventListener('click', function(e) {
    if (e.target === modelcontainer) {
        modelcontainer.style.display = 'none';
    }
});
closebtn.addEventListener('click', function() {
    modelcontainer.style.display = 'none';
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modelcontainer.style.display = 'none';
    }
});