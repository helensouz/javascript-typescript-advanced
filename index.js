

var cat = {name: "ana"}

function swap(feline){
    feline.name = 'wild'
    feline = {name:"tabby"}
}

swap(cat)
console.log(cat.name)