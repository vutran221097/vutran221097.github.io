$('#export').submit(function (e) {
    e.preventDefault();
    let key = $('#export input[name="key"]').val();
    let value = localStorage.getItem(key);

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value));
    pom.setAttribute('download', key);
    pom.click();
})

$('#import').submit(function (e) {
    e.preventDefault();
    let key = $('#import input[name="key"]').val();
    let file = $('#import input[name="file"').prop('files')[0];

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        localStorage.setItem(key, text);
    };
    reader.readAsText(file);
})