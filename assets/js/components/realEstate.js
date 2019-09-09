import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from '../data/listingsData.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe',
			listingsData,
			city: 'All',
			hometype: 'All',
			rooms: 0,
			min_price: 0,
			max_price: 100000000,
			min_floor_space: 0,
			max_floor_space: 50000,
			filteredData: listingsData,
			populateFormsData: '',
			sortby: 'price-dsc',
			view: 'box',
			search: ''
		};
		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
		this.populateForms = this.populateForms.bind(this);
		this.changeView = this.changeView.bind(this);
	}

	async test() {}

	//onchange event handler. it assigns the value of the input fields to the corresponding
	//field in this.state and calls filteredData()
	change(event) {
		var name = event.target.name;
		var value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	}

	//sets the value of this.state.view to either list or box view to control the way
	//the filtered results are displayed
	changeView(event) {
		this.setState({
			view: event.target.getAttribute('name')
		});
	}

	//assigns new values that matches the value of the input fields to filteredData
	//which is then passed down as a prob to listings
	filteredData() {
		//filters the this.state.listingsData by this.state.min_price and max_price and
		//this.state.min_floor_space and max_floor_space. the result is assigned
		// to newData
		var newData = this.state.listingsData.filter(item => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.floorSpace >= this.state.min_floor_space &&
				item.floorSpace <= this.state.max_floor_space &&
				item.rooms >= this.state.rooms
			);
		});

		//checks if the user is trying to filter by city and if so further filters newData
		// by this.state.city
		if (this.state.city != 'All') {
			newData = newData.filter(item => {
				return item.city == this.state.city;
			});
		}

		//checks if the user is trying to filter by home type and if so further filters newData
		// by this.state.hometype
		if (this.state.hometype != 'All') {
			newData = newData.filter(item => {
				return item.hometype == this.state.hometype;
			});
		}

		//checks if the user is trying to filter by any of the extras fields and if so further filters newData
		// by that field
		this.state.populateFormsData.extras.map(extra => {
			if (this.state[extra] == true) {
				newData = newData.filter(item => {
					return item.extras.includes(extra);
				});
			}
		});

		//checks if the user is trying to change the sorting order of the filter result and if so
		//sorts the result according to the users preference (i still need to understand how exactly the sorting is performed)
		if (this.state.sortby == 'price-dsc') {
			newData = newData.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (this.state.sortby == 'price-asc') {
			newData = newData.sort((a, b) => {
				return b.price - a.price;
			});
		}

		//checks if the user is trying to use the search form to search for a property by either city,
		//state,price,rooms,floorspace,hometype and if so further filters newData according to the search term
		if (this.state.search != '') {
			newData = newData.filter(item => {
				var city = item.city.toLowerCase();
				var state = item.state.toLowerCase();
				var price = String(item.price);
				var rooms = String(item.rooms);
				var floorSpace = String(item.floorSpace);
				var hometype = item.hometype.toLowerCase();

				var searchText = this.state.search.toLowerCase();
				var n =
					city.match(searchText) ||
					state.match(searchText) ||
					price.match(searchText) ||
					rooms.match(searchText) ||
					floorSpace.match(searchText) ||
					hometype.match(searchText);

				if (n != null) {
					return true;
				}
			});
		}

		//finally assigns the filtered data in newData to filteredData which will then be accessed
		//through the global state by the listings component
		this.setState({
			filteredData: newData
		});
	}

	//this function populates the fields in the filter component with the appropriate
	// data to be filtered by. for example lets say we have five properties which are located in only kansas and
	//rosewood, this function makes sure that the filter by city section of the filter component contains only Kansas
	// and rosewood as filter options thereby making our program dynamic
	populateForms() {
		var cities = [];
		var hometypes = [];
		var rooms = [];
		var extras = [];

		this.state.listingsData.map(item => {
			cities.push(item.city);
			hometypes.push(item.hometype);
			rooms.push(item.rooms);
			item.extras.map(item => {
				extras.push(item);
			});
		});

		cities = new Set(cities);
		cities = [...cities];
		cities = cities.sort();

		hometypes = new Set(hometypes);
		hometypes = [...hometypes];
		hometypes = hometypes.sort();

		rooms = new Set(rooms);
		rooms = [...rooms];
		rooms = rooms.sort();

		extras = new Set(extras);
		extras = [...extras];
		extras = extras.sort();

		//stores the filter field values in this.state to be accessed by functions in the filter component
		//which access the values through the global state and do the actual work of populating the filter fields with the values
		this.setState(
			{
				populateFormsData: {
					hometypes,
					cities,
					rooms,
					extras
				}
			},
			() => {
				console.log(this.state);
			}
		);
	}

	//presorts the property listings according to price before mounting the component
	componentWillMount() {
		var listingsData = this.state.listingsData.sort((a, b) => {
			return a.price - b.price;
		});

		this.setState({
			listingsData
		});
	}

	render() {
		return (
			<div>
				<Header />
				<section id="content-area">
					<Filter
						change={this.change}
						globalState={this.state}
						populateAction={this.populateForms}
					/>
					<Listings
						change={this.change}
						globalState={this.state}
						changeView={this.changeView}
					/>
				</section>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
