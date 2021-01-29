import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createTag(){
    this.router.navigate(['admin/tag']);
  }

}
