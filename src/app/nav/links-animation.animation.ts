import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
  keyframes
} from "@angular/animations";

export const linksAnimation = trigger("linksAnimation", [
  transition("* => *", [
    query(":enter", style({ opacity: 0, transform: "translateX(50px)" }), {
      optional: true
    }),
    query(
      ":enter",
      stagger("300ms", [
        animate(
          ".5s ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateX(50px)" }),
            style({ opacity: 1, transform: "translateX(0px)" })
          ])
        )
      ]),
      { optional: true }
    ),
    query(
      ":leave",
      stagger("200ms", [
        animate(
          ".2s ease-in",
          keyframes([
            style({ opacity: 1, transform: "translateX(0px)" }),
            style({ opacity: 0, transform: "translateX(50px)" })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);
