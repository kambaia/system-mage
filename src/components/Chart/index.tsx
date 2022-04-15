import React from 'react'
import * as C from './styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    'Transfêrencia': 831982,
  },
  {
    name: 'Fev',
    'Transfêrencia': 126631,
  },
  {
    name: 'Mar',
    'Transfêrencia': 282883,
  },
  {
    name: 'Abr',
    'Transfêrencia': 4000,
  },
  {
    name: 'Mai',
    'Transfêrencia': 930283,
  },
  {
    name: 'Jun',
    'Transfêrencia': 83732,
  },
  {
    name: 'Jul',
    'Transfêrencia': 362397,
  },
  {
    name: 'Ago',
    'Transfêrencia': 49221,
  },
  {
    name: 'Set',
    'Transfêrencia': 3884,
  },
  {
    name: 'Oct',
    'Transfêrencia': 3910002,
  },
  {
    name: 'Nov',
    'Transfêrencia': 209192,
  },
  {
    name: 'Dez',
    'Transfêrencia': 1911994,
  },
]

export const Chart: React.FC = () => {
  return (
    <C.Container>
      <h3 className="chat-title">Análise de Transfêrencias Anual</h3>
      <ResponsiveContainer width="100%" aspect={4/1} height="250px">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#287bff" />
          <Line type="monotone" dataKey="Transfêrencia" stroke="#287bff" />
          <Tooltip label="Valor arrecadado"/>
		  <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
		</LineChart>
      </ResponsiveContainer>
    </C.Container>
  )
}