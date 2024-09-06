import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserPage = () => {
const { name } = useParams()
const navigation = useNavigate()
const GoBackHandler = () => {
    // navigation('/user') you can use -1 as well
    navigation(-1)
}

  return (
    <div className=" bg-zinc-200 mt-10 w-1/2 m-auto p-5 rounded-md">
      <h1 className="text-5xl font-semibold text-center mb-5 text-red-400">
        User Details
      </h1>
      <p className="mb-5 text-center text-3xl font-semibold text-red-400">
        Hi {name}
      </p>
      <button onClick={GoBackHandler} className="ml-[43%] px-3 py-1 bg-red-300 rounded-md mb-5">
        Go Back
      </button>
    </div>
  )
}

export default UserPage