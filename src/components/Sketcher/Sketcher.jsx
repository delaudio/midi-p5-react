import React, {Component} from 'react';
import * as S from './style';
import * as SK from '../../sketches/sketches';

class Sketcher extends Component {
	constructor() {
		super();
		this.state = {
		};
	};

	switchSketch(midiNote) {
		switch(midiNote) {
			case 65:
				return <SK.Test/>;
			case 64:
				return <SK.Test2/>;
			case 63:
				return <SK.Test3/>;
			default:
				return <h1>no switch</h1>
		}
	}

	render() {
		return (
			<S.Main>
				<S.Div className="body">
					{this.switchSketch(this.props.midiNote)}
				</S.Div>
			</S.Main>
		)
	}
}

export default Sketcher;