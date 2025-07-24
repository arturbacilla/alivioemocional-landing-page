import * as React from "react";
import useCurrentBreakpoint from "./hooks/useCurrentBreakpoint";
import { Carousel, CarouselContent, CarouselItem } from "./components/ui/carousel";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./components/ui/button";

interface CardComment {
	name: string;
	comment: string;
}

const list = [
	"Ferramentas que funcionam na hora da crise.",
	"Técnicas de respiração, presença e autocompaixão.",
	"Apoio para lidar com ansiedade, tristeza e dor profunda.",
	"Reconexão com o sentido da vida, no seu tempo",
];

const App: React.FC = () => {
	const plugin = React.useRef(Autoplay({ delay: 8000, stopOnInteraction: false }));

	const [cards, setCards] = useState<CardComment[]>([]);

	useEffect(() => {
		fetch("/cards.json")
			.then((response) => response.json())
			.then((jsonData) => setCards(jsonData));
	}, []);

	const breakpoint = useCurrentBreakpoint() || "xs";

	return !!breakpoint && !!cards.length ? (
		<main className="relative flex h-[100vh] w-[100vw]! select-none flex-col overflow-hidden lg:flex-row">
			<section id="content" className="max-h relative min-h-[60vh] lg:min-w-[70vw]!">
				<div id="main-split" className="z-99 flex h-[100%]! flex-row">
					<div id="text-information" className="z-99 flex w-[50%] flex-col font-bold font-garet! lg:w-[85%]">
						<header
							id="title"
							className="absolute top-[4.5vh] z-100 flex w-[70vw]! flex-col rounded-r-[10rem] bg-primary p-[0.8rem]! shadow-2xl md:items-center lg:top-[7vh] lg:w-[52vw]! lg:rounded-r-[20rem]"
						>
							<h1 className="font-bold text-[2vh] lg:text-[4vh]">Alívio Emocional</h1>
							<h1 className="font-bold text-[4vh] leading-none lg:text-[8vh]">IMEDIATO</h1>
						</header>

						<div id="ebook-tag" className="flex h-[25%]! flex-row items-start gap-2 p-[2vw]! lg:h-[25%]! lg:p-[1vw]! ">
							<img className="size-[5vw] lg:size-[2vw]" src="https://cdn.alivioemocional.help/book.svg" alt="book icon" />
							<span className="text-[3.5vw] lg:text-[1.2vw]">EBOOK</span>
						</div>

						<div
							id="items-list"
							className="flex w-[100%]! flex-col gap-[1vh] px-[4vw]! py-[1vh]! lg:gap-[2vh] lg:py-[2vh]!"
						>
							<h3 className="text-[100%] text-secondary lg:text-[3.5vh]">Um refúgio seguro</h3>
							<h3 className="text-[1.5vh] text-black lg:text-[3vh]">O que você vai encontrar aqui:</h3>
							{list.map((item: string, id: number) => (
								<div className="flex flex-row gap-1 text-[1.4vh] lg:text-[2.5vh]" key={`item-${id + 1}`}>
									<div>🌿</div>
									<span>{item}</span>
								</div>
							))}
						</div>

						<Button
							variant="link"
							className="z-99 h-[6vh] w-[60vw]! rounded-r-[3rem]! bg-gradient-to-b from-[#ff3131] to-[#ff914d] text-center font-bold! font-garet! text-[2.5vh]! text-black hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-[#ff3131] lg:mt-[4vh]! lg:h-[10vh] lg:w-[80%]! lg:text-[4vh]! dark:focus:ring-[#ff3131]"
							onClick={() => window.open(import.meta.env.VITE_PUBLIC_KIWIFY_URL, "_blank")}
						>
							<svg
								className="size-[2vh] lg:size-[3vh]!"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 18 21"
							>
								<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
							</svg>
							Adquira já
						</Button>
					</div>
					<div id="portrait-image" className="z-80 w-[50%] pt-[2vh]! lg:pt-[3vh]!">
						<img
							className="min-h-[65%] rounded-b-[25vw] rounded-tl-[25dvw] border-[3vw]! border-primary! border-solid! object-cover object-[65%-0] lg:rounded-b-[20vw] lg:rounded-tl-[15vw] lg:border-[1.3vw]!"
							src="https://cdn.alivioemocional.help/woman.jpeg?f=webp"
							alt="wondering woman"
						/>
					</div>
				</div>
				<div className="absolute right-[-20vw] bottom-[2vh] z-99 flex flex-col lg:right-[-35vw] lg:bottom-[18vh] lg:flex-row">
					<img
						className="z-5 ml-[4vw]! size-[18vw] rotate-[20deg] scale-x-[-1] object-fill lg:size-[10vw] lg:rotate-[-85deg] lg:scale-x-[1] lg:self-start"
						src="https://cdn.alivioemocional.help/arrow.svg"
						alt="arrow"
					/>
					<div className="z-99 flex h-[30%] w-[60%] flex-col text-[1.5vh] lg:w-[50%] lg:self-end lg:text-[3vh] ">
						<h2 className="text-center font-bold font-fredoka-one">seu Kit de primeiros socorros da alma</h2>
						<span className="text-center font-gochi-hand">por Lanbapk</span>
					</div>
				</div>
				<img
					id="hand-background"
					className="absolute top-0 left-0 z--1 min-h-full! object-cover opacity-75 lg:min-w-full!"
					src="https://cdn.alivioemocional.help/hand.png?f=webp"
					alt="drowning hand"
				/>
			</section>
			<section id="cards" className="h-[100%]! p-[1rem]! lg:min-h-[100%] lg:max-w-[30%]">
				<Carousel
					className="z-99 max-h-[100%]! w-[100%]"
					opts={{
						align: "start",
					}}
					orientation={["xs", "sm", "md"].includes(breakpoint) ? "horizontal" : "vertical"}
					plugins={[plugin.current]}
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent className="h-[100%]! gap-[1rem] lg:h-[100%]! lg:max-h-[50dvh]!">
						{cards.map(({ name, comment }, key) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<CarouselItem key={key} className="w-full">
								<Card>
									<CardContent className="flex flex-col gap-[1.2rem] p-[1rem]! ">
										<p className="text-justify font-gochi-hand text-[100%]">"{comment}"</p>
										<span className="self-end font-bold font-garet text-[50%] lg:text-[80%]">{name}</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<img
					className="absolute right-[-15%] bottom-[-15%] z-0 size-[50vw] object-fill lg:right-[-7%]! lg:bottom-[-30%]! lg:size-[25vw]"
					src="https://cdn.alivioemocional.help/balls.svg"
					alt="decor-balls"
				/>
			</section>
		</main>
	) : (
		<span>Loading...</span>
	);
};

export default App;
