import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

enum Direction {
  UP = 1,
  DOWN = 0
}
@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective {
  @Input('appHideHeader') header: any;
  saveY = 0;
  direction: Direction = Direction.DOWN;
  previousY = 0;
  readonly scrollDistance = 50;

  constructor(private renderer: Renderer2, private domCtrl: DomController) { }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {

    if ($event.detail.currentY <= 0 || $event.detail.currentY == this.saveY){
      return;
    }

    const scrollTop: number = $event.detail.scrollTop;
    let newDirection = Direction.DOWN;
    let newPosition = -scrollTop + this.previousY;

    if (this.saveY > $event.detail.currentY) {
      newDirection = Direction.UP;
      newPosition -= this.scrollDistance;
    }

    if (newPosition < -this.scrollDistance) {
      newPosition = -this.scrollDistance;
    }

    let newOpacity = 1 - (newPosition / -this.scrollDistance);
    
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', Math.min(0, newPosition) + 'px');
      this.renderer.setStyle(this.header, 'opacity', newOpacity);
    });

    this.saveY = $event.detail.currentY;

    if (this.direction != newDirection) {
      this.direction = newDirection;
      this.previousY = scrollTop;
    }
  }
}
