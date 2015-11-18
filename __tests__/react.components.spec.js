jest.dontMock('../app/components/Home');
jest.dontMock('../app/components/ProductsTable');
jest.dontMock('../app/components/Categories');
jest.dontMock('../app/components/Paging');
jest.dontMock('../app/components/Product');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Home = require('../app/components/Home');
const Paging = require('../app/components/Paging');
const Product = require('../app/components/Product');
const ProductsTable = require('../app/components/ProductsTable');
const Categories = require('../app/components/Categories');

describe('Home', () => {

    it('renders', () => {
	  	const shallowRenderer = TestUtils.createRenderer();
		shallowRenderer.render(<Home/>);
		const component = shallowRenderer.getRenderOutput();
	    expect(component).not.toBeNull();
  });
});

describe('ProductsTable', () => {

    it('renders', () => {
	  	const shallowRenderer = TestUtils.createRenderer();
		shallowRenderer.render(<ProductsTable products={[{name:"Product1"},{name:"Product2"}]}/>);
		const component = shallowRenderer.getRenderOutput();
	    expect(component).not.toBeNull();
  });
});

describe('Product', () => {

    it('renders', () => {
    	var product = {name:'test', sku:'sku', salesPrice:'salesPrice'};
	  	const shallowRenderer = TestUtils.createRenderer();
		shallowRenderer.render(<Product product={product} key={product.name} />);
		const component = shallowRenderer.getRenderOutput();
	    expect(component).not.toBeNull();
  });
});

describe('Categories', () => {

    it('renders', () => {
	  	const shallowRenderer = TestUtils.createRenderer();
		shallowRenderer.render(<Categories categories={[{id:1, name:'test'}, {id:2, name:'test2'}]}/>);
		const component = shallowRenderer.getRenderOutput();
	    expect(component).not.toBeNull();
  });
});

describe('Paging', () => {

    it('renders', () => {
	  	const shallowRenderer = TestUtils.createRenderer();
		shallowRenderer.render(<Paging pages={[{current:1, total:2, items:[{id:1}]}]}/>);
		const component = shallowRenderer.getRenderOutput();
	    expect(component).not.toBeNull();
  });
});