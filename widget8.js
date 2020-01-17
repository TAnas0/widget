// https://gist.github.com/nozzlegear/d4582754e9d67aa0beff
(function ()
{
    var elem = document.createElement('div');
    elem.setAttribute('id', 'sb_widget')
    console.log(elem)
    document.body.appendChild(elem)
    console.log(document.body)
}());