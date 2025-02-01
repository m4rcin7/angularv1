import { Component } from '@angular/core';
// import { PostService } from '';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  searchQuery = '';
  topPosts: any[] = [];

  constructor(private postService: PostService) {
    this.topPosts = this.postService.getTopPosts();
  }
}
