import React from 'react'

class GifSearch extends React.Component {
  state = {
    query: ''
  }

  onSubmit =(e) =>{
    e.preventDefault();
    this.props.fetchNewGifs(this.state.query)
  }
  
render () {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.query} onChange={(e)=> this.setState({query: e.target.value})}/>
        </form>
      </div>
    )

  }
}

export default GifSearch ;
