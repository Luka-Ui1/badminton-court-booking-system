CREATE TABLE courts (
    id INT IDENTITY(1,1) PRIMARY KEY,
    court_name NVARCHAR(100) NOT NULL,
    status NVARCHAR(20) NOT NULL DEFAULT 'available'
);

CREATE TABLE bookings (
    id INT IDENTITY(1,1) PRIMARY KEY,
    customer_name NVARCHAR(100) NOT NULL,
    court_id INT NOT NULL,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status NVARCHAR(20) NOT NULL DEFAULT 'booked',

    CONSTRAINT FK_bookings_courts
        FOREIGN KEY (court_id)
        REFERENCES courts(id)
);
