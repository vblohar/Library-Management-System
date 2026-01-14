export enum BookStatus {
    AVALABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE',
    BORROWED = 'BORROWED',
    DAMAGED = 'DAMAGED',
    RESERVED = 'RESERVED',
    LOST = 'LOST',
    UNDER_MAINTENANCE = 'UNDER_MAINTENANCE'
 }

 export interface Book {
   id: number;
  title: string;
  isbn: string;
  description?: string;
  author: Author;
  category?: Category;
  publisher: string;
  publicationYear?: number;
  language: string;
  pageCount?: number;
  totalCopies: number;
  availableCopies: number;
  borrowedCopies: number;
  price?: number;
  location?: string;
  coverImageUrl?: string;
  status: BookStatus;
  createdAt: string;
  updatedAt?: string;
 }

 export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  bio?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  email?: string;
  nationality?: string;
  bookCount?: number;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  bookCount?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface BookSearchRequest {
  title?: string;
  authorName?: string;
  isbn?: string;
  category?: string;
  language?: string;
  publicationYear?: number;
  availableOnly?: boolean;
  page?: number;
  size?: number;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

