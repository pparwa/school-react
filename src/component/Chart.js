import React from 'react'
import { BarChart,XAxis,YAxis,Tooltip,CartesianGrid,Bar,Legend} from 'recharts';

export default function Chart() {
const data = [
  {
    "name": "پایه اول",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "پایه دوم",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "پایه سوم",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "پایه چهارم",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "پایه پنجم",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "پایه ششم",
    "uv": 2390,
    "pv": 3800
  }
]


  return (
    <>
  
  <BarChart width={900} height={350} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
</>
  )
}
