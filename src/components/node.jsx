function Node(props) {
    return ( 
        <div
            //Display node state data
            onMouseOver={() => props.setSelectedNode([
                {
                    id: props.node, 
                    position: props.position, 
                    row: props.row
                }
            ])}
            onMouseOut={() => props.setSelectedNode([])}
            className="bg-emerald-400 w-[100px] h-[100px] font-bold mask mask-hexagon text-white hover:opacity-50 cursor-pointer relative flex justify-center"
        >
            {props.node}
            <div className="w-5 h-5 bg-black absolute bottom-0 rounded-xl">

            </div>
            <div className="w-5 h-5 bg-black absolute top-0 rounded-xl">

            </div>
        </div>
     );
}

export default Node;