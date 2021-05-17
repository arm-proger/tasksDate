const obj = {
  _name: [], // ['name', length][]
  set name(name) {
    const names = name.split(', ')
    names.forEach(element => {
      this._name.push([element, element.length])
    });
  },
  get name() {
    return this._name
  },
}

console.log(obj.name)
obj.name = 'Vrezh, Artavazd, Inga';
console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]