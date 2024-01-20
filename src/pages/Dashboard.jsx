import React ,{useState,useEffect} from 'react'
import axios from "axios"

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import {exercisepoint} from "../services/apis"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { getData,DeleteData } from '../services/operations/Allapi'
import { formatDate } from '../services/operations/formateDate'
import "../index.css"

const {
  
  DELETE_API
}=exercisepoint;



function Dashboard() {

    const TRUNCATE_LENGTH = 30

    const[exercise,setExercise]=useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getdata=async()=>{
            setLoading(true)
            let res=await getData();
            // console.log(res.data);
            setExercise(res.data);
            setLoading(true)
        }
        getdata();
    },[])

    const deleteExercise = (id) => {
      axios.delete(DELETE_API+id)
      .then((response) => {
        console.log(response.data);
      });
    const del = exercise.filter((el) => el._id !== id);
    setExercise(del);
  };

  return (
    <div className="w-[1080px] h-full bg-black   rounded-xl flex flex-col items-center justify-center mx-auto mt-8">
      <Table className="  rounded-xl card shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  text-white border border-richblack-800 ">
        <Thead>
          <Tr className="flex gap-x-4 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Name
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Section
            </Th>
           
          </Tr>
        </Thead>
        <Tbody>
          {exercise?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                No Exercises found
                {/* TODO: Need to change this state */}
              </Td>
            </Tr>
          ) : (
            exercise?.map((data) => (
              <Tr
                key={data._id}
                className="flex gap-x-4 border-b border-richblack-800 px-6 py-8"
              >
                <Td className="text-2xl Salsa flex flex-1 gap-x-12">
                    <p>{data.username}</p>
                   
                    
                <p className=" w-8/12 mx-auto text-center text-xs text-richblack-300">
                      {data.description.split(" ").length >
                      TRUNCATE_LENGTH
                        ? data.description
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        :data.description}
                    </p>
                   
                  
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-richblack-5">
                      {data.duration}hrs
                    </p>
                  
                    <p className="text-[12px] text-white">
                      Created: {formatDate(data.date)}
                    </p>
                   
                  </div>
                </Td>
               
               
                <Td className=" flex  text-sm font-medium text-richblack-100 ">
                  
                  <button
                        color="secondary"
                        onClick={() => deleteExercise(data._id)}
                      >
                        Delete
                      </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default Dashboard
