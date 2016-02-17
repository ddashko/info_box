"use strict";

var React 	 = require('react'),
	ReactDOM = require('react-dom'),
	Products = require('../info_box'),
	ProductView = require('./productView'),
	Footer = require('./footer'),
	jss = require('jss'),
	nested = require('jss-nested'),
	vendorPrefixer = require('jss-vendor-prefixer'),
	stylesConfig = require('../stylesConfig'),
	$ = require('detached-jquery-1.11.3').getJQuery();

jss.use(nested());
jss.use(vendorPrefixer());

/*tasks:
- pass all stuff via props
- make sure animation looks the same as in sample
- check all dimensions, margins, paddings and colors
- clean up
- check sass to json compilers for cleaner styles
*/

var UseSheet = require('react-jss')(jss);

var InfoBox = UseSheet(React.createClass({
	hideDetails: "hide details",
	showDetails: "show details",

	getInitialState: function(){
		return {
			current: 0,
			max: Products.length - 1,
			text: this.showDetails
		};
	},

	setLinkText: function(val){
		this.setState({text: val});
	},

	resetLinkText: function(){
		this.state.text !== this.showDetails && this.setLinkText(this.showDetails);
	},

	nextSlide: function(){
		var curr = this.state.current,
			max = this.state.max;
		if(curr < max){
			this.setState({current: ++curr});
		};
		this.resetLinkText();
	},

	prevSlide: function(){
		var curr = this.state.current;
		if(curr > 0){
			this.setState({current: --curr});
		};
		this.resetLinkText();
	},

	componentDidUpdate: function(prevProps, prevState){
		if (this.state.current !== prevState.current){
			$('[class^=content]').hide().fadeIn(500);
		}
	},

	render: function() {	
		var stylesCommon = jss.createStyleSheet(require('./stylesCommon')(stylesConfig)).attach(),
			stylesFooter = jss.createStyleSheet(require('./footerStyles')(stylesConfig)).attach(),
			styles = jss.createStyleSheet(require('./styles')(stylesConfig)).attach();

		return (
			<div className={stylesCommon.classes.infoBox}>
				<div>
					<ProductView product = {Products[this.state.current]}
						linkText = {this.state.text}
						setLinkText = {this.setLinkText}
						hideDetails = {this.hideDetails} 
						showDetails = {this.showDetails} 
						styles={styles}/>
				</div>
				<Footer styles={stylesFooter} prevSlide={this.prevSlide} nextSlide={this.nextSlide} />				
			</div>
		);
	}
}));

ReactDOM.render(<InfoBox />, document.getElementById('app'));