import React from 'react';
import Sketch from 'react-p5';

class Test3 extends React.Component {

	setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
	};
	draw = p5 => {
		p5.background(0);
		p5.fill(0,255,0);
		p5.ellipse((p5.windowWidth/2), (p5.windowHeight/2), 500, 500);
	};

	render() {
		return (
			<Sketch setup={this.setup} draw={this.draw} />
		);
	}
}

export default Test3;
