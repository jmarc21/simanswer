UPDATE inventory 
SET name = $3, price = $4
where shelf = $1 and bin = $2
returning *;