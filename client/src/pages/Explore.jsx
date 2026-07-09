import ExploreCard from "../components/ExploreCard"
import {getQuizes} from '../services/API'
import {useState, useEffect} from 'react'
import { TbCategory } from "react-icons/tb";

export default function Explore() {
    const[quizes, setQuizes] = useState([])

    useEffect(()=> {
        fetchQuizes()
    }, [])
    const fetchQuizes = async()=> {
         const res = await getQuizes()
         setQuizes(res.data)
         console.log("quizes: ", res.data)
    }



    return (
        <>
        <div className="font-roboto m-4">
            <div>
                <h1 className="font-bold text-4xl">Explore Quizzes</h1>
                <p className="text-gray-300">Discover and play various quizzes created by our community.</p>
            </div>

            <div className="h-0.5 w-full bg-gray-800 my-10"></div>

            <div className="flex items-center gap-2 text-xl mb-5">
                <TbCategory className="text-blue-500 text-2xl"/>All Quizzes
            </div>

            <div>
            <ExploreCard quizes={quizes}/>
            </div>
        </div>
        </>
    )
}