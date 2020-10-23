import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 15);
    this.setState({ spans });
  };

  render() {
    const { original_title, poster_path, overview } = this.props.img;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          title={original_title + ": " + overview}
          alt={original_title}
          src={"http://image.tmdb.org/t/p/w500/" + poster_path}
        />
      </div>
    );
  }
}

export default ImageCard;
