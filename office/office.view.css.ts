namespace $.$$ {
	
	$mol_style_define( $vtb_office, {
		
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
					right: `3.5rem`,
				},
			},
		},
		
		Logo: {
			height: `2.5rem`,
			width: `3.5rem`,
		},
		
		Title: {
			padding: $mol_gap.text,
			color: `white`,
			margin: `auto`,
		},
		
		Self: {
			border: {
				radius: `50%`,
				style: `solid`,
				width: `1vmin`,
				color: `#002882`,
			},
			transform: `translate(-50%,-50%) scaleX(-1)`,
			position: `absolute`,
			width: `20vmin`,
			height: `20vmin`,
			left: `50%`,
			top: `50%`,
		},
		
	} )
	
}
