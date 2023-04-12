import { useEffect } from "react";
import Table from "../components/table/Table"
import { supabase } from "../lib/supabase";
import { useState } from "react";



export default function proposals({ }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getProposals()
  }, [])

  async function getProposals() {
    try {

      let { data, error, status } = await supabase
        .from("proposals")
        .select()

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDataTable(data);
      }
    } catch (error) {
      alert("Error loading data!");
    }
  }

  

  const column = [
    { heading: 'Yacht Name', value: 'pnme' },
    { heading: 'Yacht Type', value: 'ptype' },
    { heading: 'Proposal Date', value: 'created_at', format: 'date' },
    { heading: 'Proposals', value: 'pservice' },
    { heading: 'Edit', value: 'pid' },

  ]

  const link = "proposals/";


  return (


    <main>
      <h1 className="text-lg font-bold">Proposals</h1>
      <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg h-full">

      </div>
      <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg h-full">
        <Table data={dataTable} column={column} route={link} />
      </div>
    </main>

  )
}