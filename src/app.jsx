import { useState } from 'preact/hooks'

const nodes = [

];

const map = [
  {row1: []},
  {row2: []},
  {row3: []},
  {row4: []},
  {row5: []},
]

const createNodes = () => {
    for(let i = 0; i < 19; i++) {
      let position = "";
      if(i <= 2) {
        map[0].row1.push({value: i, position: position})
      } else if (i <= 6) {
        map[1].row2.push({value: i, position: position})
      } else if (i <= 11) {
        map[2].row3.push({value: i, position: position})
      } else if (i <= 15) {
        map[3].row4.push({value: i, position: position})
      } else if (i <= 18) {
        map[4].row5.push({value: i, position: position})
      } else {
        console.log("error in node map");
      }
        
      nodes.push({value: i, position: position});
    }
}

export function App() {

  const nodesState = [nodes, setNodes] = useState(0);

  createNodes();
  console.log(nodes);
  console.log(map);
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='flex flex-row'>
      {map[0].row1.map(row => (
        <div className='w-20 h-20 bg-blue-600 border mask mask-hexagon'>{row.value} {row.position}</div>
      ))}
    </div>
    <div className='flex flex-row'>
      {map[1].row2.map(row => (
        <div className='w-20 h-20 bg-blue-600 border mask mask-hexagon'>{row.value} {row.position}</div>
      ))}
    </div>
    <div className='flex flex-row'>
      {map[2].row3.map(row => (
        <div className='w-20 h-20 bg-blue-600 border mask mask-hexagon'>{row.value} {row.position}</div>
      ))}
    </div>
    <div className='flex flex-row'>
      {map[3].row4.map(row => (
        <div className='w-20 h-20 bg-blue-600 border mask mask-hexagon'>{row.value} {row.position}</div>
      ))}
    </div>
    <div className='flex flex-row'>
      {map[4].row5.map(row => (
        <div className='w-20 h-20 bg-blue-600 border mask mask-hexagon'>{row.value} {row.position}</div>
      ))}
    </div>
    </div>
  )
}
