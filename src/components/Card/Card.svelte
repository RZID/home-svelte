<script lang="ts">
  import classNames from "classnames";
  import type { DataType } from "./$types";

  export let data: DataType = {
    title: "",
    letter: "C",
    description: ""
  };
</script>

<div
  class={classNames(
    "bg-winterOasis",
    "flex-1",
    "rounded-lg",
    "px-[12px]",
    "py-[20px]",
    "flex",
    "flex-col",
    "gap-[14px]"
  )}
>
  <div class={classNames("flex", "flex-row", "justify-center")}>
    <div
      class={classNames(
        "bg-poppyRed",
        "w-[40px]",
        "h-[40px]",
        "rounded-full",
        "flex",
        "flex-row",
        "justify-center",
        "items-center"
      )}
    >
      <h1 class={classNames("text-white", "font-bold")}>
        {data.letter}
      </h1>
    </div>
  </div>
  <h3 class={classNames("text-black", "text-center", "font-semibold")}>
    {data.title}
  </h3>

  <p class={classNames("text-black", "text-center")}>
    {data.description}
  </p>
</div>
