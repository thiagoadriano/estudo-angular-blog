//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//route
import { RoutingModule } from './app.router';

//services
import { BlogService } from './providers/blog.service';

//components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostPageComponent,
    Error404PageComponent,
    HeaderComponent,
    PostCardComponent,
    PostsComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
