import { useState } from "react";
// import Alert from "./components/Alert";
import Button from "./components/Button/Button";
// import ListGroup from "./components/ListGroup";
// import Like from "./components/Like/Like";

import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  const [expand, setExpand] = useState(false);

  if (expand)
    return (
      <div>
        <ExpandableText expand={expand} />
        <Button color="primary" onClick={() => setExpand(false)}>
          Less
        </Button>
      </div>
    );
  else
    return (
      <div>
        <ExpandableText expand={expand} length={20} />
        <Button color="primary" onClick={() => setExpand(true)}>
          More
        </Button>
      </div>
    );

  // return (
  //   <div>
  //     {alertVisible && (
  //       <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
  //     )}
  //     <Button color="primary" onClick={() => setAlertVisibility(true)}>
  //       hello
  //     </Button>
  //   </div>
  // );

  //   const items = ["New York", "Los Angeles", "San Francisco"];
  //   return (
  //     <div>
  //       <ListGroup
  //         heading="Cities"
  //         items={items}
  //         onSelectItem={(string) => console.log(string)}
  //       ></ListGroup>
  //     </div>
  //   );

  // return (
  //   <div>
  //     <Like inform={() => console.log("clicked!")} />
  //   </div>
  // );
}

export default App;
