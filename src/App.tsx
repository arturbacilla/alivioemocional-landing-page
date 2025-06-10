import type React from "react";

const App: React.FC = () => {
	return (
		<div id="bg-images">
			<div id="hand-box" className="fixed top-0 left-0 h-[65vh] w-full md:h-screen md:w-[70vw]">
				<img className="min-h-full min-w-full object-cover opacity-75" src="/hand.png" alt="drowning hand" />
			</div>
			<div
				id="balls-box"
				className="fixed right-[-5rem] bottom-[-8rem] size-[15rem] md:right-[-5rem] md:bottom-[-15rem] md:size-[30rem]"
			>
				<img className="min-h-full min-w-full object-fill" src="/balls.svg" alt="decor-balls" />
			</div>
		</div>
	);
};

export default App;
