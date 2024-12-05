const example1 = await Deno.readTextFile("./day4/example1.txt");
const input = await Deno.readTextFile("./day4/input.txt");

function part2() {
  let split = input.split("\n").slice(0, -1);
  let paddingLine = ".".repeat(split[0].length);
  let splitWithPadding = [paddingLine, paddingLine, paddingLine].concat(
    split.map((x) => "..." + x + "..."),
  );
  splitWithPadding.push(paddingLine);
  splitWithPadding.push(paddingLine);
  splitWithPadding.push(paddingLine);
  let finalTotal = 0;
  for (let i = 0; i < splitWithPadding.length; i++) {
    for (let j = 0; j < splitWithPadding[i].length; j++) {
      if (splitWithPadding[i][j] === "A") {
        if (
          !((splitWithPadding[i + 1][j + 1] === "M" &&
            splitWithPadding[i - 1][j - 1] === "S") ||
            (splitWithPadding[i + 1][j + 1] === "S" &&
              splitWithPadding[i - 1][j - 1] === "M"))
        ) continue;
        if (
          !((splitWithPadding[i - 1][j + 1] === "M" &&
            splitWithPadding[i + 1][j - 1] === "S") ||
            (splitWithPadding[i - 1][j + 1] === "S" &&
              splitWithPadding[i + 1][j - 1] === "M"))
        ) continue;
        finalTotal += 1;
      }
    }
  }
  console.log(finalTotal);
}
function part1() {
  let split = input.split("\n").slice(0, -1);
  let paddingLine = ".".repeat(split[0].length);
  let splitWithPadding = [paddingLine, paddingLine, paddingLine].concat(
    split.map((x) => "..." + x + "..."),
  );
  splitWithPadding.push(paddingLine);
  splitWithPadding.push(paddingLine);
  splitWithPadding.push(paddingLine);
  let pos = [
    [[0, 1, 2, 3], [0, 0, 0, 0]],
    [[0, 1, 2, 3], [0, 1, 2, 3]],
    [[0, 0, 0, 0], [0, 1, 2, 3]],
    [[0, -1, -2, -3], [0, 1, 2, 3]],
    [[0, -1, -2, -3], [0, 0, 0, 0]],
    [[0, -1, -2, -3], [0, -1, -2, -3]],
    [[0, 0, 0, 0], [0, -1, -2, -3]],
    [[0, 1, 2, 3], [0, -1, -2, -3]],
  ];
  let finalTotal = 0;
  for (let i = 0; i < splitWithPadding.length; i++) {
    for (let j = 0; j < splitWithPadding[i].length; j++) {
      if (splitWithPadding[i][j] === "X") {
        for (let posIndex in pos) {
          let posX = pos[posIndex][1];
          let posY = pos[posIndex][0];
          if (splitWithPadding[i + posX[1]][j + posY[1]] !== "M") continue;
          if (splitWithPadding[i + posX[2]][j + posY[2]] !== "A") continue;
          if (splitWithPadding[i + posX[3]][j + posY[3]] !== "S") continue;

          finalTotal += 1;
        }
      }
    }
  }
  console.log(finalTotal);
}

part1();
part2();
