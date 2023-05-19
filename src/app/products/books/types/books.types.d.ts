export interface BooksBuyLinks{
    name: string,
    url: string,
}
export interface BooksItem{
    id: string;
    author: string;
    bookImg: string;
    publisher: string;
    title: string;
    description: string;
    buyLinks: BooksBuyLinks[];
    rank: string;
    createdDate: string;
    price: string;
}
export interface BestSellerList{
    id: string;
    bestSeller: string;
    books: BooksItem[];
}