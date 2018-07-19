<div id="overlayRes"></div>
	<div class="containerRes calendar">
		<div class="header">
			<div class="icon arr prev"></div>
			<div class="month">May 2014</div>
			<div class="icon arr next"></div>
		</div>
		<table>
			<tr>
				<th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
			</tr>
			<tr>
				<td class="notCurMonth">29</td><td class="notCurMonth">30</td>
				<td>1</td><td>2</td><td class="curDay">3</td><td>4</td><td>5</td>
			</tr>
			<tr>
				<td>6</td><td class="holiday">7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
			</tr>
			<tr>
				<td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td>
			</tr>
			<tr>
				<td>20</td><td>21</td><td>22</td><td class="holiday">23</td><td>24</td><td>25</td><td>26</td>
			</tr>
			<tr>
				<td>27</td><td>28</td><td>29</td><td>30</td>
				<td class="notCurMonth">1</td><td class="notCurMonth">2</td class="notCurMonth"><td class="notCurMonth">3</td>
			</tr>
		</table>
		<button class="button-big" id="add_event">Add event</button>
	</div>


	<form action="" class="containerRes booking" name="booking">
		<div class="header">
			<div>
				<h2 class="Res">Hotel Relais</h2>
				<div class="icon"></div>
				<p>Paris, France</p>
			</div>
		</div>
		
		<div class="dates" data-type="none">
			<label for="checkin">Check in</label>
			<div class="input-text">
				<input type="datetime" value="9 July, 2016" id="checkin" readonly>
				<div class="icon pop-up"></div>
			</div>

			<label for="checkout">Check out</label>
			<div class="input-text">
				<input type="datetime" value="16 July, 2016" id="checkout" readonly>
				<div class="icon pop-up"></div>
			</div>

			<div class="div-chck">
				<input type="checkbox" id="check">
				<div class="icon input-text"></div>
				<label for="check" class="checkbox">Flexible dates</label>
			</div>
		</div>
		
		<ul class="persons">
			<li class="Res">
				<label>Adults</label>
				<div class="input-text">
					<select name="adults">
						<option value="1">1</option>
						<option value="2" selected="selected">2</option>
						<option value="3">3</option>
						<option value="4">4</option>   
					</select>
					<div class="icon"></div>
				</div>
			</li>
			<li class="Res">
				<label>Children</label>
				<div class="input-text">
					<select name="children">
						<option value="0">0</option>
						<option value="1" selected="selected">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>   
					</select>
					<div class="icon"></div>
				</div>
			</li>
		</ul>

		<button class="button-big" id="search"><div class="icon"></div>Search rooms</button>
	</form>