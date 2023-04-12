import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Auth from '../components/Auth';
import Table from '../components/table/Table';
import Userstats from '../components/Userstats';
import { supabase } from '../lib/supabase';





export default function Home() {
  const session = useSession()

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getYachts()
  }, [])

  async function getYachts() {
    try {

      let { data, error, status } = await supabase
        .from("yachts")
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
    { heading: 'Yacht Name', value: 'yacht_name' },
    { heading: 'Port of Registration', value: 'yacht_port_of_reg' },
    { heading: 'Yacht Type', value: 'yacht_type' },
    { heading: 'Type', value: 'yacht_use_type' },
    { heading: 'Tonnage', value: 'yacht_tonnage' },
    { heading: 'Edit', value: 'yid' },
  ]

  const link = "yachts/"

  return (
    <>
      {!session ? (
        <Auth />
      ) : (
        <div>
          <h1 className="text-lg font-bold">Homepage</h1>
          <div className="container m-3">
            <Userstats />
            <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg h-full">
        
            </div>
            <div className="bg-light-lighter p-9 mx-2 my-2 rounded-lg">
              <Table data={dataTable} column={column} route={link}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
