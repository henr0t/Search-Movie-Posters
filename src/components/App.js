import React from "react";
import tmdb from "../api/tmdb";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { movies: [] };

  onSearchSubmit = async (searchterm) => {
    const response = await tmdb.get("/search/movie", {
      params: { query: searchterm },
    });
    this.setState({ movies: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h3 class="ui block header">A Movie Poster Database</h3>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList posters={this.state.movies} />
      </div>
    );
  }
}

export default App;
