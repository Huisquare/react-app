import { useState } from "react";

interface Props {
  expand: boolean;
  length?: number;
}

const ExpandableText = ({ expand, length = 100 }: Props) => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis id dolor, omnis corporis dolorem eligendi nesciunt adipisci, expedita facere quod non accusamus delectus. In sunt rerum necessitatibus consequatur sint?";

  if (expand) return <div>{text}</div>;
  else return <div>{text.substring(0, length)}...</div>;
};

export default ExpandableText;
