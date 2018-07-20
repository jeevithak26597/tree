import { Component, OnInit,AfterViewChecked,OnDestroy } from '@angular/core';
import {NodeService} from './node.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: TreeNode[];
  constructor(private nodeService: NodeService) {

  }
  ngOnInit() {
    this.nodeService.getUsers().then(users => {this.users = users;});
  }

  nodeSelect(event) {
    console.log(event.node.data, ',', event.node.label);
  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }
  title = 'app';
}
