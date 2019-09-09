import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
		this.loopListings = this.loopListings.bind(this);
	}

	// async test() {}
	loopListings() {
		const filteredData = this.props.globalState.filteredData;

		//checks if the there are actually properties in the filtered data in filteredData and
		// if there is no property returns sorry your filter did not match any listings
		if (filteredData === undefined || filteredData.length == 0) {
			return 'Sorry your filter did not match any listing';
		}

		//if there are properties in filteredData, returns them to be rendered by the render method
		return filteredData.map((listing, index) => {
			if (this.props.globalState.view == 'box') {
				return (
					<div className="col-xl-2 col-lg-3 col-md-4 col-sm-12" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center center`
								}}
							>
								<span className="address">{listing.address}</span>
								<div className="details">
									<div className="col-md-3">
										<div className="user-img"></div>
									</div>

									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Nina Smith</span>
											<span className="listing-date">05/05/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												<i className="fa fa-square-o" aria-hidden="true"></i>
												<span> {listing.floorSpace} ft&sup2;</span>
											</div>
											<div className="rooms">
												<i className="fa fa-bed" aria-hidden="true"></i>
												<span>{listing.rooms} rooms</span>
											</div>
										</div>
										<a href="#" className="view-link">
											View Listing
										</a>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">${listing.price}</span>
								<span className="location">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
									{listing.city}, {listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			} else if (this.props.globalState.view == 'list') {
				return (
					<div className="col-lg-6 col-md-6 col-sm-12" key={index}>
						<div className="listing">
							<div
								className="listing-img"
								style={{
									background: `url("${listing.image}") no-repeat center center`
								}}
							>
								<span className="address">{listing.address}</span>
								<div className="details">
									<div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
										<div className="user-img"></div>
									</div>

									<div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
										<div className="user-details">
											<span className="user-name">Nina Smith</span>
											<span className="listing-date">05/05/2019</span>
										</div>
										<div className="listing-details">
											<div className="floor-space">
												<i className="fa fa-square-o" aria-hidden="true"></i>
												<span> {listing.floorSpace} ft&sup2;</span>
											</div>
											<div className="rooms">
												<i className="fa fa-bed" aria-hidden="true"></i>
												<span>{listing.rooms} rooms</span>
											</div>
										</div>
										<a href="#" className="view-link">
											View Listing
										</a>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="price">${listing.price}</span>
								<span className="location">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
									{listing.city}, {listing.state}
								</span>
							</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<section id="listings">
				<section className="search-area">
					<input type="text" name="search" onChange={this.props.change} />
				</section>

				<section className="sortby-area">
					<div className="results">
						{this.props.globalState.filteredData.length} results found
					</div>
					<div className="sort-options">
						<select
							name="sortby"
							className="sortby"
							onChange={this.props.change}
						>
							<option value="price-dsc">Lowest Price</option>
							<option value="price-asc">Highest Price</option>
						</select>
						<div className="view">
							<i
								className="fa fa-th-list"
								name="list"
								aria-hidden="true"
								onClick={this.props.changeView}
							>
								list
							</i>
							<i
								className="fa fa-th"
								name="box"
								aria-hidden="true"
								onClick={this.props.changeView}
							>
								box
							</i>
						</div>
					</div>
				</section>
				<div className="row">
					<section className="listings-results">{this.loopListings()}</section>
				</div>
				<section id="pagination">
					<ul className="pages">
						<li>Prev</li>
						<li className="active">1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}
