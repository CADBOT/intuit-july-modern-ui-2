import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsPresent from '../components/Products.jsx'

                         /*redux state*/
function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch, ownProps) {

}
let Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPresent)

export default Products


export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: store.getState().products
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    let {store} = this.props
    store.register(this.onChange)
  }

  onChange() {
    let {store} = this.props
    this.setState({
      products: store.getState().products
    })
  }

  render() {
    {/*todo pass props to inner */}
    <Inner {...this.state} />
  }
}
