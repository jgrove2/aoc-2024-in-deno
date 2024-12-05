const example1 = await Deno.readTextFile("./day3/example1.txt");
const example2 = await Deno.readTextFile("./day3/example2.txt");
const input = await Deno.readTextFile("./day3/input1.txt");

function getMult(text: string) {
  let regex = /mul\((\d+),(\d+)\)/g;
  let regex2 = /mul\((\d+),(\d+)\)/;
  let match = text.match(regex);
  let muls = match.map((m) => m.match(regex2));
  let total = 0;
  muls.forEach((element) =>
    total += parseInt(element[1]) * parseInt(element[2])
  );
  return total;
}

function getMultUseDoDont(text: string) {
  let regex = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
  let regex2 = /mul\((\d+),(\d+)\)/;
  let regex3 = /\d+/g;
  let match = text.match(regex);
  let filteredMatch = [];
  let toggle = true;
  return match.reduce((arr, el) => {
    if (el === "don't()") {
      toggle = false;
    } else if (!toggle && el === "do()") {
      toggle = true;
    } else if (toggle && regex2.test(el)) {
      let x = el.match(regex3);
      let ret = x[1] * x[0];
      return arr + ret;
    }
    return arr;
  }, 0);
}

function part1() {
  console.log(getMult(input));
}
function part2() {
  console.log(getMultUseDoDont(input));
}

part1();
part2();
