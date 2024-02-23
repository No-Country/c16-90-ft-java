-- Creating the database
CREATE DATABASE IF NOT EXISTS BookJourney;
USE BookJourney;

-- Creating Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    profile_photo VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Roles en el User. 

-- Creating Books table
CREATE TABLE Books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    book_genre VARCHAR(255),
    num_pages INT,
    rating FLOAT
);

-- Creating Reviews table
CREATE TABLE Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    book_id INT,
    comment TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
);

INSERT INTO Books (title, author, description, image_url, book_genre, num_pages, rating) VALUES 
	   ('The Hunger Games', 'Suzanne Collins', 'Winning will make you famous. Losing means certain death. The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory. When 16-year-old Katnisss young sister, Prim, is selected as District 12s female representative, Katniss volunteers to take her place. She and her male counterpart Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives. , she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.', 'https://images.gr-assets.com/books/1447303603l/2767052.jpg', 'Young Adult,Fiction,Science Fiction,Dystopia,Fantasy', 374, 4.33),
       ('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 'There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop. As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice. His fate depends on them alll. (back cover)', 'https://images.gr-assets.com/books/1255614970l/2.jpg', 'Fantasy,Young Adult,Fiction', 870, 4.48),
       ('To Kill a Mockingbird', 'Harper Lee', 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.', 'https://images.gr-assets.com/books/1361975680l/2657.jpg', 'Classics,Fiction,Historical,Historical Fiction,Academic,School', 324, 4.27),
       ('Pride and Prejudice', 'Jane Austen', 'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen''s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.', 'https://images.gr-assets.com/books/1320399351l/1885.jpg', 'Classics,Fiction,Romance', 279, 4.25),
       ('Twilight', 'Stephenie Meyer', 'About three things I was absolutely positive. First, Edward was a vampire. Second, there was a part of him—and I didn''t know how dominant that part might be—that thirsted for my blood. And third, I was unconditionally and irrevocably in love with him. In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.', 'https://images.gr-assets.com/books/1361039443l/41865.jpg', 'Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction', 498, 3.58),
       ('The Book Thief', 'Markus Zusak', 'Trying to make sense of the horrors of World War II, Death relates the story of Liesel--a young German girl whose book-stealing and story-telling talents help sustain her family and the Jewish man they are hiding, as well as their neighbors.', 'https://images.gr-assets.com/books/1522157426l/19063.jpg', 'Historical,Historical Fiction,Fiction,Young Adult', 552, 4.36),
       ('The Chronicles of Narnia', 'C.S. Lewis', 'Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia. For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronlogical order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.', 'https://images.gr-assets.com/books/1449868701l/11127.jpg', 'Fantasy,Classics,Fiction,Young Adult,Childrens', 767, 4.25),
       ('Animal Farm', 'George Orwell', 'A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.', 'https://images.gr-assets.com/books/1424037542l/7613.jpg', 'Classics,Fiction,Science Fiction,Dystopia,Fantasy,Literature,Academic,School,Politics,Novels,Read For School', 122, 3.9),
       ('Gone with the Wind', 'Margaret Mitchell', 'Gone with the Wind is a novel written by Margaret Mitchell, first published in 1936. The story is set in Clayton County, Georgia, and Atlanta during the American Civil War and Reconstruction era. It depicts the struggles of young Scarlett O''Hara, the daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman''s March to the Sea. A historical novel, the story is a Bildungsroman or coming-of-age story, with the title taken from a poem written by Ernest Dowson.', 'https://images.gr-assets.com/books/1328025229l/18405.jpg', 'Classics,Historical,Historical Fiction,Fiction,Romance', 1037, 4.29),
       ('J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings', 'J.R.R. Tolkien', 'This four-volume, boxed set contains J.R.R. Tolkien''s epic masterworks The Hobbit and the three volumes of The Lord of the Rings (The Fellowship of the Ring, The Two Towers, and The Return of the King).', 'https://images.gr-assets.com/books/1346072396l/30.jpg', 'Fantasy,Fiction,Classics', 1728, 4.59),
       ('The Fault in Our Stars', 'John Green', 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel''s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green''s most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.', 'https://images.gr-assets.com/books/1360206420l/11870085.jpg', 'Young Adult,Fiction,Romance,Contemporary', 313, 4.24);

