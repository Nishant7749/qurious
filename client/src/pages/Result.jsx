import { useState } from "react"
import success from '../assets/success.svg'

export default function Result({score, ques}) {

    return(
        <>
        <div className="font-roboto">
            <div className="flex flex-col items-center justify-center">

                <div className="w-1/4">
                    <img src={success} alt="success animation" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold">Quiz Completed</h1>
                </div>

                <div className="text-4xl m-5">You Scored <span className="text-blue-500 font-bold">{score}</span> out of {ques.length} !</div>

                <div></div>
                 
            </div>
        </div>
        </>
    )
}