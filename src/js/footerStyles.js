"use strict";

module.exports = function (conf)
{
	return {
		footer: {
			'user-select': "none",
			position: 'absolute',
			width: conf.infoWidth
		},

		btnFind: {
			width: "107px",
			height: "26px",
			display: "inline-block",
			color: "#ff6200",
			cursor: "pointer",
			'margin-right': "10px",
			float: 'right',
			background: "url('../img/button_find_white.png') 0 0 no-repeat",
			'&:hover': {
				background: "url('../img/button_find_orange.png') 0 0 no-repeat",
				color: "#fff"
			}
		},

		btnPager: {
			width: "68px",
			height: "26px",
			display: "inline-block",
			color: "#afafaf",
			cursor: "pointer"
		},

		btnContent: {
			display: "inline-block"
		},

		btnLeft: {
			'margin-left': "8px",
			background: "url('../img/btn_ic_gray_left.png') 4px 8px no-repeat, \
						 url('../img/button_bg_white_left.png') 0 0 no-repeat",								
			
			'&:hover': {
				background: "url('../img/btn_ic_brn_left.png') 4px 8px no-repeat, \
						 	 url('../img/button_bg_orange_left.png') 0 0 no-repeat",
				color: "#fff"
			}
		},

		btnLeftContent: {
			margin: "6px 0px 0px 32px"
		},

		btnRight: {
			'margin-left': "2px",
			background: "url('../img/btn_ic_gray_right.png') 51px 8px no-repeat, \
						 url('../img/button_bg_white_right.png') 0 0 no-repeat",								
			'&:hover': {
				background: "url('../img/btn_ic_brn_right.png') 51px 8px no-repeat, \
						 	 url('../img/button_bg_orange_right.png') 0 0 no-repeat",
				color: "#fff"
			}
		},

		btnRightContent: {
			margin: "6px 0px 0px 8px"
		}
	};
};