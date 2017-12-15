module.exports = {
    shelf: (req, res) => {
        const db = req.app.get('db');//to go and get the database because it is not connected in this file.

        db.get_shelf([req.params.id]).then(inventory => {
            let maxBins = 5;
            let bins = [];
            for (var i = 0; i < maxBins; i++) {
                if (inventory[i]) {
                    bins[inventory[i].bin - 1] = inventory[i];
                } else if (!bins[i]) {
                    bins[i] = null;
                }
            }

            res.status(200).send(bins)
        })

    },
    getBin: (req, res) => {
        const db = req.app.get('db');

        db.get_bin([req.params.id[0], req.params.id[1]]).then(inventory => {
            if (inventory.length > 0) {
                res.status(200).send(inventory[0])
            } else {
                res.status(200).send(null)
            }
        })
    },
    updateBin: (req, res) => {
        const db = req.app.get('db');
        const { name, price } = req.body;
        console.log(req.body)
        db.update_bin([req.params.id[0], req.params.id[1], name, price]).then(inventory => {
            res.send(inventory[0])
        })
    },
    deleteBin: (req, res) => {
        const db = req.app.get('db');
        db.delete_bin([req.params.id[0], req.params.id[1]]).then(inventory => {
            res.status(200).send('Deleted!')
        })
    },
    addBin: (req,res)=>{
        const db = req.app.get('db');
        db.get_bin([req.params.id[0], req.params.id[1]]).then(inventory => {
            if(inventory.length===0){
                db.add_bin([req.body.name, req.params.id[0], req.params.id[1],
                req.body.image, req.body.price])
                .then(newBin => {
                    res.status(200).send(newBin);
                })
            }else{
                res.status(200).send('Bin already taken!');
            }
        })
    }
}