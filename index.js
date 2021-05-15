const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record){
  let winningYear
  let lost
record.find( function(newArray){
  if(newArray.result === "W") {
    winningYear = newArray.year
  }
  else {
    lost = undefined
    return lost
  }
})
return winningYear
};
superbowlWin(record)
