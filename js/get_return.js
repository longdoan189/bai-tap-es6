function to_normal_case(string) {
    /*from google */
    return string.split(/(?=[A-Z])/).join(' ').toLowerCase();
}

function run() {
    var allValue = document.querySelectorAll('input')
    var adding = `<div>`
    for (var e of allValue) {
        var cur = `<p>${to_normal_case(e.name)}: ${e.value}</p>`
        console.log(e.value);
        adding+= cur
    }
    var f_type = document.querySelector('#loaiNhiem');
    adding += `<p>loai nhiem: ${f_type.value}</p>`
    document.querySelector('.content-from-user').innerHTML = adding;
}
var action_tag = document.querySelectorAll('.actions')[0];
action_tag.onmouseover = run;