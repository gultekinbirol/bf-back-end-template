let cats = [
    {
        id: '1',
        name: 'Smelly',
        age: 1
    },
    {
        id: '2',
        name: 'Puffy',
        age: 2
    },
    {
        id: '3',
        name: 'BooBoo',
        age: 3
    },
    {
        id: '4',
        name: 'Boobson',
        age: 4
    }
];

const catControllers = {
    getCats: (req, res) => {
        res.status(200).json(cats);
    },
    getCatById: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            res.status(200).json(catExist);
        } else {
            res.status(404).json({
                message: `Cat with the id ${id} does not exist`
            });
        }
    },
    addCat: (req, res) => {
        const { name, age } = req.body;
        if (!name || !age) {
            res.status(400).json({
                message: `You have to provide name and the age of a cat`
            });
        }
        const newCat = { id: cats.length + 1, name, age };
        cats.push(newCat);
        res.status(201).json(newCat);
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age } = req.body;

        if (!name || !age) {
            res.status(400).json({
                message: `You have to provide name and the age of a cat`
            });
        }

        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            catExist.name = name;
            catExist.age = age;
            return res.status(200).json(catExist);
        } else {
            return res
                .status(404)
                .json({ message: `Cat with id ${id} not found` });
        }
    },
    deleteCat: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            cats = cats.filter((cat) => cat.id !== id);
            res.status(200).json({ message: `Cat with id ${id} was deleted` });
        } else {
            res.status(400).json({ message: `Cat with id ${id} not found` });
        }
    }
};

export default catControllers;
