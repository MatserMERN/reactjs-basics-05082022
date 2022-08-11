import React, { Component } from 'react'

export class CityAPI extends Component {
    constructor(){
        super()

        this.state= {
            cities : []
        }
    }

    componentDidMount(){
        fetch("https://nominatim.openstreetmap.org/search.php?city=boston&format=json")
        .then(response => response.json())
        .then(data => this.setState({cities: data}))
    }
  render() {
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>PlaceName</th>
                    <th>Class</th>
                    <th>License</th>
                    <th>OSMType</th>
                    <th>Type</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.cities.map(city => (
                        <tr key={city.place_id}>
                            <td>{city.display_name}</td>
                            <td>{city.class}</td>
                            <td>{city.licence}</td>
                            <td>{city.osm_type}</td>
                            <td>{city.type}</td>
                            <td>
                                <img src={city.icon} alt={city.display_name} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default CityAPI