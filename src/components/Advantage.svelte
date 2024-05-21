<script lang="ts">
    export let photo: string
    export let title: string
    export let description: string
    export let padding: string = '0'
</script>

<div class="flex gap-[24rem]" style="padding-top: {padding}rem;">
    <div class="flex flex-col items-center text-center gap-[32rem]">
        <div class="w-[236.8rem] flex flex-col gap-[12rem] relative">
            <div class="absolute bottom-[250rem] right-[50%] translate-x-[50%]">
                {@html photo}
            </div>
            <p class="text-[24rem] font-cerabold font-bold">{@html title}</p>
            <p class="text-[20rem] text-black/[.5]">{description}</p>
        </div>
    </div>
</div>