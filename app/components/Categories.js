import React from 'react';
import ProductActions from '../actions/ProductsActions';

class Categories extends React.Component {
	
	contructor(){
		this.state = 'select';
	}

	handleChange(e) {
		var search = "categoryPath.id=" + e.target.value;
		ProductActions.getProducts(search); 
	}

	render(){
		var options = [];
		options.push(<option value="select" key="default">Select</option>);
		this.props.categories.forEach( (category)=> {
			options.push(<option value={category.id} key={category.id}>{category.name}</option>);
		});

		return (
				<select className="form-control drop" onChange={this.handleChange.bind(null)} value={this.state}>
					{options}
				</select>
			);
	}
}
module.exports = Categories;