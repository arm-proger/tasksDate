// The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

const getBestStudent = (scores) => {
  let bestStudent = 0,
    studentName = ''

  for (let key in scores) {
    const sumScore = scores[key].reduce(
      (acc, currentScore) => acc + currentScore
    )

    let averageScore = sumScore / scores[key].length

    if (averageScore > bestStudent) {
      bestStudent = averageScore
      studentName = key
    }
  }

  return `OUTPUT:: ${studentName}`
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
)
// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
