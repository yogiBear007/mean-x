import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IssueService } from "./../../services/issue.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.formBuilder.group({
      title: ["", Validators.required],
      responsible: "",
      description: "",
      severity: ""
    });
  }

  ngOnInit() {}

  addIssue(title, responsible, description, severity) {
    this.issueService
      .addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate(["/list"]);
      });
  }
}
