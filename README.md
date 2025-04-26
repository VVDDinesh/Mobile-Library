<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering Library Management System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="library.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="fas fa-book-open"></i> Engineering Library
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#books"><i class="fas fa-book"></i> Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#borrowed"><i class="fas fa-clock"></i> Borrowed</a>
                    </li>
                    <li class="nav-item">
                        <div class="user-info"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logout-btn" onclick="handleLogout()">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1>Welcome to Engineering Library</h1>
                    <p class="lead">Access the best engineering books and resources</p>
                    <div class="search-container">
                        <input type="text" id="searchInput" class="form-control" placeholder="Search by title, author, or ISBN">
                        <button class="btn btn-primary" onclick="searchBooks()">
                            <i class="fas fa-search"></i> Search
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="https://img.icons8.com/fluency/240/000000/books.png" alt="Library Books" class="img-fluid">
                </div>
            </div>
        </div>
    </header>

    <div class="container mt-5">
        <section id="books" class="mb-5">
            <div class="section-header">
                <h2><i class="fas fa-book"></i> Available Books</h2>
                <p>Browse our collection of engineering books</p>
            </div>
            <div id="booksList" class="row"></div>
        </section>

        <section id="borrowed" class="mb-5">
            <div class="section-header">
                <h2><i class="fas fa-clock"></i> Borrowed Books</h2>
                <p>Track your borrowed books and due dates</p>
            </div>
            <div id="borrowedBooks" class="row"></div>
        </section>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>Engineering Library provides access to a wide range of technical books and resources for students and professionals.</p>
                </div>
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#"><i class="fas fa-book"></i> Books</a></li>
                        <li><a href="#"><i class="fas fa-info-circle"></i> About</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact Developer</h5>
                    <div class="developer-info">
                        <p class="developer-name">VVDDinesh</p>
                        <ul class="list-unstyled contact-links">
                            <li>
                                <a href="mailto:vvddinesh10@gmail.com">
                                    <i class="fas fa-envelope"></i> vvddinesh10@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919640518985">
                                    <i class="fas fa-phone"></i> +91 9640518985
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <p class="mb-0">&copy; 2024 Engineering Library. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="auth.js"></script>
    <script src="library.js"></script>
</body>
</html> 
