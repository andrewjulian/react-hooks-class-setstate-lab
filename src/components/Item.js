import React from "react";

class Item extends React.Component {
  state = {
    isInCart: false,
  };

  handleAddToCartClick = () => {
    this.setState({
      isInCart: !this.state.isInCart,
    });
  };

  render() {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.name}</span>
        <span className="category">{this.category}</span>
        <button
          className={this.state.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
