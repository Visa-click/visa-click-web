<script>
	import "./app.css";
	import CardIcon from '$lib/images/CardIcon.svg?raw'
	import Telegram from '$lib/images/Telegram.svg?raw'
	import ArrowDown from '$lib/images/ArrowDown.svg?raw'
	import LeftPapers from '$lib/images/LeftPapers.svg?raw'
	import RightPapers from '$lib/images/RightPapers.svg?raw'

	import RedMarks from '$lib/images/step/RedMarks.svg?raw'
	import FillRequest from '$lib/images/step/FillRequest.svg?raw'
	import DataProcess from '$lib/images/step/DataProcess.svg?raw'
	import Confirmation from '$lib/images/step/Confirmation.svg?raw'
	import GotResponse from '$lib/images/step/GotResponse.svg?raw'
	import Step from '../components/Step.svelte'

	import RedBlot from '$lib/images/advantage/RedBlot.svg?raw'
	import Status from '$lib/images/advantage/Status.svg?raw'
	import Security from '$lib/images/advantage/Security.svg?raw'
	import Comfotable from '$lib/images/advantage/Comfotable.svg?raw'
	import Accuracy from '$lib/images/advantage/Accuracy.svg?raw'
	import Clock from '$lib/images/advantage/Clock.svg?raw'
	import Advantage from '../components/Advantage.svelte'
</script>

<div class="app bg-[#fff] w-[1920rem] text-[16rem] font-ceraregular flex flex-col">
	<div class="w-full h-[792rem]">
		<div class="bg-[#256DF61A]/[.1] w-full h-full rounded-b-[64rem] flex justify-center">
			<div class="w-[1280rem] h-[90rem] flex items-center justify-between">
				<button class="flex items-center gap-[16rem] text-[24rem]">
					{@html CardIcon} 
					<p class="font-cerabold font-bold">Виза.клик</p>
				</button>
				<div class="flex gap-[16rem] text-white *:flex *:items-center *:rounded-[12rem]">
					<button class="gap-[16rem] bg-[--block] pl-[16rem] justify-between">
						<a href="https://t.me/ketaketaru">Мы в Телеграме</a>
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
	<dev class="h-[910rem] flex flex-col py-[128rem] px-[320rem] gap-[48rem] relative">
		<div class="text-[42rem] font-cerabold text-bold">
			Как это работает:
		</div>
		<div class="absolute right-[68rem]">
			{@html RedMarks}
		</div>
		<div class="flex gap-[24rem] justify-between">
			<Step 
				step=1 
				title='Заполнение<br/>заявки'
				description='Войдите в личный кабинет на нашем сайте, чтобы отслеживать текущий статус вашей заявки'
				photo={FillRequest}
			/>
			<Step 
				step=2 
				title='Обработка<br/>данных' 
				padding=128
				description='Наш алгоритм автоматически обрабатывает введенные вами данные, проверяя их на корректностьи целостность.'
				photo={DataProcess}
			/>
			<Step 
				step=3 
				title='Подтверждение<br/>и отслеживание'
				description='Войдите в личный кабинет на нашем сайте, чтобы отслеживать текущий статус вашей заявки'
				photo={Confirmation}
			/>
			<Step 
				step=4 
				title='Получение<br/>визы' 
				padding=128
				description='После завершения рассмотрения вашей заявки посольством Южной Кореи вы получите уведомление о результате. В случае положительного решения, вы сможете получить вашу визу и готовиться к поездке в эту прекрасную страну.'
				photo={GotResponse}
			/>
		</div>
	</dev>
	<div class="flex justify-center relative">
		<div class="w-[1476rem] h-[762rem] bg-[#256DF6]/[.1] p-[98rem] rounded-[64rem] flex flex-col gap-[48rem]">
			<p class="text-[42rem] font-cerabold font-bold">
				Преимущества использования нашего сервиса:
			</p>
			<div class="flex justify-between pt-[128rem]">
				<Advantage 
					photo={Clock}
					title='Экономия<br/>времени'
					description='Забудьте о длительных очередях и бумажной волоките. Наш сервис позволяет оформить визу в Южную Корею всего за несколько минут, благодаря автоматизации процесса.'
				/>
				<Advantage 
					photo={Accuracy}
					title='Гарантированная<br/>точность'
					description='Наш алгоритм автоматически проверяет введенные данные, гарантируя их корректность и точность. Это исключает возможность ошибок и повторных запросов документов.'
					padding=128
				/>
				<Advantage 
					photo={Comfotable}
					title='Удобство<br/>использования'
					description='Наш интуитивно понятный интерфейс делает процесс заполнения заявки максимально простыми удобным. Вы сможете оформить визу, даже если вы никогда ранее не пользовались подобными сервисами.'
				/>
				<Advantage 
					photo={Security}
					title='Безопасность<br/>данных'
					description='Мы ценим вашу конфиденциальность. Все ваши личные данные хранятся и передаются в зашифрованном виде, обеспечивая полную безопасность вашей информации.'
					padding=128
				/>
				<Advantage 
					photo={Status}
					title='Отслеживание<br/>статуса'
					description='В личном кабинете вы сможете отслеживать текущий статус вашей заявки в реальном времени, всегда будучи в курсе ее продвижения.'
				/>
			</div>
		</div>
		<div class="absolute left-[96rem] bottom-[-94rem]">
			{@html RedBlot}
		</div>
	</div>
</div>