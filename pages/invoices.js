import Table from "../components/table/Table";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function invoices({ }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getInvoices()
  }, [])

  async function getInvoices() {
    try {

      let { data, error, status } = await supabase
        .from("yachts")
        .select()

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDataTable(data);
        console.log(data);
      }
    } catch (error) {
      alert("Error loading data!");
    }
  }

  const column = [
    { heading: 'Yacht Name', value: 'yacht_name' },
    { heading: 'Port of Registration', value: 'yacht_port_of_reg' },
    { heading: 'Yacht Type', value: 'yacht_type' },
    { heading: 'Type', value: 'yacht_use_type' },
    { heading: 'Tonnage', value: 'yacht_tonnage' },
    { heading: 'Edit', value: 'yid' },
  ]

  const link = "yachts/"

  return (
    <main>
      <h1 className="text-lg font-bold">Invoices</h1>
      <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg h-full">
        
      </div>
      <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg h-full">
        <Table data={dataTable} column={column} route={link}/>
      </div>
    </main>
  )
}