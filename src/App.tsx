import type React from "react";

const App: React.FC = () => {
	return (
		<main>
			<div id="bg-images">
				<div id="hand-box" className="relative top-0 left-0 h-[68vh] w-full md:h-screen md:w-[70vw]">
					<img
						className="absolute z-0 min-h-full min-w-full object-cover opacity-75"
						src="/hand.png"
						alt="drowning hand"
					/>
					<div id="woman-frame" className="absolute top-8 right-0 z-20 h-[60%] w-[44%] md:h-[70%] md:w-[45%]">
						<img
							className="min-h-full rounded-b-[6rem] rounded-tl-[6rem] border-[1rem]! border-primary! border-solid! object-cover object-[65%-0] md:rounded-b-[20rem] md:rounded-tl-[15rem] md:border-[1.5rem]!"
							src="/woman.jpeg"
							alt="wondering woman"
						/>
					</div>
				</div>
				<div
					id="balls-box"
					className="fixed right-[-5rem] bottom-[-8rem] size-[15rem] md:right-[-5rem] md:bottom-[-15rem] md:size-[30rem]"
				>
					<img className="min-h-full min-w-full object-fill" src="/balls.svg" alt="decor-balls" />
				</div>
			</div>
			<header className="fixed top-[4rem] z-100 flex w-[70%] flex-col rounded-r-[10rem] bg-primary p-[0.8rem]! font-garet! shadow-2xl md:w-[50%] md:items-center md:rounded-r-[20rem] md:p-[2rem]!">
				<div className="fixed top-[1rem] left-[1rem] flex flex-row items-center gap-2">
					<img className="size-[2rem]" src="/book.svg" alt="book icon" />
					<text>EBOOK</text>
				</div>
				<text className="font-bold text-[1.3rem] md:text-[3.5rem]">Alívio Emocional</text>
				<text className="font-bold text-[2.7rem] leading-none md:text-[7rem]">IMEDIATO</text>
			</header>
		</main>
	);
};

export default App;
