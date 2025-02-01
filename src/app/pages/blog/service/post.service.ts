import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts = [
    { title: 'Post 1', content: 'Treść pierwszego posta' },
    { title: 'Post 2', content: 'Treść drugiego posta' },
    { title: 'Post 3', content: 'Treść trzeciego posta' },
    { title: 'Post 4', content: 'Treść czwartego posta' },
    { title: 'Post 5', content: 'Treść piątego posta' },
    { title: 'Post 6', content: 'Treść szóstego posta' },
  ];

  getPosts() {
    return this.posts;
  }

  getTopPosts() {
    return this.posts.slice(0, 5);
  }
}
