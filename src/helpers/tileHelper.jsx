const clickHandler = function (target, number, numbers, setCorrect, setState) {
  const answer = numbers[target].number;
  const guess = number;

  if (guess === answer) {
    setCorrect(true);
    return;
  }
  const newNumbers = numbers.map((obj) => {
    if (guess < answer && obj.number <= guess) {
        return { number: obj.number, active: false };
    }

    if (guess > answer && obj.number >= guess) {
        return { number: obj.number, active: false };
    }
    return { ...obj };
  });
  setState((prev) => {
    return { numbers: newNumbers, target: prev.target };
  });
};

export default clickHandler;