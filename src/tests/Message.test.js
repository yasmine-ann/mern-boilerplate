import React from "react";
import { shallow, mount, render } from "enzyme";

import Message from "../client/components/Message.js";

describe("< Message />", () => {
  test("renders a single <h1> tag", () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
