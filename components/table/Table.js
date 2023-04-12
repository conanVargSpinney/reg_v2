import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";


export default function Table({data, column, route}){

 

return(
   <table className="table-auto w-full">
    <thead>
        <tr>
            {column.map((item, index) => <TableHeadItem key={index} item={item}/>)}
        </tr>
    </thead>
    <tbody>
        {data.map((item, index)=> <TableRow key={index} item={item} column={column} route={route}/>)}
    </tbody>
   </table>
)
    
}