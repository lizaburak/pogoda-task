import React from 'react';
import * as Api from 'typescript-fetch-api'
import map_img from "./map2.jpg"

const api = new Api.DefaultApi()

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(event) {
    const response = await api.map({ date: '' });
    this.setState({ map: response });
  }


  render() {
    return <div>
       <img src ={map_img}/> 
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <ol class="mapCss">
        {this.state.map.map((event) => <li> Температура :{event.degrees} Давление: {event.humidity}, Погода_на: {event.date}</li>)}
      </ol>
    </div>
  }
}

export default Table;