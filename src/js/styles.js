"use strict";

module.exports = function (conf)
{
	return {
		content: {
			height: conf.contentHeight,
			'margin': "0px 0px 18px 0px",
			position: 'relative'
		},

		imgBox: {
			width: conf.imgWidth,
			height: conf.imgHeight,
			'margin': '0px 0px 14px 0px',
			'& img':{
				width: '100%',
				height: '100%'
			}
		},

		productInfo: {
			position: 'relative'
		},

		h2: {
			color: "#ff6200",
			margin: "0px 10px",
		    'line-height': '17px'
		},

		note: {
			display: 'none',
			'text-align': "left",	
			color: 'grey',				
			margin: '5px 10px',
			'overflow-y': 'auto',
			'max-height': conf.noteMaxHeight
		},

		linkRow: {
			position: "absolute",
			bottom: '0px',
		    'margin-left': '10px'
		},

		main: {
			'text-align': "left",
			'vertical-align': "top",
			'overflow-y': 'hidden',
			'max-height': conf.descrMaxHeight,
			'height': conf.descrInitHeight,
		    margin: '5px 10px'
		},				

		dlink: {
			color: "#ff6200",
			margin: "0px 0px 18px 0px",
			'text-decoration': "underline",					
			cursor: "pointer",
			'&:hover': {
				color: "black"
			}
		}
	};
};