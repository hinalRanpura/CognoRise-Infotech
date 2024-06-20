import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_convertor';

  @ViewChild('amount', { static: true }) amount!: ElementRef;
  @ViewChild('formCurrency', { static: true }) formCurrency!: ElementRef;
  @ViewChild('toCurrency', { static: true }) toCurrency!: ElementRef;
  @ViewChild('result', { static: true }) result!: ElementRef;
  
  convertNow() {
    let amountValue = parseInt(this.amount.nativeElement.value);
    let formCurrencyValue = this.formCurrency.nativeElement.value;
    let toCurrencyValue = this.toCurrency.nativeElement.value;

    const myHeaders = new Headers();
    myHeaders.append("apikey", "YUa4TGp71fQUPkGrseBsowK54389J3dB");

    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow' as RequestRedirect,
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/fixer/convert?to=${toCurrencyValue}&from=${formCurrencyValue}&amount=${amountValue}`, requestOptions)
      .then(response => response.json())
      .then(json => {
        let q = json.result;
        this.result.nativeElement.innerHTML = q;
      })
      .catch(error => console.log('error', error));
  }
}
