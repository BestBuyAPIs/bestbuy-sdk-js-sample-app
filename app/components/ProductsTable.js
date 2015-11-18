import React from 'react';
import Product from './Product';

class ProductsTable extends React.Component {
	
	render(){		
			var rows = [];
			this.props.products.forEach( (product)=> {
				rows.push(<Product product={product} key={product.name} />);
			});
			
		return (
				<table className="table-bordered table">
					<thead className="table-head">
						<tr>
							<td className="col-md-8"><strong>Name</strong></td>
							<td className="col-md-2"><strong>SKU</strong></td>
							<td className="col-md-2"><strong>Sale Price</strong></td>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			);
	}
}
module.exports = ProductsTable;