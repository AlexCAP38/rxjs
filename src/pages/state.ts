import { BehaviorSubject } from "rxjs";

/** Поток, содержащий значения громкости */
export const value$ = new BehaviorSubject<number>(30);

// export const mute$ = new BehaviorSubject<boolean>(false)