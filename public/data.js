
// var name = document.getElementById();


function storeData(){
    const newData = {"name":"Maneesh Kumar","email":"maneeeshkr.123@gmail.com","phone":"9670246210","budget":"5000","destination":"Manali"}
        var fs = require('fs');
        fs.readFile('./data.json', 'utf-8', function (err, data) {
            if (err) throw err

            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.push(newData)

            console.log(arrayOfObjects)

            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                if (err) throw err
                console.log('Done!')
            })
        })
    }

storeData();
