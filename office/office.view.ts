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
				8 * 6378136 / this.geo_accuracy()!
			)
		}
		
	}
}