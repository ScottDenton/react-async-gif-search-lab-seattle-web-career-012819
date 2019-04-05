import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {

  state={
      gifs:[],
      query:'dog'
  }
  componentDidMount(){
    this.fetchNewGifs(this.state.query)
  }

  fetchNewGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then((gifs) => {
          const urls = gifs.data.map(gif => ({ url: gif.images.original.url
          })
        )
        // console.log(urls)
          this.setState({ gifs: urls })
        })
  }


  render () {
    return(
      <div>
      <GifSearch fetchNewGifs={this.fetchNewGifs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }


}
