function delay(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(index);
    }, index * 1000);
  });
}

async function LogNumber(arrNum) {
  let i = 0;
  let log = async () => {
    await delay(1000);
    i++;
    console.log(arrNum[i]);
    if (i === arrNum.length - 1) return;
    else await log();
  };
  log();
}

let numbers = [0, 1, 2, 3, 4, 5, 6];

// numbers.map(async (_, index) => {
//   delay(index).then((res) => console.log(numbers[res]));
// });

numbers.map(async (_, index) => {
  await delay(index);
  console.log(numbers[index]);
});
