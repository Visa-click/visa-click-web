<script>
	import "./app.css";
	import CardIcon from '$lib/images/CardIcon.svg?raw'
	import Telegram from '$lib/images/Telegram.svg?raw'
	import ArrowDown from '$lib/images/ArrowDown.svg?raw'
	import LeftPapers from '$lib/images/LeftPapers.svg?raw'
	import RightPapers from '$lib/images/RightPapers.svg?raw'
</script>

<div class="app bg-[#fff] h-screen w-[1920rem] text-[16rem] font-ceraregular">
	<div class="w-full h-[792rem]">
		<div class="bg-[#256DF61A]/[.1] w-full h-full rounded-b-[64rem] flex justify-center">
			<div class="w-[1280rem] h-[90rem] flex items-center justify-between">
				<button class="flex items-center gap-[16rem] text-[24rem]">
					{@html CardIcon} 
					<p class="font-cerabold font-bold">Виза.клик</p>
				</button>
				<div class="flex gap-[16rem] text-white *:flex *:items-center *:rounded-[12rem]">
					<button class="gap-[16rem] bg-[--block] pl-[16rem] justify-between">
						Мы в Телеграме
						{@html Telegram} 
					</button>
					<button class="bg-[#256DF6] px-[24rem]">
						Подать заявку на визу
					</button>
					<button class="bg-[#425983] px-[24rem]">
						Узнать статус
					</button>
				</div>
			</div>
			<div class="absolute top-[72rem] w-full flex flex-col items-center">
				<img class="w-[336rem] h-[336rem]" src="favicon.png"/>
				<div class="text-black flex flex-col justify-center items-center text-center gap-[24rem]">
					<p class="text-[42rem] font-bold font-cerabold">
						Сервис для оформления визы<br/>в Южную Корею всего за 490 рублей
					</p>
					<p class="text-[16rem]">
						Просто заполните заявку, загрузите скан вашего паспорта,<br/>и мы возьмем на себя всю остальную работу.
					</p>
					<button class="bg-[#256DF6] text-[16rem] text-white px-[24rem] py-[11rem] rounded-[12rem]">
						Подать заявку на визу
					</button>
					<button class="py-[72rem] text-[20rem] text-[#425983] flex flex-col justify-center items-center gap-[12rem]">
						Узнайте подробности
						{@html ArrowDown} 
					</button>
				</div>
			</div>
			<div class="absolute left-[0] top-[99rem]">
				{@html LeftPapers}
			</div>
			<div class="absolute right-[0] top-[94rem]">
				{@html RightPapers}
			</div>
		</div>
	</div>

	<main>
		<slot></slot>
	</main>

	<footer>
	</footer>
</div><slot></slot>
