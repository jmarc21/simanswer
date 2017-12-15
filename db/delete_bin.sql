DELETE FROM inventory 
where shelf = $1 and bin = $2;