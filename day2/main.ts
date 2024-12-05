const example1 = await Deno.readTextFile("./day2/example1.txt");
const input = await Deno.readTextFile("./day2/input1.txt");

function part1() {
  let rows = rowsFromText(input);
  let safeCount = 0;
  rows.forEach((row) => {
    if (isSafe(row)) safeCount += 1;
  });
  console.log(safeCount);
}

function part2() {
  let rows = rowsFromText(input);
  let safeCount = 0;
  rows.forEach((row) => {
    let safe = false;
    for (let i = 0; i < row.length; i++) {
      let c = row.slice(0, i).concat(row.slice(i + 1));
      if (isSafe(c)) {
        safe = true;
        break;
      }
    }
    if (isSafe(row) || safe) safeCount++;
  });
  console.log(safeCount);
}

function rowsFromText(text: string) {
  return text.split("\n").map((arr) => arr.split(" ")).slice(0, -1);
}

function isSafe(row: number[]) {
  let accending = row[0] > row[1];
  if (row[0] === row[1]) return false;
  for (let i = 0; i < row.length - 1; i++) {
    if (!isWithinThree(row[i], row[i + 1], accending)) {
      return false;
    }
  }
  return true;
}

function isWithinThree(num1: number, num2: number, accending: boolean) {
  if (accending) {
    return num1 - num2 <= 3 && num1 - num2 > 0;
  }
  return num1 - num2 >= -3 && num1 - num2 < 0;
}

part1();
part2();
