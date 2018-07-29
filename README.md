# GnomeApp

This project was generated using the Angular 6 CLI and NGRX.

## Reasons

NGRX and NGRX effects were both chosen as it made managing the state of the filters much easier than if attempting to do the same with a top-level service utilizing Subjects or Behavioral Subjects, which at times are unreliable. It also makes it easier to scale the complexity of the application. For example, rendering all 1,000+ gnomes at one time could be excessive. With Ngrx already set up, it would be easier to implement client-side infinite scrolling to waste less resources.

Bootstrap was used because, well, it makes everything easier really.
