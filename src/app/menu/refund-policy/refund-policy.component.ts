import { Component } from '@angular/core';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.css']
})
export class RefundPolicyComponent {
  displayedColumns: string[] = ['percentage', 'time'];
  refundRules = [
    { percentage: '90%', time: 'Até 31 dias do início da viagem' },
    { percentage: '80%', time: 'De 21 dias do início da viagem' },
    { percentage: '0%', time: 'Menos de 20 dias do início da viagem' }
  ];
}
