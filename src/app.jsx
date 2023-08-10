import { useState } from "preact/hooks";

const map = [
  { row: [0, 1, 2] },
  { row: [3, 4, 5, 6] },
  { row: [7, 8, 9, 10, 11] },
  { row: [12, 13, 14, 15] },
  { row: [16, 17, 18] },
];

export function App() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="w-full h-screen flex-col items-center justify-center flex">
      {map.map((obj, id) => {
        return (
          <div className="flex flex-row">
            {obj.row.map((node) => {
              return (
                <div
                  //Set state for selected node
                  className="bg-emerald-400 w-[100px] h-[100px] font-bold mask mask-hexagon text-white flex items-center justify-center hover:bg-black cursor-pointer"
                >
                  {node}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
