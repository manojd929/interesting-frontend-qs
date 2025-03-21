import React from 'react';
import { CustomSwitch, CustomCase, DefaultCase } from '../components/Switch';

const Page = () => {
  return (
    <CustomSwitch value="20">
      <CustomCase value={(e) => e > 10}>Hello from Func 30</CustomCase>
      <CustomCase value="20">Hello 20</CustomCase>
      <CustomCase value="10">Hello 10</CustomCase>
      <DefaultCase>Hello 40 Default</DefaultCase>
    </CustomSwitch>
  );
};

export default Page;
