function index(req, res) {
    res.send('slash');
}

function hello(req, res) {
    const name = req.params.name;
    res.send(`hello ${name}`);
}

module.exports = {
    index,
    hello
};