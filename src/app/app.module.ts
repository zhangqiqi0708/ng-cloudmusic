import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { RouterModule,Routes } from '@angular/router';

// ng-zorro-antd
import { NzModalModule } from 'ng-zorro-antd/modal';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HeaderComponent } from './component/header/header.component';
import { AudioPlayingComponent } from './component/audio-playing/audio-playing.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

const appRoutes:Routes = [
  {
    path:"main",component:MainComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AudioPlayingComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    NzModalModule,
  ],
  providers: [
    /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
