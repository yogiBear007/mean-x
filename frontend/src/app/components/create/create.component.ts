import { IssueService } from './../../services/issue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
