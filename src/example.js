const addOne = x => x + 1;
const addTwo = x => x + 2;

const addY = y => x => x + y;
const addOne = addY(1);
const addTwo = addY(2);

const 