import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookList } from './book-list';
import { Book } from '../../../../shared/models/book';

describe('BookList', () => {
  let component: BookList;
  let fixture: ComponentFixture<BookList>;


  const mockBooks: Book[]=[
    {
      title: 'Clean Code',
      authorName: 'Robert C. Martin',
      genre: 'Software Engineering',
      price: 29.99,
      published: '2008-08-01',
      isbn: '978-0132350884',
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookList],
    }).compileComponents();

    fixture = TestBed.createComponent(BookList);
    component = fixture.componentInstance;
  });



  // Test cas 1 : creation du composant
  // verification que les composant peuvent etre instancié sans erreurs

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });


  // Test cas 2 : basic input

  it("Should accept books input", async()=>{
    fixture.componentRef.setInput('books', mockBooks);
    await fixture.whenStable();
    expect(component.books()).toEqual(mockBooks);

  })


  // Test cas 3 : Output event Emission
  it("should emit the selected book", async () => {
    let emittedBook: Book |undefined;
    component.book.subscribe((book) => (emittedBook = book));
    component.selectBook(mockBooks[0]);
    await fixture.whenStable();
    expect(emittedBook).toEqual(mockBooks[0]);
  })




});
