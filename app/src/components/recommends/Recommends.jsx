import React, { useEffect, useContext } from "react";
import Recommend from "./Recommend";
import { Context } from "../utils/Context";

const Recommends = () => {
  // Make sure the parent of Posts is passing the right props!
  // const [recommends, setRecommends] = useState([]);

  const { recommendList, getData } = useContext(Context);

  useEffect(() => {
    console.log(recommendList);
    getData();
  }, []);
  return (
    <div>
      {/* map through the recommends here to return a Post component */}
      {recommendList.map((recommend) => (
        <Recommend key={recommend.id} recommend={recommend} />
      ))}
      {/* Check the implementation of recommend to see what props it requires! */}
    </div>
  );
};

export default Recommends;
