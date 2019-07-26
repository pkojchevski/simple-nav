import {
  trigger,
  transition,
  query,
  style,
  state,
  animate
} from "@angular/animations";

export const toggleNavAnimation = trigger("toggleNavAnimation", [
  state(
    "open",
    style({
      opacity: 0,
      transform: "translateX(100%)"
    })
  ),
  state(
    "closed",
    style({
      opacity: 1,
      transform: "translateX(0)"
    })
  ),
  transition("open => closed", [animate("0.5s")]),
  transition("closed => open", [animate("0.5s")])
]);
