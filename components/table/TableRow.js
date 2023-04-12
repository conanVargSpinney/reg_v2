import Link from "next/link";


export default function TableRow({ item, column, route }) {


  return (
    <tr>
      {column.map((columnItem, index) => {
        return columnItem.heading === "Edit" ? <td key={index} className="border-b border-grey py-4 text-left font-medium text-cyan-700"><Link href={route+item[`${columnItem.value}`]}>Edit</Link></td> 
        : <td key={index} className="border-b border-grey py-4 text-left">{item[`${columnItem.value}`]} </td>
      })}
    </tr>
  )
}