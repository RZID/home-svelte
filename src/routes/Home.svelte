<script lang="ts">
  import classNames from "classnames";
  import profilePhoto from "../assets/images/photo.jpg";
  import Card from "../components/Card/Card.svelte";
  import type { DataType } from "../components/Card/$types";

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDarkMode) {
    // User prefers dark mode
    console.log("Dark mode is preferred.");
  } else {
    // User prefers light mode
    console.log("Light mode is preferred.");
  }

  const coreConcepts: DataType[] = [
    {
      letter: "C",
      title: "Collaboration",
      description:
        "Emphasizes the ability to work effectively within a team, fostering open communication, and synergizing diverse talents and ideas for innovative solutions."
    },
    {
      letter: "O",
      title: "Optimization",
      description:
        "Signifying the skill to optimize code, processes, and resources, ensuring efficiency and performance in every aspect of software development."
    },
    {
      letter: "R",
      title: "Resilience",
      description:
        "Represents the capacity to bounce back from challenges, learn from failures, and adapt to changing circumstances, ensuring continuous improvement and growth."
    },
    {
      letter: "E",
      title: "Expertise",
      description:
        "Highlights mastery and deep understanding of programming languages, frameworks, and tools, enabling the creation of sophisticated and impactful software solutions."
    }
  ];
</script>

<div class={classNames("bg-light", "h-screen", "overflow-y-auto")}>
  <!-- Top -->
  <div
    class={classNames(
      "flex-1",
      "xl:px-36",
      "flex",
      "xl:flex-row",
      "items-center",
      "min-h-[75vh]",
      "bg-eliteBlue",
      "flex-col-reverse",
      "transition-all",
      "duration-300",
      "justify-center",
      "gap-y-[50px]"
    )}
  >
    <div class={classNames("xl:flex-1", "flex", "flex-col")}>
      <h2
        class={classNames(
          "text-[20px]",
          "md:text-[40px]",
          "text-winterOasis",
          "select-none",
          "text-center",
          "xl:text-start"
        )}
      >
        Hello there!
      </h2>
      <h1
        class={classNames(
          "text-winterOasis",
          "text-[25px]",
          "md:text-[45px]",
          "lg:text-[60px]",
          "select-none",
          "text-center",
          "xl:text-start"
        )}
      >
        I'm Ramadhanu
      </h1>
      <p
        class={classNames(
          "text-winterOasis",
          "text-[20px]",
          "select-none",
          "text-center",
          "xl:text-start"
        )}
      >
        I'm a Tech Enthusiast & Software Engineer
      </p>
    </div>
    <img
      src={profilePhoto}
      draggable="false"
      alt="ProfilePict"
      class={classNames(
        "h-[20vh]",
        "w-[20vh]",
        "lg:h-[40vh]",
        "lg:w-[40vh]",
        "rounded-full",
        "duration-300",
        "brightness-50",
        "hover:lg:h-[50vh]",
        "transition-all",
        "hover:rounded-3xl",
        "object-cover",
        "select-none"
      )}
    />
  </div>

  <!-- About -->
  <div
    class={classNames("px-10", "md:px-0", "container", "mx-auto", "py-[50px]")}
  >
    <h1 class={classNames("text-[25px]", "font-bold")}>
      Embark on a Journey of Innovation with Me!
    </h1>

    <div class={classNames("flex", "flex-col", "gap-y-[20px]")}>
      {#each ["In the ever-evolving realm of technology, I'm not just a Full Stack Engineer; I'm a curious explorer, a relentless learner, and a meticulous craftsman. Imagine stepping into a digital world where creativity meets precision, and innovation knows no bounds.", "My journey as a tech enthusiast has led me to the heart of JavaScript and TypeScript, where I've embraced the power of NodeJS. With tools like ReactJS, VueJS, ExpressJS, and NestJS, I've built digital landscapes that seamlessly blend functionality and aesthetics. These frameworks are not just tools to me; they're brushes, and every line of code is a stroke on the canvas of possibility.", "But my story doesn't end there. In the vast universe of technology, stagnation is the enemy. That's why I make it my mission to ride the waves of change, embracing new frameworks, libraries, and languages as they emerge. I see trends not as passing fads but as whispers of the future, guiding me toward the next innovative solution.", "When I work, I don't just write code; I weave stories. Each project is a narrative waiting to unfold—a captivating user experience, an efficient system, a game-changing application. My attention to detail ensures that every line of code contributes to the plot, creating a seamless and delightful journey for users.", "I don't just deliver professional results; I deliver experiences. I transform ideas into interactive adventures and concepts into reality. With me on your team, you're not just hiring a Full Stack Engineer; you're enlisting a passionate storyteller and a dedicated problem-solver.", "Let's embark on this adventure together. Let's explore the uncharted territories of technology, push boundaries, and redefine what's possible. Connect with me, and let's craft the next chapter of innovation."] as aboutMe}
        <p>{aboutMe}</p>
      {/each}
    </div>
  </div>

  <!-- CORE Concept -->
  <div class={classNames("bg-linoleumBlue", "text-white")}>
    <div
      class={classNames(
        "px-[40px]",
        "md:px-0",
        "md:container",
        "mx-auto",
        "py-[40px]",
        "flex",
        "flex-col",
        "gap-[40px]"
      )}
    >
      <h1 class={classNames("text-[30px]")}>
        I'm in <span class={classNames("font-bold")}>"CORE"</span>
      </h1>

      <div
        class={classNames(
          "grid",
          "lg:grid-cols-4",
          "md:grid-cols-2",
          "grid-cols-1",
          "gap-[40px]"
        )}
      >
        {#each coreConcepts as data}
          <Card {data} />
        {/each}
      </div>

      <h1>
        With a strong "CORE," software developers are equipped with the
        collaborative spirit, optimization prowess, resilience in the face of
        adversity, and the expertise needed to create exceptional and enduring
        technological advancements.
      </h1>
    </div>
  </div>
</div>
