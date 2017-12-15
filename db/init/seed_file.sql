DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory(
    id serial primary key,
    name varchar(240),
    shelf varchar(240),
    bin integer,
    image varchar(240),
    price decimal(18,2)
);

INSERT INTO inventory (name, shelf, bin, image, price)
VALUES ('item A1', 'A', 1, 'http://lorempixel.com/200/200/business/', 6.00),
('item A2', 'A', 2,'http://lorempixel.com/200/200/business/', 3.00),
('item A3', 'A', 3,'http://lorempixel.com/200/200/business/', 4.00),

('item B1', 'B', 1,'http://lorempixel.com/200/200/business/', 14.00),
('item B2', 'B', 2,'http://lorempixel.com/200/200/business/', 24.00),

('item C1', 'C', 1,'http://lorempixel.com/200/200/business/', 2.00),
('item C2', 'C', 2,'http://lorempixel.com/200/200/business/', 3.00),
('item C3', 'C', 3,'http://lorempixel.com/200/200/business/', 6.00),
('item C4', 'C', 4,'http://lorempixel.com/200/200/business/', 56.00),
('item C5', 'C', 5,'http://lorempixel.com/200/200/business/', 23.00),

('item D1', 'D', 1,'http://lorempixel.com/200/200/business/', 12.00),
('item D2', 'D', 2,'http://lorempixel.com/200/200/business/', 3.00),
('item D3', 'D', 3,'http://lorempixel.com/200/200/business/', 4.00);