"use strict";

module.exports = function (conf)
{
	return {
		infoBox: {
			'font-family': "Arial",
			'font-size': "12px",
			width: conf.infoWidth,
			height: conf.infoHeight,
			position: 'relative',
			background: conf.background
		}
	};
};