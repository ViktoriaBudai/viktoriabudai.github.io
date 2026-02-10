
export const PROJECTS = [
    {
        title: "Until the Fields: Farmageddon",
        description: "A cozy 3D puzzle‑platformer where you play as different animals, each with unique abilities. Work together with your animal friends to escape the barn and find your way out of the farm.",
        longDescription: `
        Project Description

        This project was developed as part of a course, where our team created a 3D puzzle‑platformer game in Unity.
        The core mechanic revolves around switching between three different animals the Mouse, the Spider, and the Cow. Each has unique abilities that help the player solve puzzles.
        Since only one animal can be controlled at a time, the challenge lies in choosing the right character for each situation and coordinating their abilities to achieve their goal.

        At this stage, the game contains only the first level, the storm‑damaged barn filled with flooded areas, broken structures, and puzzles that introduce the three animals’ abilities.

        About our main Characters
        • The Mouse navigates through pipes and chews ropes or wires
        • The Spider swings across flooded areas and pulls objects with her web
        • The Cow uses her strength to move or break obstacles once she is freed

        The level design encourages players to experiment with switching between characters to overcome platforming challenges, environmental hazards, and multi‑step puzzles.

        The project was developed around a four‑month period.

        The animals are ready to escape… and you can help them! The demo is available on Steam now.
        
        My Role

        • Spider mechanics (swinging, web pulling)
        • Storybook code for turning page and UI integration based on the input device
        • Level design contributions
        • Puzzle ideas (catapult, moving platforms, swing points, plug‑out mechanics)
        • Narrative design (prologue + background story)
        • Storybook illustrations
        `,

        roles: ["Programmer", "Level Designer", "Narrative Designer", "2D Artist"],
        roleDetails: {
          "Programmer": {
            info: 
            `My responsibility was the Spider mechanics what included the web swing and spider abilities like plug out, pull object or even open a door with a web.
                
            I developed the Spider web swinging and web ability interactions.

            Challenges

            • In the begining the Spider web shoot and swing was overpowered.

            `,
            images: ["/gallery/code_swing.png", "/gallery/swing.png"]
          },
          "Level Designer": {
            info: `Designed simple platform and puzzle element for the game, like catapult, moving platforms, interactable object with web.
            Game element what I designed or co-designed:

            • Catapult puzzle
            • Moving platforms in the Spider platform area
            • Spider "plug-out" mechanic
            • Swing points
            • The electric lock puzzle for freeing the Cow
            
            Participated in level design sessions and contributed ideas to the overall puzzle flow of the barn level.`,
            
            images: ["/gallery/web_pull.png", "/gallery/puzzle_design.png"]
          },
          "Narrative Designer": {
            info: `I wrote the game’s background story and narrator script, establishing the tone and personality of the narrator.
            I also directed the voice actor, guiding performance style, and emotional tone to match the game’s atmosphere and story beats.`,
            images: ["/gallery/img1.png", "/gallery/chapter1.png"]
          },
          "2D Artist": {
            info: `I created original hand‑drawn digital illustrations and narrative text for a pre‑made storybook asset used in our 3D puzzle‑platformer game.
            
            The storybook appears as an in‑game element that introduces the characters, the background story, and key moments from farm life, helping establish the emotional tone of the experience.
            
            All artwork was produced in Krita using a drawing tablet, working in a traditional sketch‑based style rather than vector art.
            The illustrations are rendered entirely in greyscale, focusing on line quality, shading, and contrast to convey mood and storytelling without the use of color.
            My workflow included rough sketches, refined line art, shading, and final polish.

            In addition to creating the visual and written content, I also implemented the completed pages into the storybook asset within Unity, ensuring the illustrations and text were correctly integrated and functioned as part of the game’s narrative flow.

            The assets include:

            • Greyscale character illustrations
            • Key narrative moments from farm life
            • Scene compositions supporting the game’s atmosphere
            • Page layouts combining text and illustration

            This work demonstrates my ability to create cohesive visual assets, adapt traditional drawing techniques to a digital workflow, and integrate narrative content into a game environment.
            `,
            images: ["/gallery/page5_sketch.png","/gallery/page5.png", "/gallery/mouse_sketch.png","/gallery/mouse.png"]
          }
        },
        tech: ["Unity", "C#", "3D", "Krita"],
        steamLink: "https://store.steampowered.com/app/4129640/Until_the_Fields_Farmageddon/",
        gitLink: "",
        videoLink: "https://www.youtube.com/embed/Ygkoji2HrWc",
        image: "/gallery/farmageddon_image1.png",
        gallery: "/gallery/img1.png",
    },
    {
        title: "FatStack",
        description: "It is a strategic 2D card game developed in Unity, based on the traditional Hungarian game Zsír, but with a whimsical twist. I created everything from scrach, from the game mechanics to the visual design. This project is still in development and designed to run in browsers via WebGL.",
        longDescription: `A solo-developed 2D Unity WebGL card game inspired by a Hungarian classic. I implemented the gameplay logic, designed the interface and created all custom card visuals using vector art in Figma. While the core gameplay rules are based on the traditional Hungarian card game Zsír, but I’m adding a few exciting twists to give it a fresh and fun feel. I’m building the entire codebase from scratch, including the digital game mechanics, scoring logic, and rule handling within Unity. I also reimagined the visual style to give the game a fresh, cartoon-inspired look while preserving the essence of the original. The game is still under development.`,
        roles: ["Programmer", "Game Designer", "2D Artist"],
        tech: ["Unity WebGL", "C#", "2D", "Krita"],
        gitLink: "https://github.com/ViktoriaBudai/FatStack",
        demoLink: "https://viktoriabudai.github.io/FatStack/",
        image: "/gallery/fatstack_img.png",
        gallery: "/gallery/card_game_demo.png"
    },
    {
        title: "Professinal Portfolio",
        description: "Designed and built a responsive portfolio website using Vite and React to showcase my technical and artistic work.",
        roles: ["Backend Programmer", "Frontend Programmer", "UI Designer"],
        tech: ["React", "JavaScript", "Vite", "GitHub Pages", "Tailwind CSS"],
        image:"/gallery/portfolio_img.png", 
    },
    {
      title: "The Enchanted Pages",
      description: "An Android mobile game built in Unity. The game blends visual novel storytelling, puzzle mechanics, and a 3D explorable environment. Players inherit a mysterious bookshop and follow cryptic clues left in an old journal, uncovering enchanted books, solving environmental puzzles, and unraveling the magical history of their family.",
      longDescription: "",
      roles: ["Programmer", "Game Designer", "Gameplay UI Developer"],
      roleDetails: {
        "Programmer": {
          info: `
          • Implemented core player movement systems including walking, jumping, and collision‑based interactions.
          • Implemented mobile input controls using on‑screen touch joysticks and buttons for smooth and responsive gameplay.
          • Created object interaction logic such as picking up items and triggering gameplay events.
          • Built NPC interaction functionality for quest acquisition and progression.
          • Implemented a simple quest system where collected items (e.g., keys) appear in the quest and inventory UI.
          • Programmed inventory logic to track collected items and update UI text dynamically.
          • Developed door‑unlocking mechanics tied to inventory items, enabling seamless level transitions without loading screens.
          • Ensured all gameplay systems worked reliably on Android devices and integrated smoothly with the UI and my teammate's work`,
          images: []
        },
        "Game Designer": {
          info: `
          • Conceived the game’s core idea combining visual novel elements, puzzles, and 3D exploration.
          • Designed the story setup, quest flow, and environmental puzzle structure.
          • Created the narrative hook involving a mysterious inherited bookshop and magical family secrets.`,
          images: []
        },
        "Gameplay UI Developer": {
          info: `
          • Implemented core gameplay features and systems in the game.
          • Built interactive gameplay UI components (Exit flow, inventory button, quest button, confirmation dialogs) using Unity’s UI system.
          • Integrated UI elements with gameplay logic to ensure smooth player interaction.`,
          images: ["/gallery/TEP1.png"]
        }
      },
      tech: ["Unity", "Android Mobile", "C#", "2D", "3D"],
      gitLink: "https://github.com/ViktoriaBudai/The_Enchanted_Pages",
      videoLink: "https://www.youtube.com/embed/WBz7IWYZPKE",
      image: "/gallery/theenchantedpages_img.png",
      gallery: "",
    },
    {
      title: "Lunar Woods",
      description: "A first‑year Unity project where our team created a small 3D fantasy adventure demo game. Players take on the role of the last surviving Fairy in a fading forest, completing NPC quests, earning rewards, and uncovering the mystery behind the forest’s decay and their own forgotten identity.",
      longDescription: "",
      tech: ["Unity", "C#", "3D"],
      gitLink: "https://github.com/ViktoriaBudai/Lunar_Woods_group",
      videoLink: "https://www.youtube.com/embed/4O5j_7ZY_gw",
      image: "/gallery/lunarwoods_img.png",
      gallery: "",
    },


];