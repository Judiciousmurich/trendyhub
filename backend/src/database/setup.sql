-- Create the Users table
CREATE TABLE Users (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(100),
    Address VARCHAR(200)
);

-- Insert 10 records into the Users table
INSERT INTO Users (Name, Email, Password, Address)
VALUES
    ('John Doe', 'john.doe@example.com', 'password1', '123 Main St'),
    ('Jane Smith', 'jane.smith@example.com', 'password2', '456 Elm St'),
    ('Michael Johnson', 'michael.johnson@example.com', 'password3', '789 Oak Ave'),
    ('Emily Davis', 'emily.davis@example.com', 'password4', '321 Pine St'),
    ('David Wilson', 'david.wilson@example.com', 'password5', '654 Cedar Rd'),
    ('Olivia Taylor', 'olivia.taylor@example.com', 'password6', '987 Walnut Ln'),
    ('Daniel Anderson', 'daniel.anderson@example.com', 'password7', '135 Elmwood Dr'),
    ('Sophia Clark', 'sophia.clark@example.com', 'password8', '753 Oakwood Ct'),
    ('Ethan Lee', 'ethan.lee@example.com', 'password9', '246 Pinehurst Ave'),
    ('Ava Martinez', 'ava.martinez@example.com', 'password10', '579 Maple Rd');

-- Create the Products table
CREATE TABLE Products (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    Quantity INT,
    Category VARCHAR(50),
    Manufacturer VARCHAR(100)
);

-- Insert 10 records into the Products table
INSERT INTO Products (Name, Description, Price, Quantity, Category, Manufacturer)
VALUES
    ('Product 1', 'Description 1', 10.99, 20, 'Category A', 'Manufacturer A'),
    ('Product 2', 'Description 2', 19.99, 15, 'Category B', 'Manufacturer B'),
    ('Product 3', 'Description 3', 5.99, 30, 'Category A', 'Manufacturer C'),
    ('Product 4', 'Description 4', 8.49, 25, 'Category C', 'Manufacturer D'),
    ('Product 5', 'Description 5', 14.99, 12, 'Category B', 'Manufacturer E'),
    ('Product 6', 'Description 6', 7.99, 18, 'Category A', 'Manufacturer F'),
    ('Product 7', 'Description 7', 11.49, 22, 'Category B', 'Manufacturer G'),
    ('Product 8', 'Description 8', 9.99, 10, 'Category C', 'Manufacturer H'),
    ('Product 9', 'Description 9', 6.99, 28, 'Category A', 'Manufacturer I'),
    ('Product 10', 'Description 10', 12.99, 14, 'Category C', 'Manufacturer J');

-- Create the Orders table
CREATE TABLE Orders (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2)
);

-- Insert 10 records into the Orders table
INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)
VALUES
    (1, '2023-07-16', 50.99),
    (2, '2023-07-15', 100.50),
    (3, '2023-07-14', 75.25),
    (4, '2023-07-13', 30.49),
    (5, '2023-07-12', 45.99),
    (6, '2023-07-11', 20.00),
    (7, '2023-07-10', 65.75),
    (8, '2023-07-09', 15.99),
    (9, '2023-07-08', 40.25),
    (10, '2023-07-07', 90.00);

-- Create the OrderItems table
CREATE TABLE OrderItems (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    Price DECIMAL(10, 2)
);

-- Insert 10 records into the OrderItems table
INSERT INTO OrderItems (OrderID, ProductID, Quantity, Price)
VALUES
    (1, 1, 2, 10.99),
    (1, 2, 1, 19.99),
    (2, 3, 3, 5.99),
    (2, 4, 2, 8.49),
    (3, 5, 1, 14.99),
    (3, 6, 2, 7.99),
    (4, 7, 4, 11.49),
    (4, 8, 1, 9.99),
    (5, 9, 3, 6.99),
    (5, 10, 2, 12.99);

-- Create the Payments table
CREATE TABLE Payments (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    OrderID INT,
    PaymentDate DATE,
    PaymentMethod VARCHAR(50),
    Amount DECIMAL(10, 2)
);

-- Insert 10 records into the Payments table
INSERT INTO Payments (OrderID, PaymentDate, PaymentMethod, Amount)
VALUES
    (1, '2023-07-16', 'Credit Card', 50.99),
    (2, '2023-07-15', 'PayPal', 100.50),
    (3, '2023-07-14', 'Credit Card', 75.25),
    (4, '2023-07-13', 'PayPal', 30.49),
    (5, '2023-07-12', 'Credit Card', 45.99),
    (6, '2023-07-11', 'PayPal', 20.00),
    (7, '2023-07-10', 'Credit Card', 65.75),
    (8, '2023-07-09', 'PayPal', 15.99),
    (9, '2023-07-08', 'Credit Card', 40.25),
    (10, '2023-07-07', 'PayPal', 90.00);

-- Create the Categories table
CREATE TABLE Categories (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT
);

-- Insert 10 records into the Categories table
INSERT INTO Categories (Name, Description)
VALUES
    ('Category A', 'Description A'),
    ('Category B', 'Description B'),
    ('Category C', 'Description C'),
    ('Category D', 'Description D'),
    ('Category E', 'Description E'),
    ('Category F', 'Description F'),
    ('Category G', 'Description G'),
    ('Category H', 'Description H'),
    ('Category I', 'Description I'),
    ('Category J', 'Description J');
