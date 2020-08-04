import React from 'react'
import './Tabel.css'

const Tabel = (prop) => {
    const data = prop.detail.map((data, index) => {
		return (
			<tr key={data.id}>
				<td>{index + 1}</td>
				<td>
                    {data.country}
                </td>
				<td>
					{data.cases}
				</td>
				<td>
					{data.todayCases}
				</td>
				<td>
					{data.deaths}
				</td>
				<td>
                    {data.todayDeaths}
				</td>
				<td>
					{data.recovered}
				</td>
                <td>
					{data.active}
				</td>
                <td>
					{data.critical}
				</td>
			</tr>
    )});
  return (
    <div className="table-container">					
			<div>
				<h1>COVID-19 DETAIL TRACKER</h1>
			</div>					
			<table className="table">
				<thead>
					<tr>
                      <th>No</th>
                      <th>Country</th>
                      <th>Cases</th>
                      <th>Today Cases</th>
                      <th>Deaths</th>
                      <th>Today Deaths</th>
                      <th>Recovered</th>
                      <th>Active</th>
                      <th>Critical</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</table>
		</div>
  )
}

export default Tabel
