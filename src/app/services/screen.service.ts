import { ScreenSize } from '../models/screen-size';
import { ReplaySubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public margin = "64px";
  public isMobile = false;

  constructor() {
    window.addEventListener("resize", this._setScreenWidth.bind(this));
    this._setScreenWidth();
  }

  private _screen = new ReplaySubject<ScreenSize>(1);
  private _memScreen: ScreenSize;

  private _setScreenWidth() {
    const width = window.innerWidth;
    if (this._isSizeAttributed(1600, width, ScreenSize.XL)) return;
    if (this._isSizeAttributed(1200, width, ScreenSize.L)) return;
    if (this._isSizeAttributed(800, width, ScreenSize.M)) return;
    if (this._isSizeAttributed(450, width, ScreenSize.S)) return;
    if (this._isSizeAttributed(0, width, ScreenSize.XS)) return;
    throw new Error ("Error no size attributed with width : " + width);
  }

  private _isSizeAttributed(maxWidth: number, width: number, size: ScreenSize): boolean {    
    if (width <= maxWidth) return false;
    if (this._memScreen == size) return true;
    this._memScreen = size;
    this._screen.next(size);
    this.margin = size > ScreenSize.S ? "64px" : "32px";
    this.isMobile = size < ScreenSize.M;
    return true;
  }

  public getScreen(): Observable<ScreenSize> {
    return this._screen.asObservable();
  }

}
