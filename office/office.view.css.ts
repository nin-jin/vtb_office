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
				style: `solid`,
				width: `1vmin`,
				color: `#002882`,
			},
		},
		
		Self: {
			width: `25vmin`,
			height: `25vmin`,
			'@': {
				mol_view_error: {
					NotAllowedError: {
						visibility: `hidden`,
					},
				},
			},
			':hover': {
				width: `30vmin`,
				height: `30vmin`,
			},
			':active': {
				width: `35vmin`,
				height: `35vmin`,
			},
		},
		
	} )
	
}
