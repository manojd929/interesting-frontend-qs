import React from 'react';

/* Call, Apply, Bind Reference code

const coder = {
  firstName: 'Manoj',
  lastName: 'Dinesh',
  printFullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

coder.printFullName();

const coder2 = {
  firstName: 'John',
  lastName: 'Doe',
};

coder.printFullName.call(coder2);
coder.printFullName.apply(coder2);
coder.printFullName.bind(coder2)

*/

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

const PolyfillForBind = () => {
  let printMyName = printName.bind(name);
  console.log(printMyName('Bangalore'));
  printMyName = printName.myBind(name2);
  console.log(printMyName('Texas'));

  return (
    <div>
      <section>Please check console</section>
    </div>
  );
};

export default PolyfillForBind;
