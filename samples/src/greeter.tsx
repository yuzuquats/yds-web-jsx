import Jsx from '../../src/YDSJsx.js';

const App = (
	<div>
		<p>My awesome app :)</p>
	</div>
);

const blah = (
  <>
    <div>Hello</div>
    <div>World</div>
  </>
);

document.body.append(App);
document.body.append(blah);
