import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  	closeResult: string;
  	constructor(private modalService: NgbModal) {}

  	ngOnInit(): void {
  	}

    openVerticallyCentered(content) {
    	this.modalService.open(content, { centered: true, windowClass: 'setClass' });
  	}

}
