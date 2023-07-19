import React from 'react';

const name = {
  firstName: 'Manoj',
  lastName: 'Dinesh',
};

const name2 = {
  firstName: 'John',
  lastName: 'Doe',
};

const printName = function (hometown) {
  return `${this.firstName} ${this.lastName} from ${hometown}`;
};

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    return obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName = printName.bind(name);
console.log(printMyName('Bangalore'));
printMyName = printName.myBind(name2);
console.log(printMyName('Texas'));

const PolyfillForBind = () => {
  return (
    <div>
      <section>Please check console</section>
    </div>
  );
};

export default PolyfillForBind;
