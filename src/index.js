"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajax_1 = require("rxjs/ajax");
const data$ = ajax_1.ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');
data$.subscribe((value) => console.log('data$ value', value));
const dataGitLab$ = ajax_1.ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');
dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));
//# sourceMappingURL=index.js.map