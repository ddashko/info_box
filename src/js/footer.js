"use strict";

var React = require('react'),
	jss = require('jss'),
	nested = require('jss-nested'),
	vendorPrefixer = require('jss-vendor-prefixer');

jss.use(nested());
jss.use(vendorPrefixer());

var UseSheet = require('react-jss')(jss);

var footer = React.createClass({
	propTypes: {
		styles: React.PropTypes.object.isRequired,
		prevSlide: React.PropTypes.func.isRequired,
		nextSlide: React.PropTypes.func.isRequired
	},

	render: function() {
		var cls = this.props.styles.classes;
		return (
			<div className={cls.footer}>
				<span key="Prev" onClick={this.props.prevSlide}
					className={cls.btnPager + ' ' + cls.btnLeft}>
					<span className={cls.btnContent + ' ' + cls.btnLeftContent}>
						Prev
					</span>
				</span>
				<span key="Next" onClick={this.props.nextSlide}
					className={cls.btnPager + ' ' + cls.btnRight}>
					<span className={cls.btnContent + ' ' + cls.btnRightContent}>
						Next
					</span>
				</span>
				
				<span key="Find" className={cls.btnFind}>
					<span className={cls.btnContent + ' ' + cls.btnRightContent}>
						Find A Store
					</span>
				</span>
			</div>
		);
	}
});

module.exports = UseSheet(footer);