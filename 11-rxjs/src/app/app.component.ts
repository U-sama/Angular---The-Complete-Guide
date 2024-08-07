import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable, subscribeOn, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCounts$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue:0})
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() + 2)

  // Custom Observer
  customeInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    // subscriber.error();
    const interval = setInterval(()=>{
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log("Emitting new value....");
      subscriber.next({message:"New value..."});
      timesExecuted ++;
    },2000);
  })

  private destroyRef = inject(DestroyRef)

  constructor(){
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`)
    // })


  }
  ngOnInit(): void {
    // using signals to mimic wht interval observable make
    // setInterval(() => {
    //     this.interval.update(prevIntervalNum => prevIntervalNum + 1);
    //   }
    //   , 1000);

    // const subscription = interval(1000)
    //                       .pipe(map((val) => val * 2))
    //                       .subscribe({next:(val) => console.log(val)});
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // })

    this.customeInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("Completed!!"),
      error: (err) => console.log(err)
    });

    const subscription = this.clickCounts$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times.`)
    });
    this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      })
  }

  onClick(){
    this.clickCount.update(prevCount => prevCount + 1);
  }


}
