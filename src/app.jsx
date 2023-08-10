import { useState } from "preact/hooks";

const map = [
    {
        row: [
            { id: 0 },
            { id: 1 },
            { id: 2 }
        ],
    },
    { 
        row: [
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 }
        ] 
    },
    { 
        row: [
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 }
        ] 
    },
    { 
        row: [
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 }
        ] 
    },
    { 
        row: [
            { id: 16 },
            { id: 17 },
            { id: 18 },
        ] 
    },
];

export function App() {
    const [selectedNode, setSelectedNode] = useState([]);

    return (
        <div>
            {selectedNode.map((i) => {
                return (
                    <div className=" absolute font-bold text-2xl p-6">
                        Node ID: {i.id} <br></br> Row: {i.row + 1} <br></br> Position: {i.position + 1}
                    </div>
                    
                )
            })}
            <div className="w-full h-screen flex-col items-center justify-center flex">
            {map.map((obj, id) => {
                return (
                    <div className="flex flex-row">
                        {obj.row.map((node, index) => {
                            return (
                                <div
                                    //Display node state data
                                    onMouseOver={() => setSelectedNode([{id: node.id, position: index, row: id}])}
                                    onMouseOut={() => setSelectedNode([])}
                                    className="bg-emerald-400 w-[100px] h-[100px] font-bold mask mask-hexagon text-white flex items-center justify-center hover:opacity-50 cursor-pointer"
                                >
                                    {node.id}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
        </div>
        
    );
}
