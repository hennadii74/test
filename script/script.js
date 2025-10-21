let title = document.title

console.log(title)

let container = document.querySelector('.container')

let p = document.createElement('p')

p.textContent = 
"Build software, not toolchains. With native AI at every step"

p.classList.add('text')
container.append(p)