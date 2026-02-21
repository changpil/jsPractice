const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  10
);

clearTimeout(timerId);
