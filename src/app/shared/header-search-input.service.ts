import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

export type inputStateType = 'opened' | 'closed'

@Injectable()

export class HeaderSearchInputService {
  inputState: Subject<boolean> = new Subject<boolean>()

  changeInputState(state: boolean) {
    this.inputState.next(state)
  }
}
