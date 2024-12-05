const example1 = await Deno.readTextFile("./day1/example1.txt");
const input = await Deno.readTextFile("./day1/input.txt");

function getDataFromList(data: string) {
  const regex = /(\d+)\s+(\d+)/;
  const leftList = [];
  const rightList = [];
  data.split("\n").forEach((line: string) => {
    const match = line.match(regex);
    if (match) {
      leftList.push(parseInt(match[1]));
      rightList.push(parseInt(match[2]));
    }
  });
  return [leftList, rightList];
}

function part1() {
  const list = getDataFromList(input);
  const rightList = list[1].sort();
  const leftList = list[0].sort();
  let total = 0;
  for (let i = 0; i < rightList.length; i++) {
    total += Math.abs(rightList[i] - leftList[i]);
  }
  console.log(total);
}

function part2() {
  const list = getDataFromList(input);
  const rightList = list[1];
  const leftList = list[0];
  let mapList = {};
  rightList.forEach((r) => {
    mapList[r] = (mapList[r] || 0) + 1;
  });
  let total = leftList.reduce((acc, e) => {
    let ct = mapList[e] || 0;
    return acc + (ct * e);
  }, 0);
  console.log(total);
}

part1();
part2();
