# AngularDomQueries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

It has been updated to Angular 11 as of late March 2021.

## References

* [Angular 9/8 DOM Queries: ViewChild and ViewChildren Example](https://www.techiediaries.com/angular-dom-queries-viewchild/)
* [Angular Material Typography](https://material.angular.io/guide/typography)

## Important Changes

One of the biggest challengers was how DOM change detection totally blew up the code as written in the article.

The solution was found in a [video](https://angular.io/errors/NG0100) within the Angular website that offered an explanation to why changing the DOM
inside the ngAfterViewInit event as recommended in the article without extra code was a bad idea.

In my code, the solution was to use one of the following two techniques:

1. Put all DOM-changing code inside a `Promise().resolve().then( () => changeDom() )` call.
1. Inject an instance of ChangeDetectorRef via the constructor and call its `detectChanges()` method at the bottom of the ngAfterViewInit event.
