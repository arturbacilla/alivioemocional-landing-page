import type React from "react";

const App: React.FC = () => {
	const list = [
		"Ferramentas que funcionam na hora da crise.",
		"Técnicas de respiração, presença e autocompaixão.",
		"Apoio para lidar com ansiedade, tristeza e dor profunda.",
		"Reconexão com o sentido da vida, no seu tempo",
	];

	return (
		<main className="select-none">
			<section id="bg-images" className="relative ">
				<div id="hand-box" className="absolute top-0 left-0 h-[68vh] w-full lg:h-screen lg:w-[70vw]">
					<img
						className="absolute z-0 min-h-full min-w-full object-cover opacity-75"
						src="/hand.png"
						alt="drowning hand"
					/>
					<div id="woman-frame" className="absolute top-8 right-0 z-20 h-[60%] w-[44%] lg:h-[70%] lg:w-[45%]">
						<img
							className="min-h-full rounded-b-[6rem] rounded-tl-[6rem] border-[1rem]! border-primary! border-solid! object-cover object-[65%-0] lg:rounded-b-[20rem] lg:rounded-tl-[15rem] lg:border-[1.5rem]!"
							src="/woman.jpeg"
							alt="wondering woman"
						/>
					</div>
				</div>
				<div
					id="balls-box"
					className="fixed right-[-5rem] bottom-[-8rem] size-[15rem] lg:right-[-5rem] lg:bottom-[-15rem] lg:size-[30rem]"
				>
					<img className="min-h-full min-w-full object-fill" src="/balls.svg" alt="decor-balls" />
				</div>
			</section>
			<header className="absolute top-[4rem] z-100 flex w-[70%] flex-col rounded-r-[10rem] bg-primary p-[0.8rem]! font-garet! shadow-2xl md:items-center lg:w-[50%] lg:rounded-r-[20rem] lg:p-[2rem]!">
				<div className="fixed top-[1rem] left-[1rem] flex flex-row items-center gap-2">
					<img className="size-[2rem]" src="/book.svg" alt="book icon" />
					<span>EBOOK</span>
				</div>
				<span className="font-bold text-[1.3rem] md:text-[2.2rem] lg:text-[3.5rem]">Alívio Emocional</span>
				<span className="font-bold text-[2.7rem] leading-none md:text-[5rem] lg:text-[7rem]">IMEDIATO</span>
			</header>
			<section
				id="main-text"
				className="absolute top-[11rem] left-[1rem] flex h-[40%] w-[12rem] flex-col gap-[0.8rem] font-bold font-garet! lg:top-[22rem] lg:left-[2rem] lg:w-[35%] "
			>
				<span className="text-secondary lg:text-[2.4rem]">Um refúgio seguro</span>
				<span className="text-[0.8rem] text-black lg:text-[1.8rem]">O que você vai encontrar aqui:</span>
				{list.map((item: string, id: number) => (
					<div className="flex flex-row gap-1 text-[0.9rem] lg:text-[1.4rem]" key={`item-${id + 1}`}>
						<div>🌿</div>
						<span>{item}</span>
					</div>
				))}
			</section>
		</main>
	);
};

export default App;
