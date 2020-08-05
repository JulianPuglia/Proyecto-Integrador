const indexController = {
    'index' : (req, res) => {
        res.render('index', { title: 'SoundPower' })
    }
}

module.exports = indexController