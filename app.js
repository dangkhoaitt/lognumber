function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
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

let numbers = [0, 1, 2, 3, 4, 5];
LogNumber(numbers);
