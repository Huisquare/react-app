import { FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  inform: () => void;
}

function Like({ inform }: Props) {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
    inform();
  };
  if (clicked)
    return (
      <div>
        <FaHeart onClick={() => toggle()} />
      </div>
    );
  else
    return (
      <div>
        <FaHandHoldingHeart onClick={() => toggle()} />
      </div>
    );
}

export default Like;
