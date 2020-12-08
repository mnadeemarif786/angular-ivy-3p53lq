import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    _btnLable: string = '';

    @Input()
    set btnLable(value) {
      this._btnLable = value;
    }

  	closeResult: string;
  	constructor(private modalService: NgbModal) {}

  	ngOnInit(): void {
  	}

    openVerticallyCentered(content) {
    	this.modalService.open(content, { centered: true, windowClass: 'setClass' });
  	}

}
