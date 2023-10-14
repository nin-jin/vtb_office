namespace $.$$ {
	export class $vtb_office extends $.$vtb_office {
		
		autorun() {
			super.autorun()
			this.locate()
			return []
		}
		
		@ $mol_mem
		locate() {
			if( !this.geo_longitude() ) return
			if( !this.geo_latitude() ) return
			if( !this.geo_accuracy() ) return
			this.Map().geo_jump(
				new $mol_vector_2d( this.geo_longitude()!, this.geo_latitude()! ),
				10_000_000 / this.geo_accuracy()!
			)
		}
		
		@ $mol_mem
		zoom( next?: number ) {
			return this.$.$mol_state_local.value( 'zoom', next ) ?? super.zoom()
		}
		
		@ $mol_mem
		center( next?: $mol_vector_2d< number > ) {
			return new $mol_vector_2d( ... ( this.$.$mol_state_local.value( 'center', next ) as any as [ number, number ] ?? super.center() ) )
		}
		
	}
}
