import React, { Component } from 'react';

export default class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
		this.cities = this.cities.bind(this);
		this.hometypes = this.hometypes.bind(this);
		this.rooms = this.rooms.bind(this);
		this.extras = this.extras.bind(this);
	}

	//calls the populateForms function to populate the filter fields
	componentWillMount() {
		this.props.populateAction();
	}

	// async test() {}

	//populates the filter by city fields
	cities() {
		if (this.props.globalState.populateFormsData.cities != undefined) {
			var { cities } = this.props.globalState.populateFormsData;
			return cities.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	//populates the filter by home type fields
	hometypes() {
		if (this.props.globalState.populateFormsData.hometypes != undefined) {
			var { hometypes } = this.props.globalState.populateFormsData;
			return hometypes.map(item => {
				return (
					<option key={item} value={item}>
						{item}
					</option>
				);
			});
		}
	}

	//populates the filter by number of rooms fields
	rooms() {
		if (this.props.globalState.populateFormsData.rooms != undefined) {
			var { rooms } = this.props.globalState.populateFormsData;
			return rooms.map(item => {
				return (
					<option key={item} value={item}>
						{item}+ Br
					</option>
				);
			});
		}
	}

	//populates the filter by extra features (features like elavators and pools and gyms) fields
	extras() {
		if (this.props.globalState.populateFormsData.extras != undefined) {
			var { extras } = this.props.globalState.populateFormsData;
			return extras.map(item => {
				return (
					<label>
						<span>{item}</span>
						<input
							type="checkbox"
							key={item}
							value={item}
							name={item}
							onChange={this.props.change}
						/>
					</label>
				);
			});
		}
	}

	render() {
		return (
			<section id="filter">
				<div className="inside">
					<h4>Filter</h4>
					<label htmlFor="city" className="title">
						City
					</label>
					<select
						name="city"
						className="filters city"
						onChange={this.props.change}
					>
						<option value="All">All</option>
						{this.cities()}
					</select>

					<label htmlFor="hometype" className="title">
						Home Type
					</label>
					<select
						name="hometype"
						className="filters hometype"
						onChange={this.props.change}
					>
						<option value="All">All</option>
						{this.hometypes()}
					</select>

					<label htmlFor="rooms" className="title">
						Rooms
					</label>
					<select
						name="rooms"
						className="filters rooms"
						onChange={this.props.change}
					>
						<option value="0">0+ Br</option>
						{this.rooms()}
					</select>

					<div className="filters price">
						<span className="title">Price</span>
						<input
							type="text"
							name="min_price"
							className="min_price"
							value={this.props.globalState.min_price}
							onChange={this.props.change}
						/>
						<input
							type="text"
							name="max_price"
							className="max_price"
							value={this.props.globalState.max_price}
							onChange={this.props.change}
						/>
					</div>
					<div className="filters floor_space">
						<span className="title">Floor Space</span>
						<input
							type="text"
							name="min_floor_space"
							className="min_floor_space"
							value={this.props.globalState.min_floor_space}
							onChange={this.props.change}
						/>
						<input
							type="text"
							name="max_floor_space"
							className="max_floor_space"
							value={this.props.globalState.max_floor_space}
							onChange={this.props.change}
						/>
					</div>
					<div className="filters extras">
						<span className="title">Extras</span>
						{this.extras()}
					</div>
				</div>
			</section>
		);
	}
}
