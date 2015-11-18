import React from 'react';

class Product extends React.Component {

	constructor(props)
	{
		super(props);
	}

	render() {
		var name = <span>{this.props.product.name}</span>;
		var sku = <span>{this.props.product.sku}</span>;
		var salePrice =<span>${this.props.product.salePrice}</span>;
		return (
				<tr>
					<td>{name}</td>
					<td>{sku}</td>
					<td>{salePrice}</td>
					</tr>		
			);
	}
}
module.exports = Product;