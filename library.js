// Sample book data
let books = [
    {
        id: 1,
        title: "Operating System Concepts",
        author: "Abraham Silberschatz, Peter B. Galvin, Greg Gagne",
        isbn: "9781118063330",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 2,
        title: "Database System Concepts",
        author: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan",
        isbn: "9780078022159",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 3,
        title: "Managerial Economics and Financial Analysis",
        author: "V. Raghunathan",
        isbn: "9788120342018",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 4,
        title: "Probability and Statistics for Engineers",
        author: "Ronald E. Walpole, Raymond H. Myers, Sharon L. Myers",
        isbn: "9780131877115",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 5,
        title: "Software Engineering: A Practitioner's Approach",
        author: "Roger S. Pressman",
        isbn: "9780078022128",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 6,
        title: "Computer Organization and Architecture",
        author: "William Stallings",
        isbn: "9780134101613",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 7,
        title: "Data Structures and Algorithms in Java",
        author: "Robert Lafore",
        isbn: "9780672324536",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 8,
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        isbn: "9780132126953",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 9,
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell, Peter Norvig",
        isbn: "9780134610993",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 10,
        title: "Digital Design and Computer Architecture",
        author: "David Money Harris, Sarah L. Harris",
        isbn: "9780123944245",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 11,
        title: "Computer Graphics: Principles and Practice",
        author: "John F. Hughes, Andries van Dam, Morgan McGuire",
        isbn: "9780321399526",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 12,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest",
        isbn: "9780262033848",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 13,
        title: "Computer Security: Principles and Practice",
        author: "William Stallings, Lawrie Brown",
        isbn: "9780133773927",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 14,
        title: "Distributed Systems: Principles and Paradigms",
        author: "Andrew S. Tanenbaum, Maarten van Steen",
        isbn: "9780132392273",
        available: true,
        borrowedBy: null,
        dueDate: null
    },
    {
        id: 15,
        title: "Engineering Mathematics",
        author: "K.A. Stroud, Dexter J. Booth",
        isbn: "9780831134526",
        available: true,
        borrowedBy: null,
        dueDate: null
    }
];

// Display all books
function displayBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-4';
        bookCard.innerHTML = `
            <div class="book-card">
                <h4>${book.title}</h4>
                <p>Author: ${book.author}</p>
                <p>ISBN: ${book.isbn}</p>
                <p class="availability ${book.available ? 'available' : 'unavailable'}">
                    ${book.available ? 'Available' : 'Unavailable'}
                </p>
                ${book.available ? 
                    `<button class="btn btn-primary" onclick="borrowBook(${book.id})">Borrow</button>` : 
                    `<p>Borrowed by: ${book.borrowedBy}</p>
                     <p>Due date: ${book.dueDate}</p>`
                }
            </div>
        `;
        booksList.appendChild(bookCard);
    });
}

// Search books
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.isbn.includes(searchInput)
    );

    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-4';
        bookCard.innerHTML = `
            <div class="book-card">
                <h4>${book.title}</h4>
                <p>Author: ${book.author}</p>
                <p>ISBN: ${book.isbn}</p>
                <p class="availability ${book.available ? 'available' : 'unavailable'}">
                    ${book.available ? 'Available' : 'Unavailable'}
                </p>
                ${book.available ? 
                    `<button class="btn btn-primary" onclick="borrowBook(${book.id})">Borrow</button>` : 
                    `<p>Borrowed by: ${book.borrowedBy}</p>
                     <p>Due date: ${book.dueDate}</p>`
                }
            </div>
        `;
        booksList.appendChild(bookCard);
    });
}

// Borrow a book
function borrowBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && book.available) {
        const borrowerName = prompt("Enter your name:");
        if (borrowerName) {
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 3); // 3 days from now
            
            book.available = false;
            book.borrowedBy = borrowerName;
            book.dueDate = dueDate.toISOString().split('T')[0];
            
            displayBooks();
            displayBorrowedBooks();
            checkDueDates();
        }
    }
}

// Display borrowed books
function displayBorrowedBooks() {
    const borrowedBooks = document.getElementById('borrowedBooks');
    borrowedBooks.innerHTML = '';

    const borrowed = books.filter(book => !book.available);
    borrowed.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-4';
        bookCard.innerHTML = `
            <div class="book-card">
                <h4>${book.title}</h4>
                <p>Borrowed by: ${book.borrowedBy}</p>
                <p>Due date: ${book.dueDate}</p>
                <button class="btn btn-danger" onclick="returnBook(${book.id})">Return</button>
            </div>
        `;
        borrowedBooks.appendChild(bookCard);
    });
}

// Return a book
function returnBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.available = true;
        book.borrowedBy = null;
        book.dueDate = null;
        displayBooks();
        displayBorrowedBooks();
    }
}

// Check due dates and show reminders
function checkDueDates() {
    const today = new Date();
    books.forEach(book => {
        if (!book.available && book.dueDate) {
            const dueDate = new Date(book.dueDate);
            const daysRemaining = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
            
            if (daysRemaining <= 0) {
                alert(`Book "${book.title}" is overdue! Please return it immediately.`);
            } else if (daysRemaining <= 3) {
                alert(`Reminder: Book "${book.title}" is due in ${daysRemaining} days.`);
            }
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
    displayBorrowedBooks();
    checkDueDates();
    
    // Check due dates every hour
    setInterval(checkDueDates, 3600000);
}); 