import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
function Bloques() {
  const params = useParams();
  const [block, setBlock] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/blocks/${params.id}`).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setBlock(data);
      });
    });
  }, []);

  return (
    <pre>
      {JSON.stringify(block, null, 4)}
    </pre>
  )
}

export default Bloques