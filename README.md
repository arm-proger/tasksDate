# __BUILD-INS (JSON, REGEX, DATE)__

## Source map

* Source
  * reverseEntries.js  
* README.md

---

1. Write an object with getter/setter field name.

```js
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }
  console.log(obj.name)
  obj.name = 'Vrezh, Artavazd';
  console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]
```

[Decision](./src/1.objWithGetSet.js)

---

2. The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```js
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  });
  // OUTPUT => "John"
  // John's avg = 90
  // Bob's avg = 83.33
```

[Decision](./src/2..js)