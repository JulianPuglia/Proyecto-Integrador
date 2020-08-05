module.exports = {
    'index' : (req, res) => {
        res.render('index', { title: 'SoundPower' })
    },
    'productCart' : (req, res) => {
        res.render('productCart')
    }
}
