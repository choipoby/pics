import React from "react";

class SearchBar extends React.Component {
  state = { term: "enter show you want to know" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmitted(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label> Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onClick={() => this.setState({ term: "" })}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
