'use strict'
var gProjs

_createProjs()
console.log(gProjs)

function getProjs(){
    return gProjs
}

function _createProj(id, name, title, desc, url, publishedAt) {
    var proj =
    {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels: ["Matrixes", "keyboard events"],
    }
    return proj
}

function _createProjs() {
    var pacmanDate = '26-02-2012'
    pacmanDate = pacmanDate.split('-')
    pacmanDate = new Date(pacmanDate[2], pacmanDate[1] - 1, pacmanDate[0]).getTime()

    var projs = [
        _createProj('pacman', 'Pacman', 'Eat all the ghost', 'Old but Gold, kind od game',
         'https://danayani.github.io/pacman/','pacmanDate')

    ]

    gProjs = projs
}
