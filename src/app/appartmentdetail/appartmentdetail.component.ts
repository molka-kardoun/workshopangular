import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appartmentdetail',
  templateUrl: './appartmentdetail.component.html',
  styleUrls: ['./appartmentdetail.component.css']
})
export class AppartmentdetailComponent implements OnInit {
  apartmentId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apartmentId = this.route.snapshot.params['id'];
  }
}
