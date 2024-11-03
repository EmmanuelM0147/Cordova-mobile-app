document.addEventListener('deviceready', function() {
    console.log('Cordova is ready!');

    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        alert('Button clicked!');
    });
});
