"use strict";

var React = require('react'),
	jss = require('jss'),
	nested = require('jss-nested'),
	vendorPrefixer = require('jss-vendor-prefixer'),
	$ = require('detached-jquery-1.11.3').getJQuery();

jss.use(nested());
jss.use(vendorPrefixer());

var	UseSheet = require('react-jss')(jss);

var productView = React.createClass({
	propTypes: {
		product: React.PropTypes.object.isRequired,
		styles: React.PropTypes.object.isRequired,
		linkText: React.PropTypes.string.isRequired,
		setLinkText: React.PropTypes.func.isRequired,
		hideDetails: React.PropTypes.string.isRequired,
		showDetails: React.PropTypes.string.isRequired
	},

	toggleDetails: function(){
		var	img = $('[class^=imgBox]'),
    		img_height = img ? img[0].clientHeight : 0,
    		link = $('[class^=linkRow]'),
    		link_height = link ? link[0].offsetHeight : 0,
    		delay = 400,
    		note = $('[class^=note]'),
    		main = $('[class^=main]'),
    		prod = $('[class^=productInfo]'),
    		setLink = this.props.setLinkText,
    		showDetails = this.props.showDetails,
    		hideDetails = this.props.hideDetails;

    	if(this.props.linkText === showDetails){
			prod.animate({'top': '-=' + img_height}, 
			{
				start: function(){
					img.animate({'opacity': 0}, delay);
    				link.animate({'bottom': '+=' + img_height}, delay);
    			},
    			complete: function(){
    				setTimeout(function(){
	    				link.animate({'bottom': '0'}, delay);
	    				main.css({'height': 'auto', 'overflow-y': 'auto'}, delay);
	    				note.fadeIn(delay);	
    				}, 100);	    					    				
    			}
    		});		    		    				

    		setLink(hideDetails);		
		} else {
			prod.animate({'top': '+=' + img_height}, 
				{
					start: function(){
	    				note.fadeOut(delay);
	    				main.css({'height': '30px', 'overflow-y': 'hidden'}, delay);
	    			},
	    			complete: function(){
	    				img.animate({"opacity":"1"}, delay/2);
	    			}
	    		});	
    		setLink(showDetails);;		
		}
	},

	render: function() {
		var cls = this.props.styles.classes,
			resolveImgPath = function(imgName){
				return "../img/" + imgName;
			};

		return (
			<div key={this.props.product.title} className={cls.content}>
				<div key={this.props.img} className={cls.imgBox}>
					<img src={resolveImgPath(this.props.product.img || this.props.product.field)}
					 	alt="Info-Box"/>
				</div>

				<div className={cls.productInfo}>
					<h2 className={cls.h2}>{this.props.product.title}</h2>
					<div className={cls.main}>
						{this.props.product.description}
					</div>
					<div className={cls.note}>
						{this.props.product.note}
					</div>
				</div>
				<div className={cls.linkRow}>
					<span
				 		onClick={this.toggleDetails} 
						className={cls.dlink}>
							{this.props.linkText}
					</span>
				</div>
			</div>
		);
	}
});

module.exports = UseSheet(productView);