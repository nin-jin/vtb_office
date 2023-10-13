namespace $.$$ {
	
	$mol_style_define( $vtb_office, {
		
		font: {
			family: `Arial`,
		},
		
		Map: {
			align: {
				self: `stretch`,
			},
			justify: {
				self: `stretch`,
			},
		},
		
		Chrome: {
			justify: {
				self: `stretch`,
			},
			pointerEvents: `none`,
			Head: {
				background: {
					color: `#002882`,
				},
				border: {
					radius: 0,
				},
				justify: {
					content: `flex-start`,
				},
				padding: {
					right: `3.25rem`,
				},
			},
		},
		
		Logo: {
			height: `2.5rem`,
			width: `3.25rem`,
		},
		
		Title: {
			padding: $mol_gap.text,
			color: `white`,
			margin: `auto`,
		},
		
		Enter: {
			transform: `translate(-50%,-50%)`,
			position: `absolute`,
			left: `50%`,
			top: `50%`,
			overflow: `hidden`,
			padding: 0,
			border: {
				radius: `50%`,
			},
			box: {
				shadow: [{
					x: 0,
					y: 0,
					blur: 0,
					spread: `1vmin`,
					color: `#002882`,
				}]
			},
			':focus': {
				border: {
					radius: 0,
				},
				$mol_view: {
					width: `100vw`,
					height: `100vh`,
				},
			},
		},
		
		Self: {
			width: `25vmin`,
			height: `25vmin`,
			objectFit: `cover`,
			'@': {
				mol_view_error: {
					NotAllowedError: {
						visibility: `hidden`,
					},
				},
			},
			// ':hover': {
			// 	width: `30vmin`,
			// 	height: `30vmin`,
			// },
		},
		
	} )
	
}
