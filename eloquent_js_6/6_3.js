function ArraySeq (array) {
  this.array = array;
  this.position = -1;
}

ArraySeq.prototype.getNext = function() {
  if (this.position < this.array.length) {
    this.position += 1;
  }
  return this.array[this.position];
};

function RangeSeq(min, max) {
  this.min = min;
  this.max = max;
  this.array = [];
  this.position = -1;

  for(var i = min; i <= max; i++) {
    this.array.push(i);
  }
}

RangeSeq.prototype.getNext = function() {
  if (this.position < this.array.length) {
    this.position += 1;
  }
  return this.array[this.position];
};

function logFive(sequence) {
  var a = sequence.getNext();
  var counter = 0;
  while ((a !== undefined) && (counter < 5)) {
  console.log(a);
    a = sequence.getNext();
    counter += 1;
  }
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
