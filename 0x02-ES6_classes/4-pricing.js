import Currency from './3-currency';

export default class Pricing {
  static raiseError(key) {
    if (key === 'amount') { throw new Error('Amount must be a number'); } else if (key === 'currency') { throw new Error('Currency must be a Currency'); }
  }

  constructor(amount, currency) {
    this._amount = (typeof (amount) === 'number') ? amount : Pricing.raiseError('amount');
    this._currency = (currency instanceof Currency) ? currency : Pricing.raiseError('currency');
  }

  get amount() { return this._amount; }

  set amount(val) { this._amount = (typeof (val) === 'number') ? val : Pricing.raiseError('amount'); }

  get currency() { return this._currency; }

  set currency(val) { this._currency = (val instanceof Currency) ? val : Pricing.raiseError('currency'); }

  displayFullPrice() { return `${this._amount} ${this._currency.displayFullCurrency()}`; }

  static convertPrice(amount, conversionRate) { return amount * conversionRate; }
}
