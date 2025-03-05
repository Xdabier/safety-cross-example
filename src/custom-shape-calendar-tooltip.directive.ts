import {Directive, ElementRef, Input, Renderer2, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomShapeCalendarTooltip]'
})
export class CustomShapeCalendarTooltipDirective implements OnInit {
  @Input() appCustomShapeCalendarTooltip = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => this.hideTooltip(), 300);
  }

  ngOnInit() {
    // this.showTooltip();
  }

  private showTooltip() {
    if (!this.appCustomShapeCalendarTooltip) {
      this.hideTooltip();
      return;
    }

    this.tooltipElement = this.renderer.createElement('div');
    if (!this.tooltipElement) {
      return;
    }

    this.getAllTooltips().forEach(tooltip => {
      this.renderer.removeChild(document.body, tooltip);
    });

    this.renderer.addClass(this.tooltipElement, 'custom-shape-calendar-custom-tooltip');
    this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.appCustomShapeCalendarTooltip));
    this.renderer.appendChild(document.body, this.tooltipElement);

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;

    let top = hostPos.bottom + 5;
    let left = hostPos.left;

    // Prevent vertical overflow
    if (top + tooltipPos.height > window.innerHeight) {
      top = hostPos.top - tooltipPos.height - 5;
    }

    // Prevent horizontal overflow
    if (left + tooltipPos.width > viewportWidth) {
      left = viewportWidth - tooltipPos.width - 5;
    } else if (left < 0) {
      left = 5;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }

  private getAllTooltips() {
    return document.querySelectorAll('.custom-shape-calendar-custom-tooltip');
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
