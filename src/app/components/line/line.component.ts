import { Component, inject, Input, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { LineRequestDto } from '../../models/line-dto';
import { LineService } from '../../services/line.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line',
  imports: [CommonModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent implements OnChanges{
  @Input() cityIdFrom=0
  @Input() cityIdTo=0
  loading=false
  lines:any=[]
  lineService=inject(LineService)
  ngOnChanges(changes: SimpleChanges): void {
      if(this.cityIdFrom!=0 && this.cityIdTo!=0){
        this.loading=true
        this.lineService.getLineByCityFromTo(this.cityIdFrom,this.cityIdTo).subscribe({
          next:(data)=>{
            this.lines=data
            
            this.loading=false
          },
          error:(err)=>{
            console.log(err)
          }
        })
      }
  }
}
