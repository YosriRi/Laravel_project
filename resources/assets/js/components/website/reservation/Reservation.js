import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Reservation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="col">
					<div id="overlayRes"></div>
					<div className="containerRes calendar">
						<div className="header">
							<div className="icon arr prev"></div>
							<div className="month">May 2014</div>
							<div className="icon arr next"></div>
						</div>
						<table>
							<tbody>
								<tr>
									<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
								</tr>
								<tr>
									<td className="notCurMonth">29</td><td className="notCurMonth">30</td>
									<td>1</td><td>2</td><td className="curDay">3</td><td>4</td><td>5</td>
								</tr>
								<tr>
									<td>6</td><td className="holiday">7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
								</tr>
								<tr>
									<td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td>
								</tr>
								<tr>
									<td>20</td><td>21</td><td>22</td><td className="holiday">23</td><td>24</td><td>25</td><td>26</td>
								</tr>
								<tr>
									<td>27</td><td>28</td><td>29</td><td>30</td>
									<td className="notCurMonth">1</td><td className="notCurMonth">2</td><td className="notCurMonth">3</td>
								</tr>
							</tbody>
						</table>
						<button className="button-big" id="add_event">Add event</button>
					</div>
					<form action="" className="containerRes booking" name="booking">
						<div className="header">
							<div className="dest">
								<h2 className="Res">Hotel Relais</h2>
								<div className="row">
									<div className="icon"></div>
									<p>Paris, France</p>
								</div>
							</div>
						</div>
						<div className="dates" data-type="none">
							<label htmlFor="checkin">Check in</label>
							<div className="input-text">
								<input type="datetime" value="9 July, 2016" id="checkin" readOnly />
								<div className="icon pop-up"></div>
							</div>
							<label htmlFor="checkout">Check out</label>
							<div className="input-text">
								<input type="datetime" value="16 July, 2016" id="checkout" readOnly />
								<div className="icon pop-up"></div>
							</div>
							<div className="div-chck">
								<input type="checkbox" id="check" />
								<div className="icon input-text"></div>
								<label htmlFor="check" className="checkbox">Flexible dates</label>
							</div>
						</div>			
						<ul className="persons">
							<li className="Res">
								<label>Adults</label>
								<div className="input-text">
									<select name="adults">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>   
									</select>
									<div className="icon"></div>
								</div>
							</li>
							<li className="Res">
								<label>Children</label>
								<div className="input-text">
									<select name="children">
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>   
									</select>
									<div className="icon"></div>
								</div>
							</li>
						</ul>
						<button className="button-big" id="search"><div className="icon"></div>Search rooms</button>
					</form>
				</div>
			</div>
		);
	}
}

if (document.getElementById('reservationComponent')) {
	ReactDOM.render(<Reservation />, document.getElementById('reservationComponent'));
}
