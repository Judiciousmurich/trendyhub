-- Table for Users
CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at VARCHAR(255);
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


-- Create the Products table
CREATE TABLE Products (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    Quantity INT,
    Category VARCHAR(50), -- Store the category name directly
    Manufacturer VARCHAR(100)
);

-- Insert records into the Products table
INSERT INTO Products (Name, Description, Price, Quantity, Category, Manufacturer)
VALUES
    ('Smartwatch 2.0 LTE Wifi', 'Description for Smartwatch 2.0 LTE Wifi', 199.99, 50, 'Smartwatches', 'Manufacturer X'),
    ('Wireless Audio System Multiroom 360', 'Description for Wireless Audio System Multiroom 360', 299.99, 30, 'Wireless Audio Systems', 'Manufacturer Y'),
    ('Gore Wear C7', 'Description for Gore Wear C7', 159.99, 20, 'Cycling Apparel', 'Manufacturer Z'),
    ('White EliteBook Tablet 810', 'Description for White EliteBook Tablet 810', 899.99, 15, 'Tablets', 'Manufacturer W'),
    ('Beats', 'Description for Beats', 149.99, 25, 'Music Accessories', 'Manufacturer V'),
    ('Rocky Mountain', 'Description for Rocky Mountain', 1299.99, 10, 'Cycling Apparel', 'Manufacturer U'),
    ('Good Wear C7', 'Description for Gore Wear C7', 159.99, 20, 'Cycling Apparel', 'Manufacturer Z'),
    ('Audio System Multiroom 360', 'Description for Wireless Audio System Multiroom 360', 299.99, 30, 'Wireless Audio Systems', 'Manufacturer Y'),
    ('Beats', 'Description for Beats', 149.99, 25, 'Music Accessories', 'Manufacturer V');



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

-- Insert records into the Categories table
INSERT INTO Categories (Name, Description)
VALUES
    ('Earphones', 'Description for earphones category'),
    ('Headphones', 'Description for headphones category'),
    ('Laptops', 'Description for laptop category'),
    ('Speakers', 'Description for speakers category'),
    ('Gadgets', 'Description for gadgets category'),
    ('Gaming', 'Description for gaming category'),
    ('Smartwatches', 'Description for smartwatches category'),
    ('Wireless Audio Systems', 'Description for wireless audio systems category'),
    ('Cycling Apparel', 'Description for cycling apparel category'),
    ('Tablets', 'Description for tablets category'),
    ('Music Accessories', 'Description for music accessories category');

--cart table
    CREATE TABLE cart (
  cart_id INT PRIMARY KEY IDENTITY(1,1),
  id INT, -- If applicable, this column can be a foreign key referencing the users table.
  product_id INT NOT NULL,
  created_at DATETIME DEFAULT GETDATE(),
  FOREIGN KEY (id) REFERENCES users(id) -- Replace "users" with your actual users table name.
);

