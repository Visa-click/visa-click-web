<script lang="ts">
    export let padding: string = '0';
    export let step: string
    export let title: string
    export let description: string
    export let photo: string
</script>

<div class="flex flex-col gap-[24rem] w-[302rem]" style="padding-top: {padding}rem;">
    <div class="h-[164rem] bg-[#256DF6]/[.1] rounded-[24rem] flex items-center justify-center">
        {@html photo}
    </div>
    <p class="text-white bg-[#256DF6] px-[12rem] py-[4rem] rounded-[32rem] text-[16rem] w-fit">Шаг {step}</p>
    <div class="flex flex-col gap-[12rem]">
        <div class="text-[24rem] font-cerabold text-bold">
            {@html title}
        </div>
        <div class="text-[20rem] text-[#000]/[.5]">
            {description}
        </div>
    </div>
</div>